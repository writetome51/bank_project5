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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractAccount_1 = require("./AbstractAccount");
var decorators_1 = require("./decorators");
var RetirementAccount = /** @class */ (function (_super) {
    __extends(RetirementAccount, _super);
    function RetirementAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RetirementAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        throw new Error("Method not implemented.");
    };
    RetirementAccount.prototype.depositMoney = function (amount, description) {
        throw new Error("Method not implemented.");
    };
    RetirementAccount.prototype.advanceDate = function (numberOfDays) {
        throw new Error("Method not implemented.");
    };
    RetirementAccount = __decorate([
        decorators_1.displayClassNameWithPurpose('to prove typescript wrong')
    ], RetirementAccount);
    return RetirementAccount;
}(AbstractAccount_1.AbstractAccount));
exports.RetirementAccount = RetirementAccount;
//# sourceMappingURL=RetirementAccount.js.map