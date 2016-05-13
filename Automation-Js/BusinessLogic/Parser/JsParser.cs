using System;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;
using BusinessLogic.Entity;
using BusinessLogic.Enum;
using BusinessLogic.Sheets;

namespace BusinessLogic.Parser {
    public class JsParser {
        public ErrorCollector ErrorCollector { get; private set; }

        /// <summary>
        ///     Add or modify JavaScript variable based on matched values from excel and text file.
        /// </summary>
        /// <param name="variableNames">Pass variable like "_var" if the whole is "_var[%lan][%i]"</param>
        /// <param name="variableArrayTemplate">Pass variable like "[%lan][%i]" if the whole is "_var[%lan][%i]"</param>
        /// <param name="translations">List of LanguageItems</param>
        /// <param name="dimension">It should be 1 or 2.</param>
        /// <param name="maxloopingUpperLimit">
        ///     maxloopingUpperLimit = -1 means use the default limit 50 or else this as a js array limit
        /// </param>
        /// <param name="processingRanges">Range to only process translations : {"5-10","13-15", "14-12"}</param>
        public void AppendNewLanguage(
            string[] variableNames,
            string variableArrayTemplate,
            List<LanguageItem> translations,
            int dimension,
            string[] processingRanges,
            int maxloopingUpperLimit = -1) {
            foreach (var processingRange in processingRanges) {
                var range = processingRange.Split('-'); // "5-10" , [0] = 5, [1]= 10
                var actualRange = new[] { int.Parse(range[0]), int.Parse(range[1]) }; // getting string range to int range
                AppendNewLanguage(variableNames, variableArrayTemplate, translations, dimension, actualRange, null, maxloopingUpperLimit);
            }
        }

        /// <summary>
        ///     Add or modify JavaScript variable based on matched values from excel and text file.
        /// </summary>
        /// <param name="variableNames">Pass variable like "_var" if the whole is "_var[%lan][%i]"</param>
        /// <param name="variableArrayTemplate">Pass variable like "[%lan][%i]" if the whole is "_var[%lan][%i]"</param>
        /// <param name="translations">List of LanguageItems</param>
        /// <param name="dimension">It should be 1 or 2.</param>
        /// <param name="maxloopingUpperLimit">
        ///     maxloopingUpperLimit = -1 means use the default limit 50 or else this as a js array limit
        /// </param>
        /// <param name="processingRange">
        ///     Range to only process translations : It should have at least 2 items. First one starting
        ///     and the next one ending range. Starts from 0.
        /// </param>
        /// <param name="skipingRange">
        ///     Range to skip translations : It should have at least 2 items . If given then these items
        ///     will not process even though in the processing range. Starts from 0.
        /// </param>
        public void AppendNewLanguage(
            string[] variableNames,
            string variableArrayTemplate,
            List<LanguageItem> translations,
            int dimension,
            int[] processingRange,
            int[] skipingRange = null,
            int maxloopingUpperLimit = -1) {
            foreach (var variable in variableNames) {
                for (var i = processingRange[0]; i <= processingRange[1]; i++) {
                    if (skipingRange == null || !(skipingRange[0] >= i && skipingRange[1] <= i)) {
                        var translation = translations[i];
                        AppendNewLanguage(variable, variableArrayTemplate, translation.English, translation.NewLanguage, dimension, maxloopingUpperLimit);
                    }
                }
                //ResetJsAppendLineNumber();
            }
        }

        /// <summary>
        ///     Add or modify JavaScript variable based on matched values from excel and text file.
        ///     Process items based given list of indexes.
        /// </summary>
        /// <param name="variableName">Pass variable like "_var" if the whole is "_var[%lan][%i]"</param>
        /// <param name="variableArrayTemplate">Pass variable like "[%lan][%i]" if the whole is "_var[%lan][%i]"</param>
        /// <param name="translations">List of LanguageItems</param>
        /// <param name="dimension">It should be 1 or 2.</param>
        /// <param name="maxloopingUpperLimit">
        ///     maxloopingUpperLimit = -1 means use the default limit 50 or else this as a js array limit
        /// </param>
        /// <param name="processingItemsIndexList">Contains list indexes to process in the translations.</param>
        public void AppendNewLanguage(
            string variableName,
            string variableArrayTemplate,
            List<LanguageItem> translations,
            int[] processingItemsIndexList,
            int dimension = 1,
            int maxloopingUpperLimit = -1) {
            foreach (var index in processingItemsIndexList) {
                var translation = translations[index];
                AppendNewLanguage(variableName, variableArrayTemplate, translation.English, translation.NewLanguage, dimension, maxloopingUpperLimit);
            }
        }

