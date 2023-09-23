let sentence= prompt('give us a sentence') ;

let arr_word = sentence.split('');
function func(arr_word){

for(let i =0 ;i <arr_word.length ;i=i+2){
    arr_word[i]= arr_word[i].toUpperCase();
   
}

for(let j =1 ;j<arr_word.length ;j=j+2){
    arr_word[j]= arr_word[j].toLowerCase();
}

let updated_word = arr_word.join('') ;
return updated_word ;
}

console.log(func(arr_word));