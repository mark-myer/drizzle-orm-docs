const l=document.querySelectorAll("[data-collapse-btn]");l.forEach(t=>{t.dataset.forTitle,t.addEventListener("click",()=>{const e=t.closest(".code-snippet");e&&e.classList.toggle("collapsable")})});const o=document.querySelectorAll("[data-expand-button]");o.forEach(t=>{t.dataset.forTitle,t.addEventListener("click",()=>{const e=t.closest(".code-snippet");e&&e.classList.toggle("collapsable")})});
