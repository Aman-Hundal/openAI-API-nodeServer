const http = require("http")

// Creating server
const server = http.createServer((req, res) => {
	res.write("Hello World")
	res.end();
})

server.listen((3000), () => {
	console.log("Server is running on PORT 3000");
})
