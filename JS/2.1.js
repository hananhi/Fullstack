let var1='' ;
let var2 ='' ;
let var3='' ;

function countryInfo(country, population ,capitalCity){

    return (country+' has ' + population+ ' million people and its  capital city is '+ capitalCity);
}

 var1=countryInfo(' spain ' ,47 ,' Madrid ') ;
var2=countryInfo(' United states '  ,88 , ' New York ') ;
var3=countryInfo('France' ,47 ,'Paris ') ;

console.log(var1);
console.log(var2);
console.log(var3);