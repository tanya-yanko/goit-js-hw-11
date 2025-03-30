import{S as d,a as m,i}from"./assets/vendor-DX6Zyy2w.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const f=new d(".gallery a",{captionsData:"alt",captionDelay:250});function y(a){const t=document.querySelector(".gallery"),o=a.map(({webformatURL:n,largeImageURL:e,tags:r,likes:s,views:c,comments:l,downloads:u})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${e}">
      <img class="gallery-image" src="${n}" alt="${r}" />
    </a>
    <div class="info">
  <p> Likes ${s} </p>
  <p> Views ${c}</p>
  <p> Comments ${l}</p>
  <p>  Downloads ${u}</p>
    </div>
  </li>
`).join("");t.innerHTML=o,f.refresh()}function p(){document.querySelector(".gallery").innerHTML=""}function g(){document.querySelector(".loader").classList.remove("hidden")}function h(){document.querySelector(".loader").classList.add("hidden")}const L="49601023-171b06d69188b97ef0963e347",S="https://pixabay.com/api/";async function q(a){try{return(await m.get(S,{params:{key:L,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Error fetching images:",t),t}}const w=document.querySelector(".form"),b=document.querySelector('[name="search-text"]');w.addEventListener("submit",async a=>{a.preventDefault();const t=b.value.trim();if(!t){i.error({title:"Error",message:"Please enter a search query."});return}g();try{p();const o=await q(t);o.length===0?i.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):y(o)}catch{i.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{h()}});
//# sourceMappingURL=index.js.map
