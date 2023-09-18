let Language=prompt('what is your language ') ;
let island=prompt('Is it Island t/f ') ;
let population=prompt('what is the population') ;
let contry=prompt('what is your country') ;


if (Language='english' && population< 500000000 && typeof(island)==true){
    console.log('you should live in filand') ;
}
else if (!(Language='english' && population< 500000000 && typeof(island)==true)){
    console.log('Finlant doesnt meet the cat') ;
}
else
console.log('go back and temporarily change some argument values')