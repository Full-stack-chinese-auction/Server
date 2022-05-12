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
    const winnerById = async (req, res) => {
        let id = req.params.id;
        try {
            let win = await Winning.findById(id);
            return res.send(win);
        }
        catch (err) {
            return res.status(400).send(err)
        }
    }
    const winnerByProductId = async (req, res) => {
        let id = req.params.id;
        let winner = await Win.findOne({ item_id: id });
        let user = await User.findById(winner.user_id._id);
        if (!user) {
            res.send(`didnt find winner`)
            return
        }
        console.log(user)
    }
}

module.exports = { addWin, winnerById,winnerByProductId };