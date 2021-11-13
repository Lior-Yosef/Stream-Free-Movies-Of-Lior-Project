
const URLMovies = "https://moviesmern.herokuapp.com/movies/all";

// async function getAllMovies(api) {
//     try {
//         return await fetch(api)
//             .then((res) => res.json())
//     } catch (error) {
//         return error
//     }
// }

// getAllMovies(URLMovies)
//     .then ((success)=>{showInfo(success)})
//     .catch((rej) => { console.log(rej) })


//     function showInfo(arrayInfo) {
//         for (const items of arrayInfo.data) {
//             card.innerHTML +=
//             `<div class = "tabs">
//             <h1>${items.movieName}</h1>
//             <img src="${items.image}"> 
//             <p>Rating: ${items.rating} </p>
//             <a href="./data.html?id=${items._id}" target="_blank"> <button> Go to Movie</button> </a> 


//             </div>
//         `
//         }
//     }


async function getAllMovies(api) {
    try {
        return await fetch(api)
            .then((res) => res.json())
    } catch (error) {
        return error
    }
}

getAllMovies(URLMovies)
    .then((success) => { showInfo(success.data) })
    .catch((rej) => { console.log(rej) })


function showInfo(arrayInfo) {
    for (const items of arrayInfo) {
        card.innerHTML +=
            `<div class = "tabs">
            <h1>${items.movieName}</h1>
            <img src="${items.image}"> 
            <p>Rating: ${items.rating} </p>
            <a href="./data.html?id=${items._id}" target="_blank"> <button> Go to Movie</button> </a> 
            <button type="button" onclick= Delete("${items._id}")> remove </button>

            </div>
        `
    }
}



async function deleteMovie(id,options) {
    try {
        return await fetch(`https://moviesmern.herokuapp.com/movies/movie/${id}`, options)
            .then(response => response.json())
    } catch (error) {
        return error
    }
}

function Delete(id) {
    let options = {
        method: `DELETE`
    }
    deleteMovie(id,options)
    .then(res=>console.log(res))

}


function sortByRating(obj) {
    obj.sort((a, b) => { return a.rating - b.rating });
    return showInfo(obj)
}


function sortByDate(object) {
    object.sort((a, b) => { return b.date - a.date });
    return showInfo(object)
}


btn.onclick = () => {
    switch (select.value) {

        case "rating":
            card.innerHTML = ""
            let GetSortByRating = async () => {
                try {
                    return await fetch(URLMovies)
                        .then(res => res.json())
                } catch (error) {
                    return error
                }
            }
            GetSortByRating()
                .then(res => sortByRating(res.data))
                .catch((rej) => { console.log(rej) })
            break;

        case "date":
            card.innerHTML = ""
            let GetSortByDate = async () => {
                try {
                    return await fetch(URLMovies)
                        .then(res => res.json())
                } catch (error) {
                    return error
                }
            }
            GetSortByDate()
                .then(res => sortByDate(res.data))
                .catch((rej) => { console.log(rej) })

        default:
            break;
    }
}










// function sortByMovieName(obj) {
//     obj.sort((a,b)=>a.data-b.data);
//     for (const items of obj) {
//         card.innerHTML +=
//         `<div class = "tabs">
//         <h1>${items.movieName}</h1>
//         <img src="${items.image}"> 
//         <p>Rating: ${items.rating} </p>
//         <a href="./data.html?id=${items._id}" target="_blank"> <button> Go to Movie</button> </a> 
//         <button type="button" onclick = ${deleteMovie(items._id)}> Delete Movie</button>  
//         </div>`
//     }
// }

// async function getShortByMovieName(api) {
//     try {
//         return await fetch(api)
//             .then((res) => res.json())
//     } catch (error) {
//         return error
//     }
// }


// const basicAPI = "https://moviesmern.herokuapp.com/movies";



// btn.onclick = () => {
//     card.innerHTML=" "
//     getAllMovies(`${basicAPI}/movie/searchByName/${search.value}`)
//    .then (res => showInfo(res.data))

// }


