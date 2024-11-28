function probarValidarCantidadPersonas() {
    console.assert(
        validarCantidadDePersonas("") ==="este campo debe tener 1 caracter o mas",
        "validar cantidad de personas no valido que el campo tenga numeros",
    );
    console.assert(
        validarCantidadDePersonas("0") === "este campo debe tener 1 caracter o mas",
        "validar cantidad dep personsa no valido que el campo no tenga 0",
    )
    console.assert(
        validarCantidadDePersonas("2,5") === "el campo solo admite numeros enteros",
        "validar cantidad de pesonas no valido que los numeros sean solo enteros",
    )
}
function probarValidarEdades() {
    console.assert(
    validarEdades("") === "este campo no puede estar vacio, por favor ingrese una edad",
    "validar edad no valido que el campo este vacio",
    )
    console.assert(
    validarEdades("0") === "este campo no puede estar vacio, por favor ingrese una edad",
    "validar edad no valido que el campo no tenga 0",
    )
    console.assert(
        validarEdades(2,5) === "el campo solo admite numeros enteros",
        "validar edades no valido que el campo no tenga numeros enteros",
    )
}
probarValidarCantidadPersonas();
probarValidarEdades();