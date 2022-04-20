import { Watch } from "./watch";
import { WatchButton } from "./watch-button";

export class LightButton extends WatchButton{

    constructor(el: Element){
        super(el);
    }

    press(ev: MouseEvent,w: Watch) {
        if(w.watchElement.style.color == 'black'){ // if watch not in "night mode"
            w.watchElement.style.color = 'blue'; // display current time in blue
        }
        else { // if watch already in "night mode"
            w.watchElement.style.color = 'black'; // display current time in default color
        }
    }
}