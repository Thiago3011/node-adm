const executaQuery = require("../infraestrutura/database/queries")

class Agendamento {
    adiciona(agendamento) {

        const sql = 'INSERT INTO Agendamentos SET ?'

        return executaQuery(sql, agendamento)

    }
}

module.exports = new Agendamento