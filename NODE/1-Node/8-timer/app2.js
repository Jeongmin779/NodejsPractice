// 출력 순서 테스트
console.log('code1');
console.time('timeEnd 0');
setTimeout(() => {
    console.timeEnd('timeEnd 0');
    console.log('setTimeOut 0');
}, 0);

for(let i = 0; i < 1000; i++) {}

console.log('code2');
setImmediate(() => {
    console.log('setImmediate');
});

console.log('code 3');
process.nextTick(() => {
    console.log('process.nextTick');
});