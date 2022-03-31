const mongoose = require("mongoose");

const ordersSchema = mongoose.ordersSchema({
    item_id:Number, 
    item_name:String,
    item_description:String,
    price:Number
})