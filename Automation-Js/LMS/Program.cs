using System;
using System.Collections.Generic;
using System.IO;
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
                listOfProcess.Add(new PanssRpe1GregSheet1(language));
                listOfProcess.Add(new PanssRpe2LisaSheet1(language));
                listOfProcess.Add(new PanssRpe1GregSheet2(language));
                listOfProcess.Add(new GeneralJsPhrases(language));
            }

            for (int i = 0; i < listOfProcess.Count; i++) {
                var singleProcess = listOfProcess[i];
                singleProcess.Process();
                listOfProcess[i] = null;
                singleProcess = null;
            }
            listOfProcess = null;
            GC.Collect();
            foreach (var language in languages) {
                App.MoveConvertedLanguageFolder(language);
            }

            Console.WriteLine("- * Application End.");
            Console.ReadKey();
        }
    }
}