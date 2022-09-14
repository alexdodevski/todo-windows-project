import { Scrollbar } from "../../core/Scrollbar/Scrollbar";

export class MainScrollbar extends Scrollbar {
  static className = "scrollbar";
  constructor($root, options) {
    super($root, {
      favorite: false,
      ...options,
    });
  }

  subEvents() {
    this.subscribeOnEvent("main:scroll create", (height, ratio) =>
      this.logic.createScroller(height, ratio, this.$todo)
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
        "scrollbar main:scroll content"
      );
      this.logic.scrollerMove(e, emitScrollContent);
    }
  }
}
