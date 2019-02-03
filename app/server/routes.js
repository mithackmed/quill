var User = require('./models/User');

module.exports = function(app) {

  // Application ------------------------------------------
  app.get('/', function(req, res){
    res.sendfile('./app/client/index.html');
  });

  // Wildcard all other GET requests to the angular app
  // This shouldn't be here, in case pages are not found.

  // app.get('*', function(req, res){
  //   res.sendfile('./app/client/index.html');
  // });
};
