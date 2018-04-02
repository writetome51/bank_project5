import {SavingsAccount} from "./SavingsAccount";

let savings = new SavingsAccount('Steve', new Date('06/25/1980'));
savings.depositMoney(1000, '');
savings.advanceDate(30);
savings.depositMoney(1000, '');
savings.advanceDate(30);
savings.withdrawMoney(20000,'',2);
savings.withdrawMoney(20000,'',2);
console.log(savings);