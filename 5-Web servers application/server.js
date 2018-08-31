const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send({
        name:'Andrew',
        likes:['biking','cities']
    });
});


app.get('/about', (req, res) => {
    res.send("hwl");
}); 

app.get('/bad', (req, res) => {
      res.send({
          errorMessage: 'errr'
      });
});
app.listen(3000);