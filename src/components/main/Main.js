import { TodoComponent } from "../../core/TodoComponent";
import { MainLogic } from "./MainLogic";

export class Main extends TodoComponent {
  static className = "todo__main";
  constructor($root, options) {
    super($root, {
      name: "Main",
      listeners: ["scroll"],
      ...options,
    });
  }

  init() {
    super.init();
    this.logic.init();

    const emit = this.emitEvent.bind(this, "main:scroll create");
    this.logic.initScroller(emit);
  }

  subEvents() {
    this.subscribeOnEvent("scrollbar:scroll content", (y) =>
      this.logic.scrollContent(y)
    );
    this.subscribeOnEvent("taskpanel:add task", (task) => {
      this.logic.addTask(task);
    });

    this.subscribeOnEvent("taskpanel:check scroll", () => {
      this.logic.initScroller(this.emitEvent.bind(this, "main:scroll create"));
    });
  }

  prepare() {
    this.logic = new MainLogic(this.$root, this.$todo);
    this.subEvents();
  }

  onScroll() {
    const scroll = this.logic.getYscroll();
    this.emitEvent("main:scroll content", scroll);
  }
  toHTML() {
    return ` 
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

 `;
  }
}
