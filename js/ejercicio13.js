let boton = document.getElementById("botonConvertir");
boton.addEventListener("click", verificar);

function verificar() {
    let edad = document.getElementById("edad").value;
    let resultado = document.getElementById("resultado");

    if (edad === "") {
        alert("Ingrese un valor, petición no aprobada");
        resultado.value = "";
        return;
    }


    if ( edad < 0 || edad > 100) {
        alert("Ingrese una edad válida entre 0 y 100");
        resultado.value = "";
        return;
    }

    if (edad >= 18) {
        resultado.value = "Usted puede votar";
    } else {
        resultado.value = "Usted NO puede votar";
    }
}