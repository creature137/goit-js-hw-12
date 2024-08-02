import{a as b,S as L,i as d}from"./assets/vendor-c493984e.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function p(a,e){const s="45115917-7726aefcae109b05971acac93";try{return(await b.get("https://pixabay.com/api/",{params:{key:s,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true",page:e,per_page:15}})).data}catch{throw new Error}}function g(a,e,s){e.insertAdjacentHTML("beforeend",v(a)),s.refresh()}function v(a){return a.map(({webformatURL:e,largeImageURL:s,tags:l,likes:t,views:r,comments:i,downloads:h})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${s}">
          <img class="gallery-image" src="${e}" alt="${l}" />
        </a>
        <div class="gallery-info">
          <ul class="gallery-details">
            ${w(t,r,i,h)}
          </ul>
        </div>
      </li>
    `).join("")}function w(a,e,s,l){return`
    <li class="detail-item">
      <h3 class="detail-label">Likes</h3>
      <p class="detail-value">${a}</p>
    </li>
    <li class="detail-item">
      <h3 class="detail-label">Views</h3>
      <p class="detail-value">${e}</p>
    </li>
    <li class="detail-item">
      <h3 class="detail-label">Comments</h3>
      <p class="detail-value">${s}</p>
    </li>
    <li class="detail-item">
      <h3 class="detail-label">Downloads</h3>
      <p class="detail-value">${l}</p>
    </li>
  `}const S=document.querySelector(".form"),y=document.querySelector(".gallery"),u=document.querySelector(".loader"),o=document.querySelector(".load-more-btn"),f={messageColor:"#fafafb",messageSize:"16px",messageLineHeight:"1.5",backgroundColor:"#ef4040",position:"topRight",progressBarColor:"#b51b1b"},m=new L(".gallery a",{});let n=1,c="";S.addEventListener("submit",P);o.addEventListener("click",q);async function P(a){a.preventDefault();const e=a.currentTarget[0].value.trim().toLowerCase();if(e&&e!==c){c=e,n=1,y.innerHTML="",u.style.display="block",o.style.display="none";try{const s=await p(c,n);s.hits.length===0?d.error({message:"Sorry, there are no images matching your search query. Please try again!",...f}):(g(s.hits,y,m),o.style.display="block")}catch{d.error({message:"An error occurred while fetching data. Please try again later.",...f})}finally{u.style.display="none"}}}async function q(){n+=1,o.style.display="none",u.style.display="block";try{const a=await p(c,n);g(a.hits,y,m);const e=Math.ceil(a.totalHits/15);n>=e?(o.style.display="none",d.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):o.style.display="block"}catch{d.error({message:"An error occurred while fetching data. Please try again later.",...f})}finally{u.style.display="none"}}
//# sourceMappingURL=commonHelpers.js.map
