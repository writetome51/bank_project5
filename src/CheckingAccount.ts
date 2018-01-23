
import {AccountType} from "./AccountType";
import {AbstractAccount} from "./AbstractAccount";


export class CheckingAccount extends AbstractAccount {

	constructor(accountHolderName:string, accountHolderBirthDate:Date){
		super(accountHolderName, accountHolderBirthDate, 1000, 0.01);
		this.accountType = AccountType.checking;
	}



}


//Tests:

var checking = new CheckingAccount('Steve', new Date(1980, 5, 25));

var transactionResult = checking.withdrawMoney(50, '', 3);
console.log(transactionResult);