import"./bootstrap.esm-191b8220.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();document.addEventListener("turbo:load",(()=>{let e=document.querySelector(".header");e&&window.addEventListener("scroll",(function(){window.scrollY>20?e.classList.add("sticky"):e.classList.remove("sticky")}));const t=e=>{e.querySelector(".dropdown-menu").classList.toggle("show")};document.querySelectorAll(".dropdown-toggle").forEach((e=>{e.addEventListener("click",(()=>{const o=e.closest(".dropdown");t(o)}))})),document.addEventListener("click",(e=>{document.querySelectorAll(".dropdown").forEach((t=>{if(!t.contains(e.target)){const e=t.querySelector(".dropdown-menu");e.classList.contains("show")&&e.classList.remove("show")}}))}));document.querySelectorAll(".dropdown-menu li a").forEach((e=>{e.addEventListener("click",(()=>{const o=e.closest(".dropdown");t(o)}))}));const o=document.getElementById("search-results"),n=document.getElementById("search-input");if(o){const e=function(e,t){let o;return function(...n){clearTimeout(o),o=setTimeout((()=>e.apply(this,n)),t)}}((function(e){const t=e.target.value,n=t.length>0;if(o.classList.toggle("show",n),n){fetch(`https://dummyjson.com/products/search?q=${t}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${"your_api_token"}`}}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{const t=e.products.map((e=>{const t=document.createElement("ul");return t.classList.add("result-menu"),t.innerHTML=`\n                                <li class="result-item">\n                                    <a href="#" class="result-link"><span class="material-symbols-rounded">location_on</span> ${e.title} ${e.brand} ${e.category}</a>\n                                </li>\n                            `,t}));o.innerHTML="",t.forEach((e=>{o.appendChild(e)}))})).catch((e=>{console.error("Error fetching search results:",e)}))}else o.innerHTML=""}),300);n.addEventListener("input",e)}const s=document.querySelectorAll(".tab-button"),r=document.querySelectorAll(".tab-panel");function c(e){r.length>e&&e>=0&&(r.forEach((e=>{e.classList.remove("active")})),r[e].classList.add("active"))}c(0),s.forEach((function(e,t){e.addEventListener("click",(function(e){!function(e){const t=e.target.dataset.tab;s.forEach((function(e){e.classList.remove("active")})),e.target.classList.add("active"),r.forEach((function(e){e.dataset.tab===t&&e.classList.add("active")}))}(e),c(t)}))}));const i=document.getElementById("nav-button-toggler"),a=document.querySelector(".nav-menu");i.addEventListener("click",(()=>{a.classList.add("show");const e=document.createElement("div");e.classList.add("overlay"),document.body.appendChild(e),document.body.classList.add("overflow-hidden"),e.addEventListener("click",(()=>{a.classList.remove("show"),document.body.classList.remove("overflow-hidden"),e.remove()}))})),document.addEventListener("click",(e=>{const t=a.contains(e.target),o=i.contains(e.target);t||o||a.classList.remove("show")})),o&&document.addEventListener("click",(function(e){o.contains(e.target)||o.classList.remove("show")}))}));