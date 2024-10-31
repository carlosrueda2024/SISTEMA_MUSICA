"use strict"


function buscar_canciones() {
    var d1, d2, d3, ajax, url, param, contenedor;
    contenedor = document.getElementById('tabla');
    d1 = document.formu.nombre.value;
    d2 = document.formu.duracion.value;
    d3 = document.formu.anio_lanza.value;
    
    ajax = nuevoAjax();
    url = "ajax_buscar_cancion.php";
    param = "nombre=" + d1 + "&duracion=" + d2 + "&anio_lanza=" + d3;
    ajax.open("POST", url, true);
    ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    ajax.onreadystatechange = function () {
        if (ajax.readyState == 4) {
            contenedor.innerHTML = ajax.responseText;
        }
    }
    ajax.send(param);
}

