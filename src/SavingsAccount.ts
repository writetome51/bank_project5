import { AbstractAccount } from './AbstractAccount';
import {Transaction} from "./Transaction.interface";



export class SavingsAccount extends AbstractAccount {

	constructor(){
		super();

		this.balance = 10000;
	}
}