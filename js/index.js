document.addEventListener('DOMContentLoaded',()=>{var A=['css/otherstyle.css'],B=new IntersectionObserver(C=>{for(const D of C){const _A=D.target.getAttribute('id');D.intersectionRatio>0?(document.querySelector(`nav li a[href="#${_A}"]`).parentElement.classList.add('active'),D.target.classList.add('inView')):(document.querySelector(`nav li a[href="#${_A}"]`).parentElement.classList.remove('active'),D.target.classList.remove('inView'))}});for(const C of A){var _a=document.createElement('link');_a.rel='stylesheet';_a.href=C;document.head.appendChild(_a)}function _(){var s=document.createElement('div');s.className='star';s.style.setProperty('--size',Math.random()*3+1+'vmin');s.style.left=~~Math.random()*100+'%';s.style.top=~~Math.random()*100+'%';s.style.zIndex='-1';s.onanimationend=function(){this.remove()};document.querySelector('.star-box').appendChild(s)}setInterval(_,100);for(const C of document.querySelectorAll('section[id]'))B.observe(C)});function b(A){return A.json()}fetch('./data/solar-system-planets.json').then(b).then(data=>c(data)).catch(error=>console.log('%c Ошибка: '+' '+error+' ','background-color: #f00; color: #fff',error));function c(a){for(const i of a){var A=document.getElementById(`${i.name}-table`);A&&(A.innerHTML=`<table class="table">
        <thead class="thead">
          <tr>
            <th colspan="2">${i.name}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <td>Масса (x10<sup>24</sup>кг):</td><td>${i.mass}</td>
            </tr>
            <tr>
              <td>Диаметр (км):</td><td>${i.diameter}</td>
            </tr>
            <tr>
              <td>Плотность (кг/м<sup>3</sup>):</td><td>${i.density}</td>
            </tr>
            <tr>
              <td>Гравитация (м/с<sup>2</sup>):</td><td>${i.gravity}</td>
            </tr>
            <tr>
              <td>Период вращения (часы):</td><td>${i.rotationPeriod}</td>
            </tr>
            <tr>
              <td>Продолжительность дня (часы):</td><td>${i.lengthOfDay}</td>
            </tr>
            <tr>
              <td>Расстояние от Солнца (10<sup>6</sup> км):</td><td>${i.distanceFromSun}</td>
            </tr>
            <tr>
              <td>Перигелий (10<sup>6</sup> км):</td><td>${i.perihelion}</td>
            </tr>
            <tr>
              <td>Афелий (10<sup>6</sup> км):</td><td>${i.aphelion}</td>
            </tr>
            <tr>
              <td>Орбитальный период (дни/земные годы):</td><td>${i.orbitalPeriod} (${(i.orbitalPeriod/365.2).toFixed(2)})</td>
            </tr>
            <tr>
              <td>Орбитальная скорость (км/с):</td><td>${i.orbitalVelocity}</td>
            </tr>
            <tr>
              <td>Наклонение орбиты (градусы):</td><td>${i.orbitalInclination}°</td>
            </tr>
            <tr>
              <td>Орбитальный эксцентриситет:</td><td>${i.orbitalEccentricity}</td>
            </tr>
            <tr>
              <td>Наклон к орбите (градусы):</td><td>${i.obliquityToOrbit}°</td>
            </tr>
            <tr>
              <td>Средняя температура (градусы):</td><td>${i.meanTemperature}°C</td>
            </tr>
            <tr>
              <td>Атмосферное давление:</td><td>${i.surfacePressure}</td>
            </tr>
            <tr>
              <td>Количество лун:</td><td>${i.numberOfMoons}</td>
            </tr>
            <tr>
              <td>Атмосфера:</td><td>${i.atmosphere}</td>
            </tr>
          </tbody>
        </table>
      `)}}var d=document.getElementsByTagName('body'),e=document.getElementsByName('themes');for(i=0;i<e.length;i++)e[i].addEventListener('change',function(){d[0].classList.remove(d[0].classList.item(0));d[0].classList.add(this.id)});const f=document.querySelector('.hamburger'),g=document.querySelector('.section-nav');f.addEventListener('click',()=>{f.classList.toggle('active');g.classList.toggle('menuOpen')});for(const e of document.querySelectorAll('nav li a'))e.addEventListener('click',function(){f.classList.contains('active')&&(f.classList.remove('active'),g.classList.remove('menuOpen'))});document.addEventListener('click',e=>{let a=e.target;let A=a==g||g.contains(a);let _=a==document.querySelector('.hamburger');let B=g.classList.contains('menuOpen');!A&&!_&&B&&(g.classList.remove('menuOpen'),f.classList.remove('active'))});for(const a of document.querySelectorAll('.blaze-slider'))new BlazeSlider(a, {all:{enableAutoplay:!1,autoplayInterval:2000,transitionDuration:300,slidesToShow:1,slidesToScroll:1}});var h=window.matchMedia('screen and (min-width: 991px)');function i(e){e.matches&&mediumZoom('[data-zoomable]',{margin:0,scrollOffset:0,background:'#212530'})}h.addEventListener(i,{once:!0});i(h);
