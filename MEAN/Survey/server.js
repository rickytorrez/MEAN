const express       = require('express');
const session       = require('express-session');
const morgan        = require('morgan');
const app           = express();
const port          = 4200;
const bodyParser    = require('body-parser');

// app.use(express.static(__dirname + '/client/dist'));
app.use(bodyParser.json());
app.use(session({
    secret: 'eduardobaik',
    resave: false,
    saveUninitialized: true
}))
app.use(morgan('tiny'));

require('./server/config/mongoose');

require('./server/config/routes')(app);

app.listen(port, () => console.log(`listening on port ${port}...`))
