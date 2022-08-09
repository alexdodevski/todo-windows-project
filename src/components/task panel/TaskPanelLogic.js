export class TaskPanelLogic {
  #PLACEHOLDER_TEXT = "Добавить задачу";
  constructor($root, $todo) {
    this.$taskPanel = $root;
    this.$todo = $todo;
  }

  init() {
    this.taskText = this.$taskPanel.querySelector(".task__text");
  }

  blurPanel($target) {
    if ($target.closest(".task__text")) {
      const targetText = $target.textContent;
      if (
        targetText.trim().length === 0 ||
        targetText.trim() === this.#PLACEHOLDER_TEXT
      ) {
        console.log("added placeholder");
        $target.textContent = this.#PLACEHOLDER_TEXT;
      }
    }
  }

  hidePlaceHolder($target) {
    if ($target.closest(".todo__task_panel")) {
      this.taskText.textContent.trim() === this.#PLACEHOLDER_TEXT
        ? (this.taskText.textContent = "")
        : null;

      this.taskText.focus();
    }
  }

  taskDone(e) {
    const keys = ["Enter", "Tab"];
    const key = e.key;
    if (keys.includes(key)) {
      e.preventDefault();
    }
  }
}
