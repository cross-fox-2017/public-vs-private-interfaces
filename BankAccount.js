 "use strict"

const ACCT_NUMBER = new WeakMap()

class BankAccount {

  constructor(customer_name_par, type_par, acct_number_par) {
    this.customer_name = customer_name_par;
    this.type = type_par;
    this._acct_number = acct_number_par;
  }

  get account_number() {
    return this._acct_number;
  }

  set account_number(acct_number) {
    this._acct_number = acct_number;
  }

  to_s() {
    return `"${this.customer_name}: ${this.type}# ${this.account_number}"`; // get
  }

  cover_digits() {
    return `"${this.customer_name}: ${this.type}# ${this.account_number.replace(/([0-9]+)-([0-9]+)-([0-9]+)/g, "***-***-$3")}"`;
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

console.log(my_acct)
console.log(my_acct.account_number) // get

// release 0
console.log(my_acct.to_s()); // "Hacktivate: Checking# 333-555-888"

// release 1
console.log(my_acct.cover_digits()); // "Hacktivate: Checking# ***-***-888"
