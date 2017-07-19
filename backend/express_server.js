const process = require("process");
const processDir = process.cwd();
const path = require('path');
const packageInfo = require(path.join(processDir, 'package.json'));

const express = require('express');
const app = express();
const hostPort = 3000;

app.use('/', express.static(path.join(processDir, 'frontend')));

const server = app.listen(hostPort, function() {
  console.log(packageInfo.name + ' is listening on port: ' + hostPort)
  server.on('close', function() {
    console.log(packageInfo.name + ' has closed from port: ' + hostPort)
  });
})

process.on("SIGINT", function() {
  console.log(' Force close detected! >' + packageInfo.name + ' is closing')
  server.close();
});
process.on("exit", function() {
  console.log(packageInfo.name + ' has stopped')
  process.exit(0);
});
