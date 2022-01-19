console.log('01.:', '1' == 1)
console.log('02.:', '1' === 1)
console.log('03', '3' != 3) // operacao com != (Diferente) = falsa pois são iguais 3 e 3 Pois n está compar. o tipo apenas valor
console.log('04.:', '3' !== 3) // operacao com !== (EstritamenteDiferente) Compara tipo: Aqui um é String e outro Number "True"

console.log('05.:', 3 < 2)
console.log('06.:', 3 > 2)
console.log('07.:', 3 <= 2)
console.log('07.:', 3 >= 2)

// Neste "EX" tanto faz o == ou === pois são do mesmo tipo (TypeOff Date e valor)
const d1 = new Date(0)
const d2 = new Date(0)
console.log('09.:', d1 == d2)
console.log('10.:', d1 === d2)
console.log('11.:', d1.getTime() === d2.getTime())

console.log('12.:', undefined == null)
console.log('13.:', undefined === null)

