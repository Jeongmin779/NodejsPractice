const fs = require('fs').promises;

// read a file
fs.readFile('./readText.txt', 'utf8')   // utf 8 파라미터가 없을 경우, 
  .then(data => console.log(data))      // buffer 형태로 데이터를 읽어옴
  .catch(error => console.log(error));

// write a file
fs.writeFile('./writeFile.txt', 'Hello, JeongMan! ')
  .catch(error => console.log(error));

// append a file
fs.appendFile('./writeFile.txt', 'Hey !')
  .then(() => {
    // copy a file
    fs.copyFile('./writeFile.txt', 'copyFile.txt')
    .catch(error => console.log(copyFile));
  })
  .catch(error => console.log(error));

// folder make
fs.mkdir('sub-folder')
  .catch(console.error);

// 디렉토리 내 데이터 출력 
fs.readdir('./')
  .then(console.log)
  .catch(console.error);