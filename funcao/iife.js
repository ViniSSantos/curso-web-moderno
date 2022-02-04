// IIFE -> Immediately Invoked Function Expression
(function() { // Temos que envolver a função entre parenteses 
    console.log('Será executado na hora!')
    console.log('Foge do escopo Global')
})() //Por fim temos que chamar os parenteses para envocar a função

// Temo como beneficio fugir do escopo global e ela ser lida assim que o arquivo for executado