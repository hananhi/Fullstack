let array =[0,1,0,1, 1,1] ;

let stringNum ='' ;
for(let i=0 ; i<array.length ; i++){
  
stringNum=stringNum+array[i];
}

let Bnum =parseInt(stringNum , 2);

console.log(Bnum) ;