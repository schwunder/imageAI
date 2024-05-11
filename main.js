const dotenv = require('dotenv');
const { fetchOpenAIData } = require('./fetchOpenAIData.cjs');
const { processImage } = require('./processImage.cjs');
const { annotateImage } = require('./annotateImage.cjs');
dotenv.config();

async function main() {
  const isTestRun = process.argv.includes('--test');
  const imagePath = "db/abc.png"; // Replace with the actual image path
  const question = "What's in this image?"; // Replace with the desired question

  if (isTestRun) {
    const testResponse = { content: "Test response" };
    console.log(testResponse.content);
    await processImage(imagePath, testResponse.content);
  } else {
    try {
      const message = await fetchOpenAIData(imagePath, question);
      await processImage(imagePath, message.content)
      .then(() => annotateImage(imagePath,  message.content));
    } catch (error) {
      console.error('Failed to fetch or process image:', error);
    }
  }
}

main();