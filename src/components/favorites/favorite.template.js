export function createFavoriteTask(options) {
  return `        <div class="task__favorite_item" data-id="${options.id}">
              <div class="task__done">
                <span class="material-symbols-outlined btn_done"> done </span>
              </div>
              <div class="item_favorite_text_content">
                <p class="item_favorite_text">
                     ${options.text}
                </p>
                <span class="item_favorite_date">${options.date}</span>
              </div>
            </div>
            `;
}
