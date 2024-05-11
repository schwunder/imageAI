const { imageMetaSchema } = require('./imageMetaSchema.cjs');
const dotenv = require('dotenv');
dotenv.config();

const description = "The \"Mona Lisa\" is a renowned portrait by Leonardo da Vinci, depicting a woman with an enigmatic smile. Painted in the early 16th century, it features soft facial features, subtle shading, and a distant landscape background. Her gaze, seemingly following the viewer, adds to her mysterious allure.";

// Execute the test
(async () => {
  try {
    const metadata = await imageMetaSchema(description);
    console.log('Metadata:', JSON.stringify(metadata, null, 2));
  } catch (error) {
    console.error("Error during generateMetadata test:", error);
  }
})();
delete process.env.OPENAI_API_KEY;