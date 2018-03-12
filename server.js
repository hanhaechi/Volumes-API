const express = require('express')
const server = express()
const volumes = require('./volumes')

server.use("/", express.static(__dirname + '/'))


server.get('/:shape', function(req, res) {
  var type = req.params.shape
  var radius = parseInt(req.query.radius)
  var height = parseInt(req.query.height)
  var width = parseInt(req.query.width)
  var length = parseInt(req.query.length)
  var result;
  
  switch (type) {
    case 'sphere':
      result = volumes.data.getSphere(radius)
      break
    case 'cone':
      result = volumes.data.getCone(radius, height)
      break
    case 'cylinder':
      result = volumes.data.getCylinder(radius, height)
      break
    case 'rectprism':
      result = volumes.data.getRect_prism(length, width, height)
      break
  }
  
  if (!isNaN(result)){
    res.json(result)
  } else {
    res.status(501).send('volume calculation result was not a number');
  }
  
});


server.listen(7777, function() {
  console.log('App started');
});
