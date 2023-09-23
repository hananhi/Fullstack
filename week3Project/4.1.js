function fabonacci (){
    let num1=0 ;
    let num2=1 ;

    let sum=0 ;
    for( ; ; (num1=num2 , num2=sum )){
       console.log(num2);
       sum =num1+num2 ;
        }
}

console.log(fabonacci());