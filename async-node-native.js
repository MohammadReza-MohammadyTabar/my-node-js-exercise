const { readFile, writeFile } = require("fs").promises;

const rw = async () => {
  try {
    const data = await readFile("content/subfolder/text.txt", "utf8");

    console.log(data);
    await writeFile("content/subfolder/text2.txt", "mohammad reza", {
      flag: "a",
    });
    console.log(await readFile("content/subfolder/text2.txt", "utf8"));
  } catch (err) {
    console.log(err);
  }
};

rw();

/* making a promise out of a asyng mwthod --------->
const { readFile, writeFile } = require("fs");
const util = require("util");
const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);
const rw = async () => {
    try {
        const data = await readFilePromise("content/subfolder/text.txt", "utf8");

        console.log(data);
        await writeFilePromise("content/subfolder/text2.txt", "mohammad");
        console.log(await readFilePromise("content/subfolder/text2.txt", "utf8"));
    } catch (err) {
        console.log(err);
    }
};

rw();
<-----------------
*/
