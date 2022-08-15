export class ThemesLogic {
  constructor(themes) {
    this.themes = themes;
    this.$todoThemes = themes.$root;
    this.$todo = themes.$todo;
    this.selected;
  }

  select($elem) {
    if ($elem === this.selected) return;
    $elem.classList.toggle("selected");
    // this.selected.toggle("selected");
    this.selected = $elem;
    const img = this.getImg($elem);
    this.$todo.style.background = `url(${img}) no-repeat center `;
    this.$todo.style.backgroundSize = "cover";
  }

  getImg($elem) {
    const $img = $elem.querySelector(".themes_img");
    const pathImg = $img.getAttribute("src");
    return pathImg;
  }
}
