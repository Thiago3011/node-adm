class Tabela {
    
    init(conexao) {
        this.conexao = conexao

        this.agendamento()
    }

    agendamento() {
        const sql = 'CREATE TABLE IF NOT EXISTS Agendamentos (id int NOT NULL AUTO_INCREMENT, nome varchar(30) NOT NULL, localidade varchar(15) NOT NULL, area varchar(15) NOT NULL, secao varchar(15) NOT NULL, mesa int NOT NULL, data date NOT NULL, dataCriacao datetime NOT NULL, status varchar(10), observacoes text, PRIMARY KEY(id))'
    
        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log('Erro ao criar a tabela de agendamentos: ' + erro)
            } else {
                console.log('A tabela de agendamentos foi criada com sucesso!')
            }
        })
    }
}

module.exports = new Tabela