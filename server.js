const express = require('express');
const path = require('path');
const app = express();
const Rollbar = require("rollbar");
const rollbar = new Rollbar({
  accessToken: '4d36f513a6324d479b0c487be412d066',
  captureUncaught: true,
  captureUnhandledRejections: true
});

app.use(express.json())



app.get('/', function(req, res){
    rollbar.log('hello world')
    res.sendFile(path.join(__dirname, '/public/index.html'))
})


const port = process.env.PORT || 5040;
app.listen(port, function(){ console.log(`Server is rocking out on ${port}`)})