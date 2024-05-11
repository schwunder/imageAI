const { processImage } = require('./processImage.cjs');

// Define test parameters
const imagePath = 'db/abc.png';
const messageContent = 'Sample message content';

// Execute the test
(async () => {
  try {
    await processImage(imagePath, messageContent);
    console.log('processImage executed successfully with message:', messageContent);
  } catch (error) {
    console.error("Error during processImage test:", error);
  }
})();
