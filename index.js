// calcular salario
let inputH = document.getElementById("input-h")
let inputS = document.getElementById("input-s")
let btn = document.getElementById("btn")
let h2Valor = document.getElementById("h2-valor")

let aviso = 'digite um numero'

btn.addEventListener("click", calc)

function calc (){
  let valorS = inputS.value;
  let valorH = inputH.value;
  let final = valorS/valorH

  if (valorH == 0 && valorS == 0) {
    h2Valor.innerText = `valor = ${aviso}`
   }else if(valorH > 0 && valorS > 0){
    h2Valor.innerText = `Valor = ${final} R$`
   }
}


// calcular horas e dias
let inputCalcularHora = document.getElementById("calcular-hora")
let inputCalcularDia = document.getElementById("calcular-dias")
let h2ResultHora = document.getElementById("result-horas")
let btnDivOn = document.getElementById("calc")
let divCalc = document.getElementById("calcular-h")
let btnCalcHoras = document.getElementById("calcular-btn")
let voltar = document.getElementById("voltar")

btnDivOn.addEventListener("click",()=>{
  divCalc.classList.add("calcular-on")
})

voltar.addEventListener("click",()=>{
  divCalc.classList.remove("calcular-on")
})

btnCalcHoras.addEventListener("click", calcularHora)

function calcularHora (){

  let valorCalcHora = inputCalcularHora.value;
  let valorCalcDia = inputCalcularDia.value;
  let ad = 4;
  let finalCalcHoras = valorCalcHora * valorCalcDia * ad;

  if (valorCalcHora == 0 && valorCalcDia == 0) {
    h2ResultHora.innerText = `valor = ${aviso}`
   }else if(valorCalcDia > 0 && valorCalcHora > 0){
    h2ResultHora.innerText = `horas = ${finalCalcHoras} horas`
   }

}