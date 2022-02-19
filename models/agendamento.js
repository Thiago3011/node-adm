const { format, parseISO } = require('date-fns')
const conexao = require('../infraestrutura/database/conexao')
const executaQuery = require('../infraestrutura/database/queries')
const repositorio = require('../repositorios/agendamento')
const Conversoes = require('../servicos/conversoes')

class Agendamento {

    adiciona(agendamento) {

        const dataCriacao = Conversoes.data(0)
        const data = Conversoes.data(agendamento.data)
        const status = 'Agendado'

        agendamento.status = status
        agendamento.data = data
        agendamento.dataCriacao = dataCriacao

        return repositorio.adiciona(agendamento)

    }
}

module.exports = new Agendamento