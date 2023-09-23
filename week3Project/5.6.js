let sentence= prompt('write your password') ;

let arr_word = sentence.split('');
function func(arr_word){


for(let i =0 ;i< (arr_word.length-4 ) ;++i){
    arr_word[i]='#';
   
}

let updated_word = arr_word.join('') ;
return updated_word;
}

console.log(func(arr_word));