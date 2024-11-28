const botonAgregar = document.querySelector("#agregar");
let contCampos = 0;
const nodoFormulario = document.querySelector("form")

botonAgregar.onclick = function(){
    contCampos++;
    const nodoCampo = document.createElement("li");
    nodoCampo.innerHTML = (`<label id="salario-integrante${contCampos}">
    Salario anual del integrante #${contCampos} es:
    <input type="number" id="salario-integrante${contCampos}" class='salario'>
  </label>`);
  nodoFormulario.appendChild(nodoCampo);
  borrarCalculos();
  return false;
  
}
const botonQuitar = document.querySelector("#quitar");

botonQuitar.onclick = function(){
    if (contCampos>0) {
        const seleccionCampos = document.querySelector("#formulario-campos");
        seleccionCampos.removeChild(seleccionCampos.lastChild);
        contCampos--;    
    }
    borrarCalculos();
    return false;
    
}


//mayor salario, menor salario, promedio salario anual y salario mensual promedio
const botonCalcular = document.querySelector("#calcular");
botonCalcular.onclick = function () {
    const $salarioAnual = document.querySelectorAll(".salario");
    const salarioAnual = [];
    let contadorErrores = 0;
    for (let i = 0; i < $salarioAnual.length; i++) {
        
        salarioAnual.push(($salarioAnual[i].value))
            if (validarSalarioAnual(salarioAnual[i]) === "") {
            
            }else{
              contadorErrores++;
            }
        console.log(validarSalarioAnual(salarioAnual[i]));
          
    }
    
        
    
if (contadorErrores===0) {
    

    const longitudLista = salarioAnual.length;
    let contW = 0;
    let mayorSalario = 0; 
    let menorSalario = 999999999;
    let sumadorPromedio=0;


    while (contW<longitudLista) {
        sumadorPromedio=sumadorPromedio+Number(salarioAnual[contW]);
        if (mayorSalario<salarioAnual[contW]) {
            mayorSalario=salarioAnual[contW];
        }
        if (menorSalario>salarioAnual[contW]) {
            menorSalario=salarioAnual[contW];
        }
        contW++;
    }
    const promedioAnual = sumadorPromedio/longitudLista;

    //calculo del salario mensual promedio

    contW=0
    let sumadorPromedioMensual = 0;
    
    while (contW<longitudLista) {
        sumadorPromedioMensual = sumadorPromedioMensual+(salarioAnual[contW]/12);
        contW++;
    }
    const promedioMensual=sumadorPromedioMensual/longitudLista;


    const textoParrafo = document.querySelector("h2");
    textoParrafo.innerText = ("el salario mas alto es de $"+mayorSalario+", el salario mas bajo es de $"+menorSalario+", el promedio anual es de $"+promedioAnual+", el promedio mensual es de $"+promedioMensual);
}else{
    alert("porfavor corregir errores de escritura");
}



  return false;
}
function borrarCalculos(){
    document.querySelector("h2").textContent=""
}

function validarSalarioAnual(salarioAnual) {
    if (salarioAnual=== "") {
        return "porfavor ingrese algun salario en la casilla ";
    }
    if (salarioAnual % 1 !== 0) {
        return "porfavor solo ingrese numeros enteros en la casilla ";
    }else{
        return "";
    }
}
