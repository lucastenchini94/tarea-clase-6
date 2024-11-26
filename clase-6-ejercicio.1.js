const botonIngresarInput = document.querySelector("#ingresar-inputs")
const botonCalcularParametros = document.querySelector("#calculo-de-parametros")
const textCalculos = document.querySelector("h2")
const botonRestablecer = document.querySelector("#restablecer-todo")
const nodoPaginaform = document.querySelector("form")
botonRestablecer.onclick = function () {
    location.reload()
    return false
}

botonIngresarInput.onclick = function () {
    borrarIntegrantes();
    const cantPersonas = document.querySelector("#cantidad-personas").value
    let contUno = 0
    while (contUno<cantPersonas) {
        
        const nuevoLi = document.createElement("li")
        const nuevoInput = document.createElement("input")
        nuevoInput.classList.add("edades")
        nuevoInput.setAttribute("type","Number")
        nuevoLi.appendChild(nuevoInput)
        nodoPaginaform.appendChild(nuevoLi)
        contUno++
        
    }
    console.log(validarCantidadDePersonas(cantPersonas));    

    return false
}
function borrarIntegrantes() {
    const integrantes = document.querySelectorAll("li");
    for (let i = 0; i < integrantes.length; i++) {
        integrantes[i].remove();
        
    }
}
botonCalcularParametros.onclick = function(){
    const edadesF = document.querySelectorAll(".edades")
    const edades = []
    for (let i = 0; i < edadesF.length; i++) {
        edades.push(Number(edadesF[i].value))   
    }
    let menorEdad = 1000
    let mayorEdad = 0
    
    let sumadorEdades = 0
    for (let i = 0; i < edades.length; i++) {
        if (edades[i]<menorEdad) {
            menorEdad = edades[i]
        }   
        if (edades[i]>mayorEdad) {
            mayorEdad=edades[i]
        }
        sumadorEdades=sumadorEdades+edades[i]
        console.log(validarEdades(edades[i]));
    }
    const promedio = sumadorEdades/edades.length

    textCalculos.innerText = ("el familiar con menor edad tiene "+menorEdad+" años, el mayor tiene "+mayorEdad+" años y el promedio de edad es de "+parseInt(promedio))
    





    return false
}

function validarCantidadDePersonas(cantPersonas) {
    if (cantPersonas === "0") {
        return "este campo debe tener 1 caracter o mas";
    }
    if (cantPersonas === "") {
        return "este campo debe tener 1 caracter o mas";
    }
    if (cantPersonas % 1 !== 0) {
        return "el campo solo admite numeros enteros";
    }else{
    return "";
    }
}
function validarEdades(edades) {
    if (edades === 0) {
        return "este campo no puede estar vaco, por favor ingrese una edad";
    }
    if (edades % 1 !== 0) {
        return "el campo solo admite numeros enteros";
    }else{
        return "";
    }
}
