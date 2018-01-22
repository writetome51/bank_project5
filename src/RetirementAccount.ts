import { AbstractAccount } from './AbstractAccount';
import {Transaction} from "./Transaction.interface";
import {AccountType} from "./AccountType";
import {TransactionOrigin} from "./TransactionOrigin";


export class RetirementAccount extends AbstractAccount {

	balance = 100000;
	accountType = AccountType.retirement;
	protected _interestRate = 0.03;


 	constructor(accountHolderName:string, accountHolderBirthDate:Date, accountCreationDate:Date){
 		super(accountHolderName, accountHolderBirthDate, accountCreationDate);
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

