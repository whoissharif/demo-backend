const express = require('express');

const router = express.Router();

router.get('/users', async (req, res) => {
    res.send('Hello');
});

router.post('/user/new', async (req, res) => { 
    let name = req.body.name;
    let age = req.body.age;

    res.send(req.body);
    
})

module.exports = router;