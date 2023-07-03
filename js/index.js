document.addEventListener('DOMContentLoaded',()=>{for(const a of a){const a=document.createElement('link');a.rel='stylesheet';a.href=a;document.head.appendChild(a)}function c(){var s=document.createElement('div');s.className='star';s.style.setProperty('--size',Math.random()*3+1+'vmin');s.style.left=Math.floor(Math.random()*100)+'%';s.style.top=Math.floor(Math.random()*100)+'%';s.style.zIndex='-1';s.onanimationend=function(){this.remove()};document.querySelector('.star-box').appendChild(s)}setInterval(c,100);const d=new IntersectionObserver((c)=>{for(const c of c){const c=c.target.getAttribute('id');c.intersectionRatio>0?(document.querySelector(`nav li a[href="#${c}"]`).parentElement.classList.add('active'),c.target.classList.add('inView')):(document.querySelector(`nav li a[href="#${c}"]`).parentElement.classList.remove('active'),c.target.classList.remove('inView'))}});for(const a of document.querySelectorAll('section[id]'))d.observe(a)});const a=document.getElementsByTagName('time'),c=a[0].getAttribute('datetime');const d=(d1,d2)=>Math.ceil(Math.abs(d1.getTime()-d2.getTime())/86400000);let e=d(new Date(),new Date(`${c}`));const f=new Intl.RelativeTimeFormat('ru', {style:'short',numeric:'auto',localeMatcher:'best fit'});a[0].innerText=f.format(`-${e-1}`,'day');const g='./data/solar-system-planets.json';function h(a){return a.json()}fetch(g).then(h).then((data)=>i(data)).catch((error)=>console.log('%c Ошибка: '+' '+error+' ','background-color: #f00; color: #fff',error));function i(a){for(const i of a){const a=document.getElementById(`${i.name}-table`);a&&(a.innerHTML=`<table class="table">
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
      `)}}var j=document.getElementsByTagName('body'),k=document.getElementsByName('themes');for(i=0;i<k.length;i++)k[i].addEventListener('change',function(){j[0].classList.remove(j[0].classList.item(0));j[0].classList.add(this.id)});const l=document.querySelector('.hamburger'),m=document.querySelector('.section-nav');l.addEventListener('click',()=>{l.classList.toggle('active');m.classList.toggle('menuOpen')});document.querySelectorAll('nav li a').forEach((e)=>e.addEventListener('click',function(){l.classList.contains('active')&&(l.classList.remove('active'),m.classList.remove('menuOpen'))}));document.addEventListener('click',(e)=>{let a=e.target;let c=a===m||m.contains(a);let d=a===document.querySelector('.hamburger');let _temp=m.classList.contains('menuOpen');!c&&!d&&_temp&&(m.classList.remove('menuOpen'),l.classList.remove('active'))});for(const c of document.querySelectorAll('.blaze-slider'))new BlazeSlider(c, {all:{enableAutoplay:!1,autoplayInterval:2000,transitionDuration:300,slidesToShow:1,slidesToScroll:1}});const n=window.matchMedia('screen and (min-width: 991px)');function o(e){e.matches&&mediumZoom('[data-zoomable]',{margin:0,scrollOffset:0,background:'#212530'})}n.addEventListener(o,{once:!0});o(n);
