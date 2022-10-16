// +---Addition 
// -  Substraction 

// *  multiplication 

// /  quotient 

// %   remainder

var a = 50,b = 30

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

//Assignment Operators

var a = 30;
a+=2

a=a+2;

//Increament And Dectrement Operators

// var a = 20;
// ++a -----pre increment 

// a++ -----post increment 

// --a  pre decrement 

// a-- post decrement 

var a = 20

console.log(++a) //21
var a = 20
console.log(a++)
console.log(a)

var b = 30;

console.log(--b);
console.log(b)
var b = 30;
console.log(b--);
console.log(b)


//Comparision Operator 

var a = 20,b=30
// >, <, >=, <=, !=, ==, ===,
console.log(a>b)
console.log(a<b)
console.log(a!=b)
console.log(a>=b)
console.log(a<=b)
var x = 40

var y = "40"
console.log(x==y)//true
console.log(x===y)//false 
            // ===  based on values and data type 
            // ==  based on only values 

//Logical Operator   

// && - true if both are true
// || -true if either a or b is true

// ! - reverse of true and false

// true && true =true 
// true && false= false 
// false && true =false 
// false && false=false 

// true || false =true

// false || false =false 

// false || true =true 
// true || true=true 

// !true= false 
// !false =true 

a = 30,b =40,c =10

console.log(a>c && b>c)
console.log(a>b && (b>a || c>b))
