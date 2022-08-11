export class MainTaskLogic {
  #CLASS_MAIN_TASK = ".todo__main__task";
  constructor(todoMain) {
    this.todoMain = todoMain;
    this.dataStorage = todoMain.dataStorage;
  }

  addTask(task) {
    this.todoMain.$content.innerHTML += task;
  }

  doneTask($btn) {
    const $task = $btn.closest(this.#CLASS_MAIN_TASK);
    const id = $task.dataset.id;

    this.dataStorage.deleteTask(id);
    $task.remove();
  }

  toFavorite($btn) {
    const $task = $btn.closest(this.#CLASS_MAIN_TASK);
    const id = $task.dataset.id;

    this.dataStorage.changeFavorite(id, $btn);
  }
}
