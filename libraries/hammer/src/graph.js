/**
 * @since 2015-12-07 17:00
 * @author vivaxy
 */
'use strict';

class Graph {
  /**
   * 构造函数
   * @param config
   * {
   *     ctx: canvas ctx,
   *     width: number,
   *     height: number,
   *     x: left,
   *     y: top,
   *     src: 图片源
   *     image: new Image()
   * }
   */
  constructor(config) {
    this._ctx = config.ctx;
    this._width = config.width;
    this._height = config.height;
    this._x = config.x;
    this._y = config.y;
    this._image = config.image;
    //this._src = config.src;

    /**
     * 转动角度
     * @type {number}
     */
    this.theta = 0;
  }

  /**
   * 在 canvas 中画出元素
   * 以下值如果没有传则认为是按照未偏离的画
   *
   * 1. 获得缩放后的 x, y, width, height
   * 2. 得到位移之前的中心
   * 3. 计算中心点的位移，位移距离不受缩放和旋转影响
   * 4. 将画布原点 (0, 0) 移动到物体中心，以使旋转能够按照物体中心进行
   * 5. 计算旋转角度
   * 6. 将画布反向旋转
   * 7. 画上图片
   * 8. 将画布转回来
   * 9. 将画布的原点移动回去
   *
   * @param offsetX 横向偏移
   * @param offsetY 纵向偏移
   * @param angle 旋转角度
   * @param scale 缩放比例
   * @returns {Graph}
   */
  paint(offsetX = 0, offsetY = 0, angle = 0, scale = 1) {
    let after = this._getRectFromScale(scale);

    let center = this._getCenter();

    center.x += offsetX;
    center.y += offsetY;

    let ctx = this._ctx;

    ctx.translate(center.x, center.y);

    let rotation = ((this.theta + angle) * Math.PI) / 180;

    ctx.rotate(rotation);

    // or ctx.save();

    let width = after.width / 2;
    let height = after.height / 2;
    ctx.drawImage(this._image, -width, -height, after.width, after.height);

    // or ctx.restore();
    ctx.rotate(-rotation);

    ctx.translate(-center.x, -center.y);

    return this;
  }

  /**
   * 计算中心点
   * @returns {{x: *, y: *}}
   */
  _getCenter() {
    return {
      x: this._x + this._width / 2,
      y: this._y + this._height / 2,
    };
  }

  /**
   * 计算中心点是否在这个元素中
   * @param point
   * @param tolerance 容差
   * @returns {boolean}
   */
  inRange(point, tolerance = 0) {
    let x = point.x;
    let y = point.y;
    let xLowBound = this._x - tolerance;
    let xHighBound = this._x + this._width + tolerance;
    let yLowBound = this._y - tolerance;
    let yHighBound = this._y + this._height + tolerance;
    return x > xLowBound && x < xHighBound && y > yLowBound && y < yHighBound;
  }

  /**
   * 移动元素
   * @param x
   * @param y
   * @returns {Graph}
   */
  move(x = 0, y = 0) {
    this._x += x;
    this._y += y;
    return this;
  }

  /**
   * 旋转元素
   * @param angle
   * @returns {Graph}
   */
  rotate(angle = 0) {
    this.theta += angle;
    return this;
  }

  /**
   * 根据缩放比例计算元素的 x, y, width, height
   * @param ratio
   * @returns {{}}
   */
  _getRectFromScale(ratio = 1) {
    let after = {};
    let center = this._getCenter();
    after.width = this._width * ratio;
    after.height = this._height * ratio;
    after.x = center.x - after.width / 2;
    after.y = center.y - after.height / 2;
    return after;
  }

  /**
   * 对元素进行实际缩放
   * @param ratio
   * @returns {Graph}
   */
  resize(ratio) {
    let after = this._getRectFromScale(ratio);
    this._width = after.width;
    this._height = after.height;
    this._x = after.x;
    this._y = after.y;
    return this;
  }
}

export default Graph;
