// class addMovies {
//     movieName;
//     image;
//     rating;
//     linkToMovie;
//     synopsis;
//     constructor(_movieName, _image, _rating, _linkToMovie, _synopsis,) {
//         this.movieName = _movieName,
//             this.image = _image,
//             this.rating = _rating,
//             this.linkToMovie = _linkToMovie,
//             this.synopsis = _synopsis
//     }
// };

// async function saveData(api, OPTIONS) {

//     try {
//         return await fetch(api, OPTIONS)
//             .then(res => res.json())
//     }
//     catch (error) {
//         return error
//     }

// }

// btn.onclick = () => {
//  let movie = new addMovies(movieName.value, image.value, Rating.value, linkToMovie.value, synopsis.value);
//   let OPTIONS = {
//         method: `POST`,
//         body: JSON.stringify({newMovie}),
//         headers:{ 'Content-Type': 'application/json' }
//     }

//     saveData("https://moviesmern.herokuapp.com/movies/saveMovie", OPTIONS)
//     .then(res => console.log(res))

// }



async function getApi(api,obj){
    try{
        
        return await fetch(api,obj)
        .then(response=>response.json());
    }
    catch(err){
        return err;
    }
}


class Movie{
    movieName;
    image;
    synopsis;
   linkToMovie;
    rating;
    constructor(MovieName,MovieIMage,MovieSynopsis,MovieLink,MovieRating){
        this.movieName=MovieName;
        this.image=MovieIMage;
        this.synopsis=MovieSynopsis;
        this.linkToMovie=MovieLink;
        this.rating=MovieRating;

    }
}

btn.addEventListener("click",()=>{
let movie=new Movie(movieName.value,image.value,synopsis.value,linkToMovie.value,Number(Rating.value) )
let options={
    method:"POST",
    body:JSON.stringify({movie}),
    headers:{'Content-Type': 'application/json'}
}

getApi("https://moviesmern.herokuapp.com/movies/saveMovie",options)
.then(res=>console.log(res))
.then(alert("movie has been uploaded"))
    if(alert){
        location.reload()
    }
}

)