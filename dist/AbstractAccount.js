"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractAccount = /** @class */ (function () {
    function AbstractAccount(accountHolderName, accountHolderBirthDate, initialBalance, interestRate) {
        this.accountHistory = [];
        this.accountCreationDate = new Date();
        this.accountHolderName = accountHolderName;
        this.accountHolderBirthDate = accountHolderBirthDate;
        this.accountHolderAge = getAge(this.accountHolderBirthDate);
        this.initialBalance = initialBalance;
        this.balance = initialBalance;
        this._interestRate = interestRate;
        function getAge(birthDate) {
            var currentYear = (new Date()).getFullYear();
            return currentYear - birthDate.getFullYear();
        }
    }
    AbstractAccount.prototype.addInterest = function () {
        var interest = this.balance * this._interestRate / 12;
        interest = this._roundTo2Decimals(interest);
        this.balance += interest;
    };
    AbstractAccount.prototype.addFirstMonthsInterest = function () {
        var interest = (this.initialBalance * this._interestRate / 12);
        interest = this._roundTo2Decimals(interest);
        this.balance += interest;
    };
    AbstractAccount.prototype.withdrawMoney = function (amount, description, transactionOrigin) {
        var success, errorMsg;
        amount = this._roundTo2Decimals(amount);
        if (amount < 0) {
            success = false;
            errorMsg = 'Withdraw amount must be greater than zero.';
        }
        else if (amount < this.balance) {
            this.balance -= amount;
            success = true;
            errorMsg = '';
        }
        else {
            success = false;
            errorMsg = 'Insufficient funds.  Withdrawal amount too high.';
        }
        var thisTransaction = {
            success: success,
            amount: -(amount),
            resultBalance: this.balance,
            transactionDate: new Date(),
            description: description,
            transactionOrigin: transactionOrigin,
            errorMessage: errorMsg
        };
        this.accountHistory.push(thisTransaction);
        return thisTransaction;
    };
    AbstractAccount.prototype.depositMoney = function (amount, description) {
        var success, errorMsg;
        amount = this._roundTo2Decimals(amount);
        if (amount > 0) {
            this.balance += amount;
            success = true;
            errorMsg = '';
        }
        else {
            success = false;
            errorMsg = 'Deposit amount must be greater than zero.';
        }
        var thisTransaction = {
            success: success,
            amount: amount,
            resultBalance: this.balance,
            transactionDate: new Date(),
            description: description,
            errorMessage: errorMsg
        };
        this.accountHistory.push(thisTransaction);
        return thisTransaction;
    };
    AbstractAccount.prototype.advanceDate = function (numberOfDays) {
        var d = new Date();
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = d.getDate();
        var newDay = day + numberOfDays;
        while (newDay > numberOfDaysInMonth(month, year)) {
            newDay -= numberOfDaysInMonth(month, year);
            month += 1;
            this.addInterest();
            this.ifPreviousMonthWasAccountsFirstMonth_addInterestForFirstMonth(year, month);
            if (month > 11) {
                month = 0;
                year += 1;
            }
        }
        return new Date(year, month, day);
        function numberOfDaysInMonth(monthID, yearID) {
            var feb;
            //Check if supplied month is February...
            if (monthID === 1) {
                if (isLeapYear(yearID))
                    feb = 29;
                else
                    feb = 28;
            }
            var dayCountsForEachMonth = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            return dayCountsForEachMonth[monthID];
        }
        function isLeapYear(year) {
            return ((year % 400 === 0) ||
                (year % 4 === 0 && year % 100 !== 0));
        }
    };
    AbstractAccount.prototype.ifPreviousMonthWasAccountsFirstMonth_addInterestForFirstMonth = function (year, month) {
        var accountCreationYear = this.accountCreationDate.getFullYear();
        var accountCreationMonth = this.accountCreationDate.getMonth();
        if (accountCreationYear === year &&
            (accountCreationMonth === (month - 1))) {
            this.addFirstMonthsInterest();
        }
    };
    AbstractAccount.prototype._roundTo2Decimals = function (number) {
        return this._precisionRound(number, 2);
    };
    AbstractAccount.prototype._precisionRound = function (number, precision) {
        var factor = Math.pow(10, precision);
        return Math.round(number * factor) / factor;
    };
    return AbstractAccount;
}());
exports.AbstractAccount = AbstractAccount;
//# sourceMappingURL=AbstractAccount.js.map