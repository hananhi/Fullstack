let array=[19,5,42,2,77] ;

function sum_num(array) {
    // Sort the array in ascending order
    array.sort(function(a, b) {
      return a - b;
    });
    
    
    // Return the sum of the first two elements (the two smallest numbers)
    return (array[0] + array[1]);
  }

  console.log(sum_num) ;

