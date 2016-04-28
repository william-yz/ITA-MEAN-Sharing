'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const fs = require('fs')
const os = require('os')
const MongoClient = require('mongodb').MongoClient


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())


app.set('view engine', 'ejs')
app.set('views', './')

app.use((req, res, next) => {
  let startTime = Date.now();
  next()
  let endTime = Date.now();
  let log = `Time: ${new Date()} ,IP : ${req.ip}, PATH: ${req.path} , take : ${endTime - startTime} ms ${os.EOL}`
  fs.appendFile('./request.log', log)
})


app.use((req, res, next) => {
  if (req.path === '/login' || req.path === '/doLogin') {
    next();
  } else {
    if (req.cookies.itauser) {
      req.body= {user : req.cookies.itauser};
      next()
    } else {
      res.redirect('/login');
    }
  }
})
app.get('/home', (req, res) => {
  res.render('success.ejs', {user : req.body.user})
})

app.get('/login', (req, res) => {
  res.sendFile(__dirname +'/login.html')
})

app.route('/doLogin')
  .post((req, res) => {
    MongoClient.connect('mongodb://localhost:27017/ita', (err, db) => {
      if (err) console.log(err)
      var collection = db.collection('users');
      collection.findOne({name : req.body.user}, (err,doc) => {
        if (doc) {
          res.cookie('itauser', req.body.user)
          res.render('success.ejs', {user : req.body.user})
        } else {
          res.redirect('/login')
        }
      })
    })


})


app.listen(3000, () => {
  console.log('Server Start')
})
