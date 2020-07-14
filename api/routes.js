'use strict';
module.exports = function(app) {
  var headsCtrl = require('./controllers/HeadsController');
  var pagesCtrl = require('./controllers/PagesController');

  // todoList Routes
  app.route('/heads')
    .get(headsCtrl.get)
    .post(headsCtrl.store);

  app.route('/heads/:headId')
    .get(headsCtrl.lastest)
    .put(headsCtrl.update)
    .delete(headsCtrl.delete);

  app.route('/global')
    .get(headsCtrl.global);
    
  app.route('/')
    .get(pagesCtrl.signin);
  
  app.route('/signin')
    .get(pagesCtrl.signin);

  app.route('/signup')
    .get(pagesCtrl.signup);

  app.route('/register')
    .post(pagesCtrl.register);

  app.route('/login')
    .post(pagesCtrl.login);
  app.route('/logout')
    .get(pagesCtrl.logout);
  
  app.route('/dashboard')
    .get(pagesCtrl.get);
  
  app.route('/statictis')
    .get(pagesCtrl.statictis)
  };
