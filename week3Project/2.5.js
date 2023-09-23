let num = prompt('give us number') ;

num = Number(num) ;
function summation (num) {

    let sum =num ;

 while(num !== 1){
 
  sum = sum+(num-1) ;
  num=num-1  ;
 }
 return sum ;
    
}
console.log(summation(num)) ;