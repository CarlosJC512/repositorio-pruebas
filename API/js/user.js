const aplicacion = document.querySelector('.container');
const getURL = new URLSearchParams(window.location.search);
id = getURL.get('id');
const URL = 'https://jsonplaceholder.typicode.com/users';

console.log(`${URL}/${id}`);

fetch(`${URL}/${id}`)
.then( (response) => response.json())
.then( (data) => {
    console.log(data)
    const name = document.createElement('p');
    const username = document.createElement('p');
    const email = document.createElement('p');
    const phone = document.createElement('p');
    const address = document.createElement('p');

    name.innerHTML = data.name;
    username.innerHTML = data.username;
    email.innerHTML = data.email;
    phone.innerHTML = data.phone;
    address.innerHTML = `Dirección: ${data.address.street},
    ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}`;

    aplicacion.appendChild(name);
    aplicacion.appendChild(username);
    aplicacion.appendChild(email);
    aplicacion.appendChild(phone);
    aplicacion.appendChild(address);


})
.catch((err) => console.log(err))