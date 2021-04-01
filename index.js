const express = require('express');
const port = 8000;

const db = require('./config/mongoose');
const Todos = require('./models/todos');
var ObjectId = require('mongodb').ObjectID;

// fire express
const app = express();

// setting view engine
app.set('view engine', 'ejs');
app.set('views', './views');

//providing path of the static files
app.use(express.static('assets'));
app.use(express.urlencoded());

// const todos = [
//     {
//         description: 'Why not add a task',
//         category: 'Work',
//         date: '2021-03-31'
//     },
//     {
//         description: 'Why not add a task',
//         category: 'Work',
//         date: '2021-03-31'
//     }
// ];

// home page of our app
app.get('/', function(req, res){
    Todos.find({}, function(err, todos){
        if(err){
            console.log('Error in fetching', err);
            return;
        }
        return res.render('home', {
            title: 'Todo-List',
            todo_list: todos
        });

    });
    
});

//post request to add todo

app.post('/add-todo', function(req, res){
    // console.log(req.body);
    Todos.create(req.body);
    res.redirect('back');
});

//post request to delete todo

app.post('/delete-todos', function(req, res){
    var ids = req.body.task;
    if(!ids){
        return res.redirect('back');
    }
    if(typeof(ids) == "string"){
        Todos.findByIdAndDelete(ids, function(err){
            if(err){
                console.log('error in deleting', err);
                return;
            }
            return res.redirect('back');
        });
    } else {
        ids.forEach(element => {
            Todos.findByIdAndDelete(element, function(err){
                if(err){
                    console.log('error in deleting', err);
                    return;
                }
            });
        });
        return res.redirect('back');
    }
    
});

//listening our express server on given port

app.listen(port, function(err){
    if(err){
        console.log('Error in  listening', err);
    }
    console.log('Success');
});