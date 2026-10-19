// Guardamos en variables los elementos del HTML que vamos a utilizar.
let inputConcepto = document.getElementById('concepto');
let inputImporte = document.getElementById('importe');
let botonAnadir = document.getElementById('btn-anadir');
let botonReset = document.getElementById('btn-reset');
let lista = document.getElementById('lista');
let total = document.getElementById('total');

// Esta función se ejecuta cuando el usuario pulsa el botón Añadir.
function anadirCompra() {
    // Leemos el concepto y eliminamos espacios al principio y al final con trim.
    let concepto = inputConcepto.value.trim();

    // Leemos el importe tal y como llega desde el input.
    let importe = inputImporte.value;

    // Convertimos el importe de texto a número decimal.
    let importeNuevo = parseFloat(importe);

    // Si alguno de los dos campos está vacío, mostramos un aviso y detenemos la función.
    if (concepto === "" || importe === "") {
        alert("Debes rellenar concepto e importe");
        return;
    }

    // Si la lista todavía tiene el mensaje inicial, lo borramos antes de añadir productos.
    if (lista.querySelector(".vacio")) {
        lista.innerHTML = "";
    }

    // Añadimos el nuevo concepto al final de la lista dentro de un párrafo.
    lista.innerHTML = lista.innerHTML + "<p>" + concepto + "</p>";

    // Leemos el total actual y lo convertimos a número.
    let totalActual = parseFloat(total.innerHTML);

    // Sumamos el nuevo importe al total anterior y mostramos el resultado con dos decimales.
    total.innerHTML = (totalActual + importeNuevo).toFixed(2);

    // Vaciamos los inputs para que el usuario pueda escribir el siguiente producto.
    inputConcepto.value = "";
    inputImporte.value = "";
}

// Esta función devuelve el ejercicio a su estado inicial.
function resetearCompra() {
    // Restauramos el mensaje inicial dentro de la lista.
    lista.innerHTML = '<p class="vacio">Todavía no hay conceptos añadidos.</p>';

    // Reiniciamos el total a cero.
    total.innerHTML = "0";

    // Limpiamos los campos del formulario.
    inputConcepto.value = "";
    inputImporte.value = "";
}

// Asociamos el botón Añadir con su función.
botonAnadir.addEventListener("click", anadirCompra);

// Asociamos el botón Reset con su función.
botonReset.addEventListener("click", resetearCompra);
