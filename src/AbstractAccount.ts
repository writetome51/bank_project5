import {Account} from './Account.interface';
import {Transaction} from './Transaction';


export abstract class AbstractAccount implements Account{

	accountHolderName: string;
	accountHolderBirthDate: Date;
	balance: number;
	accountType: AccountType;
	accountHistory: Transaction[];

	withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
		if (amount < this.balance){
			this.balance -= amount;
		}
		throw new Error("Method not implemented.");
	}

	depositMoney(amount: number, description: string): Transaction {
		throw new Error("Method not implemented.");
	}

	advanceDate(numberOfDays: number) {
		throw new Error("Method not implemented.");
	}
}
