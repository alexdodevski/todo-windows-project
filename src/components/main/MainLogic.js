export class MainLogic {
  constructor($main, $todo) {
    this.$main = $main;
    this.$todo = $todo;
  }

  init() {
    this.$content = this.$main.querySelector(".todo__main__content_tasks");
    this.$contentBox = this.$main.querySelector(".todo__main__content_box");
    this.mainHeight = this.$main.offsetHeight;
    this.todoHeight = this.$todo.offsetHeight;
  }

  getYscroll() {
    return this.$contentBox.scrollTop * this.ratio;
  }

  scrollContent(y) {
    this.$contentBox.scrollTo(0, y);
  }

  addTask(task) {
    this.$content.innerHTML += task;
  }

  initScroller(emit) {
    this.contentHeight = this.$content.scrollHeight;
    if (this.contentHeight <= this.mainHeight) return;

    // важно
    this.ratio = this.todoHeight / this.contentHeight;
    const scrollerHeight = this.ratio * this.mainHeight - 5;

    emit(scrollerHeight, this.ratio);
  }
}
