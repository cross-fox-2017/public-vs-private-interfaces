"use strict"

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    //
    this._customer_name = customer_name
    this._type = type
    ACCT_NUMBER.set(this, acct_number)
  }

  set account_number(val) {
    //
    // this._customer_name = val
  }
  set type(val){
    this._type = val
  }

  get cusNumber(){
    return ACCT_NUMBER.get(this)
  }


  to_s() {
    //
    // return `${this.customer_name}: ${this.type}# ${this.acct_number}`
    console.log(`${this._customer_name}: ${this._type}# ${this.cusNumber}`);
  }

  cover_digits() {
    //
    var digit =  this.cusNumber.replace(/\d{3}.\d{3}/,'***-***')
    console.log(`${this._customer_name}: ${this._type}# ${digit}`);
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

// console.log(my_acct)
// console.log(my_acct.account_number)

// release 0
my_acct.to_s() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
