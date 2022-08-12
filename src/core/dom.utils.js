export const DOMutils = {
  create(tagName, classes = null) {
    const $el = document.createElement(tagName);
    if (!classes) return $el;

    if (typeof classes === "string") {
      $el.classList.add(classes);
    } else if (Array.isArray(classes)) {
      classes.forEach((classItem) => $el.classList.add(classItem));
    }

    return $el;
  },

  addHTML(el, html) {
    el.innerHTML = html;
  },

  clearHTML(el) {
    this.addHTML(el, "");
  },

  getText(el) {
    return el.textContent;
  },

  getIdTask(el) {
    if (el.dataset.id) return el.dataset.id;
  },
};
