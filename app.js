const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
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

app.use('/', index)
app.use('/teachers', teachers)
app.use('/subjects', subjects)
app.use('/students', students)

app.listen(3000)
