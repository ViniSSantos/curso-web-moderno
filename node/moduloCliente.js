const moduloA = require('./moduloA')
const moduloB = require('./moduloB')

//Sempre que vamos usar um arquivo de fora do modulo, temos que primeiro  requerer ou "require"
// para voltar de pas usamos dai: ../.expemplo

console.log(moduloA.bemVindo);
console.log(moduloA.ateLogo);
console.log(moduloA.ola);
console.log(moduloA);

console.log(moduloB.comprimentar);
console.log(moduloB);
console.log(moduloB.boaNoite());