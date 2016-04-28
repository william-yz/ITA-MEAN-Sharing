'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.set('view engine', 'ejs')
app.set('views', './')


app.get('/home', (req, res) => {
  res.sendFile(__dirname +'/index.html')
})

app.get('/login', (req, res) => {
  res.sendFile(__dirname +'/login.html')
})

app.route('/doLogin')
  .post((req, res) => {
  res.render('success.ejs', {user : req.body.user})
})


app.listen(3000, () => {
  console.log('Server Start')
})
