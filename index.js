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

app.get("/bai-noi-bat", function (req, res) {
    res.render("index.ejs",{
        title:"Bài nổi bật"
    })
});

app.get("/hinh-anh", function (req, res) {
    res.render("index.ejs",{
        title:"Hình ảnh"
    })
});

app.get("/video", function (req, res) {
    res.render("index.ejs",{
        title:"Video clip"
    })
});

app.get("/tim-kiem", function (req, res) {
    res.render("index.ejs",{
        title:"Tìm kiếm"
    })
});

app.get("/thao-luan", function (req, res) {
    res.render("index.ejs",{
        title:"Thảo luận"
    })
});

app.get("/thanh-vien/:slug", function (req, res) {
    res.render("index.ejs",{
        title:"Thành viên"
    })
});

app.get("/dang-nhap", function (req, res) {
    res.render("index.ejs",{
        title:"Đăng nhập"
    })
});

app.get("/dang-ki", function (req, res) {
    res.render("index.ejs",{
        title:"Đăng kí"
    });
});

app.get("/dang-bai", function (req, res) {
    res.render("index.ejs",{
        title:"Đăng bài"
    });
});

app.get("/dang-xuat", function (req, res) {
    res.render("index.ejs",{
        title:"Đăng xuất"
    });
});

app.listen(port,()=>{console.log('listen port:'+port)});