// build your server here and require it from index.js
const express = require('express');

const server = express();
server.use(express.json());


server.use('*', (req, res)=>{
    res.status(404).json({
      message:'Sorry, not found'
    })
})
/*
server.use((err, req, res, next) => { // eslint-disable-line
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
  
});*/

module.exports = server;

