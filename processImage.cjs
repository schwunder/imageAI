const { updateComments } = require('./commentImage.cjs');

const processImage = async (imagePath, messageContent) => {
  try {
    console.log(messageContent);
    await updateComments(imagePath, messageContent);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { processImage };