const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');
const session = require('express-session');
var app = express()
const db = require('./models');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')

var publicData = path.join(__dirname, 'public')
var express_static = express.static(publicData)
app.use(express_static)

const Index = require('./models/index');
const Teachers = require('./models/teacher');
const Subjects = require('./models/subject');
const Students = require('./models/students');

const index = require('./routers/index');
const teachers = require('./routers/teacher');
const subjects = require('./routers/subject');
const students = require('./routers/student');

var accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', {flags: 'a'});
app.use(morgan('combined',{stream: accessLogStream}));

app.use(session({
  secret: '56!@#$!#2346234626!@#$!!@#$',
  resave: false,
  saveUnitialized: true,
  cookies: {}
}))

app.use('/', index)


app.use((req, res, next) => {
  if(req.session.authority > 0){
    next()
  } else {
    res.sendStatus(403);
  }
})
app.use('/students', students)

app.use((req, res, next) => {
  if(req.session.authority > 1){
    next()
  } else {
    res.sendStatus(403);
  }
})
app.use('/subjects', subjects)

app.use((req, res, next) => {
  if(req.session.authority === 3){
    next()
  } else {
    res.sendStatus(403);
  }
})
app.use('/teachers', teachers)

app.listen(3000)
