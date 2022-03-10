const schedule = require('node-schedule')

//ScheduleJob( */N.5 de sgds. em segundos, * Minutos, * Horas, * dia/mês, * Mês, * Dia/Semana ) Dom1, Seg2, Ter3, Qua4, Qui5, Sex6, Sab7.
// Se apenas colocar * ele ignora o parametro requisitado

const tarefa1 = schedule.scheduleJob('*/5 * 10 * 03 4', function () {
    console.log('Executando Tarefa 1!', new Date().getSeconds())
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando Tarefa 1!')
}, 20000)

//setImmediate
//setInterval

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] // Dias da Semana
regra.hour = 10
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function (){
    console.log('Executando Tarefa 2!', new Date().getSeconds())
})