import { createComponent } from "../../core/create.component";
import { DOMutils } from "../../core/dom.utils";
import { TodoComponent } from "../../core/TodoComponent";
import { createFavoriteTask } from "./favorite.template";
import { FavoritesLogic } from "./logics/FavoritesLogic";
import { FavoritesScrollLogic } from "./logics/FavoritesScrollLogic";
import { ScrollbarFavorites } from "./ScrollbarFavorites";

export class Favorites extends TodoComponent {
  static className = "task__favorite";
  constructor($root, options) {
    super($root, {
      name: "Favorites",
      listeners: ["click", "scroll"],
      ...options,
    });
  }

  init() {
    super.init();
    this.logicScroll.initHeight();

    this.$example = this.$root.querySelector(".task__favorite_tasks");
    this.$content = this.$root.querySelector(".task__favorite_content");
    this.$viewport = this.$root.querySelector(".task__favorite_viewport");
    this.$tasks = this.$root.querySelector(".task__favorite_content-list");

    this.createScollbar();
    this.checkScroller();
  }

  prepare() {
    this.logicFavorite = new FavoritesLogic(this);
    this.logicScroll = new FavoritesScrollLogic(this);
    this.subEvents();
  }

  subEvents() {
    this.subscribeOnEvent("header:show favorites", () => {
      DOMutils.toogleClass(this.$root, "opened");
    });

    this.subscribeOnEvent("main:favorite done", (id) => {
      this.logicFavorite.removeFavorite(id);
    });

    this.subscribeOnEvent("main:add favorite", (id) => {
      this.logicFavorite.checkFavorite(id);
    });

    this.subscribeOnEvent("main:change text favorite", (id) => {
      this.logicFavorite.changeText(id);
    });
    this.subscribeOnEvent("scrollbar favorites:scroll content", (y) =>
      this.logicScroll.scrollContent(y)
    );

    this.subscribeOnEvent("main -> favorite:scroll create", () => {
      this.checkScroller();
    });
  }

  onClick(e) {
    const $target = e.target;

    if ($target.closest(".todo_close_btn")) {
      DOMutils.toogleClass(this.$root, "opened");
      document.onclick = null;
    }

    if ($target.closest(".task__done")) {
      const unfavorite = this.emitEvent.bind(this, "favorites:remove favorite");
      this.logicFavorite.doneFavorite($target, unfavorite);

      this.checkScroller();
    }
  }

  checkScroller() {
    const emit = this.emitEvent.bind(this, "favorites:scroll create");
    this.$content = this.$root.querySelector(".task__favorite_content");

    this.logicScroll.initScroller(emit);
  }
  toHTML() {
    return `<h1 class="task__favorite_header">
                    Избранное
                <div class="todo_close_btn">
                    <div class="close_btn_item"></div>
                </div>
            </h1>
          <div class="task__favorite_tasks">
          <div class="task__favorite_viewport">
          <div class="task__favorite_content">
          <div class="task__favorite_content-list">
             ${this.taskStorage
               .getDataTasks()
               .map((task) => {
                 if (task.favorite) return createFavoriteTask(task);
               })
               .join("")}
          </div>
          </div>
          </div>
          </div>
          </div>`;
  }

  onScroll() {
    const scroll = this.logicScroll.getYscroll();
    this.emitEvent("favorites:scroll content", scroll);
  }

  createScollbar() {
    const options = {
      emitter: this.emitter,
      $todo: this.$todo,
      taskStorage: this.taskStorage,
      themeStorage: this.themesStorage,
    };

    this.$scrollbar = createComponent(options, ScrollbarFavorites);
    this.$example.append(this.$scrollbar.$root);
    this.$scrollbar.init();
  }
}
