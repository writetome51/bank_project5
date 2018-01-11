import { Account, AbstractAccount } from './AbstractAccount';
import { displayClassName, displayClassNameWithPurpose } from "./decorators";

@displayClassNameWithPurpose('to prove typescript wrong')

export class CheckingAccount extends AbstractAccount {
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