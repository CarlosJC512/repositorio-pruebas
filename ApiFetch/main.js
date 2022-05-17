const API_URL = 'https://pokeapi.co/api/v2/pokemon/1/'

/*const HTMLResponse = document.querySelector("#app");
const ul = document.createElement('ul');

fetch(`${API_URL}/1`)
    .then((response) => response.json())
    .then((pokemon) => {
        pokemon.forEach((pokemon) => {
            let elem = document.createElement('li');
            elem.appendChild(
                document.createTextNode(`${pokemon.name} | ${pokemon.email}`)
            );
            ul.appendChild(elem);
        });

        HTMLResponse.appendChild(ul);
        // const tpl = users.map((user) => `<li>${user.name} | ${user.email}</li>`);
        // HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    });*/


fetch(API_URL)
.then( (response) => response.json() )
.then( (data) => {
    let element = document.getElementById('app');    

    element.innerHTML = `
    <p>${data.order}. ${data.name}</p>
    <img src='${data.sprites.front_shiny}' width = '200px'>
    <p>${data.species.name}</p>
    `;

    console.log(data.species);
})
.catch( err => console.log(err) )