const elemento = document.querySelector('#container');
const tabla = document.createElement('table');
const users = document.createElement('caption');

users.innerHTML = 'Users';

tabla.appendChild(users);

fetch('https://jsonplaceholder.typicode.com/users')
.then( (response) => response.json())
.then( (json) => {
        const row1 = document.createElement('tr');

        row1.innerHTML = `
            <th>Id</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Personal information</th>
        `;
        tabla.appendChild(row1);

    json.forEach( data => {
        const row = document.createElement('tr');
        const id = document.createElement('td');
        const name = document.createElement('td');
        const userName = document.createElement('td');
        const email = document.createElement('td');
        const address = document.createElement('td');
        const personal = document.createElement('td');
        const boton = document.createElement('button');
        const boton1 = document.createElement('button');
        const seccion = document.createElement('section');
        const seccion1 = document.createElement('section');
        const contenedor = document.createElement('div');
        const contenedor1 = document.createElement('div');
        const ancla = document.createElement('a');
        const ancla1 = document.createElement('a');

        seccion.classList.add('modal');
        seccion1.classList.add('modal');
        contenedor.classList.add('modal_container');
        contenedor1.classList.add('modal_container');
        ancla.classList.add('modal_close');
        ancla1.classList.add('modal_close1');
        boton1.classList.add('boton1');

        id.innerHTML = data.id;
        name.innerHTML = data.name;
        userName.innerHTML = data.username;
        email.innerHTML = data.email;
        boton.innerHTML = 'View';
        boton1.innerHTML = 'View';
        contenedor.innerHTML = `
                <h3>Address</h3>
                <ul>
                    <li>Street: ${data.address.street}</li>
                    <li>Suite: ${data.address.suite}</li>
                    <li>City: ${data.address.city}</li>
                    <li>Zipcode: ${data.address.zipcode}</li>
                    <li>Geo:</li>
                    <li>
                        <ul>
                            <li>Lat: ${data.address.geo.lat}</li>
                            <li>Ing: ${data.address.geo.ing}</li>
                        </ul>
                    </li>
                </ul>
        `;
        contenedor1.innerHTML = `
        <h3>Personal Information</h3>
        <ul>
            <li>Phone: ${data.phone}</li>
            <li>Website: <a href="#">${data.website}</a></li>
            <li>Company:</li>
            <li>
                <ul>
                    <li>Name: ${data.company.name}</li>
                    <li>Catch Phrase: ${data.company.catchPhrase}</li>
                    <li>BS: ${data.company.bs}</li>
                </ul>
            </li>
        </ul>
        `;
        ancla.innerHTML = 'Close';
        ancla1.innerHTML = 'Close';

        boton.addEventListener('click', (e) => {
            e.preventDefault();
            seccion.classList.add('modal_show');
        }, false);

        ancla.addEventListener('click', (e) => {
            e.preventDefault();
            seccion.classList.remove('modal_show');
        }, false);

        boton1.addEventListener('click', (e) => {
            e.preventDefault();
            seccion1.classList.add('modal_show');
        }, false);

        ancla1.addEventListener('click', (e) => {
            e.preventDefault();
            seccion1.classList.remove('modal_show');
        }, false);

        tabla.appendChild(row);
        row.appendChild(id);
        row.appendChild(name);
        row.appendChild(userName);
        row.appendChild(email);
        row.appendChild(address);
        row.appendChild(personal);
        address.appendChild(boton);
        personal.appendChild(boton1);
        elemento.appendChild(seccion);
        elemento.appendChild(seccion1);
        seccion.appendChild(contenedor);
        seccion1.appendChild(contenedor1);
        contenedor.appendChild(ancla);
        contenedor1.appendChild(ancla1);
    });

    elemento.appendChild(tabla);
})
.catch( (err) => console.log(err));