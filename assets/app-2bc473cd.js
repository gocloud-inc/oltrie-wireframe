import"./bootstrap.esm-191b8220.js";document.addEventListener("turbo:load",(()=>{let e=document.querySelector(".header");e&&window.addEventListener("scroll",(function(){window.scrollY>20?e.classList.add("sticky"):e.classList.remove("sticky")}));const t=e=>{e.querySelector(".dropdown-menu").classList.toggle("show")};document.querySelectorAll(".dropdown-toggle").forEach((e=>{e.addEventListener("click",(()=>{const n=e.closest(".dropdown");t(n)}))})),document.addEventListener("click",(e=>{document.querySelectorAll(".dropdown").forEach((t=>{if(!t.contains(e.target)){const e=t.querySelector(".dropdown-menu");e.classList.contains("show")&&e.classList.remove("show")}}))}));document.querySelectorAll(".dropdown-menu li a").forEach((e=>{e.addEventListener("click",(()=>{const n=e.closest(".dropdown");t(n)}))}));const n=document.getElementById("search-results"),o=document.getElementById("search-input");document.addEventListener("click",(function(e){n.contains(e.target)||n.classList.remove("show")}));const s=function(e,t){let n;return function(...o){clearTimeout(n),n=setTimeout((()=>e.apply(this,o)),t)}}((function(e){const t=e.target.value,o=t.length>0;if(n.classList.toggle("show",o),o){fetch(`https://api.github.com/search/repositories?q=${t}`).then((e=>{if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((e=>{console.log(e);const t=e.items.map((e=>{const t=document.createElement("ul");return t.classList.add("result-menu"),t.innerHTML=`\n                            <li class="result-item">\n                                <a href="${e.html_url}" class="result-link"><span class="material-symbols-rounded">location_on</span> ${e.name} ${e.language}</a>\n                            </li>\n                        `,t}));n.innerHTML="",t.forEach((e=>{n.appendChild(e)}))})).catch((e=>{console.error("Error fetching search results:",e)}))}else n.innerHTML=""}),100);o.addEventListener("input",s);const c=document.querySelectorAll(".tab-button"),r=document.querySelectorAll(".tab-panel");function a(e){r.length>e&&e>=0&&(r.forEach((e=>{e.classList.remove("active")})),r[e].classList.add("active"))}a(0),c.forEach((function(e,t){e.addEventListener("click",(function(e){!function(e){const t=e.target.dataset.tab;c.forEach((function(e){e.classList.remove("active")})),e.target.classList.add("active"),r.forEach((function(e){e.dataset.tab===t&&e.classList.add("active")}))}(e),a(t)}))}))}));
