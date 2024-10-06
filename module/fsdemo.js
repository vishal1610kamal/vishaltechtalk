const fs = require('fs');

fs.readFile('sample1.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        throw err;
    }
    console.log(data);
    console.log('File read successfully');
});
