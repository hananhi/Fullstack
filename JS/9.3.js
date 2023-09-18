const food1 = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", 
"Olives"];
const food2 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

let i=0 ;
let j=0 ;
let equal=true ;
while(i<food1.length){
    while(j <food2.length){
        if(food1[i]!=food2[j]){
           equal=false ;
            break ;
        }
        else
        j++ ;
    }
    if(equal==false){
        break ;
    }
    else
    i++ ;
}
if(equal==true){
    console.log('the arrays are equal')
}
else
console.log('the arrays are not equal')