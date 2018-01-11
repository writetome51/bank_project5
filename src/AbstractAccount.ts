import {Account} from './Account.interface';
import {Transaction} from './Transaction';


export abstract class AbstractAccount implements Account{

	accountHolderName: string;
	accountHolderBirthDate: Date;
	balance: number;
	accountType: AccountType;
	accountHistory: Transaction[];

	withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
		let success, errorMsg;
		if (amount < this.balance){
			this.balance -= amount;
				success = true;
				description = 'Successful withdrawal of $' + amount;
				errorMsg = '';
		}
		else{
				success = false;
				description = 'Unsuccessful withdrawal of $' + amount;
				errorMsg = 'Insufficient funds.  Withdrawal amount too high.';
		}
		return {
			success: success,
			amount: -(amount),
			resultBalance: this.balance,
			transactionDate: new Date(),
			description: description,
			// errorMessage will be an empty string when success is true:
			errorMessage: errorMsg
		};

	}

	depositMoney(amount: number, description: string): Transaction {
		throw new Error("Method not implemented.");
	}

	advanceDate(numberOfDays: number) {
		throw new Error("Method not implemented.");
	}
}
