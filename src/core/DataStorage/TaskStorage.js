import { DataStorage } from "./DataStorage";

export class TaskStorage extends DataStorage {
  constructor() {
    super();
    this.initStorage();
  }
  getTasks() {
    return Object.keys(localStorage)
      .sort((a, b) => a - b)
      .map((id) => {
        return { id: id, ...this.getTask(id) };
      });
  }

  initStorage() {
    if (!this.getItem("tasks")) {
      this.saveItem("tasks", {});
    }
  }

  changeFavoriteTask(id, $btn) {
    const data = this.getTask(id);
    data.favorite ? (data.favorite = false) : (data.favorite = true);

    $btn.classList.toggle("selected");
    this.saveTask(data);
  }

  changeTextTask(id, text) {
    const data = this.getTask(id);
    data.text = text;
    this.saveTask(data);
  }

  saveTask(options) {
    return this.saveItem("tasks", options);
  }

  getTask(id) {
    return this.getItem("tasks", id);
  }

  deleteTask(id) {
    return this.deleteItem("tasks", id);
  }
}
