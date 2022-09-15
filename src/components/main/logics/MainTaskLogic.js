import { DOMutils } from "../../../core/dom.utils";

export class MainTaskLogic {
  #CLASS_MAIN_TASK = ".todo__main__task";
  constructor(todoMain) {
    this.todoMain = todoMain;
    this.taskStorage = todoMain.taskStorage;
  }

  addTask(task) {
    this.todoMain.$content.innerHTML += task;
  }

  doneTask($btn, removeFavorite) {
    const $task = $btn.closest(this.#CLASS_MAIN_TASK);
    const id = DOMutils.getIdTask($task);

    removeFavorite(id);
    this.taskStorage.deleteTask(id);
    $task.remove();
  }

  toFavorite($btn, checkFavorite) {
    const $task = $btn.closest(this.#CLASS_MAIN_TASK);
    const id = DOMutils.getIdTask($task);

    checkFavorite(id);
    DOMutils.toogleClass($btn, "selected");
    this.taskStorage.changeFavoriteTask(id);
  }

  changeTaskText($todo, enter = false) {
    const $task = $todo.closest(this.#CLASS_MAIN_TASK);
    const id = DOMutils.getIdTask($task);
    const text = DOMutils.getText($todo);

    this.taskStorage.changeTextTask(id, text);
    enter ? $todo.blur() : "";
    return id;
  }

  toggleFocus($text) {
    const $task = $text.closest(this.#CLASS_MAIN_TASK);
    DOMutils.toogleClass($task, "focus_bg");
  }

  unfavorite(id) {
    const $task = document.querySelector(`[data-id="${id}"]`);
    const $btn = $task.querySelector(".task__btn_favorite");

    DOMutils.toogleClass($btn, "selected");
    this.taskStorage.changeFavoriteTask(id);
  }
}
