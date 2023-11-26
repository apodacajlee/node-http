console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const http = require("http");

// Finish setting up the server
http
    .createServer((req, res) => {
        const { method, url } = req;
        const chunks = [];

        req
            .on("data", (chunk) => {
                chunks.push(chunk);
            })
            .on("end", () => {
                const body = Buffer.concat(chunks).toString();
                const responseBody = { method, url, body };

                switch (url) {
                    case "/":
                        res.write("Wow, a wildcard!");
                        break;
                    case "/about":
                        res.write("My favorite food is tonkotsu miso ramen, extra spicy")
                        break;
                    case "/echo":
                        res.write(JSON.stringify(responseBody));
                        break;
                    default:
                        res.writeHead(404);
                        res.write("Not Found");
                        break;
                }
                return res.end();
            });
    })
    .listen(3000, () => console.log("Server listening on port 3000"));