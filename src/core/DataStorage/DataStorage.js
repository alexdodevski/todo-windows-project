export class DataStorage {
  constructor() {
    this.data = localStorage;
  }

  saveTask(options) {
    const id = options.id;
    options = JSON.stringify(options);
    localStorage.setItem(id, options);
  }

  getTask(id) {
    return JSON.parse(localStorage.getItem(id));
  }

  clearStorage() {
    localStorage.clear();
  }

  deleteTask(id) {
    localStorage.removeItem(id);
  }
}
