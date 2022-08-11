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

  getTasks() {
    return Object.keys(localStorage)
      .sort((a, b) => a - b)
      .map((id) => {
        return { id: id, ...this.getTask(id) };
      });
  }

  changeFavorite(id, $btn) {
    const data = this.getTask(id);
    data.favorite ? (data.favorite = false) : (data.favorite = true);

    $btn.classList.toggle("selected");
    this.saveTask(data);
  }
}
