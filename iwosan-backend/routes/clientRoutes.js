const express = require('express');
const router = express.Router();


router.post('/register', (req, res) => {
    res.json({message: 'register user'})
});

module.exports = router;