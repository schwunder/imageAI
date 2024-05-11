const tag = require('osx-tag');

function updateTags(imagePath, altText) {
    console.log(`Updating metadata for ${imagePath} with alt text: ${altText}`);
    try {
      // Assuming 'altText' should be used as a tag, wrap it in an array
      tag.addTags(imagePath, altText, (err, tags) => {
        if (err) throw err;
        console.log(tags);
      });
    } catch (error) {
      console.error('Error handling tags:', error);
    } finally {
      console.log('end');
    }
  }
  module.exports = { updateTags };
