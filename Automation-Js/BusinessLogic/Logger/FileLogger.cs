using System;
using System.IO;
using System.Text;
using BusinessLogic.Entity;

namespace BusinessLogic.Logger {
    public class FileLogger {
        public FileLogger(string filePath) {
            FilePath = filePath;
        }

        public string FilePath { get; set; }

        public string WriteLog(ErrorCollector errorCollector) {
            var errors = errorCollector.GetErrors();
            var sb = new StringBuilder(errors.Count * 5 + 2);
            var stringPadding = "---- ";
            var format = "[x] {0}. {1} {{ expected English : {2}, Variable : {3}}}";
            sb.AppendLine(stringPadding + "Start Error Collection Log " + stringPadding);
            sb.AppendLine(string.Format(stringPadding + "Error Printing DateTime : {0} " + stringPadding, DateTime.Now));
            sb.AppendLine(string.Format(stringPadding + "Js Path : {0} , Text Path: {1} " + stringPadding,
                errorCollector.JsFilePath,
                errorCollector.TextFilePath));
            foreach (var error in errors) {
                // format : "[x] {0}. {1} {{ expected English : {2}, Variable : {3}}}"
                sb.AppendLine(string.Format(format, error.OrderId, error.ErrorMessage, error.ExpectedEnglish, error.VariableName));
            }
            sb.AppendLine("---- Eng Log ----");
            var dumpingString = sb.ToString();
            File.AppendAllText(FilePath, dumpingString);
            sb = null;
            GC.Collect();
            return dumpingString;
        }

        public void WriteLog(string message, bool addCross = false, bool printTime = true) {
            var dateString = printTime ? "Dated : {" + DateTime.Now + "}, " : "";
            var crossMark = addCross ? "[x]" : "";
            var writingString = string.Format("{0} {1} Message : {2} ", crossMark, dateString, message);
            File.AppendAllText(FilePath, writingString);
        }
    }
}