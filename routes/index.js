const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello, World!');
});

router.get('/test', (req, res) => {
    res.send('This is test page');
})

module.exports = router;
