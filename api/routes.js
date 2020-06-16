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

  // todoList Routes
  app.route('/dashboard')
    .get(pagesCtrl.get);
  

  app.route('/statictis')
    .get(pagesCtrl.statictis)
  };
