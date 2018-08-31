const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render( 'home.hbs',{
        pageTitle: 'Home',
        message: 'Welcome to our page',
        currentYear: new Date().getFullYear()
    });
});


app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle:'About page',
        currentYear: new Date().getFullYear()
    });
}); 

app.get('/bad', (req, res) => {
      res.send({
          errorMessage: 'errr'
      });
});
app.listen(3000, ()=> {
    console.log('Server is running at port 3000');
});