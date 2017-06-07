$(document).ready(start);

function start(){
  setTimeout(mostrarPortada, 7100);
}

function mostrarPortada(){
  $('.portada').css('background-image', 'url(../imgs/portada.png)');
  $('.btn-registro').css('border-color', '#08b4ad').css('color', '#08b4ad');

}