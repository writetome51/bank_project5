import { AbstractAccount } from './AbstractAccount';
import {Transaction} from "./Transaction.interface";
import {TransactionOrigin} from "./TransactionOrigin";
import {AccountType} from "./AccountType";



export class SavingsAccount extends AbstractAccount {

	constructor(accountHolderName:string, accountHolderBirthDate:Date){
		super(accountHolderName, accountHolderBirthDate, 10000, 0.02);
		this.accountType = AccountType.savings;
	}


	withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction{
		if ((transactionOrigin === TransactionOrigin.phone || transactionOrigin === TransactionOrigin.web) &&
			this._hasSixWithdrawalsFromWebAndPhone()){
			let thisTransaction = {
				success: false,
				amount: -(amount),
				resultBalance: this.balance,
				transactionDate: new Date(),
				description: description,
				transactionOrigin:transactionOrigin,
				errorMessage: 'You have met your limit of 6 withdrawals by phone or web this month.'
			};
			return thisTransaction;
		}
		else{
			return super.withdrawMoney(amount, description, transactionOrigin);
		}

	}



	private _hasSixWithdrawalsFromWebAndPhone(): boolean{
		let numPhoneOrWebTransactions = 0;
		let theDate = new Date();
		let currentMonth = theDate.getMonth();
		let currentYear = theDate.getFullYear();
		this.accountHistory.forEach(
			function(transaction){
				if (transaction.success && transaction.transactionOrigin &&
					(transaction.transactionOrigin === TransactionOrigin.web ||
						transaction.transactionOrigin === TransactionOrigin.phone)){
					if (monthOf(transaction.transactionDate) === currentMonth &&
						yearOf(transaction.transactionDate) === currentYear){
						++numPhoneOrWebTransactions;
					}
				}

				function monthOf(date){
					return date.getMonth();
				}

				function yearOf(date){
					return date.getFullYear();
				}
			}
		);
		return (numPhoneOrWebTransactions >= 6);
	}



}