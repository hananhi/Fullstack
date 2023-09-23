let op = prompt('give us op') ;
let num1=prompt('give us the first number');
let num2= prompt('give us the second num') ;

num1 =Number(num1) ;
num2=Number(num2) ;

function basicOp(op , num1 , num2 ){

    return ( eval (num1 + op+ num2 ));

}

console.log(basicOp(op, num1 ,num2));