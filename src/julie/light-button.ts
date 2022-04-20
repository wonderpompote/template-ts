import { Watch } from "./watch";
import { WatchButton } from "./watch-button";

export class LightButton extends WatchButton{

    constructor(el: Element){
        super(el);
    }

    press(ev: MouseEvent,w: Watch) {
        if(w.watchElement.style.color == 'black'){
            w.watchElement.style.color = 'blue';
        }
        else {
            w.watchElement.style.color = 'black';
        }
    }
}