const fs = require("fs");

const cat = (done, fileName) => {
  fs.readFile(fileName, "utf8", (err, data) => {
    if (err) {
      done(`error: ${err}`);
    } else {
      done(`${data}`);
    }
  });
};

module.exports = cat;
