const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

app.engine('.hbs',engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');
app.use(express.static('public'));


app.get('/',(req,res)=>{
    res.redirect('/restaurants');
});
app.get('/restaurants', (req,res)=>{
    res.send('listiing restaurants');
});

app.get('/restaurant/:id', (req,res)=>{
    const id = req.params.id;
    console.log(req.params);
    res.send(`read movie ${id}`);
});


app.listen(port,() =>{
    console.log(`1st express on http://localhost/${port}`);
});


