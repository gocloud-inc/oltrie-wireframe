import"./bootstrap.esm-191b8220.js";document.addEventListener("turbo:load",(()=>{let t=document.querySelector(".header");t&&window.addEventListener("scroll",(function(){window.scrollY>20?t.classList.add("sticky"):t.classList.remove("sticky")}));const e=t=>{t.querySelector(".dropdown-menu").classList.toggle("show")};document.querySelectorAll(".dropdown-toggle").forEach((t=>{t.addEventListener("click",(()=>{const o=t.closest(".dropdown");e(o)}))})),document.addEventListener("click",(t=>{document.querySelectorAll(".dropdown").forEach((e=>{if(!e.contains(t.target)){const t=e.querySelector(".dropdown-menu");t.classList.contains("show")&&t.classList.remove("show")}}))}));document.querySelectorAll(".dropdown-menu li a").forEach((t=>{t.addEventListener("click",(()=>{const o=t.closest(".dropdown");e(o)}))}));const o=document.querySelectorAll(".tab-button"),c=document.querySelectorAll(".tab-panel");function s(t){c.length>t&&t>=0&&(c.forEach((t=>{t.classList.remove("active")})),c[t].classList.add("active"))}s(0),o.forEach((function(t,e){t.addEventListener("click",(function(t){!function(t){const e=t.target.dataset.tab;o.forEach((function(t){t.classList.remove("active")})),t.target.classList.add("active"),c.forEach((function(t){t.dataset.tab===e&&t.classList.add("active")}))}(t),s(e)}))}))}));
