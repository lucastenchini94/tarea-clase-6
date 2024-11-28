function probarValidarSalaroAnual() {
    console.assert(
        validarSalarioAnual("") === "porfavor ingrese algun salario en la casilla ",
        "validar salario anual no valido que el usuario ingrese un salario en la casilla o que ponga 0",
    )
    console.assert(
        validarSalarioAnual("2,5") === "porfavor solo ingrese numeros enteros en la casilla",
        "validar salario anual no valido que los numeros sean enteros",
    )
}