const express = require('express');
var router = express.Router()
const db = require('../models');
const mkey = require('../helpers/mkey');


router.use((req, res, next) => {
  if(req.session.authority === 3){
    next()
  } else {
    res.sendStatus(403);
  }
})

router.get('/', function (req, res) {
  db.user.findAll({
    order: [['username', 'ASC']]
  })
  .then(result => {
    res.render('user', {
      users: result,
      session: req.session.user,
      session_role: req.session.role
    })
  })
})

router.get('/add', function (req, res) {
    res.render('user-add')
})

router.post('/add', function (req, res) {
  // console.log(mkey().toString());
  db.user.create({
    username: req.body.username,
    password: req.body.password,
    role: req.body.role,
    // secret: mkey().toString(),
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(result => {
    res.redirect('/users')
  })
})

module.exports = router
