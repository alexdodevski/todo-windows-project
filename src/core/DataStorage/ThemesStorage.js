import { DataStorage } from "./DataStorage";

export class ThemesStorage extends DataStorage {
  constructor() {
    super();
    this.initStorage();
  }
  selectTheme(id) {
    const data = this.getThemes();
    data.forEach((theme) =>
      theme.id === id ? (theme.selected = true) : false
    );
    this.saveStorage("themes", data);
  }

  unSelectedTheme(id) {
    const data = this.getThemes();
    data.forEach((theme) =>
      theme.id === id ? (theme.selected = false) : false
    );
    this.saveStorage("themes", data);
  }

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
  "https://i.ibb.co/1syKXF9/todo-1.jpg",
  "https://i.ibb.co/0VrHcZ3/todo-2.jpg",
  "https://i.ibb.co/ccQ4Hq5/todo-3.jpg",
  "https://i.ibb.co/Y3BtcLQ/todo-4.jpg",
  "https://i.ibb.co/1LBPgF8/todo-5.jpg",
  "https://i.ibb.co/QDhnszr/todo-6.jpg",
  "https://i.ibb.co/mDCm2vf/todo-7.png",
  "https://i.ibb.co/88qk7VJ/todo-8.jpg",
  "https://i.ibb.co/YkDYFcK/todo-9.jpg",
];
