const book1 ={
    name:'Life',
   author:'shiksbeer',
    year:1997
}

const book2 ={
    name:'Earth',
    author:'moalyza',
     year:2002
}

const bookUtils ={}
bookUtils.getFirstPublished =function( book1 ,book2) {
 
    return (book1.year < book2.year ) ? 'book1' :'book2' ;
}

console.log(bookUtils.getFirstPublished(book1 ,book2)) ;


bookUtils.setNewEdition=function(book , year){
    if(book ==book1){
        book1.year=year ;
    return book1.latestEdition = year  ;
    }
    else if(book==book2){
        book2.year=year ;
        return book2.latestEdition = year ;
    }
    else
    return this.latestEdition = year ;
}

console.log(bookUtils.setNewEdition(bookUtils ,1996)) ;


bookUtils.setLanguage=function(book , language){
    
    return this.language = language ;
}

console.log(bookUtils.setLanguage(book1 ,'Arabic' )); 



bookUtils.setTranslation=function(book , language ,transelator){
    
    return this.transelator = {language , transelator};
}

console.log(bookUtils.setTranslation(book1,'english' ,'Arabic' ));

bookUtils.setPublisher=function(book , language ,location){
    
    return this.Name_publisher = {language,location};
}

console.log(bookUtils.setPublisher('sonya' ,'israel' ));



bookUtils.isSamePublisher=function(book1 ,book2){
    
    if((book1.author==book2.author) && (book1.location==book2.location)){
        return 'identical';

    }
    else
    return 'not identical '
}
console.log(bookUtils.isSamePublisher(book1,book2));
