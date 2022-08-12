import { createDate } from "../../core/create.date";
import { createTask } from "../../core/create.task";
import { DOMutils } from "../../core/dom.utils";

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
      const $task = $target.closest(".todo__task_panel");
      const targetText = $target.textContent;
      if (
        targetText.trim().length === 0 ||
        targetText.trim() === this.#PLACEHOLDER_TEXT
      ) {
        $target.textContent = this.#PLACEHOLDER_TEXT;
        this.btnDone.style.display = "none";
        this.btnCreate.style.display = "flex";
        $task.classList.remove("focus_bg");
      }
    }
  }

  hidePlaceHolder($target) {
    if ($target.closest(".todo__task_panel")) {
      const $task = $target.closest(".todo__task_panel");
      this.taskText.textContent.trim() === this.#PLACEHOLDER_TEXT
        ? (this.taskText.textContent = "")
        : null;
      this.btnDone.style.display = "block";
      this.btnCreate.style.display = "none";
      this.taskText.focus();
      $task.classList.add("focus_bg");
    }
  }

  createNewTask(e, addTask, checkScroll) {
    const keys = ["Enter", "Tab"];
    const key = e.key;
    const text = DOMutils.getText(this.taskText);
    if (keys.includes(key)) {
      e.preventDefault();
    }

    if (key === keys[0] && text !== "" && text !== "Добавить задачу") {
      const date = new Date();
      const textDate = createDate(date);
      const id = +date;
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
