const fs = require('fs');
const path = require('path');
// Function to encode the image into a base64 string
function encodeImage(imagePath) {
    return fs.readFileSync(imagePath, { encoding: 'base64' });
}

/**
 * Renames a picture in the db folder.
 * @param {string} oldName - The current name of the file.
 * @param {string} newName - The new name for the file.
 */
function renameImage(oldName, newName) {
    const directory = path.dirname(oldName);
    const oldExtension = path.extname(oldName);
    const newNameWithExtension = newName + oldExtension;
    const newPath = path.join(directory, newNameWithExtension);

    fs.rename(oldName, newPath, (err) => {
        if (err) {
            console.error('Error renaming the file:', err);
        } else {
            console.log(`File renamed from ${oldName} to ${newPath}`);
        }
    });
}

module.exports = { encodeImage, renameImage };


