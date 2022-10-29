const express = require('express')
const app = express();
const path = require('path')

const port = process.env.PORT || 8000;
const hbs = require('hbs');

// paths

const pathPublic = path.join(__dirname, '../public');
const templatepath = path.join(__dirname, '../templates/views');
const partialPath = path.join(__dirname, '../templates/partials');
hbs.registerPartials(partialPath)

app.set('view engine', 'hbs');
app.set('views', templatepath)

app.use(express.static(pathPublic));


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/weather', (req, res) => {
    res.render('weather')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('*', (req, res) => {
    res.render('404')
})

app.listen(port, (req, res) => {
    console.log(`server is listing on ${port}`)
})