const fs = require('fs');

const data = [];
const readStream = fs.createReadStream('./file.txt', {
        // highWaterMark: 8        // 기본적으로 64KB 로 설정되어있음.
        // , encoding: 'utf-8'
    }).on('data', (chunk) => {
        data.push(chunk);
        console.count('data');
    }).on('error', (error) => {
        console.log(error);
    }).once('end', () => {
        console.log(data.join(''));
    });