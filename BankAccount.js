"use strict"

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    ACCT_NUMBER.set(this, acct_number);
    this._customer_name = customer_name;
    this._type          = type;
    // this._acct_number   = acct_number;
  }

  // customer name
  setCustomer_name(valName){
    this._customer_name = valName;
  }

  getCustomer_name(){
    return this._customer_name;
  }

  // type
  setType(valType){
    this._type = valType;
  }

  getType(){
    return this.type;
  }

  // acc number
  setAccount_number(valNumber){
    ACCT_NUMBER._acct_number = (this, valNumber);
  }

  getAccount_number() {
    return ACCT_NUMBER.get(this);
  }

  to_s() {
    return `${this._customer_name} : ${this._type}# ${ACCT_NUMBER.get(this)}`;
  }

  cover_digits() {
    return ACCT_NUMBER.get(this).replace(/\d{3}-\d{3}/,"***-***")
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

console.log(my_acct)
console.log(my_acct.getAccount_number());

// release 0
console.log(my_acct.to_s()) // "Hacktivate: Checking# 333-555-888"

// release 1
console.log(my_acct.cover_digits()) // "Hacktivate: Checking# ***-***-888"
