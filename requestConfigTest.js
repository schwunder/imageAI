const { getRequestConfig } = require('./requestConfig.cjs');
const dotenv = require('dotenv');
// Set the environment variable for the test
dotenv.config();

// Define test parameters
const imagePath = 'db/abc.png';
const question = 'What is in the image?';

// Get the request configuration
const { headers, payload } = getRequestConfig(imagePath, question);

// Using JSON.stringify to format the output for better readability
console.log('Headers:', JSON.stringify(headers, null, 2));
console.log('Payload:', JSON.stringify(payload, null, 2));

// Clean up environment variable
delete process.env.OPENAI_API_KEY;