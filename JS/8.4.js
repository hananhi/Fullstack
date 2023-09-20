const array = ["Hello", "Good Day", "YourWelcome", "hotdog", "hamburgers"];

function func1() {
let count =0;
   for(let i=0 ;i<array.length ;++i ){
       for(let j=0 ;j <array[i].length ;++j){
        for(let c=0 ;c<array[i].length ;++c){
           if(array[i][j]==array[j][c])
            count++ ;

        }

       }

       
    }
}
