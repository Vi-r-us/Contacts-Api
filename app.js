//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const test = require('./db.json');

//creating app using express
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));


app.get('/contacts', (req, res) => {
    res.send(test.contacts);
});

app.get('/contacts/:contactId', (req, res) => {
    const contactId = req.params.contactId;
    const foundContact = test.contacts.find((con) => con.id==contactId);
    if(foundContact === undefined)
        res.send({});
    else
        res.send(foundContact);
});

let port = process.env.PORT;
if(port == null || port == "") {
    port = 3000;
}
app.listen(port);