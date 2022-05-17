const aplicacion = document.querySelector('.container');

const URL = 'https://jsonplaceholder.typicode.com/users';

fetch(URL)
.then( (response) => response.json() )
.then( (data) => {
    data.forEach( (user) => {
        const p = document.createElement('p');
        p.setAttribute('id', user.id);
        p.innerHTML = user.name;
        p.addEventListener('click', function(){
            window.location.href = `./user.html?id=${user.id}`
        })
        aplicacion.appendChild(p);
    } );
    console.log(data)} )
.catch( (err) => console.log(err) );