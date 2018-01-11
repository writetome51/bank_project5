
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
