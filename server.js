const express = require('express') 
const app = express()
const cors = require('cors');
app.use(cors())
require('dotenv').config();
const axios = require('axios');
app.use(express.json());
const PORT=process.env.PORT;

const mongoose = require('mongoose');



mongoose.connect('mongodb://localhost:27017/MyDrinks',{useNewUrlParser: true, useUnifiedTopology: true});



const {getDrink,addDrink,getData,deleteDrink,updateDrink} =require('./controller')



app.get('/', (req, res)=> {
  res.send('woking fine') 
});

//localhost:3005/getDrink
app.get('/getDrink', getDrink)

//localhost:3005/addDrink
app.post('/addDrink', addDrink)

//localhost:3005/getData
app.get('/getData', getData)

//localhost:3005/deleteDrink
app.delete('/deleteDrink/:id', deleteDrink)

//localhost:3005/deleteDrink
app.put('/updateDrink/:id', updateDrink)



app.listen(PORT , ()=>{
    console.log(`working in port ${PORT}`)
})