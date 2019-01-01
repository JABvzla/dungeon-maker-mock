import Scene from "engine/Scene";

// Scenes
import GameOverScene from "scenes/GameOverScene";
import IntroScene from "scenes/IntroScene";

/**
 * Scene manager.
 */
class ScenesManager {
  /**
   * Get single instance for ScenesManager.
   *
   * @returns {ScenesManager} ScenesManager `singleton` intance.
   */
  public static getInstance(): ScenesManager {
    if (!ScenesManager.instance) {
      ScenesManager.instance = new ScenesManager();
    }
    return ScenesManager.instance;
  }

  private static instance: ScenesManager;
  // List of scenes available.
  private _scenes: Scene[] = [new IntroScene("intro"), new GameOverScene("game_over")];
  // Secene selected.
  private _currentScene: Scene = new Scene();

  private constructor() {}

  /**
   * Get current selected scene.
   *
   * @returns {Scene} never null.
   */
  get currentScene(): Scene {
    return this._currentScene;
  }

  /**
   * Get list of scenes selectables.
   *
   * @returns {Scene[]} never null.
   */
  get scenes(): Scene[] {
    return this._scenes;
  }

  /**
   * Set current scene by name.
   *
   * @param {string} name - name from scene to change not null.
   */
  public select(name: string): void {
    if (this._currentScene && this._currentScene.name === name) {
      return;
    }
    this.scenes.map(scene => {
      if (scene.name === name) {
        this._currentScene = scene;
        this.onChange();
        return;
      }
    });
  }

  /**
   * Event is trigger when currentScene has changed.
   */
  public onChange(): void {
    // onChange event
  }
}

export default ScenesManager.getInstance();
