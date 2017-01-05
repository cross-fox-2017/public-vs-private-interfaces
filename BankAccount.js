"use strict"

const _ACCT_NUMBER = Symbol('acct_number');

class BankAccount {
  constructor(customer_name, type, acct_number) {
    this.customer_name = customer_name;
    this.type = type;
    this[_ACCT_NUMBER] = acct_number;
  }

  get account_number() {
    return this[_ACCT_NUMBER];
  }

  to_s() {
    return console.log(`${this.customer_name}: ${this.type}# ${this[_ACCT_NUMBER]}`)
  }

  cover_digits() {
    let regex = /\d+-\d+/
    return console.log(`${this.customer_name}: ${this.type}# ${this[_ACCT_NUMBER].replace(regex, '***-***')}`)
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
my_acct.to_s() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
