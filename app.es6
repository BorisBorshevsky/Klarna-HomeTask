"use strict";
const express = require('express');
const peopleLib = require("./peopleLib.es6");
const app = express();

app.use('/', express.static(__dirname));

app.get('/api/people', (req, res) => {
    const queryParam = req.query.q;
    const limit = req.query.limit || 20;
    const offset = req.query.offset || 0;

    console.log(`got request q= ${queryParam}`);

    let resultArray = peopleLib.getFilteredResult(queryParam);
    res.send(resultArray.slice(offset, limit + offset));
});

app.listen(80, () => {
    console.log('Example app listening on port 80!');
});