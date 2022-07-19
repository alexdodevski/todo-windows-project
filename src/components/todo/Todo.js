import { DOMutils } from "../../core/dom.utils";

export class Todo {
  #CLASS_NAME = "todo";
  constructor(selector, options) {
    this.$app = document.querySelector(selector);
    this.components = options.components || [];
  }

  initComponent(Component, root) {
    const $elComponent = DOMutils.create("div", Component.className);
    const component = new Component($elComponent);

    DOMutils.addHTML($elComponent, component.toHTML());
    root.append($elComponent);

    return component;
  }

  getRoot() {
    const $root = DOMutils.create("div", this.#CLASS_NAME);

    this.components = this.components.map((Component) => {
      return this.initComponent(Component, $root);
    });

    return $root;
  }

  render() {
    this.$app.append(this.getRoot());
    this.components.forEach((component) => component.init());
  }
}
