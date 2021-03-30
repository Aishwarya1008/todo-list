const express = require('express');
const port = 8000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('assets'));

app.get('/', function(req, res){
    res.render('home', {
        title: 'Todo-List'
    });
});


app.listen(port, function(err){
    if(err){
        console.log('Error in  listening', err);
    }
    console.log('Success');
});