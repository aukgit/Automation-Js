using System;

namespace BusinessLogic.Sheets {
    public abstract class SheetBase : IProcess {
        public string Language { get; protected set; }
        public SheetBase(string language) {
            this.Language = language;
        }

        public void BeforeProcess() {
            Console.WriteLine("- * Start processing : " + GetType().Name);
        }

        public void AfterProcess() {
            Console.WriteLine("- * Processing Complete: " + GetType().Name);
            
        }
        public abstract void Process();

    }
}