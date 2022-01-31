const http = require('http');
const fs = require('fs');

const onRequestHTML =  (request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"})
  fs.readFile('./index.html', null, (error, data) => {
    if(error) {
      response.writeHead(404);
      response.write("Tidak ditemukan");
    } else {
      response.write(data);
    }
    response.end()
  });
}

const onRequestJSON = (request, response) => {
  response.writeHead(200, { "Content-Type": "application/json" });
  const data = {
    name: "Raja Ikhsan Halomoan",
    age: 22,
  };
  response.end(JSON.stringify(data));
};

http.createServer(onRequestHTML).listen(3000);
http.createServer(onRequestJSON).listen(3001);