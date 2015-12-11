var express = require('express'),
    app = express();
app.use(express.static(__dirname + '\\site'));

app.listen(8000);