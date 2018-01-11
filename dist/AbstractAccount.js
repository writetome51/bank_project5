"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractAccount = /** @class */ (function () {
    function AbstractAccount() {
    }
    AbstractAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        if (amount < this.balance) {
            this.balance -= amount;
        }
        throw new Error("Method not implemented.");
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