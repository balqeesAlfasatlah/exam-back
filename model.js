'use strict';
const mongoose= require("mongoose")

class Drinks {
    constructor(i) {

        this.strDrinkThumb = i.strDrinkThumb;
        this.strDrink = i.strDrink;
        this.idDrink = i.idDrink;
    }
}



const DrinkSchema = new mongoose.Schema({
    strDrinkThumb: String,
    strDrink : String,
    idDrink : String

  });


  const DrinkModel = mongoose.model('drinkList', DrinkSchema);

module.exports ={Drinks,DrinkModel}