const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get("/api/", (request, response) => {
   response.sendFile(__dirname + "/json/data.json");
 });

 app.use(express.static('client'));


const port = process.env.PORT || 3333;
//killall node
app.listen(port, () => `Server running on port ${port}`);
