const { showMenu, pause } = require("./helpers/messages");

require("colors");
console.clear();

const main = async () => {
  console.log("Hello World");

  let opt = "";

  do {
    opt = await showMenu();
    if (opt !== "0") await pause();
  } while (opt !== "0");
  //   ;
};

main();
