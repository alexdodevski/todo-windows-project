export function createTask(options) {
  return `<div class="todo__main__task" data-id="${options.id}">
        <div class="task__done">
          <span class="material-symbols-outlined btn_done"> done </span>
        </div>
        <div class="task__text_block">
          <div class="task__text" contenteditable="" spellcheck="false">
            <p>${options.text}</p>
          </div>
          <span class="task__text_date">${options.date}</span>
        </div>
        <div class="task__btn_favorite ${options.favorite ? "selected" : ""}">
          <span class="material-symbols-rounded btn_favorite"> star </span>
        </div>
      </div>`;
}
