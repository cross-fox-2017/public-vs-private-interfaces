"use strict"

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    //
    this.name = customer_name
    this.type = type
    ACCT_NUMBER.set(this, acct_number)
  }

  set acct_number(num) {
    ACCT_NUMBER.set(this, num)
  }

  get account_number() {
    //
    return ACCT_NUMBER.get(this)
  }

  to_s() {
    //
    console.log(`${this.name}: ${this.type}# ${ACCT_NUMBER.get(this)}`)
    // console.log(this.name + ': ' + this.type + '# ' + ACCT_NUMBER.get(this));
  }

  cover_digits() {
    //
    let tmp = ACCT_NUMBER.get(this).split('-')
    tmp.splice(0,2,"***","***")
    let masked = tmp.join('-')
    console.log(`${this.name}: ${this.type}# ${masked}`)
    //console.log(this.name + ': ' + this.type + '# ' + masked);
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
my_acct.to_s() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
