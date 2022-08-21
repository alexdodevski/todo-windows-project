import { DOMutils } from "../../core/dom.utils";

export class ThemesLogic {
  constructor(themes) {
    this.$todoThemes = themes.$root;
    this.$todo = themes.$todo;
    this.themeStorage = themes.themeStorage;
    this.selected;
  }

  select($elem) {
    if ($elem === this.selected) return;

    if (this.selected) {
      this.selected.classList.remove("selected");
      const unselectId = +this.selected.dataset.id;
      this.themeStorage.unSelectedTheme(unselectId);
    }

    $elem.classList.add("selected");

    const selectId = +$elem.dataset.id;
    this.themeStorage.selectTheme(selectId);
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

  watchClick() {
    setTimeout(() => {
      document.onclick = (e) => {
        if (!this.$todoThemes.contains(e.target)) {
          DOMutils.toogleClass(this.$todoThemes, "opened");
          document.onclick = null;
        }
      };
    }, 0);
  }
}
