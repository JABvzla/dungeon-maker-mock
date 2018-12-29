import { CONTAINER } from "config";
import Scene from "engine/Scene";

class GameOverScene extends Scene {
  private text: PIXI.Text = new PIXI.Text("Game Over");
  private textDir: number = 1;

  constructor(name: string) {
    super(name);

    this.text.x = CONTAINER.WIDTH / 2 - this.text.width / 2;
    this.text.y = CONTAINER.HEIGHT / 2 - this.text.height / 2;
    this.addChild(this.text);
  }

  public update(_dt: number): void {
    this.text.x += this.textDirection();
  }

  public textDirection(): number {
    const initialX = CONTAINER.WIDTH / 2 - this.text.width / 2;
    this.textDir =
      this.text.x > initialX + 10 || this.text.x < initialX - 10 ? this.textDir * -1 : this.textDir;
    return this.textDir;
  }
}

export default GameOverScene;
