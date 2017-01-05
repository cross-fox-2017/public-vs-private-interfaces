"use strict"

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    this.customer_name = customer_name;
    this.type = type;
    this._acct_number = acct_number
  }

  get account_number() {
    //
  }

  to_s() {
    return console.log(`${this.customer_name}: ${this.type}# ${this._acct_number}`)
  }

  cover_digits() {
    //
  }

  set setAccNumber(val){
    this._acct_number = val;
  }

  get getAccNumber(){
    return this._acct_number;
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

console.log(my_acct)
console.log(my_acct.getAccNumber)

// release 0
my_acct.to_s() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
