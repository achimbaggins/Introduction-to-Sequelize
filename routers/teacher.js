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
  db.teacher.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(result => {
    res.render('teacher-edit', {data_teachers: result})
  })
})

router.post('/:id/edit', function (req, res) {
  db.teacher.update({
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    email: req.body.email,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    where: {
      id: req.params.id
    }
  })
  .then(result => {
    res.redirect('/teachers')
  })
})

router.get('/:id/delete', function (req, res) {
  db.teacher.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(result => {
    res.redirect('/teachers')
  })
})

module.exports = router;
