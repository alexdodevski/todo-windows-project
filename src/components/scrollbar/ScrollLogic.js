export class ScrollLogic {
  #SCROLLER_HEIGHT_MIN = 25;
  #CLASS_NAME = "scroller";

  constructor(todoScrollbar) {
    this.$scrollbar = todoScrollbar.$root;
    this.$todo = todoScrollbar.$todo;
    this.todoScrollbar = todoScrollbar;
  }

  _showScrollbar() {
    this.$scrollbar.style.display = "block";
  }

  createScroller(height = this.#SCROLLER_HEIGHT_MIN, ratio) {
    this._showScrollbar();
    this.ratio = ratio;
    this.$scroller = this.$scrollbar.querySelector(`.${this.#CLASS_NAME}`);

    if (height <= this.#SCROLLER_HEIGHT_MIN && height !== 0) {
      height = this.#SCROLLER_HEIGHT_MIN;
    }

    this.$scroller.style.height = height + "px";
  }

  getScroller() {
    return `<div class="${this.#CLASS_NAME}"></div>`;
  }

  moveScroll(y) {
    this.$scroller.style.top = y + "px";
  }

  scrollStart(e, emit) {
    const scrollerTop = this.$scroller.getBoundingClientRect().top;
    const scrollbarTop = this.$scrollbar.getBoundingClientRect().top;

    let shiftY = e.clientY - scrollerTop;

    document.onmousemove = (e) => {
      const shiftScroller = e.clientY - shiftY - scrollbarTop;
      this.moveScroll(shiftScroller);

      const shiftContent = this.$scroller.offsetTop / this.ratio;

      const totalheightScroller =
        this.$scroller.offsetHeight + this.$scroller.offsetTop;

      const maxOffsetScroller =
        this.$todo.offsetHeight - this.$scroller.offsetHeight;

      if (this.$scroller.offsetTop < 0) this.moveScroll(0);

      if (totalheightScroller >= this.$todo.offsetHeight) {
        this.moveScroll(maxOffsetScroller);
      }

      emit(shiftContent);
    };

    document.onmouseup = function () {
      document.onmousemove = null;
      document.onmouseup = null;
    };
  }
}
