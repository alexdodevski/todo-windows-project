import { TodoComponent } from "../../core/TodoComponent";

export class Main extends TodoComponent {
  static className = "todo__main";
  constructor($root) {
    super($root, {
      name: "Main",
      listeners: [],
    });
  }
  toHTML() {
    return ` 
          <div class="todo__main__viewport">
          <div class="todo__main__content_box">
          <div class="todo__main__content_tasks">
            <div class="todo__main__task">
            <div class="task__done">
              <span class="material-symbols-outlined btn_done"> done </span>
            </div>
            <div class="task__text_block">
              <div class="task__text" contenteditable="" spellcheck="false">
                <p>Хай брооо fewgew,okghrwhijrwhgowrjorwikjgrwoi</p>
              </div>
              <span class="task__text_date">13 июля, среда 23:53</span>
            </div>
            <div class="task__btn_favorite">
              <span class="material-symbols-rounded btn_favorite"> star </span>
            </div>
          </div>
</div>
          </div>
          </div>

 `;
  }
}
