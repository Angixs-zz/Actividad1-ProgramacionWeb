// Ejercicio 16 - Calculadora con funciones flecha

// Botones
let botonSumar = document.getElementById("botonSumar");
let botonRestar = document.getElementById("botonRestar");
let botonMultiplicar = document.getElementById("botonMultiplicar");
let botonDividir = document.getElementById("botonDividir");

// Eventos
botonSumar.addEventListener("click", calcularSuma);
botonRestar.addEventListener("click", calcularResta);
botonMultiplicar.addEventListener("click", calcularMultiplicacion);
botonDividir.addEventListener("click", calcularDivision);

// Funciones flecha de las operaciones
const sumar = (a, b) => a + b;

const restar = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => a / b;

// Funciones que se ejecutan con cada click
function calcularSuma() {
    calcularOperacion("suma");
}

function calcularResta() {
    calcularOperacion("resta");
}

function calcularMultiplicacion() {
    calcularOperacion("multiplicacion");
}

function calcularDivision() {
    calcularOperacion("division");
}



// Funcion principal
function calcularOperacion(operacion) {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let cajaResultado = document.getElementById("resultado");

    if (numero1 === "" || numero2 === "") {
        Swal.fire({
            icon: "warning",
            title: "Campos vacíos",
            text: "Ingrese los dos números para realizar la operación"
        });

        cajaResultado.value = "";
        return;
    }

    if (isNaN(numero1) || isNaN(numero2)) {
        Swal.fire({
            icon: "error",
            title: "Datos incorrectos",
            text: "Ingrese solamente números válidos"
        });

        cajaResultado.value = "";
        return;
    }

    numero1 = Number(numero1);
    numero2 = Number(numero2);

    let resultado;

    if (operacion === "suma") {
        resultado = sumar(numero1, numero2);
    }
    else if (operacion === "resta") {
        resultado = restar(numero1, numero2);
    }
    else if (operacion === "multiplicacion") {
        resultado = multiplicar(numero1, numero2);
    }
    else if (operacion === "division") {
        if (numero2 === 0) {
            Swal.fire({
                icon: "error",
                title: "División no permitida",
                text: "No se puede dividir entre cero"
            });

            cajaResultado.value = "";
            return;
        }

        resultado = dividir(numero1, numero2);
    }

    cajaResultado.value = resultado;
}