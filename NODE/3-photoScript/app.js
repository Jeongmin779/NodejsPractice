const fs = require('fs');
const path = require('path');

const fileRoute = path.format(path.parse(__dirname)) + path.sep + 'test';
const files = fs.readdirSync(fileRoute);
files.forEach((fileName) => {
    const videoExtName = ['.mp4', '.mov'];
    const capturedExtName = ['.png', '.aae'];
    // mp4, mov 확장자를 가진 파일은 Video 디렉토리로 파일 이동
    if(videoExtName.includes(path.extname(fileName))) {
        const videoFolderRoute = fileRoute + path.sep + 'video';
        if(!fs.existsSync(videoFolderRoute)){
            fs.mkdirSync(videoFolderRoute);
        }
        fs.rename(fileRoute + path.sep + fileName, videoFolderRoute + path.sep + fileName, (error) => {
            console.log(error);
        });
    }

    // png, aae 확장자를 가진 파일은 captured 디렉토리로 파일 이동
    else if (capturedExtName.includes(path.extname(fileName))) {
        const capturedFolderRoute = fileRoute + path.sep + 'captured';
        if(!fs.existsSync(capturedFolderRoute)){
            fs.mkdirSync(capturedFolderRoute);
        }
        fs.rename(fileRoute + path.sep + fileName, capturedFolderRoute + path.sep + fileName, (error) => {
            console.log(error);
        });
    }

    // jpg 확장자를 가지며, IMG_ 라는 파일명으로 시작하고 E라는 알파벳이 없는 경우, duplicated 디렉토리로 파일 이동
    else if ((path.extname(fileName) === '.jpg') 
            && (path.basename(fileName, '.jpg').startsWith('IMG_'))
            && !((path.basename(fileName, '.jpg')).includes('E'))){
        const duplicatedFolderRoute = fileRoute + path.sep + 'duplicated';
        if(!fs.existsSync(duplicatedFolderRoute)){
            fs.mkdirSync(duplicatedFolderRoute);
        }
        fs.rename(fileRoute + path.sep + fileName, duplicatedFolderRoute + path.sep + fileName, (error) => {
            console.log(error);
        });
    }
});