export function themesTemplate(data) {
  const themes = [];
  const themesItems = [];
  for (let i = 0; i < 9; i++) {
    themesItems.push(createItem(data[i]));
  }

  for (let i = 0; i <= 3; i++) {
    let items = themesItems.slice(0, 3);
    themesItems.splice(0, 3);
    themes.push(themeBlock(items));
  }
  return themes.join("");
}

function themeBlock(items) {
  const result = new Array(3)
    .fill("")
    .map((_, index) => {
      return items[index];
    })
    .join("");

  return `<div class="todo__themes_items">${result}</div>`;
}

function createItem(data) {
  return `<div class="themes_item ${
    data.selected ? "selected" : ""
  }" data-id="${data.id}">
    <img class="themes_img" src="${data.src}" >
    </div>`;
}
