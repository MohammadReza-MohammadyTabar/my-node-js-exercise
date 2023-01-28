const { readFile, writeFile } = require("fs");
readFile("content/subfolder/text.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(result);
});
