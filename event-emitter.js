const eventEmeter = require("events");

const customEmitter = new eventEmeter();
//customEmitter is listening till emit with first parameter
customEmitter.on("response", (name, age) => {
  console.log(`data recived name:${name} age:${age}`);
});
customEmitter.on("response", () => {
  console.log(`data recived `);
});
customEmitter.emit("response", "mohammad", 23);
