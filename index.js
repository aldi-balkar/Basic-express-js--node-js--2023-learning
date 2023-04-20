const express = require('express');

const app = express();

//contoh pattern express js
// app.method(path, handler);

// app.use("/", (req, res, next) => {
//     res.send("hello word");
// });

//contoh response json

app.get("/", (req, res) => {
    res.json({
        nama: "Aldi Balkar",
        email: "aldibalkar23@gmail.com"
    });
});

// app.get("/", (req, res) => {
//     res.send("hello get method");
// });

app.post("/", (req, res) => {
    res.send("hello post method");
});

app.listen(4000, () => {
    console.log('Server berhasil di running di port 4000');
})