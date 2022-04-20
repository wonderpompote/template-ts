import './index.css';
import { Watch, LightButton, ModeButton, IncreaseButton } from './julie';


var modeButton = new ModeButton(document.getElementById('modeButton'));
var increaseButton = new IncreaseButton(document.getElementById('incButton'));
var lightButton = new LightButton(document.getElementById('lightButton'));

var watch = new Watch(document.getElementById('watch'), modeButton, increaseButton, lightButton);
