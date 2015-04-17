var express       = require('express'),
    jade          = require('jade');
var app = express();

// view engine setup
app.set('views', __dirname);
app.set('view engine', 'jade');

app.use('/',
    function(req, res, next) {
	  res.ctx = {};
      res.render('usertemp', res.ctx);
    }
  );
app.use('/static', express.static('static'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app;
console.log('Started.');
