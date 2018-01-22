import { AbstractAccount } from './AbstractAccount';
import {Transaction} from "./Transaction.interface";
import {TransactionOrigin} from "./TransactionOrigin";



export class SavingsAccount extends AbstractAccount {

	balance = 10000;

	constructor(){
		super();

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


	private _hasSixWithdrawalsFromWebAndPhone(){
		let numPhoneOrWebTransactions = 0;

		this.accountHistory.forEach(
			function(transaction){
				if (transaction.success && transaction.transactionOrigin &&
					(transaction.transactionOrigin === TransactionOrigin.web ||
						transaction.transactionOrigin === TransactionOrigin.phone)){
					++numPhoneOrWebTransactions;
				}
			}
		);
		return (numPhoneOrWebTransactions >= 6);
	}


}