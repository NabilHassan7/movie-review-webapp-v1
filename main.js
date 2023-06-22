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
                result.innerHTML = ``
            }
        })
    }
}