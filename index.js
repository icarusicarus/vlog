const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const main = require('./router/main');

dotenv.config();

const app = express();
app.set("port", 5000);

app.use('/api', main);

app.listen(app.get('port'), function () {
    console.log('[Listening] localhost @', app.get('port'));
});