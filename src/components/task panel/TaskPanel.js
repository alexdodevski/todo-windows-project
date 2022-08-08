import { TodoComponent } from "../../core/TodoComponent";

export class TaskPanel extends TodoComponent {
  static className = "todo__task_panel";
  constructor($root, options) {
    super($root, {
      name: "TaskPanel",
      listeners: [],
      ...options,
    });
  }
  toHTML() {
    return `<div class="task__done"></div>
      <div class="create__btn">
        <div class="plus"></div>
      </div>
      <div class="task__text" spellcheck="false" contenteditable="">
        <p>Добавить задачу</p>
      </div>`;
  }
}
