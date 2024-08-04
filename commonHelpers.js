import{a as w,S as v,i as d}from"./assets/vendor-BPs2jpei.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function p(a,t){const r="45115917-7726aefcae109b05971acac93";try{return(await w.get("https://pixabay.com/api/",{params:{key:r,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}})).data}catch{throw new Error}}function f(a,t,r){t.insertAdjacentHTML("beforeend",L(a)),r.refresh()}function L(a){return a.map(({webformatURL:t,largeImageURL:r,tags:l,likes:e,views:s,comments:i,downloads:b})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img class="gallery-image" src="${t}" alt="${l}" />
        </a>
        <div class="gallery-info">
          <ul class="gallery-details">
            ${S(e,s,i,b)}
          </ul>
        </div>
      </li>
    `).join("")}function S(a,t,r,l){return`
    <li class="detail-item">
      <h3 class="detail-label">Likes</h3>
      <p class="detail-value">${a}</p>
    </li>
    <li class="detail-item">
      <h3 class="detail-label">Views</h3>
      <p class="detail-value">${t}</p>
    </li>
    <li class="detail-item">
      <h3 class="detail-label">Comments</h3>
      <p class="detail-value">${r}</p>
    </li>
    <li class="detail-item">
      <h3 class="detail-label">Downloads</h3>
      <p class="detail-value">${l}</p>
    </li>
  `}const m=document.querySelector(".form"),y=document.querySelector(".gallery"),u=document.querySelector(".loader"),o=document.querySelector(".load-more-btn"),g={messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight",progressBarColor:"#b51b1b"},h=new v(".gallery a",{});let n=1,c="";m.addEventListener("submit",q);o.addEventListener("click",P);async function q(a){a.preventDefault();const t=a.currentTarget[0].value.trim().toLowerCase();if(t&&t!==c){c=t,n=1,y.innerHTML="",u.style.display="block",o.style.display="none";try{const r=await p(c,n);r.hits.length===0?d.error({message:"Sorry, there are no images matching your search query. Please try again!",...g}):(f(r.hits,y,h),o.style.display="block",m.reset())}catch{d.error({message:"An error occurred while fetching data. Please try again later.",...g})}finally{u.style.display="none"}}}async function P(){n+=1,o.style.display="none",u.style.display="block";try{const a=await p(c,n);f(a.hits,y,h);const r=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:r*2+24*2,behavior:"smooth"});const l=Math.ceil(a.totalHits/15);n>=l?(o.style.display="none",d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):o.style.display="block"}catch{d.error({message:"An error occurred while fetching data. Please try again later.",...g})}finally{u.style.display="none"}}
//# sourceMappingURL=commonHelpers.js.map
