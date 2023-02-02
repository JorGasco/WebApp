// use javascript in strict mode
'use strict';

// import all required modules
import express from "express";
import path from 'path';
import logger from "./utils/logger.js";
import { fileURLToPath } from 'url';

// initialise project
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// static files output to public folder
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT || 4000, function () {
  logger.info('Your app is listening on port ' + listener.address().port);
});
