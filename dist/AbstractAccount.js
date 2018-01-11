"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractAccount = /** @class */ (function () {
    function AbstractAccount() {
    }
    AbstractAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var success, errorMsg;
        if (amount < this.balance) {
            this.balance -= amount;
            success = true;
            description = 'Successful withdrawal of $' + amount;
            errorMsg = '';
        }
        else {
            success = false;
            description = 'Unsuccessful withdrawal of $' + amount;
            errorMsg = 'Insufficient funds.  Withdrawal amount too high.';
        }
        return {
            success: success,
            amount: -(amount),
            resultBalance: this.balance,
            transactionDate: new Date(),
            description: description,
            // errorMessage will be an empty string when success is true:
            errorMessage: errorMsg
        };
    };
    AbstractAccount.prototype.depositMoney = function (amount, description) {
        throw new Error("Method not implemented.");
    };
    AbstractAccount.prototype.advanceDate = function (numberOfDays) {
        throw new Error("Method not implemented.");
    };
    return AbstractAccount;
}());
exports.AbstractAccount = AbstractAccount;
//# sourceMappingURL=AbstractAccount.js.map