        /// <summary>
        ///     Add or modify JavaScript variable based on matched values from excel and text file.
        /// </summary>
        /// <param name="variableName">Pass variable like "_var" if the whole is "_var[%lan][%i]"</param>
        /// <param name="variableArrayTemplate">Pass variable like "[%lan][%i]" if the whole is "_var[%lan][%i]"</param>
        /// <param name="engString"></param>
        /// <param name="newLanguageValue"></param>
        /// <param name="dimension">It should be 1 or 2.</param>
        /// <param name="maxloopingUpperLimit">
        ///     maxloopingUpperLimit = -1 means use the default limit 50 or else this as a js array limit
        /// </param>
        public bool AppendNewLanguage(string variableName, string variableArrayTemplate, string engString, string newLanguageValue, int dimension = 1, int maxloopingUpperLimit = -1) {
            // pass "_var[%lan][%i][%j]" and get "_var[ES][1][5]"
            var templatedVariableName = variableName + variableArrayTemplate; // "_var[%lan][%i]"
            var newLanguageExactVariableName = GetExactVariableNameForNewLanguage(templatedVariableName, engString, dimension, maxloopingUpperLimit);
            if (newLanguageExactVariableName != null) {
                var variableLineNumber = GetExactVariableLineNumberInJs(newLanguageExactVariableName);
                return JsInsertNewLineAt(variableName, newLanguageExactVariableName, newLanguageValue, variableLineNumber);
            }
            return false;
        }

        /// <summary>
        /// </summary>
        /// <param name="newExactVariableWithoutSquare">
        ///     Pass "_var" from "_var[EN][%i][%j]".
        ///     Pass "_var" from "_var[EN][%i][%j]".
        /// </param>
        /// <param name="newExactLanguageVariableName">
        ///     Pass "_var[NewLan][%i][%j]".
        /// </param>
        /// <param name="languageValue"></param>
        /// <param name="modifyingLineNumber">
        ///     If this one is passed then that line code will be modified. Should only be used when
        ///     variable already exist in the js file.
        /// </param>
        /// <returns>Return true if js line is appended.</returns>
        private bool JsInsertNewLineAt(string newExactVariableWithoutSquare, string newExactLanguageVariableName, string languageValue, int modifyingLineNumber = -1) {
            var jsNewLine = string.Format("{0} = \"{1}\";", newExactLanguageVariableName, languageValue);
            if (modifyingLineNumber > -1) {
                JsLines[modifyingLineNumber] = jsNewLine;
                return true;
            }
            var newLine = GetNewJsLine(newExactVariableWithoutSquare);
            if (newLine > -1) {
                JsLines.Insert(newLine++, jsNewLine);
                _jsLastAppendedLineNumber = newLine;
                return true;
            }
            return false;
        }

        /// <summary>
        ///     Is js variable value same as the expected value.
        ///     (i.e. use this GetExactVariableValueFromJs() function to get the js value)
        /// </summary>
        /// <param name="jsValue"></param>
        /// <param name="expectedValue"></param>
        /// <returns>Return true if js value is same as the expectedValue.</returns>
        private bool IsJsVariableValueSameAs(string jsValue, string expectedValue) {
            return string.Equals(jsValue, expectedValue);
        }

        #region Getting exact variable name from templated variable name like "_var[%lan][%i][%j]" to _var[ES][1][5]

