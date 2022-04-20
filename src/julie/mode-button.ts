import { Watch } from "./watch";
import { WatchButton } from "./watch-button";

export class ModeButton extends WatchButton {

    nbPress: number; // number of times the button has been pressed

    constructor(el: Element){
        super(el);
        this.nbPress = 0;
    }

    press(ev: MouseEvent, w: Watch) {
        this.nbPress = (this.nbPress + 1) % 3; // each time button pressed, add 1 modulo 3 to nbPress
    }
}