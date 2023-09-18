let grade=prompt('what is your grade ') ;

grade=grade.toUpperCase();

if(grade!='F'&& grade!='D' && grade!='C'&& grade!='B'&& grade!='A')
window.alert('the  Input is Invalid');

switch(grade){

    case 'F':
        console.log('your score between 0-64');
        break;
    
    case 'D':
        console.log('your score between 65-69');
        break;
    case 'C':
        console.log('your score between 70-79');
         break;
    case 'B':
        console.log('your score between 80-89');
        break;
    case 'A':
    console.log('your score between 90-100');
      break;

} 


let grade2=prompt('what is your grade ') ;

if(0> grade && grade >100){
window.alert('the  Input is Invalid')
}


if(grade2 >0 && grade2<65){
    console.log('F');

}
else if (grade2 >64 && grade2<70){
    console.log('D');

}
else if (grade2 >70 && grade2<80){
    console.log('C');

}
else if (grade2 >80 && grade2<90){
    console.log('B');

}
else if (grade2 >90 && grade2<100){
    console.log('A');
}
