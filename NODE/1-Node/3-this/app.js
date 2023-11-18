// Node.js 에서의 this 의 차이점
function hello() {
    console.log(this);
    console.log(this === global);     // true, 클래스 외부에서의 this 는 global 을 가르킴
}

hello();

class A {
    constructor(num) {
        this.num = num;
    }

    memberFunction(){
        console.log('---class---');
        console.log(this);
        console.log(this === global);   // false, 클래스 내부에서의 this 는 자신의 class 를 가르킴
    }
}

const a = new A(1);
a.memberFunction();

console.log('--- global scope ---');
console.log(this);
console.log(this === module.exports);