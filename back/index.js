const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const app = express();
const passport = require('passport');
const routesApi = require('./routes/api.js');
const routesAdmin = require('./routes/admin.js');
const bodyParser = require('body-parser');

const mustacheExpress = require('mustache-express');

app.set('views', __dirname + '/views');
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(express.json());

app.use(cookieParser());
app.use(session({
  secret: 'keyboard cat',
  name: 'sid',
  cookie: {
    httpOnly: true,
    maxAge: 60000*15
  },
  resave: true,
  saveUninitialized: true
}));
require('./authentication/init.js')();
app.use(passport.initialize());
app.use(passport.session());


// app.use('/admin', routesApi);
app.use("/", routesAdmin);
app.use("/api", routesApi);
app.use(express.static('public'));
app.listen(8888);
