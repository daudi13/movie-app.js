const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ff98e1d8f6ef5572e1bff44d87129242&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = 'https://api.themoviedb.org/3/search/movie?api_key=ff98e1d8f6ef5572e1bff44d87129242&query="';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main')

//GET initial movies 

fetchMovies(API_URL)
async function fetchMovies(url) {
    const response = await fetch(url)
    const data = await response.json()

    displayMovies(movies) {
        main.innerHTML = '';

        movies.forEach((movie) => {
            const { title, poster_path, vote_average, overview } = movie
            const movieEl = document.createElement('div')
            movie.classList.add('movie')
            movieEl.innerHTML = `
            <div class="movie">
            <img src="${poster_path}" alt="">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${(if(vote_average ))}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>overview</h3>
                <p>${overview}</p>
            </div>
        </div>
            `
        })
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const searchTerm = search.value

    if (searchTerm && searchTerm !== '') {
        fetchMovies(SEARCH_URL + searchTerm);

        search.value = ''
    } else {
        window.location.reload()
    }

})