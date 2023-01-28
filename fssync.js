const { log } = require("console");
const fs = require("fs");
let path = require("path");
const p = path.join("content/", "subfolder", "text.txt");

console.log(path.sep);

fs.writeFileSync("content/subfolder/text.txt", "hi");

const s = fs.readFileSync("content/subfolder/text.txt", "utf8");
console.log(s);
