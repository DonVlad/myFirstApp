//main fail of my app
var number = process.argv[2];
var message = process.argv[3];

var PrintMessage = require("./design");
var CountOfSymbles = require("./another");

PrintMessage(number,message);

console.log(message.length*number);
