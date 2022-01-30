const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')

module.exports = () => {
    const app = express()

    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(express.static('public'))

    app.set("view engine", "njk");

    nunjucks.configure("views", {
        express: app,
        autoescape: false,
        noCache: true
    })
    
    consign()
        .include('controllers')
        .into(app)

    return app
}