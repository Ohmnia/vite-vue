(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l="/assets/javascript-8dac5379.svg",u="/assets/vite-4a748afd.svg";function d(i){let o=0;const r=s=>{o=s,i.innerHTML=`count is ${o}`};i.addEventListener("click",()=>r(o+1)),r(0)}document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${u}" class="vLogo" alt="Vite logo" id="viteLogo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${l}" class="jLogo" alt="JavaScript logo" id="javascriptLogo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;d(document.querySelector("#counter"));const n=document.querySelector("#javascriptLogo"),a=document.querySelector("#viteLogo"),p=document.querySelector("#app");setTimeout(async()=>{n.setAttribute("class","jMove"),a.setAttribute("class","vMove"),setTimeout(async()=>{p.setAttribute("class","moveUp"),setTimeout(async()=>{n.setAttribute("class","jEnd"),a.setAttribute("class","vEnd")},1e3)},500)},2e3);
