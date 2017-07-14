const express = require('express');
var router = express.Router()
const db = require('../models');

router.get('/', function (req, res) {
  db.subject.findAll({
    include: [db.teacher]
  })
  .then(result => {
    res.render('subjects', {data_subjects: result})
  })
})

router.get('/add', function (req, res) {
  res.render('subjects-add')
})

router.post('/add', function (req, res) {
  db.subject.create({
    subject_name: req.body.subject_name,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(result => {
    res.redirect('/subjects')
  })
})

router.get('/:id/edit', function (req, res) {
  db.subject.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(result => {
    res.render('subjects-edit', {data_subjects: result})
  })
})

router.post('/:id/edit', function (req, res) {
  db.subject.update({
    subject_name: req.body.subject_name,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    where: {
      id: req.params.id
    }
  })
  .then(result => {
    res.redirect('/subjects')
  })
})

router.get('/:id/delete', function (req, res) {
  db.subject.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(result => {
    res.redirect('/subjects')
  })
})

module.exports = router;
