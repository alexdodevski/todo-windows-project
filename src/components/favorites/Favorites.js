import { DOMutils } from "../../core/dom.utils";
import { TodoComponent } from "../../core/TodoComponent";
import { FavoritesLogic } from "./FavoritesLogic";

export class Favorites extends TodoComponent {
  static className = "task__favorite";
  constructor($root, options) {
    super($root, {
      name: "Favorites",
      listeners: ["click"],
      ...options,
    });
  }
  prepare() {
    this.logic = new FavoritesLogic(this);
    this.subEvents();
  }

  subEvents() {
    this.subscribeOnEvent("header:show favorites", () =>
      DOMutils.toogleClass(this.$root, "opened")
    );
  }

  onClick(e) {
    const $target = e.target;
    if ($target.closest(".todo_close_btn")) {
      DOMutils.toogleClass(this.$root, "opened");
    }
  }
  toHTML() {
    return `      <h1 class="task__favorite_header">
            Избранное
            <div class="todo_close_btn">
              <div class="close_btn_item"></div>
            </div>
          </h1>
          <div class="task__favorite_tasks">
            <div class="task__favorite_item">
              <div class="task__done">
                <span class="material-symbols-outlined btn_done"> done </span>
              </div>
              <div class="item_favorite_text_content">
                <p class="item_favorite_text">
                  Хай броо
                  okgremkighrejigorejiohrejoihrejhiorejhoirejhiorejhreiohjer
                  opihjkreiohrejiohrejhioerjhio
                </p>
                <span class="item_favorite_date">13 июля, среда 23:53</span>
              </div>
              <div class="item_favorite_btn_favorite">
                <span class="material-symbols-rounded btn_favorite">
                  star
                </span>
              </div>
              
            </div>
                     <div class="task__favorite_item">
              <div class="task__done">
                <span class="material-symbols-outlined btn_done"> done </span>
              </div>
              <div class="item_favorite_text_content">
                <p class="item_favorite_text">
                  Хай броо
                  okgremkighrejigorejiohrejoihrejhiorejhoirejhiorejhreiohjer
                  opihjkreiohrejiohrejhioerjhio
                </p>
                <span class="item_favorite_date">13 июля, среда 23:53</span>
              </div>
              <div class="item_favorite_btn_favorite">
                <span class="material-symbols-rounded btn_favorite">
                  star
                </span>
              </div>
              
            </div>
                     <div class="task__favorite_item">
              <div class="task__done">
                <span class="material-symbols-outlined btn_done"> done </span>
              </div>
              <div class="item_favorite_text_content">
                <p class="item_favorite_text">
                  Хай броо
                  okgremkighrejigorejiohrejoihrejhiorejhoirejhiorejhreiohjer
                  opihjkreiohrejiohrejhioerjhio
                </p>
                <span class="item_favorite_date">13 июля, среда 23:53</span>
              </div>
              <div class="item_favorite_btn_favorite">
                <span class="material-symbols-rounded btn_favorite">
                  star
                </span>
              </div>
              
            </div>
                     <div class="task__favorite_item">
              <div class="task__done">
                <span class="material-symbols-outlined btn_done"> done </span>
              </div>
              <div class="item_favorite_text_content">
                <p class="item_favorite_text">
                  Хай броо
                  okgremkighrejigorejiohrejoihrejhiorejhoirejhiorejhreiohjer
                  opihjkreiohrejiohrejhioerjhio
                </p>
                <span class="item_favorite_date">13 июля, среда 23:53</span>
              </div>
              <div class="item_favorite_btn_favorite">
                <span class="material-symbols-rounded btn_favorite">
                  star
                </span>
              </div>
              
            </div>
                     <div class="task__favorite_item">
              <div class="task__done">
                <span class="material-symbols-outlined btn_done"> done </span>
              </div>
              <div class="item_favorite_text_content">
                <p class="item_favorite_text">
                  Хай броо
                  okgremkighrejigorejiohrejoihrejhiorejhoirejhiorejhreiohjer
                  opihjkreiohrejiohrejhioerjhio
                </p>
                <span class="item_favorite_date">13 июля, среда 23:53</span>
              </div>
              <div class="item_favorite_btn_favorite">
                <span class="material-symbols-rounded btn_favorite">
                  star
                </span>
              </div>
              
            </div>
                     <div class="task__favorite_item">
              <div class="task__done">
                <span class="material-symbols-outlined btn_done"> done </span>
              </div>
              <div class="item_favorite_text_content">
                <p class="item_favorite_text">
                  Хай броо
                  okgremkighrejigorejiohrejoihrejhiorejhoirejhiorejhreiohjer
                  opihjkreiohrejiohrejhioerjhio
                </p>
                <span class="item_favorite_date">13 июля, среда 23:53</span>
              </div>
              <div class="item_favorite_btn_favorite">
                <span class="material-symbols-rounded btn_favorite">
                  star
                </span>
              </div>
              
            </div>
                     <div class="task__favorite_item">
              <div class="task__done">
                <span class="material-symbols-outlined btn_done"> done </span>
              </div>
              <div class="item_favorite_text_content">
                <p class="item_favorite_text">
                  Хай броо
                  okgremkighrejigorejiohrejoihrejhiorejhoirejhiorejhreiohjer
                  opihjkreiohrejiohrejhioerjhio
                </p>
                <span class="item_favorite_date">13 июля, среда 23:53</span>
              </div>
              <div class="item_favorite_btn_favorite">
                <span class="material-symbols-rounded btn_favorite">
                  star
                </span>
              </div>
              
            </div>
                     <div class="task__favorite_item">
              <div class="task__done">
                <span class="material-symbols-outlined btn_done"> done </span>
              </div>
              <div class="item_favorite_text_content">
                <p class="item_favorite_text">
                  Хай броо
                  okgremkighrejigorejiohrejoihrejhiorejhoirejhiorejhreiohjer
                  opihjkreiohrejiohrejhioerjhio
                </p>
                <span class="item_favorite_date">13 июля, среда 23:53</span>
              </div>
              <div class="item_favorite_btn_favorite">
                <span class="material-symbols-rounded btn_favorite">
                  star
                </span>
              </div>
              
            </div>
                     <div class="task__favorite_item">
              <div class="task__done">
                <span class="material-symbols-outlined btn_done"> done </span>
              </div>
              <div class="item_favorite_text_content">
                <p class="item_favorite_text">
                  Хай броо
                  okgremkighrejigorejiohrejoihrejhiorejhoirejhiorejhreiohjer
                  opihjkreiohrejiohrejhioerjhio
                </p>
                <span class="item_favorite_date">13 июля, среда 23:53</span>
              </div>
              <div class="item_favorite_btn_favorite">
                <span class="material-symbols-rounded btn_favorite">
                  star
                </span>
              </div>
              
            </div>
                     <div class="task__favorite_item">
              <div class="task__done">
                <span class="material-symbols-outlined btn_done"> done </span>
              </div>
              <div class="item_favorite_text_content">
                <p class="item_favorite_text">
                  Хай броо
                  okgremkighrejigorejiohrejoihrejhiorejhoirejhiorejhreiohjer
                  opihjkreiohrejiohrejhioerjhio
                </p>
                <span class="item_favorite_date">13 июля, среда 23:53</span>
              </div>
              <div class="item_favorite_btn_favorite">
                <span class="material-symbols-rounded btn_favorite">
                  star
                </span>
              </div>
              
            </div>
                     <div class="task__favorite_item">
              <div class="task__done">
                <span class="material-symbols-outlined btn_done"> done </span>
              </div>
              <div class="item_favorite_text_content">
                <p class="item_favorite_text">
                  Хай броо
                  okgremkighrejigorejiohrejoihrejhiorejhoirejhiorejhreiohjer
                  opihjkreiohrejiohrejhioerjhio
                </p>
                <span class="item_favorite_date">13 июля, среда 23:53</span>
              </div>
              <div class="item_favorite_btn_favorite">
                <span class="material-symbols-rounded btn_favorite">
                  star
                </span>
              </div>
              
            </div>
                     <div class="task__favorite_item">
              <div class="task__done">
                <span class="material-symbols-outlined btn_done"> done </span>
              </div>
              <div class="item_favorite_text_content">
                <p class="item_favorite_text">
                  Хай броо
                  okgremkighrejigorejiohrejoihrejhiorejhoirejhiorejhreiohjer
                  opihjkreiohrejiohrejhioerjhio
                </p>
                <span class="item_favorite_date">13 июля, среда 23:53</span>
              </div>
              <div class="item_favorite_btn_favorite">
                <span class="material-symbols-rounded btn_favorite">
                  star
                </span>
              </div>
              
            </div>
                     <div class="task__favorite_item">
              <div class="task__done">
                <span class="material-symbols-outlined btn_done"> done </span>
              </div>
              <div class="item_favorite_text_content">
                <p class="item_favorite_text">
                  Хай броо
                  okgremkighrejigorejiohrejoihrejhiorejhoirejhiorejhreiohjer
                  opihjkreiohrejiohrejhioerjhio
                </p>
                <span class="item_favorite_date">13 июля, среда 23:53</span>
              </div>
              <div class="item_favorite_btn_favorite">
                <span class="material-symbols-rounded btn_favorite">
                  star
                </span>
              </div>
              
            </div>
                     <div class="task__favorite_item">
              <div class="task__done">
                <span class="material-symbols-outlined btn_done"> done </span>
              </div>
              <div class="item_favorite_text_content">
                <p class="item_favorite_text">
                  Хай броо
                  okgremkighrejigorejiohrejoihrejhiorejhoirejhiorejhreiohjer
                  opihjkreiohrejiohrejhioerjhio
                </p>
                <span class="item_favorite_date">13 июля, среда 23:53</span>
              </div>
              <div class="item_favorite_btn_favorite">
                <span class="material-symbols-rounded btn_favorite">
                  star
                </span>
              </div>
              
            </div>
                     <div class="task__favorite_item">
              <div class="task__done">
                <span class="material-symbols-outlined btn_done"> done </span>
              </div>
              <div class="item_favorite_text_content">
                <p class="item_favorite_text">
                  Хай броо
                  okgremkighrejigorejiohrejoihrejhiorejhoirejhiorejhreiohjer
                  opihjkreiohrejiohrejhioerjhio
                </p>
                <span class="item_favorite_date">13 июля, среда 23:53</span>
              </div>
              <div class="item_favorite_btn_favorite">
                <span class="material-symbols-rounded btn_favorite">
                  star
                </span>
              </div>
              
            </div>
                     <div class="task__favorite_item">
              <div class="task__done">
                <span class="material-symbols-outlined btn_done"> done </span>
              </div>
              <div class="item_favorite_text_content">
                <p class="item_favorite_text">
                  Хай броо
                  okgremkighrejigorejiohrejoihrejhiorejhoirejhiorejhreiohjer
                  opihjkreiohrejiohrejhioerjhio
                </p>
                <span class="item_favorite_date">13 июля, среда 23:53</span>
              </div>
              <div class="item_favorite_btn_favorite">
                <span class="material-symbols-rounded btn_favorite">
                  star
                </span>
              </div>
              
            </div>
                     <div class="task__favorite_item">
              <div class="task__done">
                <span class="material-symbols-outlined btn_done"> done </span>
              </div>
              <div class="item_favorite_text_content">
                <p class="item_favorite_text">
                  Хай броо
                  okgremkighrejigorejiohrejoihrejhiorejhoirejhiorejhreiohjer
                  opihjkreiohrejiohrejhioerjhio
                </p>
                <span class="item_favorite_date">13 июля, среда 23:53</span>
              </div>
              <div class="item_favorite_btn_favorite">
                <span class="material-symbols-rounded btn_favorite">
                  star
                </span>
              </div>
              
            </div>
            
          </div>`;
  }
}
