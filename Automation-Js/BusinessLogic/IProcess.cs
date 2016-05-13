namespace BusinessLogic {
    public interface IProcess {
        void BeforeProcess();
        void AfterProcess();
        void Process();
    }
}