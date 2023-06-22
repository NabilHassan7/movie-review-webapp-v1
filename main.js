// Variable declaration

let movieNameRef = document.getElementById("title-name"); // stores title input from user
let searchButton = document.getElementById("search-button");
let result = document.getElementById("result");

// API fetch functions

let getMovie = () => {
    let movieName = movieNameRef.value; // stores the user title input
    let url = `https://www.omdbapi.com/?t=${movieName}&apikey=${API_KEY}`; /* API call */
}