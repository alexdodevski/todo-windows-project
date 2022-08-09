import { TodoComponent } from "../../core/TodoComponent";
import { MainScrollLogic } from "./MainScrollLogic";

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

    const scrollerHeight = this.logic.ratio * this.logic.mainHeight - 5;
    this.emitEvent("main:scroll create", scrollerHeight, this.logic.ratio);
  }

  subscribeEvents() {
    this.subscribeOnEvent("scrollbar:scroll content", (y) =>
      this.logic.scrollContent(y)
    );
  }

  prepare() {
    this.logic = new MainScrollLogic(this.$root, this.$todo);
    this.subscribeEvents();
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
