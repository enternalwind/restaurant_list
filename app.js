const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const restaurants = require('./public/jsons/restaurant.json').results;
//console.log(restaurants[0]);

app.engine('.hbs',engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/',(req,res)=>{
    res.redirect('/restaurants');
});
app.get('/restaurants', (req,res)=>{
    console.log(`https://localhost3000/restaurant`);
    // res.render('index');
    res.render('index',{rt: restaurants});
});

app.get('/restaurant/:id', (req,res)=>{
    console.log(restaurants);
    const id = req.params.id;
    //console.log(req.params);
    const restaurant = restaurants.find((item)=>
        item.id.toString() === id)
    console.log(restaurant);
    res.render('detail',{restaurant});
});


app.listen(port,() =>{
    console.log(`1st express on http://localhost/${port}`);
});


