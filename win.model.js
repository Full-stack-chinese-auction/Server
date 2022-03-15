const mongoose = require("mongoose");

const winSchema = require("mongoose")({
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    item_id: {
        type: mongoose.Types.ObjectId,
        ref: "product"
    },
    winning_date: { type: Date, default: Date.now() }
})
const Win = mongoose.model("winners", winSchema);

module.exports = { winSchema, Win }