import{a as u,S as p,i as n}from"./assets/vendor-DYLXiCJH.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const d="48882544-91bb6160508b612126ca5843a",f="https://pixabay.com/api/";function g(r){return u.get(f,{params:{key:d,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(s=>s.data.hits).catch(s=>{console.log(s)})}function h(r){const{webformatURL:s,largeImageURL:a,tags:o,likes:e,views:t,comments:i,downloads:m}=r;return`<li class="gallery__item">
          <a href="${a}" class="gallery__link"> 
            <img src="${s}" alt="${o}" class="gallery__image" />
          </a>
          <div class="stats">
            <div class="stats-item">
              <p class="stats-text">Likes</p>
              <p class="stats-number">${e}</p>
            </div>
            <div class="stats-item">
              <p class="stats-text">Views</p>     
              <p class="stats-number">${t}</p>
            </div>
            <div class="stats-item">
              <p class="stats-text">Comments</p>  
              <p class="stats-number">${i}</p>
            </div>
            <div class="stats-item">
              <p class="stats-text">Downloads</p>
              <p class="stats-number">${m}</p>
            </div>
          </div>
        </li>`}function y(r){return r.map(h).join("")}const v=new p(".gallery__list a",{captionsData:"alt",captionDelay:250}),b=document.querySelector(".form__container"),l=document.querySelector(".gallery__list"),c=document.querySelector(".loader");b.addEventListener("submit",r=>{r.preventDefault();const s=r.target.elements.search.value.trim();if(!s){n.warning({message:"Please enter a search term!",position:"topRight"});return}l.innerHTML="",c.classList.remove("hidden"),g(s).then(a=>{if(c.classList.add("hidden"),a.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}l.innerHTML=y(a),v.refresh()})});
//# sourceMappingURL=index.js.map
