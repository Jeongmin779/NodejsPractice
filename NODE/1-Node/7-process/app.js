// process 관련 정보 수집 공부
const process = require('process');

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

// 동기적 call stack
setTimeout(() => {
    // nextTick 에 정의된 작업이 종료된 후 출력
    console.log('5 second after...');
}, 5);

// 모든 taskQueue 를 무시한 채로, 제일 앞부분에 위치하는 call stack
process.nextTick(() => {
    // for loop 가 종료된 후 출력
    console.log('nextTick');
});

for(let i = 0; i < 100; i++){
    console.log('for loop');
}