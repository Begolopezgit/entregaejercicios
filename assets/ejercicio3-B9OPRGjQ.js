import"./main-CTKah4lz.js";let l=document.querySelector("textarea"),i=document.querySelector("button");document.querySelector("li");let s=[],r=document.querySelectorAll(".lista li");r.forEach(e=>{s.push(e.textContent.trim())});l.style.width="40%";l.style.minWidth="350px";l.style.marginBottom="5px";i.style.marginBottom="15px";r.forEach((e,t)=>{e.innerHTML=`
    <a href="#"style="display: flex; align-items: flex-start; margin-top: 3px; flex-shrink: 0;">
      <img class="elemento" src="ej3-iconos/sin_check.svg" alt="" />
    </a>
    ${s[t]}
  `});function o(e){e instanceof NodeList||Array.isArray(e)?e.forEach(t=>o(t)):(e.style.listStyleType="none",e.style.display="flex",e.style.alignItems="center",e.style.gap="5px")}i.addEventListener("click",function(e){console.log(l.value),e.preventDefault();let t=l.value;s.push(t),elUlLista=document.querySelector("ul.lista");let a=document.createElement("li");o(a),elUlLista.appendChild(a),r=document.querySelectorAll(".lista li"),r.forEach((n,c)=>{console.log(n),n.innerHTML=`
    <a href="#"style="display: flex; align-items: flex-start; margin-top: 3px; flex-shrink: 0;">
      <img class="elemento" src="src/sass/assets/images/ej3-iconos/sin_check.svg" alt="" />
    </a>
    ${s[c]}`,document.querySelector("textarea").value=""})});let u=document.querySelector(".lista");u.addEventListener("click",function(e){if(e.target.classList.contains("elemento")){e.preventDefault();const t=e.target.closest("li");t.remove();const a=t.textContent.trim(),n=s.indexOf(a);n>-1&&s.splice(n,1)}});l.addEventListener("focus",()=>{document.querySelector("textarea").value=""});
