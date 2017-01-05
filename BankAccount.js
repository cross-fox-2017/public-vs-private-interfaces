"use strict"

const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    //
    this.customer_name = customer_name
    this.type = type
    ACCT_NUMBER.set(this, acct_number)

  }

  set accountNumber(num){
    ACCT_NUMBER.set(this, num)
  }

  get account_number() {
    //
    return ACCT_NUMBER.get(this)
  }

  to_s() {
    //
    console.log( this.customer_name + ": " + this.type + "# " + ACCT_NUMBER.get(this) )
  }

  cover_digits() {
    //
    let splitAccNum =  ACCT_NUMBER.get(this).split('-')
    console.log(splitAccNum)
    let hideNum = splitAccNum.splice(0, 2, '***','-','***', '-')
    // console.log(splitAccNum.join(' '))


    console.log (( this.customer_name + ": " + this.type + "# " + splitAccNum.join('') ))
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
my_acct.to_s() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
