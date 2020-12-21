const express = require("express");
const mysql = require("mysql");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/nuxtjs", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

const Course = mongoose.model("Courses", {
    title : String,
    couponCode : String
});

const app = express();

let connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "",
    database : "nuxtjs"
});

connection.connect();

app.get("/", (req, res) => {
    console.log("Get isteği geldi.");

    connection.query("select * from courses", (err, results, fields) => {
        if (err) throw err;

        res.status(200).json({
            courses : results
        });
    });
});

app.get("/mongodb-get-data", (req, res) => {
    console.log("MongoDB için get isteği geldi...");

    // Kayıt Ekleme
/*
    let courseItem = new Course({
        title : "Vue.js Eğitimi",
        couponCode : "ABC123"
    });

    courseItem.save().then(() => {
        console.log("Kurs eklendi..");
    });
*/

    // Kayıt Çekme

    Course.find({}, (err, docs) => {
        res.status(200).json({
            courses : docs
        });  
    });




});


module.exports = {
    path : "/api",
    handler: app
}