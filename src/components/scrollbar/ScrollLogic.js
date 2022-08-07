export class ScrollLogic {
  #SCROLLER_HEIGHT_MIN = 25;
  #CLASS_NAME = "scroller";
  constructor($scrollbar) {
    this.$scrollbar = $scrollbar;
    this.initScroller = this.initScroller.bind(this);
  }

  _showScrollbar() {
    this.$scrollbar.style.display = "block";
  }

  initScroller(height) {
    this._showScrollbar();
    this.$scroller = this.$scrollbar.querySelector(`.${this.#CLASS_NAME}`);
    this.$scroller.style.height = height + "px";
  }

  getScroller() {
    return `<div class="${this.#CLASS_NAME}"></div>`;
  }
}
