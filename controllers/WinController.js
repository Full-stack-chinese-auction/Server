const mongoose = require("mongoose");
const {Win}=require(".models/win.model.js");
const express = require('express')
const router = express.Router()


router.post("/win",async(user_id,item_id,winning_date)=>
{
    let win=new Win({user_id,item_id,winning_date})
    await win.save;
    return win;
})  

module.exports = router;