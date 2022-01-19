function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // Operador lógico do tipo "ou ||"
    const comprarTv50 = trabalho1 && trabalho2 // Operador lógico do tipo "i &&"
    // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // Operador com "Ou exclusivo !="
    const manterSaudavel = !comprarSorvete // Operador Unário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))