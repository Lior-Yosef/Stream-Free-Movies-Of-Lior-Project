


class addMovies {
    movieName;
    image;
    Rating;
    linkMovie;
    synopsis;
    constructor(movieName, image, Rating,  linkMovie, synopsis, ) {
        this.movieName = movieName,
        this.image = image,
        this.Rating = Rating,
        this.linkMovie = linkMovie,
        this.synopsis = synopsis
    }
}





async function saveData(api, OPTIONS) {

    try {
        return await fetch(api, OPTIONS)
            .then(res => res.json())

    }
    catch (error) {
        return error
    }

}

btn.onclick = () => {

    let newMovie = new addMovies(movieName.value, image.value, Rating.value,  linkMovie.value, synopsis.value,  )
    const OPTIONS = {
        method: `POST`,
        body: JSON.stringify({newMovie}),
        headers: { 'Content-Type': 'application/json' }
    }

saveData("https://moviesmern.herokuapp.com/movies/saveMovie",OPTIONS)
        .then(result => console.log(result))
}
