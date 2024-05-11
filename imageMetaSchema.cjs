const { z } = require("zod");
const { generateObject } = require("ai");
const { createOpenAI } = require("@ai-sdk/openai");

const openai = createOpenAI({ apiKey: process.env.OPENAI_API_KEY });

const imageMetaSchemaObject = z.object({
    tags: z.array(z.string()),
    fileTitle: z.string(),
  });

const params = {
  schema: imageMetaSchemaObject,
  model: openai("gpt-3.5-turbo"),
};

async function imageMetaSchema(imageDescription) {
  const { object } = await generateObject({...params, prompt: imageDescription + "---- Please give this description of an image a fileTitle in under 5 words in kebab case and the 1-4 most descriptive tags for it"});
  return object;
}

module.exports = { imageMetaSchema };
