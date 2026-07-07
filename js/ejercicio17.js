// se obtiene el boton del html para agregar tareas
let botonAgregarTarea = document.getElementById("botonAgregar");

// se obtiene la lista del html donde se van a mostrar las tareas
let contenedorListaTareas = document.getElementById("listaTareas");

// se crea el manejador de tareas usando un closure
let administradorTareas = crearManejadorTareas();

// cuando el usuario da clic en el boton, se ejecuta la funcion agregarTarea
botonAgregarTarea.addEventListener("click", agregarTarea);

// se muestran las tareas guardadas al cargar la pagina
renderizarTareas();


// funcion que crea el closure para manejar las tareas
function crearManejadorTareas() {

    // funcion flecha para recuperar las tareas guardadas en local storage
    const obtenerTareas = () => {
        let tareasGuardadas = localStorage.getItem("tareas");

        // si no hay tareas guardadas, regresa un arreglo vacio
        if (tareasGuardadas === null) {
            return [];
        }

        // convierte el texto json en un arreglo de objetos
        return JSON.parse(tareasGuardadas);
    };

    // esta variable guarda las tareas cargadas desde local storage
    // queda dentro del closure y no se modifica directamente desde afuera
    let listaDeTareas = obtenerTareas();

    // funcion flecha para guardar el arreglo de tareas en local storage
    const guardarTareas = () => {
        localStorage.setItem("tareas", JSON.stringify(listaDeTareas));
    };

    // funcion flecha para agregar una nueva tarea al arreglo
    const agregar = (nuevoTextoTarea) => {

        // se crea la tarea como objeto
        let nuevaTarea = {
            tarea: nuevoTextoTarea,
            completada: false
        };

        // se agrega la nueva tarea al arreglo
        listaDeTareas.push(nuevaTarea);

        // se guarda la lista actualizada en local storage
        guardarTareas();
    };

    // funcion flecha para eliminar una tarea segun su posicion
    const eliminar = (posicionTarea) => {
        listaDeTareas.splice(posicionTarea, 1);

        // se guarda la lista actualizada despues de eliminar
        guardarTareas();
    };

    // funcion flecha para regresar la lista de tareas
    const listar = () => {
        return listaDeTareas;
    };

    // se crea un objeto con las funciones que se podran usar fuera del closure
    let funcionesDelAdministrador = {
        agregar: agregar,
        eliminar: eliminar,
        listar: listar
    };

    // se regresa el objeto para poder usar esas funciones desde afuera
    return funcionesDelAdministrador;
    
}


// funcion principal para agregar una tarea
function agregarTarea() {

    // se obtiene el input donde el usuario escribe la tarea
    let campoTarea = document.getElementById("tarea");

    // se obtiene el texto escrito y se eliminan espacios al inicio y al final
    let textoNuevaTarea = campoTarea.value.trim();

    // validacion para evitar agregar tareas vacias
    if (textoNuevaTarea === "") {
        Swal.fire("Campo vacío", "Ingrese una tarea", "warning");
        return;
    }

    // se manda el texto al administrador para agregarlo y guardarlo
    administradorTareas.agregar(textoNuevaTarea);

    // se limpia el campo despues de agregar la tarea
    campoTarea.value = "";

    // se vuelve a mostrar la lista actualizada
    renderizarTareas();

    // mensaje de confirmacion
    Swal.fire("Correcto", "La tarea fue agregada correctamente", "success");
}


// funcion que muestra las tareas en la pagina
function renderizarTareas() {

    // limpia la lista visual para evitar tareas duplicadas
    contenedorListaTareas.innerHTML = "";

    // obtiene la lista actual de tareas
    let tareasParaMostrar = administradorTareas.listar();

    // recorre todas las tareas guardadas
    for (let i = 0; i < tareasParaMostrar.length; i++) {

        // se crea un elemento li para cada tarea
        let elementoTarea = document.createElement("li");
        elementoTarea.classList.add("tarea");

        // se crea un span para mostrar el texto de la tarea
        let textoTarea = document.createElement("span");
        textoTarea.textContent = tareasParaMostrar[i].tarea;

        // se crea el boton para eliminar la tarea
        let botonEliminarTarea = document.createElement("button");
        botonEliminarTarea.textContent = "Eliminar";
        botonEliminarTarea.classList.add("botonEliminar");

        // cuando se da clic, se manda la posicion de la tarea a eliminar
        botonEliminarTarea.addEventListener("click", eliminarTareaSeleccionada);
        function eliminarTareaSeleccionada() {
            eliminarTarea(i);
        }


        // se agrega el texto dentro del li
        elementoTarea.appendChild(textoTarea);

        // se agrega el boton dentro del li
        elementoTarea.appendChild(botonEliminarTarea);

        // se agrega el li completo dentro de la lista principal
        contenedorListaTareas.appendChild(elementoTarea);
    }
}


// funcion para eliminar una tarea
function eliminarTarea(posicionTarea) {

    // sweetalert pregunta antes de eliminar
    Swal.fire({
        title: "¿Eliminar tarea?",
        text: "La tarea se eliminará de la lista",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar"
    }).then(function(respuesta) {

        // si el usuario confirma, se elimina la tarea
        if (respuesta.isConfirmed) {

            // se elimina la tarea del arreglo y de local storage
            administradorTareas.eliminar(posicionTarea);

            // se actualiza la lista en pantalla
            renderizarTareas();

            // mensaje de confirmacion
            Swal.fire("Eliminada", "La tarea fue eliminada correctamente", "success");
        }

    });
}