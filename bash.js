const pwd = require("./pwd.js");
const ls = require("./ls.js");

//output a prompt
process.stdout.write("\nprompt > ");

// stdin event - +registered listener "on"
process.stdin.on("data", (data) => {

  const cmd = data.toString().trim();

  if (cmd === "pwd") {
    pwd(cmd);
  } else if (cmd === "ls") {
    ls(cmd);
  } else {
    process.stdout.write(`You typed: ${cmd}`);
  }
  process.stdout.write("\nprompt > ");
});
