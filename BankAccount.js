"use strict"

// const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    this._customer_name = customer_name;
    this._type = type;
    this._acct_number = acct_number;
  }

  set account_number(value){
    this._acct_number = value;
  }

  get account_number() {
    return this._acct_number;
  }

  to_s() {
    var hasil = [];
    hasil[this._customer_name]=this._type+"# "+this._acct_number
    return hasil;
  }

  cover_digits() {
    var hasil = [];
    hasil[this._customer_name]=this._type+"# "+"***_***_"+this._acct_number.match(/\d{3}$/g)
    return hasil;
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
console.log(my_acct.to_s()) // "Hacktivate: Checking# 333-555-888"

// release 1
console.log(my_acct.cover_digits()) // "Hacktivate: Checking# ***-***-888"
