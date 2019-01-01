import { CONTAINER } from "config";
import ScenesManager from "engine/ScenesManager";
import * as PIXI from "pixi.js";

const app = new PIXI.Application(CONTAINER.WIDTH, CONTAINER.HEIGHT, {
  backgroundColor: CONTAINER.BACKGROUND_COLOR,
});

document.body.appendChild(app.view);

ScenesManager.addOnChange(() => {
  app.stage.removeChildren();
  app.stage.addChild(ScenesManager.currentScene);
});

ScenesManager.select("intro");

app.ticker.add(dt => loop(dt));

function loop(dt: number): void {
  ScenesManager.currentScene.update(dt);
}
