import { DataStorage } from "./DataStorage";

export class TaskStorage extends DataStorage {
  constructor() {
    super();
    this.initStorage();
  }

  getDataTasks() {
    const storage = this.getTasks();

    return Object.keys(storage).map((id) => {
      return storage[id];
    });
  }

  initStorage() {
    if (!this.getStorage("tasks")) {
      this.saveStorage("tasks", {});
    }
  }

  changeFavoriteTask(id) {
    const data = this.getTasks();
    data[id].favorite
      ? (data[id].favorite = false)
      : (data[id].favorite = true);

    this.saveChange(data);
  }

  changeTextTask(id, text) {
    const data = this.getTasks();
    data[id].text = text;
    this.saveChange(data);
  }

  addTask(options) {
    return this.addItem("tasks", options);
  }

  saveChange(options) {
    return this.saveStorage("tasks", options);
  }

  getTasks() {
    return this.getStorage("tasks");
  }

  getTask(id) {
    const data = this.getTasks();
    return data[id];
  }

  deleteTask(id) {
    return this.deleteItem("tasks", id);
  }

  getText(id) {
    const data = this.getTask(id);
    return data.text;
  }
}