        /// <summary>
        ///     Get exact variable for "new language" name from templated variable given "_var[%lan][%1][%5]"
        /// </summary>
        /// <param name="templatedVariableName">Example : _var[%lan][%i][%j] and returns _var[ES][1][5]</param>
        /// <param name="expectedEnglishLanguageValue">Pass expected English language value.</param>
        /// <param name="dimension">Pass 1 or 2. 1 changes %i , 2 changes %i,%j in the variable.</param>
        /// <param name="maxloopingUpperLimit">
        ///     maxloopingUpperLimit = -1 get the default upper loop running value 50.
        /// </param>
        /// <returns>
        ///     Pass a variable like "_var[%lan][%i][%j]" then  "_var[NEWLANG][1][5]" will be returned based on which index
        ///     matched.
        /// </returns>
        private string GetExactVariableNameForNewLanguage(string templatedVariableName, string expectedEnglishLanguageValue, int dimension, int maxloopingUpperLimit = -1) {
            var englishTemplatedVariableName = templatedVariableName.Replace("%lan", "EN");
            var otherLangTemplatedVariableName = templatedVariableName.Replace("%lan", Language);
            if (maxloopingUpperLimit == -1) {
                maxloopingUpperLimit = _loopingUpperLimit;
            }
            if (dimension == 2) {
                for (var i = 1; i <= maxloopingUpperLimit; i++) {
                    for (var j = 1; j <= maxloopingUpperLimit; j++) {
                        // extactVariableNameInEnglish = "_var[EN][1][5]";
                        var extactVariableNameInEnglish = TranslateTemplatedVariableNameToExact(englishTemplatedVariableName, i, j);
                        var jsValue = GetExactVariableValueFromJs(extactVariableNameInEnglish);
                        var isExpectedValueMatchedWithCurrentVariable = IsJsVariableValueSameAs(jsValue, expectedEnglishLanguageValue);

                        if (isExpectedValueMatchedWithCurrentVariable) {
                            //passing "_var[%lan][%i][%j]" and getting "_var[ES][1][5]"
                            return TranslateTemplatedVariableNameToExact(otherLangTemplatedVariableName, i, j);
                        }
                    }
                }
            } else {
                // dimension  1
                for (var i = 1; i <= maxloopingUpperLimit; i++) {
                    // extactVariableNameInEnglish = "_var[EN][1][5]";
                    var extactVariableNameInEnglish = TranslateTemplatedVariableNameToExact(englishTemplatedVariableName, i);
                    var jsValue = GetExactVariableValueFromJs(extactVariableNameInEnglish);
                    var isExpectedValueMatchedWithCurrentVariable = IsJsVariableValueSameAs(jsValue, expectedEnglishLanguageValue);

                    if (isExpectedValueMatchedWithCurrentVariable) {
                        //passing "_var[%lan][%i][%j]" and getting "_var[ES][1][5]"
                        return TranslateTemplatedVariableNameToExact(otherLangTemplatedVariableName, i);
                    }
                }
            }
            // passing "_var[EN][%i][%j]" and getting "_var[EN][1][5]";
            ErrorCollector.Add("Can't add language", expectedEnglishLanguageValue, templatedVariableName, ErrorTypeEnum.Medium);
            return null;
        }

        #endregion

        /// <summary>
        ///     "_var[ES][%i][%j]" to "_var[ES][index1][index2]"
        /// </summary>
        private string TranslateTemplatedVariableNameToExact(string templatedVariableName, int index1 = -1, int index2 = -1) {
            if (index2 != -1) {
                var newVar = templatedVariableName.Replace("%j", index2.ToString());
                newVar = newVar.Replace("%i", index1.ToString());
                return newVar;
            }
            if (index1 != -1) {
                var newVar = templatedVariableName.Replace("%i", index1.ToString());
                return newVar.Trim();
            }
            return templatedVariableName;
        }

