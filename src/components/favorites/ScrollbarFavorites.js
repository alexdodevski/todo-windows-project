import { Scrollbar } from "../../core/Scrollbar/Scrollbar";

export class ScrollbarFavorites extends Scrollbar {
  static className = "scrollbar";
  constructor($root, options) {
    super($root, {
      favorite: true,
      ...options,
    });
  }

  onMousedown(e) {
    if (e.target.closest(".scroller")) {
      e.preventDefault();

      const emitScrollContent = this.emitEvent.bind(
        this,
        "scrollbar favorites:scroll content"
      );
      this.logic.scrollerMove(e, emitScrollContent);
    }
  }

  prepare() {
    super.prepare();
    this.$root.classList.add("favorite");
  }

  subEvents() {
    this.subscribeOnEvent("favorites:scroll create", (height, ratio) => {
      this.logic.createScroller(height, ratio, this.$root);
    });

    this.subscribeOnEvent("favorites:scroll content", (y) =>
      this.logic.moveScroll(y)
    );
  }
}
