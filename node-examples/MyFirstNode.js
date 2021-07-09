const unique = require('uniq');
const fs = require('fs');  // for file system
const data = [1, 2, 3, 4, 5, 5, 6, 5];

console.log("hey");

const mainContainer = document.querySelector(".main-container");
mainContainer.innerText  = unique(data);


// install browserify
// install uniq 
//browserify node-examples/MyfirstNode.js > bundle.js
//browserify node-examples/MyfirstNode.js -o bundle.js