        /// <summary>
        ///     Get the new line number where new language of "js variable" should be appended in js.
        ///     First, it detects if the language already entered programmatically then only returns the last line number.
        ///     If language is found but not programmatically pushed then it will insert two new lines and returns last line
        ///     number.
        ///     Note : if not variable not found then returns -1.
        /// </summary>
        /// <param name="newExactVariableWithoutSquare">If exact variable name is "_var[EN][1][5]" then pass "_var"</param>
        /// <returns>
        ///     Returns an integer value where the new line number language should be appended in js, if not found then
        ///     returns -1.
        /// </returns>
        private int GetNewJsLine(string newExactVariableWithoutSquare) {
            if (_jsLastAppendedLineNumber == -1 || (_lastProcessedVariable != newExactVariableWithoutSquare)) {
                var lastFound = -1;
                for (var i = 0; i < JsLines.Count; i++) {
                    var line = JsLines[i].Trim();
                    if (line.StartsWith(newExactVariableWithoutSquare)) {
                        lastFound = i;
                    }
                }
                if (lastFound > -1) {
                    JsLines.Insert(++lastFound, "");
                    JsLines.Insert(++lastFound, "");
                    ++lastFound;
                    _jsLastAppendedLineNumber = lastFound;
                    _lastProcessedVariable = newExactVariableWithoutSquare;
                }
            }
            return _jsLastAppendedLineNumber;
        }

        /// <summary>
        /// Remove expected gaps for specific variable.
        /// </summary>
        /// <param name="variableNames">List of variable names</param>
        /// <param name="arrayTemplatedFormat">
        /// pass only up to "[%lan]", not other language.
        /// (i.e. "_var[%lan][%i][%j]" pass only "[%lan]",
        ///       "_var[1][%lan][%i]" pass only "[1][%lan]")
        /// </param>
        /// <param name="dimension">dimension value 1 or 2</param>
        public void RemoveUnExpectedLineGaps(string[] variableNames, string arrayTemplatedFormat) {
            foreach (var variable in variableNames) {
                RemoveUnExpectedLineGaps(variable, arrayTemplatedFormat);
            }
        }
        /// <summary>
        /// Remove expected gaps for specific variable.
        /// </summary>
        /// <param name="variableName">"_var"</param>
        /// <param name="arrayTemplatedFormat">
        /// pass only up to "[%lan]", not other language.
        /// (i.e. "_var[%lan][%i][%j]" pass only "[%lan]",
        ///       "_var[1][%lan][%i]" pass only "[1][%lan]")
        /// </param>
        /// <param name="dimension">dimension value 1 or 2</param>
        public void RemoveUnExpectedLineGaps(string variableName, string arrayTemplatedFormat) {
            var templatedVaraibleFormat = variableName + arrayTemplatedFormat;
            //maxLoopingUpperlimit = maxLoopingUpperlimit == -1 ? _loopingUpperLimit : maxLoopingUpperlimit;
            templatedVaraibleFormat = templatedVaraibleFormat.Replace("%lan", Language); //"_var[EN]"
            var variableFoundAt = -1;
            List<int> blankFoundIndexes = new List<int>(20);
            bool isBlankFound = false, isVariableNotFound = true;
            for (int i = 0; i < JsLines.Count; i++) {
                var line = JsLines[i].Trim();
                if (isVariableNotFound && line.StartsWith(templatedVaraibleFormat)) {
                    isVariableNotFound = false;
                } else if (isVariableNotFound == false && line.Equals(string.Empty)) {
                    // empty line found
                    blankFoundIndexes.Add(i);
                } else if (isVariableNotFound == false && line.StartsWith(templatedVaraibleFormat)) {
                    if (blankFoundIndexes.Count > 0) {
                        isBlankFound = true;
                    }
                } else if (isVariableNotFound == false && !line.Equals(string.Empty) && !line.StartsWith(templatedVaraibleFormat)) {
                    break;
                }
            }

            if (isBlankFound) {
                foreach (var blankIndex in blankFoundIndexes) {
                    JsLines.RemoveAt(blankIndex);
                }
            }
        }

        public void ResetJsAppendLineNumber() {
            _jsLastAppendedLineNumber = -1;
        }

        #region Constructor

