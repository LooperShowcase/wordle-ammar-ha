const { request, response } = require("express");
const express = require("express");
const theAnswer = "hello";
const port = process.env.PORT || 3000
const server = express();
server.get("/guess/:word", (request, response) => {
  const useword = request.params.word;
  const arr = [];
  for (let i = 0; i < useword.length; i++) {
    const ch = useword[i];
    if (ch == theAnswer[i]) {
      arr.push(1);
    } else if (theAnswer.includes(ch)) {
      arr.push(0);
    } else {
      arr.push(-1);
    }
  }
  response.json(arr);
});

server.use(express.static("public"));
server.listen(port, () => {
  console.log("server is running on port 65535");
});
