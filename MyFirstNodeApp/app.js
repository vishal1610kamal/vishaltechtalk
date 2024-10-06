const greetUser = require('./greetings');
const name = process.argv[2];
const d = process.argv[3];
const message = greetUser(name, d);
console.log(message);
