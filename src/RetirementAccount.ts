import { AbstractAccount } from './AbstractAccount';
import {Transaction} from "./Transaction.interface";
import {AccountType} from "./AccountType";
import {TransactionOrigin} from "./TransactionOrigin";


export class RetirementAccount extends AbstractAccount {

	balance = 100000;
	accountType = AccountType.retirement;


 	constructor(birthDate: Date){
 		super();

 		this.accountHolderBirthDate = birthDate;
 		this.accountHolderAge = getAge(this.accountHolderBirthDate);


		function getAge(birthDate): number{
			let currentYear = (new Date()).getFullYear();
			return currentYear - birthDate.getFullYear();
		}
	}


	withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction{
		if (this.accountHolderAge < 60){
			this.balance -= this._getTenPercentOf(this.balance);
		}
 		return super.withdrawMoney(amount, description, transactionOrigin);

	}


	private _getTenPercentOf(amount){
 		return (amount * 0.1);
	}



}

