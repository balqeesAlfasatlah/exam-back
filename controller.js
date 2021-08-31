'use strict';

const axios= require("axios");
const {Drinks,DrinkModel} =require('./model')

const getDrink =(req,res)=>{
    let url='https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic'
    axios.get(url).then(item=>{
        console.log(item.data.drinks)
        let drinkData = item.data.drinks;
        drinkData.map(i=>{
            return(new Drinks(i))
        })
        res.send(drinkData)
    })
   
    
}




const addDrink=(req,res)=>{
    let drinkData=req.body
    const newDrink = new DrinkModel({...drinkData})
    newDrink.save()
   
}



const getData=(req,res)=>{
    DrinkModel.find({ },(error,item)=>{
        res.send(item)
    })
}

const deleteDrink=(req,res)=>{
    let index = req.params.id
    DrinkModel.findByIdAndRemove(index,(error,item)=>{
        DrinkModel.find({ },(error,ele)=>{
            res.send(ele)
        })
    })
}

const updateDrink =(req,res)=>{
    let index = req.params.id;
    let updateData= req.body
    DrinkModel.findByIdAndUpdate(index,{...updateData},(error,item)=>{
        DrinkModel.find({},(error,item)=>{
            res.send(item)
        })
    })
}




module.exports={getDrink,addDrink,getData,deleteDrink,updateDrink}