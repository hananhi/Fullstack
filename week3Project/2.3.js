let num= prompt('give us number') ;

function findNextSquare(num){

    let sNum = Math.sqrt(num) ;

    

    if(sNum % 1 !== 0){
        return -1 ;
    }
    else{
    sNum= sNum+1 ;
    return (sNum*sNum) ;
    }
}

console.log(findNextSquare(num)) ;
