import { DOMutils } from "./dom.utils";

export function createComponent(options, Component) {
  const $el = DOMutils.create("div", Component.className);
  const component = new Component($el, options);

  DOMutils.addHTML(component.$root, component.toHTML());
  component.prepare();

  return component;
}

console.log("for git");
