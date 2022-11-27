require('dotenv').config()
const routes = require('./routes')
const comprestion = require('compression')
// const puppeteer = require('puppeteer-core');
const { engine } = require('express-handlebars')
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000
// config
app.use(comprestion());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.engine('.hbs', engine({ extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'views'));

routes(app)

app.listen(PORT, () => {
    console.log(`server runing on: http://localhost:${PORT}`, process.env.USERNAME)
})