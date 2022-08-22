import { DOMutils } from "../../core/dom.utils";
import { createFavoriteTask } from "./favorite.template";

export class FavoritesLogic {
  #CLASS_FAVORITE_TASK = ".task__favorite_item";
  constructor(favorites) {
    this.favorites = favorites;
    this.$todoFavorites = favorites.$root;
    this.taskStorage = favorites.taskStorage;
  }

  watchClick() {
    setTimeout(() => {
      document.onclick = (e) => {
        if (
          !this.$todoFavorites.contains(e.target) &&
          !e.target.closest(".task__done")
        ) {
          DOMutils.toogleClass(this.$todoFavorites, "opened");
          document.onclick = null;
        }
      };
    }, 0);
  }

  doneFavorite($btn, unfavorite) {
    const $task = $btn.closest(this.#CLASS_FAVORITE_TASK);
    const id = DOMutils.getIdTask($task);

    unfavorite(id);
    this.removeFavorite(id);
  }

  removeFavorite(id) {
    const $task = this.$todoFavorites.querySelector(`[data-id="${id}"]`);
    if (!$task) return;

    $task.remove();
  }

  checkFavorite(id) {
    const $task = this.$todoFavorites.querySelector(`[data-id="${id}"]`);

    if (!$task) {
      const data = this.taskStorage.getTask(id);
      const $task = createFavoriteTask(data);

      this.favorites.$content.innerHTML += $task;
    } else {
      this.removeFavorite(id);
    }
  }

  changeText(id) {
    const $task = this.$todoFavorites.querySelector(`[data-id="${id}"]`);
    if (!$task) return;

    const text = this.taskStorage.getText(id);
    const $favoriteText = $task.querySelector(".item_favorite_text");
    $favoriteText.textContent = text;
  }
}
