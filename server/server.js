require("dotenv").config();
const http = require("http");
const openAI = require("openai");

//openAI setup - SEE DOCUMENTATION https://platform.openai.com/docs/introduction
const openAIAPI = new openAI.OpenAIApi(
  new openAI.Configuration({
    apiKey: process.env.API_KEY,
  })
);

const askGPt = async (input) => {
  const response = await openAIAPI.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: input }],
  });
  return response.data.choices[0].message.content;
};

// Creating server
const server = http.createServer(async (req, res) => {
  const result = await askGPt("hi there");
  res.write(result);
  res.end();
});

server.listen(process.env.PORT, () => {
  console.log(`Server is running on PORT ${process.env.PORT}`);
});
