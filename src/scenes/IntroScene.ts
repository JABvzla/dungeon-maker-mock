import Scene from "engine/Scene";
import ScenesManager from "engine/ScenesManager";

class IntroScene extends Scene {
  constructor(name: string) {
    super(name);

    const text = new PIXI.Text("Touch me!");

    text.interactive = true;
    text.buttonMode = true;
    text.on("pointerdown", this.textClick);

    this.addChild(text);
  }

  private textClick(): void {
    ScenesManager.select("game_over");
  }
}

export default IntroScene;
