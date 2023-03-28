import"./bootstrap.esm-191b8220.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();document.addEventListener("turbo:load",(()=>{const e=document.getElementById("mortgageForm"),t=document.getElementById("monthlyPayment"),n=document.getElementById("monthlyTax"),o=document.getElementById("monthlyInsurance"),r=document.getElementById("totalPayment");e&&e.addEventListener("submit",(function(e){e.preventDefault();const c=document.querySelector("#loanAmount"),s=parseInt(c.value.replaceAll(",",""));c.value=s.toLocaleString();const a=parseFloat(document.getElementById("interestRate").value)/100/12,l=12*parseInt(document.getElementById("loanTerm").value),i=parseInt(document.querySelector("#propertyTax").value.replaceAll(",","")),d=parseInt(document.querySelector("#insurance").value.replaceAll(",","")),u=s*a*Math.pow(1+a,l)/(Math.pow(1+a,l)-1),m=i/12,p=d/12,h=s*a*Math.pow(1+a,l)/(Math.pow(1+a,l)-1)+(i+d)/12;t.textContent=`Php ${u.toLocaleString(void 0,{maximumFractionDigits:2})}`,n.textContent=`Php ${m.toLocaleString(void 0,{maximumFractionDigits:2})}`,o.textContent=`Php ${p.toLocaleString(void 0,{maximumFractionDigits:2})}`,r.textContent=`Php ${h.toLocaleString(void 0,{maximumFractionDigits:2})}`}));document.querySelectorAll(".form-mobile-number").forEach((function(e){e.addEventListener("input",(function(e){const t=function(e){return(e=(e=e.replace(/\D/g,"")).replace(/^([0-8])(\d{2})/,"9$2")).length>10&&(e=e.slice(0,10)),e.replace(/(\d{3})(\d{3})(\d{4})/,"$1-$2-$3")}(e.target.value);e.target.value=t}))}));let c=document.querySelector(".header");c&&window.addEventListener("scroll",(function(){window.scrollY>20?c.classList.add("sticky"):c.classList.remove("sticky")}));const s=e=>{e.querySelector(".dropdown-menu").classList.toggle("show")};document.querySelectorAll(".dropdown-toggle").forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".dropdown");s(t)}))})),document.addEventListener("click",(e=>{document.querySelectorAll(".dropdown").forEach((t=>{if(!t.contains(e.target)){const e=t.querySelector(".dropdown-menu");e.classList.contains("show")&&e.classList.remove("show")}}))}));document.querySelectorAll(".dropdown-menu li a").forEach((e=>{e.addEventListener("click",(()=>{const t=e.closest(".dropdown");s(t)}))}));const a=document.getElementById("search-results"),l=document.getElementById("search-input");if(a){const e=function(e,t){let n;return function(...o){clearTimeout(n),n=setTimeout((()=>e.apply(this,o)),t)}}((function(e){const t=e.target.value,n=t.length>0;if(a.classList.toggle("show",n),n){fetch(`https://dummyjson.com/products/search?q=${t}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${"your_api_token"}`}}).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{const t=e.products.map((e=>{const t=document.createElement("ul");return t.classList.add("result-menu"),t.innerHTML=`\n                                <li class="result-item">\n                                    <a href="#" class="result-link"><span class="material-symbols-rounded">location_on</span> ${e.title} ${e.brand} ${e.category}</a>\n                                </li>\n                            `,t}));a.innerHTML="",t.forEach((e=>{a.appendChild(e)}))})).catch((e=>{console.error("Error fetching search results:",e)}))}else a.innerHTML=""}),300);l.addEventListener("input",e)}const i=document.querySelectorAll(".tab-button"),d=document.querySelectorAll(".tab-panel");function u(e){d.length>e&&e>=0&&(d.forEach((e=>{e.classList.remove("active")})),d[e].classList.add("active"))}u(0),i.forEach((function(e,t){e.addEventListener("click",(function(e){!function(e){const t=e.target.dataset.tab;i.forEach((function(e){e.classList.remove("active")})),e.target.classList.add("active"),d.forEach((function(e){e.dataset.tab===t&&e.classList.add("active")}))}(e),u(t)}))}));{const e={contentClick:"iterateZoom",Images:{Panzoom:{maxScale:5}}};Fancybox.bind('[data-fancybox="gallery"]',e)}const m=document.getElementById("nav-button-toggler"),p=document.querySelector(".nav-menu");m&&(m.addEventListener("click",(()=>{p.classList.add("show");const e=document.createElement("div");e.classList.add("overlay"),document.body.appendChild(e),document.body.classList.add("overflow-hidden"),e.addEventListener("click",(()=>{p.classList.remove("show"),document.body.classList.remove("overflow-hidden"),e.remove()}))})),document.addEventListener("click",(e=>{const t=p.contains(e.target),n=m.contains(e.target);t||n||p.classList.remove("show")}))),a&&document.addEventListener("click",(function(e){a.contains(e.target)||a.classList.remove("show")}));const h=document.querySelectorAll(".form-number");h&&h.forEach((function(e){e.addEventListener("input",(function(){const e=this.value.replace(/[^0-9]/g,"");this.value=Number(e).toLocaleString()}))}))}));