        public JsParser(string filePath, string txtFilePathForErrorCollector, SheetBase sheetBase)
            : this(filePath, txtFilePathForErrorCollector, sheetBase.Language) { }

        public JsParser(string filePath, TextParser textParser)
            : this(filePath, textParser.TextFilePath, textParser.TransformingLanguage) { }

        /// <summary>
        ///     Constructor
        /// </summary>
        public JsParser(string filePath, string txtFilePathForErrorCollector, string lang) {
            JsFilePath = filePath;
            Language = lang;
            ReadJs();
            ErrorCollector = new ErrorCollector(txtFilePathForErrorCollector, JsFilePath, 80);
        }

        #endregion

        #region Get exact js value.

        private string GetRegularExpressionForFindingExactVariable(string exactVariableName) {
            var convertForRegularExpression = exactVariableName.Replace("[", "\\[");
            convertForRegularExpression = convertForRegularExpression.Replace("]", "\\]");
            convertForRegularExpression = convertForRegularExpression.Trim();
            convertForRegularExpression += "( )*=(.*);";
            return convertForRegularExpression;
        }

        /// <summary>
        ///     Get actual variable name from js file.
        /// </summary>
        /// <param name="exactVariableName">Pass a variable like "_var[EN][1]" or "_var[EN][1][5]"</param>
        /// <returns>Pass a variable like "_var[EN][1]" or "_var[EN][1][5]" and get the value of that.</returns>
        private string GetExactVariableValueFromJs(string exactVariableName) {
            var convertForRegularExpression = GetRegularExpressionForFindingExactVariable(exactVariableName);
            for (var i = 0; i < JsLines.Count; i++) {
                var line = JsLines[i];
                var match = Regex.Match(line, convertForRegularExpression);
                if (match.Success) {
                    var jsValue = match.Groups[2].Value;
                    jsValue = jsValue.Trim();
                    jsValue = jsValue.Replace("\"", "");
                    jsValue = jsValue.Replace(";", "");
                    return jsValue;
                }
            }
            return null;
        }

        /// <summary>
        ///     Get actual line number of the variable if exist.
        ///     if not exist then return -1;
        /// </summary>
        /// <param name="exactVariableName">Pass a variable like "_var[EN][1]" or "_var[EN][1][5]"</param>
        /// <returns>Return exact line number in js if the variable exist or else return -1.</returns>
        private int GetExactVariableLineNumberInJs(string exactVariableName) {
            var convertForRegularExpression = GetRegularExpressionForFindingExactVariable(exactVariableName);
            for (var i = 0; i < JsLines.Count; i++) {
                var line = JsLines[i];
                var match = Regex.Match(line, convertForRegularExpression);
                if (match.Success) {
                    return i;
                }
            }
            return -1;
        }

        #endregion

        #region Read & Write Js File.

        /// <summary>
        ///     Read from js file
        ///     and update JsLines
        /// </summary>
        public List<string> ReadJs() {
            try {
                var jslines = File.ReadAllLines(JsFilePath);
                JsLines = new List<string>(jslines.Length * 2 + 200);
                foreach (var line in jslines) {
                    JsLines.Add(line);
                }
            } catch (Exception ex) {
                GC.Collect();
                throw ex;
            }
            GC.Collect();
            return JsLines;
        }

        /// <summary>
        ///     Save Js file
        /// </summary>
        public void SaveJs() {
            try {
                File.WriteAllLines(JsFilePath, JsLines);
            } catch (Exception ex) {
                throw ex;
            }
        }

        #endregion

        #region Properties and Variables

        private int _jsLastAppendedLineNumber = -1;
        private readonly int _loopingUpperLimit = 50;
        private string _lastProcessedVariable = string.Empty;


        /// <summary>
        ///     Indicating if js has already appended a new line or now.
        /// </summary>
        public bool IsCurrentlyInAddingPhase;

        /// <summary>
        ///     Converting Language
        /// </summary>
        private string Language { get; set; }

        private List<string> JsLines { get; set; }

        /// <summary>
        ///     Js file path.
        /// </summary>
        public string JsFilePath { get; set; }

        #endregion
    }
}