import * as PIXI from "pixi.js";

/**
 * Scene is a main container.
 */
class Scene extends PIXI.Container {
  public name: string;

  constructor(name: string = "undefined") {
    super();

    this.name = name;
  }

  /**
   * Update the scene.
   *
   * @param {number} dt - Delta time.
   */
  public update(dt: number): void {
    // Add logic from you scene here.
  }
}

export default Scene;
