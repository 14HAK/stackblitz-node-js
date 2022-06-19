const fs = require('fs');

const ownRead = fs.createReadStream('./txt/bigdata.txt');
const ownWrite = fs.createWriteStream('./txt/new.txt');

ownRead.pipe(ownWrite);
