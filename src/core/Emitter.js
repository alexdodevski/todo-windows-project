export class Emitter {
  constructor() {
    this.listeners = {};
  }

  emit(event, ...args) {
    if (this.listeners[event].size != 0) {
      this.listeners[event].forEach((fn) => {
        fn(...args);
      });
    }
  }
  subscribe(event, fn) {
    this.listeners[event] = this.listeners[event] || new Set();
    this.listeners[event].add(fn);
  }
  unsubscribe(event, fn) {
    if (this.listeners[event].has(fn)) {
      this.listeners[event].delete(fn);
    }
  }
}
