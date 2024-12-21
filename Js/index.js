/*
var num =4;
var str = "hello world";
var bool = false;
var undef = undefined;
var none= null;
var bigInt = 2344242343242432423423423324234234n;
var symbols = Symbol;


// backtick
var name = `helojda thsi is hashaheen akhan a
 idikdnkdkfjd djkdjdajffajdjdkfjja.\n`
 console.log(name);

 typeof("hello") -  string
// +('100') - unary operator;

var a = 4;
console.log(-a); // -4

+"jerry" // NaN -s a number which is not a number 
typeof(NaN) // number

parseInt('100djkafjakjfaj') // will take out numbers untill string starte;
parseInt('kadfjak100000kadfldkj') // NaN;

// 100 + "" = conversion will happen 100 will in string;

boolean
true;
false;

// true+1 = 2
typeof boolean will be boolean
typeof(true) // boolean
typeof(typeof(true)) // string;


undefined;
its a keyword given by js;
typeof(undefined) // undefined
typeof(typeof(undefined)) // string;
+undefined; // NaN;

typeof(null) // object;
typeof(typeof(null)) // string;
+ null = 0;
its a bug in js starting days there was a bug and so many websites had build with this bug if it was tried to fix so websites could crashed;



Bigint;
// range is 2^53 -1 to -2^53-1
let big = 1234567890123456789012345678901234567890n;

// using bigint constructior;
let big = BigInt("1234567890123456789012345678901234567890");
console.log(big); // Output: 1234567890123456789012345678901234567890n


*/



// -----------------------------------------------VARIABLES------------------
/*
In JavaScript, variables are used to store and manage data values in a program. They act as named containers or placeholders that can hold different types of data, such as numbers, strings, objects, or more.

let firstName = "jery"
let userIntro = 
'hi this is '
 + firstName
  + lastName;
console.log('userIntro', userIntro);


let can be reassigned but cosnt cant be;
*/


/*
in Developer tools
debugger;
var aa = "hello"
var a = 4;
var name = "Jerry";
let age = 3;
const yearOfBirth = 1997;


as soon as block scope variables executes block scope will vanish;
{
    let block = 44;
    const bloak = 34;
}
console.log(name);
console.log(age);
console.log(yearOfBirth);


function add(a,b){
 return a+b;   
}

console.log(add(4,5));


*/


// console.log(alert("you are done"));
// console.log(confirm("you are done?"));

// console.log(prompt("Are you sure"))
// const num1= +prompt("enter ums")
// const num2 =+prompt("enter num2")

// console.log(num1+num2)







// string menthods
const str2 = "world";
trim();
include()// include is case sensitive;
indexof() // gives index, index of: -1
replace() // repalces the string;
replaceAll() // replaces all chars;
padStart() // "3456".padStart(16,"#")
padEnd() // "3456".padStart(16,"#")
CharAt();// index
charCodeAt() // gives the code of char;

Math.floor(-4.6) // 5;
Math.ceil(2.4) // 3
Math.ceil(-2.4)//2.4 is smaller than 2 so it will convert it to 2 increae the value;
Math.pow()
Math.round();
Math.sqrt() //
Math.random();
Math.floor(Math.random() * 20) // will give the range between 0-20;


// we need to convrt the value from pormpt of input value 
// bcoz with + it concatinates the value ;
// and with other operation it works like Num;



// -----------------------------TRUTHY AND FALSY VALUE--------------------

// 0 and NaN only falsy value in number
null
undefined;
'' // empty string; 
!!!!!!!!!!null // 10 not operator; false;
!!!!!null; // true;


// 5>6>7 - 5>6 is false so false value is 1;
// 1>7; false
// so the out put for 
// 5>6>7 = false;