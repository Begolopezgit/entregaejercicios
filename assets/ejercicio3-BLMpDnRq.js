import"./main-CTKah4lz.js";let l=document.querySelector("textarea"),c=document.querySelector("button");document.querySelector("li");let s=[],r=document.querySelectorAll(".lista li");r.forEach(e=>{s.push(e.textContent.trim())});l.style.width="40%";l.style.minWidth="350px";l.style.marginBottom="5px";c.style.marginBottom="15px";r.forEach((e,t)=>{e.innerHTML=`
    <a href="#"style="display: flex; align-items: flex-start; margin-top: 3px; flex-shrink: 0;">
      <img class="elemento" src="/entregaejercicios/images/ej3-iconos/sin_check.svg" alt="" />
    </a>
    ${s[t]}
  `});function o(e){e instanceof NodeList||Array.isArray(e)?e.forEach(t=>o(t)):(e.style.listStyleType="none",e.style.display="flex",e.style.alignItems="center",e.style.gap="5px")}c.addEventListener("click",function(e){console.log(l.value),e.preventDefault();let t=l.value;s.push(t);let a=document.querySelector("ul.lista"),n=document.createElement("li");o(n),a.appendChild(n),r=document.querySelectorAll(".lista li"),r.forEach((i,u)=>{console.log(i),i.innerHTML=`
    <a href="#"style="display: flex; align-items: flex-start; margin-top: 3px; flex-shrink: 0;">
      <img class="elemento" src="/entregaejercicios/images/ej3-iconos/sin_check.svg" alt="" />
    </a>
    ${s[u]}`,document.querySelector("textarea").value=""})});let m=document.querySelector(".lista");m.addEventListener("click",function(e){if(e.target.classList.contains("elemento")){e.preventDefault();const t=e.target.closest("li");t.remove();const a=t.textContent.trim(),n=s.indexOf(a);n>-1&&s.splice(n,1)}});l.addEventListener("focus",()=>{document.querySelector("textarea").value=""});
