class addMovies {
    movieName;
    image;
    rating;
    linkToMovie;
    synopsis;
    constructor(_movieName, _image, _rating, _linkToMovie, _synopsis,) {
        this.movieName = _movieName,
            this.image = _image,
            this.rating = _rating,
            this.linkToMovie = _linkToMovie,
            this.synopsis = _synopsis
    }
};

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

    let newMovie = new addMovies(movieName.value, image.value, Rating.value, linkToMovie.value, synopsis.value);

    const OPTIONS = {
        method: `POST`,
        body: JSON.stringify({ newMovie }),
        headers: { 'Content-Type': 'application/json' }
    }

    saveData("https://moviesmern.herokuapp.com/movies/saveMovie", OPTIONS)
    .then(res => console.log(res))

}
