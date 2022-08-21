import { TaskStorage } from "../../core/DataStorage/TaskStorage";
import { ThemesStorage } from "../../core/DataStorage/ThemesStorage";
import { DOMutils } from "../../core/dom.utils";
import { Emitter } from "../../core/Emitter";

export class Todo {
  #CLASS_NAME = "todo";
  constructor(selector, options) {
    this.$app = document.querySelector(selector);
    this.components = options.components || [];
    this.emitter = new Emitter();
    this.taskStorage = new TaskStorage();
    this.themesStorage = new ThemesStorage();
  }

  initComponent(Component) {
    const $el = DOMutils.create("div", Component.className);
    const componentOptions = {
      emitter: this.emitter,
      $todo: this.$todo,
      taskStorage: this.taskStorage,
      themeStorage: this.themesStorage,
    };

    const component = new Component($el, componentOptions);

    DOMutils.addHTML(component.$root, component.toHTML());
    component.prepare();
    this.$todo.append(component.$root);

    return component;
  }

  initTodo() {
    this.$todo = DOMutils.create("div", this.#CLASS_NAME);

    this.components = this.components.map((Component) => {
      return this.initComponent(Component);
    });
  }

  render() {
    this.initTodo();
    this.$app.append(this.$todo);
    this.components.forEach((component) => component.init());
  }
}
