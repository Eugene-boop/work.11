!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var n=()=>{const e=document.querySelector(".clubs-list");e.addEventListener("click",t=>{t.target.matches("p")&&(e.querySelector("ul").style.display="none"==getComputedStyle(e.querySelector("ul")).display?"block":"none")})};var o=(e,t,r=(()=>{}))=>{const n=document.querySelector(t),o=n?document.querySelector(n.dataset.popup):null,l=document.querySelectorAll(".wrapper");o&&(n.addEventListener("click",(function(t){t.preventDefault(),o.style.display="block",document.body.style.cssText=" overflow: hidden; width: 100%",l.forEach(t=>{t.style.paddingRight=+getComputedStyle(t).paddingRight.slice(0,-2)+e+"px"}),r(this)})),o.addEventListener("click",e=>{const t=e.target;if(!t.closest(".form-content")||t.matches(".close-btn")){if(o.style.display="none",document.body.style.cssText="",l.forEach(e=>{e.style.paddingRight=""}),o.matches("#gift"))return;const e=o.querySelector("form");e.querySelector(".status-alert")&&(e.removeChild(o.querySelector(".status-alert")),e.querySelectorAll("*").forEach(e=>{e.style.display="none"!=e.style.display||e.matches(".statusMessage")?"none":""})),e.querySelectorAll("input").forEach(e=>{"checkbox"!==e.type&&"radio"!==e.type&&"form_name"!==e.name?e.value="":e.checked=!1})}}))};var l=e=>{document.addEventListener("submit",e=>e.preventDefault());const t=t=>{const r=document.createElement("div");r.textContent="Загрузка...",r.style.fontSize="1.5rem",r.style.color="white",r.style.marginTop="5px",r.style.display="none",r.classList.add("statusMessage"),t.appendChild(r);const n=document.createElement("div");n.style.cssText="font-size:1.5rem; color: white; height: 100%; width: 100%; text-align: center;",n.classList.add("status-alert");const o=document.querySelectorAll(".wrapper"),l=(l=null)=>{n.textContent=l?"Что-то пошло не так":"Спасибо! Скоро свяжемся",t.closest("#banner")||t.closest("#footer")?(t=>{const r=document.getElementById("thanks");t&&(r.querySelector("h4").textContent="Ошибка",r.querySelector("p").innerHTML=`Сообщите оператору или на почту </br> ${t}`),r.style.display="block",document.body.style.cssText=" overflow: hidden; width: 100%",o.forEach(t=>{t.style.paddingRight=+getComputedStyle(t).paddingRight.slice(0,-2)+e+"px"});const n=e=>{const t=e.target;t.closest(".form-content")&&!t.matches(".close-btn")||(r.style.display="none",document.body.style.cssText="",o.forEach(e=>{e.style.paddingRight=""}),r.removeEventListener("click",n))};r.addEventListener("click",n)})(l):t.closest("#cards")?r.textContent=l?"Что-то пошло не так":"Спасибо! Скоро свяжемся":(t.querySelectorAll("*").forEach(e=>{e.style.display="none"}),t.parentNode.style.cssText="display: flex;  align-items: center;  justify-content: center;",t.insertAdjacentElement("afterbegin",n))};t.addEventListener("submit",e=>{r.textContent="Загрузка...",r.style.display="",t.closest("#cards")&&(r.style.color="black");const n=new FormData(t),o={};n.forEach((e,t)=>{t.startsWith("mask")||(o[t]=e)}),t.querySelectorAll("input").forEach(e=>{"checkbox"!==e.type&&"radio"!==e.type&&"form_name"!==e.name?e.value="":t.matches("#card_order")&&("1"===e.value||"mozaika"===e.value)||t.matches("#footer_form")&&"mozaika"===e.value||t.matches("#card_order")&&"1s"===e.value?e.checked=!0:t.matches("#card_order")&&"12"===e.value?document.querySelector("#price-total").textContent="1999":e.checked=!1}),s(o).then(e=>{if(200!==e.status)throw new Error(e.statusText);l()}).catch(e=>{l(e),console.log(e)}).finally(()=>{t.closest("#cards")?setTimeout(()=>{r.style.display="none",r.textContent="Загрузка..."},3e3):r.style.display="none"})});const s=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};document.querySelectorAll("form").forEach(e=>{t(e)})};var s=(e,t)=>{t.forEach((t,r)=>{document.querySelectorAll(t).forEach(t=>{t.addEventListener("input",()=>{t.value=t.value.replace(e[r],"")})})})};var a=()=>{document.querySelectorAll('input[name="phone"]').forEach(e=>{e.nextElementSibling.addEventListener("input",(function(){e.value=this.value.replace(/\D/g,"").substring(0,16),this.value=(e=>e.startsWith("+")?e.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,"$1 ($2) $3-$4-$5"):"+"+e.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,"$1 ($2) $3-$4-$5"))(this.value)}))})};var c=({slideName:e,sliderName:t,dotUlName:r,dotClass:n,dotActiveClass:o,arrowName:l,arrowNextName:s,arrowPrevName:a,slideTime:c})=>{const d=document.querySelector(t);let i,u=document.querySelectorAll(e);for(let e=1;e<u.length;e++)u[e].style.display="none";if(l&&(d.style.position="relative",d.insertAdjacentHTML("beforeend",`<a href="#" class="${l} ${a}"></a>\n    <a href="#" class="${l} ${s}"></a>`)),r){const e=document.createElement("ul");e.classList.add(r),d.parentNode.style.position="relative",d.insertAdjacentElement("beforeend",e),(()=>{let t="";for(let e=0;e<u.length;e++)t+=`<li class="${n}"></li>`;e.insertAdjacentHTML("afterbegin",t),e.childNodes[0].classList.add(o)})(),i=e.childNodes}let m,y,p,h=0;const f=(e,t,r)=>{r?e[t].classList.remove(r):e[t].style.display="none"},v=(e,t,r)=>{r?e[t].classList.add(r):e[t].style.display="flex"};if(c){const e=()=>{f(u,h),r&&f(i,h,o),h++,h>=u.length&&(h=0),v(u,h),r&&v(i,h,o)};y=t=>{m=setInterval(e,t)},p=()=>{clearInterval(m)},y(c)}(r||l)&&t&&(d.addEventListener("click",e=>{e.preventDefault();const t=e.target;t.matches(`.${s}, .${a}, .${n}`)&&(f(u,h),r&&f(i,h,o),t.matches(`.${s}`)?h++:t.matches(`.${a}`)?h--:t.matches(`.${n}`)&&i.forEach((e,r)=>{e===t&&(h=r)}),h>=u.length&&(h=0),h<0&&(h=u.length-1),v(u,h),r&&v(i,h,o))}),c&&(d.addEventListener("mouseover",e=>{(e.target.matches(`.${n}`)||e.target.matches(`.${a}`)||e.target.matches(`.${s}`))&&p()}),d.addEventListener("mouseout",e=>{(e.target.matches(`.${n}`)||e.target.matches(`.${a}`)||e.target.matches(`.${s}`))&&y(c)})))};var d=()=>{const e=document.querySelector(".carousel");let t=1;for(let r of e.querySelectorAll(".slide"))r.style.position="relative",r.insertAdjacentHTML("beforeend",`<span style="position:absolute;left:0;top:0">${t}</span>`),t++;let r=e.querySelector(".images"),n=e.querySelectorAll(".slide"),o=0;e.querySelector(".prev").onclick=function(){o+=222,o=Math.min(o,0),r.style.marginLeft=o+"px"},e.querySelector(".next").onclick=function(){o!==n.length/2*-222&&(o-=222,o=Math.max(o,-222*(n.length-1)),r.style.marginLeft=o+"px")}};var i=()=>{const e=document.querySelector(".top-menu"),t=()=>{window.pageYOffset>document.body.querySelector(".head").offsetHeight&&document.body.offsetWidth<=767?e.style.position="fixed":e.style.position=""};t(),window.addEventListener("scroll",()=>{t()})};var u=()=>{const e=document.querySelector(".hidden-small"),t=document.querySelector(".popup-menu.hidden-large");e.addEventListener("click",e=>{e.preventDefault();const t=e.target;t.matches("a")&&document.querySelector(t.href.match(/#.+$/)[0]).scrollIntoView({behavior:"smooth",block:"start"})}),t.addEventListener("click",e=>{e.preventDefault();const t=e.target;t.matches("a")&&document.querySelector(t.href.match(/#.+$/)[0]).scrollIntoView({behavior:"smooth",block:"start"})})};var m=()=>{const e=document.querySelector(".top-menu"),t=document.querySelector(".popup-menu.hidden-large");e.addEventListener("click",e=>{e.target.matches("img")&&(t.style.display="flex")}),t.addEventListener("click",e=>{(e.target.matches("img")||e.target.matches("a"))&&(t.style.display="")})};var y=e=>{e.remove()};(()=>{const e=document.getElementById("totop"),t=()=>{window.pageYOffset>document.body.querySelector("header").offsetHeight?e.style.display="":e.style.display="none"};t(),window.addEventListener("scroll",()=>{t()}),e.addEventListener("click",e=>{e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})})(),document.addEventListener("DOMContentLoaded",()=>{const e=parseInt(document.documentElement.clientWidth),t=parseInt(window.innerWidth)-e;n(),o(t,".open-popup"),o(t,".callback-btn"),o(t,".fixed-gift",y),l(t),s([/[^\d|+]/gi,/[A-Z\d]/gi],['input[type="tel"]','input[type="text"]']),a(),c({slideName:".main-slider .slide",sliderName:".main-slider",slideTime:4e3}),c({slideName:".gallery-slider .slide",sliderName:".gallery-slider",slideTime:2500,dotUlName:"gallery-slider-dots",dotClass:"gallery-slider-dot",dotActiveClass:"gallery-dot-active",arrowName:"arrow gallery-arrow",arrowNextName:"next",arrowPrevName:"prev"}),d(),i(),u(),m()})}]);