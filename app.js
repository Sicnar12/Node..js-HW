const express = require('express');
const morgan = require('morgan');

//express app
const app = express();

// register view engine
app.set('view engine', 'ejs');


//listen for request
app.listen(3000);

//middleware and static files
app.use(express.static('public'))
 
app.use(morgan('dev'));
 
// routes
app.get('/', (req, res)=> {
    res.redirect('')

// res.send('<p>home page </p>');
res.render('index', {title: 'Home', blogs});
});
app.get('/about', (req, res)=> {
    // res.send('<p>about page </p>');
    res.render('about', {title: 'About'});

});
// blog routes
app.get('/blogs')

//redirects
// app.get('/about-us', (req, res)=> {
//     res.redirect('/about');
// });
app.get('/blogs/create', (req, res) =>{
    res.render('create', {title: 'create a new blog'});
})

//404 page
app.use((req, res)=>{
    res.status(404).render('404', {title: '404'});
});