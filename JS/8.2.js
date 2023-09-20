const myCountry={
    country:'israel' ,
     capital:'jerusalem',
language:'Hebrew',
 population:5000000 ,
  neighbours:['lebanon','Jordan','Eygpt']
}
myCountry.describe= function(){
    return this.country + ' has '+ this.population + ' people ' + ' thier mother tought ' + this.language + ' they have ' + this.neighbours.length + ' and the capital ' +this.capital ;
}

 console.log(myCountry.describe());

 myCountry.checkIsland = function () {

     return this.IsIsland = (this.neighbours >0 ) ? true :false ;

 }
 console.log(myCountry.checkIsland());

 