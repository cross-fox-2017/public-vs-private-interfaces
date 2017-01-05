"use strict"

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    //ACCT_NUMBER.set(this, acct_number);
    this._customer_name = customer_name;
    this._type          = type;
    this._acct_number   = acct_number;
  }

  // customer name
  set setCustomer_name(valName){
    this._customer_name = valName;
  }

  get getCustomer_name(){
    return getCustomer_name.customer_name;
  }

  // type
  set setType(valType){
    this._type = valType;
  }

  get getType(){
    return getType.type;
  }

  // acc number
  set setAccount_number(valNumber){
    this._acct_number = valNumber;
  }

  get getAccount_number() {
    return getAcct_number.acct_number;
  }

  to_s() {
    return `${this._customer_name} : ${this._type}# ${this._acct_number}`;
  }

  cover_digits() {
    //
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

console.log(my_acct)
console.log(my_acct._acct_number)

// release 0
console.log(my_acct.to_s()) // "Hacktivate: Checking# 333-555-888"

// release 1
// my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
