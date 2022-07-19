import { TodoComponent } from "../../core/TodoComponent";

export class Themes extends TodoComponent {
  static className = "todo__themes";
  constructor($root) {
    super($root, {
      name: "Themes",
      listeners: [],
    });
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
