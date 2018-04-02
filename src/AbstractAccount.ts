import {Account} from './Account.interface';
import {Transaction} from './Transaction.interface';
import {TransactionOrigin} from "./TransactionOrigin";
import {AccountType} from "./AccountType";


export abstract class AbstractAccount implements Account{

	accountHolderName: string;
	accountHolderBirthDate: Date;
	accountHolderAge:number;
	balance: number;
	accountType: AccountType;
	accountHistory: Transaction[] = [];
	accountCreationDate: Date;
	initialBalance: number;
	protected _interestRate: number;


	constructor(
		accountHolderName:string,  accountHolderBirthDate:Date,
		initialBalance:number,  interestRate){

		this.accountCreationDate = new Date();
		this.accountHolderName = accountHolderName;
		this.accountHolderBirthDate = accountHolderBirthDate;
		this.accountHolderAge = getAge(this.accountHolderBirthDate);
		this.initialBalance = initialBalance;
		this.balance = initialBalance;
		this._interestRate = interestRate;


		function getAge(birthDate): number{
			let currentYear = (new Date()).getFullYear();
			return currentYear - birthDate.getFullYear();
		}
	}


	addInterest(): void{
		let interest = this.balance * this._interestRate / 12;
		interest = this._roundTo2Decimals(interest);
		this.balance += interest;
	}

	addFirstMonthsInterest(){
		let interest = (this.initialBalance * this._interestRate / 12);
		interest = this._roundTo2Decimals(interest);
		this.balance += interest;
	}


	withdrawMoney(amount: number, description: string, transactionOrigin: TransactionOrigin): Transaction {

		let success:boolean, errorMsg:string;
		amount = this._roundTo2Decimals(amount);

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
			transactionOrigin:transactionOrigin,
			errorMessage: errorMsg
		};

		this.accountHistory.push(thisTransaction);
		return thisTransaction;

	}


	depositMoney(amount: number, description: string): Transaction {

		let success:boolean, errorMsg:string;
		amount = this._roundTo2Decimals(amount);

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


	advanceDate(numberOfDays: number): Date {

		let d = new Date();
		let year = d.getFullYear();
		let month = d.getMonth();
		let day = d.getDate();

		let newDay = day + numberOfDays;

		while (newDay > numberOfDaysInMonth(month, year)){
			newDay -=  numberOfDaysInMonth(month, year);
			month += 1;
			// I don't think he wants us to do this:
			//this.ifPreviousMonthWasAccountsFirstMonth_addInterestForFirstMonth(year, month);

			this.addInterest();

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


	protected ifPreviousMonthWasAccountsFirstMonth_addInterestForFirstMonth(year, month){

		let accountCreationYear = this.accountCreationDate.getFullYear();
		let accountCreationMonth = this.accountCreationDate.getMonth();
		if (accountCreationYear === year &&
			(accountCreationMonth === (month - 1))
		){
			this.addFirstMonthsInterest();
		}
	}


	protected _roundTo2Decimals(number){
		return this._precisionRound(number, 2);
	}


	protected _precisionRound(number, precision) {
		let factor = Math.pow(10, precision);
		return Math.round(number * factor) / factor;
	}

}


