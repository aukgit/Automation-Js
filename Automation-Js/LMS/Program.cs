using System;
using System.Collections.Generic;
using BusinessLogic;
using BusinessLogic.FileConverter;
using BusinessLogic.Sheets;

namespace LMS {
    internal class Program {
        private static void Main(string[] args) {
            Console.WriteLine("- * Application Started.");
            App.ApplicationSetup();

            var listOfProcess = new List<IProcess>(10);
            var languages = App.GetNewConvertingLanguagesList();
            foreach (var language in languages) {
                listOfProcess.Add(new ExcelToText(language));
                //listOfProcess.Add(new PanssRpe1GregSheet1(language));
                //listOfProcess.Add(new PanssRpe2LisaSheet1(language));
                //listOfProcess.Add(new PanssRpe1GregSheet2(language));
                listOfProcess.Add(new GeneralJsPhrases(language));
            }

            foreach (var singleProcess in listOfProcess) {
                singleProcess.Process();
            }

            Console.WriteLine("- * Application End.");
            Console.ReadKey();
        }
    }
}