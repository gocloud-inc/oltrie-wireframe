import"./bootstrap.esm-191b8220.js";document.addEventListener("turbo:load",(()=>{let e=document.querySelector(".header");e&&window.addEventListener("scroll",(function(){window.scrollY>20?e.classList.add("sticky"):e.classList.remove("sticky")}));const t=e=>{e.querySelector(".dropdown-menu").classList.toggle("show")};document.querySelectorAll(".dropdown-toggle").forEach((e=>{e.addEventListener("click",(()=>{const n=e.closest(".dropdown");t(n)}))})),document.addEventListener("click",(e=>{document.querySelectorAll(".dropdown").forEach((t=>{if(!t.contains(e.target)){const e=t.querySelector(".dropdown-menu");e.classList.contains("show")&&e.classList.remove("show")}}))}));document.querySelectorAll(".dropdown-menu li a").forEach((e=>{e.addEventListener("click",(()=>{const n=e.closest(".dropdown");t(n)}))}));const n=document.getElementById("search-results"),o=document.getElementById("search-input");if(n){const e=function(e,t){let n;return function(...o){clearTimeout(n),n=setTimeout((()=>e.apply(this,o)),t)}}((function(e){const t=e.target.value,o=t.length>0;if(n.classList.toggle("show",o),o){fetch(`https://api.github.com/search/repositories?q=${t}`).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{const t=e.items.map((e=>{const t=document.createElement("ul");return t.classList.add("result-menu"),t.innerHTML=`\n                                <li class="result-item">\n                                    <a href="${e.html_url}" class="result-link"><span class="material-symbols-rounded">location_on</span> ${e.name} ${e.language}</a>\n                                </li>\n                            `,t}));n.innerHTML="",t.forEach((e=>{n.appendChild(e)}))})).catch((e=>{console.error("Error fetching search results:",e)}))}else n.innerHTML=""}),300);o.addEventListener("input",e)}const s=document.querySelectorAll(".tab-button"),c=document.querySelectorAll(".tab-panel");function r(e){c.length>e&&e>=0&&(c.forEach((e=>{e.classList.remove("active")})),c[e].classList.add("active"))}r(0),s.forEach((function(e,t){e.addEventListener("click",(function(e){!function(e){const t=e.target.dataset.tab;s.forEach((function(e){e.classList.remove("active")})),e.target.classList.add("active"),c.forEach((function(e){e.dataset.tab===t&&e.classList.add("active")}))}(e),r(t)}))}));const a=document.getElementById("nav-button-toggler"),l=document.querySelector(".nav-menu");a.addEventListener("click",(()=>{l.classList.add("show");const e=document.createElement("div");e.classList.add("overlay"),document.body.appendChild(e),document.body.classList.add("overflow-hidden"),e.addEventListener("click",(()=>{l.classList.remove("show"),document.body.classList.remove("overflow-hidden"),e.remove()}))})),document.addEventListener("click",(e=>{const t=l.contains(e.target),n=a.contains(e.target);t||n||l.classList.remove("show")})),n&&document.addEventListener("click",(function(e){n.contains(e.target)||n.classList.remove("show")}))}));
