"use strict"

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    this._customerName = customer_name;
    this._type = type;
    this._accNumber = acct_number;
    //
  }

  get account_number() {
    return this._accNumber;
    //
  }

  to_s() {
    console.log( `${this._customerName}: ${this._type}# ${this._accNumber}`);
    //
  }

  cover_digits() {
    var digit = this._accNumber.replace(/([0-9]{3})-[0-9]{3}/g,'***-***')
    console.log(digit);
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
my_acct.to_s() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
