import { AbstractAccount } from './AbstractAccount';
import {Transaction} from "./Transaction.interface";
import { displayClassName, displayClassNameWithPurpose } from "./decorators";

@displayClassNameWithPurpose('to prove typescript wrong')

export class CheckingAccount extends AbstractAccount {



}