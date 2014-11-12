fs = require('fs');
module.exports.catalog = JSON.parse(fs.readFileSync('data/catalog.json'));
