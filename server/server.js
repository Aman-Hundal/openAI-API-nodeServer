const http = require("http");
const openAI = require("openai");

//openAI setup - SEE DOCUMENTATION https://platform.openai.com/docs/introduction
const openAIAPI = new openAI.OpenAIApi(
  new openAI.Configuration({
    apiKey: process.env.API_KEY,
  })
);

// Creating server
const server = http.createServer((req, res) => {
  res.write("Hello World");
  res.end();
});

server.listen(process.env.PORT, () => {
  console.log("Server is running on PORT 3000");
});

