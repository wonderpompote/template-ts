import { Watch } from "./watch";

export abstract class WatchButton {

    buttonElement: Element;

    constructor(el: Element) {
        this.buttonElement = el;
    }
  
    abstract press(ev: Event, w: Watch): void;
  }