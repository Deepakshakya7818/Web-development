

// API = "http://www.omdbapi.com/?i=tt3896198&apikey=9cb7a50b&t=avenger"  

const movieForm = document.querySelector("#movieForm");
const movieInput = document.querySelector("#movieInput")
const movieHub = document.querySelector("#movieHub")

movieForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let query = movieInput.value.trim()

    if (!query)
        return;
    console.log(query);
    searchMovies(query);

})


async function searchMovies(moviename) {
    movieHub.innerHTML = `<p>searching movie....</p>`;
    let response = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=9cb7a50b&s=${moviename}`)
    let data = await response.json();
    console.log(data);

    if (data.Response === "True") {
        displayMovies(data.Search);
    } else {
        movieHub.innerHTML = `${data.Error}`;
    }


}


function displayMovies(data) {

    movieHub.innerHTML = ""
    data.forEach((movie) => {
        const div = document.createElement("div");

        div.dataset.imdbID = movie.imdbID;
        div.setAttribute("class","movie-card")

        div.innerHTML =
            ` 
        <div>
           <img src="${movie.Poster}">
        </div>
        <div>
            <p>${movie.Title}</p>
            <p>${movie.Year}</p>
        </div>
        `

        movieHub.append(div);

    });


}


movieHub.addEventListener("click", (e)=>{
    e.stopPropagation();
    const movieCard = e.target.closest(".movie-card")
    const imdbID =  movieCard.dataset.imdbID;
    console.log(imdbID)
    location.href = `movie-Detail.html?id=${imdbID}`
})