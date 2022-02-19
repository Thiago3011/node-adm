const { format, parseISO } = require('date-fns')

class Conversoes {
    data(data) {

        if (data == 0) {

            data = new Date

            const year = data.getFullYear()
            const month = data.getMonth() + 1
            const day = data.getDate()
    
            const hour = data.getHours()
            const minutes = data.getMinutes()
            const seconds = data.getSeconds()
    
            return `${year}-${month}-${day} ${hour}:${minutes}:${day}`
        } else {

            const dataConvertida = format(parseISO(data), `yyyy-MM-dd`)

            return dataConvertida

        }

    }
}

module.exports = new Conversoes