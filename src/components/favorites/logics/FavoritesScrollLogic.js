export class FavoritesScrollLogic {
  constructor(favorite) {
    this.$favorite = favorite.$root;
    this.favoriteComponent = favorite;
    this.$viewport = this.$favorite.querySelector(".task__favorite_viewport");
    this.$contentList = this.$favorite.querySelector(
      ".task__favorite_content-list"
    );
  }

  initHeight() {
    this.viewportHeight = this.$viewport.offsetHeight;
    this.contentListHeight = this.$contentList.offsetHeight;
  }

  scrollContent(y) {
    this.favoriteComponent.$content.scrollTo(0, y);
  }

  getYscroll() {
    return this.favoriteComponent.$content.scrollTop * this.ratio;
  }

  initScroller(craeteScroller) {
    this.contentHeight = this.favoriteComponent.$content.scrollHeight;

    if (this.contentHeight <= this.viewportHeight) {
      craeteScroller(0, this.ratio);
      return;
    }

    this.ratio = this.viewportHeight / this.contentHeight;
    const scrollerHeight = this.ratio * this.viewportHeight;

    craeteScroller(scrollerHeight, this.ratio);
  }
}
