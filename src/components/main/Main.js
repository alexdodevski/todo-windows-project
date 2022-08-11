import { createTask } from "../../core/create.task";
import { TodoComponent } from "../../core/TodoComponent";
import { MainScrollLogic } from "./MainScrollLogic";

export class Main extends TodoComponent {
  static className = "todo__main";
  constructor($root, options) {
    super($root, {
      name: "Main",
      listeners: ["scroll"],
      ...options,
    });
  }

  init() {
    super.init();
    this.logicScroll.init();
    this.$content = this.$root.querySelector(".todo__main__content_tasks");
    this.$contentBox = this.$root.querySelector(".todo__main__content_box");

    const emit = this.emitEvent.bind(this, "main:scroll create");
    this.logicScroll.initScroller(emit);
  }

  subEvents() {
    this.subscribeOnEvent("scrollbar:scroll content", (y) =>
      this.logicScroll.scrollContent(y)
    );
    this.subscribeOnEvent("taskpanel:add task", (task) => {
      this.logicScroll.addTask(task);
    });

    this.subscribeOnEvent("taskpanel:check scroll", () => {
      this.logicScroll.initScroller(
        this.emitEvent.bind(this, "main:scroll create")
      );
    });
  }

  prepare() {
    this.logicScroll = new MainScrollLogic(this);
    this.subEvents();
  }

  onScroll() {
    const scroll = this.logicScroll.getYscroll();
    this.emitEvent("main:scroll content", scroll);
  }

  toHTML() {
    return `
    <div class="todo__main__content_box">
      <div class="todo__main__content_tasks">
      ${this.dataStorage
        .getTasks()
        .map((option) => createTask(option))
        .join("")}
       </div>
     </div>`;
  }
}
