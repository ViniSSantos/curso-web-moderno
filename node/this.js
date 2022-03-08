console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function logThis () {
    console.log('Dentro de uma função...')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)
}

logThis()

/*
OBS.:"This" dentro de uma função aponta para "global" e... 
    "This" fora de uma função, dentro de um modulo, aponta para "module.exports".
*/

//Devemos cuidar pois de incluimos ex: this.nome = '...' dentro de uma função, ira alterar global, e vice-versa.