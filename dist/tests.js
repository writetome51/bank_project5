"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SavingsAccount_1 = require("./SavingsAccount");
var TransactionOrigin_1 = require("./TransactionOrigin");
var savings = new SavingsAccount_1.SavingsAccount('Steve', new Date('06/25/1980'));
savings.depositMoney(1000, '');
savings.advanceDate(30);
savings.depositMoney(1000, '');
savings.advanceDate(30);
savings.withdrawMoney(100, '', TransactionOrigin_1.TransactionOrigin.web);
savings.withdrawMoney(100, '', TransactionOrigin_1.TransactionOrigin.web);
savings.withdrawMoney(100, '', TransactionOrigin_1.TransactionOrigin.web);
savings.withdrawMoney(100, '', TransactionOrigin_1.TransactionOrigin.web);
savings.withdrawMoney(100, '', TransactionOrigin_1.TransactionOrigin.web);
savings.withdrawMoney(100, '', TransactionOrigin_1.TransactionOrigin.web);
savings.withdrawMoney(100, '', TransactionOrigin_1.TransactionOrigin.web);
console.log('');
console.log(savings);
//# sourceMappingURL=tests.js.map