function Tribonaci (){
    let num1=0 ;
    let num2=1 ;
    let num3 =1 ;

    let sum=0 ;
    
    console.log(num1);
    console.log(num2);
    for( ;  ; (num1=num2 , num2=num3 , num3=sum )){
        console.log(num3);
       sum = num1+num2+num3 ;
       
        }
}

console.log(Tribonaci());