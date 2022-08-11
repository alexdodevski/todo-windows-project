import { TodoComponent } from "../../core/TodoComponent";
import { ScrollLogic } from "./ScrollLogic";

export class Scrollbar extends TodoComponent {
  static className = "scrollbar";
  #CLASS_NAME_SCROLLER = "scroller";
  constructor($root, options) {
    super($root, {
      name: "Scrollbar",
      listeners: ["mousedown"],
      ...options,
    });
  }

  prepare() {
    this.logic = new ScrollLogic(this);
    this.subEvents();
  }

  subEvents() {
    this.subscribeOnEvent("main:scroll create", (height, ratio) =>
      this.logic.createScroller(height, ratio)
    );

    this.subscribeOnEvent("main:scroll content", (y) =>
      this.logic.moveScroll(y)
    );
  }

  onMousedown(e) {
    if (e.target.closest(".scroller")) {
      e.preventDefault();

      const emitScrollContent = this.emitEvent.bind(
        this,
        "scrollbar:scroll content"
      );
      this.logic.scrollerMove(e, emitScrollContent);
    }
  }

  toHTML() {
    return `<div class="${this.#CLASS_NAME_SCROLLER}"></div>`;
  }
}
