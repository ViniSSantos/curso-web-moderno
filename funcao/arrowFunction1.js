let dobro = function (a) {
    return 2 * a
}
//ou
dobro = (a) => { // " => " Sig. Arrow Function
    return 2 * a
}
//ou
dobro = a => 2 * a // Return implícito
console.log(dobro(Math.PI))

ola = () => 'Olá'
ola = _ => 'Olá' // possui um parametro
console