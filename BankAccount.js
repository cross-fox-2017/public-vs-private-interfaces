"use strict"
const COSTUMER_NAME = new WeakMap();
const TYPE = new WeakMap()
const ACCT_NUMBER = new WeakMap();

class BankAccount {
  constructor(customer_name, type, acct_number) {
    COSTUMER_NAME.set(this, customer_name);
    TYPE.set(this, type);
    ACCT_NUMBER.set(this, acct_number)
  }

  set setCostumerName(costumer_name) {
    COSTUMER_NAME.set(this, customer_name);
  }
  set setType(type) {
    TYPE.set(this, type);
  }
  set setAcctNumber(acct_number) {
    ACCT_NUMBER.set(this, acct_number)
  }

  get setCostumerName() {
    return COSTUMER_NAME.get(this);
  }
  get setType() {
    return TYPE.get(this);
  }
  get setAcctNumber() {
    return ACCT_NUMBER.get(this)
  }

  to_s() {
    console.log( `${COSTUMER_NAME.get(this)}: ${TYPE.get(this)} # ${ACCT_NUMBER.get(this)}` ); 
  }

  cover_digits() {
    //
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
my_acct.to_s() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
