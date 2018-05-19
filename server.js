var express = require('express')
var app = express()
var api = require('./view/Router')

var port = 3000

app.use(express.static('public'))
app.use(api)

app.listen(port, function () {
  console.log('Arrancoo el Server puerto: ' + port + '!.')
})
