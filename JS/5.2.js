let language=prompt('what is your language ') ;

grade=grade.toUpperCase();

if(grade!='F'&& grade!='D' && grade!='C'&& grade!='B'&& grade!='A')
window.alert('the  Input is Invalid');

switch(grade){

    case ' mandarin':
        console.log('MOST number of native speakers!');
        break;
    
    case 'spanish':
        console.log('2nd place in a number of native speakers');
        break;
    case 'English':
        console.log('your score between 70-79');
         break;
    case 'Hindi':
        console.log('number4');
        break;
    case 'Arabic':
    console.log('5th most spoken language');
      break;
  default:
   console.log('Not in the top 5') ;
} 
