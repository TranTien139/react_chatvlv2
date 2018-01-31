'use strict'
const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const ejs = require('ejs');

const app = express();

app.set('view engine','ejs');

app.set('views',path.join(__dirname + '/views'));

app.use(express.static(__dirname + '/public'));


app.get("/", function (req, res) {
    res.render("index.ejs",{
        title:"Trang chủ"
    })
});

app.get("/chi-tiet/:id", function (req, res) {
    res.render("index.ejs",{
        title:"Chi tiết"
    })
});

app.listen(port,()=>{console.log('listen port:'+port)});