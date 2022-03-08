require('./global')

console.log(MinhaApp.saudacao());

//Esses atributos não deveriam estar passíveis de mudança.
// Para corrigir isto, usamos o freeze pra congelar esta ação.

MinhaApp.nomeSoftware = 'Nunca faça isso'
console.log(MinhaApp.nomeSoftware);