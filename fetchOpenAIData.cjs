const axios = require('axios');
const { getRequestConfig } = require('./requestConfig.cjs');

const fetchOpenAIData = async (imagePath, question) => {
  const { headers, payload } = getRequestConfig(imagePath, question);
  try {
    const response = await axios.post("https://api.openai.com/v1/chat/completions", payload, { headers });
    return response.data.choices[0].message;
  } catch (error) {
    console.error(error);
    throw error; // Rethrow to handle in calling function
  }
};

module.exports = { fetchOpenAIData };

