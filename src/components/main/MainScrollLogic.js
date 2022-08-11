export class MainScrollLogic {
  constructor(todoMain) {
    this.$main = todoMain.$root;
    this.$todo = todoMain.$todo;
    this.todoMain = todoMain;
  }

  initHeight() {
    this.mainHeight = this.$main.offsetHeight;
    this.todoHeight = this.$todo.offsetHeight;
  }

  getYscroll() {
    return this.todoMain.$contentBox.scrollTop * this.ratio;
  }

  scrollContent(y) {
    this.todoMain.$contentBox.scrollTo(0, y);
  }

  initScroller(emit) {
    this.contentHeight = this.todoMain.$content.scrollHeight;
    if (this.contentHeight <= this.mainHeight) return;

    // важно
    this.ratio = this.todoHeight / this.contentHeight;
    const scrollerHeight = this.ratio * this.mainHeight - 5;

    emit(scrollerHeight, this.ratio);
  }
}
