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
            <p class="todo__header__date">пятница, 8 июля</p>
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
      console.log(e.target);
      this.emitEvent("header:show themes");
    }

    if (e.target.closest(".btn-favorite")) {
      console.log(e.target);
      this.emitEvent("header:show favorites");
    }
  }
}
