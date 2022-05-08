const mongoose = require("mongoose");
const { Win } = require(".models/win.model");




const addWin = async (req, res) => {
    {
        let win = new Win(req)
        try {
            let currentWin = await win.save();
            return res.status(200).send(`added win ${currentWin}`);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }

}

    module.exports = {addWin};