const Agendamento = require('../models/agendamento')

module.exports = app => {
    app.get('/agendamentos', (req, res) => res.render('../views/index.njk'))

    app.post('/agendamentos', (req, res) => {
        const agendamento = req.body

        Agendamento.adiciona(agendamento, res)
            .then(agendamentoAgendado => res.status(200).json(agendamentoAgendado))
            .catch(erros => res.status(400).json(erros))
    })
}