const express = require('express');

const router = express.Router();

router.get('/users', async (req, res) => {
    res.send('Hello');
});

module.exports = router;