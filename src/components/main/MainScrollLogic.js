export class MainScrollLogic {
  constructor($main) {
    this.$main = $main;
  }

  init() {
    this.$content = this.$main.querySelector(".todo__main__content_tasks");
    this.mainHeight = this.$main.offsetHeight;
    this.contentHeight = this.$content.scrollHeight;

    if (this.contentHeight <= this.mainHeight) return;

    this.max = this.mainHeight - this.contentHeight;
    this.ratio = this.mainHeight / this.contentHeight;
  }
}
