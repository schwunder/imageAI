const { fetchOpenAIData } = require('./fetchOpenAIData.cjs');
const dotenv = require('dotenv');
dotenv.config();

// Define test parameters
const imagePath = 'db/abc.png';
const question = 'What is in the image?';

// Execute the test
(async () => {
  try {
    const message = await fetchOpenAIData(imagePath, question);
    console.log('Message:', JSON.stringify(message, null, 2));
  } catch (error) {
    console.error("Error during fetchOpenAIData test:", error);
  }
})();

delete process.env.OPENAI_API_KEY;