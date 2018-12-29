class TrailMouse {
  private trailTexture = PIXI.Texture.fromImage("./../assets/trail.png");
  private historyX: number[] = [];
  private historyY: number[] = [];
  // historySize determines how long the trail will be.
  private historySize: number = 10;
  // ropeSize determines how smooth the trail will be.
  private ropeSize: number = 100;
  private points: PIXI.Point[] = [];
  private rope = new PIXI.mesh.Rope(this.trailTexture, this.points);
  private app: PIXI.Application;

  constructor(app: PIXI.Application) {
    this.app = app;

    // Create history array.
    for (let i: number = 0; i < this.historySize; i++) {
      this.historyX.push(0);
      this.historyY.push(0);
    }

    // Create rope points.
    for (let i = 0; i < this.ropeSize; i++) {
      this.points.push(new PIXI.Point(0, 0));
    }

    this.rope.blendMode = PIXI.BLEND_MODES.ADD;

    this.app.stage.addChild(this.rope);
  }

  /**
   * Active Trail Mouse.
   */
  public on(): void {
    this.app.ticker.add(this.update.bind(this));
  }

  /**
   * Update mouse trail.
   */
  private update(): void {
    const mouseposition = this.app.renderer.plugins.interaction.mouse.global;

    // Update the mouse values to history
    this.historyX.pop();
    this.historyX.unshift(mouseposition.x);
    this.historyY.pop();

    this.historyY.unshift(mouseposition.y);
    // Update the points to correspond with history.
    for (let i = 0; i < this.ropeSize; i++) {
      const p = this.points[i];

      // Smooth the curve with cubic interpolation to prevent sharp edges.
      const ix = this.cubicInterpolation(this.historyX, (i / this.ropeSize) * this.historySize);
      const iy = this.cubicInterpolation(this.historyY, (i / this.ropeSize) * this.historySize);

      p.x = ix;
      p.y = iy;
    }
  }

  private clipInput(k: number, arr: number[]): number {
    if (k < 0) {
      k = 0;
    }
    if (k > arr.length - 1) {
      k = arr.length - 1;
    }
    return arr[k];
  }

  private getTangent(k: number, factor: number, array: number[]): number {
    return (factor * (this.clipInput(k + 1, array) - this.clipInput(k - 1, array))) / 2;
  }

  private cubicInterpolation(array: number[], t: number, tangentFactor: number = 1): number {
    const k = Math.floor(t);
    const m = [
      this.getTangent(k, tangentFactor, array),
      this.getTangent(k + 1, tangentFactor, array),
    ];
    const p = [this.clipInput(k, array), this.clipInput(k + 1, array)];
    t -= k;
    const t2 = t * t;
    const t3 = t * t2;
    return (
      (2 * t3 - 3 * t2 + 1) * p[0] +
      (t3 - 2 * t2 + t) * m[0] +
      (-2 * t3 + 3 * t2) * p[1] +
      (t3 - t2) * m[1]
    );
  }
}

export default TrailMouse;
