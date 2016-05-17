using System;
using System.IO;
using System.Runtime.InteropServices;
using System.Text;
using BusinessLogic.Sheets;
using Microsoft.Office.Interop.Excel;

namespace BusinessLogic.FileConverter {
    public class ExcelToText : IProcess,IDisposable {
        //Read the first cell
        //public static string TestString = PanssRpeDataEntryForm.Cells[4, 1].Value.ToString();
        private string GetExcelCellValue(Range cell, string defaultValue = null) {
            if (cell != null) {
                var value = (string) cell.Value2;
                if (!string.IsNullOrEmpty(value)) {
                    value = value.Replace("\n", " ");
                    return value;
                }
            }
            return defaultValue;
        }

        public StringBuilder GetExcelToText(
            Worksheet excelSheet,
            int rowStarting = 0,
            int[] columnsToVisit = null,
            int[] skipingRows = null) {
            var xrange = excelSheet.UsedRange;
            var rowsLength = xrange.Rows.Count;

            var sb = new StringBuilder(rowsLength + 2);
            for (var row = rowStarting; row < rowsLength; row++) {
                if (skipingRows != null && skipingRows.Length > 0) {
                    foreach (var skipRowNumber in skipingRows) {
                        if (skipRowNumber == row) {
                            goto skiploop;
                        }
                    }
                }
                if (columnsToVisit != null && columnsToVisit.Length > 0) {
                    var previousCell = string.Empty;
                    foreach (var column in columnsToVisit) {
                        var cell = (Range) xrange.Cells[row + 1, column];
                        var value = GetExcelCellValue(cell);
                        if (value != null) {
                            if (previousCell == string.Empty) {
                                sb.Append(value);
                                previousCell = value;
                            } else {
                                sb.Append(App.LanguageSeperator).Append(value);
                            }
                        }
                    }
                    if (previousCell != string.Empty) {
                        sb.AppendLine();
                    }
                }
                skiploop:
                ;
            }
            return sb;
        }

        public void ConvertToTextPanssRpe1GregSheet1() {
            var sb = GetExcelToText(_panssRpe1GregSheet1, 0, new[] {2, 3});
            File.WriteAllText(_panssRpe1GregSheet1Path, sb.ToString());
            sb = null;
            GC.Collect();
        }

        public void ConvertToTextPanssRpe2LisaSheet1() {
            var sb = GetExcelToText(_panssRpe2LisaSheet1, 0, new[] {2, 4});
            File.WriteAllText(_panssRpe2LisaSheet1Path, sb.ToString());
            sb = null;
            GC.Collect();
        }

        public void ConvertToTextPanssRpeDataEntryForm() {
            var sb = GetExcelToText(_panssRpeDataEntryForm, 0, new[] {1, 2});
            File.WriteAllText(_panssRpeDataEntryFormPath, sb.ToString());
            sb = null;
            GC.Collect();
        }

        public void ConvertToTextPanssRpe1GregSheet2() {
            var sb = GetExcelToText(_panssRpe1GregSheet2, 0, new[] {2, 3});
            File.WriteAllText(_panssRpe1GregSheet2Path, sb.ToString());
            sb = null;
            GC.Collect();
        }

        public void ConvertToTextPanssRpe2LisaSheet2() {
            var sb = GetExcelToText(_panssRpe2LisaSheet2, 0, new[] {2, 3});
            File.WriteAllText(_panssRpe2LisaSheet2Path, sb.ToString());
            sb = null;
            GC.Collect();
        }

        public void ConvertToTextGeneralJsPhrases() {
            var sb = GetExcelToText(_generalJsPhrases, 0, new[] {1, 2});
            File.WriteAllText(_generalJsPhrasesPath, sb.ToString());
            sb = null;
            GC.Collect();
        }

        public static string CheckNullAndReplaceNewLine(string cell) {
            if (cell != null) {
                cell = cell.Replace("\r", " ");
            }
            return cell;
        }

        #region Declarations

        private readonly string _workingPath = App.Path + @"\Convert\New\";

        private readonly string _excelSheet1Path;
        private readonly string _excelSheet2Path;

