export class FavoritesLogic {
  constructor(favorites) {
    this.favorites = favorites;
    this.$toodFavorites = favorites.$root;
  }
}
