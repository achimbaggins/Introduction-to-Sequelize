const express = require('express');
var router = express.Router();
const db = require('../models');
const mkey = require('../helpers/mkey');
const encryptpass = require('../helpers/encryptpass');


router.get('/', function(req, res){
  res.redirect('/login')
})

router.get('/login', function(req, res){
  if(req.session.user){
    res.redirect('/home')
  } else {
  res.render('index', {err: false})
  }
})


router.post('/login', function(req, res, next){
  db.user.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(result => {
    let pass = encryptpass(req.body.password, result.secret)
    console.log(result.password + ' ============ ' + pass);

    if(result.password === pass) {
      req.session.user = result.dataValues.username,
      req.session.role = result.dataValues.role
      // console.log(JSON.stringify(result.dataValues) + '================');
      if(req.session.role === "administrator"){
        req.session.authority = 3;
      } else if (req.session.role === "akademik"){
        req.session.authority = 2;
      } else if (req.session.role === "guru"){
        req.session.authority = 1;
      }
      res.redirect('/home')
    } else {
      res.render('index', {err: `${req.body.username} atau password tidak dikenal`})
    }

  })
})

// router.post('/login', function(req, res, next){
//   db.user.findOne({
//
//     where: {
//       username: req.body.username
//     }
//   })
//   .then(result => {
//     // console.log(result[0].username);
//     if(result) {
//       req.session.user = result.dataValues.username,
//       req.session.role = result.dataValues.role
//       // console.log(JSON.stringify(result.dataValues) + '================');
//       if(req.session.role === "administrator"){
//         req.session.authority = 3;
//       } else if (req.session.role === "akademik"){
//         req.session.authority = 2;
//       } else if (req.session.role === "guru"){
//         req.session.authority = 1;
//       }
//       res.redirect('/home')
//     } else {
//       res.render('index', {err: `${req.body.username} atau password tidak dikenal`})
//     }
//
//   })
// })

router.get('/logout', function (req, res) {
  req.session.destroy()
  res.redirect('/')
})

router.get('/home', function (req, res) {
  res.render('home')
})
module.exports = router
