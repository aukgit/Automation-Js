using BusinessLogic.Enum;
using BusinessLogic.Parser;

namespace BusinessLogic.Sheets {
    /// <summary>
    /// Related to "PanssRpe1GregSheet1.txt" parsing
    /// </summary>
    public class GeneralJsPhrases : SheetBase {

        public GeneralJsPhrases(string language)
            : base(language) {

        }

        #region Overrides of SheetBase

        public override void Process() {
            BeforeProcess();
            TextParser txtParser;
            JsParser jsParser;
            var jsType = JsFileNamesEnum.MedavanteTranslatedTerms;
            var txtType = ParserFileNamesEnum.GeneralJsPhrases;
            App.GetNewParser(jsType, txtType, out jsParser, out txtParser, this);
            int loopRunningLimit = 31;

            //(1-3)
            string variableName1 = "scaleIntro",
                   formatArray1 = "[%lan][%i]";

            //4-21
            string[] variableNamesMiddle = { "strMissedItems", "strFeedback", "strItemNumber", 
                                       "strNoItemsMissed", "strSumOfBox", "strCalculatedValueOf", 
                                       "strOutOfAllowableRange","strAllItemsInAllowableRange","strUsername",
                                     "strGoldStandard","strEnteredScore","strPassingScore",
                                     "strResult","strPostTest","strQuestion",
                                     "strCriterion","strSelected","strDate"};
            string formatArray2 = "[%lan]";

            //(22-24)
            string variableName3 = "strLocalStorageAlert";
            //(25-30)
            string[] variableNamesEnd = { "strYouPassed", "strYouFailed", "strCorrect", "strIncorrect", "strSubmitScores", "strSubmit" };


            //1-3
            jsParser.AppendNewLanguageInRange(variableName1, formatArray1, txtParser.Translations, new[]{1,3}, 1);
            int index = 4;
            //4-21
            foreach (var variableName in variableNamesMiddle) {
                jsParser.AppendNewLanguageInRange(variableName, formatArray2, txtParser.Translations,index, 1,false);
                index++;
            }
            //22-24
            jsParser.AppendNewLanguageInRange(variableName3, formatArray1, txtParser.Translations, new[] {22,24}, 1);
            //25-30
            index = 25;
            foreach (var variableName in variableNamesEnd) {
                jsParser.AppendNewLanguageInRange(variableName, formatArray2, txtParser.Translations,index, 1,false);
                index++;
            }

            //foreach (var translate in txtParser.Translations) {
            //    jsParser.AppendNewLanguage(variableName, formatArray, translate.English, translate.NewLanguage, 1, loopRunningLimit);
            //}

            jsParser.SaveJs();
            //var errors = jsParser.ErrorCollector;
            //App.Logger.WriteLog(errors);

            AfterProcess();
        }

        #endregion
    }
}