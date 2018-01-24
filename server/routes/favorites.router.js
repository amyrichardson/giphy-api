const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    const queryText = 'INSERT INTO favorites (url) VALUES ($1)';
    pool.query(queryText, [req.body.url])
        .then((result) => {
            res.sendStatus(200);
        })
        .catch((error) => {
            res.sendStatus(500);
        })
});

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM favorites ORDER BY url';
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            res.sendStatus(500);
        })
})

module.exports = router;