const { annotateImage } = require('./annotateImage.cjs');
const dotenv = require('dotenv');
dotenv.config();
// Define test parameters
const imagePath = 'db/biggie.png';
const description = 'The "Mona Lisa" is a renowned portrait by Leonardo da Vinci, depicting a woman with an enigmatic smile. Painted in the early 16th century, it features soft facial features, subtle shading, and a distant landscape background. Her gaze, seemingly following the viewer, adds to her mysterious allure.';
// Execute the test
(async () => {
  try {
    const result = await annotateImage(imagePath, description);
    console.log('Result:', JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("Error during annotateImage test:", error);
  }
})();
