var randomMovieArray = ['Star Wars', 'Game of Thrones', 'Harry Potter', 'Lord of the Rings'];

var randomNumber = Math.floor((Math.random() * randomMovieArray) + 1);

var randomMovie = randomMovieArray[randomNumber];

function apiCall(){
    $.getJSON('https://www.omdbapi.com/?t='+encodeURI(randomMovie)).then(function (response){
    var image = response.Poster;

    if(image !== "N/A"){
        $('img').attr('src', image);
    }
    });
}

apiCall();
