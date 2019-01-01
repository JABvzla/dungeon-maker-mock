import ScenesManager from "../ScenesManager";
import Scene from "../Scene";

describe("Scene Manager", () => {
  test("should be selecteable intro scene", () => {
    ScenesManager.select("intro");

    expect(ScenesManager.currentScene).toBeInstanceOf(Scene);
    expect(ScenesManager.currentScene.name).toEqual("intro");
  });

  test("should be selecteable game_over scene", () => {
    ScenesManager.select("game_over");

    expect(ScenesManager.currentScene).toBeInstanceOf(Scene);
    expect(ScenesManager.currentScene.name).toEqual("game_over");
  });

  test("should be called onChange only when scene has changed", () => {
    ScenesManager.onChange = jest.fn();

    ScenesManager.select("intro");
    ScenesManager.select("intro");
    ScenesManager.select("game_over");
    ScenesManager.select("intro");
    ScenesManager.select("not_exist");
    ScenesManager.select("");
    ScenesManager.select("intro");

    expect(ScenesManager.onChange).toBeCalledTimes(3);
  });
});
