import { getStrElem } from "./utils";

export function createTask(date, text, favorite = false) {
  const textDate = createDate(date);
  return `<div class="todo__main__task">
        <div class="task__done">
          <span class="material-symbols-outlined btn_done"> done </span>
        </div>
        <div class="task__text_block">
          <div class="task__text" contenteditable="" spellcheck="false">
            <p>${text}</p>
          </div>
          <span class="task__text_date">${textDate}</span>
        </div>
        <div class="task__btn_favorite ${favorite ? "selected" : ""}">
          <span class="material-symbols-rounded btn_favorite"> star </span>
        </div>
      </div>`;
}

function createDate(date) {
  const time = getTime(date);
  const day = getDay(date);
  const mounth = getStrElem(date.getMonth(), months);
  const weekDay = getStrElem(date.getDay(), week);

  return `${day} ${mounth},${weekDay} ${time}`;
}

function getTime(date) {
  const hours = getDateItem(date.getHours());
  const minutes = getDateItem(date.getMinutes());

  return hours + ":" + minutes;
}

function getDay(date) {
  return getDateItem(date.getDate());
}

function getDateItem(item) {
  return item.toString().length === 1 ? "0" + item.toString() : item.toString();
}

const months = [
  "Января",
  "Февраля",
  "Марта",
  "Апреля",
  "Мая",
  "Июня",
  "Июля",
  "Августа",
  "Сентября",
  "Октября",
  "Ноября",
  "Декабря",
];

const week = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
