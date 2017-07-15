const express = require('express');
var router = express.Router()
const db = require('../models');

router.get('/', function (req, res) {
  db.subject.findAll({
    order: [['subject_name', 'ASC']],
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

router.get('/:id/:name/enrolled-students', function (req, res) {
  db.getstudy.findAll({
    order: [['student', 'firstname', 'ASC']],
    where: {
      subjectId: req.params.id
    },
    include: [{ all: true }]
  })
  .then(result => {
    res.render('enrolled-students', {enrolled_data: result})
  })
})


router.get('/:id/:ids/:name/give-score', function (req, res) {
  db.students.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(datasiswa => {
    db.subject.findAll({
      where: {
        id: req.params.ids
      }
    })
    .then(datasubject => {
      res.render('give-score', {datasiswa: datasiswa, datasubject: datasubject})
    })
  })
})

router.post('/:id/:ids/:name/give-score', function (req, res) {
  db.getstudy.update({
    score: req.body.score,
    createdAt: new Date(),
    updatedAt: new Date()

  },{
    where: {
      studentId: req.params.id,
      $and: {
        subjectId: req.params.ids
      }
    }
  })
  .then(result => {
    res.redirect(`/subjects/${req.params.ids}/${req.params.name}/enrolled-students`)
  })
})
module.exports = router;
