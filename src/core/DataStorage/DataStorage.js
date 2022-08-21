export class DataStorage {
  constructor() {
    this.data = localStorage;
  }

  addItem(key, options) {
    const storage = this.getStorage(key);
    storage[options.id] = options;
    this.saveStorage(key, storage);
  }

  getStorage(key) {
    const storage = JSON.parse(this.data.getItem(key));
    return storage;
  }

  saveStorage(key, data) {
    this.data.setItem(key, JSON.stringify(data));
  }

  clearStorage() {
    this.data.clear();
  }

  deleteItem(key, id) {
    const storage = this.getStorage(key, id);
    delete storage[id];
    this.saveStorage(key, storage);
  }
}
