import{S as m,a as f,i as n}from"./assets/vendor-mj6yH6lW.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const y=new m(".gallery a",{captionsData:"alt",captionDelay:250});function p(s){const t=document.querySelector(".gallery"),a=s.map(({webformatURL:o,largeImageURL:e,tags:r,likes:i,views:l,comments:u,downloads:d})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${e}">
      <img class="gallery-image" src="${o}" alt="${r}" />
    </a>
    <div class="info">
  <p> Likes ${i} </p>
  <p> Views ${l}</p>
  <p> Comments ${u}</p>
  <p>  Downloads ${d}</p>
    </div>
  </li>
`).join("");t.innerHTML=a,y.refresh()}function g(){document.querySelector(".gallery").innerHTML=""}function h(){document.querySelector(".loader").classList.remove("hidden")}function L(){document.querySelector(".loader").classList.add("hidden")}const w="49601023-171b06d69188b97ef0963e347",q="https://pixabay.com/api/";async function S(s){try{return(await f.get(q,{params:{key:w,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Error fetching images:",t),t}}const v=document.querySelector(".form"),c=document.querySelector('[name="search-text"]');v.addEventListener("submit",async s=>{s.preventDefault();const t=c.value.trim();if(!t){n.error({title:"Error",message:"Please enter a search query."});return}h();try{g();const e=await S(t);e.length===0?n.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):p(e)}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{L(),c.value=""}function a(e,r="info"){n[r]({title:r==="error"?"Помилка":"Повідомлення",message:e,position:"topRight",timeout:3e3})}const o=document.getElementById("loader");o.classList.remove("hidden");try{const e=await fetch(`https://api.example.com/images?q=${t}`);if(!e.ok)throw new Error("Не вдалося отримати дані!");const r=await e.json();a("Зображення завантажено!","success"),renderGallery(r.hits)}catch(e){a(e.message,"error")}finally{o.classList.add("hidden")}});
//# sourceMappingURL=index.js.map
