function injectStyles(e,t,r){let l=e.shadowRoot,n=!1,o=Array.from(l.querySelectorAll("style"));o.forEach((e,c)=>{if(e.innerHTML==r&&(n=!0),o.length-1==c&&0==n){let e=document.createElement("style");e.innerHTML=r,l.insertBefore(e,l.querySelector(t))}})}export{injectStyles};