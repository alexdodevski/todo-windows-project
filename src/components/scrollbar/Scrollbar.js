import { TodoComponent } from "../../core/TodoComponent";

export class Scrollbar extends TodoComponent {
  static className = "scrollbar";
  constructor($root) {
    super($root, {
      name: "Scrollbar",
      listeners: ["click"],
    });
  }

  onClick(e) {
    if (e.target.closest(".scroller")) console.log(e.target);
  }
  toHTML() {
    return `
          <div class="scroller"></div>
`;
  }
}
