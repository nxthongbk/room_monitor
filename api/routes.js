'use strict';
module.exports = function(app) {
  var headsCtrl = require('./controllers/HeadsController');

  // todoList Routes
  app.route('/heads')
    .get(headsCtrl.get)
    .post(headsCtrl.store);


  app.route('/heads/:headId')
    .get(headsCtrl.detail)
    .put(headsCtrl.update)
    .delete(headsCtrl.delete);

    
};
