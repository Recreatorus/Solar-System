document.addEventListener('DOMContentLoaded', () => {
  let t = ['css/otherstyle.css'];
  function e() {
    var t = document.createElement('div');
    (t.className = 'star'),
      t.style.setProperty('--size', 3 * Math.random() + 1 + 'vmin'),
      (t.style.left = Math.floor(100 * Math.random()) + '%'),
      (t.style.top = Math.floor(100 * Math.random()) + '%'),
      (t.style.zIndex = '-1'),
      (t.onanimationend = function () {
        this.remove();
      }),
      document.querySelector('.star-box').appendChild(t);
  }
  t.forEach((t) => {
    let e = document.createElement('link');
    (e.rel = 'stylesheet'), (e.href = t), document.head.appendChild(e);
  }),
    setInterval(e, 100);
  let r = new IntersectionObserver((t) => {
    t.forEach((t) => {
      let e = t.target.getAttribute('id');
      t.intersectionRatio > 0
        ? (document.querySelector(`nav li a[href="#${e}"]`).parentElement.classList.add('active'),
          t.target.classList.add('inView'))
        : (document.querySelector(`nav li a[href="#${e}"]`).parentElement.classList.remove('active'),
          t.target.classList.remove('inView'));
    });
  });
  document.querySelectorAll('section[id]').forEach((t) => {
    r.observe(t);
  });
});
const url = './data/solar-system-planets.json';
function status(t) {
  return t.status >= 200 && t.status < 300 ? Promise.resolve(t) : Promise.reject(Error(t.statusText));
}
function json(t) {
  return t.json();
}
function displayData(t) {
  t.forEach((t) => {
    let e = document.getElementById(`${t.name}-table`);
    e &&
      (e.innerHTML = `<table class="table">
        <thead class="thead">
          <tr>
            <th colspan="2">${t.name}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>Масса (x10<sup>24</sup>кг):</td><td>${t.mass}</td>
            </tr>
            <tr>
              <td>Диаметр (км):</td><td>${t.diameter}</td>
            </tr>
            <tr>
              <td>Плотность (кг/м<sup>3</sup>):</td><td>${t.density}</td>
            </tr>
            <tr>
              <td>Гравитация (м/с<sup>2</sup>):</td><td>${t.gravity}</td>
            </tr>
            <tr>
              <td>Период вращения (часы):</td><td>${t.rotationPeriod}</td>
            </tr>
            <tr>
              <td>Продолжительность дня (часы):</td><td>${t.lengthOfDay}</td>
            </tr>
            <tr>
              <td>Расстояние от Солнца (10<sup>6</sup> км):</td><td>${t.distanceFromSun}</td>
            </tr>
            <tr>
              <td>Перигелий (10<sup>6</sup> км):</td><td>${t.perihelion}</td>
            </tr>
            <tr>
              <td>Афелий (10<sup>6</sup> км):</td><td>${t.aphelion}</td>
            </tr>
            <tr>
              <td>Орбитальный период (дни/земные годы):</td><td>${t.orbitalPeriod} (${(t.orbitalPeriod / 365.2).toFixed(
        2
      )})</td>
            </tr>
            <tr>
              <td>Орбитальная скорость (км/с):</td><td>${t.orbitalVelocity}</td>
            </tr>
            <tr>
              <td>Наклонение орбиты (градусы):</td><td>${t.orbitalInclination}\xb0</td>
            </tr>
            <tr>
              <td>Орбитальный эксцентриситет:</td><td>${t.orbitalEccentricity}</td>
            </tr>
            <tr>
              <td>Наклон к орбите (градусы):</td><td>${t.obliquityToOrbit}\xb0</td>
            </tr>
            <tr>
              <td>Средняя температура (градусы):</td><td>${t.meanTemperature}\xb0C</td>
            </tr>
            <tr>
              <td>Атмосферное давление:</td><td>${t.surfacePressure}</td>
            </tr>
            <tr>
              <td>Количество лун:</td><td>${t.numberOfMoons}</td>
            </tr>
            <tr>
              <td>Атмосфера:</td><td>${t.atmosphere}</td>
            </tr>
          </tbody>
        </table>
      `);
  });
}
fetch('./data/solar-system-planets.json')
  .then(json)
  .then(function (t) {
    displayData(t);
  })
  .catch(function (t) {
    console.log('%c Ошибка:  ' + t + ' ', 'background-color: #f00; color: #fff', t);
  });
var body = document.getElementsByTagName('body'),
  radios = document.getElementsByName('themes');
for (i = 0; i < radios.length; i++)
  radios[i].addEventListener('change', function () {
    body[0].classList.remove(body[0].classList.item(0)), body[0].classList.add(this.id);
  });
const hamburger = document.querySelector('.hamburger'),
  menu = document.querySelector('.section-nav');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'), menu.classList.toggle('menuOpen');
}),
  document.querySelectorAll('nav li a').forEach(function (t) {
    t.addEventListener('click', function () {
      hamburger.classList.contains('active') &&
        (hamburger.classList.remove('active'), menu.classList.remove('menuOpen'));
    });
  }),
  document.addEventListener('click', (t) => {
    let e = t.target,
      r = e == menu || menu.contains(e),
      a = e == document.querySelector('.hamburger'),
      d = menu.classList.contains('menuOpen');
    r || a || !d || (menu.classList.remove('menuOpen'), hamburger.classList.remove('active'));
  }),
  document.querySelectorAll('.blaze-slider').forEach((t) => {
    new BlazeSlider(t, {
      all: { enableAutoplay: !1, autoplayInterval: 2e3, transitionDuration: 300, slidesToShow: 1, slidesToScroll: 1 },
    });
  });
const mediaQuery = window.matchMedia('screen and (min-width: 991px)');
function handleTabletChange(t) {
  t.matches && mediumZoom('[data-zoomable]', { margin: 0, scrollOffset: 0, background: '#212530' });
}
mediaQuery.addEventListener(handleTabletChange, { once: !0 }), handleTabletChange(mediaQuery);
