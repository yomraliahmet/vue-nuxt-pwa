const bodyParser = require("body-parser");
const express = require("express");
const app = express();
//app.use(bodyParser.json());

// Serverside komutları.

/*
app.get(routeName, (req, res) => {})
app.post
app.delete
app.put
*/

app.get("/get-all-data", (req, res) => {
    res.status(200).json({
        products : [
            { id : 1, title : "Elma" },
            { id : 2, title : "Armut" },
            { id : 3, title : "Kiraz" },
            { id : 4, title : "Muz" },
        ]
    });
});

app.post("/save",(req, res) => {
    res.status(200).json({
        title : "Merhabalar, " + req.body.title + " bey hoşgeldiniz.."
    });
})

module.exports = {
    path : "/api",
    handler : app
}