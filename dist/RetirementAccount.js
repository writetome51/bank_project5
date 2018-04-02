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
var AccountType_1 = require("./AccountType");
var RetirementAccount = /** @class */ (function (_super) {
    __extends(RetirementAccount, _super);
    function RetirementAccount(accountHolderName, accountHolderBirthDate) {
        var _this = _super.call(this, accountHolderName, accountHolderBirthDate, 100000, 0.03) || this;
        _this.accountType = AccountType_1.AccountType.retirement;
        return _this;
    }
    RetirementAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        if (this.accountHolderAge < 60) {
            this.balance -= this._getTenPercentOf(amount);
        }
        return _super.prototype.withdrawMoney.call(this, amount, description, transactionOrigin);
    };
    RetirementAccount.prototype._getTenPercentOf = function (amount) {
        return (amount * 0.1);
    };
    return RetirementAccount;
}(AbstractAccount_1.AbstractAccount));
exports.RetirementAccount = RetirementAccount;
//# sourceMappingURL=RetirementAccount.js.map