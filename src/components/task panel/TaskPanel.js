import { TodoComponent } from "../../core/TodoComponent";
import { TaskPanelLogic } from "./TaskPanelLogic";

export class TaskPanel extends TodoComponent {
  static className = "todo__task_panel";
  constructor($root, options) {
    super($root, {
      name: "TaskPanel",
      listeners: ["click", "blur", "keydown"],
      ...options,
    });
  }

  prepare() {
    this.logic = new TaskPanelLogic(this.$root, this.$todo);
  }

  init() {
    super.init();
    this.logic.init();
  }
  toHTML() {
    return `<div class="task__done"></div>
      <div class="create__btn">
        <div class="plus"></div>
      </div>
      <div class="task__text" spellcheck="false" contenteditable="">
      Добавить задачу
      </div>`;
  }

  onClick(e) {
    this.logic.hidePlaceHolder(e.target);
  }

  onBlur(e) {
    this.logic.blurPanel(e.target);
  }

  onKeydown(e) {
    this.logic.taskDone(e);
  }
}
