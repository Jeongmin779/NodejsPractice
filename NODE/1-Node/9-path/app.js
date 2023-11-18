// 파일 경로 관련 공부
const path = require('path');

// 현재 실행되고 있는 node 의 폴더 위치 정보
console.log(__dirname);
// 현재 실행되는 node 의 파일 명, 위치 정보
console.log(__filename);

console.log(path.sep);
console.log(path.delimiter);


// basename
console.log(path.basename(__filename));         // 파일명과 확장자만 가지고 오고 싶은 경우
console.log(path.basename(__filename, '.js'));  // 파일명만 가지고 오고 싶은 경우

// dirname
console.log(path.dirname(__filename));          // 디렉토리명만 가지고 오고 싶은 경우

// extension
console.log(path.extname(__filename));          // 확장자만 가지고 오고 싶은 경우

//parse
const parsed = path.parse(__filename);          // 객체 정보를 가지고 오고 싶은 경우
console.log(parsed);
console.log(parsed.root);
console.log(parsed.name);
const str = path.format(parsed);                // 경로 String 형태로 변환
console.log(str);

// isAbsolute, 절대경로 / 상대경로 를 확인하는 API
console.log('isAbsolute?', path.isAbsolute(__dirname)); // true, 절대 경로부터 시작하기 때문에
console.log('isAbsolute?', path.isAbsolute('../'));     // false

// noramlize
console.log(path.normalize('./forder//////////sub'));

// join
console.log(__dirname + path.sep + 'image');            // sep 를 사용하는 이유는 운영체제 별 표기 방식이 다르기 때문
console.log(path.join(__dirname, 'image'));             // join 을 사용할 경우, 보다 안전하게 디렉토리 경로 추가가 가능함