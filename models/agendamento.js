const { format, parseISO } = require('date-fns')
const conexao = require('../infraestrutura/database/conexao')
const executaQuery = require('../infraestrutura/database/queries')

class Agendamento {

    adiciona(agendamento) {

        const data = format(parseISO(agendamento.data), `yyyy-MM-dd HH:MM:SS`)
        const dataCriacao = format((new Date), `yyyy-MM-dd HH:MM:SS`)
        const status = 'Agendado'


        agendamento.status = status
        agendamento.data = data
        agendamento.dataCriacao = dataCriacao

        const sql = 'INSERT INTO Agendamentos SET ?'

        return executaQuery(sql, agendamento)

    }
}

module.exports = new Agendamento