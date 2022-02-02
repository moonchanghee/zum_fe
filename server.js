const express = require("express");
const path = require("path");
const cors = require('cors')
const app = express();

let data = [
    { id: 1, title : "제목1" , writer: '글쓴이1',  contents : "내용내용1" , date : "2022.01.30" },
    { id: 2, title : "제목2" , writer: '글쓴이2',  contents : "내용내용2" , date : "2022.01.30" }
 ]



app.use(cors());

app.get("/get", (req, res) => {
    res.send({data : "hello"});
});
app.get("/", (req, res) => {
    res.send({data : data});
});

app.get("/detail"  , (req,res) =>{
    const id = req.query.id
    let detailData = data.filter(function (e) { return e.id == id });
    res.send({data :detailData })

})


app.listen(process.env.PORT || 3001, () => console.log("Server running"));