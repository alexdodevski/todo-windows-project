// import { createTask } from "../../core/create.task";
import { createTask } from "../../core/create.task";
import { TodoComponent } from "../../core/TodoComponent";
import { MainScrollLogic } from "./MainScrollLogic";
import { MainTaskLogic } from "./MainTaskLogic";

export class Main extends TodoComponent {
  static className = "todo__main";
  constructor($root, options) {
    super($root, {
      name: "Main",
      listeners: ["scroll", "click", "keydown", "blur"],
      ...options,
    });
  }

  init() {
    super.init();
    this.logicScroll.initHeight();

    this.$content = this.$root.querySelector(".todo__main__content_tasks");
    this.$contentBox = this.$root.querySelector(".todo__main__content_box");

    const emit = this.emitEvent.bind(this, "main:scroll create");
    this.logicScroll.initScroller(emit);
  }

  prepare() {
    this.logicScroll = new MainScrollLogic(this);
    this.logicTask = new MainTaskLogic(this);
    this.subEvents();
  }

  subEvents() {
    this.subscribeOnEvent("scrollbar:scroll content", (y) =>
      this.logicScroll.scrollContent(y)
    );
    this.subscribeOnEvent("taskpanel:add task", (task) => {
      this.logicTask.addTask(task);
    });

    this.subscribeOnEvent("taskpanel:check scroll", () => {
      this.logicScroll.initScroller(
        this.emitEvent.bind(this, "main:scroll create")
      );
    });
  }

  onScroll() {
    const scroll = this.logicScroll.getYscroll();
    this.emitEvent("main:scroll content", scroll);
  }

  onClick(e) {
    const $target = e.target;
    if ($target.closest(".task__done")) {
      this.logicTask.doneTask($target);
      const createScoller = this.emitEvent.bind(this, "main:scroll create");
      this.logicScroll.initScroller(createScoller);
    }

    if ($target.closest(".task__btn_favorite")) {
      const $btnFavorite = $target.closest(".task__btn_favorite");
      this.logicTask.toFavorite($btnFavorite);
    }

    if ($target.closest(".task__text")) {
      this.logicTask.toggleFocus($target);
    }
  }

  onKeydown(e) {
    const enter = e.key === "Enter";
    const $target = e.target;

    if (enter || e.key === "Tab") e.preventDefault();

    if ($target.closest(".task__text")) {
      this.logicTask.changeTaskText($target, enter);
    }
  }

  onBlur(e) {
    const $target = e.target;
    if ($target.closest(".task__text")) {
      this.logicTask.changeTaskText($target);
      this.logicTask.toggleFocus($target);
    }
  }

  toHTML() {
    return `
    <div class="todo__main__content_box">
      <div class="todo__main__content_tasks">
        ${this.taskStorage
          .getDataTasks()
          .map((task) => createTask(task))
          .join("")}
       </div>
     </div>`;
  }
}
