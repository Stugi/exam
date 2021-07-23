const express = require('express');
const passport = require('passport');
const router = express.Router();

const model = require('../model/model.js');

const authenticationMiddleware = require('../authentication/middleware.js');

router.get('/', (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
		res.render('auth', {});
  }
});

router.post('/', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {

    if (err) {
      return next(err);
    }
    if (!user) {
      return res.render('auth', {
        message: true
      });
    }
    //даём сигнал модулю passport, что пользователь авторизовался
    req.logIn(user, (err) => {
      if (err) {
        return next(err);
      }
      return res.redirect('/'); 
    });
  })(req, res, next);
});
/*Роут организующий прием запрос о выходе текущего пользователя из системы. Полный путь:
/admin/out. Внутри осуществляется посыл сигналу модулю passport, что пользователь выходит из
системы и перенаправление пользователя на /admin */
router.post('/out', (req, res, next) => {
  req.logout();
  res.redirect('/admin');

});

module.exports = router;
