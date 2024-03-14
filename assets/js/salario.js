
const {gets, post} = require ('./notas');

const salarioBruto = gets();
const adicional = gets([]);



if (salarioBruto > 0 && salarioBruto <= 1100.00){
   let salario = (salarioBruto - (salarioBruto * 0.05)) + adicional
   console.log(salario)

}else if(salarioBruto >1100.00 && salarioBruto <= 2500.00){
    let salario = (salarioBruto - (salarioBruto * 0.1)) + adicional
    console.log(salario)

}else if(salarioBruto > 2500.00) {
    let salario = (salarioBruto - (salarioBruto * 0.15)) + adicional
    console.log(salario)
    
}

