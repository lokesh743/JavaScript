// Let talk about Variable => [ var, let and const ]

const accountId = 144553;
let accountEmail = "Rockybhai@gmail.com";   //In JS 'let' is use bec of scope.
var accountPassword = "12345";              //'var' is not use in JS bec issue in block Scope & function scope.
accountCity = "Ajmer";
let accountState;


// accountId = 2;                            //We can not change constant value.

accountEmail = "RC@gmail.com";
accountPassword = "54321";

// console.log(accountId);

console.log(accountState);                  // This value show "Undefined" bec there no any value assign in 'accountState'.


// For multiple value use Console Table to See all value in tabuler form.
console.table([accountId,accountEmail,accountPassword,accountCity]);











