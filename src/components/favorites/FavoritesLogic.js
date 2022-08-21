export class FavoritesLogic {
  constructor(favorites) {
    this.$todoFavorites = favorites.$root;
    this.taskStorage = favorites.taskStorage;

    console.log(this);
  }
}
