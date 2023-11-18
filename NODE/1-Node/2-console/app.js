console.log('logging...');
console.clear();

// log Level
console.log('log');         // 개발 단계
console.info('info');       // 정보
console.warn('warn');       // 경보
console.error('error');     // 에러 단계일 경우 사용, 사용자 에러 또는 시스템 에러

// assert
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

// print Object
const student = { name: 'jeongmin', age : 20, company: {name: 'AC'}};
console.log(student);
console.table(student);
console.dir(student, { showHidden: true, colors: false, depth: 2});

// measuring time
console.time('for loop');
for (let i = 0; i < 10; i++){
    i++;
}

console.timeEnd('for loop');

// counting
function a() {
    console.count('a function');
}
a();
console.countReset('a function');
a();

// trace
function f1() {
    f2();
}

function f2() {
    f3();
}
function f3() {
    console.log('f3');
    console.trace();
}

f1();