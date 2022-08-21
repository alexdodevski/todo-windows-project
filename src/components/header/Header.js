import { createDate } from "../../core/create.date";
import { TodoComponent } from "../../core/TodoComponent";

export class Header extends TodoComponent {
  static className = "todo__header";
  constructor($root, options) {
    super($root, {
      name: "Header",
      listeners: ["click"],
      ...options,
    });
  }
  toHTML() {
    return `<div class="todo__header__block">
            <h1>Мой день</h1>
            <p class="todo__header__date">${createDate(new Date(), true)}</p>
          </div>
          <div class="todo__header__btns">
            <div class="btn-favorite">
              <span class="material-symbols-outlined favorite"> star </span>
            </div>
            <div class="btn-theme">
              <span class="change_btn"></span>
            </div>
          </div>`;
  }

  onClick(e) {
    if (e.target.closest(".btn-theme")) {
      this.emitEvent("header:show themes");
    }

    if (e.target.closest(".btn-favorite")) {
      this.emitEvent("header:show favorites");
    }
  }
}
