const { encodeImage } = require('./utils.cjs');

const getRequestConfig = (imagePath, question) => {
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

  const headers = {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${OPENAI_API_KEY}`
  };

  const base64Image = encodeImage(imagePath);

  const payload = {
    model: "gpt-4-turbo",
    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: question
          },
          {
            type: "image_url",
            image_url: {
              url: `data:image/jpeg;base64,${base64Image}`
            }
          }
        ]
      }
    ],
    max_tokens: 300
  };

  return { headers, payload };
};

module.exports = { getRequestConfig };