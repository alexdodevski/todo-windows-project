import { DOMutils } from "../../core/dom.utils";

export class Todo {
  #CLASS_NAME = "todo";
  constructor(selector, options) {
    this.$app = document.querySelector(selector);
    this.components = options.components || [];
  }

  initComponent(Component) {
    const $el = DOMutils.create("div", Component.className);
    const component = new Component($el);

    DOMutils.addHTML(component.$root, component.toHTML());
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
