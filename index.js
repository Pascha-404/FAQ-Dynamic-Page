const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const faqData = require('./data.json');
const {
    v4: uuid
} = require('uuid');
const methodOverride = require('method-override')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.render('index.ejs', {
        faqData
    })
})

app.post('/', (req, res) => {
    const {
        title,
        text
    } = req.body;
    faqData.unshift({
        id: uuid(),
        title,
        text
    });
    res.redirect('/')
})

app.get('/edit/:id', (req, res) => {
    const {
        id
    } = req.params;
    const faq = faqData.find(d => d.id === id);
    res.render('edit', {
        faq
    })

})

app.patch('/:id', (req, res) => {
    const {
        id
    } = req.params;
    const newText = req.body.text;
    const newTitle = req.body.title;
    const findText = faqData.find(d => d.id === id);
    findText.text = newText;
    findText.title = newTitle;
    res.redirect('/');
})

app.get('/edit', (req, res) => {
    res.render('edit')
})

app.get('*', (req, res) => {
    res.send(` <h1> PAGE NOT FOUND 404 </h1>`)
})