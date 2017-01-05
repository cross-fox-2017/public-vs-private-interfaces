"use strict"

let _ACCT_NUMBER = Symbol("acct_number");

class BankAccount {
  constructor(customer_name, type, acct_number) {
    this.customer_name = customer_name;
    this.type = type;
    this[_ACCT_NUMBER] = acct_number;
    //
  }

  set account_number(acct_number){

        this[_ACCT_NUMBER] = acct_number;
  }

  get account_number() {

      return this[_ACCT_NUMBER];
  }

  to_s() {

      console.log(`${this.customer_name} : ${this.type}# ${this.account_number}`);
  }

  cover_digits() {

      var num = this.account_number.split("-");
      var result = [];

      for(let i = 0; i < num.length ; i++)
      {
            if(i === num.length-1)
            {
              result.push(num[i]);
            }else{
              result.push("***");
            }
      }

       console.log(`${this.customer_name} : ${this.type}# ${result.join("-")}`);
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

console.log(my_acct)
console.log(my_acct.account_number)

// release 0
my_acct.to_s() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
