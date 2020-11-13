const fs = require("fs");
const done = require("./bash.js");

const ls = (done) => {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      done(`error: ${err}`);
    } else {
      done(files.join("\n"));
    }
  });
};

//     if(err){
//         throw err;
//     }else{
//         process.stdout.write(files.join(`\n`));
//         process.stdout.write('\n');
//         process.stdout.write('prompt > ');
//     }
// });
// };

module.exports = ls;

// module.exports = (done) => {
//   fs.readdir("./", "utf8", (err, files) => {
//     if (err) {
//       done("Something went wrong!");
//     } else {
//       done(files.join("\n"));
//     }
//   });
// };
