(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();(()=>{const s=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),l=document.querySelectorAll(".js-close-menu"),n=()=>{const e=o.getAttribute("aria-expanded")==="true"||!1;o.setAttribute("aria-expanded",!e),s.classList.toggle("is-open");const t=e?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[t](document.body)};o.addEventListener("click",n),l.forEach(e=>e.addEventListener("click",n)),window.matchMedia("(min-width: 768px)").addEventListener("change",e=>{e.matches&&(s.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();document.addEventListener("DOMContentLoaded",function(){["data-first-modal","data-second-modal","data-third-modal"].forEach(o=>{const l=o+"-open",n=o+"-close",e=document.querySelectorAll(`[${l}]`),t=document.querySelectorAll(`[${n}]`),r=document.querySelector(`[${o}]`);if(r||d("Can`t find Modal with attribute "+r),e.length===0&&d("Can`t find Open modal button with attribute "+l),t.length===0&&d("Can`t find Close modal button with attribute "+n),!r||e.length===0||t.length===0)return;e.forEach(a=>a.addEventListener("click",w)),t.forEach(a=>a.addEventListener("click",w));function w(){document.body.classList.toggle("modal-open"),r.classList.toggle("is-hidden")}})},!1);function d(s){const o="color: #bada55";console.log("%c"+s,o)}var c=".review-swiper",p={init:!1,loop:!0,speed:800,slidesPerView:1,spaceBetween:0,centeredSlides:!0,slideToClickedSlide:!0,effect:"coverflow",coverflowEffect:{rotate:50,stretch:0,depth:60,modifier:1,slideShadows:!0},grabCursor:!0,parallax:!0,pagination:{el:".review-pagination",type:"progressbar"},breakpoints:{1200:{slidesPerView:3,spaceBetween:28},768:{slidesPerView:2,spaceBetween:16}},autoplay:{delay:3e3,disableOnInteraction:!0},keyboard:{enabled:!0,onluInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1,eventsTarget:".review-swiper"}},u=new Swiper(c,p);u.init();var c=".products-swiper",p={init:!1,loop:!0,speed:800,slidesPerView:1,spaceBetween:0,centeredSlides:!0,slideToClickedSlide:!0,effect:"coverflow",coverflowEffect:{rotate:50,stretch:0,depth:60,modifier:1,slideShadows:!0},grabCursor:!0,parallax:!0,pagination:{el:".products-pagination",clickable:!0,renderBullet:function(s,o){return'<span class="'+o+'">'+(s+1)+"</span>"}},breakpoints:{1200:{slidesPerView:4},768:{slidesPerView:2.5,spaceBetween:18}},autoplay:{delay:3e3,disableOnInteraction:!0},keyboard:{enabled:!0,onluInViewport:!0,pageUpDown:!0},mousewheel:{sensitivity:1,eventsTarget:".products-swiper"}},u=new Swiper(c,p);u.init();const i=new Plyr("#features-player"),f="/test-project/assets/howmade-mobile.jpg",h="/test-project/assets/howmade-mobile@2x.jpg",b="/test-project/assets/howmade-mobile@3x.jpg",m="/test-project/assets/howmade-tablet.jpg",y="/test-project/assets/howmade-tablet@2x.jpg",v="/test-project/assets/howmade-tablet@3x.jpg",g="/test-project/assets/howmade-desktop.jpg",x="/test-project/assets/howmade-desktop@2x.jpg",S="/test-project/assets/howmade-desktop@3x.jpg";window.innerWidth>=1200&&window.devicePixelRatio>=3?i.poster=S:window.innerWidth>=1200&&window.devicePixelRatio>=2?i.poster=x:window.innerWidth>=1200&&window.devicePixelRatio>=1?i.poster=g:window.innerWidth>=768&&window.devicePixelRatio>=3?i.poster=v:window.innerWidth>=768&&window.devicePixelRatio>=2?i.poster=y:window.innerWidth>=768&&window.devicePixelRatio>=1?i.poster=m:window.innerWidth<768&&window.devicePixelRatio>=3?i.poster=b:window.innerWidth<768&&window.devicePixelRatio>=2?i.poster=h:i.poster=f;window.innerWidth>1199?i.poster=g:window.innerWidth>767?i.poster=m:i.poster=f;$('[name="phone"]').mask("(99) 99 - 99 - 999");$('[name="card"]').mask("9999 - 9999 - 9999 - 9999");