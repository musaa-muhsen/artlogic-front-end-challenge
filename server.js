const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get("/api/", (request, response) => {
   response.sendFile(__dirname + "/json/data.json");
 });

 app.use(express.static('client'));

// //console.log(process.env.NODE_ENV);
//if (process.env.NODE_ENV === "production"){
   // app.use(express.static("public"));
   // app.use(express.static(path.join(__dirname, 'public')));
//    //app.use(express.static("client/build"));
//    app.get("*", (req, res) => {
//      res.sendFile(path.resolve(__dirname, "index.html"));
//    });
//}


const port = process.env.PORT || 3333;
//killall node
app.listen(port, () => `Server running on port ${port}`);
