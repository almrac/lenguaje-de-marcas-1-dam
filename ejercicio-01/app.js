// Capturamos los elementos del HTML que vamos a usar desde JavaScript.
const formulario = document.getElementById('formulario-pedido');
const producto = document.getElementById('producto');
const imagen = document.getElementById('imagen-producto');
const usuario = document.getElementById('usuario');
const condiciones = document.getElementById('condiciones');
const mensajeEstado = document.getElementById('mensaje-estado');

// Relacionamos cada valor del select con la imagen que le corresponde.
const imagenes = {
    "": "assets/sin-producto.svg",
    ordenador: "assets/ordenador.svg",
    portatil: "assets/portatil.svg",
    tablet: "assets/tablet.svg",
};

// Cambia la imagen de vista previa segun el producto seleccionado.
function cambiarImagen(){
    const productoSeleccionado = producto.value;
    const rutaImagen = imagenes[productoSeleccionado];
    imagen.src = rutaImagen;
}

// Cuando cambia el select, actualizamos la imagen en pantalla.
producto.addEventListener('change', cambiarImagen);

// Interceptamos el envio para validar manualmente cada campo.
formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    mensajeEstado.textContent = '';

    // Primero comprobamos que se haya elegido un producto.
    if (producto.value === '') {
        mensajeEstado.textContent = 'Por favor, selecciona un producto.';
        producto.focus();
        return;
    }

    // Despues validamos que el usuario no este vacio.
    if (usuario.value.trim() === '') {
        mensajeEstado.textContent = 'El usuario no puede estar vacio.';
        usuario.focus();
        return;
    }

    // Si hay texto, comprobamos que tenga al menos 5 caracteres.
    if (usuario.value.trim().length < 5) {
        mensajeEstado.textContent = 'El usuario debe tener al menos 5 caracteres.';
        usuario.focus();
        return;
    }

    // Por ultimo, verificamos que se hayan aceptado las condiciones.
    if (!condiciones.checked) {
        mensajeEstado.textContent = 'Debes aceptar las condiciones para realizar el pedido.';
        condiciones.focus();
        return;
    }

    // Si todo es correcto, mostramos el exito y reiniciamos el formulario.
    mensajeEstado.textContent ='Pedido realizado con éxito';
    formulario.reset();
    cambiarImagen();
});
