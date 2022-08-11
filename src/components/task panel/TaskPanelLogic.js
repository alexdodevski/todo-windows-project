import { createDate } from "../../core/create.date";
import { createTask } from "../../core/create.task";

export class TaskPanelLogic {
  #PLACEHOLDER_TEXT = "Добавить задачу";
  constructor(todoTaskPanel) {
    this.$taskPanel = todoTaskPanel.$root;
    this.$todo = todoTaskPanel.$todo;
    this.dataStorage = todoTaskPanel.dataStorage;
  }

  init() {
    this.taskText = this.$taskPanel.querySelector(".task__text");
    this.btnDone = this.$taskPanel.querySelector(".task__done");
    this.btnCreate = this.$taskPanel.querySelector(".create__btn");
  }

  blurPanel($target) {
    if ($target.closest(".task__text")) {
      const targetText = $target.textContent;
      if (
        targetText.trim().length === 0 ||
        targetText.trim() === this.#PLACEHOLDER_TEXT
      ) {
        $target.textContent = this.#PLACEHOLDER_TEXT;
        this.btnDone.style.display = "none";
        this.btnCreate.style.display = "flex";
      }
    }
  }

  hidePlaceHolder($target) {
    if ($target.closest(".todo__task_panel")) {
      this.taskText.textContent.trim() === this.#PLACEHOLDER_TEXT
        ? (this.taskText.textContent = "")
        : null;
      this.btnDone.style.display = "block";
      this.btnCreate.style.display = "none";
      this.taskText.focus();
    }
  }

  createNewTask(e, addTask, checkScroll) {
    const keys = ["Enter", "Tab"];
    const key = e.key;
    if (keys.includes(key)) {
      e.preventDefault();
    }

    if (key === keys[0] && this.taskText.textContent.trim() !== "") {
      const date = new Date();
      const textDate = createDate(date);
      const id = +date;
      const text = this.taskText.textContent.trim();
      const options = {
        text: text,
        date: textDate,
        favorite: false,
        id: id,
      };

      const task = createTask(options);
      this.dataStorage.saveTask(options);
      addTask(task);
      checkScroll();

      this.taskText.textContent = "";
    }
  }
}
