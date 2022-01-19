let contador = 1 //Declarão da var/Controlador do laço 
while (contador <= 10) { //expressão da função
    console.log(`contador = ${contador}`)
    contador++ //Encremento
}

for (let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
// .length = É usado para ler o tamanho do Array
//Começe do 0 "i=0" array cmça em indc. 0; vá até o I nemor que o tamango do aray " i < notas.LENGTH"; "i++" e acrescente uma unidade ao valor de "i" para cada interação

for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`) // ${} = Receber, recebe a var(exp.)
}