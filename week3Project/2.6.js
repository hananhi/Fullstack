let num = prompt('give us number') ;
let Bnum=0 ;
let Snum = 0

function century (num) {
  num = num.split('') ;

  Snum = [num[2] , num[3]] ;
  Bnum= [num[0], num[1] ];

  Bnum=Bnum.join('') ;
Bnum = parseInt(Bnum);

Snum=Snum.join('') ;
Snum = parseInt(Snum);

  if(Snum !== 0 ){
     Bnum = Bnum+1 ;
    return (Bnum);
  }
  else{
    return(Bnum)
  }
  
}
console.log( century(num ));