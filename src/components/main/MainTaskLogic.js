export class MainTaskLogic {
  constructor(todoMain) {
    this.todoMain = todoMain;
  }

  addTask(task) {
    this.todoMain.$content.innerHTML += task;
  }
}
