export class DataStorage {
  constructor() {
    this.data = localStorage;
  }

  saveTask(id, text, favorite = false) {}

  getTask(id, text, favorite = false) {}
}
