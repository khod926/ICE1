const express = require('express');
const exphbs = require('express-handlebars')
const PORT = 3000;

//create the express app
const app = express();

// set up the Express-Handlebars engine
app.engine('handlebars', exphbs.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.set('views', './views')

// engage the middleware
app.use((req, res, next) => {
    console.log(`URL: ${req.url}`);
    req.myName = 'Gursimar'
    next();
});

// additional midddleware can be added here, like authentication, error handling, authorization

// route to '/' with get method
app.get('/', (req, res) => {
    res.render('home')
});

app.get('/about',(req, res) => {
    res.send('This is the about page for our Express app.');
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});