//js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4111; //port number == http://localhost:4111/
app.listen(PORT, console.log("Server don start for port: " + PORT))