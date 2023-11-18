let count = 0;

function increase() {
    count ++;
}

function getCount() {
    return count;
}

// 외부에서 함수를 사용하려면 exports 를 활용하여야 한다.
module.exports.getCount = getCount;
module.exports.increase = increase;
console.log(module.exports === exports);
//exports = {};   // exports 에 값을 할당할 경우, 다른 객체가 된다.
//console.log(module.exports === exports);
exports.increase = increase;