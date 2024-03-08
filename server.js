const http = require("http");
const fs = require("fs");
const server = http.createServer(function (req, res) {
  //   res.setHeader({ "Content-Type": "text/html" });
  //   res.write("<br>hello write </br>");

  console.log("Server has been created");
  if (req.method === "POST") {
    let body = "";
    req.on("data", (chung) => {
      body += chung.toString();
    });
    req.on("end", () => {
      const objectData = JSON.parse(body);
      //res.end(JSON.stringify(objectData));
      switch (objectData.event) {
        case "+":
          res.end(
            `my event is ${objectData.event} and result is ${
              objectData.num1 + objectData.num2
            }`
          );
          break;
        case "-":
          res.end(
            `my event is ${objectData.event} and result is ${
              objectData.num1 - objectData.num2
            }`
          );
          break;
        case "*":
          res.end(
            `my event is ${objectData.event} and result is ${
              objectData.num1 * objectData.num2
            }`
          );
          break;
        case "/":
          objectData.num2 > 0
            ? res.end(
                `my event is ${objectData.event} and result is ${
                  objectData.num1 / objectData.num2
                }`
              )
            : res.end("you cant devide plese check your number first");
          break;

        default:
          res.end("plese enter vailed event");
      }
    });
  } else {
    res.end("other");
  }
});
server.listen(8080, "127.0.0.1", () => {
  console.log("Listening");
});
