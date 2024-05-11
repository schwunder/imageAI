const { imageMetaSchema } = require('./imageMetaSchema.cjs');
const { updateTags } = require('./tagImage.cjs');
const { renameImage } = require('./utils.cjs');

const setTimeOut = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function annotateImage(imagePath, imageDescription) {
    try {
        const metadata = await imageMetaSchema(imageDescription);
        updateTags(imagePath, metadata.tags)
        await setTimeOut(1000);
        renameImage(imagePath, metadata.fileTitle);
        console.log(`Tags updated for ${imagePath}: ${metadata.tags}`);
    } catch (error) {
        console.error('Error updating image tags:', error);
    }
}
module.exports = { annotateImage };
