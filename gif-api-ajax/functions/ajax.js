
const ajax = ( options ) => {
    let { url, method, success, error, data } = options;

    const xhr = new XMLHttpRequest();

    xhr.addEventListener( "readystatechange", (event) => {
        if( xhr.readyState !== 4 ) return;
        if( xhr >= 200 && xhr.status < 300) {
            const json = JSON.parse(xhr.responseText);
            success(json);
        } else {
            const message = xhr.statusText || "ocurrio un error";
            error(`Error ${ xhr.status }: ${ message }`);
        }
    });

    xhr.open( method || "GET", url );
    xhr.setRequestHeader("Content-type", "application/json: charset-utf-8");
    xhr.send(JSON.stringify(data));
}

const index = ( category = 'naruto', limit = 12 ) => {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=7P7dlaUZCDNeRmj9scDdISuucbr2sTn7&q=${ category }&limit=${ limit }`;

    ajax({
        method: 'GET',
        url: url,
        success: (res) => {
            console.log(res);
        }
    })
}