const Task = require("./task");
/**
 * _list:
 *      { 'uuid-13123-213123-123: {id:12,desc:saad,completeIn:9115}},
 */

class Tasks {
  _list = {};

  get listArr() {
    const list = [];
    Object.keys(this._list).forEach((key) => {
      list.push(this._list[key]);
    });
    return list;
  }

  constructor() {
    this._list = {};
  }

  deleteTask(id = "") {
    if (this._list[id]) {
      delete this._list[id];
    }
  }

  loadTaskFromArray(tasks = []) {
    tasks.map((task) => (this._list[task.id] = task));
  }

  createTask(desc = "") {
    const task = new Task(desc);
    this._list[task.id] = task;
  }

  completedList() {
    console.log();
    this.listArr.forEach((task, index) => {
      const idx = `${index + 1}`.green;
      console.log(
        `  ${idx}. ${task.desc} :: ${
          task.completeIn ? "Completed".green : "Pending".red
        } `
      );
    });
  }

  listPendingCompleted(completed = true) {
    console.log();
    let index = 1;
    this.listArr.forEach((task) => {
      if (completed === !task.completeIn) return;
      const idx = `${index++}`.green;
      console.log(
        `  ${idx}. ${task.desc} :: ${
          task.completeIn ? task.completeIn.green : "Pending".red
        } `
      );
    });
  }

  toggleCompleted(ids = []) {
    ids.forEach((id) => {
      const task = this._list[id];
      if (!task.completeIn) {
        task.completeIn = new Date().toISOString();
      }
    });
    this.listArr.forEach(({ id }) => {
      if (!ids.includes(id)) {
        this._list[id].completeIn = null;
      }
    });
  }
}

module.exports = Tasks;
