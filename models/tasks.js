const Task = require("./task");
/**
 * _list:
 *      { 'uuid-13123-213123-123: {id:12,desc:saad,completeIn:9115}},
 */

class Tasks {
  _list = {};

  constructor() {
    this._list = {};
  }

  createTask(desc = "") {
    const task = new Task(desc);
    this._list[task.id] = task;
  }
}

module.exports = Tasks;
