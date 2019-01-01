import * as PIXI from "pixi.js";

/**
 * Scene is a main container.
 */
class Scene extends PIXI.Container {
  private _name: string;

  constructor(name: string = "undefined") {
    super();

    this._name = name;
  }

  /**
   * Update the scene.
   *
   * @param {number} dt - Delta time.
   */
  public update(dt: number): void {
    // Add logic from you scene here.
  }

  /**
   * Get name of scene.
   *
   * @returns {string} Name of scene.
   */
  get name(): string {
    return this._name;
  }
}

export default Scene;
