/**
 * @since 2016-10-10 20:36
 * @author vivaxy
 */

var zoomIn = document.querySelector('.js-zoom-in');
var zoomOut = document.querySelector('.js-zoom-out');

var maxZoom = 19;
var minZoom = 3;

var zoom = 19;
var center = [
    121.4203236,
    31.2162311
];

var map = new AMap.Map('container', {
    center: center,
    zoom: zoom,
    dragEnable: false,
    doubleClickZoom: false,
    keyboardEnable: false,
    scrollWheel: false,
    touchZoom: false,
    animateEnable: true,
});

var zoomToRadius = () => {
    // radius in meter
    var radius = map.getBounds().getCenter().distance(map.getBounds().getSouthWest());
    return radius / 2;
};

var circle = new AMap.Circle({
    center: new AMap.LngLat(121.4203236, 31.2162311), // 圆心位置
    radius: zoomToRadius(), //半径
    strokeColor: '#f33', //线颜色
    strokeOpacity: 1, //线透明度
    strokeWeight: 1, //线粗细度
    fillColor: '#ee2200', //填充颜色
    fillOpacity: 0.2 //填充透明度
});
circle.setMap(map);

zoomIn.addEventListener('click', () => {
    // map.setZoomAndCenter(zoom++, center);
    if (zoom < maxZoom) {
        zoom++;
        map.setZoom(zoom);
        zoomOut.removeAttribute('disabled');
        circle.setRadius(zoomToRadius());
    } else {
        zoomIn.setAttribute('disabled', true);
    }
});

zoomOut.addEventListener('click', () => {
    // map.setZoomAndCenter(zoom--, center);
    if (zoom > minZoom) {
        zoom--;
        map.setZoom(zoom);
        zoomIn.removeAttribute('disabled');
        circle.setRadius(zoomToRadius());
    } else {
        zoomOut.setAttribute('disabled', true);
    }
});
