var express = require('express');
var router = express.Router();

router.route('/')
    .get(async (req, res, next) => {
        res.send('main page');
    });

module.exports = router;