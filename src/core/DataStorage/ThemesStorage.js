import { DataStorage } from "./DataStorage";
import TODO_1 from "@/img/todo-1.jpg";
import TODO_2 from "@/img/todo-2.jpg";
import TODO_3 from "@/img/todo-3.jpg";
import TODO_4 from "@/img/todo-4.jpg";
import TODO_5 from "@/img/todo-5.jpg";
import TODO_6 from "@/img/todo-6.jpg";
import TODO_7 from "@/img/todo-7.png";
import TODO_8 from "@/img/todo-8.jpg";
import TODO_9 from "@/img/todo-9.png";

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
  TODO_1,
  TODO_2,
  TODO_3,
  TODO_4,
  TODO_5,
  TODO_6,
  TODO_7,
  TODO_8,
  TODO_9,
];
