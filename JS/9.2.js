let randomNum = Math.floor(Math.random() * 51);

let gessNum = prompt('Guess number');

while(randomNum!=gessNum){
    gessNum = prompt('Guess number');
    if(randomNum==gessNum){
        window.alert('your guess is right')
        break;
    }
}
