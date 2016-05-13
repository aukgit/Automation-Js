using BusinessLogic.Parser;
using BusinessLogic.Enum;
namespace BusinessLogic.Sheets {
    /// <summary>
    /// Related to "PanssRpe1GregSheet1.txt" parsing
    /// </summary>
    public class PanssRpe1GregSheet1 : SheetBase {

        public PanssRpe1GregSheet1(string language)
            : base(language) {

        }

        #region Overrides of SheetBase

        public override void Process() {
            BeforeProcess();

            TextParser txtParser;
            JsParser jsParser;
            var jsType = JsFileNamesEnum.MedAvantePanssRpeVariables;
            var txtType = ParserFileNamesEnum.PanssRpe1GregExcelSheet1;
            App.GetNewParser(jsType, txtType, out jsParser, out txtParser, this);
            int loopRunningLimit = 31;

            string variableName = "incorrectFeedback",
                   formatArray = "[1][%lan][%i]";
            foreach (var translate in txtParser.Translations) {
                jsParser.AppendNewLanguage(variableName, formatArray, translate.English, translate.NewLanguage, 1, loopRunningLimit);
            }

            jsParser.SaveJs();
            var errors = jsParser.ErrorCollector;
            App.Logger.WriteLog(errors);

            AfterProcess();
        }

        #endregion
    }
}