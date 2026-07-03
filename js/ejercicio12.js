let boton = document.getElementById("botonConvertir");
boton.addEventListener("click", convertir);
function convertir(){
    let pesos= document.getElementById("pesos").value;
    let tasa= 0.057;
    /*VALIDACIONES*/
    if(pesos === ""){
        alert("Porfavor escriba un valor, no existe nada para convertir");
        return;
    }
    else if (pesos < 0){
        alert("Ojo, que no sean valores negativos");
        return;
    }

    let dolares = pesos * tasa;
    document.getElementById("dolares").value =  dolares + " dolares";
}