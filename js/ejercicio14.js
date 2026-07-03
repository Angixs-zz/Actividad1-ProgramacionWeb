let boton = document.getElementById("botonCalcular");
boton.addEventListener("click", calcular);

function calcular() {
    let entrada = document.getElementById("numeros").value;
    let cajaMayor = document.getElementById("mayor");
    let cajaMenor = document.getElementById("menor");
    let cajaPromedio = document.getElementById("promedio");

    if (entrada === "") {
        alert("Se ha detectado que no ha escrito ningún número. Ingrese los valores separados por comas.");
        cajaMayor.value = "";
        cajaMenor.value = "";
        cajaPromedio.value = "";
        return;
    }

    let arreglo = entrada.split(",");
    let numeros = arreglo.map(Number);

    let hayError = numeros.some(isNaN);

    if (hayError) {
        alert("Ingrese solamente números válidos separados por comas");
        cajaMayor.value = "";
        cajaMenor.value = "";
        cajaPromedio.value = "";
        return;
    }

    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);

    let suma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
    let promedio = suma / numeros.length;

    cajaMayor.value = mayor;
    cajaMenor.value = menor;
    cajaPromedio.value = promedio;
}