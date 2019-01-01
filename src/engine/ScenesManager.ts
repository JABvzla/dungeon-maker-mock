import Scene from "engine/Scene";

// Scenes
import GameOverScene from "scenes/GameOverScene";
import IntroScene from "scenes/IntroScene";

/**
 * Scene manager.
 */
class ScenesManager {
  // List of scenes available.
  public static scenes: Scene[] = [new IntroScene("intro"), new GameOverScene("game_over")];
  // Secene selected.
  public static currentScene: Scene;

  /**
   * Set current scene by name.
   *
   * @param {string} name - name from scene to change not null.
   */
  public static select(name: string): void {
    if (ScenesManager.currentScene && ScenesManager.currentScene.name === name) {
      return;
    }
    ScenesManager.scenes.map(scene => {
      if (scene.name === name) {
        ScenesManager.currentScene = scene;
        ScenesManager.onChange();
        return;
      }
    });
  }

  /**
   * Event is trigger when currentScene has changed.
   */
  public static onChange(): void {
    // onChange event
  }
}

export default ScenesManager;
