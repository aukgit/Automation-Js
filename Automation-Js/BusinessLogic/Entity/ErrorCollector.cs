#region using block

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using BusinessLogic.Enum;

#endregion

namespace BusinessLogic.Entity {
    /// <summary>
    /// </summary>
    public class ErrorCollector : IDisposable {

        private int _defaultCapacity = 20;
        private List<BasicError> _errors;
        private short _orderIncrementer;
        public string TextFilePath { get; private set; }
        public string JsFilePath { get; private set; }

        /// <summary>
        /// </summary>
        /// <param name="def"></param>
        /// <param name="textFilePath"></param>
        /// <param name="jsFilePath"></param>
        public ErrorCollector(string textFilePath, string jsFilePath, int def = 20) {
            _errors = new List<BasicError>(def);
            _defaultCapacity = def;
            TextFilePath = textFilePath;
            JsFilePath = jsFilePath;
        }

        public void Dispose() {
            _errors = null;
            GC.Collect();
        }


        /// <summary>
        ///     Is any error exist in the list?
        /// </summary>
        /// <returns>Returns true if any error exist.</returns>
        public bool IsExist() {
            if (_errors != null && _errors.Count > 0) {
                return true;
            }
            return false;
        }

        /// <summary>
        ///     add error message with given priority
        /// </summary>
        /// <param name="msg">set your message.</param>
        /// <param name="expectedEnglish"></param>
        /// <param name="jsVariableName">"_var[][][]" pass "_var"</param>
        /// <param name="typeEnum">Type of your error message.</param>
        /// <returns>returns the order of the error.</returns>
        public int Add(string msg, string expectedEnglish, string jsVariableName, ErrorTypeEnum typeEnum) {
            var order = (short)(_errors.Count + 1);

            var error = new BasicError {
                OrderId = order,
                ErrorMessage = msg,
                ExpectedEnglish = expectedEnglish,
                VariableName = jsVariableName
            };
            _errors.Add(error);
            return error.OrderId;
        }

        /// <summary>
        /// </summary>
        /// <returns>Returns all error message as string list.</returns>
        public List<string> GetMessages() {
            return _errors.Select(n => n.ErrorMessage)
                          .ToList();
        }

        /// <summary>
        /// </summary>
        /// <returns>Returns all error message as BasicError typeEnum.</returns>
        public List<BasicError> GetErrors() {
            if (_errors != null && _errors.Count > 0) {
                return _errors.ToList();
            }
            return null;
        }

        /// <summary>
        ///     remove msg from the list
        /// </summary>
        public void Remove(int orderId) {
            var error = _errors.FirstOrDefault(n => n.OrderId == orderId);
            if (error != null) {
                _errors.Remove(error);
            }
        }

        /// <summary>
        ///     remove msg from the list
        /// </summary>
        /// <param name="message"></param>
        public void Remove(string message) {
            var error = _errors.FirstOrDefault(n => n.ErrorMessage == message);
            if (error != null) {
                _errors.Remove(error);
            }
        }

        /// <summary>
        ///     Clean counter and clean the error list start from 0.
        /// </summary>
        public void Clear() {
            _orderIncrementer = 0;
            _errors.Clear();
            //errors.Capacity = defaultCapacity;
        }


        /// <summary>
        /// </summary>
        /// <returns>Returns all error message as string list of sorted by order id.</returns>
        public List<string> GetMessagesSorted() {
            if (_errors.Count > 0) {
                return _errors.OrderBy(n => n.OrderId).Select(n => n.ErrorMessage).ToList();
            }
            return null;
        }

        /// <summary>
        ///     Returns errors in sorted order.
        /// </summary>
        /// <returns>Returns errors in sorted order.</returns>
        public List<BasicError> GetErrorsSorted() {
            if (_errors.Count > 0) {
                return _errors.OrderBy(n => n.OrderId).ToList();
            }
            return null;
        }
    }
}