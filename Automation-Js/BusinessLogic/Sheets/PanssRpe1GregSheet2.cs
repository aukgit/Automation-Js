using System;
using System.Collections.Generic;
using System.Linq;
using BusinessLogic.Enum;
using BusinessLogic.Parser;
using Microsoft.Office.Interop.Excel;

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
            string[] variableNames1 = { "scaleItem", "rptItem" };
            string[] variableNames2 = { "groupItem","calcItem" };
            string formatArray = "[%lan][%i]";
            var translations = txtParser.Translations;


            //jsParser.AppendNewLanguage(variableNames, formatArray, translations, 1, processingRangeList, loopRunningLimit);
            //jsParser.AppendNewLanguage("groupItem", formatArray, translations, new[] { 1, 10, 19 }, maxloopingUpperLimit: 10);
            //jsParser.AppendNewLanguage("calcItem", formatArray, translations, new[] { 9, 18, 36, 37 }, maxloopingUpperLimit: 10);

            //Console.WriteLine("- * Removing unexpected spaces.");
            //jsParser.RemoveUnExpectedLineGaps(new [] {"scaleItem", "rptItem", "groupItem", "calcItem"}, "[%lan]");

            foreach (var variableName in variableNames1) {
                jsParser.AppendNewLanguageInRange(variableName, formatArray, txtParser.Translations, new[] { 2,8 }, 1);
                jsParser.AppendNewLanguageInRange(variableName, formatArray, txtParser.Translations, new[] { 11,17 }, 8);
                jsParser.AppendNewLanguageInRange(variableName, formatArray, txtParser.Translations, new[] { 20, 35 }, 15);
            }
            // groupItem{1,10,19}
                jsParser.AppendNewLanguageInRange("groupItem", formatArray, txtParser.Translations,1,1);
                jsParser.AppendNewLanguageInRange("groupItem", formatArray, txtParser.Translations, 10, 2);
                jsParser.AppendNewLanguageInRange("groupItem", formatArray, txtParser.Translations, 19, 3);
            // calcItem{9,18,36,37}
                jsParser.AppendNewLanguageInRange("calcItem", formatArray, txtParser.Translations, 9, 1);
                jsParser.AppendNewLanguageInRange("calcItem", formatArray, txtParser.Translations, 18, 2);
                jsParser.AppendNewLanguageInRange("calcItem", formatArray, txtParser.Translations, 36, 3);
                jsParser.AppendNewLanguageInRange("calcItem", formatArray, txtParser.Translations, 37, 4);
                
            

            jsParser.SaveJs();
            //var errors = jsParser.ErrorCollector;
            //App.Logger.WriteLog(errors);

            AfterProcess();
        }

        #endregion
    }
}