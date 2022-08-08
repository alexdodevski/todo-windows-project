import { TodoComponent } from "../../core/TodoComponent";
import { ScrollLogic } from "./ScrollLogic";

export class Scrollbar extends TodoComponent {
  static className = "scrollbar";
  constructor($root, options) {
    super($root, {
      name: "Scrollbar",
      listeners: ["mousedown"],
      ...options,
    });
    this.scrollLogic = new ScrollLogic(this.$root, this.$todo);
  }

  prepare() {
    this.subscribeEvents();
  }

  subscribeEvents() {
    this.subscribeOnEvent("main:scroll create", (height, ratio) =>
      this.scrollLogic.initScroller(height, ratio)
    );

    this.subscribeOnEvent("main:scroll content", (y) =>
      this.scrollLogic.moveScroll(y)
    );
  }

  onMousedown(e) {
    if (e.target.closest(".scroller")) {
      e.preventDefault();

      const emitScrollContent = this.emitEvent.bind(
        this,
        "scrollbar:scroll content"
      );
      this.scrollLogic.scrollStart(e, emitScrollContent);
    }
  }

  toHTML() {
    return this.scrollLogic.getScroller();
  }
}
