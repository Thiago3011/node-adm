const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/database/conexao')
const Tabela = require('./infraestrutura/database/tabelas')

conexao.connect((erro) => {
    if (erro) {
        console.log('Não conectou: ' + erro)
    } else {
        console.log('BD conectado!')

        Tabela.init(conexao)

        const app = customExpress()

        app.listen(3000, () => console.log('Server on'))
    }
})

