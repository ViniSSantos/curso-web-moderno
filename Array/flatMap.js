const escola = [{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Gustavo',
        nota: 8.1
    }, {
        nome: 'Ana',
        nota: 9.3
    }]
}, {
    nome: 'Turma M2',
    alunos: [{
        nome: 'Rebeca',
        nota: 8.9
    }, {
        nome: 'Roberto',
        nota: 7.3
    }]
}]

const getNotaDoAluno = aluno => aluno.nota //dinamicoaluno.anota = Para extrair a nota do aluno
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno) // dinamico turma.alunos = Para extrair as turmas

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)

console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))

Array.prototype.flatMap = function(callback) {
    return Array.prototype.concat.apply([], this.map(callback))
}

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2)

// concatenados e map ados kkk Todos para um mesmo array com a funçaõ "map" e "flat"
