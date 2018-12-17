const express = require('express');
const mongoose = require(`mongoose`);
const bodyParser = require(`body-parser`);
const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost/books_r_us", { useNewUrlParser: true });
mongoose.Promise = global.Promise;

mongoose.connection.on("error", err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.listen(port, () => console.log(`Server is listening on port ${port}`))