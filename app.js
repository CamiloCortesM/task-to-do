const { inquirerMenu, pause, readInput } = require("./helpers/inquirer");
const { saveDB, readDB } = require("./helpers/saveFile");
const Tasks = require("./models/tasks");
// const { showMenu, pause } = require("./helpers/messages");

require("colors");

const main = async () => {
  let opt = "";
  const tasks = new Tasks();
  const taskdb = readDB();

  if (taskdb) {
    tasks.loadTaskFromArray(taskdb);
  }

  do {
    opt = await inquirerMenu();

    switch (opt) {
      case "1":
        //create
        const desc = await readInput("Descripcion: ");
        tasks.createTask(desc);
        break;
      case "2":
        console.log(tasks.listArr);
        break;
    }

    saveDB(tasks.listArr);

    await pause();
  } while (opt !== "0");
  //   ;
};

main();
