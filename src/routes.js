const express = require('express');

const router = express.Router();

const index = require('./routes/index');

router.use('/', index);

export default router;
