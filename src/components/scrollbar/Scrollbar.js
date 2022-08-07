import { TodoComponent } from "../../core/TodoComponent";
import { ScrollLogic } from "./ScrollLogic";

export class Scrollbar extends TodoComponent {
  static className = "scrollbar";
  constructor($root, options) {
    super($root, {
      name: "Scrollbar",
      listeners: ["click"],
      ...options,
    });
  }
  prepare() {
    this.scrollLogic = new ScrollLogic(this.$root);
    this.subscribeEvents();
  }

  subscribeEvents() {
    this.subscribeOnEvent("main:scroll create", this.scrollLogic.initScroller);
  }

  init() {
    super.init();
  }

  onClick(e) {
    if (e.target.closest(".scroller")) console.log(e.target);
  }

  toHTML() {
    return this.scrollLogic.getScroller();
  }
}
