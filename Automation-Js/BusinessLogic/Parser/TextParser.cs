using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using BusinessLogic.Entity;
using BusinessLogic.Sheets;
using Microsoft.Office.Interop.Excel;

namespace BusinessLogic.Parser {
    public class TextParser {
        #region Constructor
        /// <summary>
        ///     Constructor
        /// </summary>
        public TextParser(string filePath, string transformingLanguage) {
            TransformingLanguage = transformingLanguage;
            var lines = File.ReadAllLines(filePath);
            Translations = new List<LanguageItem>(lines.Length + 2);
            foreach (var line in lines) {
                var columns = line.Split(new string[] { App.LanguageSeperator }, StringSplitOptions.RemoveEmptyEntries);
                var language = new LanguageItem {
                    English = columns[0],
                    NewLanguage = columns[1]
                };
                Translations.Add(language);
            }
            TextFilePath = filePath;
        }

        public TextParser(string filePath, SheetBase sheetBase)
            : this(filePath, sheetBase.Language) {

        }

        #endregion

        public object this[int i] {
            get { return Translations[i]; }
        }

        public object this[string english] {
            get { return Translations.FirstOrDefault(single => single.English.Equals(english)); }
        }

        /// <summary>
        ///     Returns the English language text for the parsing line.
        /// </summary>
        /// <param name="index"></param>
        /// <returns>Returns the English language text for the parsing line.</returns>
        public string GetEnglish(int index) {
            return Translations[index].English;
        }

        /// <summary>
        ///     Returns the other language text for the parsing line.
        /// </summary>
        /// <param name="index"></param>
        /// <returns>Returns the other language text for the parsing line.</returns>
        public string GetNewLanguage(int index) {
            return Translations[index].NewLanguage;
        }

        #region Properties

        /// <summary>
        ///     Contains language translation items
        ///     "Hello" to "new language hello"
        /// </summary>
        public List<LanguageItem> Translations { get; private set; }

        /// <summary>
        /// </summary>
        public string TransformingLanguage { get; private set; }

        public string TextFilePath { get; private set; }

        #endregion
    }
}