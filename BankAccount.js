"use strict"

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    this.customer_name = customer_name;
    this.type = type;
    ACCT_NUMBER.set(this, acct_number);

  }

  get account_number() {
    return ACCT_NUMBER.get(this)
  }

  to_s() {
    return `${this.customer_name} : ${this.type}# ${ACCT_NUMBER.get(this)}`
  }

  cover_digits() {
    //
    var digit = this.account_number;
    digit = digit.replace(/\d{3}(?=\-)/g,'***')
    return `${this.customer_name} : ${this.type} ${digit}`
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
console.log(my_acct.to_s()) // "Hacktivate: Checking# 333-555-888"

// release 1
console.log(my_acct.cover_digits()) // "Hacktivate: Checking# ***-***-888"
