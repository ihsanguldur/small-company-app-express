const express = require('express');
const {buy, getSales} = require('../handlers/sales');
const {protect} = require('../middlewares/auth');

const router = express.Router();

router.get('/buy', protect, buy);
router.get('/', protect, getSales);

module.exports = router;