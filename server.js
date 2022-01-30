const express = require("express");
const path = require("path");
const cors = require('cors')
const app = express();

let data = [
    { id: 1, title : "제목1" , writer: '글쓴이1',  contents : "내용내용1" , date : "2022.01.30" },
    { id: 2, title : "제목2" , writer: '글쓴이2',  contents : "내용내용2" , date : "2022.01.30" }
 ]

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
    res.send({data : data});
});

app.listen(process.env.PORT || 3001, () => console.log("Server running..."));