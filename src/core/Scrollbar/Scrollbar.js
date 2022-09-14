import { TodoComponent } from "../TodoComponent";
import { ScrollbarLogic } from "./ScrollbarLogic";

export class Scrollbar extends TodoComponent {
  #SCROLLER_CLASSNAME = "scroller";
  constructor($root, options) {
    super($root, {
      name: "Scrollbar",
      listeners: ["mousedown"],
      ...options,
    });
    this.favorite = options.favorite;
  }

  prepare() {
    this.logic = new ScrollbarLogic(this);
    this.subEvents();
  }

  subEvents() {}

  toHTML() {
    return `<div class="${this.#SCROLLER_CLASSNAME} ${
      this.favorite ? "favorite" : " "
    }"></div>`;
  }
}
