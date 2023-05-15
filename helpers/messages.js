require("colors");

const showMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("========================".green);
    console.log("   Select an option".green);
    console.log("========================\n".green);

    console.log(`${"1".green}. Create todo`);
    console.log(`${"2".green}. List todos`);
    console.log(`${"3".green}. List completed todos`);
    console.log(`${"4".green}. List pending todos`);
    console.log(`${"5".green}. Complete todo(s)`);
    console.log(`${"6".green}. Delete todo`);
    console.log(`${"0".green}. Exit \n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Select an option: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resolve) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\nPress ${"ENTER".green} to continuen\n`, (opt) => {
      readline.close();
      resolve();
    });
  });
};

module.exports = {
  showMenu,
  pause,
};
