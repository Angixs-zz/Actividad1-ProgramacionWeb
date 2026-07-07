// se toman los elementos principales del html
let input = document.getElementById("nuevoElemento");
let botonAgregar = document.getElementById("botonAgregar");
let lista = document.getElementById("lista");

// se le agrega el evento click al boton
botonAgregar.addEventListener("click", agregarElemento);


// funcion para agregar un elemento a la lista
function agregarElemento() {

    // primero se obtiene lo que escribio el usuario
    let texto = input.value;

    // despues se quitan los espacios del inicio y del final
    texto = texto.trim();

    // se valida que el campo no este vacio
    if (texto === "") {
        alert("Escribe algo para agregar a la lista");
        return;
    }

    // se crea un elemento li, que sera el nuevo elemento de la lista
    let elementoLista = document.createElement("li");

    // se agregan clases de bootstrap al li para que tenga diseño
    elementoLista.classList.add("list-group-item");
    elementoLista.classList.add("d-flex");
    elementoLista.classList.add("justify-content-between");
    elementoLista.classList.add("align-items-center");

    // se crea un texto con lo que escribio el usuario
    let textoElemento = document.createTextNode(texto);

    // se crea el boton para eliminar el elemento
    let botonEliminar = document.createElement("button");

    // se coloca el texto que tendra el boton
    botonEliminar.textContent = "Eliminar";

    // se agregan clases de bootstrap al boton
    botonEliminar.classList.add("btn");
    botonEliminar.classList.add("btn-danger");
    botonEliminar.classList.add("btn-sm");

    // se le agrega el evento click al boton eliminar
    botonEliminar.addEventListener("click", eliminarElemento);

    // se agrega el texto dentro del li
    elementoLista.appendChild(textoElemento);

    // se agrega el boton eliminar dentro del li
    elementoLista.appendChild(botonEliminar);

    // se agrega el li completo dentro de la lista ul
    lista.appendChild(elementoLista);

    // se limpia el campo de texto para escribir otro elemento
    input.value = "";
}


// funcion para eliminar un elemento de la lista
function eliminarElemento(evento) {

    // se identifica el boton que fue presionado
    let boton = evento.target;

    // se obtiene el elemento padre del boton, que en este caso es el li
    let elemento = boton.parentElement;

    // se elimina el li de la lista
    elemento.remove();
}