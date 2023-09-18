// Creating array
let team1 = [89, 120 ,103];
let team2 = [116, 94 ,123];
 
// Creating variable to store the sum
let sum1 = 0;
let sum2=0;

let AVG1=0;
let AVG2=0;
// Running the for loop
for (let i = 0; i < team1.length; i++) {
    sum1 += team1[i];

}
AVG1 =sum1/3 ;

for (let i = 0; i < team2.length; i++) {
    sum2 += team2[i];

}
AVG2 =sum2/3 ;
 
if(AVG1 >AVG2){
    console.log('the winner is team1');
}
else if(AVG1 <AVG2)
console.log('the winner is team2');

else
console.log('the results it equal');