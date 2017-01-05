"use strict"

// const ACCT_NUMBER = new WeakMap()

class BankAccount {
  constructor(customer_name, type, acct_number) {
    this._customer_name = customer_name;
    this._type = type;
    this._acct_number = acct_number;
  }

  account_number() {
    return this._acct_number
  }
  
  account_number(newAccount_number) {
    return this._acct_number = newAccount_number
  }
  
  to_s() {
	return console.log(`${this._customer_name}: ${this._type}# ${this._acct_number}`)
  }

  cover_digits() {
    //
    let data =this._acct_number;
	if(data.match(/\d{3}(-)\d{3}(-)\d{3}/gi)){
		data = data.replace(/[0-9]{3}.[0-9]{3}/,'***-***');
	}
  return console.log(data);
  }

}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

console.log(my_acct)
// console.log(my_acct.account_number)

// release 0
my_acct.account_number('333-555-238')
my_acct.to_s() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
