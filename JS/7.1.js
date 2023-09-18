let arr=[3,4,4,3,6,3];

function func1 (arr){

    let arr2 =[];
    for(let i=0 ; i< arr.length ;i++){
        if (arr2.indexOf(arr[i])===-1 ){
            arr2.push(arr[i]);
        }
    }
    return arr2 ;
}


console.log( func1(arr));