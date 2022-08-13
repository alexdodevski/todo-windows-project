import { DOMutils } from "../../core/dom.utils";
import { TodoComponent } from "../../core/TodoComponent";
import { ThemesLogic } from "./ThemesLogic";

export class Themes extends TodoComponent {
  static className = "todo__themes";
  constructor($root, options) {
    super($root, {
      name: "Themes",
      listeners: ["click"],
      ...options,
    });
  }
  prepare() {
    this.logic = new ThemesLogic(this);
    this.subEvents();
  }
  subEvents() {
    this.subscribeOnEvent("header:show themes", () =>
      DOMutils.toogleClass(this.$root, "opened")
    );
  }

  onClick(e) {
    const $target = e.target;
    if ($target.closest(".todo_close_btn")) {
      DOMutils.toogleClass(this.$root, "opened");
    }
  }
  toHTML() {
    return `<h1 class="todo__themes_header">Выберите тему  
            <div class="todo_close_btn">
              <div class="close_btn_item"></div>
            </div></h1>
          <div class="todo__themes_items">
            <div class="themes_item selected"></div>
            <div class="themes_item"></div>
            <div class="themes_item"></div>
            </div>
            <div class="todo__themes_items">
              <div class="themes_item"></div>
              <div class="themes_item"></div>
              <div class="themes_item"></div>
            </div>
             <div class="todo__themes_items">
              <div class="themes_item"></div>
              <div class="themes_item"></div>
              <div class="themes_item"></div>
            </div>`;
  }
}
