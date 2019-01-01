import ScenesManager from "../ScenesManager";

import Scene from "../Scene";

beforeEach(() => {
  jest.resetModules();
});

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

  describe("onChange event", () => {
    test("should be able add onChange event", () => {
      const onChange1 = jest.fn();
      ScenesManager.addOnChange(onChange1);

      // Active onChange.
      ScenesManager.currentScene.name === "intro"
        ? ScenesManager.select("game_over")
        : ScenesManager.select("intro");

      expect(onChange1).toBeCalledTimes(1);
    });

    test("should be able remove onChange event", () => {
      const onChange1 = jest.fn();
      const onChange2 = jest.fn();
      const onChange1Id = ScenesManager.addOnChange(onChange1);
      ScenesManager.addOnChange(onChange2);

      // Active onChange.
      ScenesManager.currentScene.name === "intro"
        ? ScenesManager.select("game_over")
        : ScenesManager.select("intro");

      // Remove onChange1
      ScenesManager.removeOnChange(onChange1Id);

      // Active onChange.
      ScenesManager.currentScene.name === "intro"
        ? ScenesManager.select("game_over")
        : ScenesManager.select("intro");

      expect(onChange1).toBeCalledTimes(1);
      expect(onChange2).toBeCalledTimes(2);
    });

    test("should be called onChange only when scene has changed", () => {
      const onChange1 = jest.fn();
      ScenesManager.addOnChange(onChange1);

      ScenesManager.select("intro");
      ScenesManager.select("intro");
      ScenesManager.select("game_over");
      ScenesManager.select("intro");
      ScenesManager.select("not_exist");
      ScenesManager.select("");
      ScenesManager.select("intro");

      expect(onChange1).toBeCalledTimes(2);
    });
  });
});
