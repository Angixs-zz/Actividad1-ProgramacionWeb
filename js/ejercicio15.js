// arreglo donde se van a guardar todos los estudiantes agregados
let estudiantes = [];

// botones del formulario
let botonAgregar = document.getElementById("botonAgregar");
let botonCalcular = document.getElementById("botonCalcular");
let botonReiniciar = document.getElementById("botonReiniciar");

// eventos
botonAgregar.addEventListener("click", agregarEstudiante);
botonCalcular.addEventListener("click", calcularResultado);
botonReiniciar.addEventListener("click", reiniciarTabla);

// funcion para agregar estudiantes
function agregarEstudiante() {
    // capturamos los valores del formulario
    let nombre = document.getElementById("nombre").value;
    let calificacion = document.getElementById("calificacion").value;

    // validamos que el nombre no este vacio
    if (nombre === "") {
        alert("Ingrese el nombre del estudiante");
        return;
    }

    // validamos que la calificacion no este vacia
    if (calificacion === "") {
        alert("Ingrese la calificación del estudiante");
        return;
    }

    // convertimos la calificacion a numero
    calificacion = Number(calificacion);


    // validamos que la calificacion este entre 0 y 100
    if (calificacion < 0 || calificacion > 100) {
        alert("Ingrese una calificación entre 0 y 100");
        document.getElementById("calificacion").value = "";
        return;
    }

    // creamos un objeto para representar al estudiante
    let estudiante = {
        nombre: nombre,
        calificacion: calificacion
    };

    // guardamos el objeto dentro del arreglo
    estudiantes.push(estudiante);

    // mostramos los estudiantes en la tabla
    mostrarTabla();

    // limpiamos las cajas de entrada
    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";
}

// funcion para calcular los resultados
function calcularResultado() {
    // validamos que exista al menos un estudiante
    if (estudiantes.length === 0) {
        alert("Primero debe ingresar estudiantes");
        return;
    }

    // calculamos el promedio usando reduce
    let promedio = estudiantes.reduce((total, estudiante) => total +
    estudiante.calificacion, 0) / estudiantes.length;

    // obtenemos la calificacion mas alta usando math.max, map y spread
    let calificacionMaxima = Math.max(...estudiantes.map(e =>
    e.calificacion));

    // obtenemos la calificacion mas baja usando math.min, map y spread
    let calificacionMinima = Math.min(...estudiantes.map(e =>
    e.calificacion));


    // buscamos el estudiante con la calificacion mas alta
    let estudianteAlto = estudiantes.find(estudiante => estudiante.calificacion === calificacionMaxima);


    // buscamos el estudiante con la calificacion mas baja
    let estudianteBajo = estudiantes.find(estudiante => estudiante.calificacion === calificacionMinima);

    // mostramos los resultados en las cajas readonly
    document.getElementById("promedio").value = promedio.toFixed(2);

    document.getElementById("estudianteNombreAlto").value = estudianteAlto.nombre;
    document.getElementById("estudianteCalificacionAlto").value = estudianteAlto.calificacion;

    document.getElementById("estudianteNombreBajo").value = estudianteBajo.nombre;
    document.getElementById("estudianteCalificacionBajo").value = estudianteBajo.calificacion;
}

// funcion para mostrar estudiantes en la tabla
function mostrarTabla() {
    // obtenemos el cuerpo de la tabla
    let tabla = document.getElementById("tablaEstudiantes");

    // limpiamos la tabla antes de volver a llenarla
    tabla.innerHTML = "";

    // recorremos el arreglo de objetos con foreach
    estudiantes.forEach(function(estudiante) {
        tabla.innerHTML += `
            <tr>
                <td>${estudiante.nombre}</td>
                <td>${estudiante.calificacion}</td>
            </tr>
        `;
    });
}

// funcion para reiniciar la tabla y los resultados
function reiniciarTabla() {
    // vaciamos el arreglo de estudiantes
    estudiantes = [];

    // limpiamos la tabla
    mostrarTabla();

    // limpiamos entradas
    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";

    // limpiamos resultados
    document.getElementById("promedio").value = "";
    document.getElementById("estudianteNombreAlto").value = "";
    document.getElementById("estudianteCalificacionAlto").value = "";
    document.getElementById("estudianteNombreBajo").value = "";
    document.getElementById("estudianteCalificacionBajo").value = "";
}