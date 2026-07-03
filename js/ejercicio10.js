let boton = document.getElementById("botonConvertir");
boton.addEventListener("click", convertir);

function convertir() {
    let celsius = document.getElementById("celsius").value;

    if (celsius === "") {
        alert("Por favor ingresa una temperatura en Celsius.");
        return;
    }
    let fahrenheit = (celsius * 9 / 5) + 32;

    document.getElementById("fahrenheit").value = fahrenheit + " °F";
}