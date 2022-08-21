import { DataStorage } from "./DataStorage";

export class ThemesStorage extends DataStorage {
  constructor() {
    super();
    this.initStorage();
  }
  selectTheme(id) {}

  getThemesData() {
    return this.getThemes();
  }

  getThemes() {
    return this.getStorage("themes");
  }

  initStorage() {
    if (!this.getStorage("themes")) {
      const themes = [];
      for (let i = 0; i < srcImg.length; i++) {
        const options = {};
        options.id = i;
        options.src = srcImg[i];
        options.selected = i == 0 ? true : false;
        themes.push(options);
      }
      this.saveStorage("themes", themes);
    }
  }
}

const srcImg = [
  "https://i.ibb.co/LZcqprg/todo-1.jpg",
  "https://mobimg.b-cdn.net/v3/fetch/73/7302b46f659c4fb0634272655d564107.jpeg",
  "https://i.ibb.co/5FKpGBL/todo-3.jpg",
  "https://mota.ru/upload/resize/1440/900/upload/wallpapers/2018/04/14/11/56/56689/15236961285ad1c200bab7b1.17378549-d5d.jpg",
  "https://i.ibb.co/QJ3r86T/todo-5.jpg",
  "https://i.ibb.co/QDhnszr/todo-6.jpg",
  "https://i.ibb.co/gzmJT6G/2022-08-13-19-01-02.png",
  "https://catherineasquithgallery.com/uploads/posts/2021-02/1614280269_53-p-chernii-fon-dlya-futazhei-68.jpg",
  "https://phonoteka.org/uploads/posts/2022-02/1643921603_3-phonoteka-org-p-korichnevie-doski-fon-4.jpg",
];
