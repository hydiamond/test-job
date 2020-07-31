const _  = require('lodash');
function resoleArray(...params) {
    let lengArr = [];
    let co = []

    params.map(item => {
        lengArr.push(item.length);
        co.push(item.slice(0, Math.min(...lengArr)));
    });

    return _.zip(...co);
};

module.exports = resoleArray;




