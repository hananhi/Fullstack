let array=[1,1,1,1,1,1,9];
let equal=0 ;
function findUniq(array){
    
     for(let i=0 ; i< array.length ;++i){

        if(array[i]!== array[i+1]){  //ask about i++ ;
          equal = array[i+1]; 
          break;
        }

    
   }
     return equal ;
}
console.log(findUniq(array)) ;