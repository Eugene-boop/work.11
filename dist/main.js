!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=()=>{const e=document.querySelector(".clubs-list");e.addEventListener("click",t=>{t.target.matches("p")&&(e.querySelector("ul").style.display="none"==e.querySelector("ul").style.display?"block":"none")})};var o=(e,t=(()=>{}))=>{const n=document.querySelector(e),r=n?document.querySelector(n.dataset.popup):null;r&&(n.addEventListener("click",(function(e){e.preventDefault(),r.style.display="block",document.body.style.cssText="position:fixed; width:100%;",t(this)})),r.addEventListener("click",e=>{const t=e.target;t.closest(".form-content")&&!t.matches(".close-btn")||(r.style.display="none",document.body.style.cssText='position:""; width:""')}))};var l=()=>{document.addEventListener("submit",e=>e.preventDefault());document.querySelectorAll("form").forEach(e=>{(e=>{const t=document.createElement("div");t.textContent="",t.style.fontSize="1.5rem",t.style.color="white",t.style.marginTop="5px",e.appendChild(t);const n=document.createElement("div");n.style.cssText="font-size:1.5rem; color: white; height: 100%; width: 100%; text-align: center;",e.addEventListener("submit",o=>{t.style.display="block",e.closest("#cards")&&(t.style.color="black"),t.textContent="Загрузка...";const l=new FormData(e),c={};l.forEach((e,t)=>{t.startsWith("mask")||(c[t]=e)}),r(c).then(t=>{if(200!==t.status)throw new Error(t.statusText);n.textContent="Спасибо! Скоро свяжемся",e.innerHTML="",e.parentNode.style.cssText="display: flex;  align-items: center;  justify-content: center;",e.closest("#cards")&&(n.style.color="black"),e.insertAdjacentElement("afterbegin",n),e.querySelectorAll("input").forEach(e=>{e.classList.remove("success"),e.value=""})}).catch(t=>{n.textContent="Что-то пошло не так",e.innerHTML="",e.parentNode.style.cssText="display: flex;  align-items: center;  justify-content: center;",e.closest("#cards")&&(n.style.color="black"),e.insertAdjacentElement("afterbegin",n),console.log(t)}).finally(()=>{t.style.display="none"})});const r=e=>fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})})(e)})};var c=(e,t)=>{t.forEach((t,n)=>{document.querySelectorAll(t).forEach(t=>{t.addEventListener("input",()=>{t.value=t.value.replace(e[n],"")})})})};var s=()=>{document.querySelectorAll('input[name="phone"]').forEach(e=>{e.nextElementSibling.addEventListener("input",(function(){e.value=this.value.replace(/\D/g,"").substring(0,16),this.value=(e=>e.startsWith("+")?e.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,"$1 ($2) $3-$4-$5"):"+"+e.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,"$1 ($2) $3-$4-$5"))(this.value)}))})};var i=e=>{localStorage.getItem("giftOpened")||(e?(e.remove(),localStorage.giftOpened=!0):document.body.insertAdjacentHTML("afterbegin",'<div class="fixed-gift" data-popup="#gift">\n    <img src=images/gift.png alt>\n  </div>'))};i(),document.addEventListener("DOMContentLoaded",()=>{r(),o(".open-popup"),o(".callback-btn"),o(".fixed-gift",i),l(),c([/[^\d|+]/gi,/[A-Z\d]/gi],['input[type="tel"]','input[type="text"]']),s()})}]);