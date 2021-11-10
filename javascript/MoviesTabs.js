
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
            <h1>${items.movieName}</h1>
            <img src="${items.image}"> 
            <p>Rating: ${items.rating} </p>
            <a href="./data.html?id=${items._id}" target="_blank"> <button> Go to Movie</button> </a> 
            <button type="button" onclick = ${deleteMovie(items._id)}> Delete Movie</button>  

            </div>
        `
        }
    }

    async function deleteMovie(id) {
        let options = {
            method : `DELETE`
        }

        try {
            return await fetch (`https://moviesmern.herokuapp.com/movies /movie/:${id}`,options)
            .then(response => response.json())
        } catch (error) {
            return error
        }
    }
    // switch (select.value) {
    //     case "movieName":
            
    //         break;

    //         case "rating":
            
    //         break;

    //         case "date":
            
    //         break;
    //     default:
    //         break;
    // }