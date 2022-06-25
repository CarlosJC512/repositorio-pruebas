
const xhr = new XMLHttpRequest();
const $images = document.getElementById('images');
const $form = document.getElementById('form');
const $h2 =document.getElementById('h2');
const $fragment = document.createDocumentFragment();

let category = 'Gatos';

document.addEventListener("submit", (event) => {
    const { target } = event;
    if( target === $form ){
        event.preventDefault();
        category = target.categoria.value;
    }
        $h2.innerHTML = category;

        const url = `https://api.giphy.com/v1/gifs/search?api_key=7P7dlaUZCDNeRmj9scDdISuucbr2sTn7&q=${ category }&limit=12`;
        
        
        xhr.addEventListener("readystatechange", () => {
            if( xhr.readyState !== 4 ) return;
            if( xhr.status >= 200 && xhr.status < 300 ) {
        
                const { data } = JSON.parse( xhr.responseText );
        
                data.forEach(({ images, title }) => {

                    
                    $images.innerHTML = ( category === target.categoria.value ) && '';
                    
        
                    let url = images.downsized_medium.url;
                    
                    const $div = document.createElement('div');
                    $div.classList.add( 'card', 'px-1', 'py-1', 'mx-3', 'my-2', 'border', 'border-dark');
                    $div.setAttribute("style", 'width: 18rem;')
                    $div.innerHTML = `
                        <img src=${ url } class="card-img-top"  alt=${ title } />
                        <div class="card-body">
                            <p class="card-text bg-warning px-2 py-2 bg-opacity-25">${ title }</p>
                        </div>
                    `;
        
                    $fragment.appendChild($div);
                });
                $images.appendChild($fragment);
                
        
            }
        });
        
        xhr.open("GET", url );
        
        xhr.send();

});

