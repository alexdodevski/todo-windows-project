import { DOMutils } from "../../core/dom.utils";

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
    const id = DOMutils.getIdTask($task);

    this.dataStorage.deleteTask(id);
    $task.remove();
  }

  toFavorite($btn) {
    const $task = $btn.closest(this.#CLASS_MAIN_TASK);
    const id = DOMutils.getIdTask($task);

    this.dataStorage.changeFavoriteTask(id, $btn);
  }

  changeTaskText($todo, enter = false) {
    const $task = $todo.closest(this.#CLASS_MAIN_TASK);
    const id = DOMutils.getIdTask($task);
    const text = DOMutils.getText($todo);

    this.dataStorage.changeTextTask(id, text);
    enter ? $todo.blur() : "";
  }

  toggleFocus($text) {
    const $task = $text.closest(this.#CLASS_MAIN_TASK);
    $task.classList.toggle("focus_bg");
  }
}
