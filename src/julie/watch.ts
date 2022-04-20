import { IncreaseButton } from "./increase-button";
import { LightButton } from "./light-button";
import { ModeButton } from "./mode-button";
import { WatchButton } from "./watch-button";

export class Watch {

    watchElement: HTMLElement;
    currentTime: Date;
    buttons: { [buttonKey: string]: WatchButton };
    addHours: number;
    addMinutes: number;

    constructor(el: HTMLElement, mButton: ModeButton, iButton: IncreaseButton, lButton: IncreaseButton) {
        this.watchElement = el;
        this.currentTime = new Date();
        setInterval(() => this.displayTime(), 1000); // execute displayTime every second
        this.buttons = { 
            modeButton: mButton as ModeButton, 
            increaseButton: iButton as IncreaseButton, 
            lightButton: lButton as LightButton};
        this.addHours = 0;
        this.addMinutes = 0;
        // add listeners to each button
        Object.values(this.buttons).forEach(
            (buttonValue) => {
                buttonValue.buttonElement.addEventListener('click', (event) => {
                    buttonValue.press(event, this);
                });
            }
        )
    }

    displayTime() {
        this.currentTime = new Date(); // get current time
        var hours = ((this.currentTime.getHours()+this.addHours) % 24).toString(); // current hour + potential increase (module 24)
        var minutes = ((this.currentTime.getMinutes()+this.addMinutes) % 60).toString(); // current minute + potential increase (modulo 60)
        var seconds = this.currentTime.getSeconds().toString();

        if(hours.length < 2){ // if hours only has 1 number --> add 0 in front
            hours = '0'+hours;
        }
        if(minutes.length < 2){ // if minutes only has 1 number --> add 0 in front
            minutes = '0'+minutes;
        }
        // display time in HTML Element
        this.watchElement.textContent = hours + ":" + minutes + ":" + seconds;
    }

}
  