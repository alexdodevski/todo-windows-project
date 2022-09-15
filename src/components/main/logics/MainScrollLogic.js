export class MainScrollLogic {
  constructor(todoMain) {
    this.$main = todoMain.$root;
    this.$todo = todoMain.$todo;
    this.mainComponent = todoMain;
  }

  initHeight() {
    this.mainHeight = this.$main.offsetHeight;
    this.todoHeight = this.$todo.offsetHeight;
  }

  getYscroll() {
    return this.mainComponent.$contentBox.scrollTop * this.ratio;
  }

  scrollContent(y) {
    this.mainComponent.$contentBox.scrollTo(0, y);
  }

  initScroller(createScoller) {
    this.contentHeight = this.mainComponent.$content.scrollHeight;

    if (this.contentHeight <= this.mainHeight) {
      createScoller(0, this.ratio);
      return;
    }

    // важно
    this.ratio = this.todoHeight / this.contentHeight;
    const scrollerHeight = this.ratio * this.mainHeight - 5;

    createScoller(scrollerHeight, this.ratio);
  }
}
