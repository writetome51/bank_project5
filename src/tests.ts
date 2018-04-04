import {SavingsAccount} from "./SavingsAccount";
import {TransactionOrigin} from "./TransactionOrigin";

let savings = new SavingsAccount('Steve', new Date('06/25/1980'));
savings.depositMoney(1000, '');
savings.advanceDate(30);
savings.depositMoney(1000, '');
savings.advanceDate(30);
savings.withdrawMoney(100,'',TransactionOrigin.web);
savings.withdrawMoney(100,'',TransactionOrigin.web);
savings.withdrawMoney(100,'',TransactionOrigin.web);
savings.withdrawMoney(100,'',TransactionOrigin.web);
savings.withdrawMoney(100,'',TransactionOrigin.web);
savings.withdrawMoney(100,'',TransactionOrigin.web);
savings.withdrawMoney(100,'',TransactionOrigin.web);

savings.advanceDate(30);
savings.withdrawMoney(100,'',TransactionOrigin.web);

console.log('');
console.log(savings);