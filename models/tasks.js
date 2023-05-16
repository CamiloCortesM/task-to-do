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

  loadTaskFromArray(tasks = []) {
    tasks.map((task) => (this._list[task.id] = task));
  }

  createTask(desc = "") {
    const task = new Task(desc);
    this._list[task.id] = task;
  }
}

module.exports = Tasks;
