import { DOMutils } from "../../core/dom.utils";

export class MainTaskLogic {
  #CLASS_MAIN_TASK = ".todo__main__task";
  constructor(todoMain) {
    this.todoMain = todoMain;
    this.taskStorage = todoMain.taskStorage;
  }

  addTask(task) {
    this.todoMain.$content.innerHTML += task;
  }

  doneTask($btn) {
    const $task = $btn.closest(this.#CLASS_MAIN_TASK);
    const id = DOMutils.getIdTask($task);

    this.taskStorage.deleteTask(id);
    $task.remove();
  }

  toFavorite($btn) {
    const $task = $btn.closest(this.#CLASS_MAIN_TASK);
    const id = DOMutils.getIdTask($task);

    this.taskStorage.changeFavoriteTask(id, $btn);
  }

  changeTaskText($todo, enter = false) {
    const $task = $todo.closest(this.#CLASS_MAIN_TASK);
    const id = DOMutils.getIdTask($task);
    const text = DOMutils.getText($todo);

    this.taskStorage.changeTextTask(id, text);
    enter ? $todo.blur() : "";
  }

  toggleFocus($text) {
    const $task = $text.closest(this.#CLASS_MAIN_TASK);
    DOMutils.toogleClass($task, "focus_bg");
  }
}