        private Application _excel;

        private Workbook _excelWorkBook1;
        private Workbook _excelWorkBook2;

        private Worksheet _panssRpe1GregSheet1;
        private Worksheet _panssRpe2LisaSheet1;
        private Worksheet _panssRpeDataEntryForm;
        private Worksheet _panssRpe1GregSheet2;
        private Worksheet _panssRpe2LisaSheet2;
        private Worksheet _generalJsPhrases;

        private readonly string _panssRpe1GregSheet1Path;
        private readonly string _panssRpe1GregSheet2Path;
        private readonly string _panssRpe2LisaSheet1Path;
        private readonly string _panssRpe2LisaSheet2Path;
        private readonly string _panssRpeDataEntryFormPath;
        private readonly string _generalJsPhrasesPath;

        private string _language;

        #endregion

        #region Constructors

        public ExcelToText(string language) {
            _language = language;
            _workingPath += language + "\\";
            _excel = new Application();
            _excelSheet1Path = _workingPath + @"\Questions and Rationale Translations.xlsx";
            _excelSheet2Path = _workingPath + @"\Sentences and Phrases.xlsx";
            _panssRpe1GregSheet1Path = _workingPath + @"\PanssRpe1GregSheet1.txt";
            _panssRpe1GregSheet2Path = _workingPath + @"\PanssRpe1GregSheet2.txt";
            _panssRpe2LisaSheet1Path = _workingPath + @"\PanssRpe2LisaSheet1.txt";
            _panssRpe2LisaSheet2Path = _workingPath + @"\PanssRpe2LisaSheet2.txt";
            _panssRpeDataEntryFormPath = _workingPath + @"\PanssRpe1DataEntryForm.txt";
            _generalJsPhrasesPath = _workingPath + @"\PanssGeneralJsPhrases.txt";
        }

        private void OpenExcelSheets() {
            _excelWorkBook1 = _excel.Workbooks.Open(_excelSheet1Path);
            _excelWorkBook2 = _excel.Workbooks.Open(_excelSheet2Path);
            _panssRpe1GregSheet1 = _excelWorkBook1.Sheets[1];
            _panssRpe2LisaSheet1 = _excelWorkBook1.Sheets[2];
            _panssRpeDataEntryForm = _excelWorkBook2.Sheets[1];
            _panssRpe1GregSheet2 = _excelWorkBook2.Sheets[3];
            _panssRpe2LisaSheet2 = _excelWorkBook2.Sheets[4];
            _generalJsPhrases = _excelWorkBook2.Sheets[5];
        }

        private void CloseExcelSheets() {
            _excelWorkBook1.Close();
            _excelWorkBook2.Close();
            foreach (Workbook _workbook in _excel.Workbooks) {
                _workbook.Close(0);
            }

            _excel.Quit();
            _excel = null;
            var process = System.Diagnostics.Process.GetProcessesByName("Excel");
            foreach (var p in process) {
                if (!string.IsNullOrEmpty(p.ProcessName)) {
                    try {
                        p.Kill();
                    } catch { }
                }
            }
            GC.Collect();
        }

        public ExcelToText(SheetBase sheetBase) : this(sheetBase.Language) {}

        #endregion

        #region IProcess Members

        public void BeforeProcess() {
            Console.WriteLine("- * Start processing : " + GetType().Name);
        }

        public void AfterProcess() {
            Console.WriteLine("- * Processing Complete: " + GetType().Name);
        }

        public void Process() {
            BeforeProcess();

            OpenExcelSheets();

            ConvertToTextPanssRpe1GregSheet1();
            ConvertToTextPanssRpe1GregSheet2();
            ConvertToTextPanssRpe2LisaSheet1();
            ConvertToTextPanssRpe2LisaSheet2();
            ConvertToTextPanssRpeDataEntryForm();
            ConvertToTextGeneralJsPhrases();

            CloseExcelSheets();

            AfterProcess();
        }

        #endregion

        #region Implementation of IDisposable

        /// <summary>
        /// Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.
        /// </summary>
        public void Dispose() {

            CloseExcelSheets();
        }

        #endregion
    }
}