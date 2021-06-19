const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if unsuccessful, reject Promise and send error to Promise's .catch() method
            if(err) {
                reject(err);
                // return out of function to ensure Promise doesn't execute resolve()
                return;
            }

            // if successful, resolve Promise and send data to .then() method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if(err) {
                reject(err);
                return;
            }
            
            // if successful
            resolve({
                ok: true,
                message: 'File copied!'
            });
        });
    });
}

// module.exports = {
//     writeFile: writeFile,
//     copyFile: copyFile
// };
// same thing as ^ but shortened
module.exports = { writeFile, copyFile };