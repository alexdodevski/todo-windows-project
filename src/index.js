"use strict";
import "./sass/index.sass";
import { Todo } from "./components/todo/Todo";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { TaskPanel } from "./components/task panel/TaskPanel";
import { Favorites } from "./components/favorites/Favorites";
import { Themes } from "./components/themes/Themes";

const components = [Header, Main, TaskPanel, Favorites, Themes];

const todo = new Todo("#app", {
  components: components,
});

todo.render();
console.log(todo);
