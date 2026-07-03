let boton = document.getElementById("botonConvertir");
boton.addEventListener("click", convertir);
function convertir(){
    let kilometros= document.getElementById("kilometros").value;
    /*validaciones */
    if (kilometros === "") {
        alert("Por favor, ingrese una distancia en kilómetros.");
        return;
    }
    else if (kilometros < 0) {
        alert("Por favor, ingrese un valor positivo para la distancia en kilómetros.");
        return;
    }
    
    let millas = kilometros * 0.621371;
    document.getElementById("millas").value = millas + " mi";
}