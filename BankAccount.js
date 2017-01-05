"use strict"

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    this._customer_name = customer_name;
    this._type = type;
    ACCT_NUMBER.set(this, acct_number)
  }

  get account_number() {
    //
  }

  to_s() {
    return console.log(`${this._customer_name}: ${this._type}# ${this.getAccNumber}`)
  }

  cover_digits() {
    var cover = this.getAccNumber.replace(/\d{3}.\d{3}/, "***-***")
    return console.log(`${this._customer_name}: ${this._type}# ${cover}`)
  }
  set setCustomer_name(val){
    this._customer_name = val;
  }
  set setAccNumber(val){
    ACCT_NUMBER.set(this, val);
  }
  set setType(val){
    this._type = val;
  }

  get getAccNumber(){
    return ACCT_NUMBER.get(this);
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

console.log(my_acct)
console.log(my_acct.getAccNumber)

// release 0
my_acct.to_s() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
