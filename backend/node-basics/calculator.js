function add(a,b){
    console.log("sum of two number=",a+b)
}

function subtract(a,b){
    console.log("subtraction of 2 number =",a-b);
}


function multiply(a,b){
    console.log("multiply of two number is=",a*b)
}

exports.calculator = {
    add,
    subtract,
    multiply
}