const express = require('express');
const app = express();
const fetch = require('node-fetch');
const cors = require('cors');
//const path = require('path');
//require('dotenv').config()
//app.use(express.static("public"));
// app.use( (request, response, next) => {
//   response.header("Access-Control-Allow-Origin", "*");
//   response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
//console.log(process.env.NODE_ENV)
//console.log(cors)
app.use(cors())

app.get("/api/", (request, response) => {
   response.sendFile(__dirname + "/json/data.json");
 });

if (process.env.NODE_ENV === "production"){
   app.use(express.static("client/build"));
   app.get("*", (req, res) => {
     res.sendFile(path.resolve(__dirname, 'client',  "build", "index.html"));
   });
 }

//app.get('/api/images', async (req, res) => {

// app.get('/end', async (request, response) => {
//    //const number = request.params.number;
//    const fetchResponse = await fetch(`http://localhost:3333/api/`);
//    const data = await fetchResponse.json();
//    response.json(data);
// });

const port = process.env.PORT || 3333;
//killall node
app.listen(port, () => `Server running on port ${port}`);
