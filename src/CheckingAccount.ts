import { AbstractAccount } from './AbstractAccount';
import {Transaction} from "./Transaction.interface";
import {TransactionOrigin} from "./TransactionOrigin";
import {AccountType} from "./AccountType";


export class CheckingAccount extends AbstractAccount {

	balance = 1000;
	accountType = AccountType.checking;
	protected _interestRate = 0.01;


	constructor(accountHolderName:string, accountHolderBirthDate:Date, accountCreationDate:Date){
		super(accountHolderName, accountHolderBirthDate, accountCreationDate);
	}



}


