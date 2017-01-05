"use strict"

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    ACCT_NUMBER.set(this, acct_number)
    this._name = customer_name
    this._tipe = type

  }

  get account_number() {
    return ACCT_NUMBER.get(this)
  }

  to_s() {
    console.log(`${this._name}: ${this._tipe}# ${ACCT_NUMBER.get(this)}`)
  }

  cover_digits() {
    var regex = this.account_number.replace (/\d{3}.\d{3}/,'***-***');
    console.log(`${this._name}: ${this._tipe}# ${regex}`)
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

//console.log(my_acct)
//console.log(my_acct.account_number)

// release 0
my_acct.to_s() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
