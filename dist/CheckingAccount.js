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
var AccountType_1 = require("./AccountType");
var AbstractAccount_1 = require("./AbstractAccount");
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(accountHolderName, accountHolderBirthDate) {
        var _this = _super.call(this, accountHolderName, accountHolderBirthDate, 1000, 0.01) || this;
        _this.accountType = AccountType_1.AccountType.checking;
        return _this;
    }
    return CheckingAccount;
}(AbstractAccount_1.AbstractAccount));
exports.CheckingAccount = CheckingAccount;
//# sourceMappingURL=CheckingAccount.js.map