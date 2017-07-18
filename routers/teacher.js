const express = require('express');
var router = express.Router()
const db = require('../models');



router.use((req, res, next) => {
  if(req.session.authority === 3){
    next()
  } else {
    res.sendStatus(403);
  }
})


router.get('/', function (req, res) {
  db.teacher.findAll({
    order: [['first_name', 'ASC']],
    include: [db.subject]
  })
  .then(result => {
    // result.forEach(elem => {
    //   console.log(`************ ${JSON.stringify(elem)}`);
    // });
    res.render('teachers', {
      data_teachers: result,
      session: req.session.user,
      session_role: req.session.role
    })
  })
})

router.get('/add', function (req, res) {
  db.subject.findAll()
  .then(result => {
    // console.log(result.subject);
    res.render('teacher-add', {data_subject: result})
  })
})

router.post('/add', function (req, res) {
  db.teacher.create({
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    email: req.body.email,
    subjectId: req.body.subjectId,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(result => {
    res.redirect('/teachers')
  })
})

// router.get('/:id/edit', function (req, res) {
//   db.teacher.findAll({
//     where: {
//       id: req.params.id
//     }
//   })
//   .then(result => {
//     res.render('teacher-edit', {data_teachers: result})
//   })
// })

router.get('/:id/edit', function (req, res) {
  db.teacher.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(dataguru => {
    db.subject.findAll()
    .then(subject => {
      res.render('teacher-edit', {data_teachers: dataguru, data_subject: subject})
      // console.log(dataguru);
    })
    // res.render('teacher-edit', {data_teachers: result})
  })
})

router.post('/:id/edit', function (req, res) {
  db.teacher.update({
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    email: req.body.email,
    subjectId: req.body.subjectId,
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
