export class MainScrollLogic {
  constructor($main, $todo) {
    this.$main = $main;
    this.$todo = $todo;
  }

  init() {
    this.$content = this.$main.querySelector(".todo__main__content_tasks");
    this.$contentBox = this.$main.querySelector(".todo__main__content_box");

    this.mainHeight = this.$main.offsetHeight;
    this.todoHeight = this.$todo.offsetHeight;
    this.contentHeight = this.$content.scrollHeight;

    if (this.contentHeight <= this.mainHeight) return;

    this.max = this.mainHeight - this.contentHeight;
    this.ratio = this.todoHeight / this.contentHeight;
  }

  getYscroll() {
    return this.$contentBox.scrollTop * this.ratio;
  }

  scrollContent(y) {
    this.$contentBox.scrollTo(0, y);
  }
}
