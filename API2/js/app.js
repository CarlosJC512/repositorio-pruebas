const URL = 'https://jsonplaceholder.typicode.com/posts'
const aplicacion = document.querySelector('#container');
const tabla = document.createElement('table');

fetch(URL)
    .then( (response) => response.json() )
    .then( (json) => {console.log(json)
        const tr = document.createElement('tr');
        const usId = document.createElement('th')
        const i = document.createElement('th');
        const ttl = document.createElement('th');
        const bd = document.createElement('th');
        const elim = document.createElement('th');

        usId.innerHTML = 'User ID';
        i.innerHTML = 'ID';
        ttl.innerHTML = 'Title';
        bd.innerHTML = 'Body';
        elim.innerHTML = 'Eliminar';

        tabla.appendChild(tr);
        tr.appendChild(usId);
        tr.appendChild(i);
        tr.appendChild(ttl);
        tr.appendChild(bd);
        tr.appendChild(elim);

            json.forEach( (data) => {
                const row = document.createElement('tr');
                const userId = document.createElement('td');
                const id = document.createElement('td');
                const title = document.createElement('td');
                const body = document.createElement('td');
                const eliminar = document.createElement('td');
                const boton = document.createElement('button');

                 boton.addEventListener("click",function(){
                     console.log(userId.parentNode);
                     tabla.removeChild(row);
                    }, false);

                userId.innerHTML = data.userId;
                id.innerHTML = data.id;
                title.innerHTML = data.title;
                body.innerHTML = data.body;
                boton.innerHTML = 'Eliminar';
                
                tabla.appendChild(row);
                row.appendChild(userId);
                row.appendChild(id);
                row.appendChild(title);
                row.appendChild(body);
                row.appendChild(eliminar);
                eliminar.appendChild(boton);
        });
        aplicacion.appendChild(tabla);

    })
    .catch( (err) => console.log(err))