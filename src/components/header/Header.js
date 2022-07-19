import { TodoComponent } from "../../core/TodoComponent";

export class Header extends TodoComponent {
  static className = "todo__header";
  constructor($root) {
    super($root, {
      name: "Header",
      listeners: ["click"],
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
    console.log(e.target);
  }
}
