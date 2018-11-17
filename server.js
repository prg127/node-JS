const express = require("express");

var app = express();
app.get('/' , (req, res) =>{
  //res.send("<h1>HEllo pranav!</h1>");
  res.send({
    name : 'Pranav',
    like : [
      'badminton',
      'book reading'
    ]
  });
});
app.get('/about', (req,res) =>{
  res.send("<h2>About Page</h2>");
});
app.get('/bad', (req,res) =>{
  res.send({
  errorMessage: 'Unable to filfil this request'  
  });
});
app.listen(3000);
