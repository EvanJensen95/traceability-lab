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
let nameArr = []
app.post('/name', function(req, res){
// nameArr.push(res.body.name)
return res.body
})



// app.get('/', function(req, res){
//     res.sendFile(path.join(__dirname, '/public/notindex.html'))
//     rollbar.error('the mission is a failure')
//     rollbar.critical('the mission is failing critically')
//     rollbar.warning('WARNING!')
//     rollbar.warning('Another Warning')
//     rollbar.critical('Oh No!')
// })



const port = process.env.PORT || 5040;
app.listen(port, function(){ console.log(`Server is rocking out on ${port}`)})