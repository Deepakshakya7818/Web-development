
const moviedetail = document.querySelector("#movie-detail")
const params = new URLSearchParams(location.search)
const imdbID = params.get("id")

if (imdbID) {
    searchMovie(imdbID.trim())
}

async function searchMovie(imdbID) {
    let response = await fetch(`https://www.omdbapi.com/?apikey=9cb7a50b&i=${imdbID}`);
    let data = await response.json();
    console.log(data)

    if (data.Response === "True") {
        displayMovie(data);
    } else {
        movieHub.innerHTML = `${data.Error}`;
    }

}

function displayMovie(data) {


    moviedetail.innerHTML =
        `  <div>
            <img src=${data.Poster} alt="">
        </div>


        <div>
            <h2>${data.Title}</h2>
            <section>
                <p>${data.Released}</p>
                <p>${data.Rated}</p>
                <p>${data.Runtime}</p>
                <p>IMDb:${data.imdbRating}/10</p>
            </section>
            <div>
                <p>Plot Overview</p>
                <p>${data.Plot}</p>
            </div>


            <div>
                <section>
                    <p>Director</p>
                    <p>${data.Director}</p>
                </section>
                <section>
                    <p>Writer</p>
                    <p>${data.Writer}</p>
                </section>
            </div>

            <div>
                <p>Actor</p>
                <p>${data.Actor}</p>
            </div>
            <div>
                <section>
                    <p>Language</p>
                    <p>${data.Language}</p>
                </section>
                <p>Country</p>
                <p>${data.country}</p>
                <section>

                </section>
            </div>

             <button>
        <a href="https://www.imdb.com/title/${data.imdbID}">View on IMDB</a>
    </button>

        </div>`

}
