import"./turbo.es2017-esm-a6b16222.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&o(e)})).observe(document,{childList:!0,subtree:!0})}function o(e){if(e.ep)return;e.ep=!0;const o=function(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?o.credentials="include":"anonymous"===e.crossOrigin?o.credentials="omit":o.credentials="same-origin",o}(e);fetch(e.href,o)}}();document.addEventListener("turbo:load",(()=>{let e=document.querySelector(".header");e&&window.addEventListener("scroll",(function(){window.scrollY>20?e.classList.add("sticky"):e.classList.remove("sticky")}));const o=e=>{e.querySelector(".dropdown-menu").classList.toggle("show")};document.querySelectorAll(".dropdown-toggle").forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".dropdown");o(t)}))})),document.addEventListener("click",(e=>{document.querySelectorAll(".dropdown").forEach((o=>{if(!o.contains(e.target)){const e=o.querySelector(".dropdown-menu");e.classList.contains("show")&&e.classList.remove("show")}}))}));document.querySelectorAll(".dropdown-menu li a").forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".dropdown");o(t)}))}))}));