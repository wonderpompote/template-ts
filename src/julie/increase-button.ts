import { ModeButton } from "./mode-button";
import { Watch } from "./watch";
import { WatchButton } from "./watch-button";

export class IncreaseButton extends WatchButton {

    constructor(el: Element){
        super(el);
    }

    press(ev: MouseEvent, w: Watch) {
        var modeButton = w.buttons["modeButton"] as ModeButton;
        if(modeButton.nbPress == 1){ // if mode button pressed once
            w.addHours ++; // add 1 hour
        }
        else if(modeButton.nbPress == 2){ // if mode button pressed twice
            w.addMinutes ++; // add 1 minute
        }
    }
}