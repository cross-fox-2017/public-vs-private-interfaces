"use strict"
// gw belum tau pasti fungsi WeakMap untuk apa
// disini kita definisikan variabel untuk menampung nilai setter
const COSTUMER_NAME = new WeakMap();
const TYPE = new WeakMap()
const ACCT_NUMBER = new WeakMap();

class BankAccount {
  // ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ----------
  // Constructor seperti biasa
  constructor(customer_name, type, acct_number) {
    COSTUMER_NAME.set(this, customer_name);
    TYPE.set(this, type);
    ACCT_NUMBER.set(this, acct_number)
  }

  // ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ----------
  // Set satu per satu variabel
  set setCostumerName(costumer_name) {
    COSTUMER_NAME.set(this, customer_name);
  }
  set setType(type) {
    TYPE.set(this, type);
  }
  set setAcctNumber(acct_number) {
    ACCT_NUMBER.set(this, acct_number)
  }

  // ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ----------
  // Get satu per satu variabel
  get setCostumerName() {
    return COSTUMER_NAME.get(this);
  }
  get setType() {
    return TYPE.get(this);
  }
  get setAcctNumber() {
    return ACCT_NUMBER.get(this)
  }

  // ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ---------- ----------
  // menampilkan isi object
  to_s() {
    console.log( `${COSTUMER_NAME.get(this)}: ${TYPE.get(this)}# ${ACCT_NUMBER.get(this)}` );
  }
  // meng ganti digit angka di depan dengan huruf porno
  cover_digits() {
    console.log( `${COSTUMER_NAME.get(this)}: ${TYPE.get(this)}# ${ACCT_NUMBER.get(this) .replace(/\d{3}.\d{3}/,"***-***")}` );
  }
}

let my_acct = new BankAccount("Hacktivate", "Checking", "333-555-888")

// release 0
my_acct.to_s() // "Hacktivate: Checking# 333-555-888"

// release 1
my_acct.cover_digits() // "Hacktivate: Checking# ***-***-888"
