import { DOMutils } from "../../core/dom.utils";
import { TodoComponent } from "../../core/TodoComponent";
import { createFavoriteTask } from "./favorite.template";
import { FavoritesLogic } from "./FavoritesLogic";

export class Favorites extends TodoComponent {
  static className = "task__favorite";
  constructor($root, options) {
    super($root, {
      name: "Favorites",
      listeners: ["click"],
      ...options,
    });
  }

  init() {
    super.init();
    this.$content = this.$root.querySelector(".task__favorite_tasks");
    console.log(this.$content);
  }

  prepare() {
    this.logic = new FavoritesLogic(this);
    this.subEvents();
  }

  subEvents() {
    this.subscribeOnEvent("header:show favorites", () => {
      this.$root.style.display = "block";
      setTimeout(() => {
        DOMutils.toogleClass(this.$root, "opened");
        this.logic.watchClick();
      }, 0);
    });

    this.subscribeOnEvent("main:favorite done", (id) => {
      this.logic.removeFavorite(id);
    });

    this.subscribeOnEvent("main:add favorite", (id) => {
      this.logic.checkFavorite(id);
    });

    this.subscribeOnEvent("main:change text favorite", (id) => {
      this.logic.changeText(id);
    });
  }

  onClick(e) {
    const $target = e.target;

    if ($target.closest(".todo_close_btn")) {
      DOMutils.toogleClass(this.$root, "opened");
      document.onclick = null;
      setTimeout(() => (this.$root.style.display = "none"), 300);
    }

    if ($target.closest(".task__done")) {
      const unfavorite = this.emitEvent.bind(this, "favorites:remove favorite");
      this.logic.doneFavorite($target, unfavorite);
    }
  }
  toHTML() {
    return `      <h1 class="task__favorite_header">
            Избранное
            <div class="todo_close_btn">
              <div class="close_btn_item"></div>
            </div>
          </h1>
          <div class="task__favorite_tasks">
             ${this.taskStorage
               .getDataTasks()
               .map((task) => {
                 if (task.favorite) return createFavoriteTask(task);
               })
               .join("")}
            
          </div>`;
  }
}
