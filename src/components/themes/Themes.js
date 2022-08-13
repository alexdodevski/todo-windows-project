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

    if ($target.closest(".themes_item")) {
      $target.closest(".themes_item");
    }
  }
  toHTML() {
    return `<h1 class="todo__themes_header">Выберите тему  
            <div class="todo_close_btn">
              <div class="close_btn_item"></div>
            </div></h1>
          <div class="todo__themes_items">
            <div class="themes_item selected">
            <img class="themes_img" src="https://i.ibb.co/LZcqprg/todo-1.jpg">
            </div>
            <div class="themes_item">
            <img class="themes_img" src="https://i.ibb.co/52zmtD0/todo-2.jpg"></div>
            <div class="themes_item">
            <img class="themes_img" src="https://i.ibb.co/5FKpGBL/todo-3.jpg">
            </div>
            </div>
            <div class="todo__themes_items">
              <div class="themes_item">
              <img class="themes_img" src="https://i.ibb.co/PMFwkPQ/todo-4.jpg"></div>
              <div class="themes_item">
              <img class="themes_img" src="https://i.ibb.co/QJ3r86T/todo-5.jpg"></div>
              <div class="themes_item">
              <img class="themes_img" src="https://i.ibb.co/QDhnszr/todo-6.jpg"></div>
            </div>
             <div class="todo__themes_items">
              <div class="themes_item">
              <img class="themes_img" src="https://i.ibb.co/gzmJT6G/2022-08-13-19-01-02.png"></div>
              <div class="themes_item"><img class="themes_img" src="https://catherineasquithgallery.com/uploads/posts/2021-02/1614280269_53-p-chernii-fon-dlya-futazhei-68.jpg"></div>
              <div class="themes_item"><img class="themes_img" src="https://phonoteka.org/uploads/posts/2022-02/1643921603_3-phonoteka-org-p-korichnevie-doski-fon-4.jpg"></div>
            </div>`;
  }
}
