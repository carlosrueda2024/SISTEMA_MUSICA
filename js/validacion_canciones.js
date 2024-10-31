"use strict";

function validar(){
	var nombre = document.formu.nombre.value;
	var id_albun = document.formu.id_albun.value;
	var id_genero = document.formu.id_genero.value;
	var duracion = document.formu.duracion.value;
	var anio_lanza = document.formu.anio_lanza.value;


if (id_albun=="") {
	alert("falta seleccionar el albun");
	document.formu.id_albun.focus();
	return;
}
if (id_genero=="") {
	alert("falta seleccionar el genero");
	document.formu.id_genero.focus();
	return;
}
if (!v1.test(nombre)) {
	alert("el nombre es incorrecto o el campo esta vacio");
	document.formu.nombre.focus();
	return;
}
if (duracion==="" || duracion==="00:00"){
	alert("falta ingresar la duracion");
	document.formu.duracion.focus();
	return;
}
if (anio_lanza=="" || anio_lanza==0){
	alert("falta ingresar el año de lanzamiento");
	document.formu.anio_lanza.focus();
	return;
}
alert("datos correctos");
document.formu.submit();
}