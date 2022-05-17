export const $ = (qs) => document.querySelector(qs);
const listaMusica = $("#lista-musica");
const musicaTemporal = $("#musica-temporal");

export function cargarMusica(e) {
  // console.log(e.target.files);
  const files = Array.from(e.target.files);

  files.forEach((f) => {
    const reader = new FileReader();
    reader.onload = (function (archivo) {
      return function (evt) {
        const li = document.createElement("li");
        li.classList.add("list-item");
        li.id = "music";
        li.innerHTML = `
                <input type="hidden" value="${evt.target.result}"/>
                <input type="hidden" value="${archivo.name}"/>
                <audio src="${evt.target.result}"></audio>
                ${archivo.name}
                `;
        listaMusica.appendChild(li);
        // console.log(evt.target.result);
      };
    })(f);
    reader.readAsDataURL(f);
  });
}

export function reproducirMusica(e) {
  if (e.target.classList.contains("list-item")) {
    const srcMusica = e.target.children[0].value;
    const nombreMusica = e.target.children[1].value;

    cargaTemporal(srcMusica, nombreMusica);
  }
}

const cargaTemporal = (src, nombreM) => {
  musicaTemporal.innerHTML = `<audio src="${src}" autoplay></audio>
    <input type="hidden" value="${src}">
    `;
  $("#name-music").innerText = nombreM;
  siguienteAutomatico();
};
export function pausarMusica() {
    musicaTemporal.children[0].pause();
}
export function continuarMusica() {
    musicaTemporal.children[0].play();
}
export function siguienteMusica() {
    const musicArray = Array.from(listaMusica.children);
    const actual = musicaTemporal.children[1].value;
    musicArray.forEach( liMusica => {
        if(liMusica.children[0].value === actual){
            const siguienteMusica = liMusica.nextSibling.children[0].value;
            const nombreSiguiente = liMusica.nextSibling.children[1].value;
            cargaTemporal(siguienteMusica, nombreSiguiente);
        }
    });
}

export function anteriorMusica() {
    const musicArray = Array.from(listaMusica.children);
    const actual = musicaTemporal.children[1].value;
    musicArray.forEach( liMusica => {
        if(liMusica.children[0].value === actual){
            const anteriorMusic = liMusica.previousSibling.children[0].value;
            const nombreAnterior = liMusica.previousSibling.children[1].value;
            cargaTemporal(anteriorMusic, nombreAnterior);
        }
    });
}

const siguienteAutomatico = () => {
    const actual = musicaTemporal.children[0];
    actual.addEventListener('ended', siguienteMusica);
}