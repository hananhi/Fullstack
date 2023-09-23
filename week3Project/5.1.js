let stringW =prompt('give me string') ;

function func(stringW){
let arr=[] ;
arr= stringW.split('') ;
let first_char ;
let last_char ;
first_char = arr[0];
last_char = arr[arr.length -1] ;

console.log(first_char , last_char) ;

}

func(stringW);
