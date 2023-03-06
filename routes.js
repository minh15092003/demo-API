'use strict';
module.exports = function (app) {
  let loginCtrl = require('./controllers/loginController')
  let  passCtrl = require('./controllers/PasswordController')
  app.route('/login')
    .post(loginCtrl.post)

    app.route('/Password')
    .put(passCtrl.update)
    
};