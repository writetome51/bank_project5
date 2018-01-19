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
var SavingsAccount = /** @class */ (function (_super) {
    __extends(SavingsAccount, _super);
    function SavingsAccount() {
        var _this = _super.call(this) || this;
        _this.balance = 10000;
        return _this;
    }
    return SavingsAccount;
}(AbstractAccount_1.AbstractAccount));
exports.SavingsAccount = SavingsAccount;
//# sourceMappingURL=SavingsAccount.js.map