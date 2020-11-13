const pwd = require("./pwd.js");
const ls = require("./ls.js");
const cat = require("./cat.js");
const curl = require("./curl.js");
const done = (output) => {
  process.stdout.write(output);
  process.stdout.write("\n");
  process.stdout.write("prompt > ");
};


//output a prompt
process.stdout.write("\nprompt > ");

// stdin event - +registered listener "on"
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim().split(" ");

  if (cmd[0] === "pwd") {
    pwd(done);
  } else if (cmd[0] === "ls") {
    ls(done);
  } else if (cmd[0] === "cat") {
    cat(done, cmd[1] ? cmd[1] : process.cwd() + '/bash.js');
  } else if (cmd[0] === "curl") {
    curl(done, cmd[1] ? cmd[1] : 'http://github.com/mikeal/request');
  } else {
    process.stdout.write(`You typed: ${cmd.join(" ")}`);
    process.stdout.write("\nprompt > ");
  }
});



module.exports = done;
