#region using block



#endregion

using BusinessLogic.Enum;

namespace BusinessLogic.Entity {
    /// <summary>
    /// </summary>
    public class BasicError {
        /// <summary>
        /// </summary>
        public short OrderId { get; set; }

        /// <summary>
        ///     What is the error and what is the cause of the error.
        /// </summary>
        public string ErrorMessage { get; set; }
        public string VariableName { get; set; }
        
        public string ExpectedEnglish { get; set; }

      

        /// <summary>
        ///     Type of the error
        /// </summary>
        public ErrorTypeEnum Type { get; set; }
    }
}