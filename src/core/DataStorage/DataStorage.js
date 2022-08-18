export class DataStorage {
  constructor() {
    this.data = localStorage;
  }

  saveItem(key, options) {
    if (!options.id) {
      this.data.setItem(key, JSON.stringify(options));
      return;
    }
    const id = options.id;
    const keyData = this.getItem(key, id);
    keyData[id] = options;
    this.data.setItem(key, JSON.stringify(keyData));
  }

  getItem(key, id) {
    const keyData = JSON.parse(this.data.getItem(key));
    if (!keyData) return;
    return keyData[id];
  }

  clearStorage() {
    this.data.clear();
  }

  deleteItem(key, id) {
    const keyData = this.getItem(key, id);
    delete keyData[id];
    this.saveItem(key, id);
  }
}
