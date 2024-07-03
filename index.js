const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const mysql = require('mysql')
const path = require('path')
const part = 3000

const db = mysql.createConnection({
    host: 0,
    user: 0,
    password: 0,
    databese: 0,
})

db.connect((err) =>{
    if(err) {
        throw err
    }
    console.log('Banco de Dado Mysql Conectado')
})

app.use(bodyParser.urlencoded({ extended: false }))

app.set('views engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))

app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))

app.get('add_product', (req, res) =>{
    res.render('add_product')
})

app.post('add_product') // configurar o mysql

app.get('/products', (req, res) =>{
    // configurar mysql
    res.render('list_products') // configurar objeto
})

app.listen(3000, () =>{
    console.log('Servidor aberto')
})