import {Account} from './Account.interface';
import {Transaction} from './Transaction.interface';


export abstract class AbstractAccount implements Account{

	accountHolderName: string;
	accountHolderBirthDate: Date;
	balance: number;
	accountType: AccountType;
	accountHistory: Transaction[];

	constructor(){
		this.accountHistory = this.accountHistory || [];
	}

	withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {
		let success:boolean, errorMsg:string;

		if (amount < 0){
			success = false;
			errorMsg = 'Withdraw amount must be greater than zero.';
		}

		else if (amount < this.balance){
			this.balance -= amount;
				success = true;
				errorMsg = '';
		}
		else{
				success = false;
				errorMsg = 'Insufficient funds.  Withdrawal amount too high.';
		}

		let thisTransaction = {
			success: success,
			amount: -(amount),
			resultBalance: this.balance,
			transactionDate: new Date(),
			description: description,
			errorMessage: errorMsg
		};

		this.accountHistory.push(thisTransaction);
		return thisTransaction;

	}


	depositMoney(amount: number, description: string): Transaction {
		let success:boolean, errorMsg:string;
		if (amount > 0){
			this.balance += amount;
			success = true;
			errorMsg='';
		}
		else{
			success = false;
			errorMsg = 'Deposit amount must be greater than zero.'
		}

		let thisTransaction = {
			success: success,
			amount: amount,
			resultBalance: this.balance,
			transactionDate: new Date(),
			description: description,
			errorMessage: errorMsg
		};

		this.accountHistory.push(thisTransaction);
		return thisTransaction;
	}


	advanceDate(numberOfDays: number) {

		let d = new Date();
		let year = d.getFullYear();
		let month = d.getMonth();
		let day = d.getDate();

		let newDay = day + numberOfDays;

		while (newDay > numberOfDaysInMonth(month, year)){
			newDay -=  numberOfDaysInMonth(month, year);
			month += 1;

			if (month > 11){
				month = 0;
				year += 1;
			}
		}

		return new Date(year, month, day);


		function numberOfDaysInMonth(monthID, yearID): number{
			let feb;

			//Check if supplied month is February...
			if (monthID === 1) {
				if (isLeapYear(yearID))
					feb = 29;
				else feb = 28;
			}

			let dayCountsForEachMonth = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

			return dayCountsForEachMonth[monthID];
		}


		function isLeapYear(year): boolean {
			return ((year % 400 === 0) ||
				(year % 4 === 0  &&  year % 100 !== 0));
		}


	}
}
