const fs = require('fs');
const path = require('path');

const workingDir = path.join(__dirname, 'test');
const videoDir = path.join(workingDir, 'video');
const capturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');
const folderArr = [videoDir, capturedDir, duplicatedDir];

const files = fs.readdirSync(workingDir);

folderArr.forEach((folderRoute) => {
    !fs.existsSync(folderRoute) && fs.mkdirSync(folderRoute);
});


files.forEach((fileName) => {
    if(isVideoFile(fileName)) {
        move(fileName, videoDir);
    }

    else if (isCapturedFile(fileName)) {
        move(fileName, capturedDir);
    }
    else if (isDuplicatedFile(fileName)){
        move(fileName, duplicatedDir)
    }
});

function isVideoFile(file) {
    const regExp = /(mp4|mov)$/gm;
    return !!file.match(regExp);
}

function isCapturedFile(file) {
    const regExp = /(png|aae)$/gm;
    return !!file.match(regExp);
}

function isDuplicatedFile(file) {
    if(!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
        return false;
    }

    const edited = `IMG_E${file.split('_')[1]}`;
    const found = files.find((f) => f.includes(edited));
    return !!found;
}

function move(file, targetDir){
    console.info(`move ${file} to ${path.basename(targetDir)}`);
    const oldPath = path.join(workingDir, file);
    const newPath = path.join(targetDir, file);
    fs.promises
      .rename(oldPath, newPath)
      .catch(console.error);
}