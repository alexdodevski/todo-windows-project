import { DOMutils } from "../../core/dom.utils";
import { TodoComponent } from "../../core/TodoComponent";
import { themesTemplate } from "./themes.template";
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

  init() {
    super.init();
    const selected = this.$root.querySelector(".selected");
    this.logic.select(selected);
  }

  subEvents() {
    this.subscribeOnEvent("header:show themes", () => {
      DOMutils.toogleClass(this.$root, "opened");
      this.logic.watchClick();
    });
  }

  onClick(e) {
    const $target = e.target;

    if ($target.closest(".todo_close_btn")) {
      DOMutils.toogleClass(this.$root, "opened");
      document.onclick = null;
    }

    if ($target.closest(".themes_item")) {
      this.logic.select($target.closest(".themes_item"));
    }
  }
  toHTML() {
    return `<h1 class="todo__themes_header">Выберите тему
        <div class="todo_close_btn">
          <div class="close_btn_item"></div>
         </div></h1>
         ${themesTemplate(this.themeStorage.getThemesData())}
        `;
  }
}
