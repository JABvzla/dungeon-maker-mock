import * as PIXI from "pixi.js";
import TrailMouse from "./trail-mouse";

const app = new PIXI.Application(800, 450, { backgroundColor: 0x1099bb });
document.body.appendChild(app.view);

app.render();

const trailMouse = new TrailMouse(app);
trailMouse.on();
