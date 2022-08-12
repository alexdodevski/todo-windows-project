import { TodoComponent } from "../../core/TodoComponent";
import { TaskPanelLogic } from "./TaskPanelLogic";

export class TaskPanel extends TodoComponent {
  static className = "todo__task_panel";
  constructor($root, options) {
    super($root, {
      name: "TaskPanel",
      listeners: ["click", "blur", "keydown", "mousedown"],
      ...options,
    });
  }

  prepare() {
    this.logic = new TaskPanelLogic(this);
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

  onMousedown(e) {
    this.logic.focusPanel(e.target);
  }

  onBlur(e) {
    this.logic.blurPanel(e.target);
  }

  onKeydown(e) {
    const addTask = this.emitEvent.bind(this, "taskpanel:add task");
    const checkScroll = this.emitEvent.bind(this, "taskpanel:check scroll");
    this.logic.createNewTask(e, addTask, checkScroll);
  }
}
