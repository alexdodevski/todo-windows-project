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

    this.dataStorage.changeFavorite(id, $btn);
  }

  changeTaskText($todo) {
    const $task = $todo.closest(this.#CLASS_MAIN_TASK);
    const id = DOMutils.getIdTask($task);
    const text = DOMutils.getText($todo);

    this.dataStorage.changeText(id, text);
    $todo.blur();
  }
}
