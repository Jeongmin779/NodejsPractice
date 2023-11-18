// OS 관련 데이터 추출 공부
const os = require('os');

console.log(os.EOL === '\n');
console.log(os.EOL === '\r\n');

console.log(os.totalmem());
console.log(os.freemem());
console.log(os.type());
console.log(os.userInfo());
console.log(os.cpus());