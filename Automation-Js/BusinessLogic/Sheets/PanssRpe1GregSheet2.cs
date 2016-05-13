using System;
using System.Collections.Generic;
using System.Linq;
using BusinessLogic.Enum;
using BusinessLogic.Parser;

namespace BusinessLogic.Sheets {
    public class PanssRpe1GregSheet2 : SheetBase {


        public PanssRpe1GregSheet2(string language)
            : base(language) {

        }

        #region Overrides of SheetBase

        public override void Process() {
            BeforeProcess();

            TextParser txtParser;
            JsParser jsParser;
            var jsType = JsFileNamesEnum.MedAvantePanssRpe;
            var txtType = ParserFileNamesEnum.PanssRpe1GregExcelSheet2;
            App.GetNewParser(jsType, txtType, out jsParser, out txtParser, this);
            int loopRunningLimit = 31;


            var processingRangeList = new[] { "2-8", "11-17", "20-35" };
            string[] variableNames = { "scaleItem", "rptItem" };
            string formatArray = "[%lan][%i]";
            var translations = txtParser.Translations;


            jsParser.AppendNewLanguage(variableNames, formatArray, translations, 1, processingRangeList, loopRunningLimit);
            jsParser.AppendNewLanguage("groupItem", formatArray, translations, new[] { 1, 10, 19 }, maxloopingUpperLimit: 10);
            jsParser.AppendNewLanguage("calcItem", formatArray, translations, new[] { 9, 18, 36, 37 }, maxloopingUpperLimit: 10);

            Console.WriteLine("- * Removing unexpected spaces.");
            jsParser.RemoveUnExpectedLineGaps(new [] {"scaleItem", "rptItem", "groupItem", "calcItem"}, "[%lan]");

            jsParser.SaveJs();
            var errors = jsParser.ErrorCollector;
            App.Logger.WriteLog(errors);

            AfterProcess();
        }

        #endregion
    }
}