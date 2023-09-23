let sentence= prompt('give us a full name') ;

let arr_word = sentence.split('');
function func(arr_word){

    arr_word[0] =arr_word[0].toUpperCase() ;
    let sec_n

for(let i =0 ;i <arr_word.length ;++i){
    if(arr_word[i]==' '){
        sec_n=arr_word[i+1].toUpperCase();
        break ;
    }
   
}


return arr_word[0]+'.'+sec_n;
}

console.log(func(arr_word));