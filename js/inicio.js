(function(){


var cargarPagina = function(){
	start();
}

var start = function(){
  setTimeout(mostrarPagina, 7100);
}

var mostrarPagina = function(){
  $('.portada').css('background-image', 'url(../imgs/portada.png)');
  $('.btn-registro').css('border-color', '#08b4ad').css('color', '#08b4ad');

}

$(document).ready(cargarPagina);

}) ();