const fs = require("fs");

const a = () => {
  return new Promise((resolve, rejects) => {
    fs.readFile("content/subfolder/texcllct.txt", "utf8", (err, data) => {
      if (err) {
        rejects(err);
      } else {
        resolve(data);
      }
    });
  });
};
// a()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
const aa = async () => {
  console.log(await a());
};
aa();
