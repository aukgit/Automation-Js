using System;
using System.Linq;
using System.IO;
using BusinessLogic.Enum;
using BusinessLogic.Logger;
using BusinessLogic.Parser;
using BusinessLogic.Sheets;

namespace BusinessLogic {
    public static class App {

        public const string LanguageSeperator = "      |||      ";

        public static FileLogger Logger { get; private set; }

        /// <summary>
        /// Call this method at initial time to load necessary components.
        /// </summary>
        public static void ApplicationSetup() {
            Logger = new FileLogger(Path + "\\Logs.txt");
        }

        /// <summary>
        ///     Current Directory
        ///     Returns current directory without slash.
        /// </summary>
        public static string Path {
            get { return Environment.CurrentDirectory; }
        }

        /// <summary>
        ///     It should return all the directories inside
        ///     "Convert\New" folder or directory.
        /// </summary>
        /// <returns>
        ///     It should return all the directories inside
        ///     "Convert\New" folder or directory.
        /// </returns>
        public static string[] GetNewConvertingLanguagesList() {
            var path = Path + @"\Convert\New\";
            return Directory.GetDirectories(path).Select(n=> n.Replace(path, "")).ToArray();
        }
        /// <summary>
        ///     It should return JavaScript file path
        /// </summary>
        public static string GetJsFilePath(JsFileNamesEnum jsFileType, SheetBase sheetBase) {
            return GetJsFilePath(jsFileType, sheetBase.Language);
        }

        /// <summary>
        ///     It should return JavaScript file path
        /// </summary>
        public static string GetJsFilePath(JsFileNamesEnum jsFileType, TextParser textParser) {
            return GetJsFilePath(jsFileType, textParser.TransformingLanguage);
        }


        /// <summary>
        ///     It should return JavaScript file path
        /// </summary>
        public static string GetJsFilePath(JsFileNamesEnum jsFileType, string language) {
            //if (jsFileType == JsFileNamesEnum.MedAvantePanssRpe) {
            //    return 
            //}
            var path = Path + @"\Convert\New\" + language + @"\";
            if (jsFileType == JsFileNamesEnum.MedavanteTranslatedTerms) {
                path += "medavante_translated_terms.js";
                return path;
            }
            if (jsFileType == JsFileNamesEnum.MedAvantePanssRpeVariables) {
                path += "MedAvante_PANSS_RPE_Variables.js";
                return path;
            }
            if (jsFileType == JsFileNamesEnum.MedAvantePanssRpe) {
                path += "MedAvante_PANSS_RPE.js";
                return path;
            }
            return null;
        }
        /// <summary>
        ///     It should return text file path
        /// </summary>
        public static string GetTextParserFilePath(ParserFileNamesEnum parserFileNameEnum, SheetBase sheetBase) {
            return GetTextParserFilePath(parserFileNameEnum, sheetBase.Language);
        }
        /// <summary>
        ///     It should return text file path
        /// </summary>
        public static string GetTextParserFilePath(ParserFileNamesEnum parserFileNameEnum, string language) {
            var path = Path + @"\Convert\New\" + language + @"\";
            //if (parserFileNameEnum == ParserFileNamesEnum.PanssRpeDataEntryForm) {
            //    //x += "Rpe.js";
            //    //var self = $.devOrg.upload;
            //}
            //return x;
            if (parserFileNameEnum == ParserFileNamesEnum.PanssRpeDataEntryForm) {
                path += "PanssRpeDataEntryForm.txt";
                return path;
            }
            if (parserFileNameEnum == ParserFileNamesEnum.PanssRpe1GregExcelSheet1) {
                path += "PanssRpe1GregSheet1.txt";
                return path;
            }
            if (parserFileNameEnum == ParserFileNamesEnum.PanssRpe1GregExcelSheet2) {
                path += "PanssRpe1GregSheet2.txt";
                return path;
            }
            if (parserFileNameEnum == ParserFileNamesEnum.PanssRpe2LisaExcelSheet1) {
                path += "PanssRpe2LisaSheet1.txt";
                return path;
            }
            if (parserFileNameEnum == ParserFileNamesEnum.PanssRpe2LisaExcelSheet2) {
                path += "PanssRpe2LisaSheet2.txt";
                return path;
            }
            if (parserFileNameEnum == ParserFileNamesEnum.GeneralJsPhrases) {
                path += "GeneralJsPhrases.txt";
                return path;
            }
            return null;
        }

        public static void GetNewParser(JsFileNamesEnum jsFileType, ParserFileNamesEnum parserFileNameEnum, out JsParser jsParser, out TextParser textParser, SheetBase sheetBase) {
            var textPath = GetTextParserFilePath(parserFileNameEnum, sheetBase);
            textParser = new TextParser(textPath, sheetBase);
            var jsPath = GetJsFilePath(jsFileType, sheetBase);
            jsParser = new JsParser(jsPath, textParser);
        }

    }
}