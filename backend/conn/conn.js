const mongoose = require("mongoose");

const conn = async() => {
    try{
        await mongoose.connect("mongodb+srv://soubhiksahaetce222711:Soubhik@123@cluster0.nw2jtsc.mongodb.net/portfolioContact").then(() => {
            console.log("Connected to MongoDB");
        }, (error) => {console.log(error)}); 
    }catch(error){
        console.log(error);
    }
};

conn();
