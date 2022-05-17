// const tabla = document.createElement('table');
$('<table id="tabla"></table>').appendTo('#container');

$(document).ready( function (){
    $.ajax({
        type: "GET",
        url: 'https://jsonplaceholder.typicode.com/posts',
        dataType: "json",
    
        success: function (data) {

            /*$('<tr id="row"></tr>').appendTo('#tabla');
            $('<th>User Id</th>').appendTo('#row');
            $('<th>Id</th>').appendTo('#row');
            $('<th>Title</th>').appendTo('#row');
            $('<th>Body</th>').appendTo('#row');
            $('<th>Eliminar</th>').appendTo('#row');*/

            $(`<tr>
            <th>User Id</th>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
            <th>Eliminar</th>
            </tr>`).appendTo('#tabla');

            $.each(data, function(i, item){

               /*$(`<tr id="row${item.id}"></tr>`).appendTo('#tabla');
                $(`<td>${item.userId}</td>`).appendTo(`#row${item.id}`);
                $(`<td>${item.id}</td>`).appendTo(`#row${item.id}`);
                $(`<td>${item.title}</td>`).appendTo(`#row${item.id}`);
                $(`<td>${item.body}</td>`).appendTo(`#row${item.id}`);
                $(`<td><button id="boton${item.id}">Eliminar</button></td>`).appendTo(`#row${item.id}`);*/

                $(`<tr id="row${item.id}">
                <td>${item.userId}</td>
                <td>${item.id}</td>
                <td>${item.title}</td>
                <td>${item.body}</td>
                <td><button id="boton${item.id}">Eliminar</button></td>
                </tr>`).appendTo('#tabla');

            $(`#boton${item.id}` ).click(function() {
                console.log(item.id);
                 $(`#row${item.id}`).remove();
              });

            });
        },
    });
});