const connect = require("./connect.js");
async function kk() {
  const k = await connect.kitten.find();
  console.log(k);
}
kk();
