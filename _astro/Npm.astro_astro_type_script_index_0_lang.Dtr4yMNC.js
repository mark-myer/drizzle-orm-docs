const n=["npm","yarn","pnpm","bun"];let c=localStorage.getItem("package-manager")||"npm",o=n.indexOf(c);const s=r=>{l.forEach(e=>{Array.from(e.children).forEach((a,t)=>{a.classList.toggle("hidden",t!==r)})}),g.forEach(e=>{Array.from(e.children).forEach((a,t)=>{a.classList.toggle("npm__tab--active",t===r)})})},l=document.querySelectorAll(".npm__content"),g=document.querySelectorAll(".npm__tabs");l.forEach(r=>{Array.from(r.children).forEach((e,a)=>{e.classList.toggle("hidden",a!==o)})});g.forEach(r=>{Array.from(r.children).forEach((e,a)=>{e.classList.toggle("npm__tab--active",a===o),e.addEventListener("click",()=>{c=n[a],localStorage.setItem("package-manager",c),s(a)})})});
