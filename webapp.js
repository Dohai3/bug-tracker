const express = require('express');
const app = express();

app.use(express.static('src'));

const server = app.listen(3000, function() {
    let port = server.address().port;
    console.log("Started server at port", port);
});
