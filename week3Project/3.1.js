let count=1 ;

let p0 = prompt('give us the population') ;
let percent=prompt('give us the persent');
let aug= prompt('give us new inhibits') ;
let p=prompt('give us the growing pop ') ;

p0 =Number(p0) ;
percent=Number(percent) ;
aug=Number(aug);
p=Number(p) ;

function nb_year (p0 ,percent , aug ,p){
    let curNum =0 ;
    curNum=p0 + (p0*( percent/100)) + aug ;
   

    while(curNum < p){

        count= 1+count ;
        curNum =curNum + (curNum*( percent/100)) + aug ;
    } 


    return count ;
}

console.log (nb_year(p0,percent,aug,p)) ;
