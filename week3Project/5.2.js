
let num = prompt('how many times you need to repeat it');
let name= prompt('give me word');
function func(num,name){
let s_repeat ='';
    for(let i=0 ;i <num ;++i){
        s_repeat+= name ;
    }

    return s_repeat ;
}

console.log(func(num,name)) ;