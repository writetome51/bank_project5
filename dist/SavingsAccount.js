"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractAccount_1 = require("./AbstractAccount");
var TransactionOrigin_1 = require("./TransactionOrigin");
var AccountType_1 = require("./AccountType");
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount(accountHolderName, accountHolderBirthDate) {
        var _this = _super.call(this, accountHolderName, accountHolderBirthDate, 10000, 0.02) || this;
        _this.accountType = AccountType_1.AccountType.savings;
        return _this;
    }
    SavingsAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        if ((transactionOrigin === TransactionOrigin_1.TransactionOrigin.phone || transactionOrigin === TransactionOrigin_1.TransactionOrigin.web) &&
            this._hasSixWithdrawalsFromWebAndPhone()) {
            var thisTransaction = {
                success: false,
                amount: -(amount),
                resultBalance: this.balance,
                transactionDate: this.currentDate,
                description: description,
                transactionOrigin: transactionOrigin,
                errorMessage: 'You have met your limit of 6 withdrawals by phone or web this month.'
            };
            this.accountHistory.push(thisTransaction);
            return thisTransaction;
        }
        else {
            return _super.prototype.withdrawMoney.call(this, amount, description, transactionOrigin);
        }
    };
    SavingsAccount.prototype._hasSixWithdrawalsFromWebAndPhone = function () {
        var numPhoneOrWebTransactions = 0;
        var currentMonth = this.currentDate.getMonth();
        var currentYear = this.currentDate.getFullYear();
        this.accountHistory.forEach(function (transaction) {
            if (transaction.success && transaction.transactionOrigin &&
                (transaction.transactionOrigin === TransactionOrigin_1.TransactionOrigin.web ||
                    transaction.transactionOrigin === TransactionOrigin_1.TransactionOrigin.phone)) {
                if (monthOf(transaction.transactionDate) === currentMonth &&
                    yearOf(transaction.transactionDate) === currentYear) {
                    ++numPhoneOrWebTransactions;
                }
                else
                    numPhoneOrWebTransactions = 0;
            }
            else {
                numPhoneOrWebTransactions = 0;
            }
            function monthOf(date) {
                return date.getMonth();
            }
            function yearOf(date) {
                return date.getFullYear();
            }
        });
        ++numPhoneOrWebTransactions; // this counts this transaction.
        return (numPhoneOrWebTransactions > 6);
    };
    return SavingsAccount;
}(AbstractAccount_1.AbstractAccount));
exports.SavingsAccount = SavingsAccount;
//# sourceMappingURL=SavingsAccount.js.map