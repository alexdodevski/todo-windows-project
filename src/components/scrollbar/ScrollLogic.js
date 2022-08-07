export class ScrollLogic {
  #SCROLLER_HEIGHT_MIN = 25;
  #CLASS_NAME = "scroller";
  constructor($scrollbar, $todo) {
    this.$scrollbar = $scrollbar;
    this.$todo = $todo;
  }

  _showScrollbar() {
    this.$scrollbar.style.display = "block";
  }

  initScroller(height, ratio) {
    this._showScrollbar();
    this.ratio = ratio;
    this.$scroller = this.$scrollbar.querySelector(`.${this.#CLASS_NAME}`);
    if (height <= this.#SCROLLER_HEIGHT_MIN) height = this.#SCROLLER_HEIGHT_MIN;
    this.$scroller.style.height = height + "px";
  }

  getScroller() {
    return `<div class="${this.#CLASS_NAME}"></div>`;
  }

  moveScroll(top) {
    this.$scroller.style.top = top + "px";
  }

  dropScroll(start, fn) {
    document.onmousemove = (e) => {
      this.shiftScroller = start - e.clientY;

      this.$scroller.style.top = -this.shiftScroller + "px";

      this.shiftContent = this.$scroller.offsetTop / this.ratio;

      const totalheightScroller =
        this.$scroller.offsetHeight + this.$scroller.offsetTop;

      const maxOffsetScroller =
        this.$todo.offsetHeight - this.$scroller.offsetHeight;

      if (this.$scroller.offsetTop < 0) this.moveScroll(0);

      if (totalheightScroller >= this.$todo.offsetHeight) {
        this.moveScroll(maxOffsetScroller);
      }

      fn(this.shiftContent);
      this.start = e.clientY;
    };
    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  }
}
