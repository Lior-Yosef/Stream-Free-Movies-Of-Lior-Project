

async function getData(id) {
    try {
        return await fetch(`https://moviesmern.herokuapp.com/movies/movie/${id}`)
        .then((response) => response.json());
    
    } catch (error) {
      return error;
    }
  }
  let movieId = location.search.substr(4);
  getData(movieId).then((movie) => {
    title.innerHTML = `<div id="card">
      <h1>${movie.data.movieName} </h1>
      <img id="image" src="${movie.data.image}">
      <h3>${movie.data.rating}</h3>
      <h3>${movie.data.synopsis} </h3>
      </div>
     `;
  });