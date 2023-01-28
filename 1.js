require("./script");

// sayhi("mohammas");

// // class animal {
// //   constructor(name) {
// //     this.name = name;
// //   }
// //   walking() {
// //     console.log("walking");
// //   }
// // }

// // class cats extends animal {
// //   walking() {
// //     arguments;
// //     console.log("mewo and walking");
// //   }
// // }

// const cat1 = new cats();
// cat1.name = "c";
// console.log(cat1);
// cat1.walking();

// const os = require("os");
// const user = os.userInfo();
// console.log(user);

// console.log(os.uptime());

const path = require("path");
console.log(path.sep);
const fp = path.join("/content/", "subfolder", "text.txt");
console.log(fp);
