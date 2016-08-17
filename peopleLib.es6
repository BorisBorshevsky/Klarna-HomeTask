"use strict";
const fs = require('fs');

let getAgeFromEpoch = function (epoch) {
    const yearInEpoch = 31556926;
    const currEpoch = new Date().getTime() / 1000;

    return parseInt((currEpoch - epoch) / yearInEpoch);
};

const loadData = () => {
    const peopleFile = fs.readFileSync('./people.json', 'utf8');
    return JSON.parse(peopleFile).map(e => {
        e['age'] = getAgeFromEpoch(e.birthday);
        return e;
    });
};

//bootstrap data
let peopleJson = loadData();

const parseQuery = (query) => {
    let result = {name: []};
    let queryWords = query.split(" ");

    queryWords.forEach(word => {
        let found = false;

        if (!isNaN(word)) {
            let num = Number(word);
            if (num <= 120 && num > 0) {
                result.age = num;
                found = true;
            }
        }

        if (new RegExp("^[\\d-]{3,15}$").test(word)) {
            result.phone = word.replace(new RegExp("-", "g"), "");
            found = true;
        }

        if (!found) {
            result.name.push(word)
        }
    });

    return result;
};



let filterByResult = function (list, filters) {
    if (filters.age) {
        list = list.filter(e =>
            e.age == filters.age
        )
    }
    if (filters.phone) {
        list = list.filter(e =>
            e.phone.replace(new RegExp("-", "g"), "").includes(filters.phone)
        );
    }

    for (let i = 0; i < filters.name.length; i++) {
        list = list.filter(e =>
            e.name.toLowerCase().includes(filters.name[i].toLowerCase())
        )
    }

    return list;
};

module.exports = {
    getFilteredResult: function (query) {
        let filters = parseQuery(query);
        return filterByResult(peopleJson, filters);
    }
};