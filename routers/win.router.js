const express = require('express')
const router = express.Router()
const win = require("../controllers/WinController")

router.post('/', win.addWin)
router.get('/:id', win.winnerById)
router.get('winnerByProductId/', win.winnerByProductId)
router.get('/:id', win.winnersById)

module.exports = router;