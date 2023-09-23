let sentence= prompt('give us a sentence') ;

let arr_sen = sentence.split('');

function func(arr_sen){

for(let i =0 ;i <arr_sen.length ;i++){
    if(arr_sen[i]=='-' || arr_sen[i]=='_'){
    
        arr_sen.splice(i,1);
    }

    
}
let updated_sentense = arr_sen.join('') ;
return updated_sentense;
}

console.log(func(arr_sen));