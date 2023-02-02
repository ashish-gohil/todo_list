const express = require('express');
const app = express();

const date = require(__dirname+'/date.js')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

let ejs = require('ejs');
app.set('view engine', 'ejs');

let items = [];
let work_items = [];

app.get('/', (req, res) => {
    // imported module.
    res.render('index', { head: date(), items: items, name: 'home' });
});

app.get('/work', (req, res) => {
    res.render('index', { head: 'Work', items: work_items, name: 'work' })
});

app.post('/', (req, res) => {
    if (req.body.name == 'work') {
        work_items.push(req.body.add);
        res.redirect('/work');
    } else {
        items.push(req.body.add);
        res.redirect('/');
    }

});






app.listen(3000, () => {
    console.log('App is runnnig at port 3000!')
})