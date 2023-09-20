const book={
    numberofpages:90 ,
    bookName:'wondering',
    writer :'Hanan Himoni',
    subject:'life',
    year: 1997 ,

}

function func1(book){
    return ('the book ' + book.bookName +' was written by'+book.writer + ' in the year '+book.year);
}

console.log(func1(book) );