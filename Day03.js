


// String Indexing

let userName = "Dhoni";
console.log(userName);

// 'new' keyword covert string into String-Object
let newUser = new String("Vijay Sethupathi");

// String Indexing
    // D h o n i
    // 0 1 2 3 4

console.log("String index:",userName[3]);

// length of String -- [space is also a char it also occupy index value]

console.log("length of string:",userName.length);

// last Index: length - 1

console.log("Second last Index value:",newUser[newUser.length-2]);


/*-----------------  String Methods  -----------------*/

// String are Immutable 

let user = "   Dhoni Bhai   "

console.log("\n---- String Methods ----\n");

// Length Method
console.log("Length",user.length);


// Trim Method ----> it's remove extra space from string.
console.log("User name with space:",user);
console.log("Trim",user.trim()); 
console.log("Original string is not change:",user);
console.log("Length",user.length);

// for changing original string we need to define new variable.
let changeUser = user.trim();
console.log("user name is update:",changeUser);
console.log("Length",changeUser.length);


// toUpperCase() --- convert all char into upper case
console.log("Uppercase:",changeUser.toUpperCase());


// toLowerCase() --- convert all char into upper case
console.log("Lowercase:",changeUser.toLowerCase());


// slice(start index, end index)
console.log("Slice value:",changeUser.slice(0,4));

















