
import {AccountType} from "./AccountType";
import {AbstractAccount} from "./AbstractAccount";


export class CheckingAccount extends AbstractAccount {

	constructor(accountHolderName:string, accountHolderBirthDate:Date){
		super(accountHolderName, accountHolderBirthDate, 1000, 0.01);
		this.accountType = AccountType.checking;
	}

}
