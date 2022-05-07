// Yandex Map

let center = [43.60450462480639,39.732398859614605];


function init() {
  let map = new ymaps.Map('map', {
    center: center,
    zoom: 18
  });

  let placemark = new ymaps.Placemark([43.60409965415943,39.73230531176622], {}, {
    iconLayout: 'default#image',
    iconImageHref: '../img/placemark-map.png',
    iconImageSize: [103, 92],
    iconImageOffset: [-50, -70]
  });

  map.geoObjects.add(placemark)
}

ymaps.ready(init);
