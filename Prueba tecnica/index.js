
const $div = document.getElementById('div');
const $fragment = document.createDocumentFragment();

$.ajax({
    method: 'GET',
    url: 'https://api.giphy.com/v1/gifs/search?api_key=7P7dlaUZCDNeRmj9scDdISuucbr2sTn7&q=perros&limit=10'
})
    .done( ({ data }) => {
    data.forEach(({ images, title }) => {
        
        const $divContainer = document.createElement('div');
        // console.log(images)
        // let url = images.downsized_medium.url;
        // console.log(typeof(url), url)
        $divContainer.innerHTML = `
            <p>${ title }</p>
        `;

        $fragment.appendChild($divContainer);
        console.log(downsized_medium.url, title);
    });
    $div.appendChild($fragment);
})
    .fail( () => console.log("Ocurrio un error"))
    .always( () => console.log("Tarea completada"))