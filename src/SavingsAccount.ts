import { AbstractAccount } from './AbstractAccount';
import {Transaction} from "./Transaction";
import { displayClassName, displayClassNameWithPurpose } from "./decorators";

@displayClassNameWithPurpose('to prove typescript wrong')

export class SavingsAccount extends AbstractAccount {


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