import { AbstractAccount } from './AbstractAccount';
import {Transaction} from "./Transaction.interface";
import {AccountType} from "./AccountType";
import {TransactionOrigin} from "./TransactionOrigin";


export class RetirementAccount extends AbstractAccount {


 	constructor(accountHolderName:string, accountHolderBirthDate:Date){
 		super(accountHolderName, accountHolderBirthDate, 100000, 0.03);
		this.accountType = AccountType.retirement;
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
