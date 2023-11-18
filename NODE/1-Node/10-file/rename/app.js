// file API 공부
const fs = require('fs');

// 파일명을 변경하는 3가지의 방식이 있음.
// rename(..., callback(error, data))
fs.rename('./text.txt', './text-new.txt', (error) => {
    console.log(error);
});

// try{renameSync(....)} catch(e) {}
// try 를 사용하지 않을 경우, error 에 대한 대응이 되지 않음.
// Sync 의 경우, 동기적으로 작업이 진행되기 때문에 사용하지 않는 것이 좋음
try {
    fs.renameSync('./file.txt', './file-new.txt');
} catch (error) {
    console.log(error);
}
console.log('try and catch');

// promises.rename.then().catch(0)
fs.promises
  .rename('./text2.txt', './text2-new.txt')
  .then(() => console.log('Promises Done!'))
  .catch((error) => {console.log(error)});