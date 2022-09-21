const requestURL = '../json/peliculas.json';

async function fetchMoviesJSON(){
    const response = await fetch(requestURL);
    const movies = await response.json();
    return movies;
}

fetchMoviesJSON().then(movies =>{
for(let index=0; index < movies.peliculas.length; index++){

    const moviesSection = document.getElementById('moviesSection');

    let id = movies.peliculas[index].id;
    let title = movies.peliculas[index].nombre;
    let director = movies.peliculas[index].director;
    let gender = movies.peliculas[index].clasificacion;
    let img = movies.peliculas[index].caratula;

    moviesSection.innerHTML += `
    <table class="table table-dark table-striped">
 
  <tbody>
    <tr>
      <th scope="row">${id}</th>
      <td>${title}</td>
      <td>${director}</td>
      <td>${gender}</td>
    </tr>
    </tbody>
    </table>

    
    
    `
 }
})