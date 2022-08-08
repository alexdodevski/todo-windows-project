import { DomListener } from "./DomListener";

export class TodoComponent extends DomListener {
  constructor($root, options) {
    super($root, options.listeners);
    this.name = options.name;
    this.emitter = options.emitter;
    this.$todo = options.$todo;
    this.subs = {};
  }

  prepare() {}

  toHTML() {
    return ``;
  }

  emitEvent(event, ...data) {
    this.emitter.emit(event, ...data);
  }

  subscribeOnEvent(event, fn) {
    this.subs[event] = fn;
    this.emitter.subscribe(event, fn);
  }

  unsubscribeEvents() {
    for (const [event, fn] of Object.entries(this.subs)) {
      this.emitter.unsubscribe(event, fn);
    }
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
  }
}
