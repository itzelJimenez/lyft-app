(function(){
var $botonRegistro = $('#registro');
var $formTel=$('#formTel');
var $enviarCodigo = ('#enviarCodigo');

var cargarPagina = function(){
	coordenadas();
	$formTel.submit(validacion);
	$(document).on("click", $enviarCodigo, validacion);
}

var coordenadas = function(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(obtenerCoordenadas);
    } else{alert('La aplicación requiere conocer su ubicación actual')};
}

var obtenerCoordenadas = function(coordenadas){
	latitud = coordenadas.coords.latitude;
	longitud = coordenadas.coords.longitude;
 	console.log(latitud,longitud);
 	localStorage.setItem("latitud", latitud);
 	localStorage.setItem("longitud", longitud);
}

var enviandoCodigo = function(){
	swal({
	  title: "",
	  text: "Sending code",
	  imageUrl: "../imgs/loading.gif",
	  timer: 2000,
	  showConfirmButton: false
	});
	setTimeout(codigoEnviado, 3000);
}

var codigoEnviado = function(){
	swal({
	  title: "",
	  text: "Code sent",
	  imageUrl: "../imgs/validar.gif",
	  timer: 2000,
	  showConfirmButton: false
	});
}

var validacion = function(e){
	e.preventDefault();
	$inputTel = $('#numero');
	$contInputTel= $inputTel.val();
	console.log($contInputTel.length);
	if ($contInputTel.length = 10) {
		enviandoCodigo();
		setTimeout(redireccion, 5000);
	} else{
		swal({
		  title: "",
		  text: "Write a valid number",
		  imageUrl: "../imgs/error.png",
		  timer: 2000,
		  showConfirmButton: false
		});
	}
}

var redireccion = function(){
	location.href ="../views/codigo.html"
}
$(document).ready(cargarPagina);

}) ();