"use strict"

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    //
    this.customer_name = customer_name;
    this.type          = type;
    ACCT_NUMBER.set(this, acct_number);
  }

  get account_number() {
    //
    return ACCT_NUMBER.get(this)
  }

  to_s() {
    //
    return `${this.customer_name} : ${this.type} # ${ACCT_NUMBER.get(this)}`
  }

  cover_digits() {
    //
    let hideNum = this.account_number;
    hideNum = hideNum.replace(/\d{3}.\d{3}.\d{1}/, "***-***-*");
    return `${this.customer_name} : ${this.type} # ${hideNum}`
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
// Check without hide rekening number
console.log (my_acct.to_s()) // "Hacktivate: Checking# 333-555-888"

// release 1
// Check with hidden rekening number
console.log (my_acct.cover_digits()) // "Hacktivate: Checking# ***-***-888"
