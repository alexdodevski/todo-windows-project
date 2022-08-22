import { getStrElem } from "./utils";

export function createDate(date = new Date(), header = false) {
  const time = getTime(date);
  const day = getDay(date);
  const mounth = getStrElem(date.getMonth(), months);
  const weekDay = getStrElem(date.getDay(), week);

  return header
    ? `${day} ${mounth}, ${weekDay}`
    : `${day} ${mounth}, ${weekDay} ${time}`;
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
