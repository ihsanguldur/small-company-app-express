const express = require('express');
const {create, getAll, login} = require('../handlers/customer');

const router = express.Router();

router.post('/', create);
router.get('/all', getAll);
router.post('/login', login);

module.exports = router;