import {
  $,
  cargarMusica,
  reproducirMusica,
  pausarMusica,
  continuarMusica,
  siguienteMusica,
  anteriorMusica
} from "./funciones.js";

const btnCargar = $("#files");
const listaMusica = $("#lista-musica");
const btnPause = $(".pause");
const btnPlay = $(".play");
const btnSiguiente = $(".siguiente");
const btnAnterior = $(".atras")

document.addEventListener("DOMContentLoaded", () => {
  btnCargar.addEventListener("change", cargarMusica);
  listaMusica.addEventListener("click", reproducirMusica);
  btnPause.addEventListener("click", pausarMusica);
  btnPlay.addEventListener("click", continuarMusica);
  btnSiguiente.addEventListener("click", siguienteMusica);
  btnAnterior.addEventListener("click", anteriorMusica);
});
