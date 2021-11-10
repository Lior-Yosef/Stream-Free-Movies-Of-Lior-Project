
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
    // .then ((success)=>{console.log(success.data)})
    .then((success) => showInfo(success))
    .catch((rej) => { console.log(rej) })


function showInfo(arrayInfo) {
    for (const items of arrayInfo.data) {
        tableMovies.innerHTML += `
        <tr>
         <td> ${items.movieName}  </td>
         <td> ${items.image} </td>
         <td> ${items.rating} </td>
         <td> ${items.date} </td>
         <td> ${items.linkToMovie} </td>
         <td> ${items.synopsis} </td>
         <td> ${items.__v} </td>
         <td> ${items._id} </td>
         </tr>
    `
    }
}