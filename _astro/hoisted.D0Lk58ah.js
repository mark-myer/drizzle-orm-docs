const c=document.querySelectorAll("[data-active-keywords]"),n=()=>{const a=window.location.href;c.forEach(e=>{if(e instanceof HTMLElement){const t=e.dataset.activeKeywords?.split(","),o=t&&t.some(s=>a.includes(s));e.classList.toggle("item_wrap_active",o)}})};window.addEventListener("hashchange",n);document.addEventListener("DOMContentLoaded",n);
