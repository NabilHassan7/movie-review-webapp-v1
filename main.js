// Variable declaration

let movieNameRef = document.getElementById("title-name"); // stores title input from user
let searchButton = document.getElementById("search-button");
let result = document.getElementById("result");

// API fetch functions

// function to get user input and send API call
let getMovie = () => {
    let movieName = movieNameRef.value; // stores the user title input
    let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`; /* API call */

    // checking for empty input field
    if(movieName.length <= 0){
        result.innerHTML = `<h3 class="empty-field">Please enter a title to search</h3>`;
    }

    // if user input exists
    else{
        fetch(url)
        .then((res) => res.json)
        .then((data) => {
            // if title exists in the API database
            if(data.Response == "True"){
                result.innerHTML = `
                    <div class="info>
                        <img src=${data.Poster} class="poster">
                        <div>
                            <h2>${data.Title}</h2>
                            <div class="rating">
                                <img src="./assets/star-icon.svg">
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="details">
                                <span>${data.Rated}</span>
                                <span>${data.Year}</span>
                                <span>${data.Runtime}</span>
                            </div>
                            <div class="genre">
                                <div>${data.Genre.split(",").join("</div><div>")}</div>
                            </div>
                        </div>
                        <h3>Plot:</h3>
                        <p>${data.Plot}</p>
                        <h3>Cast:</h3>
                        <p>${data.Actors}</p>
                `;
            }

            // if title doesn't exist in the database
            else{
                result.innerHTML = `<h3 class="msg">${data.Error}</h3>`;
            }
        })

        // error in API call
        .catch(() => {
            result.innerHTML = `<h3 class="msg">Error in API call</h3>`;
        });
    }
};

