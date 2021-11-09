
const URLMovies = "https://moviesmern.herokuapp.com/movies/all";

async function getAllMovies(api) {
    try {
        return await fetch(api)
            .then((res) => res.json())
    } catch (error) {
        return error
    }
}

getAllMovies(URLMovies)
    .then ((success)=>{showInfo(success)})
    .catch((rej) => { console.log(rej) })


    function showInfo(arrayInfo) {
        for (const items of arrayInfo.data) {
            card.innerHTML +=
            `<div class = "tabs">
            <h1>${items.movieName} </h1> 
            <img src="${items.image}"> 
            <p>Rating: ${items.rating} </p>
             <a href="" target="_blank"> <button> Go to Movie</button> </a> 

              </div>
        `
        }
    }

    switch (select.value) {
        case "movieName":
            
            break;

            case "rating":
            
            break;

            case "date":
            
            break;
        default:
            break;
    }