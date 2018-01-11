
export interface Account {
  accountHolderName: string;
  accountHolderBirthDate: Date;
  balance: number;
  accountType: AccountType;
  accountHistory: Transaction[];
  withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction;
  depositMoney(amount: number, description: string): Transaction;
  advanceDate(numberOfDays: number);

}


export abstract class AbstractAccount implements Account{

	accountHolderName: string;
	accountHolderBirthDate: Date;
	balance: number;
	accountType: AccountType;
	accountHistory: Transaction[];

	withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
		throw new Error("Method not implemented.");
	}

	depositMoney(amount: number, description: string): Transaction {
		throw new Error("Method not implemented.");
	}

	advanceDate(numberOfDays: number) {
		throw new Error("Method not implemented.");
	}
}
