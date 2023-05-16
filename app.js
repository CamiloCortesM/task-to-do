const {
  inquirerMenu,
  pause,
  readInput,
  listTasksDelete,
  confirm,
  showListChecklist,
} = require("./helpers/inquirer");
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
        tasks.completedList();
        break;
      case "3":
        tasks.listPendingCompleted(true);
        break;
      case "4":
        tasks.listPendingCompleted(false);
        break;
      case "5":
        const ids = await showListChecklist(tasks.listArr);
        tasks.toggleCompleted(ids);
        break;
      case "6":
        const id = await listTasksDelete(tasks.listArr);

        if (id !== "0") {
          const ok = await confirm("Are you sure?");
          if (ok) {
            tasks.deleteTask(id);
            console.log("Task successfully deleted".green);
          }
        }

        break;
    }

    saveDB(tasks.listArr);

    await pause();
  } while (opt !== "0");
  //   ;
};

main();
