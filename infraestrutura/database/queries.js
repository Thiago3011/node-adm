const conexao = require('./conexao')

const executaQuery = (query, dados) => {
    return new Promise((resolve, reject) => {
        conexao.query(query, dados, (erros, results) => {
            if (erros) {
                reject(erros)
            } else {
                resolve(results)
            }
        })
    })
}

module.exports = executaQuery