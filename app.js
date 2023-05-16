const { inquirerMenu, pause } = require("./helpers/inquirer");
const Tasks = require("./models/tasks");
// const { showMenu, pause } = require("./helpers/messages");

require("colors");

const main = async () => {
  console.log("Hello World");

  let opt = "";

  do {
    opt = await inquirerMenu();
    console.log({ opt });

    await pause();
  } while (opt !== "0");
  //   ;
};

main();
