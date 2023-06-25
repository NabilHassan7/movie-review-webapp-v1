// Variable declaration

let movieNameRef = document.getElementById("movie-name"); // stores title input from user
let searchButton = document.getElementById("search-btn");
let result = document.getElementById("result");

// press Enter to search function
movieNameRef.addEventListener('keypress', function(event){
    if(event.key === 'Enter'){
        event.preventDefault();
        searchButton.click();
    }
});


// API fetch functions

// function to get user input and send API call
let getMovie = () => {
    let movieName = movieNameRef.value; // stores the user title input
    let url = `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`; /* API call */

    // checking for empty input field
    if(movieName.length <= 0){
        result.innerHTML = `<h3 class="empty-field">Please enter a title to search</h3>`;
    }

    // if user input exists
    else{
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
            // if title exists in the API database
            if(data.Response == "True"){
                result.innerHTML = `
                    <div class="info">
                        <img src=${data.Poster} class="poster">
                        <div>
                            <h2>${data.Title}</h2>
                            <div class="rating">
                                <img src="./assets/star-icon.svg">
                                <h4>${data.imdbRating}</h4>
                            </div>
                            <div class="rating">
                                <img src="./assets/star-icon.svg">
                                <h4>Metascore - ${data.Metascore}</h4>
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
                    </div>
                    <h3>Plot:</h3>
                    <p>${data.Plot}</p>
                    <h3>Cast:</h3>
                    <p>${data.Actors}</p>
                    <h3>Director:</h3>
                    <p>${data.Director}</p>
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

// click event to intiate function call
searchButton.addEventListener("click", getMovie);
window.addEventListener("load",getMovie);