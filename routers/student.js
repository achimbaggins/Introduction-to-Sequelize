const express = require('express');
var router = express.Router()
const db = require('../models');

router.get('/', function (req, res) {
  db.teacher.findAll()
  .then(result => {
    res.render('teachers', {data_teachers: result})
  })
})

router.get('/add', function (req, res) {
  res.render('teacher-add')
})

router.post('/add', function (req, res) {
  db.teacher.create({
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    email: req.body.email,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(result => {
    res.redirect('/teachers')
  })
})

router.get('/:id/edit', function (req, res) {
  db.students.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(result => {
    res.render('student-edit', {data_students: result})
  })
})

router.post('/:id/edit', function (req, res) {
  db.students.update({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    where: {
      id: req.params.id
    }
  })
  .then(result => {
    res.redirect('/students')
  })
})

router.get('/:id/delete', function (req, res) {
  db.teacher.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(result => {
    res.redirect('/students')
  })
})

module.exports = router;