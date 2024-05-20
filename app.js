require("dotenv").config();

const app = require('express')();
var http = require('http').Server(app);
const port = 8080;

const paymentRoute = require('./routes/paymentRoute');

app.use('/',paymentRoute);

http.listen(8080, function(){
    console.log('Server is running');
});
