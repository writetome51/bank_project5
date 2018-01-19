import { AbstractAccount } from './AbstractAccount';
import {Transaction} from "./Transaction.interface";


export class CheckingAccount extends AbstractAccount {

	constructor(){
		super();

		this.balance = 1000;

	}

}


