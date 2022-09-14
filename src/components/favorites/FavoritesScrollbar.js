import { Scrollbar } from "../../core/Scrollbar/Scrollbar";

export class FavoritesScrollbar extends Scrollbar {
  static className = "scrollbar";
  constructor($root, options) {
    super($root, {
      favorite: true,
      ...options,
    });
  }

  onMousedown(e) {}
}
