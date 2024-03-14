
const {gets, print} = require('./notas');

const notasAlunos = gets();

let valorMaior = null;

let valorMenor = null;

for (let i = 0; i < notasAlunos; i++) {
    const element = gets();
    if (element % 2 === 0){
        if (valorMaior === null || valorMaior < element){
            valorMaior = element
        }
    }else{
        if (valorMenor === null || valorMenor > element){
            valorMenor = element
        }
    }
}


print(valorMaior)

print(valorMenor)



