// const { writeFileSync } = require("fs");
// for (let index = 0; index < 10000; index++) {
//   writeFileSync("./content/bigfile.txt", `hello mohammad ${index} \n`, {
//     flag: "a",
//   });
// }
const { createReadStream } = require("fs");
const stream = createReadStream("./content/bigfile.txt");
stream.on("data", (resolve) => {
  console.log(resolve);
});
