import { createComponent } from "../../core/create.component";
import { createTask } from "../../core/create.task";
import { TodoComponent } from "../../core/TodoComponent";
import { MainScrollLogic } from "./logics/MainScrollLogic";
import { MainTaskLogic } from "./logics/MainTaskLogic";
import { ScrollbarMain } from "./ScrollbarMain";

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
    this.createScollbar();

    const emit = this.emitEvent.bind(this, "main:scroll create");
    this.logicScroll.initScroller(emit);
  }

  prepare() {
    this.logicScroll = new MainScrollLogic(this);
    this.logicTask = new MainTaskLogic(this);
    this.subEvents();
  }

  subEvents() {
    this.subscribeOnEvent("scrollbar main:scroll content", (y) =>
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

    this.subscribeOnEvent("favorites:remove favorite", (id) => {
      this.logicTask.unfavorite(id);
    });
  }

  onScroll() {
    const scroll = this.logicScroll.getYscroll();
    this.emitEvent("main:scroll content", scroll);
  }

  onClick(e) {
    const $target = e.target;
    if ($target.closest(".task__done")) {
      const removeFavorite = this.emitEvent.bind(this, "main:favorite done");
      this.logicTask.doneTask($target, removeFavorite);

      const createScoller = this.emitEvent.bind(this, "main:scroll create");
      this.logicScroll.initScroller(createScoller);

      this.emitEvent("main -> favorite:scroll create");
    }

    if ($target.closest(".task__btn_favorite")) {
      const $btnFavorite = $target.closest(".task__btn_favorite");
      const checkFavorite = this.emitEvent.bind(this, "main:add favorite");

      this.logicTask.toFavorite($btnFavorite, checkFavorite);
      this.emitEvent("main -> favorite:scroll create");
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
      const id = this.logicTask.changeTaskText($target, enter);
      this.emitEvent("main:change text favorite", id);

      const createScoller = this.emitEvent.bind(this, "main:scroll create");
      this.logicScroll.initScroller(createScoller);
      this.emitEvent("main -> favorite:scroll create");
    }
  }

  onBlur(e) {
    const $target = e.target;
    if ($target.closest(".task__text")) {
      const id = this.logicTask.changeTaskText($target);
      this.emitEvent("main:change text favorite", id);

      this.logicTask.toggleFocus($target);
      const createScoller = this.emitEvent.bind(this, "main:scroll create");
      this.logicScroll.initScroller(createScoller);
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

  createScollbar() {
    const options = {
      emitter: this.emitter,
      $todo: this.$todo,
      taskStorage: this.taskStorage,
      themeStorage: this.themesStorage,
    };

    this.$scrollbar = createComponent(options, ScrollbarMain);
    this.$todo.append(this.$scrollbar.$root);
    this.$scrollbar.init();
  }
}
