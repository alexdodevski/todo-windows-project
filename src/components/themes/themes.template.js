export function themesTemplate(options) {
  const themes = [];
  for (let i = 0; i < 3; i++) {
    themes.push(themeBlock(options[i]));
  }

  return themes.join("");
}

function themeBlock(...args) {
  return ` <div class="todo__themes_items">
            ${themeItem(...args)}
            </div>`;
}

function themeItem(...args) {
  return new Array(3)
    .fill("")
    .map(createItem(...args))
    .join("");
}

function createItem(options) {
  return function (_, index) {
    return `<div class="themes_item" data-id="${options.id}">
    <img class="themes_img" src="${options.img[index]}">
    </div>`;
  };
}
