const express = require("express");
const path = require("path");
const cors = require('cors')
const app = express();

// app.use("/static", express.static(path.resolve(__dirname, "public", "static")));

// app.get("/*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
// });
app.use(cors());
app.get("/get", (req, res) => {
    // res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
    res.send({data : "hello"});
});
app.get("/", (req, res) => {
    // res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
    res.send({data : "welcome"});
});

app.listen(process.env.PORT || 3001, () => console.log("Server running..."));