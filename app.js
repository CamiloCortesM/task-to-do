const { inquirerMenu } = require("./helpers/inquirer");
// const { showMenu, pause } = require("./helpers/messages");

require("colors");
console.clear();

const main = async () => {
  console.log("Hello World");

  let opt = "";

  do {
    opt = await inquirerMenu();
  } while (opt !== "0");
  //   ;
};

main();
