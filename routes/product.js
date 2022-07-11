const express = require('express');
const {create, getAll, getOne} = require('../handlers/product');

const router = express.Router();

router.post('/', create);
router.get('/all', getAll);
router.get('/:code', getOne);

module.exports = router;