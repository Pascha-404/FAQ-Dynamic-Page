const express = require('express');
const app = express();
const port = 8080;
const path = require('path');
const faqData = require('./data.json')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.render('index.ejs', {
        faqData
    })
})