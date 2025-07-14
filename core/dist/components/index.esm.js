import require$$1, { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { useState, useEffect, createContext, useContext, useRef, useCallback, useMemo, useLayoutEffect, forwardRef, Fragment as Fragment$1, isValidElement, cloneElement, createElement, useId as useId$1, useReducer, useSyncExternalStore } from 'react';
import * as ReactDOM from 'react-dom';
import { createPortal, flushSync } from 'react-dom';

var M$3=(e,i,s,u,m,a,l,h)=>{let d=document.documentElement,w=["light","dark"];function p(n){(Array.isArray(e)?e:[e]).forEach(y=>{let k=y==="class",S=k&&a?m.map(f=>a[f]||f):m;k?(d.classList.remove(...S),d.classList.add(a&&a[n]?a[n]:n)):d.setAttribute(y,n);}),R(n);}function R(n){h&&w.includes(n)&&(d.style.colorScheme=n);}function c(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}if(u)p(u);else try{let n=localStorage.getItem(i)||s,y=l&&n==="system"?c():n;p(y);}catch(n){}};var b$3=["light","dark"],I$3="(prefers-color-scheme: dark)",O$4=typeof window=="undefined",x$4=React.createContext(void 0),U$3={setTheme:e=>{},themes:[]},z=()=>{var e;return (e=React.useContext(x$4))!=null?e:U$3},J$2=e=>React.useContext(x$4)?React.createElement(React.Fragment,null,e.children):React.createElement(V$1,{...e}),N$1=["light","dark"],V$1=({forcedTheme:e,disableTransitionOnChange:i=false,enableSystem:s=true,enableColorScheme:u=true,storageKey:m="theme",themes:a=N$1,defaultTheme:l=s?"system":"light",attribute:h="data-theme",value:d,children:w,nonce:p,scriptProps:R})=>{let[c,n]=React.useState(()=>H$3(m,l)),[T,y]=React.useState(()=>c==="system"?E$5():c),k=d?Object.values(d):a,S=React.useCallback(o=>{let r=o;if(!r)return;o==="system"&&s&&(r=E$5());let v=d?d[r]:r,C=i?W(p):null,P=document.documentElement,L=g=>{g==="class"?(P.classList.remove(...k),v&&P.classList.add(v)):g.startsWith("data-")&&(v?P.setAttribute(g,v):P.removeAttribute(g));};if(Array.isArray(h)?h.forEach(L):L(h),u){let g=b$3.includes(l)?l:null,D=b$3.includes(r)?r:g;P.style.colorScheme=D;}C==null||C();},[p]),f=React.useCallback(o=>{let r=typeof o=="function"?o(c):o;n(r);try{localStorage.setItem(m,r);}catch(v){}},[c]),A=React.useCallback(o=>{let r=E$5(o);y(r),c==="system"&&s&&!e&&S("system");},[c,e]);React.useEffect(()=>{let o=window.matchMedia(I$3);return o.addListener(A),A(o),()=>o.removeListener(A)},[A]),React.useEffect(()=>{let o=r=>{r.key===m&&(r.newValue?n(r.newValue):f(l));};return window.addEventListener("storage",o),()=>window.removeEventListener("storage",o)},[f]),React.useEffect(()=>{S(e!=null?e:c);},[e,c]);let Q=React.useMemo(()=>({theme:c,setTheme:f,forcedTheme:e,resolvedTheme:c==="system"?T:c,themes:s?[...a,"system"]:a,systemTheme:s?T:void 0}),[c,f,e,T,s,a]);return React.createElement(x$4.Provider,{value:Q},React.createElement(_$3,{forcedTheme:e,storageKey:m,attribute:h,enableSystem:s,enableColorScheme:u,defaultTheme:l,value:d,themes:a,nonce:p,scriptProps:R}),w)},_$3=React.memo(({forcedTheme:e,storageKey:i,attribute:s,enableSystem:u,enableColorScheme:m,defaultTheme:a,value:l,themes:h,nonce:d,scriptProps:w})=>{let p=JSON.stringify([s,i,a,e,h,l,u,m]).slice(1,-1);return React.createElement("script",{...w,suppressHydrationWarning:true,nonce:typeof window=="undefined"?d:"",dangerouslySetInnerHTML:{__html:`(${M$3.toString()})(${p})`}})}),H$3=(e,i)=>{if(O$4)return;let s;try{s=localStorage.getItem(e)||void 0;}catch(u){}return s||i},W=e=>{let i=document.createElement("style");return e&&i.setAttribute("nonce",e),i.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(i),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(i);},1);}},E$5=e=>(e||(e=window.matchMedia(I$3)),e.matches?"dark":"light");

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=fallback\");@import url(\"https://fonts.googleapis.com/css2?family=Reddit+Sans:ital,wght@0,200..900;1,200..900&display=swap\");@layer theme, base, components, utilities;@layer theme{:host,:root{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-serif:ui-serif,Georgia,Cambria,\"Times New Roman\",Times,serif;--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-red-50:#ffe8e8;--color-red-300:#ff9494;--color-red-400:#ff7474;--color-red-500:#ff5656;--color-red-600:#fa4949;--color-indigo-500:#9b49ff;--color-indigo-600:#6a2dba;--color-violet-100:#e6e1ff;--color-violet-400:#9c8cff;--color-violet-500:#8470ff;--color-violet-600:#755ff8;--color-violet-700:#5d47de;--color-violet-800:#4634b1;--color-violet-900:#2f227c;--color-violet-950:#1c1357;--color-slate-900:oklch(20.8% 0.042 265.755);--color-gray-50:#f9fafb;--color-gray-100:#f3f4f6;--color-gray-200:#e5e7eb;--color-gray-300:#bfc4cd;--color-gray-400:#9ca3af;--color-gray-500:#6b7280;--color-gray-600:#4b5563;--color-gray-700:#374151;--color-gray-800:#1f2937;--color-gray-900:#111827;--color-gray-950:#030712;--color-black:#000;--color-white:#fff;--spacing:0.25rem;--container-sm:24rem;--container-lg:32rem;--text-xs:0.75rem;--text-xs--line-height:1.5;--text-sm:0.875rem;--text-sm--line-height:1.5715;--text-lg:1.125rem;--text-lg--line-height:1.5;--text-2xl:1.5rem;--text-2xl--line-height:1.33;--text-3xl:1.88rem;--text-3xl--line-height:1.33;--text-4xl:2.25rem;--text-4xl--line-height:1.25;--text-5xl:3rem;--text-5xl--line-height:1.25;--font-weight-normal:400;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--font-weight-extrabold:800;--tracking-tighter:-0.05em;--tracking-tight:-0.025em;--tracking-normal:0em;--tracking-widest:0.1em;--leading-relaxed:1.625;--radius-sm:0.25rem;--radius-md:0.375rem;--radius-lg:0.5rem;--radius-2xl:1rem;--shadow-2xs:0 1px rgba(0,0,0,.05);--shadow-xs:0 1px 2px 0 rgba(0,0,0,.05);--shadow-sm:0 1px 1px 0 rgba(0,0,0,.05),0 1px 2px 0 rgba(0,0,0,.02);--shadow-md:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--shadow-lg:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--shadow-xl:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--shadow-2xl:0 25px 50px -12px rgba(0,0,0,.25);--ease-out:cubic-bezier(0,0,0.2,1);--ease-in-out:cubic-bezier(0.4,0,0.2,1);--animate-pulse:pulse 2s cubic-bezier(0.4,0,0.6,1) infinite;--blur-sm:8px;--blur-md:12px;--aspect-video:16/9;--default-transition-duration:150ms;--default-transition-timing-function:cubic-bezier(0.4,0,0.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--font-inter:\"Inter\",\"sans-serif\";--font-reddit:\"Reddit Sans\",\"sans-serif\";--text-lg--letter-spacing:-0.01em;--text-2xl--letter-spacing:-0.01em;--text-3xl--letter-spacing:-0.01em;--text-4xl--letter-spacing:-0.02em;--text-5xl--letter-spacing:-0.02em}}@layer base{*,::backdrop,::file-selector-button,:after,:before{border:0 solid;box-sizing:border-box;margin:0;padding:0}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:var(--default-font-feature-settings,normal);-webkit-tap-highlight-color:transparent;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-variation-settings:var(--default-font-variation-settings,normal);line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:var(--default-mono-font-feature-settings,normal);font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-size:1em;font-variation-settings:var(--default-mono-font-variation-settings,normal)}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}menu,ol,ul{list-style:none}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}::file-selector-button,button,input,optgroup,select,textarea{font-feature-settings:inherit;background-color:transparent;border-radius:0;color:inherit;font:inherit;font-variation-settings:inherit;letter-spacing:inherit;opacity:1}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentcolor;@supports (color:color-mix(in lab,red,red)){color:color-mix(in oklab,currentcolor 50%,transparent)}}::placeholder{color:currentcolor;@supports (color:color-mix(in lab,red,red)){color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-year-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}::file-selector-button,button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer utilities{.pointer-events-auto{pointer-events:auto}.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.invisible{visibility:hidden}.visible{visibility:visible}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.not-sr-only{clip:auto;height:auto;margin:0;overflow:visible;padding:0;position:static;white-space:normal;width:auto}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.-inset-1{inset:calc(var(--spacing)*-1)}.inset-0{inset:calc(var(--spacing)*0)}.inset-x-0{inset-inline:calc(var(--spacing)*0)}.inset-y-0{inset-block:calc(var(--spacing)*0)}.-top-12{top:calc(var(--spacing)*-12)}.top-0{top:calc(var(--spacing)*0)}.top-1{top:calc(var(--spacing)*1)}.top-1\\/2{top:50%}.top-2{top:calc(var(--spacing)*2)}.top-4{top:calc(var(--spacing)*4)}.top-\\[1px\\]{top:1px}.top-\\[50\\%\\]{top:50%}.top-\\[60\\%\\]{top:60%}.top-full{top:100%}.-right-12{right:calc(var(--spacing)*-12)}.right-0{right:calc(var(--spacing)*0)}.right-1{right:calc(var(--spacing)*1)}.right-2{right:calc(var(--spacing)*2)}.right-4{right:calc(var(--spacing)*4)}.-bottom-12{bottom:calc(var(--spacing)*-12)}.bottom-0{bottom:calc(var(--spacing)*0)}.-left-12{left:calc(var(--spacing)*-12)}.left-0{left:calc(var(--spacing)*0)}.left-1{left:calc(var(--spacing)*1)}.left-1\\/2{left:50%}.left-2{left:calc(var(--spacing)*2)}.left-\\[50\\%\\]{left:50%}.isolate{isolation:isolate}.isolation-auto{isolation:auto}.z-10{z-index:10}.z-30{z-index:30}.z-40{z-index:40}.z-50{z-index:50}.z-\\[1\\]{z-index:1}.z-\\[100\\]{z-index:100}.container{width:100%;@media (width >= 480px){max-width:480px}@media (width >= 40rem){max-width:40rem}@media (width >= 48rem){max-width:48rem}@media (width >= 64rem){max-width:64rem}@media (width >= 80rem){max-width:80rem}@media (width >= 96rem){max-width:96rem}}.-mx-1{margin-inline:calc(var(--spacing)*-1)}.mx-auto{margin-inline:auto}.my-0{margin-block:calc(var(--spacing)*0)}.my-0\\.5{margin-block:calc(var(--spacing)*.5)}.my-1{margin-block:calc(var(--spacing)*1)}.-mt-4{margin-top:calc(var(--spacing)*-4)}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-1\\.5{margin-top:calc(var(--spacing)*1.5)}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-24{margin-top:calc(var(--spacing)*24)}.mt-auto{margin-top:auto}.mr-2{margin-right:calc(var(--spacing)*2)}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\.5{margin-bottom:calc(var(--spacing)*.5)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-5{margin-bottom:calc(var(--spacing)*5)}.-ml-4{margin-left:calc(var(--spacing)*-4)}.ml-1{margin-left:calc(var(--spacing)*1)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-4{margin-left:calc(var(--spacing)*4)}.ml-auto{margin-left:auto}.block{display:block}.contents{display:contents}.flex{display:flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.inline{display:inline}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.inline-grid{display:inline-grid}.inline-table{display:inline-table}.list-item{display:list-item}.table{display:table}.table-caption{display:table-caption}.table-cell{display:table-cell}.table-column{display:table-column}.table-column-group{display:table-column-group}.table-footer-group{display:table-footer-group}.table-header-group{display:table-header-group}.table-row{display:table-row}.table-row-group{display:table-row-group}.aspect-square{aspect-ratio:1/1}.aspect-video{aspect-ratio:var(--aspect-video)}.h-1{height:calc(var(--spacing)*1)}.h-1\\.5{height:calc(var(--spacing)*1.5)}.h-2{height:calc(var(--spacing)*2)}.h-2\\.5{height:calc(var(--spacing)*2.5)}.h-3{height:calc(var(--spacing)*3)}.h-3\\.5{height:calc(var(--spacing)*3.5)}.h-4{height:calc(var(--spacing)*4)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-7{height:calc(var(--spacing)*7)}.h-8{height:calc(var(--spacing)*8)}.h-9{height:calc(var(--spacing)*9)}.h-10{height:calc(var(--spacing)*10)}.h-11{height:calc(var(--spacing)*11)}.h-12{height:calc(var(--spacing)*12)}.h-16{height:calc(var(--spacing)*16)}.h-\\[1px\\]{height:1px}.h-\\[100dvh\\]{height:100dvh}.h-\\[100vh\\]{height:100vh}.h-\\[var\\(--radix-navigation-menu-viewport-height\\)\\]{height:var(--radix-navigation-menu-viewport-height)}.h-\\[var\\(--radix-select-trigger-height\\)\\]{height:var(--radix-select-trigger-height)}.h-auto{height:auto}.h-full{height:100%}.h-px{height:1px}.max-h-96{max-height:calc(var(--spacing)*96)}.max-h-\\[300px\\]{max-height:300px}.max-h-screen{max-height:100vh}.min-h-\\[80px\\]{min-height:80px}.w-0{width:calc(var(--spacing)*0)}.w-1{width:calc(var(--spacing)*1)}.w-2{width:calc(var(--spacing)*2)}.w-2\\.5{width:calc(var(--spacing)*2.5)}.w-3{width:calc(var(--spacing)*3)}.w-3\\.5{width:calc(var(--spacing)*3.5)}.w-3\\/4{width:75%}.w-4{width:calc(var(--spacing)*4)}.w-5{width:calc(var(--spacing)*5)}.w-6{width:calc(var(--spacing)*6)}.w-7{width:calc(var(--spacing)*7)}.w-8{width:calc(var(--spacing)*8)}.w-9{width:calc(var(--spacing)*9)}.w-10{width:calc(var(--spacing)*10)}.w-11{width:calc(var(--spacing)*11)}.w-12{width:calc(var(--spacing)*12)}.w-64{width:calc(var(--spacing)*64)}.w-72{width:calc(var(--spacing)*72)}.w-\\[1px\\]{width:1px}.w-\\[100px\\]{width:100px}.w-full{width:100%}.w-max{width:-moz-max-content;width:max-content}.w-px{width:1px}.max-w-lg{max-width:var(--container-lg)}.max-w-max{max-width:-moz-max-content;max-width:max-content}.min-w-0{min-width:calc(var(--spacing)*0)}.min-w-\\[8rem\\]{min-width:8rem}.min-w-\\[11rem\\]{min-width:11rem}.min-w-\\[12rem\\]{min-width:12rem}.min-w-\\[var\\(--radix-select-trigger-width\\)\\]{min-width:var(--radix-select-trigger-width)}.min-w-fit{min-width:-moz-fit-content;min-width:fit-content}.flex-1{flex:1}.shrink{flex-shrink:1}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.grow-0{flex-grow:0}.basis-full{flex-basis:100%}.caption-bottom{caption-side:bottom}.border-collapse{border-collapse:collapse}.origin-top-right{transform-origin:top right}.-translate-x-1{--tw-translate-x:calc(var(--spacing)*-1)}.-translate-x-1,.-translate-x-1\\/2{translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-x-1\\/2{--tw-translate-x:-50%}.-translate-x-64{--tw-translate-x:calc(var(--spacing)*-64)}.-translate-x-64,.translate-x-0{translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0)}.translate-x-\\[-50\\%\\]{--tw-translate-x:-50%}.-translate-y-1,.translate-x-\\[-50\\%\\]{translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-1{--tw-translate-y:calc(var(--spacing)*-1)}.-translate-y-1\\/2{--tw-translate-y:-50%}.-translate-y-1\\/2,.-translate-y-2{translate:var(--tw-translate-x) var(--tw-translate-y)}.-translate-y-2{--tw-translate-y:calc(var(--spacing)*-2)}.translate-y-0{--tw-translate-y:calc(var(--spacing)*0)}.translate-y-0,.translate-y-\\[-50\\%\\]{translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-\\[-50\\%\\]{--tw-translate-y:-50%}.translate-none{translate:none}.scale-3d{scale:var(--tw-scale-x) var(--tw-scale-y) var(--tw-scale-z)}.rotate-45{rotate:45deg}.rotate-90{rotate:90deg}.rotate-180{rotate:180deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.animate-pulse{animation:var(--animate-pulse)}.cursor-default{cursor:default}.cursor-pointer{cursor:pointer}.touch-pinch-zoom{--tw-pinch-zoom:pinch-zoom;touch-action:var(--tw-pan-x,) var(--tw-pan-y,) var(--tw-pinch-zoom,)}.touch-none{touch-action:none}.resize{resize:both}.list-none{list-style-type:none}.flex-col{flex-direction:column}.flex-col-reverse{flex-direction:column-reverse}.flex-row{flex-direction:row}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.items-end{align-items:flex-end}.items-start{align-items:flex-start}.items-stretch{align-items:stretch}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-1{gap:calc(var(--spacing)*1)}.gap-1\\.5{gap:calc(var(--spacing)*1.5)}.gap-2{gap:calc(var(--spacing)*2)}.gap-4{gap:calc(var(--spacing)*4)}.space-y-0{:where(&>:not(:last-child)){--tw-space-y-reverse:0;margin-block-end:calc(var(--spacing)*0*(1 - var(--tw-space-y-reverse)));margin-block-start:calc(var(--spacing)*0*var(--tw-space-y-reverse))}}.space-y-1{:where(&>:not(:last-child)){--tw-space-y-reverse:0;margin-block-end:calc(var(--spacing)*1*(1 - var(--tw-space-y-reverse)));margin-block-start:calc(var(--spacing)*1*var(--tw-space-y-reverse))}}.space-y-1\\.5{:where(&>:not(:last-child)){--tw-space-y-reverse:0;margin-block-end:calc(var(--spacing)*1.5*(1 - var(--tw-space-y-reverse)));margin-block-start:calc(var(--spacing)*1.5*var(--tw-space-y-reverse))}}.space-y-2{:where(&>:not(:last-child)){--tw-space-y-reverse:0;margin-block-end:calc(var(--spacing)*2*(1 - var(--tw-space-y-reverse)));margin-block-start:calc(var(--spacing)*2*var(--tw-space-y-reverse))}}.space-y-4{:where(&>:not(:last-child)){--tw-space-y-reverse:0;margin-block-end:calc(var(--spacing)*4*(1 - var(--tw-space-y-reverse)));margin-block-start:calc(var(--spacing)*4*var(--tw-space-y-reverse))}}.space-y-reverse{:where(&>:not(:last-child)){--tw-space-y-reverse:1}}.space-x-1{:where(&>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-end:calc(var(--spacing)*1*(1 - var(--tw-space-x-reverse)));margin-inline-start:calc(var(--spacing)*1*var(--tw-space-x-reverse))}}.space-x-3{:where(&>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-end:calc(var(--spacing)*3*(1 - var(--tw-space-x-reverse)));margin-inline-start:calc(var(--spacing)*3*var(--tw-space-x-reverse))}}.space-x-4{:where(&>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-end:calc(var(--spacing)*4*(1 - var(--tw-space-x-reverse)));margin-inline-start:calc(var(--spacing)*4*var(--tw-space-x-reverse))}}.space-x-reverse{:where(&>:not(:last-child)){--tw-space-x-reverse:1}}.divide-x{:where(&>:not(:last-child)){--tw-divide-x-reverse:0;border-inline-end-width:calc(1px*(1 - var(--tw-divide-x-reverse)));border-inline-start-width:calc(1px*var(--tw-divide-x-reverse));border-inline-style:var(--tw-border-style)}}.divide-y{:where(&>:not(:last-child)){--tw-divide-y-reverse:0;border-bottom-style:var(--tw-border-style);border-bottom-width:calc(1px*(1 - var(--tw-divide-y-reverse)));border-top-style:var(--tw-border-style);border-top-width:calc(1px*var(--tw-divide-y-reverse))}}.divide-y-reverse{:where(&>:not(:last-child)){--tw-divide-y-reverse:1}}.truncate{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.overflow-auto{overflow:auto}.overflow-hidden{overflow:hidden}.overflow-x-hidden{overflow-x:hidden}.overflow-y-auto{overflow-y:auto}.overflow-y-scroll{overflow-y:scroll}.rounded{border-radius:.25rem}.rounded-\\[2px\\]{border-radius:2px}.rounded-\\[inherit\\]{border-radius:inherit}.rounded-full{border-radius:calc(infinity * 1px)}.rounded-lg{border-radius:var(--radius-lg)}.rounded-md{border-radius:var(--radius-md)}.rounded-sm{border-radius:var(--radius-sm)}.rounded-s{border-end-start-radius:.25rem}.rounded-s,.rounded-ss{border-start-start-radius:.25rem}.rounded-e{border-end-end-radius:.25rem}.rounded-e,.rounded-se{border-start-end-radius:.25rem}.rounded-ee{border-end-end-radius:.25rem}.rounded-es{border-end-start-radius:.25rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.rounded-t-\\[10px\\]{border-top-left-radius:10px;border-top-right-radius:10px}.rounded-l{border-bottom-left-radius:.25rem}.rounded-l,.rounded-tl{border-top-left-radius:.25rem}.rounded-tl-sm{border-top-left-radius:var(--radius-sm)}.rounded-r{border-bottom-right-radius:.25rem;border-top-right-radius:.25rem}.rounded-r-2xl{border-bottom-right-radius:var(--radius-2xl);border-top-right-radius:var(--radius-2xl)}.rounded-tr{border-top-right-radius:.25rem}.rounded-b{border-bottom-left-radius:.25rem}.rounded-b,.rounded-br{border-bottom-right-radius:.25rem}.rounded-bl{border-bottom-left-radius:.25rem}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-\\[1\\.5px\\]{border-style:var(--tw-border-style);border-width:1.5px}.border-x{border-inline-style:var(--tw-border-style);border-inline-width:1px}.border-y{border-block-style:var(--tw-border-style);border-block-width:1px}.border-s{border-inline-start-style:var(--tw-border-style);border-inline-start-width:1px}.border-e{border-inline-end-style:var(--tw-border-style);border-inline-end-width:1px}.border-t{border-top-style:var(--tw-border-style);border-top-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-l{border-left-style:var(--tw-border-style);border-left-width:1px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-none{--tw-border-style:none;border-style:none}.border-\\[--color-border\\]{border-color:--color-border}.border-gray-200{border-color:var(--color-gray-200)}.border-indigo-500{border-color:var(--color-indigo-500)}.border-transparent{border-color:transparent}.border-t-transparent{border-top-color:transparent}.border-l-transparent{border-left-color:transparent}.bg-\\[--color-bg\\]{background-color:--color-bg}.bg-black{background-color:var(--color-black)}.bg-black\\/80{background-color:color-mix(in srgb,#000 80%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-black) 80%,transparent)}}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-900\\/30{background-color:color-mix(in srgb,#111827 30%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-gray-900) 30%,transparent)}}.bg-indigo-500{background-color:var(--color-indigo-500)}.bg-transparent{background-color:transparent}.bg-white{background-color:var(--color-white)}.bg-linear-to-r{--tw-gradient-position:to right;@supports (background-image:linear-gradient(in lab,red,red)){--tw-gradient-position:to right in oklab}background-image:linear-gradient(var(--tw-gradient-stops))}.from-indigo-500{--tw-gradient-from:var(--color-indigo-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from) var(--tw-gradient-from-position),var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-indigo-500\\/\\[0\\.12\\]{--tw-gradient-from:color-mix(in srgb,#9b49ff 12%,transparent);@supports (color:color-mix(in lab,red,red)){--tw-gradient-from:color-mix(in oklab,var(--color-indigo-500) 12%,transparent)}--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from) var(--tw-gradient-from-position),var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-indigo-500{--tw-gradient-to:var(--color-indigo-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from) var(--tw-gradient-from-position),var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-indigo-500\\/\\[0\\.04\\]{--tw-gradient-to:color-mix(in srgb,#9b49ff 4%,transparent);@supports (color:color-mix(in lab,red,red)){--tw-gradient-to:color-mix(in oklab,var(--color-indigo-500) 4%,transparent)}--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from) var(--tw-gradient-from-position),var(--tw-gradient-to) var(--tw-gradient-to-position))}.bg-repeat{background-repeat:repeat}.mask-no-clip{-webkit-mask-clip:no-clip;mask-clip:no-clip}.mask-repeat{-webkit-mask-repeat:repeat;mask-repeat:repeat}.fill-current{fill:currentcolor}.p-0{padding:calc(var(--spacing)*0)}.p-1{padding:calc(var(--spacing)*1)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.p-6{padding:calc(var(--spacing)*6)}.p-\\[1px\\]{padding:1px}.px-2{padding-inline:calc(var(--spacing)*2)}.px-2\\.5{padding-inline:calc(var(--spacing)*2.5)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-5{padding-inline:calc(var(--spacing)*5)}.px-8{padding-inline:calc(var(--spacing)*8)}.py-0{padding-block:calc(var(--spacing)*0)}.py-0\\.5{padding-block:calc(var(--spacing)*.5)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.py-3{padding-block:calc(var(--spacing)*3)}.py-4{padding-block:calc(var(--spacing)*4)}.py-6{padding-block:calc(var(--spacing)*6)}.pt-0{padding-top:calc(var(--spacing)*0)}.pt-0\\.5{padding-top:calc(var(--spacing)*.5)}.pt-1{padding-top:calc(var(--spacing)*1)}.pt-3{padding-top:calc(var(--spacing)*3)}.pt-4{padding-top:calc(var(--spacing)*4)}.pr-2{padding-right:calc(var(--spacing)*2)}.pr-2\\.5{padding-right:calc(var(--spacing)*2.5)}.pr-3{padding-right:calc(var(--spacing)*3)}.pr-8{padding-right:calc(var(--spacing)*8)}.pb-2{padding-bottom:calc(var(--spacing)*2)}.pb-3{padding-bottom:calc(var(--spacing)*3)}.pb-4{padding-bottom:calc(var(--spacing)*4)}.pl-2{padding-left:calc(var(--spacing)*2)}.pl-2\\.5{padding-left:calc(var(--spacing)*2.5)}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-4{padding-left:calc(var(--spacing)*4)}.pl-5{padding-left:calc(var(--spacing)*5)}.pl-8{padding-left:calc(var(--spacing)*8)}.text-center{text-align:center}.text-left{text-align:left}.align-middle{vertical-align:middle}.font-mono{font-family:var(--font-mono)}.font-reddit{font-family:var(--font-reddit)}.text-2xl{font-size:var(--text-2xl);letter-spacing:var(--tw-tracking,var(--text-2xl--letter-spacing));line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-lg{font-size:var(--text-lg);letter-spacing:var(--tw-tracking,var(--text-lg--letter-spacing));line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.text-\\[0\\.8rem\\]{font-size:.8rem}.leading-5{--tw-leading:calc(var(--spacing)*5);line-height:calc(var(--spacing)*5)}.leading-none{--tw-leading:1;line-height:1}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-normal{--tw-font-weight:var(--font-weight-normal);font-weight:var(--font-weight-normal)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-tight{--tw-tracking:var(--tracking-tight);letter-spacing:var(--tracking-tight)}.tracking-widest{--tw-tracking:var(--tracking-widest);letter-spacing:var(--tracking-widest)}.text-wrap{text-wrap:wrap}.break-words{overflow-wrap:break-word}.text-clip{text-overflow:clip}.text-ellipsis{text-overflow:ellipsis}.whitespace-nowrap{white-space:nowrap}.text-black{color:var(--color-black)}.text-current{color:currentcolor}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\/80{color:color-mix(in srgb,#6b7280 80%,transparent);@supports (color:color-mix(in lab,red,red)){color:color-mix(in oklab,var(--color-gray-500) 80%,transparent)}}.text-gray-600{color:var(--color-gray-600)}.text-gray-800{color:var(--color-gray-800)}.text-indigo-500{color:var(--color-indigo-500)}.text-violet-500{color:var(--color-violet-500)}.text-violet-600{color:var(--color-violet-600)}.text-white{color:var(--color-white)}.capitalize{text-transform:capitalize}.lowercase{text-transform:lowercase}.normal-case{text-transform:none}.uppercase{text-transform:uppercase}.italic{font-style:italic}.not-italic{font-style:normal}.diagonal-fractions{--tw-numeric-fraction:diagonal-fractions}.diagonal-fractions,.lining-nums{font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.lining-nums{--tw-numeric-figure:lining-nums}.oldstyle-nums{--tw-numeric-figure:oldstyle-nums}.oldstyle-nums,.ordinal{font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.ordinal{--tw-ordinal:ordinal}.proportional-nums{--tw-numeric-spacing:proportional-nums}.proportional-nums,.slashed-zero{font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.slashed-zero{--tw-slashed-zero:slashed-zero}.stacked-fractions{--tw-numeric-fraction:stacked-fractions}.stacked-fractions,.tabular-nums{font-variant-numeric:var(--tw-ordinal,) var(--tw-slashed-zero,) var(--tw-numeric-figure,) var(--tw-numeric-spacing,) var(--tw-numeric-fraction,)}.tabular-nums{--tw-numeric-spacing:tabular-nums}.normal-nums{font-variant-numeric:normal}.line-through{text-decoration-line:line-through}.no-underline{text-decoration-line:none}.overline{text-decoration-line:overline}.underline{text-decoration-line:underline}.underline-offset-4{text-underline-offset:4px}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.subpixel-antialiased{-webkit-font-smoothing:auto;-moz-osx-font-smoothing:auto}.opacity-0{opacity:0}.opacity-50{opacity:50%}.opacity-60{opacity:60%}.opacity-70{opacity:70%}.opacity-90{opacity:90%}.opacity-100{opacity:100%}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,rgba(0,0,0,.1)),0 1px 2px -1px var(--tw-shadow-color,rgba(0,0,0,.1))}.shadow,.shadow-lg{box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,rgba(0,0,0,.1)),0 4px 6px -4px var(--tw-shadow-color,rgba(0,0,0,.1))}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,rgba(0,0,0,.1)),0 2px 4px -2px var(--tw-shadow-color,rgba(0,0,0,.1))}.shadow-md,.shadow-sm{box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 1px 0 var(--tw-shadow-color,rgba(0,0,0,.05)),0 1px 2px 0 var(--tw-shadow-color,rgba(0,0,0,.02))}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,rgba(0,0,0,.1)),0 8px 10px -6px var(--tw-shadow-color,rgba(0,0,0,.1))}.shadow-xl,.shadow-xs{box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xs{--tw-shadow:0 1px 2px 0 var(--tw-shadow-color,rgba(0,0,0,.05))}.ring{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor)}.ring,.ring-0{box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring-0{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor)}.ring-2{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor)}.inset-ring,.ring-2{box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.inset-ring{--tw-inset-ring-shadow:inset 0 0 0 1px var(--tw-inset-ring-color,currentcolor)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px)}.blur,.blur-sm{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.blur-sm{--tw-blur:blur(var(--blur-sm))}.drop-shadow{--tw-drop-shadow-size:drop-shadow(0 1px 2px var(--tw-drop-shadow-color,rgba(0,0,0,.1))) drop-shadow(0 1px 1px var(--tw-drop-shadow-color,rgba(0,0,0,.06)));--tw-drop-shadow:drop-shadow(0 1px 2px rgba(0,0,0,.1)) drop-shadow(0 1px 1px rgba(0,0,0,.06))}.drop-shadow,.grayscale{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.grayscale{--tw-grayscale:grayscale(100%)}.invert{--tw-invert:invert(100%)}.invert,.sepia{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.sepia{--tw-sepia:sepia(100%)}.filter{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.backdrop-blur{--tw-backdrop-blur:blur(8px)}.backdrop-blur,.backdrop-grayscale{-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-grayscale{--tw-backdrop-grayscale:grayscale(100%)}.backdrop-invert{--tw-backdrop-invert:invert(100%)}.backdrop-invert,.backdrop-sepia{-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.backdrop-sepia{--tw-backdrop-sepia:sepia(100%)}.backdrop-filter{-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)}.transition{transition-duration:var(--tw-duration,var(--default-transition-duration));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))}.transition-all{transition-duration:var(--tw-duration,var(--default-transition-duration));transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))}.transition-colors{transition-duration:var(--tw-duration,var(--default-transition-duration));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))}.transition-opacity{transition-duration:var(--tw-duration,var(--default-transition-duration));transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))}.transition-shadow{transition-duration:var(--tw-duration,var(--default-transition-duration));transition-property:box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))}.transition-transform{transition-duration:var(--tw-duration,var(--default-transition-duration));transition-property:transform,translate,scale,rotate;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))}.duration-200{--tw-duration:200ms;transition-duration:.2s}.duration-1000{--tw-duration:1000ms;transition-duration:1s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-none{--tw-outline-style:none;outline-style:none}.outline-solid{--tw-outline-style:solid;outline-style:solid}.select-none{-webkit-user-select:none;-moz-user-select:none;user-select:none}.divide-x-reverse{:where(&>:not(:last-child)){--tw-divide-x-reverse:1}}.ring-inset{--tw-ring-inset:inset}.group-hover\\:text-gray-800{&:is(:where(.group):hover *){@media (hover:hover){color:var(--color-gray-800)}}}.group-hover\\:opacity-100{&:is(:where(.group):hover *){@media (hover:hover){opacity:100%}}}.group-data-\\[state\\=open\\]\\:rotate-180{&:is(:where(.group)[data-state=open] *){rotate:180deg}}.group-\\[\\.destructive\\]\\:text-red-300{&:is(:where(.group):is(.destructive) *){color:var(--color-red-300)}}.group-\\[\\.is-link-group\\]\\:text-gray-500\\/90{&:is(:where(.group):is(.is-link-group) *){color:color-mix(in srgb,#6b7280 90%,transparent);@supports (color:color-mix(in lab,red,red)){color:color-mix(in oklab,var(--color-gray-500) 90%,transparent)}}}.group-\\[\\.is-link-group\\]\\:text-indigo-500{&:is(:where(.group):is(.is-link-group) *){color:var(--color-indigo-500)}}.group-\\[\\.toaster\\]\\:shadow-lg{&:is(:where(.group):is(.toaster) *){--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,rgba(0,0,0,.1)),0 4px 6px -4px var(--tw-shadow-color,rgba(0,0,0,.1));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.peer-disabled\\:cursor-not-allowed{&:is(:where(.peer):disabled~*){cursor:not-allowed}}.peer-disabled\\:opacity-70{&:is(:where(.peer):disabled~*){opacity:70%}}.file\\:border-0{&::file-selector-button{border-style:var(--tw-border-style);border-width:0}}.file\\:bg-transparent{&::file-selector-button{background-color:transparent}}.file\\:text-sm{&::file-selector-button{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}}.file\\:font-medium{&::file-selector-button{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}}.before\\:absolute{&:before{content:var(--tw-content);position:absolute}}.before\\:inset-0{&:before{content:var(--tw-content);inset:calc(var(--spacing)*0)}}.before\\:-z-10{&:before{content:var(--tw-content);z-index:-10}}.before\\:bg-white{&:before{background-color:var(--color-white);content:var(--tw-content)}}.before\\:backdrop-blur-md{&:before{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);content:var(--tw-content)}}.after\\:absolute{&:after{content:var(--tw-content);position:absolute}}.after\\:inset-x-0{&:after{content:var(--tw-content);inset-inline:calc(var(--spacing)*0)}}.after\\:inset-y-0{&:after{content:var(--tw-content);inset-block:calc(var(--spacing)*0)}}.after\\:top-full{&:after{content:var(--tw-content);top:100%}}.after\\:left-1\\/2{&:after{content:var(--tw-content);left:50%}}.after\\:-z-10{&:after{content:var(--tw-content);z-index:-10}}.after\\:h-px{&:after{content:var(--tw-content);height:1px}}.after\\:w-1{&:after{content:var(--tw-content);width:calc(var(--spacing)*1)}}.after\\:-translate-x-1\\/2{&:after{--tw-translate-x:-50%;content:var(--tw-content);translate:var(--tw-translate-x) var(--tw-translate-y)}}.after\\:bg-gray-200{&:after{background-color:var(--color-gray-200);content:var(--tw-content)}}.first\\:rounded-l-md{&:first-child{border-bottom-left-radius:var(--radius-md);border-top-left-radius:var(--radius-md)}}.first\\:border-l{&:first-child{border-left-style:var(--tw-border-style);border-left-width:1px}}.last\\:mb-0{&:last-child{margin-bottom:calc(var(--spacing)*0)}}.last\\:rounded-r-md{&:last-child{border-bottom-right-radius:var(--radius-md);border-top-right-radius:var(--radius-md)}}.focus-within\\:relative{&:focus-within{position:relative}}.focus-within\\:z-20{&:focus-within{z-index:20}}.hover\\:border-gray-800{&:hover{@media (hover:hover){border-color:var(--color-gray-800)}}}.hover\\:bg-gray-100{&:hover{@media (hover:hover){background-color:var(--color-gray-100)}}}.hover\\:text-gray-400{&:hover{@media (hover:hover){color:var(--color-gray-400)}}}.hover\\:text-gray-500{&:hover{@media (hover:hover){color:var(--color-gray-500)}}}.hover\\:text-gray-600{&:hover{@media (hover:hover){color:var(--color-gray-600)}}}.hover\\:text-gray-800{&:hover{@media (hover:hover){color:var(--color-gray-800)}}}.hover\\:text-gray-900{&:hover{@media (hover:hover){color:var(--color-gray-900)}}}.hover\\:underline{&:hover{@media (hover:hover){text-decoration-line:underline}}}.hover\\:opacity-100{&:hover{@media (hover:hover){opacity:100%}}}.hover\\:shadow-xl{&:hover{@media (hover:hover){--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,rgba(0,0,0,.1)),0 8px 10px -6px var(--tw-shadow-color,rgba(0,0,0,.1));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}}.group-\\[\\.destructive\\]\\:hover\\:text-red-50{&:is(:where(.group):is(.destructive) *){&:hover{@media (hover:hover){color:var(--color-red-50)}}}}.hover\\:group-\\[\\.is-link-group\\]\\:text-gray-700{&:hover{@media (hover:hover){&:is(:where(.group):is(.is-link-group) *){color:var(--color-gray-700)}}}}.focus\\:opacity-100{&:focus{opacity:100%}}.focus\\:ring-2{&:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus\\:ring-offset-2{&:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}}.focus\\:outline-hidden{&:focus{--tw-outline-style:none;outline-style:none;@media (forced-colors:active){outline:2px solid transparent;outline-offset:2px}}}.focus\\:outline-none{&:focus{--tw-outline-style:none;outline-style:none}}.group-\\[\\.destructive\\]\\:focus\\:ring-red-400{&:is(:where(.group):is(.destructive) *){&:focus{--tw-ring-color:var(--color-red-400)}}}.group-\\[\\.destructive\\]\\:focus\\:ring-offset-red-600{&:is(:where(.group):is(.destructive) *){&:focus{--tw-ring-offset-color:var(--color-red-600)}}}.focus-visible\\:ring-1{&:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus-visible\\:ring-2{&:focus-visible{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.focus-visible\\:ring-offset-1{&:focus-visible{--tw-ring-offset-width:1px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}}.focus-visible\\:ring-offset-2{&:focus-visible{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)}}.focus-visible\\:outline-none{&:focus-visible{--tw-outline-style:none;outline-style:none}}.disabled\\:pointer-events-none{&:disabled{pointer-events:none}}.disabled\\:cursor-not-allowed{&:disabled{cursor:not-allowed}}.disabled\\:opacity-50{&:disabled{opacity:50%}}.has-\\[\\:disabled\\]\\:opacity-50{&:has(:is(:disabled)){opacity:50%}}.aria-selected\\:opacity-30{&[aria-selected=true]{opacity:30%}}.aria-selected\\:opacity-100{&[aria-selected=true]{opacity:100%}}.data-\\[disabled\\]\\:pointer-events-none{&[data-disabled]{pointer-events:none}}.data-\\[disabled\\]\\:opacity-50{&[data-disabled]{opacity:50%}}.data-\\[disabled\\=true\\]\\:pointer-events-none{&[data-disabled=true]{pointer-events:none}}.data-\\[disabled\\=true\\]\\:opacity-50{&[data-disabled=true]{opacity:50%}}.data-\\[panel-group-direction\\=vertical\\]\\:h-px{&[data-panel-group-direction=vertical]{height:1px}}.data-\\[panel-group-direction\\=vertical\\]\\:w-full{&[data-panel-group-direction=vertical]{width:100%}}.data-\\[panel-group-direction\\=vertical\\]\\:flex-col{&[data-panel-group-direction=vertical]{flex-direction:column}}.data-\\[panel-group-direction\\=vertical\\]\\:after\\:left-0{&[data-panel-group-direction=vertical]{&:after{content:var(--tw-content);left:calc(var(--spacing)*0)}}}.data-\\[panel-group-direction\\=vertical\\]\\:after\\:h-1{&[data-panel-group-direction=vertical]{&:after{content:var(--tw-content);height:calc(var(--spacing)*1)}}}.data-\\[panel-group-direction\\=vertical\\]\\:after\\:w-full{&[data-panel-group-direction=vertical]{&:after{content:var(--tw-content);width:100%}}}.data-\\[panel-group-direction\\=vertical\\]\\:after\\:translate-x-0{&[data-panel-group-direction=vertical]{&:after{--tw-translate-x:calc(var(--spacing)*0);content:var(--tw-content);translate:var(--tw-translate-x) var(--tw-translate-y)}}}.data-\\[panel-group-direction\\=vertical\\]\\:after\\:-translate-y-1\\/2{&[data-panel-group-direction=vertical]{&:after{--tw-translate-y:-50%;content:var(--tw-content);translate:var(--tw-translate-x) var(--tw-translate-y)}}}.data-\\[selected\\=true\\]\\:font-bold{&[data-selected=true]{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}}.data-\\[selected\\=true\\]\\:text-white{&[data-selected=true]{color:var(--color-white)}}.data-\\[side\\=bottom\\]\\:translate-y-1{&[data-side=bottom]{--tw-translate-y:calc(var(--spacing)*1);translate:var(--tw-translate-x) var(--tw-translate-y)}}.data-\\[side\\=left\\]\\:-translate-x-1{&[data-side=left]{--tw-translate-x:calc(var(--spacing)*-1);translate:var(--tw-translate-x) var(--tw-translate-y)}}.data-\\[side\\=right\\]\\:translate-x-1{&[data-side=right]{--tw-translate-x:calc(var(--spacing)*1);translate:var(--tw-translate-x) var(--tw-translate-y)}}.data-\\[side\\=top\\]\\:-translate-y-1{&[data-side=top]{--tw-translate-y:calc(var(--spacing)*-1);translate:var(--tw-translate-x) var(--tw-translate-y)}}.data-\\[state\\=active\\]\\:shadow-sm{&[data-state=active]{--tw-shadow:0 1px 1px 0 var(--tw-shadow-color,rgba(0,0,0,.05)),0 1px 2px 0 var(--tw-shadow-color,rgba(0,0,0,.02));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}.data-\\[state\\=checked\\]\\:translate-x-5{&[data-state=checked]{--tw-translate-x:calc(var(--spacing)*5);translate:var(--tw-translate-x) var(--tw-translate-y)}}.data-\\[state\\=closed\\]\\:duration-300{&[data-state=closed]{--tw-duration:300ms;transition-duration:.3s}}.data-\\[state\\=open\\]\\:duration-500{&[data-state=open]{--tw-duration:500ms;transition-duration:.5s}}.data-\\[state\\=unchecked\\]\\:translate-x-0{&[data-state=unchecked]{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x) var(--tw-translate-y)}}.data-\\[swipe\\=cancel\\]\\:translate-x-0{&[data-swipe=cancel]{--tw-translate-x:calc(var(--spacing)*0);translate:var(--tw-translate-x) var(--tw-translate-y)}}.data-\\[swipe\\=end\\]\\:translate-x-\\[var\\(--radix-toast-swipe-end-x\\)\\]{&[data-swipe=end]{--tw-translate-x:var(--radix-toast-swipe-end-x);translate:var(--tw-translate-x) var(--tw-translate-y)}}.data-\\[swipe\\=move\\]\\:translate-x-\\[var\\(--radix-toast-swipe-move-x\\)\\]{&[data-swipe=move]{--tw-translate-x:var(--radix-toast-swipe-move-x);translate:var(--tw-translate-x) var(--tw-translate-y)}}.data-\\[swipe\\=move\\]\\:transition-none{&[data-swipe=move]{transition-property:none}}.max-lg\\:before\\:bg-white\\/90,.max-lg\\:shadow-sm{@media (width < 64rem){&:before{background-color:color-mix(in srgb,#fff 90%,transparent);content:var(--tw-content);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}}}.sm\\:bottom-0,.sm\\:flex-col,.sm\\:flex-row,.sm\\:gap-2\\.5,.sm\\:justify-end,.sm\\:max-w-sm,.sm\\:mt-0,.sm\\:right-0,.sm\\:space-y-0,.sm\\:top-auto{@media (width >= 40rem){:where(&>:not(:last-child)){--tw-space-y-reverse:0;margin-block-end:calc(var(--spacing)*0*(1 - var(--tw-space-y-reverse)));margin-block-start:calc(var(--spacing)*0*var(--tw-space-y-reverse))}}}.sm\\:space-x-2{@media (width >= 40rem){:where(&>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-end:calc(var(--spacing)*2*(1 - var(--tw-space-x-reverse)));margin-inline-start:calc(var(--spacing)*2*var(--tw-space-x-reverse))}}}.sm\\:space-x-4{@media (width >= 40rem){:where(&>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-end:calc(var(--spacing)*4*(1 - var(--tw-space-x-reverse)));margin-inline-start:calc(var(--spacing)*4*var(--tw-space-x-reverse))}}}.lg\\:before\\:bg-gray-100\\/90,.lg\\:block,.lg\\:border-b,.lg\\:flex\\!,.lg\\:hidden,.lg\\:inline-flex,.lg\\:left-auto,.lg\\:opacity-0,.lg\\:overflow-y-auto,.lg\\:px-8,.lg\\:static,.lg\\:top-auto,.lg\\:translate-x-0,.lg\\:w-20,.lg\\:z-auto,.md\\:absolute,.md\\:max-w-\\[420px\\],.md\\:w-\\[var\\(--radix-navigation-menu-viewport-width\\)\\],.md\\:w-auto,.sm\\:px-2,.sm\\:px-6,.sm\\:rounded-lg,.sm\\:text-left{@media (width >= 64rem){&:before{background-color:color-mix(in srgb,#f3f4f6 90%,transparent);content:var(--tw-content);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-gray-100) 90%,transparent)}}}}.lg\\:hover\\:bg-gray-200{@media (width >= 64rem){&:hover{@media (hover:hover){background-color:var(--color-gray-200)}}}}.\\32 xl\\:block,.\\32 xl\\:hidden,.\\32 xl\\:opacity-100,.\\32 xl\\:w-64\\!,.dark\\:block{&:is(.dark *){display:block}}.dark\\:hidden{&:is(.dark *){display:none}}.dark\\:border-gray-700\\/60{&:is(.dark *){border-color:color-mix(in srgb,#374151 60%,transparent);@supports (color:color-mix(in lab,red,red)){border-color:color-mix(in oklab,var(--color-gray-700) 60%,transparent)}}}.dark\\:bg-gray-700\\/60{&:is(.dark *){background-color:color-mix(in srgb,#374151 60%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-gray-700) 60%,transparent)}}}.dark\\:bg-gray-800{&:is(.dark *){background-color:var(--color-gray-800)}}.dark\\:bg-gray-900{&:is(.dark *){background-color:var(--color-gray-900)}}.dark\\:bg-slate-900{&:is(.dark *){background-color:var(--color-slate-900)}}.dark\\:from-indigo-500\\/\\[0\\.24\\]{&:is(.dark *){--tw-gradient-from:color-mix(in srgb,#9b49ff 24%,transparent);@supports (color:color-mix(in lab,red,red)){--tw-gradient-from:color-mix(in oklab,var(--color-indigo-500) 24%,transparent)}--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from) var(--tw-gradient-from-position),var(--tw-gradient-to) var(--tw-gradient-to-position))}}.dark\\:text-gray-100{&:is(.dark *){color:var(--color-gray-100)}}.dark\\:text-gray-400{&:is(.dark *){color:var(--color-gray-400)}}.dark\\:text-gray-400\\/80{&:is(.dark *){color:color-mix(in srgb,#9ca3af 80%,transparent);@supports (color:color-mix(in lab,red,red)){color:color-mix(in oklab,var(--color-gray-400) 80%,transparent)}}}.dark\\:text-gray-500{&:is(.dark *){color:var(--color-gray-500)}}.dark\\:text-violet-400{&:is(.dark *){color:var(--color-violet-400)}}.dark\\:text-white{&:is(.dark *){color:var(--color-white)}}.dark\\:group-hover\\:text-white{&:is(.dark *){&:is(:where(.group):hover *){@media (hover:hover){color:var(--color-white)}}}}.dark\\:group-\\[\\.is-link-group\\]\\:text-gray-400{&:is(.dark *){&:is(:where(.group):is(.is-link-group) *){color:var(--color-gray-400)}}}.dark\\:before\\:bg-gray-800{&:is(.dark *){&:before{background-color:var(--color-gray-800);content:var(--tw-content)}}}.dark\\:before\\:bg-gray-900{&:is(.dark *){&:before{background-color:var(--color-gray-900);content:var(--tw-content)}}}.dark\\:after\\:bg-gray-700\\/60{&:is(.dark *){&:after{background-color:color-mix(in srgb,#374151 60%,transparent);content:var(--tw-content);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-gray-700) 60%,transparent)}}}}.dark\\:hover\\:bg-gray-700\\/50{&:is(.dark *){&:hover{@media (hover:hover){background-color:color-mix(in srgb,#374151 50%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-gray-700) 50%,transparent)}}}}}.dark\\:hover\\:text-gray-400{&:is(.dark *){&:hover{@media (hover:hover){color:var(--color-gray-400)}}}}.dark\\:hover\\:text-white{&:is(.dark *){&:hover{@media (hover:hover){color:var(--color-white)}}}}.dark\\:hover\\:group-\\[\\.is-link-group\\]\\:text-gray-200{&:is(.dark *){&:hover{@media (hover:hover){&:is(:where(.group):is(.is-link-group) *){color:var(--color-gray-200)}}}}}.dark\\:max-lg\\:before\\:bg-gray-800\\/90{&:is(.dark *){@media (width < 64rem){&:before{background-color:color-mix(in srgb,#1f2937 90%,transparent);content:var(--tw-content);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-gray-800) 90%,transparent)}}}}}.dark\\:lg\\:before\\:bg-gray-900\\/90{&:is(.dark *){@media (width >= 64rem){&:before{background-color:color-mix(in srgb,#111827 90%,transparent);content:var(--tw-content);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-gray-900) 90%,transparent)}}}}}.dark\\:lg\\:hover\\:bg-gray-800{&:is(.dark *){@media (width >= 64rem){&:hover{@media (hover:hover){background-color:var(--color-gray-800)}}}}}.sidebar-expanded\\:rotate-180{&:is(.sidebar-expanded *){rotate:180deg}}.sidebar-expanded\\:bg-red-500{&:is(.sidebar-expanded *){background-color:var(--color-red-500)}}.lg\\:sidebar-expanded\\:block{@media (width >= 64rem){&:is(.sidebar-expanded *){display:block}}}.lg\\:sidebar-expanded\\:hidden{@media (width >= 64rem){&:is(.sidebar-expanded *){display:none}}}.lg\\:sidebar-expanded\\:\\!w-64{@media (width >= 64rem){&:is(.sidebar-expanded *){width:calc(var(--spacing)*64)!important}}}.lg\\:sidebar-expanded\\:bg-red-500{@media (width >= 64rem){&:is(.sidebar-expanded *){background-color:var(--color-red-500)}}}.lg\\:sidebar-expanded\\:opacity-100{@media (width >= 64rem){&:is(.sidebar-expanded *){opacity:100%}}}.\\[\\&_\\.recharts-dot\\[stroke\\=\\'\\#fff\\'\\]\\]\\:stroke-transparent{& .recharts-dot[stroke=\"#fff\"]{stroke:transparent}}.\\[\\&_\\.recharts-layer\\]\\:outline-none{& .recharts-layer{--tw-outline-style:none;outline-style:none}}.\\[\\&_\\.recharts-sector\\]\\:outline-none{& .recharts-sector{--tw-outline-style:none;outline-style:none}}.\\[\\&_\\.recharts-sector\\[stroke\\=\\'\\#fff\\'\\]\\]\\:stroke-transparent{& .recharts-sector[stroke=\"#fff\"]{stroke:transparent}}.\\[\\&_\\.recharts-surface\\]\\:outline-none{& .recharts-surface{--tw-outline-style:none;outline-style:none}}.\\[\\&_\\[cmdk-group-heading\\]\\]\\:px-2{& [cmdk-group-heading]{padding-inline:calc(var(--spacing)*2)}}.\\[\\&_\\[cmdk-group-heading\\]\\]\\:py-1\\.5{& [cmdk-group-heading]{padding-block:calc(var(--spacing)*1.5)}}.\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-xs{& [cmdk-group-heading]{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}}.\\[\\&_\\[cmdk-group-heading\\]\\]\\:font-medium{& [cmdk-group-heading]{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}}.\\[\\&_\\[cmdk-group\\]\\]\\:px-2{& [cmdk-group]{padding-inline:calc(var(--spacing)*2)}}.\\[\\&_\\[cmdk-group\\]\\:not\\(\\[hidden\\]\\)_\\~\\[cmdk-group\\]\\]\\:pt-0{& [cmdk-group]:not([hidden])~[cmdk-group]{padding-top:calc(var(--spacing)*0)}}.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:h-5{& [cmdk-input-wrapper] svg{height:calc(var(--spacing)*5)}}.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:w-5{& [cmdk-input-wrapper] svg{width:calc(var(--spacing)*5)}}.\\[\\&_\\[cmdk-input\\]\\]\\:h-12{& [cmdk-input]{height:calc(var(--spacing)*12)}}.\\[\\&_\\[cmdk-item\\]\\]\\:px-2{& [cmdk-item]{padding-inline:calc(var(--spacing)*2)}}.\\[\\&_\\[cmdk-item\\]\\]\\:py-3{& [cmdk-item]{padding-block:calc(var(--spacing)*3)}}.\\[\\&_\\[cmdk-item\\]_svg\\]\\:h-5{& [cmdk-item] svg{height:calc(var(--spacing)*5)}}.\\[\\&_\\[cmdk-item\\]_svg\\]\\:w-5{& [cmdk-item] svg{width:calc(var(--spacing)*5)}}.\\[\\&_p\\]\\:leading-relaxed{& p{--tw-leading:var(--leading-relaxed);line-height:var(--leading-relaxed)}}.\\[\\&_tr\\]\\:border-b{& tr{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}}.\\[\\&_tr\\:last-child\\]\\:border-0{& tr:last-child{border-style:var(--tw-border-style);border-width:0}}.first\\:\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:rounded-l-md{&:first-child{&:has([aria-selected]){border-bottom-left-radius:var(--radius-md);border-top-left-radius:var(--radius-md)}}}.last\\:\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:rounded-r-md{&:last-child{&:has([aria-selected]){border-bottom-right-radius:var(--radius-md);border-top-right-radius:var(--radius-md)}}}.\\[\\&\\:has\\(\\[aria-selected\\]\\.day-range-end\\)\\]\\:rounded-r-md{&:has([aria-selected].day-range-end){border-bottom-right-radius:var(--radius-md);border-top-right-radius:var(--radius-md)}}.\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pr-0{&:has([role=checkbox]){padding-right:calc(var(--spacing)*0)}}.\\[\\&\\>span\\]\\:line-clamp-1{&>span{-webkit-box-orient:vertical;-webkit-line-clamp:1;display:-webkit-box;overflow:hidden}}.\\[\\&\\>svg\\]\\:absolute{&>svg{position:absolute}}.\\[\\&\\>svg\\]\\:top-4{&>svg{top:calc(var(--spacing)*4)}}.\\[\\&\\>svg\\]\\:left-4{&>svg{left:calc(var(--spacing)*4)}}.\\[\\&\\>svg\\]\\:size-3\\.5{&>svg{height:calc(var(--spacing)*3.5);width:calc(var(--spacing)*3.5)}}.\\[\\&\\>svg\\]\\:h-2\\.5{&>svg{height:calc(var(--spacing)*2.5)}}.\\[\\&\\>svg\\]\\:h-3{&>svg{height:calc(var(--spacing)*3)}}.\\[\\&\\>svg\\]\\:w-2\\.5{&>svg{width:calc(var(--spacing)*2.5)}}.\\[\\&\\>svg\\]\\:w-3{&>svg{width:calc(var(--spacing)*3)}}.\\[\\&\\>svg\\+div\\]\\:translate-y-\\[-3px\\]{&>svg+div{--tw-translate-y:-3px;translate:var(--tw-translate-x) var(--tw-translate-y)}}.\\[\\&\\>svg\\~\\*\\]\\:pl-7{&>svg~*{padding-left:calc(var(--spacing)*7)}}.\\[\\&\\>tr\\]\\:last\\:border-b-0{&>tr{&:last-child{border-bottom-style:var(--tw-border-style);border-bottom-width:0}}}.\\[\\&\\[data-panel-group-direction\\=vertical\\]\\>div\\]\\:rotate-90{&[data-panel-group-direction=vertical]>div{rotate:90deg}}.\\[\\&\\[data-state\\=open\\]\\>svg\\]\\:rotate-180{&[data-state=open]>svg{rotate:180deg}}}@layer components{.h1{--tw-font-weight:var(--font-weight-extrabold);--tw-tracking:var(--tracking-tighter);font-size:var(--text-4xl);font-weight:var(--font-weight-extrabold);letter-spacing:var(--tw-tracking,var(--text-4xl--letter-spacing));letter-spacing:var(--tracking-tighter);line-height:var(--tw-leading,var(--text-4xl--line-height))}.h2{--tw-font-weight:var(--font-weight-extrabold);--tw-tracking:var(--tracking-tighter);letter-spacing:var(--tw-tracking,var(--text-3xl--letter-spacing));letter-spacing:var(--tracking-tighter)}.h2,.h3{font-size:var(--text-3xl);font-weight:var(--font-weight-extrabold);line-height:var(--tw-leading,var(--text-3xl--line-height))}.h3{letter-spacing:var(--tw-tracking,var(--text-3xl--letter-spacing))}.h3,.h4{--tw-font-weight:var(--font-weight-extrabold)}.h4{--tw-tracking:var(--tracking-tight);font-size:var(--text-2xl);font-weight:var(--font-weight-extrabold);letter-spacing:var(--tw-tracking,var(--text-2xl--letter-spacing));letter-spacing:var(--tracking-tight);line-height:var(--tw-leading,var(--text-2xl--line-height))}@media (width >= 48rem){.h1{font-size:var(--text-5xl);letter-spacing:var(--tw-tracking,var(--text-5xl--letter-spacing));line-height:var(--tw-leading,var(--text-5xl--line-height))}.h2{font-size:var(--text-4xl);letter-spacing:var(--tw-tracking,var(--text-4xl--letter-spacing));line-height:var(--tw-leading,var(--text-4xl--line-height))}}.btn,.btn-lg,.btn-sm,.btn-xs{--tw-leading:calc(var(--spacing)*5);--tw-font-weight:var(--font-weight-medium);--tw-shadow:0 1px 1px 0 var(--tw-shadow-color,rgba(0,0,0,.05)),0 1px 2px 0 var(--tw-shadow-color,rgba(0,0,0,.02));align-items:center;border-color:transparent;border-radius:var(--radius-lg);border-style:var(--tw-border-style);border-width:1px;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);display:inline-flex;font-size:var(--text-sm);font-weight:var(--font-weight-medium);justify-content:center;line-height:var(--tw-leading,var(--text-sm--line-height));line-height:calc(var(--spacing)*5);transition-duration:var(--tw-duration,var(--default-transition-duration));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))}.btn-primary{background-color:var(--color-indigo-500);border-radius:var(--radius-md);color:var(--color-white);cursor:pointer;padding-block:calc(var(--spacing)*2)!important;padding-inline:calc(var(--spacing)*4)!important;&:hover{@media (hover:hover){background-color:var(--color-indigo-600)}}}.btn-secondary{background-color:var(--color-white);border-color:var(--color-gray-200);border-radius:var(--radius-md);border-style:var(--tw-border-style);border-width:1px;color:var(--color-gray-600);cursor:pointer;padding-block:calc(var(--spacing)*2)!important;padding-inline:calc(var(--spacing)*4)!important;&:hover{@media (hover:hover){background-color:var(--color-gray-50)}}&:is(.dark *){border-color:var(--color-gray-600)}&:is(.dark *){background-color:var(--color-gray-700)}&:is(.dark *){color:var(--color-gray-200)}&:is(.dark *){&:hover{@media (hover:hover){background-color:var(--color-gray-600)}}}}.btn-option{--tw-font-weight:var(--font-weight-semibold);background-color:var(--color-gray-100);border-radius:var(--radius-md);cursor:pointer;font-size:var(--text-xs);font-weight:var(--font-weight-semibold);line-height:var(--tw-leading,var(--text-xs--line-height));padding-block:calc(var(--spacing)*2);transition-duration:var(--tw-duration,var(--default-transition-duration));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));&:hover{@media (hover:hover){background-color:var(--color-gray-200)}}&:is(.dark *){background-color:var(--color-gray-700)}&:is(.dark *){&:hover{@media (hover:hover){background-color:var(--color-gray-900)}}}}.btn-black{background-color:var(--color-gray-900);color:var(--color-gray-100);cursor:pointer;&:hover{@media (hover:hover){background-color:var(--color-gray-800)}}&:is(.dark *){background-color:var(--color-gray-100)}&:is(.dark *){color:var(--color-gray-800)}&:is(.dark *){&:hover{@media (hover:hover){background-color:var(--color-white)}}}}.btn{padding-block:calc(var(--spacing)*2);padding-inline:calc(var(--spacing)*3)}.btn-lg{padding-block:calc(var(--spacing)*3);padding-inline:calc(var(--spacing)*4)}.btn-sm{padding-block:calc(var(--spacing)*1)}.btn-sm,.btn-xs{padding-inline:calc(var(--spacing)*2)}.btn-xs{padding-block:calc(var(--spacing)*.5)}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none}.form-checkbox,.form-input,.form-multiselect,.form-radio,.form-select,.form-textarea{background-color:var(--color-white);border-style:var(--tw-border-style);border-width:1px;&:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}&:is(.dark *){background-color:color-mix(in srgb,#111827 30%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-gray-900) 30%,transparent)}}&:is(.dark *){&:disabled{border-color:var(--color-gray-700)}}&:is(.dark *){&:disabled{background-color:color-mix(in srgb,#374151 30%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-gray-700) 30%,transparent)}}}&:is(.dark *){&:disabled{&:hover{@media (hover:hover){border-color:var(--color-gray-700)}}}}}.form-checkbox{border-radius:var(--radius-sm)}.form-input,.form-multiselect,.form-select,.form-textarea{--tw-leading:calc(var(--spacing)*5);--tw-shadow:0 1px 1px 0 var(--tw-shadow-color,rgba(0,0,0,.05)),0 1px 2px 0 var(--tw-shadow-color,rgba(0,0,0,.02));border-color:var(--color-gray-200);border-radius:var(--radius-lg);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);color:var(--color-gray-800);font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height));line-height:calc(var(--spacing)*5);padding-block:calc(var(--spacing)*2);padding-inline:calc(var(--spacing)*3);&:hover{@media (hover:hover){border-color:var(--color-gray-300)}}&:focus{border-color:var(--color-gray-300)}&:is(.dark *){border-color:color-mix(in srgb,#374151 60%,transparent);@supports (color:color-mix(in lab,red,red)){border-color:color-mix(in oklab,var(--color-gray-700) 60%,transparent)}}&:is(.dark *){color:var(--color-gray-100)}&:is(.dark *){&:hover{@media (hover:hover){border-color:var(--color-gray-600)}}}&:is(.dark *){&:focus{border-color:var(--color-gray-600)}}}.form-input,.form-textarea{&::-moz-placeholder{color:var(--color-gray-400)}&::placeholder{color:var(--color-gray-400)}&:is(.dark *){&::-moz-placeholder{color:var(--color-gray-500)}&::placeholder{color:var(--color-gray-500)}}}.form-select{padding-right:calc(var(--spacing)*10)}.form-checkbox,.form-radio{border-color:var(--color-gray-300);border-style:var(--tw-border-style);border-width:1px;color:var(--color-violet-500);&:checked{background-color:var(--color-violet-500);border-color:transparent}&:focus-visible{&:not(:checked){--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}&:focus-visible{&:not(:checked){--tw-ring-color:color-mix(in srgb,#8470ff 50%,transparent);@supports (color:color-mix(in lab,red,red)){--tw-ring-color:color-mix(in oklab,var(--color-violet-500) 50%,transparent)}}}&:is(.dark *){border-color:color-mix(in srgb,#374151 60%,transparent);@supports (color:color-mix(in lab,red,red)){border-color:color-mix(in oklab,var(--color-gray-700) 60%,transparent)}}&:is(.dark *){&:checked{border-color:transparent}}}.form-switch{position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:44px}.form-switch label{cursor:pointer;height:calc(var(--spacing)*6);overflow:hidden}.form-switch label,.form-switch label>span:first-child{border-radius:calc(infinity * 1px);display:block}.form-switch label>span:first-child{height:20px;left:2px;position:absolute;right:50%;top:2px;transition:all .15s ease-out;width:20px}.form-switch input[type=checkbox]+label{background-color:var(--color-gray-400);&:is(.dark *){background-color:var(--color-gray-700)}}.form-switch input[type=checkbox]:checked+label{background-color:var(--color-violet-500)}.form-switch input[type=checkbox]:checked+label>span:first-child{left:22px}.form-switch input[type=checkbox]:disabled+label{background-color:var(--color-gray-100);border-color:var(--color-gray-200);border-style:var(--tw-border-style);border-width:1px;cursor:not-allowed;&:is(.dark *){border-color:color-mix(in srgb,#374151 60%,transparent);@supports (color:color-mix(in lab,red,red)){border-color:color-mix(in oklab,var(--color-gray-700) 60%,transparent)}}&:is(.dark *){background-color:color-mix(in srgb,#374151 20%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-gray-700) 20%,transparent)}}}.form-switch input[type=checkbox]:disabled+label>span:first-child{background-color:var(--color-gray-400);&:is(.dark *){background-color:var(--color-gray-600)}}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}.video-js{height:100%!important;-o-object-fit:contain!important;object-fit:contain!important;width:100%!important}}.la,.lab,.lad,.lal,.lar,.las{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}.la-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.la-xs{font-size:.75em}.la-sm{font-size:.875em}.la-1x{font-size:1em}.la-2x{font-size:2em}.la-3x{font-size:3em}.la-4x{font-size:4em}.la-5x{font-size:5em}.la-6x{font-size:6em}.la-7x{font-size:7em}.la-8x{font-size:8em}.la-9x{font-size:9em}.la-10x{font-size:10em}.la-fw{text-align:center;width:1.25em}.la-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.la-ul>li{position:relative}.la-li{left:-2em;line-height:inherit;position:absolute;text-align:center;width:2em}.la-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}.la-pull-left{float:left}.la-pull-right{float:right}.la.la-pull-left,.lab.la-pull-left,.lal.la-pull-left,.lar.la-pull-left,.las.la-pull-left{margin-right:.3em}.la.la-pull-right,.lab.la-pull-right,.lal.la-pull-right,.lar.la-pull-right,.las.la-pull-right{margin-left:.3em}.la-spin{animation:la-spin 2s linear infinite}.la-pulse{animation:la-spin 1s steps(8) infinite}@keyframes la-spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.la-rotate-90{transform:rotate(90deg)}.la-rotate-180{transform:rotate(180deg)}.la-rotate-270{transform:rotate(270deg)}.la-flip-horizontal{transform:scaleX(-1)}.la-flip-vertical{transform:scaleY(-1)}.la-flip-both,.la-flip-horizontal.la-flip-vertical{transform:scale(-1)}:root .la-flip-both,:root .la-flip-horizontal,:root .la-flip-vertical,:root .la-rotate-180,:root .la-rotate-270,:root .la-rotate-90{filter:none}.la-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.la-stack-1x,.la-stack-2x{left:0;position:absolute;text-align:center;width:100%}.la-stack-1x{line-height:inherit}.la-stack-2x{font-size:2em}.la-inverse{color:#fff}.la-500px:before{content:\"\\f26e\"}.la-accessible-icon:before{content:\"\\f368\"}.la-accusoft:before{content:\"\\f369\"}.la-acquisitions-incorporated:before{content:\"\\f6af\"}.la-ad:before{content:\"\\f641\"}.la-address-book:before{content:\"\\f2b9\"}.la-address-card:before{content:\"\\f2bb\"}.la-adjust:before{content:\"\\f042\"}.la-adn:before{content:\"\\f170\"}.la-adobe:before{content:\"\\f778\"}.la-adversal:before{content:\"\\f36a\"}.la-affiliatetheme:before{content:\"\\f36b\"}.la-air-freshener:before{content:\"\\f5d0\"}.la-airbnb:before{content:\"\\f834\"}.la-algolia:before{content:\"\\f36c\"}.la-align-center:before{content:\"\\f037\"}.la-align-justify:before{content:\"\\f039\"}.la-align-left:before{content:\"\\f036\"}.la-align-right:before{content:\"\\f038\"}.la-alipay:before{content:\"\\f642\"}.la-allergies:before{content:\"\\f461\"}.la-amazon:before{content:\"\\f270\"}.la-amazon-pay:before{content:\"\\f42c\"}.la-ambulance:before{content:\"\\f0f9\"}.la-american-sign-language-interpreting:before{content:\"\\f2a3\"}.la-amilia:before{content:\"\\f36d\"}.la-anchor:before{content:\"\\f13d\"}.la-android:before{content:\"\\f17b\"}.la-angellist:before{content:\"\\f209\"}.la-angle-double-down:before{content:\"\\f103\"}.la-angle-double-left:before{content:\"\\f100\"}.la-angle-double-right:before{content:\"\\f101\"}.la-angle-double-up:before{content:\"\\f102\"}.la-angle-down:before{content:\"\\f107\"}.la-angle-left:before{content:\"\\f104\"}.la-angle-right:before{content:\"\\f105\"}.la-angle-up:before{content:\"\\f106\"}.la-angry:before{content:\"\\f556\"}.la-angrycreative:before{content:\"\\f36e\"}.la-angular:before{content:\"\\f420\"}.la-ankh:before{content:\"\\f644\"}.la-app-store:before{content:\"\\f36f\"}.la-app-store-ios:before{content:\"\\f370\"}.la-apper:before{content:\"\\f371\"}.la-apple:before{content:\"\\f179\"}.la-apple-alt:before{content:\"\\f5d1\"}.la-apple-pay:before{content:\"\\f415\"}.la-archive:before{content:\"\\f187\"}.la-archway:before{content:\"\\f557\"}.la-arrow-alt-circle-down:before{content:\"\\f358\"}.la-arrow-alt-circle-left:before{content:\"\\f359\"}.la-arrow-alt-circle-right:before{content:\"\\f35a\"}.la-arrow-alt-circle-up:before{content:\"\\f35b\"}.la-arrow-circle-down:before{content:\"\\f0ab\"}.la-arrow-circle-left:before{content:\"\\f0a8\"}.la-arrow-circle-right:before{content:\"\\f0a9\"}.la-arrow-circle-up:before{content:\"\\f0aa\"}.la-arrow-down:before{content:\"\\f063\"}.la-arrow-left:before{content:\"\\f060\"}.la-arrow-right:before{content:\"\\f061\"}.la-arrow-up:before{content:\"\\f062\"}.la-arrows-alt:before{content:\"\\f0b2\"}.la-arrows-alt-h:before{content:\"\\f337\"}.la-arrows-alt-v:before{content:\"\\f338\"}.la-artstation:before{content:\"\\f77a\"}.la-assistive-listening-systems:before{content:\"\\f2a2\"}.la-asterisk:before{content:\"\\f069\"}.la-asymmetrik:before{content:\"\\f372\"}.la-at:before{content:\"\\f1fa\"}.la-atlas:before{content:\"\\f558\"}.la-atlassian:before{content:\"\\f77b\"}.la-atom:before{content:\"\\f5d2\"}.la-audible:before{content:\"\\f373\"}.la-audio-description:before{content:\"\\f29e\"}.la-autoprefixer:before{content:\"\\f41c\"}.la-avianex:before{content:\"\\f374\"}.la-aviato:before{content:\"\\f421\"}.la-award:before{content:\"\\f559\"}.la-aws:before{content:\"\\f375\"}.la-baby:before{content:\"\\f77c\"}.la-baby-carriage:before{content:\"\\f77d\"}.la-backspace:before{content:\"\\f55a\"}.la-backward:before{content:\"\\f04a\"}.la-bacon:before{content:\"\\f7e5\"}.la-balance-scale:before{content:\"\\f24e\"}.la-balance-scale-left:before{content:\"\\f515\"}.la-balance-scale-right:before{content:\"\\f516\"}.la-ban:before{content:\"\\f05e\"}.la-band-aid:before{content:\"\\f462\"}.la-bandcamp:before{content:\"\\f2d5\"}.la-barcode:before{content:\"\\f02a\"}.la-bars:before{content:\"\\f0c9\"}.la-baseball-ball:before{content:\"\\f433\"}.la-basketball-ball:before{content:\"\\f434\"}.la-bath:before{content:\"\\f2cd\"}.la-battery-empty:before{content:\"\\f244\"}.la-battery-full:before{content:\"\\f240\"}.la-battery-half:before{content:\"\\f242\"}.la-battery-quarter:before{content:\"\\f243\"}.la-battery-three-quarters:before{content:\"\\f241\"}.la-battle-net:before{content:\"\\f835\"}.la-bed:before{content:\"\\f236\"}.la-beer:before{content:\"\\f0fc\"}.la-behance:before{content:\"\\f1b4\"}.la-behance-square:before{content:\"\\f1b5\"}.la-bell:before{content:\"\\f0f3\"}.la-bell-slash:before{content:\"\\f1f6\"}.la-bezier-curve:before{content:\"\\f55b\"}.la-bible:before{content:\"\\f647\"}.la-bicycle:before{content:\"\\f206\"}.la-biking:before{content:\"\\f84a\"}.la-bimobject:before{content:\"\\f378\"}.la-binoculars:before{content:\"\\f1e5\"}.la-biohazard:before{content:\"\\f780\"}.la-birthday-cake:before{content:\"\\f1fd\"}.la-bitbucket:before{content:\"\\f171\"}.la-bitcoin:before{content:\"\\f379\"}.la-bity:before{content:\"\\f37a\"}.la-black-tie:before{content:\"\\f27e\"}.la-blackberry:before{content:\"\\f37b\"}.la-blender:before{content:\"\\f517\"}.la-blender-phone:before{content:\"\\f6b6\"}.la-blind:before{content:\"\\f29d\"}.la-blog:before{content:\"\\f781\"}.la-blogger:before{content:\"\\f37c\"}.la-blogger-b:before{content:\"\\f37d\"}.la-bluetooth:before{content:\"\\f293\"}.la-bluetooth-b:before{content:\"\\f294\"}.la-bold:before{content:\"\\f032\"}.la-bolt:before{content:\"\\f0e7\"}.la-bomb:before{content:\"\\f1e2\"}.la-bone:before{content:\"\\f5d7\"}.la-bong:before{content:\"\\f55c\"}.la-book:before{content:\"\\f02d\"}.la-book-dead:before{content:\"\\f6b7\"}.la-book-medical:before{content:\"\\f7e6\"}.la-book-open:before{content:\"\\f518\"}.la-book-reader:before{content:\"\\f5da\"}.la-bookmark:before{content:\"\\f02e\"}.la-bootstrap:before{content:\"\\f836\"}.la-border-all:before{content:\"\\f84c\"}.la-border-none:before{content:\"\\f850\"}.la-border-style:before{content:\"\\f853\"}.la-bowling-ball:before{content:\"\\f436\"}.la-box:before{content:\"\\f466\"}.la-box-open:before{content:\"\\f49e\"}.la-boxes:before{content:\"\\f468\"}.la-braille:before{content:\"\\f2a1\"}.la-brain:before{content:\"\\f5dc\"}.la-bread-slice:before{content:\"\\f7ec\"}.la-briefcase:before{content:\"\\f0b1\"}.la-briefcase-medical:before{content:\"\\f469\"}.la-broadcast-tower:before{content:\"\\f519\"}.la-broom:before{content:\"\\f51a\"}.la-brush:before{content:\"\\f55d\"}.la-btc:before{content:\"\\f15a\"}.la-buffer:before{content:\"\\f837\"}.la-bug:before{content:\"\\f188\"}.la-building:before{content:\"\\f1ad\"}.la-bullhorn:before{content:\"\\f0a1\"}.la-bullseye:before{content:\"\\f140\"}.la-burn:before{content:\"\\f46a\"}.la-buromobelexperte:before{content:\"\\f37f\"}.la-bus:before{content:\"\\f207\"}.la-bus-alt:before{content:\"\\f55e\"}.la-business-time:before{content:\"\\f64a\"}.la-buy-n-large:before{content:\"\\f8a6\"}.la-buysellads:before{content:\"\\f20d\"}.la-calculator:before{content:\"\\f1ec\"}.la-calendar:before{content:\"\\f133\"}.la-calendar-alt:before{content:\"\\f073\"}.la-calendar-check:before{content:\"\\f274\"}.la-calendar-day:before{content:\"\\f783\"}.la-calendar-minus:before{content:\"\\f272\"}.la-calendar-plus:before{content:\"\\f271\"}.la-calendar-times:before{content:\"\\f273\"}.la-calendar-week:before{content:\"\\f784\"}.la-camera:before{content:\"\\f030\"}.la-camera-retro:before{content:\"\\f083\"}.la-campground:before{content:\"\\f6bb\"}.la-canadian-maple-leaf:before{content:\"\\f785\"}.la-candy-cane:before{content:\"\\f786\"}.la-cannabis:before{content:\"\\f55f\"}.la-capsules:before{content:\"\\f46b\"}.la-car:before{content:\"\\f1b9\"}.la-car-alt:before{content:\"\\f5de\"}.la-car-battery:before{content:\"\\f5df\"}.la-car-crash:before{content:\"\\f5e1\"}.la-car-side:before{content:\"\\f5e4\"}.la-caret-down:before{content:\"\\f0d7\"}.la-caret-left:before{content:\"\\f0d9\"}.la-caret-right:before{content:\"\\f0da\"}.la-caret-square-down:before{content:\"\\f150\"}.la-caret-square-left:before{content:\"\\f191\"}.la-caret-square-right:before{content:\"\\f152\"}.la-caret-square-up:before{content:\"\\f151\"}.la-caret-up:before{content:\"\\f0d8\"}.la-carrot:before{content:\"\\f787\"}.la-cart-arrow-down:before{content:\"\\f218\"}.la-cart-plus:before{content:\"\\f217\"}.la-cash-register:before{content:\"\\f788\"}.la-cat:before{content:\"\\f6be\"}.la-cc-amazon-pay:before{content:\"\\f42d\"}.la-cc-amex:before{content:\"\\f1f3\"}.la-cc-apple-pay:before{content:\"\\f416\"}.la-cc-diners-club:before{content:\"\\f24c\"}.la-cc-discover:before{content:\"\\f1f2\"}.la-cc-jcb:before{content:\"\\f24b\"}.la-cc-mastercard:before{content:\"\\f1f1\"}.la-cc-paypal:before{content:\"\\f1f4\"}.la-cc-stripe:before{content:\"\\f1f5\"}.la-cc-visa:before{content:\"\\f1f0\"}.la-centercode:before{content:\"\\f380\"}.la-centos:before{content:\"\\f789\"}.la-certificate:before{content:\"\\f0a3\"}.la-chair:before{content:\"\\f6c0\"}.la-chalkboard:before{content:\"\\f51b\"}.la-chalkboard-teacher:before{content:\"\\f51c\"}.la-charging-station:before{content:\"\\f5e7\"}.la-chart-area:before{content:\"\\f1fe\"}.la-chart-bar:before{content:\"\\f080\"}.la-chart-line:before{content:\"\\f201\"}.la-chart-pie:before{content:\"\\f200\"}.la-check:before{content:\"\\f00c\"}.la-check-circle:before{content:\"\\f058\"}.la-check-double:before{content:\"\\f560\"}.la-check-square:before{content:\"\\f14a\"}.la-cheese:before{content:\"\\f7ef\"}.la-chess:before{content:\"\\f439\"}.la-chess-bishop:before{content:\"\\f43a\"}.la-chess-board:before{content:\"\\f43c\"}.la-chess-king:before{content:\"\\f43f\"}.la-chess-knight:before{content:\"\\f441\"}.la-chess-pawn:before{content:\"\\f443\"}.la-chess-queen:before{content:\"\\f445\"}.la-chess-rook:before{content:\"\\f447\"}.la-chevron-circle-down:before{content:\"\\f13a\"}.la-chevron-circle-left:before{content:\"\\f137\"}.la-chevron-circle-right:before{content:\"\\f138\"}.la-chevron-circle-up:before{content:\"\\f139\"}.la-chevron-down:before{content:\"\\f078\"}.la-chevron-left:before{content:\"\\f053\"}.la-chevron-right:before{content:\"\\f054\"}.la-chevron-up:before{content:\"\\f077\"}.la-child:before{content:\"\\f1ae\"}.la-chrome:before{content:\"\\f268\"}.la-chromecast:before{content:\"\\f838\"}.la-church:before{content:\"\\f51d\"}.la-circle:before{content:\"\\f111\"}.la-circle-notch:before{content:\"\\f1ce\"}.la-city:before{content:\"\\f64f\"}.la-clinic-medical:before{content:\"\\f7f2\"}.la-clipboard:before{content:\"\\f328\"}.la-clipboard-check:before{content:\"\\f46c\"}.la-clipboard-list:before{content:\"\\f46d\"}.la-clock:before{content:\"\\f017\"}.la-clone:before{content:\"\\f24d\"}.la-closed-captioning:before{content:\"\\f20a\"}.la-cloud:before{content:\"\\f0c2\"}.la-cloud-download-alt:before{content:\"\\f381\"}.la-cloud-meatball:before{content:\"\\f73b\"}.la-cloud-moon:before{content:\"\\f6c3\"}.la-cloud-moon-rain:before{content:\"\\f73c\"}.la-cloud-rain:before{content:\"\\f73d\"}.la-cloud-showers-heavy:before{content:\"\\f740\"}.la-cloud-sun:before{content:\"\\f6c4\"}.la-cloud-sun-rain:before{content:\"\\f743\"}.la-cloud-upload-alt:before{content:\"\\f382\"}.la-cloudscale:before{content:\"\\f383\"}.la-cloudsmith:before{content:\"\\f384\"}.la-cloudversify:before{content:\"\\f385\"}.la-cocktail:before{content:\"\\f561\"}.la-code:before{content:\"\\f121\"}.la-code-branch:before{content:\"\\f126\"}.la-codepen:before{content:\"\\f1cb\"}.la-codiepie:before{content:\"\\f284\"}.la-coffee:before{content:\"\\f0f4\"}.la-cog:before{content:\"\\f013\"}.la-cogs:before{content:\"\\f085\"}.la-coins:before{content:\"\\f51e\"}.la-columns:before{content:\"\\f0db\"}.la-comment:before{content:\"\\f075\"}.la-comment-alt:before{content:\"\\f27a\"}.la-comment-dollar:before{content:\"\\f651\"}.la-comment-dots:before{content:\"\\f4ad\"}.la-comment-medical:before{content:\"\\f7f5\"}.la-comment-slash:before{content:\"\\f4b3\"}.la-comments:before{content:\"\\f086\"}.la-comments-dollar:before{content:\"\\f653\"}.la-compact-disc:before{content:\"\\f51f\"}.la-compass:before{content:\"\\f14e\"}.la-compress:before{content:\"\\f066\"}.la-compress-arrows-alt:before{content:\"\\f78c\"}.la-concierge-bell:before{content:\"\\f562\"}.la-confluence:before{content:\"\\f78d\"}.la-connectdevelop:before{content:\"\\f20e\"}.la-contao:before{content:\"\\f26d\"}.la-cookie:before{content:\"\\f563\"}.la-cookie-bite:before{content:\"\\f564\"}.la-copy:before{content:\"\\f0c5\"}.la-copyright:before{content:\"\\f1f9\"}.la-cotton-bureau:before{content:\"\\f89e\"}.la-couch:before{content:\"\\f4b8\"}.la-cpanel:before{content:\"\\f388\"}.la-creative-commons:before{content:\"\\f25e\"}.la-creative-commons-by:before{content:\"\\f4e7\"}.la-creative-commons-nc:before{content:\"\\f4e8\"}.la-creative-commons-nc-eu:before{content:\"\\f4e9\"}.la-creative-commons-nc-jp:before{content:\"\\f4ea\"}.la-creative-commons-nd:before{content:\"\\f4eb\"}.la-creative-commons-pd:before{content:\"\\f4ec\"}.la-creative-commons-pd-alt:before{content:\"\\f4ed\"}.la-creative-commons-remix:before{content:\"\\f4ee\"}.la-creative-commons-sa:before{content:\"\\f4ef\"}.la-creative-commons-sampling:before{content:\"\\f4f0\"}.la-creative-commons-sampling-plus:before{content:\"\\f4f1\"}.la-creative-commons-share:before{content:\"\\f4f2\"}.la-creative-commons-zero:before{content:\"\\f4f3\"}.la-credit-card:before{content:\"\\f09d\"}.la-critical-role:before{content:\"\\f6c9\"}.la-crop:before{content:\"\\f125\"}.la-crop-alt:before{content:\"\\f565\"}.la-cross:before{content:\"\\f654\"}.la-crosshairs:before{content:\"\\f05b\"}.la-crow:before{content:\"\\f520\"}.la-crown:before{content:\"\\f521\"}.la-crutch:before{content:\"\\f7f7\"}.la-css3:before{content:\"\\f13c\"}.la-css3-alt:before{content:\"\\f38b\"}.la-cube:before{content:\"\\f1b2\"}.la-cubes:before{content:\"\\f1b3\"}.la-cut:before{content:\"\\f0c4\"}.la-cuttlefish:before{content:\"\\f38c\"}.la-d-and-d:before{content:\"\\f38d\"}.la-d-and-d-beyond:before{content:\"\\f6ca\"}.la-dashcube:before{content:\"\\f210\"}.la-database:before{content:\"\\f1c0\"}.la-deaf:before{content:\"\\f2a4\"}.la-delicious:before{content:\"\\f1a5\"}.la-democrat:before{content:\"\\f747\"}.la-deploydog:before{content:\"\\f38e\"}.la-deskpro:before{content:\"\\f38f\"}.la-desktop:before{content:\"\\f108\"}.la-dev:before{content:\"\\f6cc\"}.la-deviantart:before{content:\"\\f1bd\"}.la-dharmachakra:before{content:\"\\f655\"}.la-dhl:before{content:\"\\f790\"}.la-diagnoses:before{content:\"\\f470\"}.la-diaspora:before{content:\"\\f791\"}.la-dice:before{content:\"\\f522\"}.la-dice-d20:before{content:\"\\f6cf\"}.la-dice-d6:before{content:\"\\f6d1\"}.la-dice-five:before{content:\"\\f523\"}.la-dice-four:before{content:\"\\f524\"}.la-dice-one:before{content:\"\\f525\"}.la-dice-six:before{content:\"\\f526\"}.la-dice-three:before{content:\"\\f527\"}.la-dice-two:before{content:\"\\f528\"}.la-digg:before{content:\"\\f1a6\"}.la-digital-ocean:before{content:\"\\f391\"}.la-digital-tachograph:before{content:\"\\f566\"}.la-directions:before{content:\"\\f5eb\"}.la-discord:before{content:\"\\f392\"}.la-discourse:before{content:\"\\f393\"}.la-divide:before{content:\"\\f529\"}.la-dizzy:before{content:\"\\f567\"}.la-dna:before{content:\"\\f471\"}.la-dochub:before{content:\"\\f394\"}.la-docker:before{content:\"\\f395\"}.la-dog:before{content:\"\\f6d3\"}.la-dollar-sign:before{content:\"\\f155\"}.la-dolly:before{content:\"\\f472\"}.la-dolly-flatbed:before{content:\"\\f474\"}.la-donate:before{content:\"\\f4b9\"}.la-door-closed:before{content:\"\\f52a\"}.la-door-open:before{content:\"\\f52b\"}.la-dot-circle:before{content:\"\\f192\"}.la-dove:before{content:\"\\f4ba\"}.la-download:before{content:\"\\f019\"}.la-draft2digital:before{content:\"\\f396\"}.la-drafting-compass:before{content:\"\\f568\"}.la-dragon:before{content:\"\\f6d5\"}.la-draw-polygon:before{content:\"\\f5ee\"}.la-dribbble:before{content:\"\\f17d\"}.la-dribbble-square:before{content:\"\\f397\"}.la-dropbox:before{content:\"\\f16b\"}.la-drum:before{content:\"\\f569\"}.la-drum-steelpan:before{content:\"\\f56a\"}.la-drumstick-bite:before{content:\"\\f6d7\"}.la-drupal:before{content:\"\\f1a9\"}.la-dumbbell:before{content:\"\\f44b\"}.la-dumpster:before{content:\"\\f793\"}.la-dumpster-fire:before{content:\"\\f794\"}.la-dungeon:before{content:\"\\f6d9\"}.la-dyalog:before{content:\"\\f399\"}.la-earlybirds:before{content:\"\\f39a\"}.la-ebay:before{content:\"\\f4f4\"}.la-edge:before{content:\"\\f282\"}.la-edit:before{content:\"\\f044\"}.la-egg:before{content:\"\\f7fb\"}.la-eject:before{content:\"\\f052\"}.la-elementor:before{content:\"\\f430\"}.la-ellipsis-h:before{content:\"\\f141\"}.la-ellipsis-v:before{content:\"\\f142\"}.la-ello:before{content:\"\\f5f1\"}.la-ember:before{content:\"\\f423\"}.la-empire:before{content:\"\\f1d1\"}.la-envelope:before{content:\"\\f0e0\"}.la-envelope-open:before{content:\"\\f2b6\"}.la-envelope-open-text:before{content:\"\\f658\"}.la-envelope-square:before{content:\"\\f199\"}.la-envira:before{content:\"\\f299\"}.la-equals:before{content:\"\\f52c\"}.la-eraser:before{content:\"\\f12d\"}.la-erlang:before{content:\"\\f39d\"}.la-ethereum:before{content:\"\\f42e\"}.la-ethernet:before{content:\"\\f796\"}.la-etsy:before{content:\"\\f2d7\"}.la-euro-sign:before{content:\"\\f153\"}.la-evernote:before{content:\"\\f839\"}.la-exchange-alt:before{content:\"\\f362\"}.la-exclamation:before{content:\"\\f12a\"}.la-exclamation-circle:before{content:\"\\f06a\"}.la-exclamation-triangle:before{content:\"\\f071\"}.la-expand:before{content:\"\\f065\"}.la-expand-arrows-alt:before{content:\"\\f31e\"}.la-expeditedssl:before{content:\"\\f23e\"}.la-external-link-alt:before{content:\"\\f35d\"}.la-external-link-square-alt:before{content:\"\\f360\"}.la-eye:before{content:\"\\f06e\"}.la-eye-dropper:before{content:\"\\f1fb\"}.la-eye-slash:before{content:\"\\f070\"}.la-facebook:before{content:\"\\f09a\"}.la-facebook-f:before{content:\"\\f39e\"}.la-facebook-messenger:before{content:\"\\f39f\"}.la-facebook-square:before{content:\"\\f082\"}.la-fan:before{content:\"\\f863\"}.la-fantasy-flight-games:before{content:\"\\f6dc\"}.la-fast-backward:before{content:\"\\f049\"}.la-fast-forward:before{content:\"\\f050\"}.la-fax:before{content:\"\\f1ac\"}.la-feather:before{content:\"\\f52d\"}.la-feather-alt:before{content:\"\\f56b\"}.la-fedex:before{content:\"\\f797\"}.la-fedora:before{content:\"\\f798\"}.la-female:before{content:\"\\f182\"}.la-fighter-jet:before{content:\"\\f0fb\"}.la-figma:before{content:\"\\f799\"}.la-file:before{content:\"\\f15b\"}.la-file-alt:before{content:\"\\f15c\"}.la-file-archive:before{content:\"\\f1c6\"}.la-file-audio:before{content:\"\\f1c7\"}.la-file-code:before{content:\"\\f1c9\"}.la-file-contract:before{content:\"\\f56c\"}.la-file-csv:before{content:\"\\f6dd\"}.la-file-download:before{content:\"\\f56d\"}.la-file-excel:before{content:\"\\f1c3\"}.la-file-export:before{content:\"\\f56e\"}.la-file-image:before{content:\"\\f1c5\"}.la-file-import:before{content:\"\\f56f\"}.la-file-invoice:before{content:\"\\f570\"}.la-file-invoice-dollar:before{content:\"\\f571\"}.la-file-medical:before{content:\"\\f477\"}.la-file-medical-alt:before{content:\"\\f478\"}.la-file-pdf:before{content:\"\\f1c1\"}.la-file-powerpoint:before{content:\"\\f1c4\"}.la-file-prescription:before{content:\"\\f572\"}.la-file-signature:before{content:\"\\f573\"}.la-file-upload:before{content:\"\\f574\"}.la-file-video:before{content:\"\\f1c8\"}.la-file-word:before{content:\"\\f1c2\"}.la-fill:before{content:\"\\f575\"}.la-fill-drip:before{content:\"\\f576\"}.la-film:before{content:\"\\f008\"}.la-filter:before{content:\"\\f0b0\"}.la-fingerprint:before{content:\"\\f577\"}.la-fire:before{content:\"\\f06d\"}.la-fire-alt:before{content:\"\\f7e4\"}.la-fire-extinguisher:before{content:\"\\f134\"}.la-firefox:before{content:\"\\f269\"}.la-first-aid:before{content:\"\\f479\"}.la-first-order:before{content:\"\\f2b0\"}.la-first-order-alt:before{content:\"\\f50a\"}.la-firstdraft:before{content:\"\\f3a1\"}.la-fish:before{content:\"\\f578\"}.la-fist-raised:before{content:\"\\f6de\"}.la-flag:before{content:\"\\f024\"}.la-flag-checkered:before{content:\"\\f11e\"}.la-flag-usa:before{content:\"\\f74d\"}.la-flask:before{content:\"\\f0c3\"}.la-flickr:before{content:\"\\f16e\"}.la-flipboard:before{content:\"\\f44d\"}.la-flushed:before{content:\"\\f579\"}.la-fly:before{content:\"\\f417\"}.la-folder:before{content:\"\\f07b\"}.la-folder-minus:before{content:\"\\f65d\"}.la-folder-open:before{content:\"\\f07c\"}.la-folder-plus:before{content:\"\\f65e\"}.la-font:before{content:\"\\f031\"}.la-font-awesome:before{content:\"\\f2b4\"}.la-font-awesome-alt:before{content:\"\\f35c\"}.la-font-awesome-flag:before{content:\"\\f425\"}.la-font-awesome-logo-full:before{content:\"\\f4e6\"}.la-fonticons:before{content:\"\\f280\"}.la-fonticons-fi:before{content:\"\\f3a2\"}.la-football-ball:before{content:\"\\f44e\"}.la-fort-awesome:before{content:\"\\f286\"}.la-fort-awesome-alt:before{content:\"\\f3a3\"}.la-forumbee:before{content:\"\\f211\"}.la-forward:before{content:\"\\f04e\"}.la-foursquare:before{content:\"\\f180\"}.la-free-code-camp:before{content:\"\\f2c5\"}.la-freebsd:before{content:\"\\f3a4\"}.la-frog:before{content:\"\\f52e\"}.la-frown:before{content:\"\\f119\"}.la-frown-open:before{content:\"\\f57a\"}.la-fulcrum:before{content:\"\\f50b\"}.la-funnel-dollar:before{content:\"\\f662\"}.la-futbol:before{content:\"\\f1e3\"}.la-galactic-republic:before{content:\"\\f50c\"}.la-galactic-senate:before{content:\"\\f50d\"}.la-gamepad:before{content:\"\\f11b\"}.la-gas-pump:before{content:\"\\f52f\"}.la-gavel:before{content:\"\\f0e3\"}.la-gem:before{content:\"\\f3a5\"}.la-genderless:before{content:\"\\f22d\"}.la-get-pocket:before{content:\"\\f265\"}.la-gg:before{content:\"\\f260\"}.la-gg-circle:before{content:\"\\f261\"}.la-ghost:before{content:\"\\f6e2\"}.la-gift:before{content:\"\\f06b\"}.la-gifts:before{content:\"\\f79c\"}.la-git:before{content:\"\\f1d3\"}.la-git-alt:before{content:\"\\f841\"}.la-git-square:before{content:\"\\f1d2\"}.la-github:before{content:\"\\f09b\"}.la-github-alt:before{content:\"\\f113\"}.la-github-square:before{content:\"\\f092\"}.la-gitkraken:before{content:\"\\f3a6\"}.la-gitlab:before{content:\"\\f296\"}.la-gitter:before{content:\"\\f426\"}.la-glass-cheers:before{content:\"\\f79f\"}.la-glass-martini:before{content:\"\\f000\"}.la-glass-martini-alt:before{content:\"\\f57b\"}.la-glass-whiskey:before{content:\"\\f7a0\"}.la-glasses:before{content:\"\\f530\"}.la-glide:before{content:\"\\f2a5\"}.la-glide-g:before{content:\"\\f2a6\"}.la-globe:before{content:\"\\f0ac\"}.la-globe-africa:before{content:\"\\f57c\"}.la-globe-americas:before{content:\"\\f57d\"}.la-globe-asia:before{content:\"\\f57e\"}.la-globe-europe:before{content:\"\\f7a2\"}.la-gofore:before{content:\"\\f3a7\"}.la-golf-ball:before{content:\"\\f450\"}.la-goodreads:before{content:\"\\f3a8\"}.la-goodreads-g:before{content:\"\\f3a9\"}.la-google:before{content:\"\\f1a0\"}.la-google-drive:before{content:\"\\f3aa\"}.la-google-play:before{content:\"\\f3ab\"}.la-google-plus:before{content:\"\\f2b3\"}.la-google-plus-g:before{content:\"\\f0d5\"}.la-google-plus-square:before{content:\"\\f0d4\"}.la-google-wallet:before{content:\"\\f1ee\"}.la-gopuram:before{content:\"\\f664\"}.la-graduation-cap:before{content:\"\\f19d\"}.la-gratipay:before{content:\"\\f184\"}.la-grav:before{content:\"\\f2d6\"}.la-greater-than:before{content:\"\\f531\"}.la-greater-than-equal:before{content:\"\\f532\"}.la-grimace:before{content:\"\\f57f\"}.la-grin:before{content:\"\\f580\"}.la-grin-alt:before{content:\"\\f581\"}.la-grin-beam:before{content:\"\\f582\"}.la-grin-beam-sweat:before{content:\"\\f583\"}.la-grin-hearts:before{content:\"\\f584\"}.la-grin-squint:before{content:\"\\f585\"}.la-grin-squint-tears:before{content:\"\\f586\"}.la-grin-stars:before{content:\"\\f587\"}.la-grin-tears:before{content:\"\\f588\"}.la-grin-tongue:before{content:\"\\f589\"}.la-grin-tongue-squint:before{content:\"\\f58a\"}.la-grin-tongue-wink:before{content:\"\\f58b\"}.la-grin-wink:before{content:\"\\f58c\"}.la-grip-horizontal:before{content:\"\\f58d\"}.la-grip-lines:before{content:\"\\f7a4\"}.la-grip-lines-vertical:before{content:\"\\f7a5\"}.la-grip-vertical:before{content:\"\\f58e\"}.la-gripfire:before{content:\"\\f3ac\"}.la-grunt:before{content:\"\\f3ad\"}.la-guitar:before{content:\"\\f7a6\"}.la-gulp:before{content:\"\\f3ae\"}.la-h-square:before{content:\"\\f0fd\"}.la-hacker-news:before{content:\"\\f1d4\"}.la-hacker-news-square:before{content:\"\\f3af\"}.la-hackerrank:before{content:\"\\f5f7\"}.la-hamburger:before{content:\"\\f805\"}.la-hammer:before{content:\"\\f6e3\"}.la-hamsa:before{content:\"\\f665\"}.la-hand-holding:before{content:\"\\f4bd\"}.la-hand-holding-heart:before{content:\"\\f4be\"}.la-hand-holding-usd:before{content:\"\\f4c0\"}.la-hand-lizard:before{content:\"\\f258\"}.la-hand-middle-finger:before{content:\"\\f806\"}.la-hand-paper:before{content:\"\\f256\"}.la-hand-peace:before{content:\"\\f25b\"}.la-hand-point-down:before{content:\"\\f0a7\"}.la-hand-point-left:before{content:\"\\f0a5\"}.la-hand-point-right:before{content:\"\\f0a4\"}.la-hand-point-up:before{content:\"\\f0a6\"}.la-hand-pointer:before{content:\"\\f25a\"}.la-hand-rock:before{content:\"\\f255\"}.la-hand-scissors:before{content:\"\\f257\"}.la-hand-spock:before{content:\"\\f259\"}.la-hands:before{content:\"\\f4c2\"}.la-hands-helping:before{content:\"\\f4c4\"}.la-handshake:before{content:\"\\f2b5\"}.la-hanukiah:before{content:\"\\f6e6\"}.la-hard-hat:before{content:\"\\f807\"}.la-hashtag:before{content:\"\\f292\"}.la-hat-cowboy:before{content:\"\\f8c0\"}.la-hat-cowboy-side:before{content:\"\\f8c1\"}.la-hat-wizard:before{content:\"\\f6e8\"}.la-haykal:before{content:\"\\f666\"}.la-hdd:before{content:\"\\f0a0\"}.la-heading:before{content:\"\\f1dc\"}.la-headphones:before{content:\"\\f025\"}.la-headphones-alt:before{content:\"\\f58f\"}.la-headset:before{content:\"\\f590\"}.la-heart:before{content:\"\\f004\"}.la-heart-broken:before{content:\"\\f7a9\"}.la-heartbeat:before{content:\"\\f21e\"}.la-helicopter:before{content:\"\\f533\"}.la-highlighter:before{content:\"\\f591\"}.la-hiking:before{content:\"\\f6ec\"}.la-hippo:before{content:\"\\f6ed\"}.la-hips:before{content:\"\\f452\"}.la-hire-a-helper:before{content:\"\\f3b0\"}.la-history:before{content:\"\\f1da\"}.la-hockey-puck:before{content:\"\\f453\"}.la-holly-berry:before{content:\"\\f7aa\"}.la-home:before{content:\"\\f015\"}.la-hooli:before{content:\"\\f427\"}.la-hornbill:before{content:\"\\f592\"}.la-horse:before{content:\"\\f6f0\"}.la-horse-head:before{content:\"\\f7ab\"}.la-hospital:before{content:\"\\f0f8\"}.la-hospital-alt:before{content:\"\\f47d\"}.la-hospital-symbol:before{content:\"\\f47e\"}.la-hot-tub:before{content:\"\\f593\"}.la-hotdog:before{content:\"\\f80f\"}.la-hotel:before{content:\"\\f594\"}.la-hotjar:before{content:\"\\f3b1\"}.la-hourglass:before{content:\"\\f254\"}.la-hourglass-end:before{content:\"\\f253\"}.la-hourglass-half:before{content:\"\\f252\"}.la-hourglass-start:before{content:\"\\f251\"}.la-house-damage:before{content:\"\\f6f1\"}.la-houzz:before{content:\"\\f27c\"}.la-hryvnia:before{content:\"\\f6f2\"}.la-html5:before{content:\"\\f13b\"}.la-hubspot:before{content:\"\\f3b2\"}.la-i-cursor:before{content:\"\\f246\"}.la-ice-cream:before{content:\"\\f810\"}.la-icicles:before{content:\"\\f7ad\"}.la-icons:before{content:\"\\f86d\"}.la-id-badge:before{content:\"\\f2c1\"}.la-id-card:before{content:\"\\f2c2\"}.la-id-card-alt:before{content:\"\\f47f\"}.la-igloo:before{content:\"\\f7ae\"}.la-image:before{content:\"\\f03e\"}.la-images:before{content:\"\\f302\"}.la-imdb:before{content:\"\\f2d8\"}.la-inbox:before{content:\"\\f01c\"}.la-indent:before{content:\"\\f03c\"}.la-industry:before{content:\"\\f275\"}.la-infinity:before{content:\"\\f534\"}.la-info:before{content:\"\\f129\"}.la-info-circle:before{content:\"\\f05a\"}.la-instagram:before{content:\"\\f16d\"}.la-intercom:before{content:\"\\f7af\"}.la-internet-explorer:before{content:\"\\f26b\"}.la-invision:before{content:\"\\f7b0\"}.la-ioxhost:before{content:\"\\f208\"}.la-italic:before{content:\"\\f033\"}.la-itch-io:before{content:\"\\f83a\"}.la-itunes:before{content:\"\\f3b4\"}.la-itunes-note:before{content:\"\\f3b5\"}.la-java:before{content:\"\\f4e4\"}.la-jedi:before{content:\"\\f669\"}.la-jedi-order:before{content:\"\\f50e\"}.la-jenkins:before{content:\"\\f3b6\"}.la-jira:before{content:\"\\f7b1\"}.la-joget:before{content:\"\\f3b7\"}.la-joint:before{content:\"\\f595\"}.la-joomla:before{content:\"\\f1aa\"}.la-journal-whills:before{content:\"\\f66a\"}.la-js:before{content:\"\\f3b8\"}.la-js-square:before{content:\"\\f3b9\"}.la-jsfiddle:before{content:\"\\f1cc\"}.la-kaaba:before{content:\"\\f66b\"}.la-kaggle:before{content:\"\\f5fa\"}.la-key:before{content:\"\\f084\"}.la-keybase:before{content:\"\\f4f5\"}.la-keyboard:before{content:\"\\f11c\"}.la-keycdn:before{content:\"\\f3ba\"}.la-khanda:before{content:\"\\f66d\"}.la-kickstarter:before{content:\"\\f3bb\"}.la-kickstarter-k:before{content:\"\\f3bc\"}.la-kiss:before{content:\"\\f596\"}.la-kiss-beam:before{content:\"\\f597\"}.la-kiss-wink-heart:before{content:\"\\f598\"}.la-kiwi-bird:before{content:\"\\f535\"}.la-korvue:before{content:\"\\f42f\"}.la-landmark:before{content:\"\\f66f\"}.la-language:before{content:\"\\f1ab\"}.la-laptop:before{content:\"\\f109\"}.la-laptop-code:before{content:\"\\f5fc\"}.la-laptop-medical:before{content:\"\\f812\"}.la-laravel:before{content:\"\\f3bd\"}.la-lastfm:before{content:\"\\f202\"}.la-lastfm-square:before{content:\"\\f203\"}.la-laugh:before{content:\"\\f599\"}.la-laugh-beam:before{content:\"\\f59a\"}.la-laugh-squint:before{content:\"\\f59b\"}.la-laugh-wink:before{content:\"\\f59c\"}.la-layer-group:before{content:\"\\f5fd\"}.la-leaf:before{content:\"\\f06c\"}.la-leanpub:before{content:\"\\f212\"}.la-lemon:before{content:\"\\f094\"}.la-less:before{content:\"\\f41d\"}.la-less-than:before{content:\"\\f536\"}.la-less-than-equal:before{content:\"\\f537\"}.la-level-down-alt:before{content:\"\\f3be\"}.la-level-up-alt:before{content:\"\\f3bf\"}.la-life-ring:before{content:\"\\f1cd\"}.la-lightbulb:before{content:\"\\f0eb\"}.la-line:before{content:\"\\f3c0\"}.la-link:before{content:\"\\f0c1\"}.la-linkedin:before{content:\"\\f08c\"}.la-linkedin-in:before{content:\"\\f0e1\"}.la-linode:before{content:\"\\f2b8\"}.la-linux:before{content:\"\\f17c\"}.la-lira-sign:before{content:\"\\f195\"}.la-list:before{content:\"\\f03a\"}.la-list-alt:before{content:\"\\f022\"}.la-list-ol:before{content:\"\\f0cb\"}.la-list-ul:before{content:\"\\f0ca\"}.la-location-arrow:before{content:\"\\f124\"}.la-lock:before{content:\"\\f023\"}.la-lock-open:before{content:\"\\f3c1\"}.la-long-arrow-alt-down:before{content:\"\\f309\"}.la-long-arrow-alt-left:before{content:\"\\f30a\"}.la-long-arrow-alt-right:before{content:\"\\f30b\"}.la-long-arrow-alt-up:before{content:\"\\f30c\"}.la-low-vision:before{content:\"\\f2a8\"}.la-luggage-cart:before{content:\"\\f59d\"}.la-lyft:before{content:\"\\f3c3\"}.la-magento:before{content:\"\\f3c4\"}.la-magic:before{content:\"\\f0d0\"}.la-magnet:before{content:\"\\f076\"}.la-mail-bulk:before{content:\"\\f674\"}.la-mailchimp:before{content:\"\\f59e\"}.la-male:before{content:\"\\f183\"}.la-mandalorian:before{content:\"\\f50f\"}.la-map:before{content:\"\\f279\"}.la-map-marked:before{content:\"\\f59f\"}.la-map-marked-alt:before{content:\"\\f5a0\"}.la-map-marker:before{content:\"\\f041\"}.la-map-marker-alt:before{content:\"\\f3c5\"}.la-map-pin:before{content:\"\\f276\"}.la-map-signs:before{content:\"\\f277\"}.la-markdown:before{content:\"\\f60f\"}.la-marker:before{content:\"\\f5a1\"}.la-mars:before{content:\"\\f222\"}.la-mars-double:before{content:\"\\f227\"}.la-mars-stroke:before{content:\"\\f229\"}.la-mars-stroke-h:before{content:\"\\f22b\"}.la-mars-stroke-v:before{content:\"\\f22a\"}.la-mask:before{content:\"\\f6fa\"}.la-mastodon:before{content:\"\\f4f6\"}.la-maxcdn:before{content:\"\\f136\"}.la-mdb:before{content:\"\\f8ca\"}.la-medal:before{content:\"\\f5a2\"}.la-medapps:before{content:\"\\f3c6\"}.la-medium:before{content:\"\\f23a\"}.la-medium-m:before{content:\"\\f3c7\"}.la-medkit:before{content:\"\\f0fa\"}.la-medrt:before{content:\"\\f3c8\"}.la-meetup:before{content:\"\\f2e0\"}.la-megaport:before{content:\"\\f5a3\"}.la-meh:before{content:\"\\f11a\"}.la-meh-blank:before{content:\"\\f5a4\"}.la-meh-rolling-eyes:before{content:\"\\f5a5\"}.la-memory:before{content:\"\\f538\"}.la-mendeley:before{content:\"\\f7b3\"}.la-menorah:before{content:\"\\f676\"}.la-mercury:before{content:\"\\f223\"}.la-meteor:before{content:\"\\f753\"}.la-microchip:before{content:\"\\f2db\"}.la-microphone:before{content:\"\\f130\"}.la-microphone-alt:before{content:\"\\f3c9\"}.la-microphone-alt-slash:before{content:\"\\f539\"}.la-microphone-slash:before{content:\"\\f131\"}.la-microscope:before{content:\"\\f610\"}.la-microsoft:before{content:\"\\f3ca\"}.la-minus:before{content:\"\\f068\"}.la-minus-circle:before{content:\"\\f056\"}.la-minus-square:before{content:\"\\f146\"}.la-mitten:before{content:\"\\f7b5\"}.la-mix:before{content:\"\\f3cb\"}.la-mixcloud:before{content:\"\\f289\"}.la-mizuni:before{content:\"\\f3cc\"}.la-mobile:before{content:\"\\f10b\"}.la-mobile-alt:before{content:\"\\f3cd\"}.la-modx:before{content:\"\\f285\"}.la-monero:before{content:\"\\f3d0\"}.la-money-bill:before{content:\"\\f0d6\"}.la-money-bill-alt:before{content:\"\\f3d1\"}.la-money-bill-wave:before{content:\"\\f53a\"}.la-money-bill-wave-alt:before{content:\"\\f53b\"}.la-money-check:before{content:\"\\f53c\"}.la-money-check-alt:before{content:\"\\f53d\"}.la-monument:before{content:\"\\f5a6\"}.la-moon:before{content:\"\\f186\"}.la-mortar-pestle:before{content:\"\\f5a7\"}.la-mosque:before{content:\"\\f678\"}.la-motorcycle:before{content:\"\\f21c\"}.la-mountain:before{content:\"\\f6fc\"}.la-mouse:before{content:\"\\f8cc\"}.la-mouse-pointer:before{content:\"\\f245\"}.la-mug-hot:before{content:\"\\f7b6\"}.la-music:before{content:\"\\f001\"}.la-napster:before{content:\"\\f3d2\"}.la-neos:before{content:\"\\f612\"}.la-network-wired:before{content:\"\\f6ff\"}.la-neuter:before{content:\"\\f22c\"}.la-newspaper:before{content:\"\\f1ea\"}.la-nimblr:before{content:\"\\f5a8\"}.la-node:before{content:\"\\f419\"}.la-node-js:before{content:\"\\f3d3\"}.la-not-equal:before{content:\"\\f53e\"}.la-notes-medical:before{content:\"\\f481\"}.la-npm:before{content:\"\\f3d4\"}.la-ns8:before{content:\"\\f3d5\"}.la-nutritionix:before{content:\"\\f3d6\"}.la-object-group:before{content:\"\\f247\"}.la-object-ungroup:before{content:\"\\f248\"}.la-odnoklassniki:before{content:\"\\f263\"}.la-odnoklassniki-square:before{content:\"\\f264\"}.la-oil-can:before{content:\"\\f613\"}.la-old-republic:before{content:\"\\f510\"}.la-om:before{content:\"\\f679\"}.la-opencart:before{content:\"\\f23d\"}.la-openid:before{content:\"\\f19b\"}.la-opera:before{content:\"\\f26a\"}.la-optin-monster:before{content:\"\\f23c\"}.la-orcid:before{content:\"\\f8d2\"}.la-osi:before{content:\"\\f41a\"}.la-otter:before{content:\"\\f700\"}.la-outdent:before{content:\"\\f03b\"}.la-page4:before{content:\"\\f3d7\"}.la-pagelines:before{content:\"\\f18c\"}.la-pager:before{content:\"\\f815\"}.la-paint-brush:before{content:\"\\f1fc\"}.la-paint-roller:before{content:\"\\f5aa\"}.la-palette:before{content:\"\\f53f\"}.la-palfed:before{content:\"\\f3d8\"}.la-pallet:before{content:\"\\f482\"}.la-paper-plane:before{content:\"\\f1d8\"}.la-paperclip:before{content:\"\\f0c6\"}.la-parachute-box:before{content:\"\\f4cd\"}.la-paragraph:before{content:\"\\f1dd\"}.la-parking:before{content:\"\\f540\"}.la-passport:before{content:\"\\f5ab\"}.la-pastafarianism:before{content:\"\\f67b\"}.la-paste:before{content:\"\\f0ea\"}.la-patreon:before{content:\"\\f3d9\"}.la-pause:before{content:\"\\f04c\"}.la-pause-circle:before{content:\"\\f28b\"}.la-paw:before{content:\"\\f1b0\"}.la-paypal:before{content:\"\\f1ed\"}.la-peace:before{content:\"\\f67c\"}.la-pen:before{content:\"\\f304\"}.la-pen-alt:before{content:\"\\f305\"}.la-pen-fancy:before{content:\"\\f5ac\"}.la-pen-nib:before{content:\"\\f5ad\"}.la-pen-square:before{content:\"\\f14b\"}.la-pencil-alt:before{content:\"\\f303\"}.la-pencil-ruler:before{content:\"\\f5ae\"}.la-penny-arcade:before{content:\"\\f704\"}.la-people-carry:before{content:\"\\f4ce\"}.la-pepper-hot:before{content:\"\\f816\"}.la-percent:before{content:\"\\f295\"}.la-percentage:before{content:\"\\f541\"}.la-periscope:before{content:\"\\f3da\"}.la-person-booth:before{content:\"\\f756\"}.la-phabricator:before{content:\"\\f3db\"}.la-phoenix-framework:before{content:\"\\f3dc\"}.la-phoenix-squadron:before{content:\"\\f511\"}.la-phone:before{content:\"\\f095\"}.la-phone-alt:before{content:\"\\f879\"}.la-phone-slash:before{content:\"\\f3dd\"}.la-phone-square:before{content:\"\\f098\"}.la-phone-square-alt:before{content:\"\\f87b\"}.la-phone-volume:before{content:\"\\f2a0\"}.la-photo-video:before{content:\"\\f87c\"}.la-php:before{content:\"\\f457\"}.la-pied-piper:before{content:\"\\f2ae\"}.la-pied-piper-alt:before{content:\"\\f1a8\"}.la-pied-piper-hat:before{content:\"\\f4e5\"}.la-pied-piper-pp:before{content:\"\\f1a7\"}.la-piggy-bank:before{content:\"\\f4d3\"}.la-pills:before{content:\"\\f484\"}.la-pinterest:before{content:\"\\f0d2\"}.la-pinterest-p:before{content:\"\\f231\"}.la-pinterest-square:before{content:\"\\f0d3\"}.la-pizza-slice:before{content:\"\\f818\"}.la-place-of-worship:before{content:\"\\f67f\"}.la-plane:before{content:\"\\f072\"}.la-plane-arrival:before{content:\"\\f5af\"}.la-plane-departure:before{content:\"\\f5b0\"}.la-play:before{content:\"\\f04b\"}.la-play-circle:before{content:\"\\f144\"}.la-playstation:before{content:\"\\f3df\"}.la-plug:before{content:\"\\f1e6\"}.la-plus:before{content:\"\\f067\"}.la-plus-circle:before{content:\"\\f055\"}.la-plus-square:before{content:\"\\f0fe\"}.la-podcast:before{content:\"\\f2ce\"}.la-poll:before{content:\"\\f681\"}.la-poll-h:before{content:\"\\f682\"}.la-poo:before{content:\"\\f2fe\"}.la-poo-storm:before{content:\"\\f75a\"}.la-poop:before{content:\"\\f619\"}.la-portrait:before{content:\"\\f3e0\"}.la-pound-sign:before{content:\"\\f154\"}.la-power-off:before{content:\"\\f011\"}.la-pray:before{content:\"\\f683\"}.la-praying-hands:before{content:\"\\f684\"}.la-prescription:before{content:\"\\f5b1\"}.la-prescription-bottle:before{content:\"\\f485\"}.la-prescription-bottle-alt:before{content:\"\\f486\"}.la-print:before{content:\"\\f02f\"}.la-procedures:before{content:\"\\f487\"}.la-product-hunt:before{content:\"\\f288\"}.la-project-diagram:before{content:\"\\f542\"}.la-pushed:before{content:\"\\f3e1\"}.la-puzzle-piece:before{content:\"\\f12e\"}.la-python:before{content:\"\\f3e2\"}.la-qq:before{content:\"\\f1d6\"}.la-qrcode:before{content:\"\\f029\"}.la-question:before{content:\"\\f128\"}.la-question-circle:before{content:\"\\f059\"}.la-quidditch:before{content:\"\\f458\"}.la-quinscape:before{content:\"\\f459\"}.la-quora:before{content:\"\\f2c4\"}.la-quote-left:before{content:\"\\f10d\"}.la-quote-right:before{content:\"\\f10e\"}.la-quran:before{content:\"\\f687\"}.la-r-project:before{content:\"\\f4f7\"}.la-radiation:before{content:\"\\f7b9\"}.la-radiation-alt:before{content:\"\\f7ba\"}.la-rainbow:before{content:\"\\f75b\"}.la-random:before{content:\"\\f074\"}.la-raspberry-pi:before{content:\"\\f7bb\"}.la-ravelry:before{content:\"\\f2d9\"}.la-react:before{content:\"\\f41b\"}.la-reacteurope:before{content:\"\\f75d\"}.la-readme:before{content:\"\\f4d5\"}.la-rebel:before{content:\"\\f1d0\"}.la-receipt:before{content:\"\\f543\"}.la-record-vinyl:before{content:\"\\f8d9\"}.la-recycle:before{content:\"\\f1b8\"}.la-red-river:before{content:\"\\f3e3\"}.la-reddit:before{content:\"\\f1a1\"}.la-reddit-alien:before{content:\"\\f281\"}.la-reddit-square:before{content:\"\\f1a2\"}.la-redhat:before{content:\"\\f7bc\"}.la-redo:before{content:\"\\f01e\"}.la-redo-alt:before{content:\"\\f2f9\"}.la-registered:before{content:\"\\f25d\"}.la-remove-format:before{content:\"\\f87d\"}.la-renren:before{content:\"\\f18b\"}.la-reply:before{content:\"\\f3e5\"}.la-reply-all:before{content:\"\\f122\"}.la-replyd:before{content:\"\\f3e6\"}.la-republican:before{content:\"\\f75e\"}.la-researchgate:before{content:\"\\f4f8\"}.la-resolving:before{content:\"\\f3e7\"}.la-restroom:before{content:\"\\f7bd\"}.la-retweet:before{content:\"\\f079\"}.la-rev:before{content:\"\\f5b2\"}.la-ribbon:before{content:\"\\f4d6\"}.la-ring:before{content:\"\\f70b\"}.la-road:before{content:\"\\f018\"}.la-robot:before{content:\"\\f544\"}.la-rocket:before{content:\"\\f135\"}.la-rocketchat:before{content:\"\\f3e8\"}.la-rockrms:before{content:\"\\f3e9\"}.la-route:before{content:\"\\f4d7\"}.la-rss:before{content:\"\\f09e\"}.la-rss-square:before{content:\"\\f143\"}.la-ruble-sign:before{content:\"\\f158\"}.la-ruler:before{content:\"\\f545\"}.la-ruler-combined:before{content:\"\\f546\"}.la-ruler-horizontal:before{content:\"\\f547\"}.la-ruler-vertical:before{content:\"\\f548\"}.la-running:before{content:\"\\f70c\"}.la-rupee-sign:before{content:\"\\f156\"}.la-sad-cry:before{content:\"\\f5b3\"}.la-sad-tear:before{content:\"\\f5b4\"}.la-safari:before{content:\"\\f267\"}.la-salesforce:before{content:\"\\f83b\"}.la-sass:before{content:\"\\f41e\"}.la-satellite:before{content:\"\\f7bf\"}.la-satellite-dish:before{content:\"\\f7c0\"}.la-save:before{content:\"\\f0c7\"}.la-schlix:before{content:\"\\f3ea\"}.la-school:before{content:\"\\f549\"}.la-screwdriver:before{content:\"\\f54a\"}.la-scribd:before{content:\"\\f28a\"}.la-scroll:before{content:\"\\f70e\"}.la-sd-card:before{content:\"\\f7c2\"}.la-search:before{content:\"\\f002\"}.la-search-dollar:before{content:\"\\f688\"}.la-search-location:before{content:\"\\f689\"}.la-search-minus:before{content:\"\\f010\"}.la-search-plus:before{content:\"\\f00e\"}.la-searchengin:before{content:\"\\f3eb\"}.la-seedling:before{content:\"\\f4d8\"}.la-sellcast:before{content:\"\\f2da\"}.la-sellsy:before{content:\"\\f213\"}.la-server:before{content:\"\\f233\"}.la-servicestack:before{content:\"\\f3ec\"}.la-shapes:before{content:\"\\f61f\"}.la-share:before{content:\"\\f064\"}.la-share-alt:before{content:\"\\f1e0\"}.la-share-alt-square:before{content:\"\\f1e1\"}.la-share-square:before{content:\"\\f14d\"}.la-shekel-sign:before{content:\"\\f20b\"}.la-shield-alt:before{content:\"\\f3ed\"}.la-ship:before{content:\"\\f21a\"}.la-shipping-fast:before{content:\"\\f48b\"}.la-shirtsinbulk:before{content:\"\\f214\"}.la-shoe-prints:before{content:\"\\f54b\"}.la-shopping-bag:before{content:\"\\f290\"}.la-shopping-basket:before{content:\"\\f291\"}.la-shopping-cart:before{content:\"\\f07a\"}.la-shopware:before{content:\"\\f5b5\"}.la-shower:before{content:\"\\f2cc\"}.la-shuttle-van:before{content:\"\\f5b6\"}.la-sign:before{content:\"\\f4d9\"}.la-sign-in-alt:before{content:\"\\f2f6\"}.la-sign-language:before{content:\"\\f2a7\"}.la-sign-out-alt:before{content:\"\\f2f5\"}.la-signal:before{content:\"\\f012\"}.la-signature:before{content:\"\\f5b7\"}.la-sim-card:before{content:\"\\f7c4\"}.la-simplybuilt:before{content:\"\\f215\"}.la-sistrix:before{content:\"\\f3ee\"}.la-sitemap:before{content:\"\\f0e8\"}.la-sith:before{content:\"\\f512\"}.la-skating:before{content:\"\\f7c5\"}.la-sketch:before{content:\"\\f7c6\"}.la-skiing:before{content:\"\\f7c9\"}.la-skiing-nordic:before{content:\"\\f7ca\"}.la-skull:before{content:\"\\f54c\"}.la-skull-crossbones:before{content:\"\\f714\"}.la-skyatlas:before{content:\"\\f216\"}.la-skype:before{content:\"\\f17e\"}.la-slack:before{content:\"\\f198\"}.la-slack-hash:before{content:\"\\f3ef\"}.la-slash:before{content:\"\\f715\"}.la-sleigh:before{content:\"\\f7cc\"}.la-sliders-h:before{content:\"\\f1de\"}.la-slideshare:before{content:\"\\f1e7\"}.la-smile:before{content:\"\\f118\"}.la-smile-beam:before{content:\"\\f5b8\"}.la-smile-wink:before{content:\"\\f4da\"}.la-smog:before{content:\"\\f75f\"}.la-smoking:before{content:\"\\f48d\"}.la-smoking-ban:before{content:\"\\f54d\"}.la-sms:before{content:\"\\f7cd\"}.la-snapchat:before{content:\"\\f2ab\"}.la-snapchat-ghost:before{content:\"\\f2ac\"}.la-snapchat-square:before{content:\"\\f2ad\"}.la-snowboarding:before{content:\"\\f7ce\"}.la-snowflake:before{content:\"\\f2dc\"}.la-snowman:before{content:\"\\f7d0\"}.la-snowplow:before{content:\"\\f7d2\"}.la-socks:before{content:\"\\f696\"}.la-solar-panel:before{content:\"\\f5ba\"}.la-sort:before{content:\"\\f0dc\"}.la-sort-alpha-down:before{content:\"\\f15d\"}.la-sort-alpha-down-alt:before{content:\"\\f881\"}.la-sort-alpha-up:before{content:\"\\f15e\"}.la-sort-alpha-up-alt:before{content:\"\\f882\"}.la-sort-amount-down:before{content:\"\\f160\"}.la-sort-amount-down-alt:before{content:\"\\f884\"}.la-sort-amount-up:before{content:\"\\f161\"}.la-sort-amount-up-alt:before{content:\"\\f885\"}.la-sort-down:before{content:\"\\f0dd\"}.la-sort-numeric-down:before{content:\"\\f162\"}.la-sort-numeric-down-alt:before{content:\"\\f886\"}.la-sort-numeric-up:before{content:\"\\f163\"}.la-sort-numeric-up-alt:before{content:\"\\f887\"}.la-sort-up:before{content:\"\\f0de\"}.la-soundcloud:before{content:\"\\f1be\"}.la-sourcetree:before{content:\"\\f7d3\"}.la-spa:before{content:\"\\f5bb\"}.la-space-shuttle:before{content:\"\\f197\"}.la-speakap:before{content:\"\\f3f3\"}.la-speaker-deck:before{content:\"\\f83c\"}.la-spell-check:before{content:\"\\f891\"}.la-spider:before{content:\"\\f717\"}.la-spinner:before{content:\"\\f110\"}.la-splotch:before{content:\"\\f5bc\"}.la-spotify:before{content:\"\\f1bc\"}.la-spray-can:before{content:\"\\f5bd\"}.la-square:before{content:\"\\f0c8\"}.la-square-full:before{content:\"\\f45c\"}.la-square-root-alt:before{content:\"\\f698\"}.la-squarespace:before{content:\"\\f5be\"}.la-stack-exchange:before{content:\"\\f18d\"}.la-stack-overflow:before{content:\"\\f16c\"}.la-stackpath:before{content:\"\\f842\"}.la-stamp:before{content:\"\\f5bf\"}.la-star:before{content:\"\\f005\"}.la-star-and-crescent:before{content:\"\\f699\"}.la-star-half:before{content:\"\\f089\"}.la-star-half-alt:before{content:\"\\f5c0\"}.la-star-of-david:before{content:\"\\f69a\"}.la-star-of-life:before{content:\"\\f621\"}.la-staylinked:before{content:\"\\f3f5\"}.la-steam:before{content:\"\\f1b6\"}.la-steam-square:before{content:\"\\f1b7\"}.la-steam-symbol:before{content:\"\\f3f6\"}.la-step-backward:before{content:\"\\f048\"}.la-step-forward:before{content:\"\\f051\"}.la-stethoscope:before{content:\"\\f0f1\"}.la-sticker-mule:before{content:\"\\f3f7\"}.la-sticky-note:before{content:\"\\f249\"}.la-stop:before{content:\"\\f04d\"}.la-stop-circle:before{content:\"\\f28d\"}.la-stopwatch:before{content:\"\\f2f2\"}.la-store:before{content:\"\\f54e\"}.la-store-alt:before{content:\"\\f54f\"}.la-strava:before{content:\"\\f428\"}.la-stream:before{content:\"\\f550\"}.la-street-view:before{content:\"\\f21d\"}.la-strikethrough:before{content:\"\\f0cc\"}.la-stripe:before{content:\"\\f429\"}.la-stripe-s:before{content:\"\\f42a\"}.la-stroopwafel:before{content:\"\\f551\"}.la-studiovinari:before{content:\"\\f3f8\"}.la-stumbleupon:before{content:\"\\f1a4\"}.la-stumbleupon-circle:before{content:\"\\f1a3\"}.la-subscript:before{content:\"\\f12c\"}.la-subway:before{content:\"\\f239\"}.la-suitcase:before{content:\"\\f0f2\"}.la-suitcase-rolling:before{content:\"\\f5c1\"}.la-sun:before{content:\"\\f185\"}.la-superpowers:before{content:\"\\f2dd\"}.la-superscript:before{content:\"\\f12b\"}.la-supple:before{content:\"\\f3f9\"}.la-surprise:before{content:\"\\f5c2\"}.la-suse:before{content:\"\\f7d6\"}.la-swatchbook:before{content:\"\\f5c3\"}.la-swift:before{content:\"\\f8e1\"}.la-swimmer:before{content:\"\\f5c4\"}.la-swimming-pool:before{content:\"\\f5c5\"}.la-symfony:before{content:\"\\f83d\"}.la-synagogue:before{content:\"\\f69b\"}.la-sync:before{content:\"\\f021\"}.la-sync-alt:before{content:\"\\f2f1\"}.la-syringe:before{content:\"\\f48e\"}.la-table:before{content:\"\\f0ce\"}.la-table-tennis:before{content:\"\\f45d\"}.la-tablet:before{content:\"\\f10a\"}.la-tablet-alt:before{content:\"\\f3fa\"}.la-tablets:before{content:\"\\f490\"}.la-tachometer-alt:before{content:\"\\f3fd\"}.la-tag:before{content:\"\\f02b\"}.la-tags:before{content:\"\\f02c\"}.la-tape:before{content:\"\\f4db\"}.la-tasks:before{content:\"\\f0ae\"}.la-taxi:before{content:\"\\f1ba\"}.la-teamspeak:before{content:\"\\f4f9\"}.la-teeth:before{content:\"\\f62e\"}.la-teeth-open:before{content:\"\\f62f\"}.la-telegram:before{content:\"\\f2c6\"}.la-telegram-plane:before{content:\"\\f3fe\"}.la-temperature-high:before{content:\"\\f769\"}.la-temperature-low:before{content:\"\\f76b\"}.la-tencent-weibo:before{content:\"\\f1d5\"}.la-tenge:before{content:\"\\f7d7\"}.la-terminal:before{content:\"\\f120\"}.la-text-height:before{content:\"\\f034\"}.la-text-width:before{content:\"\\f035\"}.la-th:before{content:\"\\f00a\"}.la-th-large:before{content:\"\\f009\"}.la-th-list:before{content:\"\\f00b\"}.la-the-red-yeti:before{content:\"\\f69d\"}.la-theater-masks:before{content:\"\\f630\"}.la-themeco:before{content:\"\\f5c6\"}.la-themeisle:before{content:\"\\f2b2\"}.la-thermometer:before{content:\"\\f491\"}.la-thermometer-empty:before{content:\"\\f2cb\"}.la-thermometer-full:before{content:\"\\f2c7\"}.la-thermometer-half:before{content:\"\\f2c9\"}.la-thermometer-quarter:before{content:\"\\f2ca\"}.la-thermometer-three-quarters:before{content:\"\\f2c8\"}.la-think-peaks:before{content:\"\\f731\"}.la-thumbs-down:before{content:\"\\f165\"}.la-thumbs-up:before{content:\"\\f164\"}.la-thumbtack:before{content:\"\\f08d\"}.la-ticket-alt:before{content:\"\\f3ff\"}.la-times:before{content:\"\\f00d\"}.la-times-circle:before{content:\"\\f057\"}.la-tint:before{content:\"\\f043\"}.la-tint-slash:before{content:\"\\f5c7\"}.la-tired:before{content:\"\\f5c8\"}.la-toggle-off:before{content:\"\\f204\"}.la-toggle-on:before{content:\"\\f205\"}.la-toilet:before{content:\"\\f7d8\"}.la-toilet-paper:before{content:\"\\f71e\"}.la-toolbox:before{content:\"\\f552\"}.la-tools:before{content:\"\\f7d9\"}.la-tooth:before{content:\"\\f5c9\"}.la-torah:before{content:\"\\f6a0\"}.la-torii-gate:before{content:\"\\f6a1\"}.la-tractor:before{content:\"\\f722\"}.la-trade-federation:before{content:\"\\f513\"}.la-trademark:before{content:\"\\f25c\"}.la-traffic-light:before{content:\"\\f637\"}.la-train:before{content:\"\\f238\"}.la-tram:before{content:\"\\f7da\"}.la-transgender:before{content:\"\\f224\"}.la-transgender-alt:before{content:\"\\f225\"}.la-trash:before{content:\"\\f1f8\"}.la-trash-alt:before{content:\"\\f2ed\"}.la-trash-restore:before{content:\"\\f829\"}.la-trash-restore-alt:before{content:\"\\f82a\"}.la-tree:before{content:\"\\f1bb\"}.la-trello:before{content:\"\\f181\"}.la-tripadvisor:before{content:\"\\f262\"}.la-trophy:before{content:\"\\f091\"}.la-truck:before{content:\"\\f0d1\"}.la-truck-loading:before{content:\"\\f4de\"}.la-truck-monster:before{content:\"\\f63b\"}.la-truck-moving:before{content:\"\\f4df\"}.la-truck-pickup:before{content:\"\\f63c\"}.la-tshirt:before{content:\"\\f553\"}.la-tty:before{content:\"\\f1e4\"}.la-tumblr:before{content:\"\\f173\"}.la-tumblr-square:before{content:\"\\f174\"}.la-tv:before{content:\"\\f26c\"}.la-twitch:before{content:\"\\f1e8\"}.la-twitter:before{content:\"\\f099\"}.la-twitter-square:before{content:\"\\f081\"}.la-typo3:before{content:\"\\f42b\"}.la-uber:before{content:\"\\f402\"}.la-ubuntu:before{content:\"\\f7df\"}.la-uikit:before{content:\"\\f403\"}.la-umbraco:before{content:\"\\f8e8\"}.la-umbrella:before{content:\"\\f0e9\"}.la-umbrella-beach:before{content:\"\\f5ca\"}.la-underline:before{content:\"\\f0cd\"}.la-undo:before{content:\"\\f0e2\"}.la-undo-alt:before{content:\"\\f2ea\"}.la-uniregistry:before{content:\"\\f404\"}.la-universal-access:before{content:\"\\f29a\"}.la-university:before{content:\"\\f19c\"}.la-unlink:before{content:\"\\f127\"}.la-unlock:before{content:\"\\f09c\"}.la-unlock-alt:before{content:\"\\f13e\"}.la-untappd:before{content:\"\\f405\"}.la-upload:before{content:\"\\f093\"}.la-ups:before{content:\"\\f7e0\"}.la-usb:before{content:\"\\f287\"}.la-user:before{content:\"\\f007\"}.la-user-alt:before{content:\"\\f406\"}.la-user-alt-slash:before{content:\"\\f4fa\"}.la-user-astronaut:before{content:\"\\f4fb\"}.la-user-check:before{content:\"\\f4fc\"}.la-user-circle:before{content:\"\\f2bd\"}.la-user-clock:before{content:\"\\f4fd\"}.la-user-cog:before{content:\"\\f4fe\"}.la-user-edit:before{content:\"\\f4ff\"}.la-user-friends:before{content:\"\\f500\"}.la-user-graduate:before{content:\"\\f501\"}.la-user-injured:before{content:\"\\f728\"}.la-user-lock:before{content:\"\\f502\"}.la-user-md:before{content:\"\\f0f0\"}.la-user-minus:before{content:\"\\f503\"}.la-user-ninja:before{content:\"\\f504\"}.la-user-nurse:before{content:\"\\f82f\"}.la-user-plus:before{content:\"\\f234\"}.la-user-secret:before{content:\"\\f21b\"}.la-user-shield:before{content:\"\\f505\"}.la-user-slash:before{content:\"\\f506\"}.la-user-tag:before{content:\"\\f507\"}.la-user-tie:before{content:\"\\f508\"}.la-user-times:before{content:\"\\f235\"}.la-users:before{content:\"\\f0c0\"}.la-users-cog:before{content:\"\\f509\"}.la-usps:before{content:\"\\f7e1\"}.la-ussunnah:before{content:\"\\f407\"}.la-utensil-spoon:before{content:\"\\f2e5\"}.la-utensils:before{content:\"\\f2e7\"}.la-vaadin:before{content:\"\\f408\"}.la-vector-square:before{content:\"\\f5cb\"}.la-venus:before{content:\"\\f221\"}.la-venus-double:before{content:\"\\f226\"}.la-venus-mars:before{content:\"\\f228\"}.la-viacoin:before{content:\"\\f237\"}.la-viadeo:before{content:\"\\f2a9\"}.la-viadeo-square:before{content:\"\\f2aa\"}.la-vial:before{content:\"\\f492\"}.la-vials:before{content:\"\\f493\"}.la-viber:before{content:\"\\f409\"}.la-video:before{content:\"\\f03d\"}.la-video-slash:before{content:\"\\f4e2\"}.la-vihara:before{content:\"\\f6a7\"}.la-vimeo:before{content:\"\\f40a\"}.la-vimeo-square:before{content:\"\\f194\"}.la-vimeo-v:before{content:\"\\f27d\"}.la-vine:before{content:\"\\f1ca\"}.la-vk:before{content:\"\\f189\"}.la-vnv:before{content:\"\\f40b\"}.la-voicemail:before{content:\"\\f897\"}.la-volleyball-ball:before{content:\"\\f45f\"}.la-volume-down:before{content:\"\\f027\"}.la-volume-mute:before{content:\"\\f6a9\"}.la-volume-off:before{content:\"\\f026\"}.la-volume-up:before{content:\"\\f028\"}.la-vote-yea:before{content:\"\\f772\"}.la-vr-cardboard:before{content:\"\\f729\"}.la-vuejs:before{content:\"\\f41f\"}.la-walking:before{content:\"\\f554\"}.la-wallet:before{content:\"\\f555\"}.la-warehouse:before{content:\"\\f494\"}.la-water:before{content:\"\\f773\"}.la-wave-square:before{content:\"\\f83e\"}.la-waze:before{content:\"\\f83f\"}.la-weebly:before{content:\"\\f5cc\"}.la-weibo:before{content:\"\\f18a\"}.la-weight:before{content:\"\\f496\"}.la-weight-hanging:before{content:\"\\f5cd\"}.la-weixin:before{content:\"\\f1d7\"}.la-whatsapp:before{content:\"\\f232\"}.la-whatsapp-square:before{content:\"\\f40c\"}.la-wheelchair:before{content:\"\\f193\"}.la-whmcs:before{content:\"\\f40d\"}.la-wifi:before{content:\"\\f1eb\"}.la-wikipedia-w:before{content:\"\\f266\"}.la-wind:before{content:\"\\f72e\"}.la-window-close:before{content:\"\\f410\"}.la-window-maximize:before{content:\"\\f2d0\"}.la-window-minimize:before{content:\"\\f2d1\"}.la-window-restore:before{content:\"\\f2d2\"}.la-windows:before{content:\"\\f17a\"}.la-wine-bottle:before{content:\"\\f72f\"}.la-wine-glass:before{content:\"\\f4e3\"}.la-wine-glass-alt:before{content:\"\\f5ce\"}.la-wix:before{content:\"\\f5cf\"}.la-wizards-of-the-coast:before{content:\"\\f730\"}.la-wolf-pack-battalion:before{content:\"\\f514\"}.la-won-sign:before{content:\"\\f159\"}.la-wordpress:before{content:\"\\f19a\"}.la-wordpress-simple:before{content:\"\\f411\"}.la-wpbeginner:before{content:\"\\f297\"}.la-wpexplorer:before{content:\"\\f2de\"}.la-wpforms:before{content:\"\\f298\"}.la-wpressr:before{content:\"\\f3e4\"}.la-wrench:before{content:\"\\f0ad\"}.la-x-ray:before{content:\"\\f497\"}.la-xbox:before{content:\"\\f412\"}.la-xing:before{content:\"\\f168\"}.la-xing-square:before{content:\"\\f169\"}.la-y-combinator:before{content:\"\\f23b\"}.la-yahoo:before{content:\"\\f19e\"}.la-yammer:before{content:\"\\f840\"}.la-yandex:before{content:\"\\f413\"}.la-yandex-international:before{content:\"\\f414\"}.la-yarn:before{content:\"\\f7e3\"}.la-yelp:before{content:\"\\f1e9\"}.la-yen-sign:before{content:\"\\f157\"}.la-yin-yang:before{content:\"\\f6ad\"}.la-yoast:before{content:\"\\f2b1\"}.la-youtube:before{content:\"\\f167\"}.la-youtube-square:before{content:\"\\f431\"}.la-zhihu:before{content:\"\\f63f\"}.sr-only{clip:rect(0,0,0,0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}@font-face{font-display:auto;font-family:Line Awesome Brands;font-style:normal;font-weight:400;src:url(/fonts/la-brands-400.eot);src:url(/fonts/la-brands-400.eot?#iefix) format(\"embedded-opentype\"),url(/fonts/la-brands-400.woff2) format(\"woff2\"),url(/fonts/la-brands-400.woff) format(\"woff\"),url(/fonts/la-brands-400.ttf) format(\"truetype\"),url(/fonts/la-brands-400.svg#lineawesome) format(\"svg\")}.lab{font-family:Line Awesome Brands}@font-face{font-display:auto;font-family:Line Awesome Free;font-style:normal;font-weight:400;src:url(/fonts/la-regular-400.eot);src:url(/fonts/la-regular-400.eot?#iefix) format(\"embedded-opentype\"),url(/fonts/la-regular-400.woff2) format(\"woff2\"),url(/fonts/la-regular-400.woff) format(\"woff\"),url(/fonts/la-regular-400.ttf) format(\"truetype\"),url(/fonts/la-regular-400.svg#lineawesome) format(\"svg\")}.lar{font-weight:400}@font-face{font-display:auto;font-family:Line Awesome Free;font-style:normal;font-weight:900;src:url(/fonts/la-solid-900.eot);src:url(/fonts/la-solid-900.eot?#iefix) format(\"embedded-opentype\"),url(/fonts/la-solid-900.woff2) format(\"woff2\"),url(/fonts/la-solid-900.woff) format(\"woff\"),url(/fonts/la-solid-900.ttf) format(\"truetype\"),url(/fonts/la-solid-900.svg#lineawesome) format(\"svg\")}.la,.lar,.las{font-family:Line Awesome Free}.la,.las{font-weight:900}.la.la-glass:before{content:\"\\f000\"}.la.la-meetup{font-family:Line Awesome Brands;font-weight:400}.la.la-star-o{font-family:Line Awesome Free;font-weight:400}.la.la-star-o:before{content:\"\\f005\"}.la.la-close:before,.la.la-remove:before{content:\"\\f00d\"}.la.la-gear:before{content:\"\\f013\"}.la.la-trash-o{font-family:Line Awesome Free;font-weight:400}.la.la-trash-o:before{content:\"\\f2ed\"}.la.la-file-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-o:before{content:\"\\f15b\"}.la.la-clock-o{font-family:Line Awesome Free;font-weight:400}.la.la-clock-o:before{content:\"\\f017\"}.la.la-arrow-circle-o-down{font-family:Line Awesome Free;font-weight:400}.la.la-arrow-circle-o-down:before{content:\"\\f358\"}.la.la-arrow-circle-o-up{font-family:Line Awesome Free;font-weight:400}.la.la-arrow-circle-o-up:before{content:\"\\f35b\"}.la.la-play-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-play-circle-o:before{content:\"\\f144\"}.la.la-repeat:before,.la.la-rotate-right:before{content:\"\\f01e\"}.la.la-refresh:before{content:\"\\f021\"}.la.la-list-alt{font-family:Line Awesome Free;font-weight:400}.la.la-dedent:before{content:\"\\f03b\"}.la.la-video-camera:before{content:\"\\f03d\"}.la.la-picture-o{font-family:Line Awesome Free;font-weight:400}.la.la-picture-o:before{content:\"\\f03e\"}.la.la-photo{font-family:Line Awesome Free;font-weight:400}.la.la-photo:before{content:\"\\f03e\"}.la.la-image{font-family:Line Awesome Free;font-weight:400}.la.la-image:before{content:\"\\f03e\"}.la.la-pencil:before{content:\"\\f303\"}.la.la-map-marker:before{content:\"\\f3c5\"}.la.la-pencil-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-pencil-square-o:before{content:\"\\f044\"}.la.la-share-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-share-square-o:before{content:\"\\f14d\"}.la.la-check-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-check-square-o:before{content:\"\\f14a\"}.la.la-arrows:before{content:\"\\f0b2\"}.la.la-times-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-times-circle-o:before{content:\"\\f057\"}.la.la-check-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-check-circle-o:before{content:\"\\f058\"}.la.la-mail-forward:before{content:\"\\f064\"}.la.la-eye,.la.la-eye-slash{font-family:Line Awesome Free;font-weight:400}.la.la-warning:before{content:\"\\f071\"}.la.la-calendar:before{content:\"\\f073\"}.la.la-arrows-v:before{content:\"\\f338\"}.la.la-arrows-h:before{content:\"\\f337\"}.la.la-bar-chart{font-family:Line Awesome Free;font-weight:400}.la.la-bar-chart:before{content:\"\\f080\"}.la.la-bar-chart-o{font-family:Line Awesome Free;font-weight:400}.la.la-bar-chart-o:before{content:\"\\f080\"}.la.la-facebook-square,.la.la-twitter-square{font-family:Line Awesome Brands;font-weight:400}.la.la-gears:before{content:\"\\f085\"}.la.la-thumbs-o-up{font-family:Line Awesome Free;font-weight:400}.la.la-thumbs-o-up:before{content:\"\\f164\"}.la.la-thumbs-o-down{font-family:Line Awesome Free;font-weight:400}.la.la-thumbs-o-down:before{content:\"\\f165\"}.la.la-heart-o{font-family:Line Awesome Free;font-weight:400}.la.la-heart-o:before{content:\"\\f004\"}.la.la-sign-out:before{content:\"\\f2f5\"}.la.la-linkedin-square{font-family:Line Awesome Brands;font-weight:400}.la.la-linkedin-square:before{content:\"\\f08c\"}.la.la-thumb-tack:before{content:\"\\f08d\"}.la.la-external-link:before{content:\"\\f35d\"}.la.la-sign-in:before{content:\"\\f2f6\"}.la.la-github-square{font-family:Line Awesome Brands;font-weight:400}.la.la-lemon-o{font-family:Line Awesome Free;font-weight:400}.la.la-lemon-o:before{content:\"\\f094\"}.la.la-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-square-o:before{content:\"\\f0c8\"}.la.la-bookmark-o{font-family:Line Awesome Free;font-weight:400}.la.la-bookmark-o:before{content:\"\\f02e\"}.la.la-facebook,.la.la-twitter{font-family:Line Awesome Brands;font-weight:400}.la.la-facebook:before{content:\"\\f39e\"}.la.la-facebook-f{font-family:Line Awesome Brands;font-weight:400}.la.la-facebook-f:before{content:\"\\f39e\"}.la.la-github{font-family:Line Awesome Brands;font-weight:400}.la.la-credit-card{font-family:Line Awesome Free;font-weight:400}.la.la-feed:before{content:\"\\f09e\"}.la.la-hdd-o{font-family:Line Awesome Free;font-weight:400}.la.la-hdd-o:before{content:\"\\f0a0\"}.la.la-hand-o-right{font-family:Line Awesome Free;font-weight:400}.la.la-hand-o-right:before{content:\"\\f0a4\"}.la.la-hand-o-left{font-family:Line Awesome Free;font-weight:400}.la.la-hand-o-left:before{content:\"\\f0a5\"}.la.la-hand-o-up{font-family:Line Awesome Free;font-weight:400}.la.la-hand-o-up:before{content:\"\\f0a6\"}.la.la-hand-o-down{font-family:Line Awesome Free;font-weight:400}.la.la-hand-o-down:before{content:\"\\f0a7\"}.la.la-arrows-alt:before{content:\"\\f31e\"}.la.la-group:before{content:\"\\f0c0\"}.la.la-chain:before{content:\"\\f0c1\"}.la.la-scissors:before{content:\"\\f0c4\"}.la.la-files-o{font-family:Line Awesome Free;font-weight:400}.la.la-files-o:before{content:\"\\f0c5\"}.la.la-floppy-o{font-family:Line Awesome Free;font-weight:400}.la.la-floppy-o:before{content:\"\\f0c7\"}.la.la-navicon:before,.la.la-reorder:before{content:\"\\f0c9\"}.la.la-google-plus,.la.la-google-plus-square,.la.la-pinterest,.la.la-pinterest-square{font-family:Line Awesome Brands;font-weight:400}.la.la-google-plus:before{content:\"\\f0d5\"}.la.la-money{font-family:Line Awesome Free;font-weight:400}.la.la-money:before{content:\"\\f3d1\"}.la.la-unsorted:before{content:\"\\f0dc\"}.la.la-sort-desc:before{content:\"\\f0dd\"}.la.la-sort-asc:before{content:\"\\f0de\"}.la.la-linkedin{font-family:Line Awesome Brands;font-weight:400}.la.la-linkedin:before{content:\"\\f0e1\"}.la.la-rotate-left:before{content:\"\\f0e2\"}.la.la-legal:before{content:\"\\f0e3\"}.la.la-dashboard:before,.la.la-tachometer:before{content:\"\\f3fd\"}.la.la-comment-o{font-family:Line Awesome Free;font-weight:400}.la.la-comment-o:before{content:\"\\f075\"}.la.la-comments-o{font-family:Line Awesome Free;font-weight:400}.la.la-comments-o:before{content:\"\\f086\"}.la.la-flash:before{content:\"\\f0e7\"}.la.la-clipboard,.la.la-paste{font-family:Line Awesome Free;font-weight:400}.la.la-paste:before{content:\"\\f328\"}.la.la-lightbulb-o{font-family:Line Awesome Free;font-weight:400}.la.la-lightbulb-o:before{content:\"\\f0eb\"}.la.la-exchange:before{content:\"\\f362\"}.la.la-cloud-download:before{content:\"\\f381\"}.la.la-cloud-upload:before{content:\"\\f382\"}.la.la-bell-o{font-family:Line Awesome Free;font-weight:400}.la.la-bell-o:before{content:\"\\f0f3\"}.la.la-cutlery:before{content:\"\\f2e7\"}.la.la-file-text-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-text-o:before{content:\"\\f15c\"}.la.la-building-o{font-family:Line Awesome Free;font-weight:400}.la.la-building-o:before{content:\"\\f1ad\"}.la.la-hospital-o{font-family:Line Awesome Free;font-weight:400}.la.la-hospital-o:before{content:\"\\f0f8\"}.la.la-tablet:before{content:\"\\f3fa\"}.la.la-mobile-phone:before,.la.la-mobile:before{content:\"\\f3cd\"}.la.la-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-circle-o:before{content:\"\\f111\"}.la.la-mail-reply:before{content:\"\\f3e5\"}.la.la-github-alt{font-family:Line Awesome Brands;font-weight:400}.la.la-folder-o{font-family:Line Awesome Free;font-weight:400}.la.la-folder-o:before{content:\"\\f07b\"}.la.la-folder-open-o{font-family:Line Awesome Free;font-weight:400}.la.la-folder-open-o:before{content:\"\\f07c\"}.la.la-smile-o{font-family:Line Awesome Free;font-weight:400}.la.la-smile-o:before{content:\"\\f118\"}.la.la-frown-o{font-family:Line Awesome Free;font-weight:400}.la.la-frown-o:before{content:\"\\f119\"}.la.la-meh-o{font-family:Line Awesome Free;font-weight:400}.la.la-meh-o:before{content:\"\\f11a\"}.la.la-keyboard-o{font-family:Line Awesome Free;font-weight:400}.la.la-keyboard-o:before{content:\"\\f11c\"}.la.la-flag-o{font-family:Line Awesome Free;font-weight:400}.la.la-flag-o:before{content:\"\\f024\"}.la.la-mail-reply-all:before{content:\"\\f122\"}.la.la-star-half-o{font-family:Line Awesome Free;font-weight:400}.la.la-star-half-o:before{content:\"\\f089\"}.la.la-star-half-empty{font-family:Line Awesome Free;font-weight:400}.la.la-star-half-empty:before{content:\"\\f089\"}.la.la-star-half-full{font-family:Line Awesome Free;font-weight:400}.la.la-star-half-full:before{content:\"\\f089\"}.la.la-code-fork:before{content:\"\\f126\"}.la.la-chain-broken:before{content:\"\\f127\"}.la.la-shield:before{content:\"\\f3ed\"}.la.la-calendar-o{font-family:Line Awesome Free;font-weight:400}.la.la-calendar-o:before{content:\"\\f133\"}.la.la-css3,.la.la-html5,.la.la-maxcdn{font-family:Line Awesome Brands;font-weight:400}.la.la-ticket:before{content:\"\\f3ff\"}.la.la-minus-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-minus-square-o:before{content:\"\\f146\"}.la.la-level-up:before{content:\"\\f3bf\"}.la.la-level-down:before{content:\"\\f3be\"}.la.la-pencil-square:before{content:\"\\f14b\"}.la.la-external-link-square:before{content:\"\\f360\"}.la.la-compass{font-family:Line Awesome Free;font-weight:400}.la.la-caret-square-o-down{font-family:Line Awesome Free;font-weight:400}.la.la-caret-square-o-down:before{content:\"\\f150\"}.la.la-toggle-down{font-family:Line Awesome Free;font-weight:400}.la.la-toggle-down:before{content:\"\\f150\"}.la.la-caret-square-o-up{font-family:Line Awesome Free;font-weight:400}.la.la-caret-square-o-up:before{content:\"\\f151\"}.la.la-toggle-up{font-family:Line Awesome Free;font-weight:400}.la.la-toggle-up:before{content:\"\\f151\"}.la.la-caret-square-o-right{font-family:Line Awesome Free;font-weight:400}.la.la-caret-square-o-right:before{content:\"\\f152\"}.la.la-toggle-right{font-family:Line Awesome Free;font-weight:400}.la.la-toggle-right:before{content:\"\\f152\"}.la.la-eur:before,.la.la-euro:before{content:\"\\f153\"}.la.la-gbp:before{content:\"\\f154\"}.la.la-dollar:before,.la.la-usd:before{content:\"\\f155\"}.la.la-inr:before,.la.la-rupee:before{content:\"\\f156\"}.la.la-cny:before,.la.la-jpy:before,.la.la-rmb:before,.la.la-yen:before{content:\"\\f157\"}.la.la-rouble:before,.la.la-rub:before,.la.la-ruble:before{content:\"\\f158\"}.la.la-krw:before,.la.la-won:before{content:\"\\f159\"}.la.la-bitcoin,.la.la-btc{font-family:Line Awesome Brands;font-weight:400}.la.la-bitcoin:before{content:\"\\f15a\"}.la.la-file-text:before{content:\"\\f15c\"}.la.la-sort-alpha-asc:before{content:\"\\f15d\"}.la.la-sort-alpha-desc:before{content:\"\\f881\"}.la.la-sort-amount-asc:before{content:\"\\f160\"}.la.la-sort-amount-desc:before{content:\"\\f884\"}.la.la-sort-numeric-asc:before{content:\"\\f162\"}.la.la-sort-numeric-desc:before{content:\"\\f886\"}.la.la-xing,.la.la-xing-square,.la.la-youtube,.la.la-youtube-play,.la.la-youtube-square{font-family:Line Awesome Brands;font-weight:400}.la.la-youtube-play:before{content:\"\\f167\"}.la.la-adn,.la.la-bitbucket,.la.la-bitbucket-square,.la.la-dropbox,.la.la-flickr,.la.la-instagram,.la.la-stack-overflow{font-family:Line Awesome Brands;font-weight:400}.la.la-bitbucket-square:before{content:\"\\f171\"}.la.la-tumblr,.la.la-tumblr-square{font-family:Line Awesome Brands;font-weight:400}.la.la-long-arrow-down:before{content:\"\\f309\"}.la.la-long-arrow-up:before{content:\"\\f30c\"}.la.la-long-arrow-left:before{content:\"\\f30a\"}.la.la-long-arrow-right:before{content:\"\\f30b\"}.la.la-android,.la.la-apple,.la.la-dribbble,.la.la-foursquare,.la.la-gittip,.la.la-gratipay,.la.la-linux,.la.la-skype,.la.la-trello,.la.la-windows{font-family:Line Awesome Brands;font-weight:400}.la.la-gittip:before{content:\"\\f184\"}.la.la-sun-o{font-family:Line Awesome Free;font-weight:400}.la.la-sun-o:before{content:\"\\f185\"}.la.la-moon-o{font-family:Line Awesome Free;font-weight:400}.la.la-moon-o:before{content:\"\\f186\"}.la.la-pagelines,.la.la-renren,.la.la-stack-exchange,.la.la-vk,.la.la-weibo{font-family:Line Awesome Brands;font-weight:400}.la.la-arrow-circle-o-right{font-family:Line Awesome Free;font-weight:400}.la.la-arrow-circle-o-right:before{content:\"\\f35a\"}.la.la-arrow-circle-o-left{font-family:Line Awesome Free;font-weight:400}.la.la-arrow-circle-o-left:before{content:\"\\f359\"}.la.la-caret-square-o-left{font-family:Line Awesome Free;font-weight:400}.la.la-caret-square-o-left:before{content:\"\\f191\"}.la.la-toggle-left{font-family:Line Awesome Free;font-weight:400}.la.la-toggle-left:before{content:\"\\f191\"}.la.la-dot-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-dot-circle-o:before{content:\"\\f192\"}.la.la-vimeo-square{font-family:Line Awesome Brands;font-weight:400}.la.la-try:before,.la.la-turkish-lira:before{content:\"\\f195\"}.la.la-plus-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-plus-square-o:before{content:\"\\f0fe\"}.la.la-openid,.la.la-slack,.la.la-wordpress{font-family:Line Awesome Brands;font-weight:400}.la.la-bank:before,.la.la-institution:before{content:\"\\f19c\"}.la.la-mortar-board:before{content:\"\\f19d\"}.la.la-delicious,.la.la-digg,.la.la-drupal,.la.la-google,.la.la-joomla,.la.la-pied-piper-alt,.la.la-pied-piper-pp,.la.la-reddit,.la.la-reddit-square,.la.la-stumbleupon,.la.la-stumbleupon-circle,.la.la-yahoo{font-family:Line Awesome Brands;font-weight:400}.la.la-spoon:before{content:\"\\f2e5\"}.la.la-behance,.la.la-behance-square,.la.la-steam,.la.la-steam-square{font-family:Line Awesome Brands;font-weight:400}.la.la-automobile:before{content:\"\\f1b9\"}.la.la-cab:before{content:\"\\f1ba\"}.la.la-envelope-o{font-family:Line Awesome Free;font-weight:400}.la.la-envelope-o:before{content:\"\\f0e0\"}.la.la-deviantart,.la.la-soundcloud{font-family:Line Awesome Brands;font-weight:400}.la.la-file-pdf-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-pdf-o:before{content:\"\\f1c1\"}.la.la-file-word-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-word-o:before{content:\"\\f1c2\"}.la.la-file-excel-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-excel-o:before{content:\"\\f1c3\"}.la.la-file-powerpoint-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-powerpoint-o:before{content:\"\\f1c4\"}.la.la-file-image-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-image-o:before{content:\"\\f1c5\"}.la.la-file-photo-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-photo-o:before{content:\"\\f1c5\"}.la.la-file-picture-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-picture-o:before{content:\"\\f1c5\"}.la.la-file-archive-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-archive-o:before{content:\"\\f1c6\"}.la.la-file-zip-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-zip-o:before{content:\"\\f1c6\"}.la.la-file-audio-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-audio-o:before{content:\"\\f1c7\"}.la.la-file-sound-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-sound-o:before{content:\"\\f1c7\"}.la.la-file-video-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-video-o:before{content:\"\\f1c8\"}.la.la-file-movie-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-movie-o:before{content:\"\\f1c8\"}.la.la-file-code-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-code-o:before{content:\"\\f1c9\"}.la.la-codepen,.la.la-jsfiddle,.la.la-vine{font-family:Line Awesome Brands;font-weight:400}.la.la-life-bouy,.la.la-life-ring{font-family:Line Awesome Free;font-weight:400}.la.la-life-bouy:before{content:\"\\f1cd\"}.la.la-life-buoy{font-family:Line Awesome Free;font-weight:400}.la.la-life-buoy:before{content:\"\\f1cd\"}.la.la-life-saver{font-family:Line Awesome Free;font-weight:400}.la.la-life-saver:before{content:\"\\f1cd\"}.la.la-support{font-family:Line Awesome Free;font-weight:400}.la.la-support:before{content:\"\\f1cd\"}.la.la-circle-o-notch:before{content:\"\\f1ce\"}.la.la-ra,.la.la-rebel{font-family:Line Awesome Brands;font-weight:400}.la.la-ra:before{content:\"\\f1d0\"}.la.la-resistance{font-family:Line Awesome Brands;font-weight:400}.la.la-resistance:before{content:\"\\f1d0\"}.la.la-empire,.la.la-ge{font-family:Line Awesome Brands;font-weight:400}.la.la-ge:before{content:\"\\f1d1\"}.la.la-git,.la.la-git-square,.la.la-hacker-news,.la.la-y-combinator-square{font-family:Line Awesome Brands;font-weight:400}.la.la-y-combinator-square:before{content:\"\\f1d4\"}.la.la-yc-square{font-family:Line Awesome Brands;font-weight:400}.la.la-yc-square:before{content:\"\\f1d4\"}.la.la-qq,.la.la-tencent-weibo,.la.la-wechat,.la.la-weixin{font-family:Line Awesome Brands;font-weight:400}.la.la-wechat:before{content:\"\\f1d7\"}.la.la-send:before{content:\"\\f1d8\"}.la.la-paper-plane-o{font-family:Line Awesome Free;font-weight:400}.la.la-paper-plane-o:before{content:\"\\f1d8\"}.la.la-send-o{font-family:Line Awesome Free;font-weight:400}.la.la-send-o:before{content:\"\\f1d8\"}.la.la-circle-thin{font-family:Line Awesome Free;font-weight:400}.la.la-circle-thin:before{content:\"\\f111\"}.la.la-header:before{content:\"\\f1dc\"}.la.la-sliders:before{content:\"\\f1de\"}.la.la-futbol-o{font-family:Line Awesome Free;font-weight:400}.la.la-futbol-o:before{content:\"\\f1e3\"}.la.la-soccer-ball-o{font-family:Line Awesome Free;font-weight:400}.la.la-soccer-ball-o:before{content:\"\\f1e3\"}.la.la-slideshare,.la.la-twitch,.la.la-yelp{font-family:Line Awesome Brands;font-weight:400}.la.la-newspaper-o{font-family:Line Awesome Free;font-weight:400}.la.la-newspaper-o:before{content:\"\\f1ea\"}.la.la-cc-amex,.la.la-cc-discover,.la.la-cc-mastercard,.la.la-cc-paypal,.la.la-cc-stripe,.la.la-cc-visa,.la.la-google-wallet,.la.la-paypal{font-family:Line Awesome Brands;font-weight:400}.la.la-bell-slash-o{font-family:Line Awesome Free;font-weight:400}.la.la-bell-slash-o:before{content:\"\\f1f6\"}.la.la-trash:before{content:\"\\f2ed\"}.la.la-copyright{font-family:Line Awesome Free;font-weight:400}.la.la-eyedropper:before{content:\"\\f1fb\"}.la.la-area-chart:before{content:\"\\f1fe\"}.la.la-pie-chart:before{content:\"\\f200\"}.la.la-line-chart:before{content:\"\\f201\"}.la.la-angellist,.la.la-ioxhost,.la.la-lastfm,.la.la-lastfm-square{font-family:Line Awesome Brands;font-weight:400}.la.la-cc{font-family:Line Awesome Free;font-weight:400}.la.la-cc:before{content:\"\\f20a\"}.la.la-ils:before,.la.la-shekel:before,.la.la-sheqel:before{content:\"\\f20b\"}.la.la-meanpath{font-family:Line Awesome Brands;font-weight:400}.la.la-meanpath:before{content:\"\\f2b4\"}.la.la-buysellads,.la.la-connectdevelop,.la.la-dashcube,.la.la-forumbee,.la.la-leanpub,.la.la-sellsy,.la.la-shirtsinbulk,.la.la-simplybuilt,.la.la-skyatlas{font-family:Line Awesome Brands;font-weight:400}.la.la-diamond{font-family:Line Awesome Free;font-weight:400}.la.la-diamond:before{content:\"\\f3a5\"}.la.la-intersex:before{content:\"\\f224\"}.la.la-facebook-official{font-family:Line Awesome Brands;font-weight:400}.la.la-facebook-official:before{content:\"\\f09a\"}.la.la-pinterest-p,.la.la-whatsapp{font-family:Line Awesome Brands;font-weight:400}.la.la-hotel:before{content:\"\\f236\"}.la.la-medium,.la.la-viacoin,.la.la-y-combinator,.la.la-yc{font-family:Line Awesome Brands;font-weight:400}.la.la-yc:before{content:\"\\f23b\"}.la.la-expeditedssl,.la.la-opencart,.la.la-optin-monster{font-family:Line Awesome Brands;font-weight:400}.la.la-battery-4:before,.la.la-battery:before{content:\"\\f240\"}.la.la-battery-3:before{content:\"\\f241\"}.la.la-battery-2:before{content:\"\\f242\"}.la.la-battery-1:before{content:\"\\f243\"}.la.la-battery-0:before{content:\"\\f244\"}.la.la-object-group,.la.la-object-ungroup,.la.la-sticky-note-o{font-family:Line Awesome Free;font-weight:400}.la.la-sticky-note-o:before{content:\"\\f249\"}.la.la-cc-diners-club,.la.la-cc-jcb{font-family:Line Awesome Brands;font-weight:400}.la.la-clone,.la.la-hourglass-o{font-family:Line Awesome Free;font-weight:400}.la.la-hourglass-o:before{content:\"\\f254\"}.la.la-hourglass-1:before{content:\"\\f251\"}.la.la-hourglass-2:before{content:\"\\f252\"}.la.la-hourglass-3:before{content:\"\\f253\"}.la.la-hand-rock-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-rock-o:before{content:\"\\f255\"}.la.la-hand-grab-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-grab-o:before{content:\"\\f255\"}.la.la-hand-paper-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-paper-o:before{content:\"\\f256\"}.la.la-hand-stop-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-stop-o:before{content:\"\\f256\"}.la.la-hand-scissors-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-scissors-o:before{content:\"\\f257\"}.la.la-hand-lizard-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-lizard-o:before{content:\"\\f258\"}.la.la-hand-spock-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-spock-o:before{content:\"\\f259\"}.la.la-hand-pointer-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-pointer-o:before{content:\"\\f25a\"}.la.la-hand-peace-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-peace-o:before{content:\"\\f25b\"}.la.la-registered{font-family:Line Awesome Free;font-weight:400}.la.la-chrome,.la.la-creative-commons,.la.la-firefox,.la.la-get-pocket,.la.la-gg,.la.la-gg-circle,.la.la-internet-explorer,.la.la-odnoklassniki,.la.la-odnoklassniki-square,.la.la-opera,.la.la-safari,.la.la-tripadvisor,.la.la-wikipedia-w{font-family:Line Awesome Brands;font-weight:400}.la.la-television:before{content:\"\\f26c\"}.la.la-500px,.la.la-amazon,.la.la-contao{font-family:Line Awesome Brands;font-weight:400}.la.la-calendar-plus-o{font-family:Line Awesome Free;font-weight:400}.la.la-calendar-plus-o:before{content:\"\\f271\"}.la.la-calendar-minus-o{font-family:Line Awesome Free;font-weight:400}.la.la-calendar-minus-o:before{content:\"\\f272\"}.la.la-calendar-times-o{font-family:Line Awesome Free;font-weight:400}.la.la-calendar-times-o:before{content:\"\\f273\"}.la.la-calendar-check-o{font-family:Line Awesome Free;font-weight:400}.la.la-calendar-check-o:before{content:\"\\f274\"}.la.la-map-o{font-family:Line Awesome Free;font-weight:400}.la.la-map-o:before{content:\"\\f279\"}.la.la-commenting:before{content:\"\\f4ad\"}.la.la-commenting-o{font-family:Line Awesome Free;font-weight:400}.la.la-commenting-o:before{content:\"\\f4ad\"}.la.la-houzz,.la.la-vimeo{font-family:Line Awesome Brands;font-weight:400}.la.la-vimeo:before{content:\"\\f27d\"}.la.la-black-tie,.la.la-edge,.la.la-fonticons,.la.la-reddit-alien{font-family:Line Awesome Brands;font-weight:400}.la.la-credit-card-alt:before{content:\"\\f09d\"}.la.la-codiepie,.la.la-fort-awesome,.la.la-mixcloud,.la.la-modx,.la.la-product-hunt,.la.la-scribd,.la.la-usb{font-family:Line Awesome Brands;font-weight:400}.la.la-pause-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-pause-circle-o:before{content:\"\\f28b\"}.la.la-stop-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-stop-circle-o:before{content:\"\\f28d\"}.la.la-bluetooth,.la.la-bluetooth-b,.la.la-envira,.la.la-gitlab,.la.la-wheelchair-alt,.la.la-wpbeginner,.la.la-wpforms{font-family:Line Awesome Brands;font-weight:400}.la.la-wheelchair-alt:before{content:\"\\f368\"}.la.la-question-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-question-circle-o:before{content:\"\\f059\"}.la.la-volume-control-phone:before{content:\"\\f2a0\"}.la.la-asl-interpreting:before{content:\"\\f2a3\"}.la.la-deafness:before,.la.la-hard-of-hearing:before{content:\"\\f2a4\"}.la.la-glide,.la.la-glide-g{font-family:Line Awesome Brands;font-weight:400}.la.la-signing:before{content:\"\\f2a7\"}.la.la-first-order,.la.la-google-plus-official,.la.la-pied-piper,.la.la-snapchat,.la.la-snapchat-ghost,.la.la-snapchat-square,.la.la-themeisle,.la.la-viadeo,.la.la-viadeo-square,.la.la-yoast{font-family:Line Awesome Brands;font-weight:400}.la.la-google-plus-official:before{content:\"\\f2b3\"}.la.la-google-plus-circle{font-family:Line Awesome Brands;font-weight:400}.la.la-google-plus-circle:before{content:\"\\f2b3\"}.la.la-fa,.la.la-font-awesome{font-family:Line Awesome Brands;font-weight:400}.la.la-fa:before{content:\"\\f2b4\"}.la.la-handshake-o{font-family:Line Awesome Free;font-weight:400}.la.la-handshake-o:before{content:\"\\f2b5\"}.la.la-envelope-open-o{font-family:Line Awesome Free;font-weight:400}.la.la-envelope-open-o:before{content:\"\\f2b6\"}.la.la-linode{font-family:Line Awesome Brands;font-weight:400}.la.la-address-book-o{font-family:Line Awesome Free;font-weight:400}.la.la-address-book-o:before{content:\"\\f2b9\"}.la.la-vcard:before{content:\"\\f2bb\"}.la.la-address-card-o{font-family:Line Awesome Free;font-weight:400}.la.la-address-card-o:before{content:\"\\f2bb\"}.la.la-vcard-o{font-family:Line Awesome Free;font-weight:400}.la.la-vcard-o:before{content:\"\\f2bb\"}.la.la-user-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-user-circle-o:before{content:\"\\f2bd\"}.la.la-user-o{font-family:Line Awesome Free;font-weight:400}.la.la-user-o:before{content:\"\\f007\"}.la.la-id-badge{font-family:Line Awesome Free;font-weight:400}.la.la-drivers-license:before{content:\"\\f2c2\"}.la.la-id-card-o{font-family:Line Awesome Free;font-weight:400}.la.la-id-card-o:before{content:\"\\f2c2\"}.la.la-drivers-license-o{font-family:Line Awesome Free;font-weight:400}.la.la-drivers-license-o:before{content:\"\\f2c2\"}.la.la-free-code-camp,.la.la-quora,.la.la-telegram{font-family:Line Awesome Brands;font-weight:400}.la.la-thermometer-4:before,.la.la-thermometer:before{content:\"\\f2c7\"}.la.la-thermometer-3:before{content:\"\\f2c8\"}.la.la-thermometer-2:before{content:\"\\f2c9\"}.la.la-thermometer-1:before{content:\"\\f2ca\"}.la.la-thermometer-0:before{content:\"\\f2cb\"}.la.la-bathtub:before,.la.la-s15:before{content:\"\\f2cd\"}.la.la-window-maximize,.la.la-window-restore{font-family:Line Awesome Free;font-weight:400}.la.la-times-rectangle:before{content:\"\\f410\"}.la.la-window-close-o{font-family:Line Awesome Free;font-weight:400}.la.la-window-close-o:before{content:\"\\f410\"}.la.la-times-rectangle-o{font-family:Line Awesome Free;font-weight:400}.la.la-times-rectangle-o:before{content:\"\\f410\"}.la.la-bandcamp,.la.la-eercast,.la.la-etsy,.la.la-grav,.la.la-imdb,.la.la-ravelry{font-family:Line Awesome Brands;font-weight:400}.la.la-eercast:before{content:\"\\f2da\"}.la.la-snowflake-o{font-family:Line Awesome Free;font-weight:400}.la.la-snowflake-o:before{content:\"\\f2dc\"}.la.la-spotify,.la.la-superpowers,.la.la-wpexplorer{font-family:Line Awesome Brands;font-weight:400}@layer base{*,::backdrop,::file-selector-button,:after,:before{border-color:var(--color-gray-200,currentColor)}}@layer base{[multiple],[type=date],[type=datetime-local],[type=email],[type=month],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=time],[type=url],[type=week],input:where(:not([type])),select,textarea{--tw-shadow:0 0 #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-radius:0;border-width:1px;font-size:1rem;line-height:1.5rem;padding:.5rem .75rem;&:focus{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(54.6% 0.245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);border-color:oklch(54.6% .245 262.881);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-year-field{padding-bottom:0;padding-top:0}select{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E\");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}[multiple],[size]:where(select:not([size=\"1\"])){background-image:none;background-position:0 0;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{--tw-shadow:0 0 #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;background-origin:border-box;border-color:#6b7280;border-width:1px;color:oklch(54.6% .245 262.881);display:inline-block;flex-shrink:0;height:1rem;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;width:1rem}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(54.6% 0.245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}[type=checkbox]:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E\");@media (forced-colors:active){-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=radio]:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E\");@media (forced-colors:active){-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:checked:focus,[type=checkbox]:checked:hover,[type=radio]:checked:focus,[type=radio]:checked:hover{background-color:currentColor;border-color:transparent}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3E%3C/svg%3E\");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent;@media (forced-colors:active){-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:indeterminate:focus,[type=checkbox]:indeterminate:hover{background-color:currentColor;border-color:transparent}[type=file]{background:unset;border-color:inherit;border-radius:0;border-width:0;font-size:unset;line-height:inherit;padding:0}[type=file]:focus{outline:1px solid ButtonText;outline:1px auto -webkit-focus-ring-color}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-scale-x{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-y{syntax:\"*\";inherits:false;initial-value:1}@property --tw-scale-z{syntax:\"*\";inherits:false;initial-value:1}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-pan-x{syntax:\"*\";inherits:false}@property --tw-pan-y{syntax:\"*\";inherits:false}@property --tw-pinch-zoom{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-divide-x-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-divide-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-gradient-position{syntax:\"*\";inherits:false}@property --tw-gradient-from{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:\"*\";inherits:false}@property --tw-gradient-via-stops{syntax:\"*\";inherits:false}@property --tw-gradient-from-position{syntax:\"<length-percentage>\";inherits:false;initial-value:0}@property --tw-gradient-via-position{syntax:\"<length-percentage>\";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:\"<length-percentage>\";inherits:false;initial-value:100%}@property --tw-leading{syntax:\"*\";inherits:false}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-ordinal{syntax:\"*\";inherits:false}@property --tw-slashed-zero{syntax:\"*\";inherits:false}@property --tw-numeric-figure{syntax:\"*\";inherits:false}@property --tw-numeric-spacing{syntax:\"*\";inherits:false}@property --tw-numeric-fraction{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}@property --tw-content{syntax:\"*\";initial-value:\"\";inherits:false}@keyframes pulse{50%{opacity:.5}}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,::backdrop,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-scale-x:1;--tw-scale-y:1;--tw-scale-z:1;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-pan-x:initial;--tw-pan-y:initial;--tw-pinch-zoom:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-divide-x-reverse:0;--tw-border-style:solid;--tw-divide-y-reverse:0;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-ordinal:initial;--tw-slashed-zero:initial;--tw-numeric-figure:initial;--tw-numeric-spacing:initial;--tw-numeric-fraction:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:\"\"}}}";
styleInject(css_248z,{"insertAt":"top"});

class CookieManager {
    config;
    constructor(config = {}) {
        this.config = {
            defaultPath: "/",
            defaultSecure: typeof window !== "undefined" ? window.location.protocol === "https:" : false,
            defaultSameSite: "lax",
            ...config,
        };
    }
    // Set a cookie
    set(name, value, options = {}) {
        if (typeof document === "undefined") {
            console.warn("CookieManager: document is not available (SSR environment)");
            return false;
        }
        try {
            const cookieName = this.config.prefix ? `${this.config.prefix}${name}` : name;
            let cookieString = `${encodeURIComponent(cookieName)}=${encodeURIComponent(value)}`;
            // Handle expires
            if (options.expires) {
                if (typeof options.expires === "number") {
                    // Convert days to date
                    const date = new Date();
                    date.setTime(date.getTime() + options.expires * 24 * 60 * 60 * 1000);
                    cookieString += `; expires=${date.toUTCString()}`;
                }
                else {
                    cookieString += `; expires=${options.expires.toUTCString()}`;
                }
            }
            // Handle maxAge
            if (options.maxAge !== undefined) {
                cookieString += `; max-age=${options.maxAge}`;
            }
            // Handle path
            const path = options.path ?? this.config.defaultPath;
            if (path) {
                cookieString += `; path=${path}`;
            }
            // Handle domain
            const domain = options.domain ?? this.config.defaultDomain;
            if (domain) {
                cookieString += `; domain=${domain}`;
            }
            // Handle secure
            const secure = options.secure ?? this.config.defaultSecure;
            if (secure) {
                cookieString += "; secure";
            }
            // Handle httpOnly (note: this can't be set via JavaScript)
            if (options.httpOnly) {
                console.warn("CookieManager: httpOnly flag cannot be set via JavaScript");
            }
            // Handle sameSite
            const sameSite = options.sameSite ?? this.config.defaultSameSite;
            if (sameSite) {
                cookieString += `; samesite=${sameSite}`;
            }
            document.cookie = cookieString;
            return true;
        }
        catch (error) {
            console.error("CookieManager: Error setting cookie", error);
            return false;
        }
    }
    // Get a cookie value
    get(name) {
        if (typeof document === "undefined") {
            return null;
        }
        try {
            const cookieName = this.config.prefix ? `${this.config.prefix}${name}` : name;
            const encodedName = encodeURIComponent(cookieName);
            const cookies = document.cookie.split(";");
            for (let cookie of cookies) {
                cookie = cookie.trim();
                if (cookie.startsWith(`${encodedName}=`)) {
                    return decodeURIComponent(cookie.substring(encodedName.length + 1));
                }
            }
            return null;
        }
        catch (error) {
            console.error("CookieManager: Error getting cookie", error);
            return null;
        }
    }
    // Get a cookie value and parse as JSON
    getJSON(name) {
        const value = this.get(name);
        if (value === null)
            return null;
        try {
            return JSON.parse(value);
        }
        catch (error) {
            console.error("CookieManager: Error parsing JSON cookie", error);
            return null;
        }
    }
    // Set a cookie with JSON value
    setJSON(name, value, options = {}) {
        try {
            const jsonString = JSON.stringify(value);
            return this.set(name, jsonString, options);
        }
        catch (error) {
            console.error("CookieManager: Error stringifying JSON cookie", error);
            return false;
        }
    }
    // Remove a cookie
    remove(name, options = {}) {
        return this.set(name, "", {
            ...options,
            expires: new Date(0), // Set to past date
            maxAge: 0,
        });
    }
    // Check if a cookie exists
    has(name) {
        return this.get(name) !== null;
    }
    // Get all cookies as an object
    getAll() {
        if (typeof document === "undefined") {
            return {};
        }
        try {
            const cookies = {};
            const cookieStrings = document.cookie.split(";");
            for (let cookie of cookieStrings) {
                cookie = cookie.trim();
                const [encodedName, ...valueParts] = cookie.split("=");
                if (encodedName && valueParts.length > 0) {
                    const name = decodeURIComponent(encodedName);
                    const value = decodeURIComponent(valueParts.join("="));
                    // Remove prefix if it exists
                    const finalName = this.config.prefix && name.startsWith(this.config.prefix) ? name.substring(this.config.prefix.length) : name;
                    cookies[finalName] = value;
                }
            }
            return cookies;
        }
        catch (error) {
            console.error("CookieManager: Error getting all cookies", error);
            return {};
        }
    }
    // Clear all cookies (only those with the same prefix if configured)
    clear(options = {}) {
        const allCookies = this.getAll();
        Object.keys(allCookies).forEach((name) => {
            this.remove(name, options);
        });
    }
    // Get cookie size in bytes
    getSize(name) {
        const value = this.get(name);
        if (value === null)
            return 0;
        return new Blob([value]).size;
    }
    // Get total cookies size
    getTotalSize() {
        if (typeof document === "undefined")
            return 0;
        return new Blob([document.cookie]).size;
    }
    // Check if cookies are enabled
    isEnabled() {
        if (typeof document === "undefined")
            return false;
        try {
            const testCookie = "__cookie_test__";
            this.set(testCookie, "test");
            const isEnabled = this.has(testCookie);
            this.remove(testCookie);
            return isEnabled;
        }
        catch {
            return false;
        }
    }
}
// Default cookie manager instance
const cookieManager = new CookieManager({
    defaultPath: "/",
    defaultDomain: ".crezlo.local",
});
const getCookieJSON = (name) => {
    return cookieManager.getJSON(name);
};

const GlobalInterceptors = {
    request: [],
    response: [],
    error: [],
};
class ApiClient {
    static instances = new Map();
    config;
    localInterceptors;
    constructor(config) {
        this.config = config;
        this.localInterceptors = {
            request: [],
            response: [],
            error: [],
        };
    }
    // Singleton per unique key (e.g., baseURL or custom ID)
    static getInstance(config) {
        const key = config.baseURL;
        if (!key)
            throw new Error("ApiClient config must have an 'id' or 'baseURL' to use as key");
        if (!ApiClient.instances.has(key)) {
            ApiClient.instances.set(key, new ApiClient(config));
        }
        return ApiClient.instances.get(key);
    }
    static addGlobalRequestInterceptor(interceptor) {
        GlobalInterceptors.request.push(interceptor);
    }
    static addGlobalResponseInterceptor(interceptor) {
        GlobalInterceptors.response.push(interceptor);
    }
    static addGlobalErrorInterceptor(interceptor) {
        GlobalInterceptors.error.push(interceptor);
    }
    // Local (instance-level) interceptors
    addRequestInterceptor(interceptor) {
        this.localInterceptors.request.push(interceptor);
    }
    addResponseInterceptor(interceptor) {
        this.localInterceptors.response.push(interceptor);
    }
    addErrorInterceptor(interceptor) {
        this.localInterceptors.error.push(interceptor);
    }
    async applyInterceptors(type, input) {
        const all = [...GlobalInterceptors[type], ...this.localInterceptors[type]];
        let result = input;
        for (const fn of all) {
            result = (await fn(result));
        }
        return result;
    }
    // Build URL with query parameters
    buildURL(endpoint, params) {
        const url = new URL(endpoint, this.config.baseURL);
        if (params) {
            Object.entries(params).forEach(([key, value]) => {
                url.searchParams.append(key, String(value));
            });
        }
        return url.toString();
    }
    // Main request method
    async request(endpoint, config = {}) {
        try {
            // Apply request interceptors
            const modifiedConfig = await this.applyInterceptors("request", config);
            // Build URL
            const url = this.buildURL(endpoint, modifiedConfig.params);
            // Prepare headers
            const headers = {
                "Content-Type": "application/json",
                Accept: "application/json",
                ...this.config.headers,
                ...modifiedConfig.headers,
            };
            // Prepare fetch options
            const fetchOptions = {
                method: modifiedConfig.method || "GET",
                headers,
                credentials: modifiedConfig.withCredentials ?? this.config.withCredentials ? "include" : "same-origin",
            };
            // Add body for non-GET requests
            if (modifiedConfig.body && modifiedConfig.method !== "GET") {
                fetchOptions.body = typeof modifiedConfig.body === "string" ? modifiedConfig.body : JSON.stringify(modifiedConfig.body);
            }
            // Set up timeout
            const timeout = modifiedConfig.timeout || this.config.timeout || 10000;
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), timeout);
            fetchOptions.signal = controller.signal;
            // Make the request
            const response = await fetch(url, fetchOptions);
            clearTimeout(timeoutId);
            // Parse response
            let data;
            const contentType = response.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
                data = await response.json();
            }
            else {
                data = (await response.text());
            }
            // Create response object
            // const apiResponse: ApiResponse<T> = {
            //   data,
            //   status: response.status,
            //   statusText: response.statusText,
            //   headers: Object.fromEntries(response.headers.entries()),
            // };
            const apiResponse = data;
            // Check if response is successful
            if (!response.ok) {
                // const error: ApiError = {
                //   message: `Request failed with status ${response.status}`,
                //   status: response.status,
                //   statusText: response.statusText,
                //   data,
                // };
                const error = data;
                throw await this.applyInterceptors("error", error);
            }
            // Apply response interceptors
            return await this.applyInterceptors("response", apiResponse);
        }
        catch (error) {
            if (error instanceof Error) {
                const apiError = {
                    message: error.message,
                };
                throw await this.applyInterceptors("error", apiError);
            }
            throw error;
        }
    }
    // Convenience methods
    async get(endpoint, config) {
        return this.request(endpoint, { ...config, method: "GET" });
    }
    async post(endpoint, data, config) {
        return this.request(endpoint, { ...config, method: "POST", body: data });
    }
    async put(endpoint, data, config) {
        return this.request(endpoint, { ...config, method: "PUT", body: data });
    }
    async patch(endpoint, data, config) {
        return this.request(endpoint, { ...config, method: "PATCH", body: data });
    }
    async delete(endpoint, config) {
        return this.request(endpoint, { ...config, method: "DELETE" });
    }
}

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : undefined);
    useEffect(() => {
        if (typeof window === 'undefined')
            return;
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        // Add event listener
        window.addEventListener('resize', handleResize);
        // Set initial width
        handleResize();
        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures effect is only run on mount and unmount
    return windowWidth;
};

const envConstants = {
    BASE_API_URL: {
        CORE: process.env.NEXT_PUBLIC_API_URL_CORE,
        CONTENT: process.env.NEXT_PUBLIC_API_URL_CONTENT,
        CHAT: process.env.NEXT_PUBLIC_API_URL_CHAT,
        GENAGENT: process.env.NEXT_PUBLIC_API_GENAGENT_URL,
        WEBSITE_BUILDER: process.env.NEXT_PUBLIC_WEBSITE_BUILDER_URL,
        CHANNEL_BUILDER: process.env.NEXT_PUBLIC_CHANNEL_BUILDERL_URL,
        FINANCE: process.env.NEXT_PUBLIC_FINANCE_URL,
    },
};

const baseUrls = envConstants.BASE_API_URL;
ApiClient.getInstance({
    baseURL: baseUrls.CORE,
});
// REQUEST INTERCEPTOR
ApiClient.addGlobalRequestInterceptor(async (config) => {
    const token = getCookieJSON("token");
    if (token?.access_token) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token.access_token}`,
        };
    }
    return config;
});
// RESPONSE INTERCEPTOR
ApiClient.addGlobalErrorInterceptor(async (error) => {
    //   if (error.status === 401 && mergedConfig.autoRefresh) {
    //     try {
    //       await refreshToken();
    //       // Retry the original request would need to be implemented here
    //     } catch (refreshError) {
    //       await logout();
    //     }
    //   }
    console.log("Response received:", error);
    return error;
});
ApiClient.addGlobalResponseInterceptor(async (response) => {
    // Handle specific response status codes or data transformations here
    console.log("Response received:", response.data);
    if (response.status === 401) {
        // Handle unauthorized access, e.g., redirect to login
        console.error("Unauthorized access - redirecting to login");
        // You can implement a redirect or logout logic here
    }
    return response.data;
});
const createClient = (baseURL) => {
    return ApiClient.getInstance({ baseURL });
};
// @ts-ignore
({
    ...Object.fromEntries(Object.entries(baseUrls).map(([name, url]) => [name, createClient(url)])),
});

// Create context
createContext(undefined);

const AppContext = createContext({
    sidebarOpen: true,
    setSidebarOpen: (value) => { },
    sidebarExpanded: true,
    setSidebarExpanded: (value) => { },
});
function AppProvider({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [sidebarExpanded, setSidebarExpanded] = useState(true);
    return (jsx(AppContext.Provider, { value: {
            sidebarOpen,
            setSidebarOpen,
            sidebarExpanded,
            setSidebarExpanded,
        }, children: children }));
}
const useAppProvider = () => useContext(AppContext);

function RootLayout({ children }) {
    return (jsxs("html", { className: `font-reddit`, lang: "en", suppressHydrationWarning: true, children: [jsx("head", {}), jsx("body", { className: "font-reddit antialiased bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400", "cz-shortcut-listen": "true", children: jsx("div", { className: "flex flex-col h-[100vh]", children: jsx(J$2, { attribute: "class", disableTransitionOnChange: true, children: jsx(AppProvider, { children: children }) }) }) })] }));
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var navigation$1 = {exports: {}};

var appRouterContext_sharedRuntime = {};

var _interop_require_default$1 = {};

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}
_interop_require_default$1._ = _interop_require_default;

(function (exports) {
	'use client';
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    AppRouterContext: function() {
	        return AppRouterContext;
	    },
	    GlobalLayoutRouterContext: function() {
	        return GlobalLayoutRouterContext;
	    },
	    LayoutRouterContext: function() {
	        return LayoutRouterContext;
	    },
	    MissingSlotContext: function() {
	        return MissingSlotContext;
	    },
	    TemplateContext: function() {
	        return TemplateContext;
	    }
	});
	const _interop_require_default = _interop_require_default$1;
	const _react = /*#__PURE__*/ _interop_require_default._(React__default);
	const AppRouterContext = _react.default.createContext(null);
	const LayoutRouterContext = _react.default.createContext(null);
	const GlobalLayoutRouterContext = _react.default.createContext(null);
	const TemplateContext = _react.default.createContext(null);
	if (process.env.NODE_ENV !== 'production') {
	    AppRouterContext.displayName = 'AppRouterContext';
	    LayoutRouterContext.displayName = 'LayoutRouterContext';
	    GlobalLayoutRouterContext.displayName = 'GlobalLayoutRouterContext';
	    TemplateContext.displayName = 'TemplateContext';
	}
	const MissingSlotContext = _react.default.createContext(new Set());

	
} (appRouterContext_sharedRuntime));

var hooksClientContext_sharedRuntime = {};

(function (exports) {
	'use client';
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    PathParamsContext: function() {
	        return PathParamsContext;
	    },
	    PathnameContext: function() {
	        return PathnameContext;
	    },
	    SearchParamsContext: function() {
	        return SearchParamsContext;
	    }
	});
	const _react = React__default;
	const SearchParamsContext = (0, _react.createContext)(null);
	const PathnameContext = (0, _react.createContext)(null);
	const PathParamsContext = (0, _react.createContext)(null);
	if (process.env.NODE_ENV !== 'production') {
	    SearchParamsContext.displayName = 'SearchParamsContext';
	    PathnameContext.displayName = 'PathnameContext';
	    PathParamsContext.displayName = 'PathParamsContext';
	}

	
} (hooksClientContext_sharedRuntime));

var getSegmentValue = {exports: {}};

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "getSegmentValue", {
	    enumerable: true,
	    get: function() {
	        return getSegmentValue;
	    }
	});
	function getSegmentValue(segment) {
	    return Array.isArray(segment) ? segment[1] : segment;
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (getSegmentValue, getSegmentValue.exports));

var getSegmentValueExports = getSegmentValue.exports;

var segment = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    DEFAULT_SEGMENT_KEY: function() {
	        return DEFAULT_SEGMENT_KEY;
	    },
	    PAGE_SEGMENT_KEY: function() {
	        return PAGE_SEGMENT_KEY;
	    },
	    addSearchParamsIfPageSegment: function() {
	        return addSearchParamsIfPageSegment;
	    },
	    isGroupSegment: function() {
	        return isGroupSegment;
	    },
	    isParallelRouteSegment: function() {
	        return isParallelRouteSegment;
	    }
	});
	function isGroupSegment(segment) {
	    // Use array[0] for performant purpose
	    return segment[0] === '(' && segment.endsWith(')');
	}
	function isParallelRouteSegment(segment) {
	    return segment.startsWith('@') && segment !== '@children';
	}
	function addSearchParamsIfPageSegment(segment, searchParams) {
	    const isPageSegment = segment.includes(PAGE_SEGMENT_KEY);
	    if (isPageSegment) {
	        const stringifiedQuery = JSON.stringify(searchParams);
	        return stringifiedQuery !== '{}' ? PAGE_SEGMENT_KEY + '?' + stringifiedQuery : PAGE_SEGMENT_KEY;
	    }
	    return segment;
	}
	const PAGE_SEGMENT_KEY = '__PAGE__';
	const DEFAULT_SEGMENT_KEY = '__DEFAULT__';

	
} (segment));

var navigation_reactServer = {exports: {}};

var redirect = {exports: {}};

var redirectStatusCode = {exports: {}};

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "RedirectStatusCode", {
	    enumerable: true,
	    get: function() {
	        return RedirectStatusCode;
	    }
	});
	var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
	    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
	    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
	    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
	    return RedirectStatusCode;
	}({});

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (redirectStatusCode, redirectStatusCode.exports));

var redirectStatusCodeExports = redirectStatusCode.exports;

var redirectError = {exports: {}};

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    REDIRECT_ERROR_CODE: function() {
	        return REDIRECT_ERROR_CODE;
	    },
	    RedirectType: function() {
	        return RedirectType;
	    },
	    isRedirectError: function() {
	        return isRedirectError;
	    }
	});
	const _redirectstatuscode = redirectStatusCodeExports;
	const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
	var RedirectType = /*#__PURE__*/ function(RedirectType) {
	    RedirectType["push"] = "push";
	    RedirectType["replace"] = "replace";
	    return RedirectType;
	}({});
	function isRedirectError(error) {
	    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
	        return false;
	    }
	    const digest = error.digest.split(';');
	    const [errorCode, type] = digest;
	    const destination = digest.slice(2, -2).join(';');
	    const status = digest.at(-2);
	    const statusCode = Number(status);
	    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (redirectError, redirectError.exports));

var redirectErrorExports = redirectError.exports;

var actionAsyncStorage_external = {};

var actionAsyncStorageInstance = {};

var asyncLocalStorage = {};

var hasRequiredAsyncLocalStorage;

function requireAsyncLocalStorage () {
	if (hasRequiredAsyncLocalStorage) return asyncLocalStorage;
	hasRequiredAsyncLocalStorage = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    bindSnapshot: function() {
		        return bindSnapshot;
		    },
		    createAsyncLocalStorage: function() {
		        return createAsyncLocalStorage;
		    },
		    createSnapshot: function() {
		        return createSnapshot;
		    }
		});
		const sharedAsyncLocalStorageNotAvailableError = Object.defineProperty(new Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), "__NEXT_ERROR_CODE", {
		    value: "E504",
		    enumerable: false,
		    configurable: true
		});
		class FakeAsyncLocalStorage {
		    disable() {
		        throw sharedAsyncLocalStorageNotAvailableError;
		    }
		    getStore() {
		        // This fake implementation of AsyncLocalStorage always returns `undefined`.
		        return undefined;
		    }
		    run() {
		        throw sharedAsyncLocalStorageNotAvailableError;
		    }
		    exit() {
		        throw sharedAsyncLocalStorageNotAvailableError;
		    }
		    enterWith() {
		        throw sharedAsyncLocalStorageNotAvailableError;
		    }
		    static bind(fn) {
		        return fn;
		    }
		}
		const maybeGlobalAsyncLocalStorage = typeof globalThis !== 'undefined' && globalThis.AsyncLocalStorage;
		function createAsyncLocalStorage() {
		    if (maybeGlobalAsyncLocalStorage) {
		        return new maybeGlobalAsyncLocalStorage();
		    }
		    return new FakeAsyncLocalStorage();
		}
		function bindSnapshot(fn) {
		    if (maybeGlobalAsyncLocalStorage) {
		        return maybeGlobalAsyncLocalStorage.bind(fn);
		    }
		    return FakeAsyncLocalStorage.bind(fn);
		}
		function createSnapshot() {
		    if (maybeGlobalAsyncLocalStorage) {
		        return maybeGlobalAsyncLocalStorage.snapshot();
		    }
		    return function(fn, ...args) {
		        return fn(...args);
		    };
		}

		
	} (asyncLocalStorage));
	return asyncLocalStorage;
}

var hasRequiredActionAsyncStorageInstance;

function requireActionAsyncStorageInstance () {
	if (hasRequiredActionAsyncStorageInstance) return actionAsyncStorageInstance;
	hasRequiredActionAsyncStorageInstance = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "actionAsyncStorageInstance", {
		    enumerable: true,
		    get: function() {
		        return actionAsyncStorageInstance;
		    }
		});
		const _asynclocalstorage = requireAsyncLocalStorage();
		const actionAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();

		
	} (actionAsyncStorageInstance));
	return actionAsyncStorageInstance;
}

var hasRequiredActionAsyncStorage_external;

function requireActionAsyncStorage_external () {
	if (hasRequiredActionAsyncStorage_external) return actionAsyncStorage_external;
	hasRequiredActionAsyncStorage_external = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "actionAsyncStorage", {
		    enumerable: true,
		    get: function() {
		        return _actionasyncstorageinstance.actionAsyncStorageInstance;
		    }
		});
		const _actionasyncstorageinstance = requireActionAsyncStorageInstance();

		
	} (actionAsyncStorage_external));
	return actionAsyncStorage_external;
}

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    getRedirectError: function() {
	        return getRedirectError;
	    },
	    getRedirectStatusCodeFromError: function() {
	        return getRedirectStatusCodeFromError;
	    },
	    getRedirectTypeFromError: function() {
	        return getRedirectTypeFromError;
	    },
	    getURLFromRedirectError: function() {
	        return getURLFromRedirectError;
	    },
	    permanentRedirect: function() {
	        return permanentRedirect;
	    },
	    redirect: function() {
	        return redirect;
	    }
	});
	const _redirectstatuscode = redirectStatusCodeExports;
	const _redirecterror = redirectErrorExports;
	const actionAsyncStorage = typeof window === 'undefined' ? requireActionAsyncStorage_external().actionAsyncStorage : undefined;
	function getRedirectError(url, type, statusCode) {
	    if (statusCode === void 0) statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
	    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
	        value: "E394",
	        enumerable: false,
	        configurable: true
	    });
	    error.digest = _redirecterror.REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
	    return error;
	}
	function redirect(/** The URL to redirect to */ url, type) {
	    var _actionAsyncStorage_getStore;
	    type != null ? type : type = (actionAsyncStorage == null ? void 0 : (_actionAsyncStorage_getStore = actionAsyncStorage.getStore()) == null ? void 0 : _actionAsyncStorage_getStore.isAction) ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
	    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
	}
	function permanentRedirect(/** The URL to redirect to */ url, type) {
	    if (type === void 0) type = _redirecterror.RedirectType.replace;
	    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
	}
	function getURLFromRedirectError(error) {
	    if (!(0, _redirecterror.isRedirectError)(error)) return null;
	    // Slices off the beginning of the digest that contains the code and the
	    // separating ';'.
	    return error.digest.split(';').slice(2, -2).join(';');
	}
	function getRedirectTypeFromError(error) {
	    if (!(0, _redirecterror.isRedirectError)(error)) {
	        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
	            value: "E260",
	            enumerable: false,
	            configurable: true
	        });
	    }
	    return error.digest.split(';', 2)[1];
	}
	function getRedirectStatusCodeFromError(error) {
	    if (!(0, _redirecterror.isRedirectError)(error)) {
	        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
	            value: "E260",
	            enumerable: false,
	            configurable: true
	        });
	    }
	    return Number(error.digest.split(';').at(-2));
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (redirect, redirect.exports));

var redirectExports = redirect.exports;

var notFound = {exports: {}};

var httpAccessFallback = {exports: {}};

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    HTTPAccessErrorStatus: function() {
	        return HTTPAccessErrorStatus;
	    },
	    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
	        return HTTP_ERROR_FALLBACK_ERROR_CODE;
	    },
	    getAccessFallbackErrorTypeByStatus: function() {
	        return getAccessFallbackErrorTypeByStatus;
	    },
	    getAccessFallbackHTTPStatus: function() {
	        return getAccessFallbackHTTPStatus;
	    },
	    isHTTPAccessFallbackError: function() {
	        return isHTTPAccessFallbackError;
	    }
	});
	const HTTPAccessErrorStatus = {
	    NOT_FOUND: 404,
	    FORBIDDEN: 403,
	    UNAUTHORIZED: 401
	};
	const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
	const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
	function isHTTPAccessFallbackError(error) {
	    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
	        return false;
	    }
	    const [prefix, httpStatus] = error.digest.split(';');
	    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
	}
	function getAccessFallbackHTTPStatus(error) {
	    const httpStatus = error.digest.split(';')[1];
	    return Number(httpStatus);
	}
	function getAccessFallbackErrorTypeByStatus(status) {
	    switch(status){
	        case 401:
	            return 'unauthorized';
	        case 403:
	            return 'forbidden';
	        case 404:
	            return 'not-found';
	        default:
	            return;
	    }
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (httpAccessFallback, httpAccessFallback.exports));

var httpAccessFallbackExports = httpAccessFallback.exports;

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "notFound", {
	    enumerable: true,
	    get: function() {
	        return notFound;
	    }
	});
	const _httpaccessfallback = httpAccessFallbackExports;
	/**
	 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
	 * within a route segment as well as inject a tag.
	 *
	 * `notFound()` can be used in
	 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
	 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
	 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
	 *
	 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
	 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
	 *
	 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
	 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
	function notFound() {
	    // eslint-disable-next-line no-throw-literal
	    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
	        value: "E394",
	        enumerable: false,
	        configurable: true
	    });
	    error.digest = DIGEST;
	    throw error;
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (notFound, notFound.exports));

var notFoundExports = notFound.exports;

var forbidden = {exports: {}};

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "forbidden", {
	    enumerable: true,
	    get: function() {
	        return forbidden;
	    }
	});
	const _httpaccessfallback = httpAccessFallbackExports;
	// TODO: Add `forbidden` docs
	/**
	 * @experimental
	 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
	 * within a route segment as well as inject a tag.
	 *
	 * `forbidden()` can be used in
	 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
	 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
	 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
	 *
	 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
	 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";403";
	function forbidden() {
	    if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS) {
	        throw Object.defineProperty(new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
	            value: "E488",
	            enumerable: false,
	            configurable: true
	        });
	    }
	    // eslint-disable-next-line no-throw-literal
	    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
	        value: "E394",
	        enumerable: false,
	        configurable: true
	    });
	    error.digest = DIGEST;
	    throw error;
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (forbidden, forbidden.exports));

var forbiddenExports = forbidden.exports;

var unauthorized = {exports: {}};

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "unauthorized", {
	    enumerable: true,
	    get: function() {
	        return unauthorized;
	    }
	});
	const _httpaccessfallback = httpAccessFallbackExports;
	// TODO: Add `unauthorized` docs
	/**
	 * @experimental
	 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
	 * within a route segment as well as inject a tag.
	 *
	 * `unauthorized()` can be used in
	 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
	 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
	 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
	 *
	 *
	 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
	 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";401";
	function unauthorized() {
	    if (!process.env.__NEXT_EXPERIMENTAL_AUTH_INTERRUPTS) {
	        throw Object.defineProperty(new Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
	            value: "E411",
	            enumerable: false,
	            configurable: true
	        });
	    }
	    // eslint-disable-next-line no-throw-literal
	    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
	        value: "E394",
	        enumerable: false,
	        configurable: true
	    });
	    error.digest = DIGEST;
	    throw error;
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (unauthorized, unauthorized.exports));

var unauthorizedExports = unauthorized.exports;

var unstableRethrow = {exports: {}};

var unstableRethrow_server = {exports: {}};

var dynamicRenderingUtils = {};

var hasRequiredDynamicRenderingUtils;

function requireDynamicRenderingUtils () {
	if (hasRequiredDynamicRenderingUtils) return dynamicRenderingUtils;
	hasRequiredDynamicRenderingUtils = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    isHangingPromiseRejectionError: function() {
		        return isHangingPromiseRejectionError;
		    },
		    makeHangingPromise: function() {
		        return makeHangingPromise;
		    }
		});
		function isHangingPromiseRejectionError(err) {
		    if (typeof err !== 'object' || err === null || !('digest' in err)) {
		        return false;
		    }
		    return err.digest === HANGING_PROMISE_REJECTION;
		}
		const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
		class HangingPromiseRejectionError extends Error {
		    constructor(expression){
		        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context.`), this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
		    }
		}
		const abortListenersBySignal = new WeakMap();
		function makeHangingPromise(signal, expression) {
		    if (signal.aborted) {
		        return Promise.reject(new HangingPromiseRejectionError(expression));
		    } else {
		        const hangingPromise = new Promise((_, reject)=>{
		            const boundRejection = reject.bind(null, new HangingPromiseRejectionError(expression));
		            let currentListeners = abortListenersBySignal.get(signal);
		            if (currentListeners) {
		                currentListeners.push(boundRejection);
		            } else {
		                const listeners = [
		                    boundRejection
		                ];
		                abortListenersBySignal.set(signal, listeners);
		                signal.addEventListener('abort', ()=>{
		                    for(let i = 0; i < listeners.length; i++){
		                        listeners[i]();
		                    }
		                }, {
		                    once: true
		                });
		            }
		        });
		        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
		        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
		        // your own promise out of it you'll need to ensure you handle the error when it rejects.
		        hangingPromise.catch(ignoreReject);
		        return hangingPromise;
		    }
		}
		function ignoreReject() {}

		
	} (dynamicRenderingUtils));
	return dynamicRenderingUtils;
}

var isPostpone = {};

var hasRequiredIsPostpone;

function requireIsPostpone () {
	if (hasRequiredIsPostpone) return isPostpone;
	hasRequiredIsPostpone = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "isPostpone", {
		    enumerable: true,
		    get: function() {
		        return isPostpone;
		    }
		});
		const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
		function isPostpone(error) {
		    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
		}

		
	} (isPostpone));
	return isPostpone;
}

var bailoutToCsr = {};

var hasRequiredBailoutToCsr;

function requireBailoutToCsr () {
	if (hasRequiredBailoutToCsr) return bailoutToCsr;
	hasRequiredBailoutToCsr = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    BailoutToCSRError: function() {
		        return BailoutToCSRError;
		    },
		    isBailoutToCSRError: function() {
		        return isBailoutToCSRError;
		    }
		});
		const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
		class BailoutToCSRError extends Error {
		    constructor(reason){
		        super("Bail out to client-side rendering: " + reason), this.reason = reason, this.digest = BAILOUT_TO_CSR;
		    }
		}
		function isBailoutToCSRError(err) {
		    if (typeof err !== 'object' || err === null || !('digest' in err)) {
		        return false;
		    }
		    return err.digest === BAILOUT_TO_CSR;
		}

		
	} (bailoutToCsr));
	return bailoutToCsr;
}

var isNextRouterError = {exports: {}};

var hasRequiredIsNextRouterError;

function requireIsNextRouterError () {
	if (hasRequiredIsNextRouterError) return isNextRouterError.exports;
	hasRequiredIsNextRouterError = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "isNextRouterError", {
		    enumerable: true,
		    get: function() {
		        return isNextRouterError;
		    }
		});
		const _httpaccessfallback = httpAccessFallbackExports;
		const _redirecterror = redirectErrorExports;
		function isNextRouterError(error) {
		    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (isNextRouterError, isNextRouterError.exports));
	return isNextRouterError.exports;
}

var dynamicRendering = {};

var hooksServerContext = {exports: {}};

var hasRequiredHooksServerContext;

function requireHooksServerContext () {
	if (hasRequiredHooksServerContext) return hooksServerContext.exports;
	hasRequiredHooksServerContext = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    DynamicServerError: function() {
		        return DynamicServerError;
		    },
		    isDynamicServerError: function() {
		        return isDynamicServerError;
		    }
		});
		const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
		class DynamicServerError extends Error {
		    constructor(description){
		        super("Dynamic server usage: " + description), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
		    }
		}
		function isDynamicServerError(err) {
		    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
		        return false;
		    }
		    return err.digest === DYNAMIC_ERROR_CODE;
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (hooksServerContext, hooksServerContext.exports));
	return hooksServerContext.exports;
}

var staticGenerationBailout = {exports: {}};

var hasRequiredStaticGenerationBailout;

function requireStaticGenerationBailout () {
	if (hasRequiredStaticGenerationBailout) return staticGenerationBailout.exports;
	hasRequiredStaticGenerationBailout = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    StaticGenBailoutError: function() {
		        return StaticGenBailoutError;
		    },
		    isStaticGenBailoutError: function() {
		        return isStaticGenBailoutError;
		    }
		});
		const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
		class StaticGenBailoutError extends Error {
		    constructor(...args){
		        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
		    }
		}
		function isStaticGenBailoutError(error) {
		    if (typeof error !== 'object' || error === null || !('code' in error)) {
		        return false;
		    }
		    return error.code === NEXT_STATIC_GEN_BAILOUT;
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (staticGenerationBailout, staticGenerationBailout.exports));
	return staticGenerationBailout.exports;
}

var workUnitAsyncStorage_external = {};

var workUnitAsyncStorageInstance = {};

var hasRequiredWorkUnitAsyncStorageInstance;

function requireWorkUnitAsyncStorageInstance () {
	if (hasRequiredWorkUnitAsyncStorageInstance) return workUnitAsyncStorageInstance;
	hasRequiredWorkUnitAsyncStorageInstance = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "workUnitAsyncStorageInstance", {
		    enumerable: true,
		    get: function() {
		        return workUnitAsyncStorageInstance;
		    }
		});
		const _asynclocalstorage = requireAsyncLocalStorage();
		const workUnitAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();

		
	} (workUnitAsyncStorageInstance));
	return workUnitAsyncStorageInstance;
}

var appRouterHeaders = {exports: {}};

var hasRequiredAppRouterHeaders;

function requireAppRouterHeaders () {
	if (hasRequiredAppRouterHeaders) return appRouterHeaders.exports;
	hasRequiredAppRouterHeaders = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    ACTION_HEADER: function() {
		        return ACTION_HEADER;
		    },
		    FLIGHT_HEADERS: function() {
		        return FLIGHT_HEADERS;
		    },
		    NEXT_DID_POSTPONE_HEADER: function() {
		        return NEXT_DID_POSTPONE_HEADER;
		    },
		    NEXT_HMR_REFRESH_HASH_COOKIE: function() {
		        return NEXT_HMR_REFRESH_HASH_COOKIE;
		    },
		    NEXT_HMR_REFRESH_HEADER: function() {
		        return NEXT_HMR_REFRESH_HEADER;
		    },
		    NEXT_IS_PRERENDER_HEADER: function() {
		        return NEXT_IS_PRERENDER_HEADER;
		    },
		    NEXT_REWRITTEN_PATH_HEADER: function() {
		        return NEXT_REWRITTEN_PATH_HEADER;
		    },
		    NEXT_REWRITTEN_QUERY_HEADER: function() {
		        return NEXT_REWRITTEN_QUERY_HEADER;
		    },
		    NEXT_ROUTER_PREFETCH_HEADER: function() {
		        return NEXT_ROUTER_PREFETCH_HEADER;
		    },
		    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
		        return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
		    },
		    NEXT_ROUTER_STALE_TIME_HEADER: function() {
		        return NEXT_ROUTER_STALE_TIME_HEADER;
		    },
		    NEXT_ROUTER_STATE_TREE_HEADER: function() {
		        return NEXT_ROUTER_STATE_TREE_HEADER;
		    },
		    NEXT_RSC_UNION_QUERY: function() {
		        return NEXT_RSC_UNION_QUERY;
		    },
		    NEXT_URL: function() {
		        return NEXT_URL;
		    },
		    RSC_CONTENT_TYPE_HEADER: function() {
		        return RSC_CONTENT_TYPE_HEADER;
		    },
		    RSC_HEADER: function() {
		        return RSC_HEADER;
		    }
		});
		const RSC_HEADER = 'RSC';
		const ACTION_HEADER = 'Next-Action';
		const NEXT_ROUTER_STATE_TREE_HEADER = 'Next-Router-State-Tree';
		const NEXT_ROUTER_PREFETCH_HEADER = 'Next-Router-Prefetch';
		const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'Next-Router-Segment-Prefetch';
		const NEXT_HMR_REFRESH_HEADER = 'Next-HMR-Refresh';
		const NEXT_HMR_REFRESH_HASH_COOKIE = '__next_hmr_refresh_hash__';
		const NEXT_URL = 'Next-Url';
		const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
		const FLIGHT_HEADERS = [
		    RSC_HEADER,
		    NEXT_ROUTER_STATE_TREE_HEADER,
		    NEXT_ROUTER_PREFETCH_HEADER,
		    NEXT_HMR_REFRESH_HEADER,
		    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
		];
		const NEXT_RSC_UNION_QUERY = '_rsc';
		const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
		const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
		const NEXT_REWRITTEN_PATH_HEADER = 'x-nextjs-rewritten-path';
		const NEXT_REWRITTEN_QUERY_HEADER = 'x-nextjs-rewritten-query';
		const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender';

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (appRouterHeaders, appRouterHeaders.exports));
	return appRouterHeaders.exports;
}

var hasRequiredWorkUnitAsyncStorage_external;

function requireWorkUnitAsyncStorage_external () {
	if (hasRequiredWorkUnitAsyncStorage_external) return workUnitAsyncStorage_external;
	hasRequiredWorkUnitAsyncStorage_external = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    getDraftModeProviderForCacheScope: function() {
		        return getDraftModeProviderForCacheScope;
		    },
		    getExpectedRequestStore: function() {
		        return getExpectedRequestStore;
		    },
		    getHmrRefreshHash: function() {
		        return getHmrRefreshHash;
		    },
		    getPrerenderResumeDataCache: function() {
		        return getPrerenderResumeDataCache;
		    },
		    getRenderResumeDataCache: function() {
		        return getRenderResumeDataCache;
		    },
		    throwForMissingRequestStore: function() {
		        return throwForMissingRequestStore;
		    },
		    workUnitAsyncStorage: function() {
		        return _workunitasyncstorageinstance.workUnitAsyncStorageInstance;
		    }
		});
		const _workunitasyncstorageinstance = requireWorkUnitAsyncStorageInstance();
		const _approuterheaders = requireAppRouterHeaders();
		function getExpectedRequestStore(callingExpression) {
		    const workUnitStore = _workunitasyncstorageinstance.workUnitAsyncStorageInstance.getStore();
		    if (!workUnitStore) {
		        throwForMissingRequestStore(callingExpression);
		    }
		    switch(workUnitStore.type){
		        case 'request':
		            return workUnitStore;
		        case 'prerender':
		        case 'prerender-ppr':
		        case 'prerender-legacy':
		            // This should not happen because we should have checked it already.
		            throw Object.defineProperty(new Error(`\`${callingExpression}\` cannot be called inside a prerender. This is a bug in Next.js.`), "__NEXT_ERROR_CODE", {
		                value: "E401",
		                enumerable: false,
		                configurable: true
		            });
		        case 'cache':
		            throw Object.defineProperty(new Error(`\`${callingExpression}\` cannot be called inside "use cache". Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/messages/next-request-in-use-cache`), "__NEXT_ERROR_CODE", {
		                value: "E37",
		                enumerable: false,
		                configurable: true
		            });
		        case 'unstable-cache':
		            throw Object.defineProperty(new Error(`\`${callingExpression}\` cannot be called inside unstable_cache. Call it outside and pass an argument instead. Read more: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`), "__NEXT_ERROR_CODE", {
		                value: "E69",
		                enumerable: false,
		                configurable: true
		            });
		        default:
		            const _exhaustiveCheck = workUnitStore;
		            return _exhaustiveCheck;
		    }
		}
		function throwForMissingRequestStore(callingExpression) {
		    throw Object.defineProperty(new Error(`\`${callingExpression}\` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context`), "__NEXT_ERROR_CODE", {
		        value: "E251",
		        enumerable: false,
		        configurable: true
		    });
		}
		function getPrerenderResumeDataCache(workUnitStore) {
		    if (workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-ppr') {
		        return workUnitStore.prerenderResumeDataCache;
		    }
		    return null;
		}
		function getRenderResumeDataCache(workUnitStore) {
		    if (workUnitStore.type !== 'prerender-legacy' && workUnitStore.type !== 'cache' && workUnitStore.type !== 'unstable-cache') {
		        if (workUnitStore.type === 'request') {
		            return workUnitStore.renderResumeDataCache;
		        }
		        // We return the mutable resume data cache here as an immutable version of
		        // the cache as it can also be used for reading.
		        return workUnitStore.prerenderResumeDataCache;
		    }
		    return null;
		}
		function getHmrRefreshHash(workStore, workUnitStore) {
		    var _workUnitStore_cookies_get;
		    if (!workStore.dev) {
		        return undefined;
		    }
		    return workUnitStore.type === 'cache' || workUnitStore.type === 'prerender' ? workUnitStore.hmrRefreshHash : workUnitStore.type === 'request' ? (_workUnitStore_cookies_get = workUnitStore.cookies.get(_approuterheaders.NEXT_HMR_REFRESH_HASH_COOKIE)) == null ? void 0 : _workUnitStore_cookies_get.value : undefined;
		}
		function getDraftModeProviderForCacheScope(workStore, workUnitStore) {
		    if (workStore.isDraftMode) {
		        switch(workUnitStore.type){
		            case 'cache':
		            case 'unstable-cache':
		            case 'request':
		                return workUnitStore.draftMode;
		            default:
		                return undefined;
		        }
		    }
		    return undefined;
		}

		
	} (workUnitAsyncStorage_external));
	return workUnitAsyncStorage_external;
}

var workAsyncStorage_external = {};

var workAsyncStorageInstance = {};

var hasRequiredWorkAsyncStorageInstance;

function requireWorkAsyncStorageInstance () {
	if (hasRequiredWorkAsyncStorageInstance) return workAsyncStorageInstance;
	hasRequiredWorkAsyncStorageInstance = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "workAsyncStorageInstance", {
		    enumerable: true,
		    get: function() {
		        return workAsyncStorageInstance;
		    }
		});
		const _asynclocalstorage = requireAsyncLocalStorage();
		const workAsyncStorageInstance = (0, _asynclocalstorage.createAsyncLocalStorage)();

		
	} (workAsyncStorageInstance));
	return workAsyncStorageInstance;
}

var hasRequiredWorkAsyncStorage_external;

function requireWorkAsyncStorage_external () {
	if (hasRequiredWorkAsyncStorage_external) return workAsyncStorage_external;
	hasRequiredWorkAsyncStorage_external = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "workAsyncStorage", {
		    enumerable: true,
		    get: function() {
		        return _workasyncstorageinstance.workAsyncStorageInstance;
		    }
		});
		const _workasyncstorageinstance = requireWorkAsyncStorageInstance();

		
	} (workAsyncStorage_external));
	return workAsyncStorage_external;
}

var metadataConstants = {};

var hasRequiredMetadataConstants;

function requireMetadataConstants () {
	if (hasRequiredMetadataConstants) return metadataConstants;
	hasRequiredMetadataConstants = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    METADATA_BOUNDARY_NAME: function() {
		        return METADATA_BOUNDARY_NAME;
		    },
		    OUTLET_BOUNDARY_NAME: function() {
		        return OUTLET_BOUNDARY_NAME;
		    },
		    VIEWPORT_BOUNDARY_NAME: function() {
		        return VIEWPORT_BOUNDARY_NAME;
		    }
		});
		const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
		const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
		const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';

		
	} (metadataConstants));
	return metadataConstants;
}

var scheduler = {};

var hasRequiredScheduler;

function requireScheduler () {
	if (hasRequiredScheduler) return scheduler;
	hasRequiredScheduler = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    atLeastOneTask: function() {
		        return atLeastOneTask;
		    },
		    scheduleImmediate: function() {
		        return scheduleImmediate;
		    },
		    scheduleOnNextTick: function() {
		        return scheduleOnNextTick;
		    },
		    waitAtLeastOneReactRenderTask: function() {
		        return waitAtLeastOneReactRenderTask;
		    }
		});
		const scheduleOnNextTick = (cb)=>{
		    // We use Promise.resolve().then() here so that the operation is scheduled at
		    // the end of the promise job queue, we then add it to the next process tick
		    // to ensure it's evaluated afterwards.
		    //
		    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
		    //
		    Promise.resolve().then(()=>{
		        if (process.env.NEXT_RUNTIME === 'edge') {
		            setTimeout(cb, 0);
		        } else {
		            process.nextTick(cb);
		        }
		    });
		};
		const scheduleImmediate = (cb)=>{
		    if (process.env.NEXT_RUNTIME === 'edge') {
		        setTimeout(cb, 0);
		    } else {
		        setImmediate(cb);
		    }
		};
		function atLeastOneTask() {
		    return new Promise((resolve)=>scheduleImmediate(resolve));
		}
		function waitAtLeastOneReactRenderTask() {
		    if (process.env.NEXT_RUNTIME === 'edge') {
		        return new Promise((r)=>setTimeout(r, 0));
		    } else {
		        return new Promise((r)=>setImmediate(r));
		    }
		}

		
	} (scheduler));
	return scheduler;
}

/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */

var hasRequiredDynamicRendering;

function requireDynamicRendering () {
	if (hasRequiredDynamicRendering) return dynamicRendering;
	hasRequiredDynamicRendering = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    Postpone: function() {
		        return Postpone;
		    },
		    abortAndThrowOnSynchronousRequestDataAccess: function() {
		        return abortAndThrowOnSynchronousRequestDataAccess;
		    },
		    abortOnSynchronousPlatformIOAccess: function() {
		        return abortOnSynchronousPlatformIOAccess;
		    },
		    accessedDynamicData: function() {
		        return accessedDynamicData;
		    },
		    annotateDynamicAccess: function() {
		        return annotateDynamicAccess;
		    },
		    consumeDynamicAccess: function() {
		        return consumeDynamicAccess;
		    },
		    createDynamicTrackingState: function() {
		        return createDynamicTrackingState;
		    },
		    createDynamicValidationState: function() {
		        return createDynamicValidationState;
		    },
		    createHangingInputAbortSignal: function() {
		        return createHangingInputAbortSignal;
		    },
		    createPostponedAbortSignal: function() {
		        return createPostponedAbortSignal;
		    },
		    formatDynamicAPIAccesses: function() {
		        return formatDynamicAPIAccesses;
		    },
		    getFirstDynamicReason: function() {
		        return getFirstDynamicReason;
		    },
		    isDynamicPostpone: function() {
		        return isDynamicPostpone;
		    },
		    isPrerenderInterruptedError: function() {
		        return isPrerenderInterruptedError;
		    },
		    markCurrentScopeAsDynamic: function() {
		        return markCurrentScopeAsDynamic;
		    },
		    postponeWithTracking: function() {
		        return postponeWithTracking;
		    },
		    throwIfDisallowedDynamic: function() {
		        return throwIfDisallowedDynamic;
		    },
		    throwToInterruptStaticGeneration: function() {
		        return throwToInterruptStaticGeneration;
		    },
		    trackAllowedDynamicAccess: function() {
		        return trackAllowedDynamicAccess;
		    },
		    trackDynamicDataInDynamicRender: function() {
		        return trackDynamicDataInDynamicRender;
		    },
		    trackFallbackParamAccessed: function() {
		        return trackFallbackParamAccessed;
		    },
		    trackSynchronousPlatformIOAccessInDev: function() {
		        return trackSynchronousPlatformIOAccessInDev;
		    },
		    trackSynchronousRequestDataAccessInDev: function() {
		        return trackSynchronousRequestDataAccessInDev;
		    },
		    useDynamicRouteParams: function() {
		        return useDynamicRouteParams;
		    }
		});
		const _react = /*#__PURE__*/ _interop_require_default(React__default);
		const _hooksservercontext = requireHooksServerContext();
		const _staticgenerationbailout = requireStaticGenerationBailout();
		const _workunitasyncstorageexternal = requireWorkUnitAsyncStorage_external();
		const _workasyncstorageexternal = requireWorkAsyncStorage_external();
		const _dynamicrenderingutils = requireDynamicRenderingUtils();
		const _metadataconstants = requireMetadataConstants();
		const _scheduler = requireScheduler();
		function _interop_require_default(obj) {
		    return obj && obj.__esModule ? obj : {
		        default: obj
		    };
		}
		const hasPostpone = typeof _react.default.unstable_postpone === 'function';
		function createDynamicTrackingState(isDebugDynamicAccesses) {
		    return {
		        isDebugDynamicAccesses,
		        dynamicAccesses: [],
		        syncDynamicExpression: undefined,
		        syncDynamicErrorWithStack: null
		    };
		}
		function createDynamicValidationState() {
		    return {
		        hasSuspendedDynamic: false,
		        hasDynamicMetadata: false,
		        hasDynamicViewport: false,
		        hasSyncDynamicErrors: false,
		        dynamicErrors: []
		    };
		}
		function getFirstDynamicReason(trackingState) {
		    var _trackingState_dynamicAccesses_;
		    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
		}
		function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
		    if (workUnitStore) {
		        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
		            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
		            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
		            // forbidden inside a cache scope.
		            return;
		        }
		    }
		    // If we're forcing dynamic rendering or we're forcing static rendering, we
		    // don't need to do anything here because the entire page is already dynamic
		    // or it's static and it should not throw or postpone here.
		    if (store.forceDynamic || store.forceStatic) return;
		    if (store.dynamicShouldError) {
		        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
		            value: "E553",
		            enumerable: false,
		            configurable: true
		        });
		    }
		    if (workUnitStore) {
		        if (workUnitStore.type === 'prerender-ppr') {
		            postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
		        } else if (workUnitStore.type === 'prerender-legacy') {
		            workUnitStore.revalidate = 0;
		            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
		            const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
		                value: "E550",
		                enumerable: false,
		                configurable: true
		            });
		            store.dynamicUsageDescription = expression;
		            store.dynamicUsageStack = err.stack;
		            throw err;
		        } else if (process.env.NODE_ENV === 'development' && workUnitStore && workUnitStore.type === 'request') {
		            workUnitStore.usedDynamic = true;
		        }
		    }
		}
		function trackFallbackParamAccessed(store, expression) {
		    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
		    if (!prerenderStore || prerenderStore.type !== 'prerender-ppr') return;
		    postponeWithTracking(store.route, expression, prerenderStore.dynamicTracking);
		}
		function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
		    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
		    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
		        value: "E558",
		        enumerable: false,
		        configurable: true
		    });
		    prerenderStore.revalidate = 0;
		    store.dynamicUsageDescription = expression;
		    store.dynamicUsageStack = err.stack;
		    throw err;
		}
		function trackDynamicDataInDynamicRender(_store, workUnitStore) {
		    if (workUnitStore) {
		        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
		            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
		            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
		            // forbidden inside a cache scope.
		            return;
		        }
		        if (workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-legacy') {
		            workUnitStore.revalidate = 0;
		        }
		        if (process.env.NODE_ENV === 'development' && workUnitStore.type === 'request') {
		            workUnitStore.usedDynamic = true;
		        }
		    }
		}
		// Despite it's name we don't actually abort unless we have a controller to call abort on
		// There are times when we let a prerender run long to discover caches where we want the semantics
		// of tracking dynamic access without terminating the prerender early
		function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
		    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
		    const error = createPrerenderInterruptedError(reason);
		    prerenderStore.controller.abort(error);
		    const dynamicTracking = prerenderStore.dynamicTracking;
		    if (dynamicTracking) {
		        dynamicTracking.dynamicAccesses.push({
		            // When we aren't debugging, we don't need to create another error for the
		            // stack trace.
		            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
		            expression
		        });
		    }
		}
		function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
		    const dynamicTracking = prerenderStore.dynamicTracking;
		    if (dynamicTracking) {
		        if (dynamicTracking.syncDynamicErrorWithStack === null) {
		            dynamicTracking.syncDynamicExpression = expression;
		            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
		        }
		    }
		    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
		}
		function trackSynchronousPlatformIOAccessInDev(requestStore) {
		    // We don't actually have a controller to abort but we do the semantic equivalent by
		    // advancing the request store out of prerender mode
		    requestStore.prerenderPhase = false;
		}
		function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
		    const prerenderSignal = prerenderStore.controller.signal;
		    if (prerenderSignal.aborted === false) {
		        // TODO it would be better to move this aborted check into the callsite so we can avoid making
		        // the error object when it isn't relevant to the aborting of the prerender however
		        // since we need the throw semantics regardless of whether we abort it is easier to land
		        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
		        // to ideal implementation
		        const dynamicTracking = prerenderStore.dynamicTracking;
		        if (dynamicTracking) {
		            if (dynamicTracking.syncDynamicErrorWithStack === null) {
		                dynamicTracking.syncDynamicExpression = expression;
		                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
		                if (prerenderStore.validating === true) {
		                    // We always log Request Access in dev at the point of calling the function
		                    // So we mark the dynamic validation as not requiring it to be printed
		                    dynamicTracking.syncDynamicLogged = true;
		                }
		            }
		        }
		        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
		    }
		    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
		}
		const trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
		function Postpone({ reason, route }) {
		    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
		    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
		    postponeWithTracking(route, reason, dynamicTracking);
		}
		function postponeWithTracking(route, expression, dynamicTracking) {
		    assertPostpone();
		    if (dynamicTracking) {
		        dynamicTracking.dynamicAccesses.push({
		            // When we aren't debugging, we don't need to create another error for the
		            // stack trace.
		            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
		            expression
		        });
		    }
		    _react.default.unstable_postpone(createPostponeReason(route, expression));
		}
		function createPostponeReason(route, expression) {
		    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
		}
		function isDynamicPostpone(err) {
		    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
		        return isDynamicPostponeReason(err.message);
		    }
		    return false;
		}
		function isDynamicPostponeReason(reason) {
		    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
		}
		if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
		    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
		        value: "E296",
		        enumerable: false,
		        configurable: true
		    });
		}
		const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
		function createPrerenderInterruptedError(message) {
		    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
		        value: "E394",
		        enumerable: false,
		        configurable: true
		    });
		    error.digest = NEXT_PRERENDER_INTERRUPTED;
		    return error;
		}
		function isPrerenderInterruptedError(error) {
		    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
		}
		function accessedDynamicData(dynamicAccesses) {
		    return dynamicAccesses.length > 0;
		}
		function consumeDynamicAccess(serverDynamic, clientDynamic) {
		    // We mutate because we only call this once we are no longer writing
		    // to the dynamicTrackingState and it's more efficient than creating a new
		    // array.
		    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
		    return serverDynamic.dynamicAccesses;
		}
		function formatDynamicAPIAccesses(dynamicAccesses) {
		    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
		        stack = stack.split('\n')// Remove the "Error: " prefix from the first line of the stack trace as
		        // well as the first 4 lines of the stack trace which is the distance
		        // from the user code and the `new Error().stack` call.
		        .slice(4).filter((line)=>{
		            // Exclude Next.js internals from the stack trace.
		            if (line.includes('node_modules/next/')) {
		                return false;
		            }
		            // Exclude anonymous functions from the stack trace.
		            if (line.includes(' (<anonymous>)')) {
		                return false;
		            }
		            // Exclude Node.js internals from the stack trace.
		            if (line.includes(' (node:')) {
		                return false;
		            }
		            return true;
		        }).join('\n');
		        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
		    });
		}
		function assertPostpone() {
		    if (!hasPostpone) {
		        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
		            value: "E224",
		            enumerable: false,
		            configurable: true
		        });
		    }
		}
		function createPostponedAbortSignal(reason) {
		    assertPostpone();
		    const controller = new AbortController();
		    // We get our hands on a postpone instance by calling postpone and catching the throw
		    try {
		        _react.default.unstable_postpone(reason);
		    } catch (x) {
		        controller.abort(x);
		    }
		    return controller.signal;
		}
		function createHangingInputAbortSignal(workUnitStore) {
		    const controller = new AbortController();
		    if (workUnitStore.cacheSignal) {
		        // If we have a cacheSignal it means we're in a prospective render. If the input
		        // we're waiting on is coming from another cache, we do want to wait for it so that
		        // we can resolve this cache entry too.
		        workUnitStore.cacheSignal.inputReady().then(()=>{
		            controller.abort();
		        });
		    } else {
		        // Otherwise we're in the final render and we should already have all our caches
		        // filled. We might still be waiting on some microtasks so we wait one tick before
		        // giving up. When we give up, we still want to render the content of this cache
		        // as deeply as we can so that we can suspend as deeply as possible in the tree
		        // or not at all if we don't end up waiting for the input.
		        (0, _scheduler.scheduleOnNextTick)(()=>controller.abort());
		    }
		    return controller.signal;
		}
		function annotateDynamicAccess(expression, prerenderStore) {
		    const dynamicTracking = prerenderStore.dynamicTracking;
		    if (dynamicTracking) {
		        dynamicTracking.dynamicAccesses.push({
		            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
		            expression
		        });
		    }
		}
		function useDynamicRouteParams(expression) {
		    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
		    if (workStore && workStore.isStaticGeneration && workStore.fallbackRouteParams && workStore.fallbackRouteParams.size > 0) {
		        // There are fallback route params, we should track these as dynamic
		        // accesses.
		        const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
		        if (workUnitStore) {
		            // We're prerendering with dynamicIO or PPR or both
		            if (workUnitStore.type === 'prerender') {
		                // We are in a prerender with dynamicIO semantics
		                // We are going to hang here and never resolve. This will cause the currently
		                // rendering component to effectively be a dynamic hole
		                _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, expression));
		            } else if (workUnitStore.type === 'prerender-ppr') {
		                // We're prerendering with PPR
		                postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
		            } else if (workUnitStore.type === 'prerender-legacy') {
		                throwToInterruptStaticGeneration(expression, workStore, workUnitStore);
		            }
		        }
		    }
		}
		const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
		const hasMetadataRegex = new RegExp(`\\n\\s+at ${_metadataconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
		const hasViewportRegex = new RegExp(`\\n\\s+at ${_metadataconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
		const hasOutletRegex = new RegExp(`\\n\\s+at ${_metadataconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
		function trackAllowedDynamicAccess(route, componentStack, dynamicValidation, serverDynamic, clientDynamic) {
		    if (hasOutletRegex.test(componentStack)) {
		        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
		        return;
		    } else if (hasMetadataRegex.test(componentStack)) {
		        dynamicValidation.hasDynamicMetadata = true;
		        return;
		    } else if (hasViewportRegex.test(componentStack)) {
		        dynamicValidation.hasDynamicViewport = true;
		        return;
		    } else if (hasSuspenseRegex.test(componentStack)) {
		        dynamicValidation.hasSuspendedDynamic = true;
		        return;
		    } else if (serverDynamic.syncDynamicErrorWithStack || clientDynamic.syncDynamicErrorWithStack) {
		        dynamicValidation.hasSyncDynamicErrors = true;
		        return;
		    } else {
		        const message = `Route "${route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
		        const error = createErrorWithComponentStack(message, componentStack);
		        dynamicValidation.dynamicErrors.push(error);
		        return;
		    }
		}
		function createErrorWithComponentStack(message, componentStack) {
		    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
		        value: "E394",
		        enumerable: false,
		        configurable: true
		    });
		    error.stack = 'Error: ' + message + componentStack;
		    return error;
		}
		function throwIfDisallowedDynamic(route, dynamicValidation, serverDynamic, clientDynamic) {
		    let syncError;
		    let syncExpression;
		    let syncLogged;
		    if (serverDynamic.syncDynamicErrorWithStack) {
		        syncError = serverDynamic.syncDynamicErrorWithStack;
		        syncExpression = serverDynamic.syncDynamicExpression;
		        syncLogged = serverDynamic.syncDynamicLogged === true;
		    } else if (clientDynamic.syncDynamicErrorWithStack) {
		        syncError = clientDynamic.syncDynamicErrorWithStack;
		        syncExpression = clientDynamic.syncDynamicExpression;
		        syncLogged = clientDynamic.syncDynamicLogged === true;
		    } else {
		        syncError = null;
		        syncExpression = undefined;
		        syncLogged = false;
		    }
		    if (dynamicValidation.hasSyncDynamicErrors && syncError) {
		        if (!syncLogged) {
		            // In dev we already log errors about sync dynamic access. But during builds we need to ensure
		            // the offending sync error is logged before we exit the build
		            console.error(syncError);
		        }
		        // The actual error should have been logged when the sync access ocurred
		        throw new _staticgenerationbailout.StaticGenBailoutError();
		    }
		    const dynamicErrors = dynamicValidation.dynamicErrors;
		    if (dynamicErrors.length) {
		        for(let i = 0; i < dynamicErrors.length; i++){
		            console.error(dynamicErrors[i]);
		        }
		        throw new _staticgenerationbailout.StaticGenBailoutError();
		    }
		    if (!dynamicValidation.hasSuspendedDynamic) {
		        if (dynamicValidation.hasDynamicMetadata) {
		            if (syncError) {
		                console.error(syncError);
		                throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateMetadata\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`), "__NEXT_ERROR_CODE", {
		                    value: "E608",
		                    enumerable: false,
		                    configurable: true
		                });
		            }
		            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`), "__NEXT_ERROR_CODE", {
		                value: "E534",
		                enumerable: false,
		                configurable: true
		            });
		        } else if (dynamicValidation.hasDynamicViewport) {
		            if (syncError) {
		                console.error(syncError);
		                throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateViewport\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`), "__NEXT_ERROR_CODE", {
		                    value: "E573",
		                    enumerable: false,
		                    configurable: true
		                });
		            }
		            throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route "${route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`), "__NEXT_ERROR_CODE", {
		                value: "E590",
		                enumerable: false,
		                configurable: true
		            });
		        }
		    }
		}

		
	} (dynamicRendering));
	return dynamicRendering;
}

var hasRequiredUnstableRethrow_server;

function requireUnstableRethrow_server () {
	if (hasRequiredUnstableRethrow_server) return unstableRethrow_server.exports;
	hasRequiredUnstableRethrow_server = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "unstable_rethrow", {
		    enumerable: true,
		    get: function() {
		        return unstable_rethrow;
		    }
		});
		const _dynamicrenderingutils = requireDynamicRenderingUtils();
		const _ispostpone = requireIsPostpone();
		const _bailouttocsr = requireBailoutToCsr();
		const _isnextroutererror = requireIsNextRouterError();
		const _dynamicrendering = requireDynamicRendering();
		const _hooksservercontext = requireHooksServerContext();
		function unstable_rethrow(error) {
		    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error)) {
		        throw error;
		    }
		    if (error instanceof Error && 'cause' in error) {
		        unstable_rethrow(error.cause);
		    }
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (unstableRethrow_server, unstableRethrow_server.exports));
	return unstableRethrow_server.exports;
}

var unstableRethrow_browser = {exports: {}};

var hasRequiredUnstableRethrow_browser;

function requireUnstableRethrow_browser () {
	if (hasRequiredUnstableRethrow_browser) return unstableRethrow_browser.exports;
	hasRequiredUnstableRethrow_browser = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "unstable_rethrow", {
		    enumerable: true,
		    get: function() {
		        return unstable_rethrow;
		    }
		});
		const _bailouttocsr = requireBailoutToCsr();
		const _isnextroutererror = requireIsNextRouterError();
		function unstable_rethrow(error) {
		    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error)) {
		        throw error;
		    }
		    if (error instanceof Error && 'cause' in error) {
		        unstable_rethrow(error.cause);
		    }
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (unstableRethrow_browser, unstableRethrow_browser.exports));
	return unstableRethrow_browser.exports;
}

/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	Object.defineProperty(exports, "unstable_rethrow", {
	    enumerable: true,
	    get: function() {
	        return unstable_rethrow;
	    }
	});
	const unstable_rethrow = typeof window === 'undefined' ? requireUnstableRethrow_server().unstable_rethrow : requireUnstableRethrow_browser().unstable_rethrow;

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (unstableRethrow, unstableRethrow.exports));

var unstableRethrowExports = unstableRethrow.exports;

/** @internal */

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    ReadonlyURLSearchParams: function() {
	        return ReadonlyURLSearchParams;
	    },
	    RedirectType: function() {
	        return _redirecterror.RedirectType;
	    },
	    forbidden: function() {
	        return _forbidden.forbidden;
	    },
	    notFound: function() {
	        return _notfound.notFound;
	    },
	    permanentRedirect: function() {
	        return _redirect.permanentRedirect;
	    },
	    redirect: function() {
	        return _redirect.redirect;
	    },
	    unauthorized: function() {
	        return _unauthorized.unauthorized;
	    },
	    unstable_rethrow: function() {
	        return _unstablerethrow.unstable_rethrow;
	    }
	});
	const _redirect = redirectExports;
	const _redirecterror = redirectErrorExports;
	const _notfound = notFoundExports;
	const _forbidden = forbiddenExports;
	const _unauthorized = unauthorizedExports;
	const _unstablerethrow = unstableRethrowExports;
	class ReadonlyURLSearchParamsError extends Error {
	    constructor(){
	        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
	    }
	}
	class ReadonlyURLSearchParams extends URLSearchParams {
	    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
	        throw new ReadonlyURLSearchParamsError();
	    }
	    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
	        throw new ReadonlyURLSearchParamsError();
	    }
	    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
	        throw new ReadonlyURLSearchParamsError();
	    }
	    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
	        throw new ReadonlyURLSearchParamsError();
	    }
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (navigation_reactServer, navigation_reactServer.exports));

var navigation_reactServerExports = navigation_reactServer.exports;

var serverInsertedHtml_sharedRuntime = {};

var _interop_require_wildcard$1 = {};

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;

    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();

    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return { default: obj };

    var cache = _getRequireWildcardCache(nodeInterop);

    if (cache && cache.has(obj)) return cache.get(obj);

    var newObj = { __proto__: null };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

    for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }

    newObj.default = obj;

    if (cache) cache.set(obj, newObj);

    return newObj;
}
_interop_require_wildcard$1._ = _interop_require_wildcard;

(function (exports) {
	'use client';
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    ServerInsertedHTMLContext: function() {
	        return ServerInsertedHTMLContext;
	    },
	    useServerInsertedHTML: function() {
	        return useServerInsertedHTML;
	    }
	});
	const _interop_require_wildcard = _interop_require_wildcard$1;
	const _react = /*#__PURE__*/ _interop_require_wildcard._(React__default);
	const ServerInsertedHTMLContext = /*#__PURE__*/ _react.default.createContext(null);
	function useServerInsertedHTML(callback) {
	    const addInsertedServerHTMLCallback = (0, _react.useContext)(ServerInsertedHTMLContext);
	    // Should have no effects on client where there's no flush effects provider
	    if (addInsertedServerHTMLCallback) {
	        addInsertedServerHTMLCallback(callback);
	    }
	}

	
} (serverInsertedHtml_sharedRuntime));

var bailoutToClientRendering = {exports: {}};

var hasRequiredBailoutToClientRendering;

function requireBailoutToClientRendering () {
	if (hasRequiredBailoutToClientRendering) return bailoutToClientRendering.exports;
	hasRequiredBailoutToClientRendering = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "bailoutToClientRendering", {
		    enumerable: true,
		    get: function() {
		        return bailoutToClientRendering;
		    }
		});
		const _bailouttocsr = requireBailoutToCsr();
		const _workasyncstorageexternal = requireWorkAsyncStorage_external();
		function bailoutToClientRendering(reason) {
		    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
		    if (workStore == null ? void 0 : workStore.forceStatic) return;
		    if (workStore == null ? void 0 : workStore.isStaticGeneration) throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
		        value: "E394",
		        enumerable: false,
		        configurable: true
		    });
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (bailoutToClientRendering, bailoutToClientRendering.exports));
	return bailoutToClientRendering.exports;
}

(function (module, exports) {
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    ReadonlyURLSearchParams: function() {
	        return _navigationreactserver.ReadonlyURLSearchParams;
	    },
	    RedirectType: function() {
	        return _navigationreactserver.RedirectType;
	    },
	    ServerInsertedHTMLContext: function() {
	        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
	    },
	    forbidden: function() {
	        return _navigationreactserver.forbidden;
	    },
	    notFound: function() {
	        return _navigationreactserver.notFound;
	    },
	    permanentRedirect: function() {
	        return _navigationreactserver.permanentRedirect;
	    },
	    redirect: function() {
	        return _navigationreactserver.redirect;
	    },
	    unauthorized: function() {
	        return _navigationreactserver.unauthorized;
	    },
	    unstable_rethrow: function() {
	        return _navigationreactserver.unstable_rethrow;
	    },
	    useParams: function() {
	        return useParams;
	    },
	    usePathname: function() {
	        return usePathname;
	    },
	    useRouter: function() {
	        return useRouter;
	    },
	    useSearchParams: function() {
	        return useSearchParams;
	    },
	    useSelectedLayoutSegment: function() {
	        return useSelectedLayoutSegment;
	    },
	    useSelectedLayoutSegments: function() {
	        return useSelectedLayoutSegments;
	    },
	    useServerInsertedHTML: function() {
	        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
	    }
	});
	const _react = React__default;
	const _approutercontextsharedruntime = appRouterContext_sharedRuntime;
	const _hooksclientcontextsharedruntime = hooksClientContext_sharedRuntime;
	const _getsegmentvalue = getSegmentValueExports;
	const _segment = segment;
	const _navigationreactserver = navigation_reactServerExports;
	const _serverinsertedhtmlsharedruntime = serverInsertedHtml_sharedRuntime;
	const useDynamicRouteParams = typeof window === 'undefined' ? requireDynamicRendering().useDynamicRouteParams : undefined;
	function useSearchParams() {
	    const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
	    // In the case where this is `null`, the compat types added in
	    // `next-env.d.ts` will add a new overload that changes the return type to
	    // include `null`.
	    const readonlySearchParams = (0, _react.useMemo)(()=>{
	        if (!searchParams) {
	            // When the router is not ready in pages, we won't have the search params
	            // available.
	            return null;
	        }
	        return new _navigationreactserver.ReadonlyURLSearchParams(searchParams);
	    }, [
	        searchParams
	    ]);
	    if (typeof window === 'undefined') {
	        // AsyncLocalStorage should not be included in the client bundle.
	        const { bailoutToClientRendering } = requireBailoutToClientRendering();
	        // TODO-APP: handle dynamic = 'force-static' here and on the client
	        bailoutToClientRendering('useSearchParams()');
	    }
	    return readonlySearchParams;
	}
	function usePathname() {
	    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('usePathname()');
	    // In the case where this is `null`, the compat types added in `next-env.d.ts`
	    // will add a new overload that changes the return type to include `null`.
	    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
	}
	function useRouter() {
	    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
	    if (router === null) {
	        throw Object.defineProperty(new Error('invariant expected app router to be mounted'), "__NEXT_ERROR_CODE", {
	            value: "E238",
	            enumerable: false,
	            configurable: true
	        });
	    }
	    return router;
	}
	function useParams() {
	    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useParams()');
	    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
	}
	/** Get the canonical parameters from the current level to the leaf node. */ // Client components API
	function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
	    if (first === void 0) first = true;
	    if (segmentPath === void 0) segmentPath = [];
	    let node;
	    if (first) {
	        // Use the provided parallel route key on the first parallel route
	        node = tree[1][parallelRouteKey];
	    } else {
	        // After first parallel route prefer children, if there's no children pick the first parallel route.
	        const parallelRoutes = tree[1];
	        var _parallelRoutes_children;
	        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
	    }
	    if (!node) return segmentPath;
	    const segment = node[0];
	    let segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
	    if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) {
	        return segmentPath;
	    }
	    segmentPath.push(segmentValue);
	    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
	}
	function useSelectedLayoutSegments(parallelRouteKey) {
	    if (parallelRouteKey === void 0) parallelRouteKey = 'children';
	    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useSelectedLayoutSegments()');
	    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
	    // @ts-expect-error This only happens in `pages`. Type is overwritten in navigation.d.ts
	    if (!context) return null;
	    return getSelectedLayoutSegmentPath(context.parentTree, parallelRouteKey);
	}
	function useSelectedLayoutSegment(parallelRouteKey) {
	    if (parallelRouteKey === void 0) parallelRouteKey = 'children';
	    useDynamicRouteParams == null ? void 0 : useDynamicRouteParams('useSelectedLayoutSegment()');
	    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
	    if (!selectedLayoutSegments || selectedLayoutSegments.length === 0) {
	        return null;
	    }
	    const selectedLayoutSegment = parallelRouteKey === 'children' ? selectedLayoutSegments[0] : selectedLayoutSegments[selectedLayoutSegments.length - 1];
	    // if the default slot is showing, we return null since it's not technically "selected" (it's a fallback)
	    // and returning an internal value like `__DEFAULT__` would be confusing.
	    return selectedLayoutSegment === _segment.DEFAULT_SEGMENT_KEY ? null : selectedLayoutSegment;
	}

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (navigation$1, navigation$1.exports));

var navigationExports = navigation$1.exports;

var navigation = navigationExports;

var link$1 = {exports: {}};

var resolveHref = {exports: {}};

var querystring = {};

var hasRequiredQuerystring;

function requireQuerystring () {
	if (hasRequiredQuerystring) return querystring;
	hasRequiredQuerystring = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    assign: function() {
		        return assign;
		    },
		    searchParamsToUrlQuery: function() {
		        return searchParamsToUrlQuery;
		    },
		    urlQueryToSearchParams: function() {
		        return urlQueryToSearchParams;
		    }
		});
		function searchParamsToUrlQuery(searchParams) {
		    const query = {};
		    for (const [key, value] of searchParams.entries()){
		        const existing = query[key];
		        if (typeof existing === 'undefined') {
		            query[key] = value;
		        } else if (Array.isArray(existing)) {
		            existing.push(value);
		        } else {
		            query[key] = [
		                existing,
		                value
		            ];
		        }
		    }
		    return query;
		}
		function stringifyUrlQueryParam(param) {
		    if (typeof param === 'string') {
		        return param;
		    }
		    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
		        return String(param);
		    } else {
		        return '';
		    }
		}
		function urlQueryToSearchParams(query) {
		    const searchParams = new URLSearchParams();
		    for (const [key, value] of Object.entries(query)){
		        if (Array.isArray(value)) {
		            for (const item of value){
		                searchParams.append(key, stringifyUrlQueryParam(item));
		            }
		        } else {
		            searchParams.set(key, stringifyUrlQueryParam(value));
		        }
		    }
		    return searchParams;
		}
		function assign(target) {
		    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
		        searchParamsList[_key - 1] = arguments[_key];
		    }
		    for (const searchParams of searchParamsList){
		        for (const key of searchParams.keys()){
		            target.delete(key);
		        }
		        for (const [key, value] of searchParams.entries()){
		            target.append(key, value);
		        }
		    }
		    return target;
		}

		
	} (querystring));
	return querystring;
}

var formatUrl = {};

var hasRequiredFormatUrl;

function requireFormatUrl () {
	if (hasRequiredFormatUrl) return formatUrl;
	hasRequiredFormatUrl = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    formatUrl: function() {
		        return formatUrl;
		    },
		    formatWithValidation: function() {
		        return formatWithValidation;
		    },
		    urlObjectKeys: function() {
		        return urlObjectKeys;
		    }
		});
		const _interop_require_wildcard = _interop_require_wildcard$1;
		const _querystring = /*#__PURE__*/ _interop_require_wildcard._(requireQuerystring());
		const slashedProtocols = /https?|ftp|gopher|file/;
		function formatUrl(urlObj) {
		    let { auth, hostname } = urlObj;
		    let protocol = urlObj.protocol || '';
		    let pathname = urlObj.pathname || '';
		    let hash = urlObj.hash || '';
		    let query = urlObj.query || '';
		    let host = false;
		    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
		    if (urlObj.host) {
		        host = auth + urlObj.host;
		    } else if (hostname) {
		        host = auth + (~hostname.indexOf(':') ? "[" + hostname + "]" : hostname);
		        if (urlObj.port) {
		            host += ':' + urlObj.port;
		        }
		    }
		    if (query && typeof query === 'object') {
		        query = String(_querystring.urlQueryToSearchParams(query));
		    }
		    let search = urlObj.search || query && "?" + query || '';
		    if (protocol && !protocol.endsWith(':')) protocol += ':';
		    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
		        host = '//' + (host || '');
		        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
		    } else if (!host) {
		        host = '';
		    }
		    if (hash && hash[0] !== '#') hash = '#' + hash;
		    if (search && search[0] !== '?') search = '?' + search;
		    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
		    search = search.replace('#', '%23');
		    return "" + protocol + host + pathname + search + hash;
		}
		const urlObjectKeys = [
		    'auth',
		    'hash',
		    'host',
		    'hostname',
		    'href',
		    'path',
		    'pathname',
		    'port',
		    'protocol',
		    'query',
		    'search',
		    'slashes'
		];
		function formatWithValidation(url) {
		    if (process.env.NODE_ENV === 'development') {
		        if (url !== null && typeof url === 'object') {
		            Object.keys(url).forEach((key)=>{
		                if (!urlObjectKeys.includes(key)) {
		                    console.warn("Unknown key passed via urlObject into url.format: " + key);
		                }
		            });
		        }
		    }
		    return formatUrl(url);
		}

		
	} (formatUrl));
	return formatUrl;
}

var omit = {};

var hasRequiredOmit;

function requireOmit () {
	if (hasRequiredOmit) return omit;
	hasRequiredOmit = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "omit", {
		    enumerable: true,
		    get: function() {
		        return omit;
		    }
		});
		function omit(object, keys) {
		    const omitted = {};
		    Object.keys(object).forEach((key)=>{
		        if (!keys.includes(key)) {
		            omitted[key] = object[key];
		        }
		    });
		    return omitted;
		}

		
	} (omit));
	return omit;
}

var utils$1 = {};

var hasRequiredUtils$1;

function requireUtils$1 () {
	if (hasRequiredUtils$1) return utils$1;
	hasRequiredUtils$1 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    DecodeError: function() {
		        return DecodeError;
		    },
		    MiddlewareNotFoundError: function() {
		        return MiddlewareNotFoundError;
		    },
		    MissingStaticPage: function() {
		        return MissingStaticPage;
		    },
		    NormalizeError: function() {
		        return NormalizeError;
		    },
		    PageNotFoundError: function() {
		        return PageNotFoundError;
		    },
		    SP: function() {
		        return SP;
		    },
		    ST: function() {
		        return ST;
		    },
		    WEB_VITALS: function() {
		        return WEB_VITALS;
		    },
		    execOnce: function() {
		        return execOnce;
		    },
		    getDisplayName: function() {
		        return getDisplayName;
		    },
		    getLocationOrigin: function() {
		        return getLocationOrigin;
		    },
		    getURL: function() {
		        return getURL;
		    },
		    isAbsoluteUrl: function() {
		        return isAbsoluteUrl;
		    },
		    isResSent: function() {
		        return isResSent;
		    },
		    loadGetInitialProps: function() {
		        return loadGetInitialProps;
		    },
		    normalizeRepeatedSlashes: function() {
		        return normalizeRepeatedSlashes;
		    },
		    stringifyError: function() {
		        return stringifyError;
		    }
		});
		const WEB_VITALS = [
		    'CLS',
		    'FCP',
		    'FID',
		    'INP',
		    'LCP',
		    'TTFB'
		];
		function execOnce(fn) {
		    let used = false;
		    let result;
		    return function() {
		        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
		            args[_key] = arguments[_key];
		        }
		        if (!used) {
		            used = true;
		            result = fn(...args);
		        }
		        return result;
		    };
		}
		// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
		// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
		const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
		const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
		function getLocationOrigin() {
		    const { protocol, hostname, port } = window.location;
		    return protocol + "//" + hostname + (port ? ':' + port : '');
		}
		function getURL() {
		    const { href } = window.location;
		    const origin = getLocationOrigin();
		    return href.substring(origin.length);
		}
		function getDisplayName(Component) {
		    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
		}
		function isResSent(res) {
		    return res.finished || res.headersSent;
		}
		function normalizeRepeatedSlashes(url) {
		    const urlParts = url.split('?');
		    const urlNoQuery = urlParts[0];
		    return urlNoQuery// first we replace any non-encoded backslashes with forward
		    // then normalize repeated forward slashes
		    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?" + urlParts.slice(1).join('?') : '');
		}
		async function loadGetInitialProps(App, ctx) {
		    if (process.env.NODE_ENV !== 'production') {
		        var _App_prototype;
		        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
		            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
		            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
		                value: "E394",
		                enumerable: false,
		                configurable: true
		            });
		        }
		    }
		    // when called from _app `ctx` is nested in `ctx`
		    const res = ctx.res || ctx.ctx && ctx.ctx.res;
		    if (!App.getInitialProps) {
		        if (ctx.ctx && ctx.Component) {
		            // @ts-ignore pageProps default
		            return {
		                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
		            };
		        }
		        return {};
		    }
		    const props = await App.getInitialProps(ctx);
		    if (res && isResSent(res)) {
		        return props;
		    }
		    if (!props) {
		        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
		        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
		            value: "E394",
		            enumerable: false,
		            configurable: true
		        });
		    }
		    if (process.env.NODE_ENV !== 'production') {
		        if (Object.keys(props).length === 0 && !ctx.ctx) {
		            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
		        }
		    }
		    return props;
		}
		const SP = typeof performance !== 'undefined';
		const ST = SP && [
		    'mark',
		    'measure',
		    'getEntriesByName'
		].every((method)=>typeof performance[method] === 'function');
		class DecodeError extends Error {
		}
		class NormalizeError extends Error {
		}
		class PageNotFoundError extends Error {
		    constructor(page){
		        super();
		        this.code = 'ENOENT';
		        this.name = 'PageNotFoundError';
		        this.message = "Cannot find module for page: " + page;
		    }
		}
		class MissingStaticPage extends Error {
		    constructor(page, message){
		        super();
		        this.message = "Failed to load static file for page: " + page + " " + message;
		    }
		}
		class MiddlewareNotFoundError extends Error {
		    constructor(){
		        super();
		        this.code = 'ENOENT';
		        this.message = "Cannot find the middleware module";
		    }
		}
		function stringifyError(error) {
		    return JSON.stringify({
		        message: error.message,
		        stack: error.stack
		    });
		}

		
	} (utils$1));
	return utils$1;
}

var normalizeTrailingSlash = {exports: {}};

var removeTrailingSlash = {};

/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */

var hasRequiredRemoveTrailingSlash;

function requireRemoveTrailingSlash () {
	if (hasRequiredRemoveTrailingSlash) return removeTrailingSlash;
	hasRequiredRemoveTrailingSlash = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "removeTrailingSlash", {
		    enumerable: true,
		    get: function() {
		        return removeTrailingSlash;
		    }
		});
		function removeTrailingSlash(route) {
		    return route.replace(/\/$/, '') || '/';
		}

		
	} (removeTrailingSlash));
	return removeTrailingSlash;
}

var parsePath = {};

/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */

var hasRequiredParsePath;

function requireParsePath () {
	if (hasRequiredParsePath) return parsePath;
	hasRequiredParsePath = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "parsePath", {
		    enumerable: true,
		    get: function() {
		        return parsePath;
		    }
		});
		function parsePath(path) {
		    const hashIndex = path.indexOf('#');
		    const queryIndex = path.indexOf('?');
		    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
		    if (hasQuery || hashIndex > -1) {
		        return {
		            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
		            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : '',
		            hash: hashIndex > -1 ? path.slice(hashIndex) : ''
		        };
		    }
		    return {
		        pathname: path,
		        query: '',
		        hash: ''
		    };
		}

		
	} (parsePath));
	return parsePath;
}

var hasRequiredNormalizeTrailingSlash;

function requireNormalizeTrailingSlash () {
	if (hasRequiredNormalizeTrailingSlash) return normalizeTrailingSlash.exports;
	hasRequiredNormalizeTrailingSlash = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "normalizePathTrailingSlash", {
		    enumerable: true,
		    get: function() {
		        return normalizePathTrailingSlash;
		    }
		});
		const _removetrailingslash = requireRemoveTrailingSlash();
		const _parsepath = requireParsePath();
		const normalizePathTrailingSlash = (path)=>{
		    if (!path.startsWith('/') || process.env.__NEXT_MANUAL_TRAILING_SLASH) {
		        return path;
		    }
		    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
		    if (process.env.__NEXT_TRAILING_SLASH) {
		        if (/\.[^/]+\/?$/.test(pathname)) {
		            return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
		        } else if (pathname.endsWith('/')) {
		            return "" + pathname + query + hash;
		        } else {
		            return pathname + "/" + query + hash;
		        }
		    }
		    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
		};

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (normalizeTrailingSlash, normalizeTrailingSlash.exports));
	return normalizeTrailingSlash.exports;
}

var isLocalUrl = {};

var hasBasePath = {exports: {}};

var pathHasPrefix = {};

var hasRequiredPathHasPrefix;

function requirePathHasPrefix () {
	if (hasRequiredPathHasPrefix) return pathHasPrefix;
	hasRequiredPathHasPrefix = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "pathHasPrefix", {
		    enumerable: true,
		    get: function() {
		        return pathHasPrefix;
		    }
		});
		const _parsepath = requireParsePath();
		function pathHasPrefix(path, prefix) {
		    if (typeof path !== 'string') {
		        return false;
		    }
		    const { pathname } = (0, _parsepath.parsePath)(path);
		    return pathname === prefix || pathname.startsWith(prefix + '/');
		}

		
	} (pathHasPrefix));
	return pathHasPrefix;
}

var hasRequiredHasBasePath;

function requireHasBasePath () {
	if (hasRequiredHasBasePath) return hasBasePath.exports;
	hasRequiredHasBasePath = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "hasBasePath", {
		    enumerable: true,
		    get: function() {
		        return hasBasePath;
		    }
		});
		const _pathhasprefix = requirePathHasPrefix();
		const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';
		function hasBasePath(path) {
		    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (hasBasePath, hasBasePath.exports));
	return hasBasePath.exports;
}

var hasRequiredIsLocalUrl;

function requireIsLocalUrl () {
	if (hasRequiredIsLocalUrl) return isLocalUrl;
	hasRequiredIsLocalUrl = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "isLocalURL", {
		    enumerable: true,
		    get: function() {
		        return isLocalURL;
		    }
		});
		const _utils = requireUtils$1();
		const _hasbasepath = requireHasBasePath();
		function isLocalURL(url) {
		    // prevent a hydration mismatch on href for url with anchor refs
		    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
		    try {
		        // absolute urls can be local if they are on the same origin
		        const locationOrigin = (0, _utils.getLocationOrigin)();
		        const resolved = new URL(url, locationOrigin);
		        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
		    } catch (_) {
		        return false;
		    }
		}

		
	} (isLocalUrl));
	return isLocalUrl;
}

var utils = {};

var sortedRoutes = {};

var hasRequiredSortedRoutes;

function requireSortedRoutes () {
	if (hasRequiredSortedRoutes) return sortedRoutes;
	hasRequiredSortedRoutes = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    getSortedRouteObjects: function() {
		        return getSortedRouteObjects;
		    },
		    getSortedRoutes: function() {
		        return getSortedRoutes;
		    }
		});
		class UrlNode {
		    insert(urlPath) {
		        this._insert(urlPath.split('/').filter(Boolean), [], false);
		    }
		    smoosh() {
		        return this._smoosh();
		    }
		    _smoosh(prefix) {
		        if (prefix === void 0) prefix = '/';
		        const childrenPaths = [
		            ...this.children.keys()
		        ].sort();
		        if (this.slugName !== null) {
		            childrenPaths.splice(childrenPaths.indexOf('[]'), 1);
		        }
		        if (this.restSlugName !== null) {
		            childrenPaths.splice(childrenPaths.indexOf('[...]'), 1);
		        }
		        if (this.optionalRestSlugName !== null) {
		            childrenPaths.splice(childrenPaths.indexOf('[[...]]'), 1);
		        }
		        const routes = childrenPaths.map((c)=>this.children.get(c)._smoosh("" + prefix + c + "/")).reduce((prev, curr)=>[
		                ...prev,
		                ...curr
		            ], []);
		        if (this.slugName !== null) {
		            routes.push(...this.children.get('[]')._smoosh(prefix + "[" + this.slugName + "]/"));
		        }
		        if (!this.placeholder) {
		            const r = prefix === '/' ? '/' : prefix.slice(0, -1);
		            if (this.optionalRestSlugName != null) {
		                throw Object.defineProperty(new Error('You cannot define a route with the same specificity as a optional catch-all route ("' + r + '" and "' + r + "[[..." + this.optionalRestSlugName + ']]").'), "__NEXT_ERROR_CODE", {
		                    value: "E458",
		                    enumerable: false,
		                    configurable: true
		                });
		            }
		            routes.unshift(r);
		        }
		        if (this.restSlugName !== null) {
		            routes.push(...this.children.get('[...]')._smoosh(prefix + "[..." + this.restSlugName + "]/"));
		        }
		        if (this.optionalRestSlugName !== null) {
		            routes.push(...this.children.get('[[...]]')._smoosh(prefix + "[[..." + this.optionalRestSlugName + "]]/"));
		        }
		        return routes;
		    }
		    _insert(urlPaths, slugNames, isCatchAll) {
		        if (urlPaths.length === 0) {
		            this.placeholder = false;
		            return;
		        }
		        if (isCatchAll) {
		            throw Object.defineProperty(new Error("Catch-all must be the last part of the URL."), "__NEXT_ERROR_CODE", {
		                value: "E392",
		                enumerable: false,
		                configurable: true
		            });
		        }
		        // The next segment in the urlPaths list
		        let nextSegment = urlPaths[0];
		        // Check if the segment matches `[something]`
		        if (nextSegment.startsWith('[') && nextSegment.endsWith(']')) {
		            // Strip `[` and `]`, leaving only `something`
		            let segmentName = nextSegment.slice(1, -1);
		            let isOptional = false;
		            if (segmentName.startsWith('[') && segmentName.endsWith(']')) {
		                // Strip optional `[` and `]`, leaving only `something`
		                segmentName = segmentName.slice(1, -1);
		                isOptional = true;
		            }
		            if (segmentName.startsWith('…')) {
		                throw Object.defineProperty(new Error("Detected a three-dot character ('…') at ('" + segmentName + "'). Did you mean ('...')?"), "__NEXT_ERROR_CODE", {
		                    value: "E147",
		                    enumerable: false,
		                    configurable: true
		                });
		            }
		            if (segmentName.startsWith('...')) {
		                // Strip `...`, leaving only `something`
		                segmentName = segmentName.substring(3);
		                isCatchAll = true;
		            }
		            if (segmentName.startsWith('[') || segmentName.endsWith(']')) {
		                throw Object.defineProperty(new Error("Segment names may not start or end with extra brackets ('" + segmentName + "')."), "__NEXT_ERROR_CODE", {
		                    value: "E421",
		                    enumerable: false,
		                    configurable: true
		                });
		            }
		            if (segmentName.startsWith('.')) {
		                throw Object.defineProperty(new Error("Segment names may not start with erroneous periods ('" + segmentName + "')."), "__NEXT_ERROR_CODE", {
		                    value: "E288",
		                    enumerable: false,
		                    configurable: true
		                });
		            }
		            function handleSlug(previousSlug, nextSlug) {
		                if (previousSlug !== null) {
		                    // If the specific segment already has a slug but the slug is not `something`
		                    // This prevents collisions like:
		                    // pages/[post]/index.js
		                    // pages/[id]/index.js
		                    // Because currently multiple dynamic params on the same segment level are not supported
		                    if (previousSlug !== nextSlug) {
		                        // TODO: This error seems to be confusing for users, needs an error link, the description can be based on above comment.
		                        throw Object.defineProperty(new Error("You cannot use different slug names for the same dynamic path ('" + previousSlug + "' !== '" + nextSlug + "')."), "__NEXT_ERROR_CODE", {
		                            value: "E337",
		                            enumerable: false,
		                            configurable: true
		                        });
		                    }
		                }
		                slugNames.forEach((slug)=>{
		                    if (slug === nextSlug) {
		                        throw Object.defineProperty(new Error('You cannot have the same slug name "' + nextSlug + '" repeat within a single dynamic path'), "__NEXT_ERROR_CODE", {
		                            value: "E247",
		                            enumerable: false,
		                            configurable: true
		                        });
		                    }
		                    if (slug.replace(/\W/g, '') === nextSegment.replace(/\W/g, '')) {
		                        throw Object.defineProperty(new Error('You cannot have the slug names "' + slug + '" and "' + nextSlug + '" differ only by non-word symbols within a single dynamic path'), "__NEXT_ERROR_CODE", {
		                            value: "E499",
		                            enumerable: false,
		                            configurable: true
		                        });
		                    }
		                });
		                slugNames.push(nextSlug);
		            }
		            if (isCatchAll) {
		                if (isOptional) {
		                    if (this.restSlugName != null) {
		                        throw Object.defineProperty(new Error('You cannot use both an required and optional catch-all route at the same level ("[...' + this.restSlugName + ']" and "' + urlPaths[0] + '" ).'), "__NEXT_ERROR_CODE", {
		                            value: "E299",
		                            enumerable: false,
		                            configurable: true
		                        });
		                    }
		                    handleSlug(this.optionalRestSlugName, segmentName);
		                    // slugName is kept as it can only be one particular slugName
		                    this.optionalRestSlugName = segmentName;
		                    // nextSegment is overwritten to [[...]] so that it can later be sorted specifically
		                    nextSegment = '[[...]]';
		                } else {
		                    if (this.optionalRestSlugName != null) {
		                        throw Object.defineProperty(new Error('You cannot use both an optional and required catch-all route at the same level ("[[...' + this.optionalRestSlugName + ']]" and "' + urlPaths[0] + '").'), "__NEXT_ERROR_CODE", {
		                            value: "E300",
		                            enumerable: false,
		                            configurable: true
		                        });
		                    }
		                    handleSlug(this.restSlugName, segmentName);
		                    // slugName is kept as it can only be one particular slugName
		                    this.restSlugName = segmentName;
		                    // nextSegment is overwritten to [...] so that it can later be sorted specifically
		                    nextSegment = '[...]';
		                }
		            } else {
		                if (isOptional) {
		                    throw Object.defineProperty(new Error('Optional route parameters are not yet supported ("' + urlPaths[0] + '").'), "__NEXT_ERROR_CODE", {
		                        value: "E435",
		                        enumerable: false,
		                        configurable: true
		                    });
		                }
		                handleSlug(this.slugName, segmentName);
		                // slugName is kept as it can only be one particular slugName
		                this.slugName = segmentName;
		                // nextSegment is overwritten to [] so that it can later be sorted specifically
		                nextSegment = '[]';
		            }
		        }
		        // If this UrlNode doesn't have the nextSegment yet we create a new child UrlNode
		        if (!this.children.has(nextSegment)) {
		            this.children.set(nextSegment, new UrlNode());
		        }
		        this.children.get(nextSegment)._insert(urlPaths.slice(1), slugNames, isCatchAll);
		    }
		    constructor(){
		        this.placeholder = true;
		        this.children = new Map();
		        this.slugName = null;
		        this.restSlugName = null;
		        this.optionalRestSlugName = null;
		    }
		}
		function getSortedRoutes(normalizedPages) {
		    // First the UrlNode is created, and every UrlNode can have only 1 dynamic segment
		    // Eg you can't have pages/[post]/abc.js and pages/[hello]/something-else.js
		    // Only 1 dynamic segment per nesting level
		    // So in the case that is test/integration/dynamic-routing it'll be this:
		    // pages/[post]/comments.js
		    // pages/blog/[post]/comment/[id].js
		    // Both are fine because `pages/[post]` and `pages/blog` are on the same level
		    // So in this case `UrlNode` created here has `this.slugName === 'post'`
		    // And since your PR passed through `slugName` as an array basically it'd including it in too many possibilities
		    // Instead what has to be passed through is the upwards path's dynamic names
		    const root = new UrlNode();
		    // Here the `root` gets injected multiple paths, and insert will break them up into sublevels
		    normalizedPages.forEach((pagePath)=>root.insert(pagePath));
		    // Smoosh will then sort those sublevels up to the point where you get the correct route definition priority
		    return root.smoosh();
		}
		function getSortedRouteObjects(objects, getter) {
		    // We're assuming here that all the pathnames are unique, that way we can
		    // sort the list and use the index as the key.
		    const indexes = {};
		    const pathnames = [];
		    for(let i = 0; i < objects.length; i++){
		        const pathname = getter(objects[i]);
		        indexes[pathname] = i;
		        pathnames[i] = pathname;
		    }
		    // Sort the pathnames.
		    const sorted = getSortedRoutes(pathnames);
		    // Map the sorted pathnames back to the original objects using the new sorted
		    // index.
		    return sorted.map((pathname)=>objects[indexes[pathname]]);
		}

		
	} (sortedRoutes));
	return sortedRoutes;
}

var isDynamic = {};

var interceptionRoutes = {};

var appPaths = {};

var ensureLeadingSlash = {};

/**
 * For a given page path, this function ensures that there is a leading slash.
 * If there is not a leading slash, one is added, otherwise it is noop.
 */

var hasRequiredEnsureLeadingSlash;

function requireEnsureLeadingSlash () {
	if (hasRequiredEnsureLeadingSlash) return ensureLeadingSlash;
	hasRequiredEnsureLeadingSlash = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "ensureLeadingSlash", {
		    enumerable: true,
		    get: function() {
		        return ensureLeadingSlash;
		    }
		});
		function ensureLeadingSlash(path) {
		    return path.startsWith('/') ? path : "/" + path;
		}

		
	} (ensureLeadingSlash));
	return ensureLeadingSlash;
}

var hasRequiredAppPaths;

function requireAppPaths () {
	if (hasRequiredAppPaths) return appPaths;
	hasRequiredAppPaths = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    normalizeAppPath: function() {
		        return normalizeAppPath;
		    },
		    normalizeRscURL: function() {
		        return normalizeRscURL;
		    }
		});
		const _ensureleadingslash = requireEnsureLeadingSlash();
		const _segment = segment;
		function normalizeAppPath(route) {
		    return (0, _ensureleadingslash.ensureLeadingSlash)(route.split('/').reduce((pathname, segment, index, segments)=>{
		        // Empty segments are ignored.
		        if (!segment) {
		            return pathname;
		        }
		        // Groups are ignored.
		        if ((0, _segment.isGroupSegment)(segment)) {
		            return pathname;
		        }
		        // Parallel segments are ignored.
		        if (segment[0] === '@') {
		            return pathname;
		        }
		        // The last segment (if it's a leaf) should be ignored.
		        if ((segment === 'page' || segment === 'route') && index === segments.length - 1) {
		            return pathname;
		        }
		        return pathname + "/" + segment;
		    }, ''));
		}
		function normalizeRscURL(url) {
		    return url.replace(/\.rsc($|\?)/, // $1 ensures `?` is preserved
		    '$1');
		}

		
	} (appPaths));
	return appPaths;
}

var hasRequiredInterceptionRoutes;

function requireInterceptionRoutes () {
	if (hasRequiredInterceptionRoutes) return interceptionRoutes;
	hasRequiredInterceptionRoutes = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    INTERCEPTION_ROUTE_MARKERS: function() {
		        return INTERCEPTION_ROUTE_MARKERS;
		    },
		    extractInterceptionRouteInformation: function() {
		        return extractInterceptionRouteInformation;
		    },
		    isInterceptionRouteAppPath: function() {
		        return isInterceptionRouteAppPath;
		    }
		});
		const _apppaths = requireAppPaths();
		const INTERCEPTION_ROUTE_MARKERS = [
		    '(..)(..)',
		    '(.)',
		    '(..)',
		    '(...)'
		];
		function isInterceptionRouteAppPath(path) {
		    // TODO-APP: add more serious validation
		    return path.split('/').find((segment)=>INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m))) !== undefined;
		}
		function extractInterceptionRouteInformation(path) {
		    let interceptingRoute, marker, interceptedRoute;
		    for (const segment of path.split('/')){
		        marker = INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
		        if (marker) {
		            [interceptingRoute, interceptedRoute] = path.split(marker, 2);
		            break;
		        }
		    }
		    if (!interceptingRoute || !marker || !interceptedRoute) {
		        throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Must be in the format /<intercepting route>/(..|...|..)(..)/<intercepted route>"), "__NEXT_ERROR_CODE", {
		            value: "E269",
		            enumerable: false,
		            configurable: true
		        });
		    }
		    interceptingRoute = (0, _apppaths.normalizeAppPath)(interceptingRoute) // normalize the path, e.g. /(blog)/feed -> /feed
		    ;
		    switch(marker){
		        case '(.)':
		            // (.) indicates that we should match with sibling routes, so we just need to append the intercepted route to the intercepting route
		            if (interceptingRoute === '/') {
		                interceptedRoute = "/" + interceptedRoute;
		            } else {
		                interceptedRoute = interceptingRoute + '/' + interceptedRoute;
		            }
		            break;
		        case '(..)':
		            // (..) indicates that we should match at one level up, so we need to remove the last segment of the intercepting route
		            if (interceptingRoute === '/') {
		                throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Cannot use (..) marker at the root level, use (.) instead."), "__NEXT_ERROR_CODE", {
		                    value: "E207",
		                    enumerable: false,
		                    configurable: true
		                });
		            }
		            interceptedRoute = interceptingRoute.split('/').slice(0, -1).concat(interceptedRoute).join('/');
		            break;
		        case '(...)':
		            // (...) will match the route segment in the root directory, so we need to use the root directory to prepend the intercepted route
		            interceptedRoute = '/' + interceptedRoute;
		            break;
		        case '(..)(..)':
		            // (..)(..) indicates that we should match at two levels up, so we need to remove the last two segments of the intercepting route
		            const splitInterceptingRoute = interceptingRoute.split('/');
		            if (splitInterceptingRoute.length <= 2) {
		                throw Object.defineProperty(new Error("Invalid interception route: " + path + ". Cannot use (..)(..) marker at the root level or one level up."), "__NEXT_ERROR_CODE", {
		                    value: "E486",
		                    enumerable: false,
		                    configurable: true
		                });
		            }
		            interceptedRoute = splitInterceptingRoute.slice(0, -2).concat(interceptedRoute).join('/');
		            break;
		        default:
		            throw Object.defineProperty(new Error('Invariant: unexpected marker'), "__NEXT_ERROR_CODE", {
		                value: "E112",
		                enumerable: false,
		                configurable: true
		            });
		    }
		    return {
		        interceptingRoute,
		        interceptedRoute
		    };
		}

		
	} (interceptionRoutes));
	return interceptionRoutes;
}

var hasRequiredIsDynamic;

function requireIsDynamic () {
	if (hasRequiredIsDynamic) return isDynamic;
	hasRequiredIsDynamic = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "isDynamicRoute", {
		    enumerable: true,
		    get: function() {
		        return isDynamicRoute;
		    }
		});
		const _interceptionroutes = requireInterceptionRoutes();
		// Identify /.*[param].*/ in route string
		const TEST_ROUTE = /\/[^/]*\[[^/]+\][^/]*(?=\/|$)/;
		// Identify /[param]/ in route string
		const TEST_STRICT_ROUTE = /\/\[[^/]+\](?=\/|$)/;
		function isDynamicRoute(route, strict) {
		    if (strict === void 0) strict = true;
		    if ((0, _interceptionroutes.isInterceptionRouteAppPath)(route)) {
		        route = (0, _interceptionroutes.extractInterceptionRouteInformation)(route).interceptedRoute;
		    }
		    if (strict) {
		        return TEST_STRICT_ROUTE.test(route);
		    }
		    return TEST_ROUTE.test(route);
		}

		
	} (isDynamic));
	return isDynamic;
}

var hasRequiredUtils;

function requireUtils () {
	if (hasRequiredUtils) return utils;
	hasRequiredUtils = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    getSortedRouteObjects: function() {
		        return _sortedroutes.getSortedRouteObjects;
		    },
		    getSortedRoutes: function() {
		        return _sortedroutes.getSortedRoutes;
		    },
		    isDynamicRoute: function() {
		        return _isdynamic.isDynamicRoute;
		    }
		});
		const _sortedroutes = requireSortedRoutes();
		const _isdynamic = requireIsDynamic();

		
	} (utils));
	return utils;
}

var interpolateAs = {};

var routeMatcher = {};

var hasRequiredRouteMatcher;

function requireRouteMatcher () {
	if (hasRequiredRouteMatcher) return routeMatcher;
	hasRequiredRouteMatcher = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "getRouteMatcher", {
		    enumerable: true,
		    get: function() {
		        return getRouteMatcher;
		    }
		});
		const _utils = requireUtils$1();
		function getRouteMatcher(param) {
		    let { re, groups } = param;
		    return (pathname)=>{
		        const routeMatch = re.exec(pathname);
		        if (!routeMatch) return false;
		        const decode = (param)=>{
		            try {
		                return decodeURIComponent(param);
		            } catch (e) {
		                throw Object.defineProperty(new _utils.DecodeError('failed to decode param'), "__NEXT_ERROR_CODE", {
		                    value: "E528",
		                    enumerable: false,
		                    configurable: true
		                });
		            }
		        };
		        const params = {};
		        for (const [key, group] of Object.entries(groups)){
		            const match = routeMatch[group.pos];
		            if (match !== undefined) {
		                if (group.repeat) {
		                    params[key] = match.split('/').map((entry)=>decode(entry));
		                } else {
		                    params[key] = decode(match);
		                }
		            }
		        }
		        return params;
		    };
		}

		
	} (routeMatcher));
	return routeMatcher;
}

var routeRegex = {};

var constants = {};

var hasRequiredConstants;

function requireConstants () {
	if (hasRequiredConstants) return constants;
	hasRequiredConstants = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    ACTION_SUFFIX: function() {
		        return ACTION_SUFFIX;
		    },
		    APP_DIR_ALIAS: function() {
		        return APP_DIR_ALIAS;
		    },
		    CACHE_ONE_YEAR: function() {
		        return CACHE_ONE_YEAR;
		    },
		    DOT_NEXT_ALIAS: function() {
		        return DOT_NEXT_ALIAS;
		    },
		    ESLINT_DEFAULT_DIRS: function() {
		        return ESLINT_DEFAULT_DIRS;
		    },
		    GSP_NO_RETURNED_VALUE: function() {
		        return GSP_NO_RETURNED_VALUE;
		    },
		    GSSP_COMPONENT_MEMBER_ERROR: function() {
		        return GSSP_COMPONENT_MEMBER_ERROR;
		    },
		    GSSP_NO_RETURNED_VALUE: function() {
		        return GSSP_NO_RETURNED_VALUE;
		    },
		    INFINITE_CACHE: function() {
		        return INFINITE_CACHE;
		    },
		    INSTRUMENTATION_HOOK_FILENAME: function() {
		        return INSTRUMENTATION_HOOK_FILENAME;
		    },
		    MATCHED_PATH_HEADER: function() {
		        return MATCHED_PATH_HEADER;
		    },
		    MIDDLEWARE_FILENAME: function() {
		        return MIDDLEWARE_FILENAME;
		    },
		    MIDDLEWARE_LOCATION_REGEXP: function() {
		        return MIDDLEWARE_LOCATION_REGEXP;
		    },
		    NEXT_BODY_SUFFIX: function() {
		        return NEXT_BODY_SUFFIX;
		    },
		    NEXT_CACHE_IMPLICIT_TAG_ID: function() {
		        return NEXT_CACHE_IMPLICIT_TAG_ID;
		    },
		    NEXT_CACHE_REVALIDATED_TAGS_HEADER: function() {
		        return NEXT_CACHE_REVALIDATED_TAGS_HEADER;
		    },
		    NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER: function() {
		        return NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER;
		    },
		    NEXT_CACHE_SOFT_TAG_MAX_LENGTH: function() {
		        return NEXT_CACHE_SOFT_TAG_MAX_LENGTH;
		    },
		    NEXT_CACHE_TAGS_HEADER: function() {
		        return NEXT_CACHE_TAGS_HEADER;
		    },
		    NEXT_CACHE_TAG_MAX_ITEMS: function() {
		        return NEXT_CACHE_TAG_MAX_ITEMS;
		    },
		    NEXT_CACHE_TAG_MAX_LENGTH: function() {
		        return NEXT_CACHE_TAG_MAX_LENGTH;
		    },
		    NEXT_DATA_SUFFIX: function() {
		        return NEXT_DATA_SUFFIX;
		    },
		    NEXT_INTERCEPTION_MARKER_PREFIX: function() {
		        return NEXT_INTERCEPTION_MARKER_PREFIX;
		    },
		    NEXT_META_SUFFIX: function() {
		        return NEXT_META_SUFFIX;
		    },
		    NEXT_QUERY_PARAM_PREFIX: function() {
		        return NEXT_QUERY_PARAM_PREFIX;
		    },
		    NEXT_RESUME_HEADER: function() {
		        return NEXT_RESUME_HEADER;
		    },
		    NON_STANDARD_NODE_ENV: function() {
		        return NON_STANDARD_NODE_ENV;
		    },
		    PAGES_DIR_ALIAS: function() {
		        return PAGES_DIR_ALIAS;
		    },
		    PRERENDER_REVALIDATE_HEADER: function() {
		        return PRERENDER_REVALIDATE_HEADER;
		    },
		    PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER: function() {
		        return PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER;
		    },
		    PUBLIC_DIR_MIDDLEWARE_CONFLICT: function() {
		        return PUBLIC_DIR_MIDDLEWARE_CONFLICT;
		    },
		    ROOT_DIR_ALIAS: function() {
		        return ROOT_DIR_ALIAS;
		    },
		    RSC_ACTION_CLIENT_WRAPPER_ALIAS: function() {
		        return RSC_ACTION_CLIENT_WRAPPER_ALIAS;
		    },
		    RSC_ACTION_ENCRYPTION_ALIAS: function() {
		        return RSC_ACTION_ENCRYPTION_ALIAS;
		    },
		    RSC_ACTION_PROXY_ALIAS: function() {
		        return RSC_ACTION_PROXY_ALIAS;
		    },
		    RSC_ACTION_VALIDATE_ALIAS: function() {
		        return RSC_ACTION_VALIDATE_ALIAS;
		    },
		    RSC_CACHE_WRAPPER_ALIAS: function() {
		        return RSC_CACHE_WRAPPER_ALIAS;
		    },
		    RSC_MOD_REF_PROXY_ALIAS: function() {
		        return RSC_MOD_REF_PROXY_ALIAS;
		    },
		    RSC_PREFETCH_SUFFIX: function() {
		        return RSC_PREFETCH_SUFFIX;
		    },
		    RSC_SEGMENTS_DIR_SUFFIX: function() {
		        return RSC_SEGMENTS_DIR_SUFFIX;
		    },
		    RSC_SEGMENT_SUFFIX: function() {
		        return RSC_SEGMENT_SUFFIX;
		    },
		    RSC_SUFFIX: function() {
		        return RSC_SUFFIX;
		    },
		    SERVER_PROPS_EXPORT_ERROR: function() {
		        return SERVER_PROPS_EXPORT_ERROR;
		    },
		    SERVER_PROPS_GET_INIT_PROPS_CONFLICT: function() {
		        return SERVER_PROPS_GET_INIT_PROPS_CONFLICT;
		    },
		    SERVER_PROPS_SSG_CONFLICT: function() {
		        return SERVER_PROPS_SSG_CONFLICT;
		    },
		    SERVER_RUNTIME: function() {
		        return SERVER_RUNTIME;
		    },
		    SSG_FALLBACK_EXPORT_ERROR: function() {
		        return SSG_FALLBACK_EXPORT_ERROR;
		    },
		    SSG_GET_INITIAL_PROPS_CONFLICT: function() {
		        return SSG_GET_INITIAL_PROPS_CONFLICT;
		    },
		    STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR: function() {
		        return STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR;
		    },
		    UNSTABLE_REVALIDATE_RENAME_ERROR: function() {
		        return UNSTABLE_REVALIDATE_RENAME_ERROR;
		    },
		    WEBPACK_LAYERS: function() {
		        return WEBPACK_LAYERS;
		    },
		    WEBPACK_RESOURCE_QUERIES: function() {
		        return WEBPACK_RESOURCE_QUERIES;
		    }
		});
		const NEXT_QUERY_PARAM_PREFIX = 'nxtP';
		const NEXT_INTERCEPTION_MARKER_PREFIX = 'nxtI';
		const MATCHED_PATH_HEADER = 'x-matched-path';
		const PRERENDER_REVALIDATE_HEADER = 'x-prerender-revalidate';
		const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = 'x-prerender-revalidate-if-generated';
		const RSC_PREFETCH_SUFFIX = '.prefetch.rsc';
		const RSC_SEGMENTS_DIR_SUFFIX = '.segments';
		const RSC_SEGMENT_SUFFIX = '.segment.rsc';
		const RSC_SUFFIX = '.rsc';
		const ACTION_SUFFIX = '.action';
		const NEXT_DATA_SUFFIX = '.json';
		const NEXT_META_SUFFIX = '.meta';
		const NEXT_BODY_SUFFIX = '.body';
		const NEXT_CACHE_TAGS_HEADER = 'x-next-cache-tags';
		const NEXT_CACHE_REVALIDATED_TAGS_HEADER = 'x-next-revalidated-tags';
		const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = 'x-next-revalidate-tag-token';
		const NEXT_RESUME_HEADER = 'next-resume';
		const NEXT_CACHE_TAG_MAX_ITEMS = 128;
		const NEXT_CACHE_TAG_MAX_LENGTH = 256;
		const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
		const NEXT_CACHE_IMPLICIT_TAG_ID = '_N_T_';
		const CACHE_ONE_YEAR = 31536000;
		const INFINITE_CACHE = 0xfffffffe;
		const MIDDLEWARE_FILENAME = 'middleware';
		const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
		const INSTRUMENTATION_HOOK_FILENAME = 'instrumentation';
		const PAGES_DIR_ALIAS = 'private-next-pages';
		const DOT_NEXT_ALIAS = 'private-dot-next';
		const ROOT_DIR_ALIAS = 'private-next-root-dir';
		const APP_DIR_ALIAS = 'private-next-app-dir';
		const RSC_MOD_REF_PROXY_ALIAS = 'private-next-rsc-mod-ref-proxy';
		const RSC_ACTION_VALIDATE_ALIAS = 'private-next-rsc-action-validate';
		const RSC_ACTION_PROXY_ALIAS = 'private-next-rsc-server-reference';
		const RSC_CACHE_WRAPPER_ALIAS = 'private-next-rsc-cache-wrapper';
		const RSC_ACTION_ENCRYPTION_ALIAS = 'private-next-rsc-action-encryption';
		const RSC_ACTION_CLIENT_WRAPPER_ALIAS = 'private-next-rsc-action-client-wrapper';
		const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
		const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
		const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
		const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
		const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
		const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
		const GSP_NO_RETURNED_VALUE = 'Your `getStaticProps` function did not return an object. Did you forget to add a `return`?';
		const GSSP_NO_RETURNED_VALUE = 'Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?';
		const UNSTABLE_REVALIDATE_RENAME_ERROR = 'The `unstable_revalidate` property is available for general use.\n' + 'Please use `revalidate` instead.';
		const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
		const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
		const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
		const ESLINT_DEFAULT_DIRS = [
		    'app',
		    'pages',
		    'components',
		    'lib',
		    'src'
		];
		const SERVER_RUNTIME = {
		    edge: 'edge',
		    experimentalEdge: 'experimental-edge',
		    nodejs: 'nodejs'
		};
		/**
		 * The names of the webpack layers. These layers are the primitives for the
		 * webpack chunks.
		 */ const WEBPACK_LAYERS_NAMES = {
		    /**
		   * The layer for the shared code between the client and server bundles.
		   */ shared: 'shared',
		    /**
		   * The layer for server-only runtime and picking up `react-server` export conditions.
		   * Including app router RSC pages and app router custom routes and metadata routes.
		   */ reactServerComponents: 'rsc',
		    /**
		   * Server Side Rendering layer for app (ssr).
		   */ serverSideRendering: 'ssr',
		    /**
		   * The browser client bundle layer for actions.
		   */ actionBrowser: 'action-browser',
		    /**
		   * The Node.js bundle layer for the API routes.
		   */ apiNode: 'api-node',
		    /**
		   * The Edge Lite bundle layer for the API routes.
		   */ apiEdge: 'api-edge',
		    /**
		   * The layer for the middleware code.
		   */ middleware: 'middleware',
		    /**
		   * The layer for the instrumentation hooks.
		   */ instrument: 'instrument',
		    /**
		   * The layer for assets on the edge.
		   */ edgeAsset: 'edge-asset',
		    /**
		   * The browser client bundle layer for App directory.
		   */ appPagesBrowser: 'app-pages-browser',
		    /**
		   * The browser client bundle layer for Pages directory.
		   */ pagesDirBrowser: 'pages-dir-browser',
		    /**
		   * The Edge Lite bundle layer for Pages directory.
		   */ pagesDirEdge: 'pages-dir-edge',
		    /**
		   * The Node.js bundle layer for Pages directory.
		   */ pagesDirNode: 'pages-dir-node'
		};
		const WEBPACK_LAYERS = {
		    ...WEBPACK_LAYERS_NAMES,
		    GROUP: {
		        builtinReact: [
		            WEBPACK_LAYERS_NAMES.reactServerComponents,
		            WEBPACK_LAYERS_NAMES.actionBrowser
		        ],
		        serverOnly: [
		            WEBPACK_LAYERS_NAMES.reactServerComponents,
		            WEBPACK_LAYERS_NAMES.actionBrowser,
		            WEBPACK_LAYERS_NAMES.instrument,
		            WEBPACK_LAYERS_NAMES.middleware
		        ],
		        neutralTarget: [
		            // pages api
		            WEBPACK_LAYERS_NAMES.apiNode,
		            WEBPACK_LAYERS_NAMES.apiEdge
		        ],
		        clientOnly: [
		            WEBPACK_LAYERS_NAMES.serverSideRendering,
		            WEBPACK_LAYERS_NAMES.appPagesBrowser
		        ],
		        bundled: [
		            WEBPACK_LAYERS_NAMES.reactServerComponents,
		            WEBPACK_LAYERS_NAMES.actionBrowser,
		            WEBPACK_LAYERS_NAMES.serverSideRendering,
		            WEBPACK_LAYERS_NAMES.appPagesBrowser,
		            WEBPACK_LAYERS_NAMES.shared,
		            WEBPACK_LAYERS_NAMES.instrument,
		            WEBPACK_LAYERS_NAMES.middleware
		        ],
		        appPages: [
		            // app router pages and layouts
		            WEBPACK_LAYERS_NAMES.reactServerComponents,
		            WEBPACK_LAYERS_NAMES.serverSideRendering,
		            WEBPACK_LAYERS_NAMES.appPagesBrowser,
		            WEBPACK_LAYERS_NAMES.actionBrowser
		        ]
		    }
		};
		const WEBPACK_RESOURCE_QUERIES = {
		    edgeSSREntry: '__next_edge_ssr_entry__',
		    metadata: '__next_metadata__',
		    metadataRoute: '__next_metadata_route__',
		    metadataImageMeta: '__next_metadata_image_meta__'
		};

		
	} (constants));
	return constants;
}

var escapeRegexp = {};

var hasRequiredEscapeRegexp;

function requireEscapeRegexp () {
	if (hasRequiredEscapeRegexp) return escapeRegexp;
	hasRequiredEscapeRegexp = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "escapeStringRegexp", {
		    enumerable: true,
		    get: function() {
		        return escapeStringRegexp;
		    }
		});
		const reHasRegExp = /[|\\{}()[\]^$+*?.-]/;
		const reReplaceRegExp = /[|\\{}()[\]^$+*?.-]/g;
		function escapeStringRegexp(str) {
		    // see also: https://github.com/lodash/lodash/blob/2da024c3b4f9947a48517639de7560457cd4ec6c/escapeRegExp.js#L23
		    if (reHasRegExp.test(str)) {
		        return str.replace(reReplaceRegExp, '\\$&');
		    }
		    return str;
		}

		
	} (escapeRegexp));
	return escapeRegexp;
}

var hasRequiredRouteRegex;

function requireRouteRegex () {
	if (hasRequiredRouteRegex) return routeRegex;
	hasRequiredRouteRegex = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    getNamedMiddlewareRegex: function() {
		        return getNamedMiddlewareRegex;
		    },
		    getNamedRouteRegex: function() {
		        return getNamedRouteRegex;
		    },
		    getRouteRegex: function() {
		        return getRouteRegex;
		    },
		    parseParameter: function() {
		        return parseParameter;
		    }
		});
		const _constants = requireConstants();
		const _interceptionroutes = requireInterceptionRoutes();
		const _escaperegexp = requireEscapeRegexp();
		const _removetrailingslash = requireRemoveTrailingSlash();
		/**
		 * Regular expression pattern used to match route parameters.
		 * Matches both single parameters and parameter groups.
		 * Examples:
		 *   - `[[...slug]]` matches parameter group with key 'slug', repeat: true, optional: true
		 *   - `[...slug]` matches parameter group with key 'slug', repeat: true, optional: false
		 *   - `[[foo]]` matches parameter with key 'foo', repeat: false, optional: true
		 *   - `[bar]` matches parameter with key 'bar', repeat: false, optional: false
		 */ const PARAMETER_PATTERN = /^([^[]*)\[((?:\[[^\]]*\])|[^\]]+)\](.*)$/;
		function parseParameter(param) {
		    const match = param.match(PARAMETER_PATTERN);
		    if (!match) {
		        return parseMatchedParameter(param);
		    }
		    return parseMatchedParameter(match[2]);
		}
		/**
		 * Parses a matched parameter from the PARAMETER_PATTERN regex to a data structure that can be used
		 * to generate the parametrized route.
		 * Examples:
		 *   - `[...slug]` -> `{ key: 'slug', repeat: true, optional: true }`
		 *   - `...slug` -> `{ key: 'slug', repeat: true, optional: false }`
		 *   - `[foo]` -> `{ key: 'foo', repeat: false, optional: true }`
		 *   - `bar` -> `{ key: 'bar', repeat: false, optional: false }`
		 * @param param - The matched parameter to parse.
		 * @returns The parsed parameter as a data structure.
		 */ function parseMatchedParameter(param) {
		    const optional = param.startsWith('[') && param.endsWith(']');
		    if (optional) {
		        param = param.slice(1, -1);
		    }
		    const repeat = param.startsWith('...');
		    if (repeat) {
		        param = param.slice(3);
		    }
		    return {
		        key: param,
		        repeat,
		        optional
		    };
		}
		function getParametrizedRoute(route, includeSuffix, includePrefix) {
		    const groups = {};
		    let groupIndex = 1;
		    const segments = [];
		    for (const segment of (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split('/')){
		        const markerMatch = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.find((m)=>segment.startsWith(m));
		        const paramMatches = segment.match(PARAMETER_PATTERN) // Check for parameters
		        ;
		        if (markerMatch && paramMatches && paramMatches[2]) {
		            const { key, optional, repeat } = parseMatchedParameter(paramMatches[2]);
		            groups[key] = {
		                pos: groupIndex++,
		                repeat,
		                optional
		            };
		            segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(markerMatch) + "([^/]+?)");
		        } else if (paramMatches && paramMatches[2]) {
		            const { key, repeat, optional } = parseMatchedParameter(paramMatches[2]);
		            groups[key] = {
		                pos: groupIndex++,
		                repeat,
		                optional
		            };
		            if (includePrefix && paramMatches[1]) {
		                segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(paramMatches[1]));
		            }
		            let s = repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
		            // Remove the leading slash if includePrefix already added it.
		            if (includePrefix && paramMatches[1]) {
		                s = s.substring(1);
		            }
		            segments.push(s);
		        } else {
		            segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(segment));
		        }
		        // If there's a suffix, add it to the segments if it's enabled.
		        if (includeSuffix && paramMatches && paramMatches[3]) {
		            segments.push((0, _escaperegexp.escapeStringRegexp)(paramMatches[3]));
		        }
		    }
		    return {
		        parameterizedRoute: segments.join(''),
		        groups
		    };
		}
		function getRouteRegex(normalizedRoute, param) {
		    let { includeSuffix = false, includePrefix = false, excludeOptionalTrailingSlash = false } = param === void 0 ? {} : param;
		    const { parameterizedRoute, groups } = getParametrizedRoute(normalizedRoute, includeSuffix, includePrefix);
		    let re = parameterizedRoute;
		    if (!excludeOptionalTrailingSlash) {
		        re += '(?:/)?';
		    }
		    return {
		        re: new RegExp("^" + re + "$"),
		        groups: groups
		    };
		}
		/**
		 * Builds a function to generate a minimal routeKey using only a-z and minimal
		 * number of characters.
		 */ function buildGetSafeRouteKey() {
		    let i = 0;
		    return ()=>{
		        let routeKey = '';
		        let j = ++i;
		        while(j > 0){
		            routeKey += String.fromCharCode(97 + (j - 1) % 26);
		            j = Math.floor((j - 1) / 26);
		        }
		        return routeKey;
		    };
		}
		function getSafeKeyFromSegment(param) {
		    let { interceptionMarker, getSafeRouteKey, segment, routeKeys, keyPrefix, backreferenceDuplicateKeys } = param;
		    const { key, optional, repeat } = parseMatchedParameter(segment);
		    // replace any non-word characters since they can break
		    // the named regex
		    let cleanedKey = key.replace(/\W/g, '');
		    if (keyPrefix) {
		        cleanedKey = "" + keyPrefix + cleanedKey;
		    }
		    let invalidKey = false;
		    // check if the key is still invalid and fallback to using a known
		    // safe key
		    if (cleanedKey.length === 0 || cleanedKey.length > 30) {
		        invalidKey = true;
		    }
		    if (!isNaN(parseInt(cleanedKey.slice(0, 1)))) {
		        invalidKey = true;
		    }
		    if (invalidKey) {
		        cleanedKey = getSafeRouteKey();
		    }
		    const duplicateKey = cleanedKey in routeKeys;
		    if (keyPrefix) {
		        routeKeys[cleanedKey] = "" + keyPrefix + key;
		    } else {
		        routeKeys[cleanedKey] = key;
		    }
		    // if the segment has an interception marker, make sure that's part of the regex pattern
		    // this is to ensure that the route with the interception marker doesn't incorrectly match
		    // the non-intercepted route (ie /app/(.)[username] should not match /app/[username])
		    const interceptionPrefix = interceptionMarker ? (0, _escaperegexp.escapeStringRegexp)(interceptionMarker) : '';
		    let pattern;
		    if (duplicateKey && backreferenceDuplicateKeys) {
		        // Use a backreference to the key to ensure that the key is the same value
		        // in each of the placeholders.
		        pattern = "\\k<" + cleanedKey + ">";
		    } else if (repeat) {
		        pattern = "(?<" + cleanedKey + ">.+?)";
		    } else {
		        pattern = "(?<" + cleanedKey + ">[^/]+?)";
		    }
		    return optional ? "(?:/" + interceptionPrefix + pattern + ")?" : "/" + interceptionPrefix + pattern;
		}
		function getNamedParametrizedRoute(route, prefixRouteKeys, includeSuffix, includePrefix, backreferenceDuplicateKeys) {
		    const getSafeRouteKey = buildGetSafeRouteKey();
		    const routeKeys = {};
		    const segments = [];
		    for (const segment of (0, _removetrailingslash.removeTrailingSlash)(route).slice(1).split('/')){
		        const hasInterceptionMarker = _interceptionroutes.INTERCEPTION_ROUTE_MARKERS.some((m)=>segment.startsWith(m));
		        const paramMatches = segment.match(PARAMETER_PATTERN) // Check for parameters
		        ;
		        if (hasInterceptionMarker && paramMatches && paramMatches[2]) {
		            // If there's an interception marker, add it to the segments.
		            segments.push(getSafeKeyFromSegment({
		                getSafeRouteKey,
		                interceptionMarker: paramMatches[1],
		                segment: paramMatches[2],
		                routeKeys,
		                keyPrefix: prefixRouteKeys ? _constants.NEXT_INTERCEPTION_MARKER_PREFIX : undefined,
		                backreferenceDuplicateKeys
		            }));
		        } else if (paramMatches && paramMatches[2]) {
		            // If there's a prefix, add it to the segments if it's enabled.
		            if (includePrefix && paramMatches[1]) {
		                segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(paramMatches[1]));
		            }
		            let s = getSafeKeyFromSegment({
		                getSafeRouteKey,
		                segment: paramMatches[2],
		                routeKeys,
		                keyPrefix: prefixRouteKeys ? _constants.NEXT_QUERY_PARAM_PREFIX : undefined,
		                backreferenceDuplicateKeys
		            });
		            // Remove the leading slash if includePrefix already added it.
		            if (includePrefix && paramMatches[1]) {
		                s = s.substring(1);
		            }
		            segments.push(s);
		        } else {
		            segments.push("/" + (0, _escaperegexp.escapeStringRegexp)(segment));
		        }
		        // If there's a suffix, add it to the segments if it's enabled.
		        if (includeSuffix && paramMatches && paramMatches[3]) {
		            segments.push((0, _escaperegexp.escapeStringRegexp)(paramMatches[3]));
		        }
		    }
		    return {
		        namedParameterizedRoute: segments.join(''),
		        routeKeys
		    };
		}
		function getNamedRouteRegex(normalizedRoute, options) {
		    var _options_includeSuffix, _options_includePrefix, _options_backreferenceDuplicateKeys;
		    const result = getNamedParametrizedRoute(normalizedRoute, options.prefixRouteKeys, (_options_includeSuffix = options.includeSuffix) != null ? _options_includeSuffix : false, (_options_includePrefix = options.includePrefix) != null ? _options_includePrefix : false, (_options_backreferenceDuplicateKeys = options.backreferenceDuplicateKeys) != null ? _options_backreferenceDuplicateKeys : false);
		    let namedRegex = result.namedParameterizedRoute;
		    if (!options.excludeOptionalTrailingSlash) {
		        namedRegex += '(?:/)?';
		    }
		    return {
		        ...getRouteRegex(normalizedRoute, options),
		        namedRegex: "^" + namedRegex + "$",
		        routeKeys: result.routeKeys
		    };
		}
		function getNamedMiddlewareRegex(normalizedRoute, options) {
		    const { parameterizedRoute } = getParametrizedRoute(normalizedRoute, false, false);
		    const { catchAll = true } = options;
		    if (parameterizedRoute === '/') {
		        let catchAllRegex = catchAll ? '.*' : '';
		        return {
		            namedRegex: "^/" + catchAllRegex + "$"
		        };
		    }
		    const { namedParameterizedRoute } = getNamedParametrizedRoute(normalizedRoute, false, false, false, false);
		    let catchAllGroupedRegex = catchAll ? '(?:(/.*)?)' : '';
		    return {
		        namedRegex: "^" + namedParameterizedRoute + catchAllGroupedRegex + "$"
		    };
		}

		
	} (routeRegex));
	return routeRegex;
}

var hasRequiredInterpolateAs;

function requireInterpolateAs () {
	if (hasRequiredInterpolateAs) return interpolateAs;
	hasRequiredInterpolateAs = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "interpolateAs", {
		    enumerable: true,
		    get: function() {
		        return interpolateAs;
		    }
		});
		const _routematcher = requireRouteMatcher();
		const _routeregex = requireRouteRegex();
		function interpolateAs(route, asPathname, query) {
		    let interpolatedRoute = '';
		    const dynamicRegex = (0, _routeregex.getRouteRegex)(route);
		    const dynamicGroups = dynamicRegex.groups;
		    const dynamicMatches = // Try to match the dynamic route against the asPath
		    (asPathname !== route ? (0, _routematcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
		    // TODO: should this take priority; also need to change in the router.
		    query;
		    interpolatedRoute = route;
		    const params = Object.keys(dynamicGroups);
		    if (!params.every((param)=>{
		        let value = dynamicMatches[param] || '';
		        const { repeat, optional } = dynamicGroups[param];
		        // support single-level catch-all
		        // TODO: more robust handling for user-error (passing `/`)
		        let replaced = "[" + (repeat ? '...' : '') + param + "]";
		        if (optional) {
		            replaced = (!value ? '/' : '') + "[" + replaced + "]";
		        }
		        if (repeat && !Array.isArray(value)) value = [
		            value
		        ];
		        return (optional || param in dynamicMatches) && // Interpolate group into data URL if present
		        (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(// these values should be fully encoded instead of just
		        // path delimiter escaped since they are being inserted
		        // into the URL and we expect URL encoded segments
		        // when parsing dynamic route params
		        (segment)=>encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
		    })) {
		        interpolatedRoute = '' // did not satisfy all requirements
		        ;
		    // n.b. We ignore this error because we handle warning for this case in
		    // development in the `<Link>` component directly.
		    }
		    return {
		        params,
		        result: interpolatedRoute
		    };
		}

		
	} (interpolateAs));
	return interpolateAs;
}

var hasRequiredResolveHref;

function requireResolveHref () {
	if (hasRequiredResolveHref) return resolveHref.exports;
	hasRequiredResolveHref = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "resolveHref", {
		    enumerable: true,
		    get: function() {
		        return resolveHref;
		    }
		});
		const _querystring = requireQuerystring();
		const _formaturl = requireFormatUrl();
		const _omit = requireOmit();
		const _utils = requireUtils$1();
		const _normalizetrailingslash = requireNormalizeTrailingSlash();
		const _islocalurl = requireIsLocalUrl();
		const _utils1 = requireUtils();
		const _interpolateas = requireInterpolateAs();
		function resolveHref(router, href, resolveAs) {
		    // we use a dummy base url for relative urls
		    let base;
		    let urlAsString = typeof href === 'string' ? href : (0, _formaturl.formatWithValidation)(href);
		    // repeated slashes and backslashes in the URL are considered
		    // invalid and will never match a Next.js page/file
		    const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
		    const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
		    const urlParts = urlAsStringNoProto.split('?', 1);
		    if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
		        console.error("Invalid href '" + urlAsString + "' passed to next/router in page: '" + router.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
		        const normalizedUrl = (0, _utils.normalizeRepeatedSlashes)(urlAsStringNoProto);
		        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
		    }
		    // Return because it cannot be routed by the Next.js router
		    if (!(0, _islocalurl.isLocalURL)(urlAsString)) {
		        return resolveAs ? [
		            urlAsString
		        ] : urlAsString;
		    }
		    try {
		        base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
		    } catch (_) {
		        // fallback to / for invalid asPath values e.g. //
		        base = new URL('/', 'http://n');
		    }
		    try {
		        const finalUrl = new URL(urlAsString, base);
		        finalUrl.pathname = (0, _normalizetrailingslash.normalizePathTrailingSlash)(finalUrl.pathname);
		        let interpolatedAs = '';
		        if ((0, _utils1.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
		            const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
		            const { result, params } = (0, _interpolateas.interpolateAs)(finalUrl.pathname, finalUrl.pathname, query);
		            if (result) {
		                interpolatedAs = (0, _formaturl.formatWithValidation)({
		                    pathname: result,
		                    hash: finalUrl.hash,
		                    query: (0, _omit.omit)(query, params)
		                });
		            }
		        }
		        // if the origin didn't change, it means we received a relative href
		        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
		        return resolveAs ? [
		            resolvedHref,
		            interpolatedAs || resolvedHref
		        ] : resolvedHref;
		    } catch (_) {
		        return resolveAs ? [
		            urlAsString
		        ] : urlAsString;
		    }
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (resolveHref, resolveHref.exports));
	return resolveHref.exports;
}

var addLocale$1 = {exports: {}};

var addLocale = {};

var addPathPrefix = {};

var hasRequiredAddPathPrefix;

function requireAddPathPrefix () {
	if (hasRequiredAddPathPrefix) return addPathPrefix;
	hasRequiredAddPathPrefix = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "addPathPrefix", {
		    enumerable: true,
		    get: function() {
		        return addPathPrefix;
		    }
		});
		const _parsepath = requireParsePath();
		function addPathPrefix(path, prefix) {
		    if (!path.startsWith('/') || !prefix) {
		        return path;
		    }
		    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
		    return "" + prefix + pathname + query + hash;
		}

		
	} (addPathPrefix));
	return addPathPrefix;
}

var hasRequiredAddLocale$1;

function requireAddLocale$1 () {
	if (hasRequiredAddLocale$1) return addLocale;
	hasRequiredAddLocale$1 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "addLocale", {
		    enumerable: true,
		    get: function() {
		        return addLocale;
		    }
		});
		const _addpathprefix = requireAddPathPrefix();
		const _pathhasprefix = requirePathHasPrefix();
		function addLocale(path, locale, defaultLocale, ignorePrefix) {
		    // If no locale was given or the locale is the default locale, we don't need
		    // to prefix the path.
		    if (!locale || locale === defaultLocale) return path;
		    const lower = path.toLowerCase();
		    // If the path is an API path or the path already has the locale prefix, we
		    // don't need to prefix the path.
		    if (!ignorePrefix) {
		        if ((0, _pathhasprefix.pathHasPrefix)(lower, '/api')) return path;
		        if ((0, _pathhasprefix.pathHasPrefix)(lower, "/" + locale.toLowerCase())) return path;
		    }
		    // Add the locale prefix to the path.
		    return (0, _addpathprefix.addPathPrefix)(path, "/" + locale);
		}

		
	} (addLocale));
	return addLocale;
}

var hasRequiredAddLocale;

function requireAddLocale () {
	if (hasRequiredAddLocale) return addLocale$1.exports;
	hasRequiredAddLocale = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "addLocale", {
		    enumerable: true,
		    get: function() {
		        return addLocale;
		    }
		});
		const _normalizetrailingslash = requireNormalizeTrailingSlash();
		const addLocale = function(path) {
		    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
		        args[_key - 1] = arguments[_key];
		    }
		    if (process.env.__NEXT_I18N_SUPPORT) {
		        return (0, _normalizetrailingslash.normalizePathTrailingSlash)(requireAddLocale$1().addLocale(path, ...args));
		    }
		    return path;
		};

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (addLocale$1, addLocale$1.exports));
	return addLocale$1.exports;
}

var routerContext_sharedRuntime = {};

var hasRequiredRouterContext_sharedRuntime;

function requireRouterContext_sharedRuntime () {
	if (hasRequiredRouterContext_sharedRuntime) return routerContext_sharedRuntime;
	hasRequiredRouterContext_sharedRuntime = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "RouterContext", {
		    enumerable: true,
		    get: function() {
		        return RouterContext;
		    }
		});
		const _interop_require_default = _interop_require_default$1;
		const _react = /*#__PURE__*/ _interop_require_default._(React__default);
		const RouterContext = _react.default.createContext(null);
		if (process.env.NODE_ENV !== 'production') {
		    RouterContext.displayName = 'RouterContext';
		}

		
	} (routerContext_sharedRuntime));
	return routerContext_sharedRuntime;
}

var useIntersection = {exports: {}};

var requestIdleCallback = {exports: {}};

var hasRequiredRequestIdleCallback;

function requireRequestIdleCallback () {
	if (hasRequiredRequestIdleCallback) return requestIdleCallback.exports;
	hasRequiredRequestIdleCallback = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		function _export(target, all) {
		    for(var name in all)Object.defineProperty(target, name, {
		        enumerable: true,
		        get: all[name]
		    });
		}
		_export(exports, {
		    cancelIdleCallback: function() {
		        return cancelIdleCallback;
		    },
		    requestIdleCallback: function() {
		        return requestIdleCallback;
		    }
		});
		const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
		    let start = Date.now();
		    return self.setTimeout(function() {
		        cb({
		            didTimeout: false,
		            timeRemaining: function() {
		                return Math.max(0, 50 - (Date.now() - start));
		            }
		        });
		    }, 1);
		};
		const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
		    return clearTimeout(id);
		};

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (requestIdleCallback, requestIdleCallback.exports));
	return requestIdleCallback.exports;
}

var hasRequiredUseIntersection;

function requireUseIntersection () {
	if (hasRequiredUseIntersection) return useIntersection.exports;
	hasRequiredUseIntersection = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "useIntersection", {
		    enumerable: true,
		    get: function() {
		        return useIntersection;
		    }
		});
		const _react = React__default;
		const _requestidlecallback = requireRequestIdleCallback();
		const hasIntersectionObserver = typeof IntersectionObserver === 'function';
		const observers = new Map();
		const idList = [];
		function createObserver(options) {
		    const id = {
		        root: options.root || null,
		        margin: options.rootMargin || ''
		    };
		    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
		    let instance;
		    if (existing) {
		        instance = observers.get(existing);
		        if (instance) {
		            return instance;
		        }
		    }
		    const elements = new Map();
		    const observer = new IntersectionObserver((entries)=>{
		        entries.forEach((entry)=>{
		            const callback = elements.get(entry.target);
		            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
		            if (callback && isVisible) {
		                callback(isVisible);
		            }
		        });
		    }, options);
		    instance = {
		        id,
		        observer,
		        elements
		    };
		    idList.push(id);
		    observers.set(id, instance);
		    return instance;
		}
		function observe(element, callback, options) {
		    const { id, observer, elements } = createObserver(options);
		    elements.set(element, callback);
		    observer.observe(element);
		    return function unobserve() {
		        elements.delete(element);
		        observer.unobserve(element);
		        // Destroy observer when there's nothing left to watch:
		        if (elements.size === 0) {
		            observer.disconnect();
		            observers.delete(id);
		            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
		            if (index > -1) {
		                idList.splice(index, 1);
		            }
		        }
		    };
		}
		function useIntersection(param) {
		    let { rootRef, rootMargin, disabled } = param;
		    const isDisabled = disabled || !hasIntersectionObserver;
		    const [visible, setVisible] = (0, _react.useState)(false);
		    const elementRef = (0, _react.useRef)(null);
		    const setElement = (0, _react.useCallback)((element)=>{
		        elementRef.current = element;
		    }, []);
		    (0, _react.useEffect)(()=>{
		        if (hasIntersectionObserver) {
		            if (isDisabled || visible) return;
		            const element = elementRef.current;
		            if (element && element.tagName) {
		                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
		                    root: rootRef == null ? void 0 : rootRef.current,
		                    rootMargin
		                });
		                return unobserve;
		            }
		        } else {
		            if (!visible) {
		                const idleCallback = (0, _requestidlecallback.requestIdleCallback)(()=>setVisible(true));
		                return ()=>(0, _requestidlecallback.cancelIdleCallback)(idleCallback);
		            }
		        }
		    // eslint-disable-next-line react-hooks/exhaustive-deps
		    }, [
		        isDisabled,
		        rootMargin,
		        rootRef,
		        visible,
		        elementRef.current
		    ]);
		    const resetVisible = (0, _react.useCallback)(()=>{
		        setVisible(false);
		    }, []);
		    return [
		        setElement,
		        visible,
		        resetVisible
		    ];
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (useIntersection, useIntersection.exports));
	return useIntersection.exports;
}

var getDomainLocale = {exports: {}};

var normalizeLocalePath$1 = {exports: {}};

var normalizeLocalePath = {};

var hasRequiredNormalizeLocalePath$1;

function requireNormalizeLocalePath$1 () {
	if (hasRequiredNormalizeLocalePath$1) return normalizeLocalePath;
	hasRequiredNormalizeLocalePath$1 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "normalizeLocalePath", {
		    enumerable: true,
		    get: function() {
		        return normalizeLocalePath;
		    }
		});
		/**
		 * A cache of lowercased locales for each list of locales. This is stored as a
		 * WeakMap so if the locales are garbage collected, the cache entry will be
		 * removed as well.
		 */ const cache = new WeakMap();
		function normalizeLocalePath(pathname, locales) {
		    // If locales is undefined, return the pathname as is.
		    if (!locales) return {
		        pathname
		    };
		    // Get the cached lowercased locales or create a new cache entry.
		    let lowercasedLocales = cache.get(locales);
		    if (!lowercasedLocales) {
		        lowercasedLocales = locales.map((locale)=>locale.toLowerCase());
		        cache.set(locales, lowercasedLocales);
		    }
		    let detectedLocale;
		    // The first segment will be empty, because it has a leading `/`. If
		    // there is no further segment, there is no locale (or it's the default).
		    const segments = pathname.split('/', 2);
		    // If there's no second segment (ie, the pathname is just `/`), there's no
		    // locale.
		    if (!segments[1]) return {
		        pathname
		    };
		    // The second segment will contain the locale part if any.
		    const segment = segments[1].toLowerCase();
		    // See if the segment matches one of the locales. If it doesn't, there is
		    // no locale (or it's the default).
		    const index = lowercasedLocales.indexOf(segment);
		    if (index < 0) return {
		        pathname
		    };
		    // Return the case-sensitive locale.
		    detectedLocale = locales[index];
		    // Remove the `/${locale}` part of the pathname.
		    pathname = pathname.slice(detectedLocale.length + 1) || '/';
		    return {
		        pathname,
		        detectedLocale
		    };
		}

		
	} (normalizeLocalePath));
	return normalizeLocalePath;
}

var hasRequiredNormalizeLocalePath;

function requireNormalizeLocalePath () {
	if (hasRequiredNormalizeLocalePath) return normalizeLocalePath$1.exports;
	hasRequiredNormalizeLocalePath = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "normalizeLocalePath", {
		    enumerable: true,
		    get: function() {
		        return normalizeLocalePath;
		    }
		});
		const normalizeLocalePath = (pathname, locales)=>{
		    if (process.env.__NEXT_I18N_SUPPORT) {
		        return requireNormalizeLocalePath$1().normalizeLocalePath(pathname, locales);
		    }
		    return {
		        pathname,
		        detectedLocale: undefined
		    };
		};

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (normalizeLocalePath$1, normalizeLocalePath$1.exports));
	return normalizeLocalePath$1.exports;
}

var detectDomainLocale$1 = {exports: {}};

var detectDomainLocale = {};

var hasRequiredDetectDomainLocale$1;

function requireDetectDomainLocale$1 () {
	if (hasRequiredDetectDomainLocale$1) return detectDomainLocale;
	hasRequiredDetectDomainLocale$1 = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "detectDomainLocale", {
		    enumerable: true,
		    get: function() {
		        return detectDomainLocale;
		    }
		});
		function detectDomainLocale(domainItems, hostname, detectedLocale) {
		    if (!domainItems) return;
		    if (detectedLocale) {
		        detectedLocale = detectedLocale.toLowerCase();
		    }
		    for (const item of domainItems){
		        var _item_domain, _item_locales;
		        // remove port if present
		        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(':', 1)[0].toLowerCase();
		        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
		            return item;
		        }
		    }
		}

		
	} (detectDomainLocale));
	return detectDomainLocale;
}

var hasRequiredDetectDomainLocale;

function requireDetectDomainLocale () {
	if (hasRequiredDetectDomainLocale) return detectDomainLocale$1.exports;
	hasRequiredDetectDomainLocale = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "detectDomainLocale", {
		    enumerable: true,
		    get: function() {
		        return detectDomainLocale;
		    }
		});
		const detectDomainLocale = function() {
		    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
		        args[_key] = arguments[_key];
		    }
		    if (process.env.__NEXT_I18N_SUPPORT) {
		        return requireDetectDomainLocale$1().detectDomainLocale(...args);
		    }
		};

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (detectDomainLocale$1, detectDomainLocale$1.exports));
	return detectDomainLocale$1.exports;
}

var hasRequiredGetDomainLocale;

function requireGetDomainLocale () {
	if (hasRequiredGetDomainLocale) return getDomainLocale.exports;
	hasRequiredGetDomainLocale = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "getDomainLocale", {
		    enumerable: true,
		    get: function() {
		        return getDomainLocale;
		    }
		});
		const _normalizetrailingslash = requireNormalizeTrailingSlash();
		const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';
		function getDomainLocale(path, locale, locales, domainLocales) {
		    if (process.env.__NEXT_I18N_SUPPORT) {
		        const normalizeLocalePath = requireNormalizeLocalePath().normalizeLocalePath;
		        const detectDomainLocale = requireDetectDomainLocale().detectDomainLocale;
		        const target = locale || normalizeLocalePath(path, locales).detectedLocale;
		        const domain = detectDomainLocale(domainLocales, undefined, target);
		        if (domain) {
		            const proto = "http" + (domain.http ? '' : 's') + "://";
		            const finalLocale = target === domain.defaultLocale ? '' : "/" + target;
		            return "" + proto + domain.domain + (0, _normalizetrailingslash.normalizePathTrailingSlash)("" + basePath + finalLocale + path);
		        }
		        return false;
		    } else {
		        return false;
		    }
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (getDomainLocale, getDomainLocale.exports));
	return getDomainLocale.exports;
}

var addBasePath = {exports: {}};

var hasRequiredAddBasePath;

function requireAddBasePath () {
	if (hasRequiredAddBasePath) return addBasePath.exports;
	hasRequiredAddBasePath = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "addBasePath", {
		    enumerable: true,
		    get: function() {
		        return addBasePath;
		    }
		});
		const _addpathprefix = requireAddPathPrefix();
		const _normalizetrailingslash = requireNormalizeTrailingSlash();
		const basePath = process.env.__NEXT_ROUTER_BASEPATH || '';
		function addBasePath(path, required) {
		    return (0, _normalizetrailingslash.normalizePathTrailingSlash)(process.env.__NEXT_MANUAL_CLIENT_BASE_PATH && !required ? path : (0, _addpathprefix.addPathPrefix)(path, basePath));
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (addBasePath, addBasePath.exports));
	return addBasePath.exports;
}

var useMergedRef = {exports: {}};

var hasRequiredUseMergedRef;

function requireUseMergedRef () {
	if (hasRequiredUseMergedRef) return useMergedRef.exports;
	hasRequiredUseMergedRef = 1;
	(function (module, exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "useMergedRef", {
		    enumerable: true,
		    get: function() {
		        return useMergedRef;
		    }
		});
		const _react = React__default;
		function useMergedRef(refA, refB) {
		    const cleanupA = (0, _react.useRef)(null);
		    const cleanupB = (0, _react.useRef)(null);
		    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
		    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
		    // But this can cause us to leak a cleanup-ref into user code (e.g. via `<Link legacyBehavior>`),
		    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
		    // (because it hasn't been updated for React 19)
		    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
		    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
		    return (0, _react.useCallback)((current)=>{
		        if (current === null) {
		            const cleanupFnA = cleanupA.current;
		            if (cleanupFnA) {
		                cleanupA.current = null;
		                cleanupFnA();
		            }
		            const cleanupFnB = cleanupB.current;
		            if (cleanupFnB) {
		                cleanupB.current = null;
		                cleanupFnB();
		            }
		        } else {
		            if (refA) {
		                cleanupA.current = applyRef(refA, current);
		            }
		            if (refB) {
		                cleanupB.current = applyRef(refB, current);
		            }
		        }
		    }, [
		        refA,
		        refB
		    ]);
		}
		function applyRef(refA, current) {
		    if (typeof refA === 'function') {
		        const cleanup = refA(current);
		        if (typeof cleanup === 'function') {
		            return cleanup;
		        } else {
		            return ()=>refA(null);
		        }
		    } else {
		        refA.current = current;
		        return ()=>{
		            refA.current = null;
		        };
		    }
		}

		if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
		  Object.defineProperty(exports.default, '__esModule', { value: true });
		  Object.assign(exports.default, exports);
		  module.exports = exports.default;
		}

		
	} (useMergedRef, useMergedRef.exports));
	return useMergedRef.exports;
}

var errorOnce = {};

var hasRequiredErrorOnce;

function requireErrorOnce () {
	if (hasRequiredErrorOnce) return errorOnce;
	hasRequiredErrorOnce = 1;
	(function (exports) {
		Object.defineProperty(exports, "__esModule", {
		    value: true
		});
		Object.defineProperty(exports, "errorOnce", {
		    enumerable: true,
		    get: function() {
		        return errorOnce;
		    }
		});
		let errorOnce = (_)=>{};
		if (process.env.NODE_ENV !== 'production') {
		    const errors = new Set();
		    errorOnce = (msg)=>{
		        if (!errors.has(msg)) {
		            console.error(msg);
		        }
		        errors.add(msg);
		    };
		}

		
	} (errorOnce));
	return errorOnce;
}

(function (module, exports) {
	'use client';
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	function _export(target, all) {
	    for(var name in all)Object.defineProperty(target, name, {
	        enumerable: true,
	        get: all[name]
	    });
	}
	_export(exports, {
	    default: function() {
	        return _default;
	    },
	    useLinkStatus: function() {
	        return useLinkStatus;
	    }
	});
	const _interop_require_wildcard = _interop_require_wildcard$1;
	const _jsxruntime = require$$1;
	const _react = /*#__PURE__*/ _interop_require_wildcard._(React__default);
	const _resolvehref = requireResolveHref();
	const _islocalurl = requireIsLocalUrl();
	const _formaturl = requireFormatUrl();
	const _utils = requireUtils$1();
	const _addlocale = requireAddLocale();
	const _routercontextsharedruntime = requireRouterContext_sharedRuntime();
	const _useintersection = requireUseIntersection();
	const _getdomainlocale = requireGetDomainLocale();
	const _addbasepath = requireAddBasePath();
	const _usemergedref = requireUseMergedRef();
	const _erroronce = requireErrorOnce();
	const prefetched = new Set();
	function prefetch(router, href, as, options) {
	    if (typeof window === 'undefined') {
	        return;
	    }
	    if (!(0, _islocalurl.isLocalURL)(href)) {
	        return;
	    }
	    // We should only dedupe requests when experimental.optimisticClientCache is
	    // disabled.
	    if (!options.bypassPrefetchedCheck) {
	        const locale = // Let the link's locale prop override the default router locale.
	        typeof options.locale !== 'undefined' ? options.locale : 'locale' in router ? router.locale : undefined;
	        const prefetchedKey = href + '%' + as + '%' + locale;
	        // If we've already fetched the key, then don't prefetch it again!
	        if (prefetched.has(prefetchedKey)) {
	            return;
	        }
	        // Mark this URL as prefetched.
	        prefetched.add(prefetchedKey);
	    }
	    // Prefetch the JSON page if asked (only in the client)
	    // We need to handle a prefetch error here since we may be
	    // loading with priority which can reject but we don't
	    // want to force navigation since this is only a prefetch
	    router.prefetch(href, as, options).catch((err)=>{
	        if (process.env.NODE_ENV !== 'production') {
	            // rethrow to show invalid URL errors
	            throw err;
	        }
	    });
	}
	function isModifiedEvent(event) {
	    const eventTarget = event.currentTarget;
	    const target = eventTarget.getAttribute('target');
	    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
	    event.nativeEvent && event.nativeEvent.which === 2;
	}
	function linkClicked(e, router, href, as, replace, shallow, scroll, locale, onNavigate) {
	    const { nodeName } = e.currentTarget;
	    // anchors inside an svg have a lowercase nodeName
	    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
	    if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
	        // ignore click for browser’s default behavior
	        return;
	    }
	    if (!(0, _islocalurl.isLocalURL)(href)) {
	        if (replace) {
	            // browser default behavior does not replace the history state
	            // so we need to do it manually
	            e.preventDefault();
	            location.replace(href);
	        }
	        // ignore click for browser’s default behavior
	        return;
	    }
	    e.preventDefault();
	    const navigate = ()=>{
	        if (onNavigate) {
	            let isDefaultPrevented = false;
	            onNavigate({
	                preventDefault: ()=>{
	                    isDefaultPrevented = true;
	                }
	            });
	            if (isDefaultPrevented) {
	                return;
	            }
	        }
	        // If the router is an NextRouter instance it will have `beforePopState`
	        const routerScroll = scroll != null ? scroll : true;
	        if ('beforePopState' in router) {
	            router[replace ? 'replace' : 'push'](href, as, {
	                shallow,
	                locale,
	                scroll: routerScroll
	            });
	        } else {
	            router[replace ? 'replace' : 'push'](as || href, {
	                scroll: routerScroll
	            });
	        }
	    };
	    navigate();
	}
	function formatStringOrUrl(urlObjOrString) {
	    if (typeof urlObjOrString === 'string') {
	        return urlObjOrString;
	    }
	    return (0, _formaturl.formatUrl)(urlObjOrString);
	}
	/**
	 * A React component that extends the HTML `<a>` element to provide [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
	 * and client-side navigation between routes.
	 *
	 * It is the primary way to navigate between routes in Next.js.
	 *
	 * Read more: [Next.js docs: `<Link>`](https://nextjs.org/docs/app/api-reference/components/link)
	 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
	    let children;
	    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, locale, onClick, onNavigate, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, ...restProps } = props;
	    children = childrenProp;
	    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
	        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
	            children: children
	        });
	    }
	    const router = _react.default.useContext(_routercontextsharedruntime.RouterContext);
	    const prefetchEnabled = prefetchProp !== false;
	    if (process.env.NODE_ENV !== 'production') {
	        function createPropError(args) {
	            return Object.defineProperty(new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
	                value: "E319",
	                enumerable: false,
	                configurable: true
	            });
	        }
	        // TypeScript trick for type-guarding:
	        const requiredPropsGuard = {
	            href: true
	        };
	        const requiredProps = Object.keys(requiredPropsGuard);
	        requiredProps.forEach((key)=>{
	            if (key === 'href') {
	                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
	                    throw createPropError({
	                        key,
	                        expected: '`string` or `object`',
	                        actual: props[key] === null ? 'null' : typeof props[key]
	                    });
	                }
	            }
	        });
	        // TypeScript trick for type-guarding:
	        const optionalPropsGuard = {
	            as: true,
	            replace: true,
	            scroll: true,
	            shallow: true,
	            passHref: true,
	            prefetch: true,
	            locale: true,
	            onClick: true,
	            onMouseEnter: true,
	            onTouchStart: true,
	            legacyBehavior: true,
	            onNavigate: true
	        };
	        const optionalProps = Object.keys(optionalPropsGuard);
	        optionalProps.forEach((key)=>{
	            const valType = typeof props[key];
	            if (key === 'as') {
	                if (props[key] && valType !== 'string' && valType !== 'object') {
	                    throw createPropError({
	                        key,
	                        expected: '`string` or `object`',
	                        actual: valType
	                    });
	                }
	            } else if (key === 'locale') {
	                if (props[key] && valType !== 'string') {
	                    throw createPropError({
	                        key,
	                        expected: '`string`',
	                        actual: valType
	                    });
	                }
	            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
	                if (props[key] && valType !== 'function') {
	                    throw createPropError({
	                        key,
	                        expected: '`function`',
	                        actual: valType
	                    });
	                }
	            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch' || key === 'legacyBehavior') {
	                if (props[key] != null && valType !== 'boolean') {
	                    throw createPropError({
	                        key,
	                        expected: '`boolean`',
	                        actual: valType
	                    });
	                }
	            } else ;
	        });
	    }
	    const { href, as } = _react.default.useMemo(()=>{
	        if (!router) {
	            const resolvedHref = formatStringOrUrl(hrefProp);
	            return {
	                href: resolvedHref,
	                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
	            };
	        }
	        const [resolvedHref, resolvedAs] = (0, _resolvehref.resolveHref)(router, hrefProp, true);
	        return {
	            href: resolvedHref,
	            as: asProp ? (0, _resolvehref.resolveHref)(router, asProp) : resolvedAs || resolvedHref
	        };
	    }, [
	        router,
	        hrefProp,
	        asProp
	    ]);
	    const previousHref = _react.default.useRef(href);
	    const previousAs = _react.default.useRef(as);
	    // This will return the first child, if multiple are provided it will throw an error
	    let child;
	    if (legacyBehavior) {
	        if (process.env.NODE_ENV === 'development') {
	            if (onClick) {
	                console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
	            }
	            if (onMouseEnterProp) {
	                console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
	            }
	            try {
	                child = _react.default.Children.only(children);
	            } catch (err) {
	                if (!children) {
	                    throw Object.defineProperty(new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children"), "__NEXT_ERROR_CODE", {
	                        value: "E320",
	                        enumerable: false,
	                        configurable: true
	                    });
	                }
	                throw Object.defineProperty(new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
	                    value: "E266",
	                    enumerable: false,
	                    configurable: true
	                });
	            }
	        } else {
	            child = _react.default.Children.only(children);
	        }
	    } else {
	        if (process.env.NODE_ENV === 'development') {
	            if ((children == null ? void 0 : children.type) === 'a') {
	                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
	                    value: "E209",
	                    enumerable: false,
	                    configurable: true
	                });
	            }
	        }
	    }
	    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
	    const [setIntersectionRef, isVisible, resetVisible] = (0, _useintersection.useIntersection)({
	        rootMargin: '200px'
	    });
	    const setIntersectionWithResetRef = _react.default.useCallback((el)=>{
	        // Before the link getting observed, check if visible state need to be reset
	        if (previousAs.current !== as || previousHref.current !== href) {
	            resetVisible();
	            previousAs.current = as;
	            previousHref.current = href;
	        }
	        setIntersectionRef(el);
	    }, [
	        as,
	        href,
	        resetVisible,
	        setIntersectionRef
	    ]);
	    const setRef = (0, _usemergedref.useMergedRef)(setIntersectionWithResetRef, childRef);
	    // Prefetch the URL if we haven't already and it's visible.
	    _react.default.useEffect(()=>{
	        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
	        if (process.env.NODE_ENV !== 'production') {
	            return;
	        }
	        if (!router) {
	            return;
	        }
	        // If we don't need to prefetch the URL, don't do prefetch.
	        if (!isVisible || !prefetchEnabled) {
	            return;
	        }
	        // Prefetch the URL.
	        prefetch(router, href, as, {
	            locale
	        });
	    }, [
	        as,
	        href,
	        isVisible,
	        locale,
	        prefetchEnabled,
	        router == null ? void 0 : router.locale,
	        router
	    ]);
	    const childProps = {
	        ref: setRef,
	        onClick (e) {
	            if (process.env.NODE_ENV !== 'production') {
	                if (!e) {
	                    throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
	                        value: "E312",
	                        enumerable: false,
	                        configurable: true
	                    });
	                }
	            }
	            if (!legacyBehavior && typeof onClick === 'function') {
	                onClick(e);
	            }
	            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
	                child.props.onClick(e);
	            }
	            if (!router) {
	                return;
	            }
	            if (e.defaultPrevented) {
	                return;
	            }
	            linkClicked(e, router, href, as, replace, shallow, scroll, locale, onNavigate);
	        },
	        onMouseEnter (e) {
	            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
	                onMouseEnterProp(e);
	            }
	            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
	                child.props.onMouseEnter(e);
	            }
	            if (!router) {
	                return;
	            }
	            prefetch(router, href, as, {
	                locale,
	                priority: true,
	                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
	                bypassPrefetchedCheck: true
	            });
	        },
	        onTouchStart: process.env.__NEXT_LINK_NO_TOUCH_START ? undefined : function onTouchStart(e) {
	            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
	                onTouchStartProp(e);
	            }
	            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
	                child.props.onTouchStart(e);
	            }
	            if (!router) {
	                return;
	            }
	            prefetch(router, href, as, {
	                locale,
	                priority: true,
	                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
	                bypassPrefetchedCheck: true
	            });
	        }
	    };
	    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
	    // defined, we specify the current 'href', so that repetition is not needed by the user.
	    // If the url is absolute, we can bypass the logic to prepend the domain and locale.
	    if ((0, _utils.isAbsoluteUrl)(as)) {
	        childProps.href = as;
	    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
	        const curLocale = typeof locale !== 'undefined' ? locale : router == null ? void 0 : router.locale;
	        // we only render domain locales if we are currently on a domain locale
	        // so that locale links are still visitable in development/preview envs
	        const localeDomain = (router == null ? void 0 : router.isLocaleDomain) && (0, _getdomainlocale.getDomainLocale)(as, curLocale, router == null ? void 0 : router.locales, router == null ? void 0 : router.domainLocales);
	        childProps.href = localeDomain || (0, _addbasepath.addBasePath)((0, _addlocale.addLocale)(as, curLocale, router == null ? void 0 : router.defaultLocale));
	    }
	    if (legacyBehavior) {
	        if (process.env.NODE_ENV === 'development') {
	            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
	        }
	        return /*#__PURE__*/ _react.default.cloneElement(child, childProps);
	    }
	    return /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
	        ...restProps,
	        ...childProps,
	        children: children
	    });
	});
	const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)({
	    // We do not support link status in the Pages Router, so we always return false
	    pending: false
	});
	const useLinkStatus = ()=>{
	    // This behaviour is like React's useFormStatus. When the component is not under
	    // a <form> tag, it will get the default value, instead of throwing an error.
	    return (0, _react.useContext)(LinkStatusContext);
	};
	const _default = Link;

	if ((typeof exports.default === 'function' || (typeof exports.default === 'object' && exports.default !== null)) && typeof exports.default.__esModule === 'undefined') {
	  Object.defineProperty(exports.default, '__esModule', { value: true });
	  Object.assign(exports.default, exports);
	  module.exports = exports.default;
	}

	
} (link$1, link$1.exports));

var linkExports = link$1.exports;

var link = linkExports;

var Link = /*@__PURE__*/getDefaultExportFromCjs(link);

function SidebarLink({ children, href, active }) {
    const { setSidebarOpen } = useAppProvider();
    return (jsx(Link, { className: `block text-gray-800 dark:text-gray-100 transition truncate ${active ? 'group-[.is-link-group]:text-indigo-500' : 'hover:text-gray-900 dark:hover:text-white group-[.is-link-group]:text-gray-500/90 dark:group-[.is-link-group]:text-gray-400 hover:group-[.is-link-group]:text-gray-700 dark:hover:group-[.is-link-group]:text-gray-200'}`, href: href, onClick: () => setSidebarOpen(false), children: children }));
}

function SidebarLinkGroup({ children, open = false }) {
    const [openGroup, setOpenGroup] = useState(open);
    const handleClick = () => {
        setOpenGroup(!openGroup);
    };
    return (jsx("li", { className: `pl-4 pr-3 py-2 rounded-lg mb-0.5 last:mb-0 bg-linear-to-r group is-link-group ${open && 'from-indigo-500/[0.12] dark:from-indigo-500/[0.24] to-indigo-500/[0.04]'}`, children: children(handleClick, openGroup) }));
}

function Logo({ imageUrl, label }) {
    return (jsx(Link, { className: "block", href: "/", children: jsx("img", { src: imageUrl ??
                "https://app.crezlo.com/_next/static/media/cq-light.ffbf1233.png", 
            // src={pathname==="/" || pathname?.includes("features")? lightLogo.src : theme === "dark" ? lightLogo.src : lightLogo.src}
            style: {
                objectFit: "cover",
            }, width: 150, height: 150 }) }));
}

function Sidebar({ variant = "v2", menus, logoLabel, logoUrl, marketPlaceMenu = { href: "plugins", value: "plugins" }, }) {
    const sidebar = useRef(null);
    const { sidebarOpen, setSidebarOpen, sidebarExpanded, setSidebarExpanded } = useAppProvider();
    console.log("sidebarExpanded", sidebarExpanded, sidebarOpen);
    const segments = navigation.useSelectedLayoutSegments();
    const breakpoint = useWindowWidth();
    const expandOnly = !sidebarExpanded && breakpoint && breakpoint >= 1024 && breakpoint < 1536;
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current)
                return;
            if (!sidebarOpen || sidebar.current.contains(target))
                return;
            setSidebarOpen(false);
        };
        document.addEventListener("click", clickHandler);
        return () => document.removeEventListener("click", clickHandler);
    }, [sidebarOpen, setSidebarOpen]);
    // Close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27)
                return;
            setSidebarOpen(false);
        };
        document.addEventListener("keydown", keyHandler);
        return () => document.removeEventListener("keydown", keyHandler);
    }, [sidebarOpen, setSidebarOpen]);
    return (jsxs("div", { className: `min-w-fit  ${sidebarExpanded ? "sidebar-expanded" : ""}`, children: [jsx("div", { className: `fixed inset-0 bg-gray-900/30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`, "aria-hidden": "true" }), jsxs("div", { id: "sidebar", ref: sidebar, className: `flex lg:flex! flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 shrink-0 bg-white dark:bg-gray-800 p-4 transition-all duration-200 ease-in-out  ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} ${variant === "v2" ? "border-r border-gray-200 dark:border-gray-700/60" : "rounded-r-2xl shadow-xs"} `, children: [jsxs("div", { className: "flex justify-center mb-5 pr-3 sm:px-2", children: [jsxs("button", { className: "lg:hidden text-gray-500 hover:text-gray-400", onClick: () => setSidebarOpen(!sidebarOpen), "aria-controls": "sidebar", "aria-expanded": sidebarOpen, children: [jsx("span", { className: "sr-only", children: "Close sidebar" }), jsx("svg", { className: "w-6 h-6 fill-current", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" }) })] }), jsx(Logo, { imageUrl: logoUrl, label: logoLabel })] }), jsx("div", { className: "space-y-0 flex-1", children: menus?.map((menu, index) => (jsxs("div", { children: [menu?.name && (jsxs("h3", { className: "text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3", children: [jsx("span", { className: "hidden lg:block lg:sidebar-expanded:hidden text-center w-6", "aria-hidden": "true", children: "\u2022\u2022\u2022" }), jsx("span", { className: "lg:hidden lg:sidebar-expanded:block", children: menu?.name })] })), jsx("ul", { className: "mt-3", children: menu.items?.map((item) => {
                                        const isMenuActive = segments?.includes(item?.value) || item?.subMenu?.some((s) => segments?.includes(s?.value));
                                        return (jsx(SidebarLinkGroup, { open: isMenuActive, children: (handleClick, open) => {
                                                const Wrapper = item?.href ? Link : "div";
                                                return (jsxs(Fragment, { children: [jsx(Wrapper, { ...(item?.href ? { href: item?.href } : {}), 
                                                            // href="#0"
                                                            className: `block cursor-pointer text-gray-800 dark:text-gray-100 truncate transition ${isMenuActive ? "" : "hover:text-gray-900 dark:hover:text-white"}`, onClick: (e) => {
                                                                // e.preventDefault();
                                                                expandOnly ? setSidebarExpanded(true) : handleClick();
                                                            }, children: jsxs("div", { className: "flex items-center justify-between", children: [jsxs("div", { className: "flex flex-1 items-center", children: [jsx("span", { className: `shrink-0 fill-current ${isMenuActive ? "text-indigo-500" : "text-gray-400 dark:text-gray-500"}`, children: item?.icon }), jsx("span", { className: "text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 duration-200", children: item?.label })] }), item?.badge && (jsx("div", { className: "flex shrink-0 ml-2", children: jsx("span", { className: "inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded-sm", children: item?.badge }) })), !item?.href && (jsx("div", { className: "flex shrink-0 ml-2", children: jsx("svg", { className: `w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 dark:text-gray-500 ${open && "rotate-180"}`, viewBox: "0 0 12 12", children: jsx("path", { d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" }) }) }))] }) }), item?.subMenu && (jsx("div", { className: "lg:hidden lg:sidebar-expanded:block", children: jsx("ul", { className: `pl-8 mt-1 ${!open && "hidden"}`, children: item?.subMenu?.map((sub) => {
                                                                    return (jsx("li", { className: "mb-1 last:mb-0", children: jsx(SidebarLink, { href: sub?.href, active: segments?.includes(sub?.value), children: jsx("span", { className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 duration-200", children: sub?.label }) }) }, sub?.label));
                                                                }) }) }))] }));
                                            } }, item?.label));
                                    }) })] }, index))) }), jsxs("div", { className: "flex justify-between items-center mb-4", children: [sidebarExpanded ? (jsx(SidebarLink, { href: marketPlaceMenu?.href, active: segments?.includes(marketPlaceMenu?.value), children: jsxs("div", { className: "flex items-center", children: [jsx("svg", { className: `shrink-0 fill-current ${segments?.includes(marketPlaceMenu?.value) ? "text-violet-500" : "text-gray-400 dark:text-gray-500"}`, xmlns: "http://www.w3.org/2000/svg", width: "20", height: "20", viewBox: "0 0 16 16", children: jsx("path", { d: "M11.92 6.851c.044-.027.09-.05.137-.07.481-.275.758-.68.908-1.256.126-.55.169-.81.357-2.058.075-.498.144-.91.217-1.264-4.122.75-7.087 2.984-9.12 6.284a18.087 18.087 0 0 0-1.985 4.585 17.07 17.07 0 0 0-.354 1.506c-.05.265-.076.448-.086.535a1 1 0 0 1-1.988-.226c.056-.49.209-1.312.502-2.357a20.063 20.063 0 0 1 2.208-5.09C5.31 3.226 9.306.494 14.913.004a1 1 0 0 1 .954 1.494c-.237.414-.375.993-.567 2.267-.197 1.306-.244 1.586-.392 2.235-.285 1.094-.789 1.853-1.552 2.363-.748 3.816-3.976 5.06-8.515 4.326a1 1 0 0 1 .318-1.974c2.954.477 4.918.025 5.808-1.556-.628.085-1.335.121-2.127.121a1 1 0 1 1 0-2c1.458 0 2.434-.116 3.08-.429Z" }) }), jsx("span", { className: `text-md font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 duration-200 ${segments?.includes(marketPlaceMenu?.value) ? "text-indigo-500" : ""}`, children: "Market Place" })] }) })) : null, jsx("div", { className: "pl-4 pr-3 py-2", children: jsxs("button", { className: "text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400", onClick: () => {
                                        console.log("SETTING", sidebarExpanded, sidebarOpen);
                                        setSidebarExpanded(!sidebarExpanded);
                                    }, children: [jsx("span", { className: "sr-only", children: "Expand / collapse sidebar" }), jsx("svg", { className: "shrink-0 fill-current text-gray-400 dark:text-gray-500 sidebar-expanded:rotate-180", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", children: jsx("path", { d: "M15 16a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1ZM8.586 7H1a1 1 0 1 0 0 2h7.586l-2.793 2.793a1 1 0 1 0 1.414 1.414l4.5-4.5A.997.997 0 0 0 12 8.01M11.924 7.617a.997.997 0 0 0-.217-.324l-4.5-4.5a1 1 0 0 0-1.414 1.414L8.586 7M12 7.99a.996.996 0 0 0-.076-.373Z" }) })] }) })] })] })] }));
}

function ThemeToggle() {
    const { theme, setTheme } = z();
    return (jsxs("div", { children: [jsx("input", { type: "checkbox", name: "light-switch", id: "light-switch", className: "light-switch sr-only", checked: theme === 'light', onChange: () => {
                    if (theme === 'dark') {
                        return setTheme('light');
                    }
                    return setTheme('dark');
                } }), jsxs("label", { className: "flex items-center justify-center cursor-pointer w-8 h-8 hover:bg-gray-100 lg:hover:bg-gray-200 dark:hover:bg-gray-700/50 dark:lg:hover:bg-gray-800 rounded-full", htmlFor: "light-switch", children: [jsxs("svg", { className: "dark:hidden fill-current text-gray-500/80 dark:text-gray-400/80", width: 16, height: 16, viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M8 0a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0V1a1 1 0 0 1 1-1Z" }), jsx("path", { d: "M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0Zm-4 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" }), jsx("path", { d: "M13.657 3.757a1 1 0 0 0-1.414-1.414l-.354.354a1 1 0 0 0 1.414 1.414l.354-.354ZM13.5 8a1 1 0 0 1 1-1h.5a1 1 0 1 1 0 2h-.5a1 1 0 0 1-1-1ZM13.303 11.889a1 1 0 0 0-1.414 1.414l.354.354a1 1 0 0 0 1.414-1.414l-.354-.354ZM8 13.5a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0v-.5a1 1 0 0 1 1-1ZM4.111 13.303a1 1 0 1 0-1.414-1.414l-.354.354a1 1 0 1 0 1.414 1.414l.354-.354ZM0 8a1 1 0 0 1 1-1h.5a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1ZM3.757 2.343a1 1 0 1 0-1.414 1.414l.354.354A1 1 0 1 0 4.11 2.697l-.354-.354Z" })] }), jsxs("svg", { className: "hidden dark:block fill-current text-gray-500/80 dark:text-gray-400/80", width: 16, height: 16, viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", children: [jsx("path", { d: "M11.875 4.375a.625.625 0 1 0 1.25 0c.001-.69.56-1.249 1.25-1.25a.625.625 0 1 0 0-1.25 1.252 1.252 0 0 1-1.25-1.25.625.625 0 1 0-1.25 0 1.252 1.252 0 0 1-1.25 1.25.625.625 0 1 0 0 1.25c.69.001 1.249.56 1.25 1.25Z" }), jsx("path", { d: "M7.019 1.985a1.55 1.55 0 0 0-.483-1.36 1.44 1.44 0 0 0-1.53-.277C2.056 1.553 0 4.5 0 7.9 0 12.352 3.648 16 8.1 16c3.407 0 6.246-2.058 7.51-4.963a1.446 1.446 0 0 0-.25-1.55 1.554 1.554 0 0 0-1.372-.502c-4.01.552-7.539-2.987-6.97-7ZM2 7.9C2 5.64 3.193 3.664 4.961 2.6 4.82 7.245 8.72 11.158 13.36 11.04 12.265 12.822 10.341 14 8.1 14 4.752 14 2 11.248 2 7.9Z" })] }), jsx("span", { className: "sr-only", children: "Switch to light / dark version" })] })] }));
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== 'undefined' ? (React__default).useLayoutEffect : ()=>{};

/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
    const ref = (useRef)(null);
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        ref.current = fn;
    }, [
        fn
    ]);
    // @ts-ignore
    return (useCallback)((...args)=>{
        const f = ref.current;
        return f === null || f === void 0 ? void 0 : f(...args);
    }, []);
}

const $431fbd86ca7dc216$export$b204af158042fbac = (el)=>{
    var _el_ownerDocument;
    return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
const $431fbd86ca7dc216$export$f21a1ffae260145a = (el)=>{
    if (el && 'window' in el && el.window === el) return el;
    const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
    return doc.defaultView || window;
};
/**
 * Type guard that checks if a value is a Node. Verifies the presence and type of the nodeType property.
 */ function $431fbd86ca7dc216$var$isNode(value) {
    return value !== null && typeof value === 'object' && 'nodeType' in value && typeof value.nodeType === 'number';
}
function $431fbd86ca7dc216$export$af51f0f06c0f328a(node) {
    return $431fbd86ca7dc216$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && 'host' in node;
}

let $f4e2df6bd15f8569$var$_shadowDOM = false;
function $f4e2df6bd15f8569$export$98658e8c59125e6a() {
    return $f4e2df6bd15f8569$var$_shadowDOM;
}

// Source: https://github.com/microsoft/tabster/blob/a89fc5d7e332d48f68d03b1ca6e344489d1c3898/src/Shadowdomize/DOMFunctions.ts#L16


function $d4ee10de306f2510$export$4282f70798064fe0(node, otherNode) {
    if (!($f4e2df6bd15f8569$export$98658e8c59125e6a)()) return otherNode && node ? node.contains(otherNode) : false;
    if (!node || !otherNode) return false;
    let currentNode = otherNode;
    while(currentNode !== null){
        if (currentNode === node) return true;
        if (currentNode.tagName === 'SLOT' && currentNode.assignedSlot) // Element is slotted
        currentNode = currentNode.assignedSlot.parentNode;
        else if (($431fbd86ca7dc216$export$af51f0f06c0f328a)(currentNode)) // Element is in shadow root
        currentNode = currentNode.host;
        else currentNode = currentNode.parentNode;
    }
    return false;
}
const $d4ee10de306f2510$export$cd4e5573fbe2b576 = (doc = document)=>{
    var _activeElement_shadowRoot;
    if (!($f4e2df6bd15f8569$export$98658e8c59125e6a)()) return doc.activeElement;
    let activeElement = doc.activeElement;
    while(activeElement && 'shadowRoot' in activeElement && ((_activeElement_shadowRoot = activeElement.shadowRoot) === null || _activeElement_shadowRoot === void 0 ? void 0 : _activeElement_shadowRoot.activeElement))activeElement = activeElement.shadowRoot.activeElement;
    return activeElement;
};
function $d4ee10de306f2510$export$e58f029f0fbfdb29(event) {
    if (($f4e2df6bd15f8569$export$98658e8c59125e6a)() && event.target.shadowRoot) {
        if (event.composedPath) return event.composedPath()[0];
    }
    return event.target;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $c87311424ea30a05$var$testUserAgent(re) {
    var _window_navigator_userAgentData;
    if (typeof window === 'undefined' || window.navigator == null) return false;
    return ((_window_navigator_userAgentData = window.navigator['userAgentData']) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand)=>re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
    var _window_navigator_userAgentData;
    return typeof window !== 'undefined' && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator['userAgentData']) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$var$cached(fn) {
    if (process.env.NODE_ENV === 'test') return fn;
    let res = null;
    return ()=>{
        if (res == null) res = fn();
        return res;
    };
}
const $c87311424ea30a05$export$9ac100e40613ea10 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^Mac/i);
});
const $c87311424ea30a05$export$186c6964ca17d99 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
});
const $c87311424ea30a05$export$7bef049ce92e4224 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
const $c87311424ea30a05$export$fedb369cb70207f1 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
});
$c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
});
$c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
});
const $c87311424ea30a05$export$6446a186d09e379e = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
});
const $c87311424ea30a05$export$a11b0059900ceec8 = $c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/Android/i);
});
$c87311424ea30a05$var$cached(function() {
    return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
});

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
    let globalListeners = (useRef)(new Map());
    let addGlobalListener = (useCallback)((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type: type,
            eventTarget: eventTarget,
            fn: fn,
            options: options
        });
        eventTarget.addEventListener(type, fn, options);
    }, []);
    let removeGlobalListener = (useCallback)((eventTarget, type, listener, options)=>{
        var _globalListeners_current_get;
        let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (useCallback)(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    (useEffect)(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener: addGlobalListener,
        removeGlobalListener: removeGlobalListener,
        removeAllGlobalListeners: removeAllGlobalListeners
    };
}

/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $6a7db85432448f7f$export$60278871457622de(event) {
    // JAWS/NVDA with Firefox.
    if (event.mozInputSource === 0 && event.isTrusted) return true;
    // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
    // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
    // to detect TalkBack virtual clicks.
    if (($c87311424ea30a05$export$a11b0059900ceec8)() && event.pointerType) return event.type === 'click' && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $8a9cb279dc87e130$export$525bc4921d56d4a(nativeEvent) {
    let event = nativeEvent;
    event.nativeEvent = nativeEvent;
    event.isDefaultPrevented = ()=>event.defaultPrevented;
    // cancelBubble is technically deprecated in the spec, but still supported in all browsers.
    event.isPropagationStopped = ()=>event.cancelBubble;
    event.persist = ()=>{};
    return event;
}
function $8a9cb279dc87e130$export$c2b7abe5d61ec696(event, target) {
    Object.defineProperty(event, 'target', {
        value: target
    });
    Object.defineProperty(event, 'currentTarget', {
        value: target
    });
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
    let stateRef = (useRef)({
        isFocused: false,
        observer: null
    });
    // Clean up MutationObserver on unmount. See below.
    ($f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        const state = stateRef.current;
        return ()=>{
            if (state.observer) {
                state.observer.disconnect();
                state.observer = null;
            }
        };
    }, []);
    let dispatchBlur = ($8ae05eaa5c114e9c$export$7f54fc3180508a52)((e)=>{
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    });
    // This function is called during a React onFocus event.
    return (useCallback)((e)=>{
        // React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
        // Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
        // MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
        // For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
        if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            stateRef.current.isFocused = true;
            let target = e.target;
            let onBlurHandler = (e)=>{
                stateRef.current.isFocused = false;
                if (target.disabled) {
                    // For backward compatibility, dispatch a (fake) React synthetic event.
                    let event = $8a9cb279dc87e130$export$525bc4921d56d4a(e);
                    dispatchBlur(event);
                }
                // We no longer need the MutationObserver once the target is blurred.
                if (stateRef.current.observer) {
                    stateRef.current.observer.disconnect();
                    stateRef.current.observer = null;
                }
            };
            target.addEventListener('focusout', onBlurHandler, {
                once: true
            });
            stateRef.current.observer = new MutationObserver(()=>{
                if (stateRef.current.isFocused && target.disabled) {
                    var _stateRef_current_observer;
                    (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
                    let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
                    target.dispatchEvent(new FocusEvent('blur', {
                        relatedTarget: relatedTargetEl
                    }));
                    target.dispatchEvent(new FocusEvent('focusout', {
                        bubbles: true,
                        relatedTarget: relatedTargetEl
                    }));
                }
            });
            stateRef.current.observer.observe(target, {
                attributes: true,
                attributeFilter: [
                    'disabled'
                ]
            });
        }
    }, [
        dispatchBlur
    ]);
}
let $8a9cb279dc87e130$export$fda7da73ab5d4c48 = false;

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions




let $507fabe10e71c6fb$var$currentModality = null;
let $507fabe10e71c6fb$var$changeHandlers = new Set();
let $507fabe10e71c6fb$export$d90243b58daecda7 = new Map(); // We use a map here to support setting event listeners across multiple document objects.
let $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
let $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
// Only Tab or Esc keys will make focus visible on text input elements
const $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
    Tab: true,
    Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
    for (let handler of $507fabe10e71c6fb$var$changeHandlers)handler(modality, e);
}
/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
 */ function $507fabe10e71c6fb$var$isValidKey(e) {
    // Control and Shift keys trigger when navigating back to the tab with keyboard.
    return !(e.metaKey || !($c87311424ea30a05$export$9ac100e40613ea10)() && e.altKey || e.ctrlKey || e.key === 'Control' || e.key === 'Shift' || e.key === 'Meta');
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    if ($507fabe10e71c6fb$var$isValidKey(e)) {
        $507fabe10e71c6fb$var$currentModality = 'keyboard';
        $507fabe10e71c6fb$var$triggerChangeHandlers('keyboard', e);
    }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e) {
    $507fabe10e71c6fb$var$currentModality = 'pointer';
    if (e.type === 'mousedown' || e.type === 'pointerdown') {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$triggerChangeHandlers('pointer', e);
    }
}
function $507fabe10e71c6fb$var$handleClickEvent(e) {
    if (($6a7db85432448f7f$export$60278871457622de)(e)) {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$currentModality = 'virtual';
    }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e) {
    // Firefox fires two extra focus events when the user first clicks into an iframe:
    // first on the window, then on the document. We ignore these events so they don't
    // cause keyboard focus rings to appear.
    if (e.target === window || e.target === document || ($8a9cb279dc87e130$export$fda7da73ab5d4c48) || !e.isTrusted) return;
    // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
    // This occurs, for example, when navigating a form with the next/previous buttons on iOS.
    if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
        $507fabe10e71c6fb$var$currentModality = 'virtual';
        $507fabe10e71c6fb$var$triggerChangeHandlers('virtual', e);
    }
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
    // When the window is blurred, reset state. This is necessary when tabbing out of the window,
    // for example, since a subsequent focus event won't be fired.
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */ function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
    if (typeof window === 'undefined' || typeof document === 'undefined' || $507fabe10e71c6fb$export$d90243b58daecda7.get(($431fbd86ca7dc216$export$f21a1ffae260145a)(element))) return;
    const windowObject = ($431fbd86ca7dc216$export$f21a1ffae260145a)(element);
    const documentObject = ($431fbd86ca7dc216$export$b204af158042fbac)(element);
    // Programmatic focus() calls shouldn't affect the current input modality.
    // However, we need to detect other cases when a focus event occurs without
    // a preceding user event (e.g. screen reader focus). Overriding the focus
    // method on HTMLElement.prototype is a bit hacky, but works.
    let focus = windowObject.HTMLElement.prototype.focus;
    windowObject.HTMLElement.prototype.focus = function() {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        focus.apply(this, arguments);
    };
    documentObject.addEventListener('keydown', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.addEventListener('keyup', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.addEventListener('click', $507fabe10e71c6fb$var$handleClickEvent, true);
    // Register focus events on the window so they are sure to happen
    // before React's event listeners (registered on the document).
    windowObject.addEventListener('focus', $507fabe10e71c6fb$var$handleFocusEvent, true);
    windowObject.addEventListener('blur', $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        documentObject.addEventListener('pointerdown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('pointermove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('pointerup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else if (process.env.NODE_ENV === 'test') {
        documentObject.addEventListener('mousedown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('mousemove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener('mouseup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    // Add unmount handler
    windowObject.addEventListener('beforeunload', ()=>{
        $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
    }, {
        once: true
    });
    $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
        focus: focus
    });
}
const $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener)=>{
    const windowObject = ($431fbd86ca7dc216$export$f21a1ffae260145a)(element);
    const documentObject = ($431fbd86ca7dc216$export$b204af158042fbac)(element);
    if (loadListener) documentObject.removeEventListener('DOMContentLoaded', loadListener);
    if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
    windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
    documentObject.removeEventListener('keydown', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.removeEventListener('keyup', $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.removeEventListener('click', $507fabe10e71c6fb$var$handleClickEvent, true);
    windowObject.removeEventListener('focus', $507fabe10e71c6fb$var$handleFocusEvent, true);
    windowObject.removeEventListener('blur', $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== 'undefined') {
        documentObject.removeEventListener('pointerdown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('pointermove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('pointerup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else if (process.env.NODE_ENV === 'test') {
        documentObject.removeEventListener('mousedown', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('mousemove', $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener('mouseup', $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
    const documentObject = ($431fbd86ca7dc216$export$b204af158042fbac)(element);
    let loadListener;
    if (documentObject.readyState !== 'loading') $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    else {
        loadListener = ()=>{
            $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
        };
        documentObject.addEventListener('DOMContentLoaded', loadListener);
    }
    return ()=>$507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
// Server-side rendering does not have the document object defined
// eslint-disable-next-line no-restricted-globals
if (typeof document !== 'undefined') $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
    return $507fabe10e71c6fb$var$currentModality !== 'pointer';
}
const $507fabe10e71c6fb$var$nonTextInputTypes = new Set([
    'checkbox',
    'radio',
    'range',
    'color',
    'file',
    'image',
    'button',
    'submit',
    'reset'
]);
/**
 * If this is attached to text input component, return if the event is a focus event (Tab/Escape keys pressed) so that
 * focus visible style can be properly set.
 */ function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e) {
    let document1 = ($431fbd86ca7dc216$export$b204af158042fbac)(e === null || e === void 0 ? void 0 : e.target);
    const IHTMLInputElement = typeof window !== 'undefined' ? ($431fbd86ca7dc216$export$f21a1ffae260145a)(e === null || e === void 0 ? void 0 : e.target).HTMLInputElement : HTMLInputElement;
    const IHTMLTextAreaElement = typeof window !== 'undefined' ? ($431fbd86ca7dc216$export$f21a1ffae260145a)(e === null || e === void 0 ? void 0 : e.target).HTMLTextAreaElement : HTMLTextAreaElement;
    const IHTMLElement = typeof window !== 'undefined' ? ($431fbd86ca7dc216$export$f21a1ffae260145a)(e === null || e === void 0 ? void 0 : e.target).HTMLElement : HTMLElement;
    const IKeyboardEvent = typeof window !== 'undefined' ? ($431fbd86ca7dc216$export$f21a1ffae260145a)(e === null || e === void 0 ? void 0 : e.target).KeyboardEvent : KeyboardEvent;
    // For keyboard events that occur on a non-input element that will move focus into input element (aka ArrowLeft going from Datepicker button to the main input group)
    // we need to rely on the user passing isTextInput into here. This way we can skip toggling focus visiblity for said input element
    isTextInput = isTextInput || document1.activeElement instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(document1.activeElement.type) || document1.activeElement instanceof IHTMLTextAreaElement || document1.activeElement instanceof IHTMLElement && document1.activeElement.isContentEditable;
    return !(isTextInput && modality === 'keyboard' && e instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    (useEffect)(()=>{
        let handler = (modality, e)=>{
            // We want to early return for any keyboard events that occur inside text inputs EXCEPT for Tab and Escape
            if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e)) return;
            fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
        };
        $507fabe10e71c6fb$var$changeHandlers.add(handler);
        return ()=>{
            $507fabe10e71c6fb$var$changeHandlers.delete(handler);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions



function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
    let { isDisabled: isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange: onFocusChange } = props;
    const onBlur = (useCallback)((e)=>{
        if (e.target === e.currentTarget) {
            if (onBlurProp) onBlurProp(e);
            if (onFocusChange) onFocusChange(false);
            return true;
        }
    }, [
        onBlurProp,
        onFocusChange
    ]);
    const onSyntheticFocus = ($8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
    const onFocus = (useCallback)((e)=>{
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        const ownerDocument = ($431fbd86ca7dc216$export$b204af158042fbac)(e.target);
        const activeElement = ownerDocument ? ($d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument) : ($d4ee10de306f2510$export$cd4e5573fbe2b576)();
        if (e.target === e.currentTarget && activeElement === ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent)) {
            if (onFocusProp) onFocusProp(e);
            if (onFocusChange) onFocusChange(true);
            onSyntheticFocus(e);
        }
    }, [
        onFocusChange,
        onFocusProp,
        onSyntheticFocus
    ]);
    return {
        focusProps: {
            onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : undefined,
            onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : undefined
        }
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions



function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
    let { isDisabled: isDisabled, onBlurWithin: onBlurWithin, onFocusWithin: onFocusWithin, onFocusWithinChange: onFocusWithinChange } = props;
    let state = (useRef)({
        isFocusWithin: false
    });
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = ($03deb23ff14920c4$export$4eaf04e54aa8eed6)();
    let onBlur = (useCallback)((e)=>{
        // Ignore events bubbling through portals.
        if (!e.currentTarget.contains(e.target)) return;
        // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
        // when moving focus inside the element. Only trigger if the currentTarget doesn't
        // include the relatedTarget (where focus is moving).
        if (state.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
            state.current.isFocusWithin = false;
            removeAllGlobalListeners();
            if (onBlurWithin) onBlurWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(false);
        }
    }, [
        onBlurWithin,
        onFocusWithinChange,
        state,
        removeAllGlobalListeners
    ]);
    let onSyntheticFocus = ($8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
    let onFocus = (useCallback)((e)=>{
        // Ignore events bubbling through portals.
        if (!e.currentTarget.contains(e.target)) return;
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        const ownerDocument = ($431fbd86ca7dc216$export$b204af158042fbac)(e.target);
        const activeElement = ($d4ee10de306f2510$export$cd4e5573fbe2b576)(ownerDocument);
        if (!state.current.isFocusWithin && activeElement === ($d4ee10de306f2510$export$e58f029f0fbfdb29)(e.nativeEvent)) {
            if (onFocusWithin) onFocusWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(true);
            state.current.isFocusWithin = true;
            onSyntheticFocus(e);
            // Browsers don't fire blur events when elements are removed from the DOM.
            // However, if a focus event occurs outside the element we're tracking, we
            // can manually fire onBlur.
            let currentTarget = e.currentTarget;
            addGlobalListener(ownerDocument, 'focus', (e)=>{
                if (state.current.isFocusWithin && !($d4ee10de306f2510$export$4282f70798064fe0)(currentTarget, e.target)) {
                    let nativeEvent = new ownerDocument.defaultView.FocusEvent('blur', {
                        relatedTarget: e.target
                    });
                    ($8a9cb279dc87e130$export$c2b7abe5d61ec696)(nativeEvent, currentTarget);
                    let event = ($8a9cb279dc87e130$export$525bc4921d56d4a)(nativeEvent);
                    onBlur(event);
                }
            }, {
                capture: true
            });
        }
    }, [
        onFocusWithin,
        onFocusWithinChange,
        onSyntheticFocus,
        addGlobalListener,
        onBlur
    ]);
    if (isDisabled) return {
        focusWithinProps: {
            // These cannot be null, that would conflict in mergeProps
            onFocus: undefined,
            onBlur: undefined
        }
    };
    return {
        focusWithinProps: {
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions


// iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
// We want to ignore these emulated events so they do not trigger hover behavior.
// See https://bugs.webkit.org/show_bug.cgi?id=214609.
let $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
let $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
    // Clear globalIgnoreEmulatedMouseEvents after a short timeout. iOS fires onPointerEnter
    // with pointerType="mouse" immediately after onPointerUp and before onFocus. On other
    // devices that don't have this quirk, we don't want to ignore a mouse hover sometime in
    // the distant future because a user previously touched the element.
    setTimeout(()=>{
        $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
    }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e) {
    if (e.pointerType === 'touch') $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
    if (typeof document === 'undefined') return;
    if (typeof PointerEvent !== 'undefined') document.addEventListener('pointerup', $6179b936705e76d3$var$handleGlobalPointerEvent);
    else if (process.env.NODE_ENV === 'test') document.addEventListener('touchend', $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    $6179b936705e76d3$var$hoverCount++;
    return ()=>{
        $6179b936705e76d3$var$hoverCount--;
        if ($6179b936705e76d3$var$hoverCount > 0) return;
        if (typeof PointerEvent !== 'undefined') document.removeEventListener('pointerup', $6179b936705e76d3$var$handleGlobalPointerEvent);
        else if (process.env.NODE_ENV === 'test') document.removeEventListener('touchend', $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, isDisabled: isDisabled } = props;
    let [isHovered, setHovered] = (useState)(false);
    let state = (useRef)({
        isHovered: false,
        ignoreEmulatedMouseEvents: false,
        pointerType: '',
        target: null
    }).current;
    (useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = ($03deb23ff14920c4$export$4eaf04e54aa8eed6)();
    let { hoverProps: hoverProps, triggerHoverEnd: triggerHoverEnd } = (useMemo)(()=>{
        let triggerHoverStart = (event, pointerType)=>{
            state.pointerType = pointerType;
            if (isDisabled || pointerType === 'touch' || state.isHovered || !event.currentTarget.contains(event.target)) return;
            state.isHovered = true;
            let target = event.currentTarget;
            state.target = target;
            // When an element that is hovered over is removed, no pointerleave event is fired by the browser,
            // even though the originally hovered target may have shrunk in size so it is no longer hovered.
            // However, a pointerover event will be fired on the new target the mouse is over.
            // In Chrome this happens immediately. In Safari and Firefox, it happens upon moving the mouse one pixel.
            addGlobalListener(($431fbd86ca7dc216$export$b204af158042fbac)(event.target), 'pointerover', (e)=>{
                if (state.isHovered && state.target && !($d4ee10de306f2510$export$4282f70798064fe0)(state.target, e.target)) triggerHoverEnd(e, e.pointerType);
            }, {
                capture: true
            });
            if (onHoverStart) onHoverStart({
                type: 'hoverstart',
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(true);
            setHovered(true);
        };
        let triggerHoverEnd = (event, pointerType)=>{
            let target = state.target;
            state.pointerType = '';
            state.target = null;
            if (pointerType === 'touch' || !state.isHovered || !target) return;
            state.isHovered = false;
            removeAllGlobalListeners();
            if (onHoverEnd) onHoverEnd({
                type: 'hoverend',
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(false);
            setHovered(false);
        };
        let hoverProps = {};
        if (typeof PointerEvent !== 'undefined') {
            hoverProps.onPointerEnter = (e)=>{
                if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e.pointerType === 'mouse') return;
                triggerHoverStart(e, e.pointerType);
            };
            hoverProps.onPointerLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, e.pointerType);
            };
        } else if (process.env.NODE_ENV === 'test') {
            hoverProps.onTouchStart = ()=>{
                state.ignoreEmulatedMouseEvents = true;
            };
            hoverProps.onMouseEnter = (e)=>{
                if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e, 'mouse');
                state.ignoreEmulatedMouseEvents = false;
            };
            hoverProps.onMouseLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, 'mouse');
            };
        }
        return {
            hoverProps: hoverProps,
            triggerHoverEnd: triggerHoverEnd
        };
    }, [
        onHoverStart,
        onHoverChange,
        onHoverEnd,
        isDisabled,
        state,
        addGlobalListener,
        removeAllGlobalListeners
    ]);
    (useEffect)(()=>{
        // Call the triggerHoverEnd as soon as isDisabled changes to true
        // Safe to call triggerHoverEnd, it will early return if we aren't currently hovering
        if (isDisabled) triggerHoverEnd({
            currentTarget: state.target
        }, state.pointerType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled
    ]);
    return {
        hoverProps: hoverProps,
        isHovered: isHovered
    };
}

function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
    let { autoFocus: autoFocus = false, isTextInput: isTextInput, within: within } = props;
    let state = (useRef)({
        isFocused: false,
        isFocusVisible: autoFocus || ($507fabe10e71c6fb$export$b9b3dfddab17db27)()
    });
    let [isFocused, setFocused] = (useState)(false);
    let [isFocusVisibleState, setFocusVisible] = (useState)(()=>state.current.isFocused && state.current.isFocusVisible);
    let updateState = (useCallback)(()=>setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
    let onFocusChange = (useCallback)((isFocused)=>{
        state.current.isFocused = isFocused;
        setFocused(isFocused);
        updateState();
    }, [
        updateState
    ]);
    ($507fabe10e71c6fb$export$ec71b4b83ac08ec3)((isFocusVisible)=>{
        state.current.isFocusVisible = isFocusVisible;
        updateState();
    }, [], {
        isTextInput: isTextInput
    });
    let { focusProps: focusProps } = ($a1ea59d68270f0dd$export$f8168d8dd8fd66e6)({
        isDisabled: within,
        onFocusChange: onFocusChange
    });
    let { focusWithinProps: focusWithinProps } = ($9ab94262bd0047c7$export$420e68273165f4ec)({
        isDisabled: !within,
        onFocusWithinChange: onFocusChange
    });
    return {
        isFocused: isFocused,
        isFocusVisible: isFocusVisibleState,
        focusProps: within ? focusWithinProps : focusProps
    };
}

var i$5=Object.defineProperty;var d$3=(t,e,n)=>e in t?i$5(t,e,{enumerable:true,configurable:true,writable:true,value:n}):t[e]=n;var r$4=(t,e,n)=>(d$3(t,typeof e!="symbol"?e+"":e,n),n);let o$9 = class o{constructor(){r$4(this,"current",this.detect());r$4(this,"handoffState","pending");r$4(this,"currentId",0);}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e);}reset(){this.set(this.detect());}nextId(){return ++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window=="undefined"||typeof document=="undefined"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete");}get isHandoffComplete(){return this.handoffState==="complete"}};let s$8=new o$9;

function o$8(n){var e,r;return s$8.isServer?null:n?"ownerDocument"in n?n.ownerDocument:"current"in n?(r=(e=n.current)==null?void 0:e.ownerDocument)!=null?r:document:null:document}

function t$4(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}));}

function o$7(){let s=[],r={addEventListener(e,t,n,i){return e.addEventListener(t,n,i),r.add(()=>e.removeEventListener(t,n,i))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:true};return t$4(()=>{t.current&&e[0]();}),r.add(()=>{t.current=false;})},style(e,t,n){let i=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:i});})},group(e){let t=o$7();return e(t),this.add(()=>t.dispose())},add(e){return s.includes(e)||s.push(e),()=>{let t=s.indexOf(e);if(t>=0)for(let n of s.splice(t,1))n();}},dispose(){for(let e of s.splice(0))e();}};return r}

function p$4(){let[e]=useState(o$7);return useEffect(()=>()=>e.dispose(),[e]),e}

let n$5=(e,t)=>{s$8.isServer?useEffect(e,t):useLayoutEffect(e,t);};

function s$7(e){let r=useRef(e);return n$5(()=>{r.current=e;},[e]),r}

let o$6=function(t){let e=s$7(t);return React__default.useCallback((...r)=>e.current(...r),[e])};

function E$4(e){let t=e.width/2,n=e.height/2;return {top:e.clientY-n,right:e.clientX+t,bottom:e.clientY+n,left:e.clientX-t}}function P$2(e,t){return !(!e||!t||e.right<t.left||e.left>t.right||e.bottom<t.top||e.top>t.bottom)}function w$4({disabled:e=false}={}){let t=useRef(null),[n,l]=useState(false),r=p$4(),o=o$6(()=>{t.current=null,l(false),r.dispose();}),f=o$6(s=>{if(r.dispose(),t.current===null){t.current=s.currentTarget,l(true);{let i=o$8(s.currentTarget);r.addEventListener(i,"pointerup",o,false),r.addEventListener(i,"pointermove",c=>{if(t.current){let p=E$4(c);l(P$2(p,t.current.getBoundingClientRect()));}},false),r.addEventListener(i,"pointercancel",o,false);}}});return {pressed:n,pressProps:e?{}:{onPointerDown:f,onPointerUp:o,onClick:o}}}

let e$3=createContext(void 0);function a$b(){return useContext(e$3)}

function t$3(...r){return Array.from(new Set(r.flatMap(n=>typeof n=="string"?n.split(" "):[]))).filter(Boolean).join(" ")}

function u$8(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u$8),t}

var O$3=(a=>(a[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a))(O$3||{}),A$1=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(A$1||{});function L$3(){let n=U$2();return useCallback(r=>C$4({mergeRefs:n,...r}),[n])}function C$4({ourProps:n,theirProps:r,slot:e,defaultTag:a,features:s,visible:t=true,name:l,mergeRefs:i}){i=i!=null?i:$$1;let o=P$1(r,n);if(t)return F$4(o,e,a,l,i);let y=s!=null?s:0;if(y&2){let{static:f=false,...u}=o;if(f)return F$4(u,e,a,l,i)}if(y&1){let{unmount:f=true,...u}=o;return u$8(f?0:1,{[0](){return null},[1](){return F$4({...u,hidden:true,style:{display:"none"}},e,a,l,i)}})}return F$4(o,e,a,l,i)}function F$4(n,r={},e,a,s){let{as:t=e,children:l,refName:i="ref",...o}=h$4(n,["unmount","static"]),y=n.ref!==void 0?{[i]:n.ref}:{},f=typeof l=="function"?l(r):l;"className"in o&&o.className&&typeof o.className=="function"&&(o.className=o.className(r)),o["aria-labelledby"]&&o["aria-labelledby"]===o.id&&(o["aria-labelledby"]=void 0);let u={};if(r){let d=false,p=[];for(let[c,T]of Object.entries(r))typeof T=="boolean"&&(d=true),T===true&&p.push(c.replace(/([A-Z])/g,g=>`-${g.toLowerCase()}`));if(d){u["data-headlessui-state"]=p.join(" ");for(let c of p)u[`data-${c}`]="";}}if(t===Fragment$1&&(Object.keys(m$4(o)).length>0||Object.keys(m$4(u)).length>0))if(!isValidElement(f)||Array.isArray(f)&&f.length>1){if(Object.keys(m$4(o)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(m$4(o)).concat(Object.keys(m$4(u))).map(d=>`  - ${d}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(d=>`  - ${d}`).join(`
`)].join(`
`))}else {let d=f.props,p=d==null?void 0:d.className,c=typeof p=="function"?(...R)=>t$3(p(...R),o.className):t$3(p,o.className),T=c?{className:c}:{},g=P$1(f.props,m$4(h$4(o,["ref"])));for(let R in u)R in g&&delete u[R];return cloneElement(f,Object.assign({},g,u,y,{ref:s(H$2(f),y.ref)},T))}return createElement(t,Object.assign({},h$4(o,["ref"]),t!==Fragment$1&&y,t!==Fragment$1&&u),f)}function U$2(){let n=useRef([]),r=useCallback(e=>{for(let a of n.current)a!=null&&(typeof a=="function"?a(e):a.current=e);},[]);return (...e)=>{if(!e.every(a=>a==null))return n.current=e,r}}function $$1(...n){return n.every(r=>r==null)?void 0:r=>{for(let e of n)e!=null&&(typeof e=="function"?e(r):e.current=r);}}function P$1(...n){if(n.length===0)return {};if(n.length===1)return n[0];let r={},e={};for(let s of n)for(let t in s)t.startsWith("on")&&typeof s[t]=="function"?((e[t])!=null||(e[t]=[]),e[t].push(s[t])):r[t]=s[t];if(r.disabled||r["aria-disabled"])for(let s in e)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s)&&(e[s]=[t=>{var l;return (l=t==null?void 0:t.preventDefault)==null?void 0:l.call(t)}]);for(let s in e)Object.assign(r,{[s](t,...l){let i=e[s];for(let o of i){if((t instanceof Event||(t==null?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;o(t,...l);}}});return r}function _$2(...n){if(n.length===0)return {};if(n.length===1)return n[0];let r={},e={};for(let s of n)for(let t in s)t.startsWith("on")&&typeof s[t]=="function"?((e[t])!=null||(e[t]=[]),e[t].push(s[t])):r[t]=s[t];for(let s in e)Object.assign(r,{[s](...t){let l=e[s];for(let i of l)i==null||i(...t);}});return r}function K(n){var r;return Object.assign(forwardRef(n),{displayName:(r=n.displayName)!=null?r:n.name})}function m$4(n){let r=Object.assign({},n);for(let e in r)r[e]===void 0&&delete r[e];return r}function h$4(n,r=[]){let e=Object.assign({},n);for(let a of r)a in e&&delete e[a];return e}function H$2(n){return React__default.version.split(".")[0]>="19"?n.props.ref:n.ref}

let e$2=createContext(void 0);function u$7(){return useContext(e$2)}

function o$5(e){return typeof e!="object"||e===null?false:"nodeType"in e}function t$2(e){return o$5(e)&&"tagName"in e}function n$4(e){return t$2(e)&&"accessKey"in e}function i$4(e){return t$2(e)&&"tabIndex"in e}function r$3(e){return t$2(e)&&"style"in e}function u$6(e){return n$4(e)&&e.nodeName==="IFRAME"}function l$1(e){return n$4(e)&&e.nodeName==="INPUT"}function m$3(e){return n$4(e)&&e.nodeName==="LABEL"}function a$a(e){return n$4(e)&&e.nodeName==="FIELDSET"}function E$3(e){return n$4(e)&&e.nodeName==="LEGEND"}function L$2(e){return t$2(e)?e.matches('a[href],audio[controls],button,details,embed,iframe,img[usemap],input:not([type="hidden"]),label,select,textarea,video[controls]'):false}

function s$6(l){let e=l.parentElement,t=null;for(;e&&!a$a(e);)E$3(e)&&(t=e),e=e.parentElement;let i=(e==null?void 0:e.getAttribute("disabled"))==="";return i&&r$2(t)?false:i}function r$2(l){if(!l)return  false;let e=l.previousElementSibling;for(;e!==null;){if(E$3(e))return  false;e=e.previousElementSibling;}return  true}

let u$5=Symbol();function T$2(t,n=true){return Object.assign(t,{[u$5]:n})}function y$6(...t){let n=useRef(t);useEffect(()=>{n.current=t;},[t]);let c=o$6(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e);});return t.every(e=>e==null||(e==null?void 0:e[u$5]))?void 0:c}

let a$9=createContext(null);a$9.displayName="DescriptionContext";function f$7(){let r=useContext(a$9);if(r===null){let e=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(e,f$7),e}return r}function w$3(){let[r,e]=useState([]);return [r.length>0?r.join(" "):void 0,useMemo(()=>function(t){let i=o$6(n=>(e(s=>[...s,n]),()=>e(s=>{let o=s.slice(),p=o.indexOf(n);return p!==-1&&o.splice(p,1),o}))),l=useMemo(()=>({register:i,slot:t.slot,name:t.name,props:t.props,value:t.value}),[i,t.slot,t.name,t.props,t.value]);return React__default.createElement(a$9.Provider,{value:l},t.children)},[e])]}let S$3="p";function C$3(r,e){let d=useId$1(),t=a$b(),{id:i=`headlessui-description-${d}`,...l}=r,n=f$7(),s=y$6(e);n$5(()=>n.register(i),[i,n.register]);let o=t||false,p=useMemo(()=>({...n.slot,disabled:o}),[n.slot,o]),D={ref:s,...n.props,id:i};return L$3()({ourProps:D,theirProps:l,slot:p,defaultTag:S$3,name:n.name||"Description"})}let _$1=K(C$3);Object.assign(_$1,{});

var o$4=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o$4||{});

let L$1=createContext(null);L$1.displayName="LabelContext";function C$2(){let n=useContext(L$1);if(n===null){let l=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(l,C$2),l}return n}function N(n){var a,e,o;let l=(e=(a=useContext(L$1))==null?void 0:a.value)!=null?e:void 0;return ((o=void 0)!=null?o:0)>0?[l,...n].filter(Boolean).join(" "):l}function Q({inherit:n=false}={}){let l=N(),[a,e]=useState([]),o=n?[l,...a].filter(Boolean):a;return [o.length>0?o.join(" "):void 0,useMemo(()=>function(t){let p=o$6(i=>(e(u=>[...u,i]),()=>e(u=>{let d=u.slice(),f=d.indexOf(i);return f!==-1&&d.splice(f,1),d}))),b=useMemo(()=>({register:p,slot:t.slot,name:t.name,props:t.props,value:t.value}),[p,t.slot,t.name,t.props,t.value]);return React__default.createElement(L$1.Provider,{value:b},t.children)},[e])]}let G="label";function U$1(n,l){var E;let a=useId$1(),e=C$2(),o=u$7(),y=a$b(),{id:t=`headlessui-label-${a}`,htmlFor:p=o!=null?o:(E=e.props)==null?void 0:E.htmlFor,passive:b=false,...i}=n,u=y$6(l);n$5(()=>e.register(t),[t,e.register]);let d=o$6(s=>{let g=s.currentTarget;if(!(s.target!==s.currentTarget&&L$2(s.target))&&(m$3(g)&&s.preventDefault(),e.props&&"onClick"in e.props&&typeof e.props.onClick=="function"&&e.props.onClick(s),m$3(g))){let r=document.getElementById(g.htmlFor);if(r){let x=r.getAttribute("disabled");if(x==="true"||x==="")return;let h=r.getAttribute("aria-disabled");if(h==="true"||h==="")return;(l$1(r)&&(r.type==="file"||r.type==="radio"||r.type==="checkbox")||r.role==="radio"||r.role==="checkbox"||r.role==="switch")&&r.click(),r.focus({preventScroll:true});}}}),f=y||false,R=useMemo(()=>({...e.slot,disabled:f}),[e.slot,f]),c={ref:u,...e.props,id:t,htmlFor:p,onClick:d};return b&&("onClick"in c&&(delete c.htmlFor,delete c.onClick),"onClick"in i&&delete i.onClick),L$3()({ourProps:c,theirProps:i,slot:R,defaultTag:p?G:"div",name:e.name||"Label"})}let j$3=K(U$1);Object.assign(j$3,{});

function f$6(e){if(e===null)return {width:0,height:0};let{width:t,height:r}=e.getBoundingClientRect();return {width:t,height:r}}function d$2(e,t=false){let[r,u]=useReducer(()=>({}),{}),i=useMemo(()=>f$6(e),[e,r]);return n$5(()=>{if(!e)return;let n=new ResizeObserver(u);return n.observe(e),()=>{n.disconnect();}},[e]),t?{width:`${i.width}px`,height:`${i.height}px`}:i}

let a$8 = class a extends Map{constructor(t){super();this.factory=t;}get(t){let e=super.get(t);return e===void 0&&(e=this.factory(t),this.set(t,e)),e}};

var p$3=Object.defineProperty;var h$3=(t,e,r)=>e in t?p$3(t,e,{enumerable:true,configurable:true,writable:true,value:r}):t[e]=r;var f$5=(t,e,r)=>(h$3(t,e+"",r),r),b$2=(t,e,r)=>{if(!e.has(t))throw TypeError("Cannot "+r)};var n$3=(t,e,r)=>(b$2(t,e,"read from private field"),r?r.call(t):e.get(t)),c$4=(t,e,r)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,r);},u$4=(t,e,r,s)=>(b$2(t,e,"write to private field"),e.set(t,r),r);var i$3,a$7,o$3;let E$2 = class E{constructor(e){c$4(this,i$3,{});c$4(this,a$7,new a$8(()=>new Set));c$4(this,o$3,new Set);f$5(this,"disposables",o$7());u$4(this,i$3,e);}dispose(){this.disposables.dispose();}get state(){return n$3(this,i$3)}subscribe(e,r){let s={selector:e,callback:r,current:e(n$3(this,i$3))};return n$3(this,o$3).add(s),this.disposables.add(()=>{n$3(this,o$3).delete(s);})}on(e,r){return n$3(this,a$7).get(e).add(r),this.disposables.add(()=>{n$3(this,a$7).get(e).delete(r);})}send(e){let r=this.reduce(n$3(this,i$3),e);if(r!==n$3(this,i$3)){u$4(this,i$3,r);for(let s of n$3(this,o$3)){let l=s.selector(n$3(this,i$3));j$2(s.current,l)||(s.current=l,s.callback(l));}for(let s of n$3(this,a$7).get(e.type))s(n$3(this,i$3),e);}}};i$3=new WeakMap,a$7=new WeakMap,o$3=new WeakMap;function j$2(t,e){return Object.is(t,e)?true:typeof t!="object"||t===null||typeof e!="object"||e===null?false:Array.isArray(t)&&Array.isArray(e)?t.length!==e.length?false:d$1(t[Symbol.iterator](),e[Symbol.iterator]()):t instanceof Map&&e instanceof Map||t instanceof Set&&e instanceof Set?t.size!==e.size?false:d$1(t.entries(),e.entries()):y$5(t)&&y$5(e)?d$1(Object.entries(t)[Symbol.iterator](),Object.entries(e)[Symbol.iterator]()):false}function d$1(t,e){do{let r=t.next(),s=e.next();if(r.done&&s.done)return  true;if(r.done||s.done||!Object.is(r.value,s.value))return  false}while(true)}function y$5(t){if(Object.prototype.toString.call(t)!=="[object Object]")return  false;let e=Object.getPrototypeOf(t);return e===null||Object.getPrototypeOf(e)===null}function x$3(t){let[e,r]=t(),s=o$7();return (...l)=>{e(...l),s.dispose(),s.microTask(r);}}

var a$6=Object.defineProperty;var r$1=(e,c,t)=>c in e?a$6(e,c,{enumerable:true,configurable:true,writable:true,value:t}):e[c]=t;var p$2=(e,c,t)=>(r$1(e,typeof c!="symbol"?c+"":c,t),t);var k$3=(t=>(t[t.Push=0]="Push",t[t.Pop=1]="Pop",t))(k$3||{});let y$4={[0](e,c){let t=c.id,s=e.stack,i=e.stack.indexOf(t);if(i!==-1){let n=e.stack.slice();return n.splice(i,1),n.push(t),s=n,{...e,stack:s}}return {...e,stack:[...e.stack,t]}},[1](e,c){let t=c.id,s=e.stack.indexOf(t);if(s===-1)return e;let i=e.stack.slice();return i.splice(s,1),{...e,stack:i}}};let o$2 = class o extends E$2{constructor(){super(...arguments);p$2(this,"actions",{push:t=>this.send({type:0,id:t}),pop:t=>this.send({type:1,id:t})});p$2(this,"selectors",{isTop:(t,s)=>t.stack[t.stack.length-1]===s,inStack:(t,s)=>t.stack.includes(s)});}static new(){return new o({stack:[]})}reduce(t,s){return u$8(s.type,y$4,t,s)}};const x$2=new a$8(()=>o$2.new());

var withSelector = {exports: {}};

var useSyncExternalStoreWithSelector_production = {};

/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredUseSyncExternalStoreWithSelector_production;

function requireUseSyncExternalStoreWithSelector_production () {
	if (hasRequiredUseSyncExternalStoreWithSelector_production) return useSyncExternalStoreWithSelector_production;
	hasRequiredUseSyncExternalStoreWithSelector_production = 1;
	var React = React__default;
	function is(x, y) {
	  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is,
	  useSyncExternalStore = React.useSyncExternalStore,
	  useRef = React.useRef,
	  useEffect = React.useEffect,
	  useMemo = React.useMemo,
	  useDebugValue = React.useDebugValue;
	useSyncExternalStoreWithSelector_production.useSyncExternalStoreWithSelector = function (
	  subscribe,
	  getSnapshot,
	  getServerSnapshot,
	  selector,
	  isEqual
	) {
	  var instRef = useRef(null);
	  if (null === instRef.current) {
	    var inst = { hasValue: false, value: null };
	    instRef.current = inst;
	  } else inst = instRef.current;
	  instRef = useMemo(
	    function () {
	      function memoizedSelector(nextSnapshot) {
	        if (!hasMemo) {
	          hasMemo = true;
	          memoizedSnapshot = nextSnapshot;
	          nextSnapshot = selector(nextSnapshot);
	          if (void 0 !== isEqual && inst.hasValue) {
	            var currentSelection = inst.value;
	            if (isEqual(currentSelection, nextSnapshot))
	              return (memoizedSelection = currentSelection);
	          }
	          return (memoizedSelection = nextSnapshot);
	        }
	        currentSelection = memoizedSelection;
	        if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
	        var nextSelection = selector(nextSnapshot);
	        if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
	          return (memoizedSnapshot = nextSnapshot), currentSelection;
	        memoizedSnapshot = nextSnapshot;
	        return (memoizedSelection = nextSelection);
	      }
	      var hasMemo = false,
	        memoizedSnapshot,
	        memoizedSelection,
	        maybeGetServerSnapshot =
	          void 0 === getServerSnapshot ? null : getServerSnapshot;
	      return [
	        function () {
	          return memoizedSelector(getSnapshot());
	        },
	        null === maybeGetServerSnapshot
	          ? void 0
	          : function () {
	              return memoizedSelector(maybeGetServerSnapshot());
	            }
	      ];
	    },
	    [getSnapshot, getServerSnapshot, selector, isEqual]
	  );
	  var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
	  useEffect(
	    function () {
	      inst.hasValue = true;
	      inst.value = value;
	    },
	    [value]
	  );
	  useDebugValue(value);
	  return value;
	};
	return useSyncExternalStoreWithSelector_production;
}

var useSyncExternalStoreWithSelector_development = {};

/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredUseSyncExternalStoreWithSelector_development;

function requireUseSyncExternalStoreWithSelector_development () {
	if (hasRequiredUseSyncExternalStoreWithSelector_development) return useSyncExternalStoreWithSelector_development;
	hasRequiredUseSyncExternalStoreWithSelector_development = 1;
	"production" !== process.env.NODE_ENV &&
	  (function () {
	    function is(x, y) {
	      return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	    }
	    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
	      "function" ===
	        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart &&
	      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
	    var React = React__default,
	      objectIs = "function" === typeof Object.is ? Object.is : is,
	      useSyncExternalStore = React.useSyncExternalStore,
	      useRef = React.useRef,
	      useEffect = React.useEffect,
	      useMemo = React.useMemo,
	      useDebugValue = React.useDebugValue;
	    useSyncExternalStoreWithSelector_development.useSyncExternalStoreWithSelector = function (
	      subscribe,
	      getSnapshot,
	      getServerSnapshot,
	      selector,
	      isEqual
	    ) {
	      var instRef = useRef(null);
	      if (null === instRef.current) {
	        var inst = { hasValue: false, value: null };
	        instRef.current = inst;
	      } else inst = instRef.current;
	      instRef = useMemo(
	        function () {
	          function memoizedSelector(nextSnapshot) {
	            if (!hasMemo) {
	              hasMemo = true;
	              memoizedSnapshot = nextSnapshot;
	              nextSnapshot = selector(nextSnapshot);
	              if (void 0 !== isEqual && inst.hasValue) {
	                var currentSelection = inst.value;
	                if (isEqual(currentSelection, nextSnapshot))
	                  return (memoizedSelection = currentSelection);
	              }
	              return (memoizedSelection = nextSnapshot);
	            }
	            currentSelection = memoizedSelection;
	            if (objectIs(memoizedSnapshot, nextSnapshot))
	              return currentSelection;
	            var nextSelection = selector(nextSnapshot);
	            if (void 0 !== isEqual && isEqual(currentSelection, nextSelection))
	              return (memoizedSnapshot = nextSnapshot), currentSelection;
	            memoizedSnapshot = nextSnapshot;
	            return (memoizedSelection = nextSelection);
	          }
	          var hasMemo = false,
	            memoizedSnapshot,
	            memoizedSelection,
	            maybeGetServerSnapshot =
	              void 0 === getServerSnapshot ? null : getServerSnapshot;
	          return [
	            function () {
	              return memoizedSelector(getSnapshot());
	            },
	            null === maybeGetServerSnapshot
	              ? void 0
	              : function () {
	                  return memoizedSelector(maybeGetServerSnapshot());
	                }
	          ];
	        },
	        [getSnapshot, getServerSnapshot, selector, isEqual]
	      );
	      var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
	      useEffect(
	        function () {
	          inst.hasValue = true;
	          inst.value = value;
	        },
	        [value]
	      );
	      useDebugValue(value);
	      return value;
	    };
	    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
	      "function" ===
	        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop &&
	      __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
	  })();
	return useSyncExternalStoreWithSelector_development;
}

if (process.env.NODE_ENV === 'production') {
  withSelector.exports = requireUseSyncExternalStoreWithSelector_production();
} else {
  withSelector.exports = requireUseSyncExternalStoreWithSelector_development();
}

var withSelectorExports = withSelector.exports;

function S$2(e,n,r=j$2){return withSelectorExports.useSyncExternalStoreWithSelector(o$6(i=>e.subscribe(s$5,i)),o$6(()=>e.state),o$6(()=>e.state),o$6(n),r)}function s$5(e){return e}

function I$2(o,s){let t=useId$1(),r=x$2.get(s),[i,c]=S$2(r,useCallback(e=>[r.selectors.isTop(e,t),r.selectors.inStack(e,t)],[r,t]));return n$5(()=>{if(o)return r.actions.push(t),()=>r.actions.pop(t)},[r,o,t]),o?c?i:true:false}

let f$4=new Map,u$3=new Map;function h$2(t){var e;let r=(e=u$3.get(t))!=null?e:0;return u$3.set(t,r+1),r!==0?()=>m$2(t):(f$4.set(t,{"aria-hidden":t.getAttribute("aria-hidden"),inert:t.inert}),t.setAttribute("aria-hidden","true"),t.inert=true,()=>m$2(t))}function m$2(t){var i;let r=(i=u$3.get(t))!=null?i:1;if(r===1?u$3.delete(t):u$3.set(t,r-1),r!==1)return;let e=f$4.get(t);e&&(e["aria-hidden"]===null?t.removeAttribute("aria-hidden"):t.setAttribute("aria-hidden",e["aria-hidden"]),t.inert=e.inert,f$4.delete(t));}function y$3(t,{allowed:r,disallowed:e}={}){let i=I$2(t,"inert-others");n$5(()=>{var d,c;if(!i)return;let a=o$7();for(let n of (d=e==null?void 0:e())!=null?d:[])n&&a.add(h$2(n));let s=(c=r==null?void 0:r())!=null?c:[];for(let n of s){if(!n)continue;let l=o$8(n);if(!l)continue;let o=n.parentElement;for(;o&&o!==l.body;){for(let p of o.children)s.some(E=>p.contains(E))||a.add(h$2(p));o=o.parentElement;}}return a.dispose},[i,r,e]);}

function p$1(s,n,o){let i=s$7(t=>{let e=t.getBoundingClientRect();e.x===0&&e.y===0&&e.width===0&&e.height===0&&o();});useEffect(()=>{if(!s)return;let t=n===null?null:n$4(n)?n:n.current;if(!t)return;let e=o$7();if(typeof ResizeObserver!="undefined"){let r=new ResizeObserver(()=>i.current(t));r.observe(t),e.add(()=>r.disconnect());}if(typeof IntersectionObserver!="undefined"){let r=new IntersectionObserver(()=>i.current(t));r.observe(t),e.add(()=>r.disconnect());}return ()=>e.dispose()},[n,i,s]);}

let f$3=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(","),F$3=["[data-autofocus]"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var T$1=(n=>(n[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n[n.AutoFocus=64]="AutoFocus",n))(T$1||{}),y$2=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(y$2||{}),S$1=(t=>(t[t.Previous=-1]="Previous",t[t.Next=1]="Next",t))(S$1||{});function b$1(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(f$3)).sort((r,t)=>Math.sign((r.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}function O$2(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(F$3)).sort((r,t)=>Math.sign((r.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var h$1=(t=>(t[t.Strict=0]="Strict",t[t.Loose=1]="Loose",t))(h$1||{});function A(e,r=0){var t;return e===((t=o$8(e))==null?void 0:t.body)?false:u$8(r,{[0](){return e.matches(f$3)},[1](){let l=e;for(;l!==null;){if(l.matches(f$3))return  true;l=l.parentElement;}return  false}})}function V(e){let r=o$8(e);o$7().nextFrame(()=>{r&&i$4(r.activeElement)&&!A(r.activeElement,0)&&I$1(e);});}var H$1=(t=>(t[t.Keyboard=0]="Keyboard",t[t.Mouse=1]="Mouse",t))(H$1||{});typeof window!="undefined"&&typeof document!="undefined"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="");},true),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="");},true));function I$1(e){e==null||e.focus({preventScroll:true});}let w$2=["textarea","input"].join(",");function _(e){var r,t;return (t=(r=e==null?void 0:e.matches)==null?void 0:r.call(e,w$2))!=null?t:false}function P(e,r=t=>t){return e.slice().sort((t,l)=>{let o=r(t),c=r(l);if(o===null||c===null)return 0;let u=o.compareDocumentPosition(c);return u&Node.DOCUMENT_POSITION_FOLLOWING?-1:u&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function j$1(e,r){return g$3(b$1(),r,{relativeTo:e})}function g$3(e,r,{sorted:t=true,relativeTo:l=null,skipElements:o=[]}={}){let c=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,u=Array.isArray(e)?t?P(e):e:r&64?O$2(e):b$1(e);o.length>0&&u.length>1&&(u=u.filter(s=>!o.some(a=>a!=null&&"current"in a?(a==null?void 0:a.current)===s:a===s))),l=l!=null?l:c.activeElement;let n=(()=>{if(r&5)return 1;if(r&10)return  -1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(r&1)return 0;if(r&2)return Math.max(0,u.indexOf(l))-1;if(r&4)return Math.max(0,u.indexOf(l))+1;if(r&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),M=r&32?{preventScroll:true}:{},m=0,d=u.length,i;do{if(m>=d||m+d<=0)return 0;let s=x+m;if(r&16)s=(s+d)%d;else {if(s<0)return 3;if(s>=d)return 1}i=u[s],i==null||i.focus(M),m+=n;}while(i!==c.activeElement);return r&6&&_(i)&&i.select(),2}

function t$1(){return /iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}function i$2(){return /Android/gi.test(window.navigator.userAgent)}function n$2(){return t$1()||i$2()}

function i$1(t,e,o,n){let u=s$7(o);useEffect(()=>{if(!t)return;function r(m){u.current(m);}return document.addEventListener(e,r,n),()=>document.removeEventListener(e,r,n)},[t,e,n]);}

function s$4(t,e,o,n){let i=s$7(o);useEffect(()=>{if(!t)return;function r(d){i.current(d);}return window.addEventListener(e,r,n),()=>window.removeEventListener(e,r,n)},[t,e,n]);}

const C$1=30;function k$2(o,f,h){let m=s$7(h),s=useCallback(function(e,c){if(e.defaultPrevented)return;let r=c(e);if(r===null||!r.getRootNode().contains(r)||!r.isConnected)return;let M=function u(n){return typeof n=="function"?u(n()):Array.isArray(n)||n instanceof Set?n:[n]}(f);for(let u of M)if(u!==null&&(u.contains(r)||e.composed&&e.composedPath().includes(u)))return;return !A(r,h$1.Loose)&&r.tabIndex!==-1&&e.preventDefault(),m.current(e,r)},[m,f]),i=useRef(null);i$1(o,"pointerdown",t=>{var e,c;n$2()||(i.current=((c=(e=t.composedPath)==null?void 0:e.call(t))==null?void 0:c[0])||t.target);},true),i$1(o,"pointerup",t=>{if(n$2()||!i.current)return;let e=i.current;return i.current=null,s(t,()=>e)},true);let l=useRef({x:0,y:0});i$1(o,"touchstart",t=>{l.current.x=t.touches[0].clientX,l.current.y=t.touches[0].clientY;},true),i$1(o,"touchend",t=>{let e={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY};if(!(Math.abs(e.x-l.current.x)>=C$1||Math.abs(e.y-l.current.y)>=C$1))return s(t,()=>i$4(t.target)?t.target:null)},true),s$4(o,"blur",t=>s(t,()=>u$6(window.document.activeElement)?window.document.activeElement:null),true);}

function n$1(...e){return useMemo(()=>o$8(...e),[...e])}

var m$1=(e=>(e[e.Ignore=0]="Ignore",e[e.Select=1]="Select",e[e.Close=2]="Close",e))(m$1||{});const g$2={Ignore:{kind:0},Select:r=>({kind:1,target:r}),Close:{kind:2}},E$1=200;function k$1(r,{trigger:n,action:s,close:e,select:a}){let o=useRef(null);i$1(r&&n!==null,"pointerdown",t=>{o$5(t==null?void 0:t.target)&&n!=null&&n.contains(t.target)&&(o.current=new Date);}),i$1(r&&n!==null,"pointerup",t=>{if(o.current===null||!i$4(t.target))return;let i=s(t),u=new Date().getTime()-o.current.getTime();switch(o.current=null,i.kind){case 0:return;case 1:{u>E$1&&(a(i.target),e());break}case 2:{e();break}}},{capture:true});}

function e$1(t,u){return useMemo(()=>{var n;if(t.type)return t.type;let r=(n=t.as)!=null?n:"button";if(typeof r=="string"&&r.toLowerCase()==="button"||(u==null?void 0:u.tagName)==="BUTTON"&&!u.hasAttribute("type"))return "button"},[t.type,t.as,u])}

function o$1(t){return useSyncExternalStore(t.subscribe,t.getSnapshot,t.getSnapshot)}

function a$5(o,r){let t=o(),n=new Set;return {getSnapshot(){return t},subscribe(e){return n.add(e),()=>n.delete(e)},dispatch(e,...s){let i=r[e].call(t,...s);i&&(t=i,n.forEach(c=>c()));}}}

function d(){let r;return {before({doc:e}){var l;let o=e.documentElement,t=(l=e.defaultView)!=null?l:window;r=Math.max(0,t.innerWidth-o.clientWidth);},after({doc:e,d:o}){let t=e.documentElement,l=Math.max(0,t.clientWidth-t.offsetWidth),n=Math.max(0,r-l);o.style(t,"paddingRight",`${n}px`);}}}

function w$1(){return t$1()?{before({doc:n,d:l,meta:f}){function i(a){return f.containers.flatMap(r=>r()).some(r=>r.contains(a))}l.microTask(()=>{var c;if(window.getComputedStyle(n.documentElement).scrollBehavior!=="auto"){let t=o$7();t.style(n.documentElement,"scrollBehavior","auto"),l.add(()=>l.microTask(()=>t.dispose()));}let a=(c=window.scrollY)!=null?c:window.pageYOffset,r=null;l.addEventListener(n,"click",t=>{if(i$4(t.target))try{let e=t.target.closest("a");if(!e)return;let{hash:m}=new URL(e.href),s=n.querySelector(m);i$4(s)&&!i(s)&&(r=s);}catch{}},true),l.addEventListener(n,"touchstart",t=>{if(i$4(t.target)&&r$3(t.target))if(i(t.target)){let e=t.target;for(;e.parentElement&&i(e.parentElement);)e=e.parentElement;l.style(e,"overscrollBehavior","contain");}else l.style(t.target,"touchAction","none");}),l.addEventListener(n,"touchmove",t=>{if(i$4(t.target)){if(l$1(t.target))return;if(i(t.target)){let e=t.target;for(;e.parentElement&&e.dataset.headlessuiPortal!==""&&!(e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth);)e=e.parentElement;e.dataset.headlessuiPortal===""&&t.preventDefault();}else t.preventDefault();}},{passive:false}),l.add(()=>{var e;let t=(e=window.scrollY)!=null?e:window.pageYOffset;a!==t&&window.scrollTo(0,a),r&&r.isConnected&&(r.scrollIntoView({block:"nearest"}),r=null);});});}}:{}}

function r(){return {before({doc:e,d:o}){o.style(e.documentElement,"overflow","hidden");}}}

function m(e){let n={};for(let t of e)Object.assign(n,t(n));return n}let a$4=a$5(()=>new Map,{PUSH(e,n){var o;let t=(o=this.get(e))!=null?o:{doc:e,count:0,d:o$7(),meta:new Set};return t.count++,t.meta.add(n),this.set(e,t),this},POP(e,n){let t=this.get(e);return t&&(t.count--,t.meta.delete(n)),this},SCROLL_PREVENT({doc:e,d:n,meta:t}){let o={doc:e,d:n,meta:m(t)},c=[w$1(),d(),r()];c.forEach(({before:r})=>r==null?void 0:r(o)),c.forEach(({after:r})=>r==null?void 0:r(o));},SCROLL_ALLOW({d:e}){e.dispose();},TEARDOWN({doc:e}){this.delete(e);}});a$4.subscribe(()=>{let e=a$4.getSnapshot(),n=new Map;for(let[t]of e)n.set(t,t.documentElement.style.overflow);for(let t of e.values()){let o=n.get(t.doc)==="hidden",c=t.count!==0;(c&&!o||!c&&o)&&a$4.dispatch(t.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",t),t.count===0&&a$4.dispatch("TEARDOWN",t);}});

function a$3(r,e,n=()=>({containers:[]})){let f=o$1(a$4),o=e?f.get(e):void 0,i=o?o.count>0:false;return n$5(()=>{if(!(!e||!r))return a$4.dispatch("PUSH",e,n),()=>a$4.dispatch("POP",e,n)},[r,e]),i}

function f$2(e,c,n=()=>[document.body]){let r=I$2(e,"scroll-lock");a$3(r,c,t=>{var o;return {containers:[...(o=t.containers)!=null?o:[],n]}});}

function t(e){return [e.screenX,e.screenY]}function u$2(){let e=useRef([-1,-1]);return {wasMoved(r){let n=t(r);return e.current[0]===n[0]&&e.current[1]===n[1]?false:(e.current=n,true)},update(r){e.current=t(r);}}}

function c$3(u=0){let[t,l]=useState(u),g=useCallback(e=>l(e),[t]),s=useCallback(e=>l(a=>a|e),[t]),m=useCallback(e=>(t&e)===e,[t]),n=useCallback(e=>l(a=>a&~e),[l]),F=useCallback(e=>l(a=>a^e),[l]);return {flags:t,setFlag:g,addFlag:s,hasFlag:m,removeFlag:n,toggleFlag:F}}

var T,b;typeof process!="undefined"&&typeof globalThis!="undefined"&&typeof Element!="undefined"&&((T=process==null?void 0:process.env)==null?void 0:T["NODE_ENV"])==="test"&&typeof((b=Element==null?void 0:Element.prototype)==null?void 0:b.getAnimations)=="undefined"&&(Element.prototype.getAnimations=function(){return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.","Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.","","Example usage:","```js","import { mockAnimationsApi } from 'jsdom-testing-mocks'","mockAnimationsApi()","```"].join(`
`)),[]});var L=(r=>(r[r.None=0]="None",r[r.Closed=1]="Closed",r[r.Enter=2]="Enter",r[r.Leave=4]="Leave",r))(L||{});function R(t){let n={};for(let e in t)t[e]===true&&(n[`data-${e}`]="");return n}function x$1(t,n,e,i){let[r,o]=useState(e),{hasFlag:s,addFlag:a,removeFlag:l}=c$3(t&&r?3:0),u=useRef(false),f=useRef(false),E=p$4();return n$5(()=>{var d;if(t){if(e&&o(true),!n){e&&a(3);return}return (d=i==null?void 0:i.start)==null||d.call(i,e),C(n,{inFlight:u,prepare(){f.current?f.current=false:f.current=u.current,u.current=true,!f.current&&(e?(a(3),l(4)):(a(4),l(2)));},run(){f.current?e?(l(3),a(4)):(l(4),a(3)):e?l(1):a(1);},done(){var p;f.current&&typeof n.getAnimations=="function"&&n.getAnimations().length>0||(u.current=false,l(7),e||o(false),(p=i==null?void 0:i.end)==null||p.call(i,e));}})}},[t,e,n,E]),t?[r,{closed:s(1),enter:s(2),leave:s(4),transition:s(2)||s(4)}]:[e,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function C(t,{prepare:n,run:e,done:i,inFlight:r}){let o=o$7();return j(t,{prepare:n,inFlight:r}),o.nextFrame(()=>{e(),o.requestAnimationFrame(()=>{o.add(M$2(t,i));});}),o.dispose}function M$2(t,n){var o,s;let e=o$7();if(!t)return e.dispose;let i=false;e.add(()=>{i=true;});let r=(s=(o=t.getAnimations)==null?void 0:o.call(t).filter(a=>a instanceof CSSTransition))!=null?s:[];return r.length===0?(n(),e.dispose):(Promise.allSettled(r.map(a=>a.finished)).then(()=>{i||n();}),e.dispose)}function j(t,{inFlight:n,prepare:e}){if(n!=null&&n.current){e();return}let i=t.style.transition;t.style.transition="none",e(),t.offsetHeight,t.style.transition=i;}

function F$2(c,{container:e,accept:t,walk:r}){let o=useRef(t),l=useRef(r);useEffect(()=>{o.current=t,l.current=r;},[t,r]),n$5(()=>{if(!e||!c)return;let n=o$8(e);if(!n)return;let f=o.current,p=l.current,i=Object.assign(m=>f(m),{acceptNode:f}),u=n.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,i,false);for(;u.nextNode();)p(u.currentNode);},[e,c,o,l]);}

function hasWindow() {
  return typeof window !== 'undefined';
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || '').toLowerCase();
  }
  // Mocked nodes in testing environments may not be instances of Node. By
  // returning `#document` an infinite loop won't occur.
  // https://github.com/floating-ui/floating-ui/issues/2317
  return '#document';
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === 'undefined') {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
const invalidOverflowDisplayValues = /*#__PURE__*/new Set(['inline', 'contents']);
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle$1(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !invalidOverflowDisplayValues.has(display);
}
const tableElements = /*#__PURE__*/new Set(['table', 'td', 'th']);
function isTableElement(element) {
  return tableElements.has(getNodeName(element));
}
const topLayerSelectors = [':popover-open', ':modal'];
function isTopLayer(element) {
  return topLayerSelectors.some(selector => {
    try {
      return element.matches(selector);
    } catch (_e) {
      return false;
    }
  });
}
const transformProperties = ['transform', 'translate', 'scale', 'rotate', 'perspective'];
const willChangeValues = ['transform', 'translate', 'scale', 'rotate', 'perspective', 'filter'];
const containValues = ['paint', 'layout', 'strict', 'content'];
function isContainingBlock(elementOrCss) {
  const webkit = isWebKit();
  const css = isElement(elementOrCss) ? getComputedStyle$1(elementOrCss) : elementOrCss;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  // https://drafts.csswg.org/css-transforms-2/#individual-transforms
  return transformProperties.some(value => css[value] ? css[value] !== 'none' : false) || (css.containerType ? css.containerType !== 'normal' : false) || !webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !webkit && (css.filter ? css.filter !== 'none' : false) || willChangeValues.some(value => (css.willChange || '').includes(value)) || containValues.some(value => (css.contain || '').includes(value));
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (typeof CSS === 'undefined' || !CSS.supports) return false;
  return CSS.supports('-webkit-backdrop-filter', 'none');
}
const lastTraversableNodeNames = /*#__PURE__*/new Set(['html', 'body', '#document']);
function isLastTraversableNode(node) {
  return lastTraversableNodeNames.has(getNodeName(node));
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === 'html') {
    return node;
  }
  const result =
  // Step into the shadow DOM of the parent of a slotted node.
  node.assignedSlot ||
  // DOM Element detected.
  node.parentNode ||
  // ShadowRoot detected.
  isShadowRoot(node) && node.host ||
  // Fallback.
  getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === void 0) {
    list = [];
  }
  if (traverseIframes === void 0) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  }
  return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map(_ref => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(' ');
  }
  return navigator.userAgent;
}

/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */

const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = v => ({
  x: v,
  y: v
});
const oppositeSideMap = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
const oppositeAlignmentMap = {
  start: 'end',
  end: 'start'
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === 'function' ? value(param) : value;
}
function getSide(placement) {
  return placement.split('-')[0];
}
function getAlignment(placement) {
  return placement.split('-')[1];
}
function getOppositeAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
  return axis === 'y' ? 'height' : 'width';
}
const yAxisSides = /*#__PURE__*/new Set(['top', 'bottom']);
function getSideAxis(placement) {
  return yAxisSides.has(getSide(placement)) ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === void 0) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
const lrPlacement = ['left', 'right'];
const rlPlacement = ['right', 'left'];
const tbPlacement = ['top', 'bottom'];
const btPlacement = ['bottom', 'top'];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case 'top':
    case 'bottom':
      if (rtl) return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case 'left':
    case 'right':
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === 'start', rtl);
  if (alignment) {
    list = list.map(side => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== 'number' ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x,
    y,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y,
    left: x,
    right: x + width,
    bottom: y + height,
    x,
    y
  };
}

function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === 'y';
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case 'top':
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case 'bottom':
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case 'right':
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case 'left':
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case 'start':
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case 'end':
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */
const computePosition$1 = async (reference, floating, config) => {
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform
  } = config;
  const validMiddleware = middleware.filter(Boolean);
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x,
    y
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let middlewareData = {};
  let resetCount = 0;
  for (let i = 0; i < validMiddleware.length; i++) {
    const {
      name,
      fn
    } = validMiddleware[i];
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x,
      y,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform,
      elements: {
        reference,
        floating
      }
    });
    x = nextX != null ? nextX : x;
    y = nextY != null ? nextY : y;
    middlewareData = {
      ...middlewareData,
      [name]: {
        ...middlewareData[name],
        ...data
      }
    };
    if (reset && resetCount <= 50) {
      resetCount++;
      if (typeof reset === 'object') {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x,
          y
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i = -1;
    }
  }
  return {
    x,
    y,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
async function detectOverflow$1(state, options) {
  var _await$platform$isEle;
  if (options === void 0) {
    options = {};
  }
  const {
    x,
    y,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = 'clippingAncestors',
    rootBoundary = 'viewport',
    elementContext = 'floating',
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === 'floating' ? 'reference' : 'floating';
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === 'floating' ? {
    x,
    y,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
  const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip$2 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'flip',
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = 'bestFit',
        fallbackAxisSideDirection = 'none',
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);

      // If a reset by the arrow was caused due to an alignment offset being
      // added, we should skip any logic now since `flip()` has already done its
      // work.
      // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements = [initialPlacement, ...fallbackPlacements];
      const overflow = await detectOverflow$1(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides[0]], overflow[sides[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];

      // One or more sides is overflowing.
      if (!overflows.every(side => side <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow ||
          // We leave the current main axis only if every placement on that axis
          // overflows the main axis.
          overflowsData.every(d => d.overflows[0] > 0 && getSideAxis(d.placement) === initialSideAxis)) {
            // Try next placement and re-run the lifecycle.
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }

        // First, find the candidates that fit on the mainAxis side of overflow,
        // then find the placement that fits the best on the main crossAxis side.
        let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

        // Otherwise fallback.
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case 'bestFit':
              {
                var _overflowsData$filter2;
                const placement = (_overflowsData$filter2 = overflowsData.filter(d => {
                  if (hasFallbackAxisSideDirection) {
                    const currentSideAxis = getSideAxis(d.placement);
                    return currentSideAxis === initialSideAxis ||
                    // Create a bias to the `y` side axis due to horizontal
                    // reading directions favoring greater width.
                    currentSideAxis === 'y';
                  }
                  return true;
                }).map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
            case 'initialPlacement':
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};

const originSides = /*#__PURE__*/new Set(['left', 'top']);

// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.

async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === 'y';
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);

  // eslint-disable-next-line prefer-const
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === 'number' ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === 'number') {
    crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset$2 = function (options) {
  if (options === void 0) {
    options = 0;
  }
  return {
    name: 'offset',
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x,
        y,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);

      // If the placement is the same and the arrow caused an alignment offset
      // then we don't need to change the positioning coordinates.
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x + diffCoords.x,
        y: y + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift$2 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'shift',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: _ref => {
            let {
              x,
              y
            } = _ref;
            return {
              x,
              y
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x,
        y
      };
      const overflow = await detectOverflow$1(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === 'y' ? 'top' : 'left';
        const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
        const min = mainAxisCoord + overflow[minSide];
        const max = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min, mainAxisCoord, max);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === 'y' ? 'top' : 'left';
        const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
        const min = crossAxisCoord + overflow[minSide];
        const max = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min, crossAxisCoord, max);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x,
          y: limitedCoords.y - y,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size$2 = function (options) {
  if (options === void 0) {
    options = {};
  }
  return {
    name: 'size',
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await detectOverflow$1(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === 'y';
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === 'top' || side === 'bottom') {
        heightSide = side;
        widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
      } else {
        widthSide = side;
        heightSide = alignment === 'end' ? 'top' : 'bottom';
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

function getCssDimensions(element) {
  const css = getComputedStyle$1(element);
  // In testing environments, the `width` and `height` properties are empty
  // strings for SVG elements, returning NaN. Fallback to `0` in this case.
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}

function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}

function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x = ($ ? round(rect.width) : rect.width) / width;
  let y = ($ ? round(rect.height) : rect.height) / height;

  // 0, NaN, or Infinity should always fallback to 1.

  if (!x || !Number.isFinite(x)) {
    x = 1;
  }
  if (!y || !Number.isFinite(y)) {
    y = 1;
  }
  return {
    x,
    y
  };
}

const noOffsets = /*#__PURE__*/createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}

function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x = (clientRect.left + visualOffsets.x) / scale.x;
  let y = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle$1(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x *= iframeScale.x;
      y *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x += left;
      y += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x,
    y
  });
}

// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}

function getHTMLOffset(documentElement, scroll, ignoreScrollbarX) {
  if (ignoreScrollbarX === void 0) {
    ignoreScrollbarX = false;
  }
  const htmlRect = documentElement.getBoundingClientRect();
  const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0 :
  // RTL <body> scrollbar.
  getWindowScrollBarX(documentElement, htmlRect));
  const y = htmlRect.top + scroll.scrollTop;
  return {
    x,
    y
  };
}

function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === 'fixed';
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll, true) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}

function getClientRects(element) {
  return Array.from(element.getClientRects());
}

// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y = -scroll.scrollTop;
  if (getComputedStyle$1(body).direction === 'rtl') {
    x += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}

function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x = 0;
  let y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x,
    y
  };
}

const absoluteOrFixed = /*#__PURE__*/new Set(['absolute', 'fixed']);
// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x = left * scale.x;
  const y = top * scale.y;
  return {
    width,
    height,
    x,
    y
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === 'viewport') {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === 'document') {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}

// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
  let currentNode = elementIsFixed ? getParentNode(element) : element;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle$1(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && absoluteOrFixed.has(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      // Drop non-containing blocks.
      result = result.filter(ancestor => ancestor !== currentNode);
    } else {
      // Record last containing block for next iteration.
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}

// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === 'clippingAncestors' ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstClippingAncestor = clippingAncestors[0];
  const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
  return {
    width: clippingRect.right - clippingRect.left,
    height: clippingRect.bottom - clippingRect.top,
    x: clippingRect.left,
    y: clippingRect.top
  };
}

function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}

function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === 'fixed';
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);

  // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
  // Firefox with layout.scrollbar.side = 3 in about:config to test this.
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x,
    y,
    width: rect.width,
    height: rect.height
  };
}

function isStaticPositioned(element) {
  return getComputedStyle$1(element).position === 'static';
}

function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;

  // Firefox returns the <html> element as the offsetParent if it's non-static,
  // while Chrome and Safari return the <body> element. The <body> element must
  // be used to perform the correct calculations even if the <html> element is
  // non-static.
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}

// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}

const getElementRects = async function (data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};

function isRTL(element) {
  return getComputedStyle$1(element).direction === 'rtl';
}

const platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};

function rectsAreEqual(a, b) {
  return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}

// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === void 0) {
      skip = false;
    }
    if (threshold === void 0) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          // If the reference is clipped, the ratio is 0. Throttle the refresh
          // to prevent an infinite loop of updates.
          timeoutId = setTimeout(() => {
            refresh(false, 1e-7);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        // It's possible that even though the ratio is reported as 1, the
        // element is not actually fully within the IntersectionObserver's root
        // area anymore. This can happen under performance constraints. This may
        // be a bug in the browser's IntersectionObserver implementation. To
        // work around this, we compare the element's bounding rect now with
        // what it was at the time we created the IntersectionObserver. If they
        // are not equal then the element moved, so we refresh.
        refresh();
      }
      isFirstUpdate = false;
    }

    // Older browsers don't support a `document` as the root and will throw an
    // error.
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        // Handle <iframe>s
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}

/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(reference, floating, update, options) {
  if (options === void 0) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === 'function',
    layoutShift = typeof IntersectionObserver === 'function',
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
  ancestors.forEach(ancestor => {
    ancestorScroll && ancestor.addEventListener('scroll', update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener('resize', update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver(_ref => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
        // Prevent update loops when using the `size` middleware.
        // https://github.com/floating-ui/floating-ui/issues/1740
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    resizeObserver.observe(floating);
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.removeEventListener('scroll', update);
      ancestorResize && ancestor.removeEventListener('resize', update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}

/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */
const detectOverflow = detectOverflow$1;

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset$1 = offset$2;

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift$1 = shift$2;

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip$1 = flip$2;

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size$1 = size$2;

/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */
const computePosition = (reference, floating, options) => {
  // This caches the expensive `getClippingElementAncestors` function so that
  // multiple lifecycle resets re-use the same result. It only lives for a
  // single call. If other functions become expensive, we can add them as well.
  const cache = new Map();
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition$1(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

var isClient = typeof document !== 'undefined';

var noop = function noop() {};
var index$1 = isClient ? useLayoutEffect : noop;

// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
  if (a === b) {
    return true;
  }
  if (typeof a !== typeof b) {
    return false;
  }
  if (typeof a === 'function' && a.toString() === b.toString()) {
    return true;
  }
  let length;
  let i;
  let keys;
  if (a && b && typeof a === 'object') {
    if (Array.isArray(a)) {
      length = a.length;
      if (length !== b.length) return false;
      for (i = length; i-- !== 0;) {
        if (!deepEqual(a[i], b[i])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) {
      return false;
    }
    for (i = length; i-- !== 0;) {
      if (!{}.hasOwnProperty.call(b, keys[i])) {
        return false;
      }
    }
    for (i = length; i-- !== 0;) {
      const key = keys[i];
      if (key === '_owner' && a.$$typeof) {
        continue;
      }
      if (!deepEqual(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  return a !== a && b !== b;
}

function getDPR(element) {
  if (typeof window === 'undefined') {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}

function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}

function useLatestRef(value) {
  const ref = React.useRef(value);
  index$1(() => {
    ref.current = value;
  });
  return ref;
}

/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/useFloating
 */
function useFloating$1(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    placement = 'bottom',
    strategy = 'absolute',
    middleware = [],
    platform,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React.useState(null);
  const [_floating, _setFloating] = React.useState(null);
  const setReference = React.useCallback(node => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React.useCallback(node => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React.useRef(null);
  const floatingRef = React.useRef(null);
  const dataRef = React.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform);
  const openRef = useLatestRef(open);
  const update = React.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition(referenceRef.current, floatingRef.current, config).then(data => {
      const fullData = {
        ...data,
        // The floating element's position may be recomputed while it's closed
        // but still mounted (such as when transitioning out). To ensure
        // `isPositioned` will be `false` initially on the next open, avoid
        // setting it to `true` when `open === false` (must be specified).
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index$1(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData(data => ({
        ...data,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React.useRef(false);
  index$1(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index$1(() => {
    if (referenceEl) referenceRef.current = referenceEl;
    if (floatingEl) floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x = roundByDPR(elements.floating, data.x);
    const y = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x + "px, " + y + "px)",
        ...(getDPR(elements.floating) >= 1.5 && {
          willChange: 'transform'
        })
      };
    }
    return {
      position: strategy,
      left: x,
      top: y
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}

/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */
const offset = (options, deps) => ({
  ...offset$1(options),
  options: [options, deps]
});

/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */
const shift = (options, deps) => ({
  ...shift$1(options),
  options: [options, deps]
});

/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */
const flip = (options, deps) => ({
  ...flip$1(options),
  options: [options, deps]
});

/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */
const size = (options, deps) => ({
  ...size$1(options),
  options: [options, deps]
});

// https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379
const SafeReact = {
  ...React
};

const useInsertionEffect = SafeReact.useInsertionEffect;
const useSafeInsertionEffect = useInsertionEffect || (fn => fn());
function useEffectEvent(callback) {
  const ref = React.useRef(() => {
    if (process.env.NODE_ENV !== "production") {
      throw new Error('Cannot call an event handler while rendering.');
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React.useCallback(function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? void 0 : ref.current(...args);
  }, []);
}

var index = typeof document !== 'undefined' ? useLayoutEffect : useEffect;

let serverHandoffComplete = false;
let count = 0;
const genId = () => // Ensure the id is unique with multiple independent versions of Floating UI
// on <React 18
"floating-ui-" + Math.random().toString(36).slice(2, 6) + count++;
function useFloatingId() {
  const [id, setId] = React.useState(() => serverHandoffComplete ? genId() : undefined);
  index(() => {
    if (id == null) {
      setId(genId());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    serverHandoffComplete = true;
  }, []);
  return id;
}
const useReactId = SafeReact.useId;

/**
 * Uses React 18's built-in `useId()` when available, or falls back to a
 * slightly less performant (requiring a double render) implementation for
 * earlier React versions.
 * @see https://floating-ui.com/docs/react-utils#useid
 */
const useId = useReactId || useFloatingId;

let devMessageSet;
if (process.env.NODE_ENV !== "production") {
  devMessageSet = /*#__PURE__*/new Set();
}
function warn() {
  var _devMessageSet;
  for (var _len = arguments.length, messages = new Array(_len), _key = 0; _key < _len; _key++) {
    messages[_key] = arguments[_key];
  }
  const message = "Floating UI: " + messages.join(' ');
  if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(message))) {
    var _devMessageSet2;
    (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(message);
    console.warn(message);
  }
}
function error() {
  var _devMessageSet3;
  for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    messages[_key2] = arguments[_key2];
  }
  const message = "Floating UI: " + messages.join(' ');
  if (!((_devMessageSet3 = devMessageSet) != null && _devMessageSet3.has(message))) {
    var _devMessageSet4;
    (_devMessageSet4 = devMessageSet) == null || _devMessageSet4.add(message);
    console.error(message);
  }
}

function createPubSub() {
  const map = new Map();
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null || _map$get.forEach(handler => handler(data));
    },
    on(event, listener) {
      map.set(event, [...(map.get(event) || []), listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? void 0 : _map$get2.filter(l => l !== listener)) || []);
    }
  };
}

const FloatingNodeContext = /*#__PURE__*/React.createContext(null);
const FloatingTreeContext = /*#__PURE__*/React.createContext(null);

/**
 * Returns the parent node id for nested floating elements, if available.
 * Returns `null` for top-level floating elements.
 */
const useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = React.useContext(FloatingNodeContext)) == null ? void 0 : _React$useContext.id) || null;
};

/**
 * Returns the nearest floating tree context, if available.
 */
const useFloatingTree = () => React.useContext(FloatingTreeContext);

const FOCUSABLE_ATTRIBUTE = 'data-floating-ui-focusable';

function useFloatingRootContext(options) {
  const {
    open = false,
    onOpenChange: onOpenChangeProp,
    elements: elementsProp
  } = options;
  const floatingId = useId();
  const dataRef = React.useRef({});
  const [events] = React.useState(() => createPubSub());
  const nested = useFloatingParentNodeId() != null;
  if (process.env.NODE_ENV !== "production") {
    const optionDomReference = elementsProp.reference;
    if (optionDomReference && !isElement(optionDomReference)) {
      error('Cannot pass a virtual element to the `elements.reference` option,', 'as it must be a real DOM element. Use `refs.setPositionReference()`', 'instead.');
    }
  }
  const [positionReference, setPositionReference] = React.useState(elementsProp.reference);
  const onOpenChange = useEffectEvent((open, event, reason) => {
    dataRef.current.openEvent = open ? event : undefined;
    events.emit('openchange', {
      open,
      event,
      reason,
      nested
    });
    onOpenChangeProp == null || onOpenChangeProp(open, event, reason);
  });
  const refs = React.useMemo(() => ({
    setPositionReference
  }), []);
  const elements = React.useMemo(() => ({
    reference: positionReference || elementsProp.reference || null,
    floating: elementsProp.floating || null,
    domReference: elementsProp.reference
  }), [positionReference, elementsProp.reference, elementsProp.floating]);
  return React.useMemo(() => ({
    dataRef,
    open,
    onOpenChange,
    elements,
    events,
    floatingId,
    refs
  }), [open, onOpenChange, elements, events, floatingId, refs]);
}

/**
 * Provides data to position a floating element and context to add interactions.
 * @see https://floating-ui.com/docs/useFloating
 */
function useFloating(options) {
  if (options === void 0) {
    options = {};
  }
  const {
    nodeId
  } = options;
  const internalRootContext = useFloatingRootContext({
    ...options,
    elements: {
      reference: null,
      floating: null,
      ...options.elements
    }
  });
  const rootContext = options.rootContext || internalRootContext;
  const computedElements = rootContext.elements;
  const [_domReference, setDomReference] = React.useState(null);
  const [positionReference, _setPositionReference] = React.useState(null);
  const optionDomReference = computedElements == null ? void 0 : computedElements.domReference;
  const domReference = optionDomReference || _domReference;
  const domReferenceRef = React.useRef(null);
  const tree = useFloatingTree();
  index(() => {
    if (domReference) {
      domReferenceRef.current = domReference;
    }
  }, [domReference]);
  const position = useFloating$1({
    ...options,
    elements: {
      ...computedElements,
      ...(positionReference && {
        reference: positionReference
      })
    }
  });
  const setPositionReference = React.useCallback(node => {
    const computedPositionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    // Store the positionReference in state if the DOM reference is specified externally via the
    // `elements.reference` option. This ensures that it won't be overridden on future renders.
    _setPositionReference(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const setReference = React.useCallback(node => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }

    // Backwards-compatibility for passing a virtual element to `reference`
    // after it has set the DOM reference.
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null ||
    // Don't allow setting virtual elements using the old technique back to
    // `null` to support `positionReference` + an unstable `reference`
    // callback ref.
    node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React.useMemo(() => ({
    ...position.elements,
    domReference: domReference
  }), [position.elements, domReference]);
  const context = React.useMemo(() => ({
    ...position,
    ...rootContext,
    refs,
    elements,
    nodeId
  }), [position, refs, elements, nodeId, rootContext]);
  index(() => {
    rootContext.dataRef.current.floatingContext = context;
    const node = tree == null ? void 0 : tree.nodesRef.current.find(node => node.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}

const ACTIVE_KEY = 'active';
const SELECTED_KEY = 'selected';
function mergeProps(userProps, propsList, elementKey) {
  const map = new Map();
  const isItem = elementKey === 'item';
  let domUserProps = userProps;
  if (isItem && userProps) {
    const {
      [ACTIVE_KEY]: _,
      [SELECTED_KEY]: __,
      ...validProps
    } = userProps;
    domUserProps = validProps;
  }
  return {
    ...(elementKey === 'floating' && {
      tabIndex: -1,
      [FOCUSABLE_ATTRIBUTE]: ''
    }),
    ...domUserProps,
    ...propsList.map(value => {
      const propsOrGetProps = value ? value[elementKey] : null;
      if (typeof propsOrGetProps === 'function') {
        return userProps ? propsOrGetProps(userProps) : null;
      }
      return propsOrGetProps;
    }).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach(_ref => {
        let [key, value] = _ref;
        if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) {
          return;
        }
        if (key.indexOf('on') === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === 'function') {
            var _map$get;
            (_map$get = map.get(key)) == null || _map$get.push(value);
            acc[key] = function () {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? void 0 : _map$get2.map(fn => fn(...args)).find(val => val !== undefined);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
/**
 * Merges an array of interaction hooks' props into prop getters, allowing
 * event handler functions to be composed together without overwriting one
 * another.
 * @see https://floating-ui.com/docs/useInteractions
 */
function useInteractions(propsList) {
  if (propsList === void 0) {
    propsList = [];
  }
  const referenceDeps = propsList.map(key => key == null ? void 0 : key.reference);
  const floatingDeps = propsList.map(key => key == null ? void 0 : key.floating);
  const itemDeps = propsList.map(key => key == null ? void 0 : key.item);
  const getReferenceProps = React.useCallback(userProps => mergeProps(userProps, propsList, 'reference'),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  referenceDeps);
  const getFloatingProps = React.useCallback(userProps => mergeProps(userProps, propsList, 'floating'),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  floatingDeps);
  const getItemProps = React.useCallback(userProps => mergeProps(userProps, propsList, 'item'),
  // eslint-disable-next-line react-hooks/exhaustive-deps
  itemDeps);
  return React.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}

function getArgsWithCustomFloatingHeight(state, height) {
  return {
    ...state,
    rects: {
      ...state.rects,
      floating: {
        ...state.rects.floating,
        height
      }
    }
  };
}
/**
 * Positions the floating element such that an inner element inside of it is
 * anchored to the reference element.
 * @see https://floating-ui.com/docs/inner
 */
const inner = props => ({
  name: 'inner',
  options: props,
  async fn(state) {
    const {
      listRef,
      overflowRef,
      onFallbackChange,
      offset: innerOffset = 0,
      index = 0,
      minItemsVisible = 4,
      referenceOverflowThreshold = 0,
      scrollRef,
      ...detectOverflowOptions
    } = evaluate(props, state);
    const {
      rects,
      elements: {
        floating
      }
    } = state;
    const item = listRef.current[index];
    const scrollEl = (scrollRef == null ? void 0 : scrollRef.current) || floating;

    // Valid combinations:
    // 1. Floating element is the scrollRef and has a border (default)
    // 2. Floating element is not the scrollRef, floating element has a border
    // 3. Floating element is not the scrollRef, scrollRef has a border
    // Floating > {...getFloatingProps()} wrapper > scrollRef > items is not
    // allowed as VoiceOver doesn't work.
    const clientTop = floating.clientTop || scrollEl.clientTop;
    const floatingIsBordered = floating.clientTop !== 0;
    const scrollElIsBordered = scrollEl.clientTop !== 0;
    const floatingIsScrollEl = floating === scrollEl;
    if (process.env.NODE_ENV !== "production") {
      if (!state.placement.startsWith('bottom')) {
        warn('`placement` side must be "bottom" when using the `inner`', 'middleware.');
      }
    }
    if (!item) {
      return {};
    }
    const nextArgs = {
      ...state,
      ...(await offset(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state))
    };
    const overflow = await detectOverflow(getArgsWithCustomFloatingHeight(nextArgs, scrollEl.scrollHeight + clientTop + floating.clientTop), detectOverflowOptions);
    const refOverflow = await detectOverflow(nextArgs, {
      ...detectOverflowOptions,
      elementContext: 'reference'
    });
    const diffY = max(0, overflow.top);
    const nextY = nextArgs.y + diffY;
    const isScrollable = scrollEl.scrollHeight > scrollEl.clientHeight;
    const rounder = isScrollable ? v => v : round;
    const maxHeight = rounder(max(0, scrollEl.scrollHeight + (floatingIsBordered && floatingIsScrollEl || scrollElIsBordered ? clientTop * 2 : 0) - diffY - max(0, overflow.bottom)));
    scrollEl.style.maxHeight = maxHeight + "px";
    scrollEl.scrollTop = diffY;

    // There is not enough space, fallback to standard anchored positioning
    if (onFallbackChange) {
      const shouldFallback = scrollEl.offsetHeight < item.offsetHeight * min(minItemsVisible, listRef.current.length) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold;
      ReactDOM.flushSync(() => onFallbackChange(shouldFallback));
    }
    if (overflowRef) {
      overflowRef.current = await detectOverflow(getArgsWithCustomFloatingHeight({
        ...nextArgs,
        y: nextY
      }, scrollEl.offsetHeight + clientTop + floating.clientTop), detectOverflowOptions);
    }
    return {
      y: nextY
    };
  }
});
/**
 * Changes the `inner` middleware's `offset` upon a `wheel` event to
 * expand the floating element's height, revealing more list items.
 * @see https://floating-ui.com/docs/inner
 */
function useInnerOffset(context, props) {
  const {
    open,
    elements
  } = context;
  const {
    enabled = true,
    overflowRef,
    scrollRef,
    onChange: unstable_onChange
  } = props;
  const onChange = useEffectEvent(unstable_onChange);
  const controlledScrollingRef = React.useRef(false);
  const prevScrollTopRef = React.useRef(null);
  const initialOverflowRef = React.useRef(null);
  React.useEffect(() => {
    if (!enabled) return;
    function onWheel(e) {
      if (e.ctrlKey || !el || overflowRef.current == null) {
        return;
      }
      const dY = e.deltaY;
      const isAtTop = overflowRef.current.top >= -0.5;
      const isAtBottom = overflowRef.current.bottom >= -0.5;
      const remainingScroll = el.scrollHeight - el.clientHeight;
      const sign = dY < 0 ? -1 : 1;
      const method = dY < 0 ? 'max' : 'min';
      if (el.scrollHeight <= el.clientHeight) {
        return;
      }
      if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
        e.preventDefault();
        ReactDOM.flushSync(() => {
          onChange(d => d + Math[method](dY, remainingScroll * sign));
        });
      } else if (/firefox/i.test(getUserAgent())) {
        // Needed to propagate scrolling during momentum scrolling phase once
        // it gets limited by the boundary. UX improvement, not critical.
        el.scrollTop += dY;
      }
    }
    const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
    if (open && el) {
      el.addEventListener('wheel', onWheel);

      // Wait for the position to be ready.
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
        if (overflowRef.current != null) {
          initialOverflowRef.current = {
            ...overflowRef.current
          };
        }
      });
      return () => {
        prevScrollTopRef.current = null;
        initialOverflowRef.current = null;
        el.removeEventListener('wheel', onWheel);
      };
    }
  }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
  const floating = React.useMemo(() => ({
    onKeyDown() {
      controlledScrollingRef.current = true;
    },
    onWheel() {
      controlledScrollingRef.current = false;
    },
    onPointerMove() {
      controlledScrollingRef.current = false;
    },
    onScroll() {
      const el = (scrollRef == null ? void 0 : scrollRef.current) || elements.floating;
      if (!overflowRef.current || !el || !controlledScrollingRef.current) {
        return;
      }
      if (prevScrollTopRef.current !== null) {
        const scrollDiff = el.scrollTop - prevScrollTopRef.current;
        if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
          ReactDOM.flushSync(() => onChange(d => d + scrollDiff));
        }
      }

      // [Firefox] Wait for the height change to have been applied.
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
      });
    }
  }), [elements.floating, onChange, overflowRef, scrollRef]);
  return React.useMemo(() => enabled ? {
    floating
  } : {}, [enabled, floating]);
}

let y$1=createContext({styles:void 0,setReference:()=>{},setFloating:()=>{},getReferenceProps:()=>({}),getFloatingProps:()=>({}),slot:{}});y$1.displayName="FloatingContext";let $=createContext(null);$.displayName="PlacementContext";function ye(e){return useMemo(()=>e?typeof e=="string"?{to:e}:e:null,[e])}function Fe$1(){return useContext(y$1).setReference}function be(){return useContext(y$1).getReferenceProps}function Te$1(){let{getFloatingProps:e,slot:t}=useContext(y$1);return useCallback((...n)=>Object.assign({},e(...n),{"data-anchor":t.anchor}),[e,t])}function Re(e=null){e===false&&(e=null),typeof e=="string"&&(e={to:e});let t=useContext($),n=useMemo(()=>e,[JSON.stringify(e,(l,o)=>{var u;return (u=o==null?void 0:o.outerHTML)!=null?u:o})]);n$5(()=>{t==null||t(n!=null?n:null);},[t,n]);let r=useContext(y$1);return useMemo(()=>[r.setFloating,e?r.styles:{}],[r.setFloating,e,r.styles])}let D$2=4;function Ae$1({children:e,enabled:t=true}){let[n,r]=useState(null),[l,o]=useState(0),u=useRef(null),[f,s]=useState(null);ce(f);let i=t&&n!==null&&f!==null,{to:F="bottom",gap:E=0,offset:A=0,padding:c=0,inner:h}=ge(n,f),[a,p="center"]=F.split(" ");n$5(()=>{i&&o(0);},[i]);let{refs:b,floatingStyles:S,context:g}=useFloating({open:i,placement:a==="selection"?p==="center"?"bottom":`bottom-${p}`:p==="center"?`${a}`:`${a}-${p}`,strategy:"absolute",transform:false,middleware:[offset({mainAxis:a==="selection"?0:E,crossAxis:A}),shift({padding:c}),a!=="selection"&&flip({padding:c}),a==="selection"&&h?inner({...h,padding:c,overflowRef:u,offset:l,minItemsVisible:D$2,referenceOverflowThreshold:c,onFallbackChange(P){var L,N;if(!P)return;let d=g.elements.floating;if(!d)return;let M=parseFloat(getComputedStyle(d).scrollPaddingBottom)||0,I=Math.min(D$2,d.childElementCount),W=0,B=0;for(let m of (N=(L=g.elements.floating)==null?void 0:L.childNodes)!=null?N:[])if(n$4(m)){let x=m.offsetTop,k=x+m.clientHeight+M,H=d.scrollTop,U=H+d.clientHeight;if(x>=H&&k<=U)I--;else {B=Math.max(0,Math.min(k,U)-Math.max(x,H)),W=m.clientHeight;break}}I>=1&&o(m=>{let x=W*I-B+M;return m>=x?m:x});}}):null,size({padding:c,apply({availableWidth:P,availableHeight:d,elements:M}){Object.assign(M.floating.style,{overflow:"auto",maxWidth:`${P}px`,maxHeight:`min(var(--anchor-max-height, 100vh), ${d}px)`});}})].filter(Boolean),whileElementsMounted:autoUpdate}),[w=a,V=p]=g.placement.split("-");a==="selection"&&(w="selection");let G=useMemo(()=>({anchor:[w,V].filter(Boolean).join(" ")}),[w,V]),K=useInnerOffset(g,{overflowRef:u,onChange:o}),{getReferenceProps:Q,getFloatingProps:X}=useInteractions([K]),Y=o$6(P=>{s(P),b.setFloating(P);});return React.createElement($.Provider,{value:r},React.createElement(y$1.Provider,{value:{setFloating:Y,setReference:b.setReference,styles:S,getReferenceProps:Q,getFloatingProps:X,slot:G}},e))}function ce(e){n$5(()=>{if(!e)return;let t=new MutationObserver(()=>{let n=window.getComputedStyle(e).maxHeight,r=parseFloat(n);if(isNaN(r))return;let l=parseInt(n);isNaN(l)||r!==l&&(e.style.maxHeight=`${Math.ceil(r)}px`);});return t.observe(e,{attributes:true,attributeFilter:["style"]}),()=>{t.disconnect();}},[e]);}function ge(e,t){var o,u,f;let n=O$1((o=e==null?void 0:e.gap)!=null?o:"var(--anchor-gap, 0)",t),r=O$1((u=e==null?void 0:e.offset)!=null?u:"var(--anchor-offset, 0)",t),l=O$1((f=e==null?void 0:e.padding)!=null?f:"var(--anchor-padding, 0)",t);return {...e,gap:n,offset:r,padding:l}}function O$1(e,t,n=void 0){let r=p$4(),l=o$6((s,i)=>{if(s==null)return [n,null];if(typeof s=="number")return [s,null];if(typeof s=="string"){if(!i)return [n,null];let F=J$1(s,i);return [F,E=>{let A=q$1(s);{let c=A.map(h=>window.getComputedStyle(i).getPropertyValue(h));r.requestAnimationFrame(function h(){r.nextFrame(h);let a=false;for(let[b,S]of A.entries()){let g=window.getComputedStyle(i).getPropertyValue(S);if(c[b]!==g){c[b]=g,a=true;break}}if(!a)return;let p=J$1(s,i);F!==p&&(E(p),F=p);});}return r.dispose}]}return [n,null]}),o=useMemo(()=>l(e,t)[0],[e,t]),[u=o,f]=useState();return n$5(()=>{let[s,i]=l(e,t);if(f(s),!!i)return i(f)},[e,t]),u}function q$1(e){let t=/var\((.*)\)/.exec(e);if(t){let n=t[1].indexOf(",");if(n===-1)return [t[1]];let r=t[1].slice(0,n).trim(),l=t[1].slice(n+1).trim();return l?[r,...q$1(l)]:[r]}return []}function J$1(e,t){let n=document.createElement("div");t.appendChild(n),n.style.setProperty("margin-top","0px","important"),n.style.setProperty("margin-top",e,"important");let r=parseFloat(window.getComputedStyle(n).marginTop)||0;return t.removeChild(n),r}

let n=createContext(null);n.displayName="OpenClosedContext";var i=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(i||{});function u$1(){return useContext(n)}function c$2({value:o,children:t}){return React__default.createElement(n.Provider,{value:o},t)}

function u(l){throw new Error("Unexpected object: "+l)}var c$1=(i=>(i[i.First=0]="First",i[i.Previous=1]="Previous",i[i.Next=2]="Next",i[i.Last=3]="Last",i[i.Specific=4]="Specific",i[i.Nothing=5]="Nothing",i))(c$1||{});function f$1(l,n){let t=n.resolveItems();if(t.length<=0)return null;let r=n.resolveActiveIndex(),s=r!=null?r:-1;switch(l.focus){case 0:{for(let e=0;e<t.length;++e)if(!n.resolveDisabled(t[e],e,t))return e;return r}case 1:{s===-1&&(s=t.length);for(let e=s-1;e>=0;--e)if(!n.resolveDisabled(t[e],e,t))return e;return r}case 2:{for(let e=s+1;e<t.length;++e)if(!n.resolveDisabled(t[e],e,t))return e;return r}case 3:{for(let e=t.length-1;e>=0;--e)if(!n.resolveDisabled(t[e],e,t))return e;return r}case 4:{for(let e=0;e<t.length;++e)if(n.resolveId(t[e],e,t)===l.id)return e;return r}case 5:return null;default:u(l);}}

function c(t){let r=o$6(t),e=useRef(false);useEffect(()=>(e.current=false,()=>{e.current=true,t$4(()=>{e.current&&r();});}),[r]);}

function s$3(){let r=typeof document=="undefined";return "useSyncExternalStore"in React?(o=>o.useSyncExternalStore)(React)(()=>()=>{},()=>false,()=>!r):false}function l(){let r=s$3(),[e,n]=React.useState(s$8.isHandoffComplete);return e&&s$8.isHandoffComplete===false&&n(false),React.useEffect(()=>{e!==true&&n(true);},[e]),React.useEffect(()=>s$8.handoff(),[]),r?false:e}

let e=createContext(false);function a$2(){return useContext(e)}

function I(e){let l=a$2(),o=useContext(H),[r,u]=useState(()=>{var i;if(!l&&o!==null)return (i=o.current)!=null?i:null;if(s$8.isServer)return null;let t=e==null?void 0:e.getElementById("headlessui-portal-root");if(t)return t;if(e===null)return null;let a=e.createElement("div");return a.setAttribute("id","headlessui-portal-root"),e.body.appendChild(a)});return useEffect(()=>{r!==null&&(e!=null&&e.body.contains(r)||e==null||e.body.appendChild(r));},[r,e]),useEffect(()=>{l||o!==null&&u(o.current);},[o,u,l]),r}let M$1=Fragment$1,D$1=K(function(l$1,o){let{ownerDocument:r=null,...u}=l$1,t=useRef(null),a=y$6(T$2(s=>{t.current=s;}),o),i=n$1(t),f=r!=null?r:i,p=I(f),[n]=useState(()=>{var s;return s$8.isServer?null:(s=f==null?void 0:f.createElement("div"))!=null?s:null}),P=useContext(g$1),O=l();n$5(()=>{!p||!n||p.contains(n)||(n.setAttribute("data-headlessui-portal",""),p.appendChild(n));},[p,n]),n$5(()=>{if(n&&P)return P.register(n)},[P,n]),c(()=>{var s;!p||!n||(o$5(n)&&p.contains(n)&&p.removeChild(n),p.childNodes.length<=0&&((s=p.parentElement)==null||s.removeChild(p)));});let b=L$3();return O?!p||!n?null:createPortal(b({ourProps:{ref:a},theirProps:u,slot:{},defaultTag:M$1,name:"Portal"}),n):null});function J(e,l){let o=y$6(l),{enabled:r=true,ownerDocument:u,...t}=e,a=L$3();return r?React__default.createElement(D$1,{...t,ownerDocument:u,ref:o}):a({ourProps:{ref:o},theirProps:t,slot:{},defaultTag:M$1,name:"Portal"})}let X$1=Fragment$1,H=createContext(null);function k(e,l){let{target:o,...r}=e,t={ref:y$6(l)},a=L$3();return React__default.createElement(H.Provider,{value:o},a({ourProps:t,theirProps:r,defaultTag:X$1,name:"Popover.Group"}))}let g$1=createContext(null);let B=K(J),q=K(k),ne=Object.assign(B,{Group:q});

function f(){let e=useRef(false);return n$5(()=>(e.current=true,()=>{e.current=false;}),[]),e}

function ue(e){var t;return !!(e.enter||e.enterFrom||e.enterTo||e.leave||e.leaveFrom||e.leaveTo)||((t=e.as)!=null?t:de)!==Fragment$1||React__default.Children.count(e.children)===1}let w=createContext(null);w.displayName="TransitionContext";var _e=(n=>(n.Visible="visible",n.Hidden="hidden",n))(_e||{});function De(){let e=useContext(w);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function He(){let e=useContext(M);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let M=createContext(null);M.displayName="NestingContext";function U(e){return "children"in e?U(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function Te(e,t){let n=s$7(e),l=useRef([]),S=f(),R=p$4(),d=o$6((o,i=A$1.Hidden)=>{let a=l.current.findIndex(({el:s})=>s===o);a!==-1&&(u$8(i,{[A$1.Unmount](){l.current.splice(a,1);},[A$1.Hidden](){l.current[a].state="hidden";}}),R.microTask(()=>{var s;!U(l)&&S.current&&((s=n.current)==null||s.call(n));}));}),y=o$6(o=>{let i=l.current.find(({el:a})=>a===o);return i?i.state!=="visible"&&(i.state="visible"):l.current.push({el:o,state:"visible"}),()=>d(o,A$1.Unmount)}),C=useRef([]),p=useRef(Promise.resolve()),h=useRef({enter:[],leave:[]}),g=o$6((o,i,a)=>{C.current.splice(0),t&&(t.chains.current[i]=t.chains.current[i].filter(([s])=>s!==o)),t==null||t.chains.current[i].push([o,new Promise(s=>{C.current.push(s);})]),t==null||t.chains.current[i].push([o,new Promise(s=>{Promise.all(h.current[i].map(([r,f])=>f)).then(()=>s());})]),i==="enter"?p.current=p.current.then(()=>t==null?void 0:t.wait.current).then(()=>a(i)):a(i);}),v=o$6((o,i,a)=>{Promise.all(h.current[i].splice(0).map(([s,r])=>r)).then(()=>{var s;(s=C.current.shift())==null||s();}).then(()=>a(i));});return useMemo(()=>({children:l,register:y,unregister:d,onStart:g,onStop:v,wait:p,chains:h}),[y,d,l,g,v,h,p])}let de=Fragment$1,fe=O$3.RenderStrategy;function Ae(e,t){var ee,te;let{transition:n=true,beforeEnter:l$1,afterEnter:S,beforeLeave:R$1,afterLeave:d,enter:y,enterFrom:C,enterTo:p,entered:h,leave:g,leaveFrom:v,leaveTo:o,...i$1}=e,[a,s]=useState(null),r=useRef(null),f=ue(e),j=y$6(...f?[r,t,s]:t===null?[]:[t]),H=(ee=i$1.unmount)==null||ee?A$1.Unmount:A$1.Hidden,{show:u,appear:z,initial:K}=De(),[m,G]=useState(u?"visible":"hidden"),Q=He(),{register:A,unregister:I}=Q;n$5(()=>A(r),[A,r]),n$5(()=>{if(H===A$1.Hidden&&r.current){if(u&&m!=="visible"){G("visible");return}return u$8(m,{["hidden"]:()=>I(r),["visible"]:()=>A(r)})}},[m,r,A,I,u,H]);let B=l();n$5(()=>{if(f&&B&&m==="visible"&&r.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[r,m,B,f]);let ce=K&&!z,Y=z&&u&&K,W=useRef(false),L=Te(()=>{W.current||(G("hidden"),I(r));},Q),Z=o$6(k=>{W.current=true;let F=k?"enter":"leave";L.onStart(r,F,_=>{_==="enter"?l$1==null||l$1():_==="leave"&&(R$1==null||R$1());});}),$=o$6(k=>{let F=k?"enter":"leave";W.current=false,L.onStop(r,F,_=>{_==="enter"?S==null||S():_==="leave"&&(d==null||d());}),F==="leave"&&!U(L)&&(G("hidden"),I(r));});useEffect(()=>{f&&n||(Z(u),$(u));},[u,f,n]);let pe=(()=>!(!n||!f||!B||ce))(),[,T]=x$1(pe,a,u,{start:Z,end:$}),Ce=m$4({ref:j,className:((te=t$3(i$1.className,Y&&y,Y&&C,T.enter&&y,T.enter&&T.closed&&C,T.enter&&!T.closed&&p,T.leave&&g,T.leave&&!T.closed&&v,T.leave&&T.closed&&o,!T.transition&&u&&h))==null?void 0:te.trim())||void 0,...R(T)}),N=0;m==="visible"&&(N|=i.Open),m==="hidden"&&(N|=i.Closed),u&&m==="hidden"&&(N|=i.Opening),!u&&m==="visible"&&(N|=i.Closing);let he=L$3();return React__default.createElement(M.Provider,{value:L},React__default.createElement(c$2,{value:N},he({ourProps:Ce,theirProps:i$1,defaultTag:de,features:fe,visible:m==="visible",name:"Transition.Child"})))}function Ie(e,t){let{show:n,appear:l$1=false,unmount:S=true,...R}=e,d=useRef(null),y=ue(e),C=y$6(...y?[d,t]:t===null?[]:[t]);l();let p=u$1();if(n===void 0&&p!==null&&(n=(p&i.Open)===i.Open),n===void 0)throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[h,g]=useState(n?"visible":"hidden"),v=Te(()=>{n||g("hidden");}),[o,i$1]=useState(true),a=useRef([n]);n$5(()=>{o!==false&&a.current[a.current.length-1]!==n&&(a.current.push(n),i$1(false));},[a,n]);let s=useMemo(()=>({show:n,appear:l$1,initial:o}),[n,l$1,o]);n$5(()=>{n?g("visible"):!U(v)&&d.current!==null&&g("hidden");},[n,v]);let r={unmount:S},f=o$6(()=>{var u;o&&i$1(false),(u=e.beforeEnter)==null||u.call(e);}),j=o$6(()=>{var u;o&&i$1(false),(u=e.beforeLeave)==null||u.call(e);}),H=L$3();return React__default.createElement(M.Provider,{value:v},React__default.createElement(w.Provider,{value:s},H({ourProps:{...r,as:Fragment$1,children:React__default.createElement(me,{ref:C,...r,...R,beforeEnter:f,beforeLeave:j})},theirProps:{},defaultTag:Fragment$1,features:fe,visible:h==="visible",name:"Transition"})))}function Le(e,t){let n=useContext(w)!==null,l=u$1()!==null;return React__default.createElement(React__default.Fragment,null,!n&&l?React__default.createElement(X,{ref:t,...e}):React__default.createElement(me,{ref:t,...e}))}let X=K(Ie),me=K(Ae),Fe=K(Le),ze=Object.assign(X,{Child:Fe,Root:X});

function s$2(n,t){let e=useRef({left:0,top:0});if(n$5(()=>{if(!t)return;let r=t.getBoundingClientRect();r&&(e.current=r);},[n,t]),t==null||!n||t===document.activeElement)return  false;let o=t.getBoundingClientRect();return o.top!==e.current.top||o.left!==e.current.left}

let a$1=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function o(e){var l,n;let i=(l=e.innerText)!=null?l:"",t=e.cloneNode(true);if(!n$4(t))return i;let u=false;for(let f of t.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))f.remove(),u=true;let r=u?(n=t.innerText)!=null?n:"":i;return a$1.test(r)&&(r=r.replace(a$1,"")),r}function F$1(e){let i=e.getAttribute("aria-label");if(typeof i=="string")return i.trim();let t=e.getAttribute("aria-labelledby");if(t){let u=t.split(" ").map(r=>{let l=document.getElementById(r);if(l){let n=l.getAttribute("aria-label");return typeof n=="string"?n.trim():o(l).trim()}return null}).filter(Boolean);if(u.length>0)return u.join(", ")}return o(e).trim()}

function s$1(c){let t=useRef(""),r=useRef("");return o$6(()=>{let e=c.current;if(!e)return "";let u=e.innerText;if(t.current===u)return r.current;let n=F$1(e).trim().toLowerCase();return t.current=u,r.current=n,n})}

var h=Object.defineProperty;var y=(e,i,t)=>i in e?h(e,i,{enumerable:true,configurable:true,writable:true,value:t}):e[i]=t;var g=(e,i,t)=>(y(e,typeof i!="symbol"?i+"":i,t),t);var E=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))(E||{}),O=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(O||{}),F=(r=>(r[r.OpenMenu=0]="OpenMenu",r[r.CloseMenu=1]="CloseMenu",r[r.GoToItem=2]="GoToItem",r[r.Search=3]="Search",r[r.ClearSearch=4]="ClearSearch",r[r.RegisterItems=5]="RegisterItems",r[r.UnregisterItems=6]="UnregisterItems",r[r.SetButtonElement=7]="SetButtonElement",r[r.SetItemsElement=8]="SetItemsElement",r[r.SortItems=9]="SortItems",r))(F||{});function S(e,i=t=>t){let t=e.activeItemIndex!==null?e.items[e.activeItemIndex]:null,n=P(i(e.items.slice()),l=>l.dataRef.current.domRef.current),s=t?n.indexOf(t):null;return s===-1&&(s=null),{items:n,activeItemIndex:s}}let D={[1](e){return e.menuState===1?e:{...e,activeItemIndex:null,pendingFocus:{focus:c$1.Nothing},menuState:1}},[0](e,i){return e.menuState===0?e:{...e,__demoMode:false,pendingFocus:i.focus,menuState:0}},[2]:(e,i)=>{var l,o,d,a,I;if(e.menuState===1)return e;let t={...e,searchQuery:"",activationTrigger:(l=i.trigger)!=null?l:1,__demoMode:false};if(i.focus===c$1.Nothing)return {...t,activeItemIndex:null};if(i.focus===c$1.Specific)return {...t,activeItemIndex:e.items.findIndex(r=>r.id===i.id)};if(i.focus===c$1.Previous){let r=e.activeItemIndex;if(r!==null){let p=e.items[r].dataRef.current.domRef,m=f$1(i,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});if(m!==null){let u=e.items[m].dataRef.current.domRef;if(((o=p.current)==null?void 0:o.previousElementSibling)===u.current||((d=u.current)==null?void 0:d.previousElementSibling)===null)return {...t,activeItemIndex:m}}}}else if(i.focus===c$1.Next){let r=e.activeItemIndex;if(r!==null){let p=e.items[r].dataRef.current.domRef,m=f$1(i,{resolveItems:()=>e.items,resolveActiveIndex:()=>e.activeItemIndex,resolveId:u=>u.id,resolveDisabled:u=>u.dataRef.current.disabled});if(m!==null){let u=e.items[m].dataRef.current.domRef;if(((a=p.current)==null?void 0:a.nextElementSibling)===u.current||((I=u.current)==null?void 0:I.nextElementSibling)===null)return {...t,activeItemIndex:m}}}}let n=S(e),s=f$1(i,{resolveItems:()=>n.items,resolveActiveIndex:()=>n.activeItemIndex,resolveId:r=>r.id,resolveDisabled:r=>r.dataRef.current.disabled});return {...t,...n,activeItemIndex:s}},[3]:(e,i)=>{let n=e.searchQuery!==""?0:1,s=e.searchQuery+i.value.toLowerCase(),o=(e.activeItemIndex!==null?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(a=>{var I;return ((I=a.dataRef.current.textValue)==null?void 0:I.startsWith(s))&&!a.dataRef.current.disabled}),d=o?e.items.indexOf(o):-1;return d===-1||d===e.activeItemIndex?{...e,searchQuery:s}:{...e,searchQuery:s,activeItemIndex:d,activationTrigger:1}},[4](e){return e.searchQuery===""?e:{...e,searchQuery:"",searchActiveItemIndex:null}},[5]:(e,i)=>{let t=e.items.concat(i.items.map(s=>s)),n=e.activeItemIndex;return e.pendingFocus.focus!==c$1.Nothing&&(n=f$1(e.pendingFocus,{resolveItems:()=>t,resolveActiveIndex:()=>e.activeItemIndex,resolveId:s=>s.id,resolveDisabled:s=>s.dataRef.current.disabled})),{...e,items:t,activeItemIndex:n,pendingFocus:{focus:c$1.Nothing},pendingShouldSort:true}},[6]:(e,i)=>{let t=e.items,n=[],s=new Set(i.items);for(let[l,o]of t.entries())if(s.has(o.id)&&(n.push(l),s.delete(o.id),s.size===0))break;if(n.length>0){t=t.slice();for(let l of n.reverse())t.splice(l,1);}return {...e,items:t,activationTrigger:1}},[7]:(e,i)=>e.buttonElement===i.element?e:{...e,buttonElement:i.element},[8]:(e,i)=>e.itemsElement===i.element?e:{...e,itemsElement:i.element},[9]:e=>e.pendingShouldSort?{...e,...S(e),pendingShouldSort:false}:e};class x extends E$2{constructor(t){super(t);g(this,"actions",{registerItem:x$3(()=>{let t=[],n=new Set;return [(s,l)=>{n.has(l)||(n.add(l),t.push({id:s,dataRef:l}));},()=>(n.clear(),this.send({type:5,items:t.splice(0)}))]}),unregisterItem:x$3(()=>{let t=[];return [n=>t.push(n),()=>this.send({type:6,items:t.splice(0)})]})});g(this,"selectors",{activeDescendantId(t){var l;let n=t.activeItemIndex,s=t.items;return n===null||(l=s[n])==null?void 0:l.id},isActive(t,n){var o;let s=t.activeItemIndex,l=t.items;return s!==null?((o=l[s])==null?void 0:o.id)===n:false},shouldScrollIntoView(t,n){return t.__demoMode||t.menuState!==0||t.activationTrigger===0?false:this.isActive(t,n)}});this.on(5,()=>{this.disposables.requestAnimationFrame(()=>{this.send({type:9});});});{let n=this.state.id,s=x$2.get(null);this.disposables.add(s.on(k$3.Push,l=>{!s.selectors.isTop(l,n)&&this.state.menuState===0&&this.send({type:1});})),this.on(0,()=>s.actions.push(n)),this.on(1,()=>s.actions.pop(n));}}static new({id:t,__demoMode:n=false}){return new x({id:t,__demoMode:n,menuState:n?0:1,buttonElement:null,itemsElement:null,items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1,pendingShouldSort:false,pendingFocus:{focus:c$1.Nothing}})}reduce(t,n){return u$8(n.type,D,t,n)}}

const a=createContext(null);function p(t){let n=useContext(a);if(n===null){let e=new Error(`<${t} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(e,s),e}return n}function s({id:t,__demoMode:n=false}){let e=useMemo(()=>x.new({id:t,__demoMode:n}),[]);return c(()=>e.dispose()),e}

let et=Fragment$1;function tt(c,E$1){let p=useId$1(),{__demoMode:a$1=false,...s$1}=c,l=s({id:p,__demoMode:a$1}),[n,g,y]=S$2(l,T=>[T.menuState,T.itemsElement,T.buttonElement]),I=y$6(E$1),o=x$2.get(null),h=S$2(o,useCallback(T=>o.selectors.isTop(T,p),[o,p]));k$2(h,[y,g],(T,u)=>{var f;l.send({type:F.CloseMenu}),A(u,h$1.Loose)||(T.preventDefault(),(f=l.state.buttonElement)==null||f.focus());});let _=o$6(()=>{l.send({type:F.CloseMenu});}),M=useMemo(()=>({open:n===E.Open,close:_}),[n,_]),i$1={ref:I},b=L$3();return React__default.createElement(Ae$1,null,React__default.createElement(a.Provider,{value:l},React__default.createElement(c$2,{value:u$8(n,{[E.Open]:i.Open,[E.Closed]:i.Closed})},b({ourProps:i$1,theirProps:s$1,slot:M,defaultTag:et,name:"Menu"}))))}let ot="button";function nt(c,E$1){let p$1=p("Menu.Button"),a=useId$1(),{id:s=`headlessui-menu-button-${a}`,disabled:l=false,autoFocus:n=false,...g}=c,y=useRef(null),I=be(),o=y$6(E$1,y,Fe$1(),o$6(e=>p$1.send({type:F.SetButtonElement,element:e}))),h=o$6(e=>{switch(e.key){case o$4.Space:case o$4.Enter:case o$4.ArrowDown:e.preventDefault(),e.stopPropagation(),p$1.send({type:F.OpenMenu,focus:{focus:c$1.First}});break;case o$4.ArrowUp:e.preventDefault(),e.stopPropagation(),p$1.send({type:F.OpenMenu,focus:{focus:c$1.Last}});break}}),_=o$6(e=>{switch(e.key){case o$4.Space:e.preventDefault();break}}),[M,i,b]=S$2(p$1,e=>[e.menuState,e.buttonElement,e.itemsElement]),T=M===E.Open;k$1(T,{trigger:i,action:useCallback(e=>{if(i!=null&&i.contains(e.target))return g$2.Ignore;let R=e.target.closest('[role="menuitem"]:not([data-disabled])');return n$4(R)?g$2.Select(R):b!=null&&b.contains(e.target)?g$2.Ignore:g$2.Close},[i,b]),close:useCallback(()=>p$1.send({type:F.CloseMenu}),[]),select:useCallback(e=>e.click(),[])});let u=o$6(e=>{var R;if(e.button===0){if(s$6(e.currentTarget))return e.preventDefault();l||(M===E.Open?(flushSync(()=>p$1.send({type:F.CloseMenu})),(R=y.current)==null||R.focus({preventScroll:true})):(e.preventDefault(),p$1.send({type:F.OpenMenu,focus:{focus:c$1.Nothing},trigger:O.Pointer})));}}),{isFocusVisible:f,focusProps:v}=$f7dceffc5ad7768b$export$4e328f61c538687f({autoFocus:n}),{isHovered:S,hoverProps:O$1}=$6179b936705e76d3$export$ae780daf29e6d456({isDisabled:l}),{pressed:F$1,pressProps:U}=w$4({disabled:l}),H=useMemo(()=>({open:M===E.Open,active:F$1||M===E.Open,disabled:l,hover:S,focus:f,autofocus:n}),[M,S,f,F$1,l,n]),G=_$2(I(),{ref:o,id:s,type:e$1(c,y.current),"aria-haspopup":"menu","aria-controls":b==null?void 0:b.id,"aria-expanded":M===E.Open,disabled:l||void 0,autoFocus:n,onKeyDown:h,onKeyUp:_,onPointerDown:u},v,O$1,U);return L$3()({ourProps:G,theirProps:g,slot:H,defaultTag:ot,name:"Menu.Button"})}let rt="div",at=O$3.RenderStrategy|O$3.Static;function st(c,E$1){let p$2=useId$1(),{id:a=`headlessui-menu-items-${p$2}`,anchor:s,portal:l=false,modal:n=true,transition:g=false,...y}=c,I=ye(s),o=p("Menu.Items"),[h,_]=Re(I),M=Te$1(),[i$1,b]=useState(null),T=y$6(E$1,I?h:null,o$6(t=>o.send({type:F.SetItemsElement,element:t})),b),[u,f]=S$2(o,t=>[t.menuState,t.buttonElement]),v=n$1(f),S=n$1(i$1);I&&(l=true);let O=u$1(),[F$1,U]=x$1(g,i$1,O!==null?(O&i.Open)===i.Open:u===E.Open);p$1(F$1,f,()=>{o.send({type:F.CloseMenu});});let H=S$2(o,t=>t.__demoMode),G=H?false:n&&u===E.Open;f$2(G,S);let w=H?false:n&&u===E.Open;y$3(w,{allowed:useCallback(()=>[f,i$1],[f,i$1])});let e=u!==E.Open,le=s$2(e,f)?false:F$1;useEffect(()=>{let t=i$1;t&&u===E.Open&&t!==(S==null?void 0:S.activeElement)&&t.focus({preventScroll:true});},[u,i$1,S]),F$2(u===E.Open,{container:i$1,accept(t){return t.getAttribute("role")==="menuitem"?NodeFilter.FILTER_REJECT:t.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},walk(t){t.setAttribute("role","none");}});let z=p$4(),pe=o$6(t=>{var N,Y,Z;switch(z.dispose(),t.key){case o$4.Space:if(o.state.searchQuery!=="")return t.preventDefault(),t.stopPropagation(),o.send({type:F.Search,value:t.key});case o$4.Enter:if(t.preventDefault(),t.stopPropagation(),o.state.activeItemIndex!==null){let{dataRef:ce}=o.state.items[o.state.activeItemIndex];(Y=(N=ce.current)==null?void 0:N.domRef.current)==null||Y.click();}o.send({type:F.CloseMenu}),V(o.state.buttonElement);break;case o$4.ArrowDown:return t.preventDefault(),t.stopPropagation(),o.send({type:F.GoToItem,focus:c$1.Next});case o$4.ArrowUp:return t.preventDefault(),t.stopPropagation(),o.send({type:F.GoToItem,focus:c$1.Previous});case o$4.Home:case o$4.PageUp:return t.preventDefault(),t.stopPropagation(),o.send({type:F.GoToItem,focus:c$1.First});case o$4.End:case o$4.PageDown:return t.preventDefault(),t.stopPropagation(),o.send({type:F.GoToItem,focus:c$1.Last});case o$4.Escape:t.preventDefault(),t.stopPropagation(),flushSync(()=>o.send({type:F.CloseMenu})),(Z=o.state.buttonElement)==null||Z.focus({preventScroll:true});break;case o$4.Tab:t.preventDefault(),t.stopPropagation(),flushSync(()=>o.send({type:F.CloseMenu})),j$1(o.state.buttonElement,t.shiftKey?T$1.Previous:T$1.Next);break;default:t.key.length===1&&(o.send({type:F.Search,value:t.key}),z.setTimeout(()=>o.send({type:F.ClearSearch}),350));break}}),ie=o$6(t=>{switch(t.key){case o$4.Space:t.preventDefault();break}}),ue=useMemo(()=>({open:u===E.Open}),[u]),de=_$2(I?M():{},{"aria-activedescendant":S$2(o,o.selectors.activeDescendantId),"aria-labelledby":S$2(o,t=>{var N;return (N=t.buttonElement)==null?void 0:N.id}),id:a,onKeyDown:pe,onKeyUp:ie,role:"menu",tabIndex:u===E.Open?0:void 0,ref:T,style:{...y.style,..._,"--button-width":d$2(f,true).width},...R(U)}),me=L$3();return React__default.createElement(ne,{enabled:l?c.static||F$1:false,ownerDocument:v},me({ourProps:de,theirProps:y,slot:ue,defaultTag:rt,features:at,visible:le,name:"Menu.Items"}))}let lt=Fragment$1;function pt(c,E){let p$1=useId$1(),{id:a=`headlessui-menu-item-${p$1}`,disabled:s=false,...l}=c,n=p("Menu.Item"),g=S$2(n,e=>n.selectors.isActive(e,a)),y=useRef(null),I=y$6(E,y),o=S$2(n,e=>n.selectors.shouldScrollIntoView(e,a));n$5(()=>{if(o)return o$7().requestAnimationFrame(()=>{var e,R;(R=(e=y.current)==null?void 0:e.scrollIntoView)==null||R.call(e,{block:"nearest"});})},[o,y]);let h=s$1(y),_=useRef({disabled:s,domRef:y,get textValue(){return h()}});n$5(()=>{_.current.disabled=s;},[_,s]),n$5(()=>(n.actions.registerItem(a,_),()=>n.actions.unregisterItem(a)),[_,a]);let M=o$6(()=>{n.send({type:F.CloseMenu});}),i=o$6(e=>{if(s)return e.preventDefault();n.send({type:F.CloseMenu}),V(n.state.buttonElement);}),b=o$6(()=>{if(s)return n.send({type:F.GoToItem,focus:c$1.Nothing});n.send({type:F.GoToItem,focus:c$1.Specific,id:a});}),T=u$2(),u=o$6(e=>{T.update(e),!s&&(g||n.send({type:F.GoToItem,focus:c$1.Specific,id:a,trigger:O.Pointer}));}),f=o$6(e=>{T.wasMoved(e)&&(s||g||n.send({type:F.GoToItem,focus:c$1.Specific,id:a,trigger:O.Pointer}));}),v=o$6(e=>{T.wasMoved(e)&&(s||g&&n.send({type:F.GoToItem,focus:c$1.Nothing}));}),[S,O$1]=Q(),[F$1,U]=w$3(),H=useMemo(()=>({active:g,focus:g,disabled:s,close:M}),[g,s,M]),G={id:a,ref:I,role:"menuitem",tabIndex:s===true?void 0:-1,"aria-disabled":s===true?true:void 0,"aria-labelledby":S,"aria-describedby":F$1,disabled:void 0,onClick:i,onFocus:b,onPointerEnter:u,onMouseEnter:u,onPointerMove:f,onMouseMove:f,onPointerLeave:v,onMouseLeave:v},w=L$3();return React__default.createElement(O$1,null,React__default.createElement(U,null,w({ourProps:G,theirProps:l,slot:H,defaultTag:lt,name:"Menu.Item"})))}let it="div";function ut(c,E){let[p,a]=Q(),s=c,l={ref:E,"aria-labelledby":p,role:"group"},n=L$3();return React__default.createElement(a,null,n({ourProps:l,theirProps:s,slot:{},defaultTag:it,name:"Menu.Section"}))}let dt="header";function mt(c,E){let p=useId$1(),{id:a=`headlessui-menu-heading-${p}`,...s}=c,l=C$2();n$5(()=>l.register(a),[a,l.register]);let n={id:a,ref:E,role:"presentation",...l.props};return L$3()({ourProps:n,theirProps:s,slot:{},defaultTag:dt,name:"Menu.Heading"})}let ct="div";function Tt(c,E){let p=c,a={ref:E,role:"separator"};return L$3()({ourProps:a,theirProps:p,slot:{},defaultTag:ct,name:"Menu.Separator"})}let ft=K(tt),yt=K(nt),Pt=K(st),Et=K(pt),gt=K(ut),Mt=K(mt),bt=K(Tt),lo=Object.assign(ft,{Button:yt,Items:Pt,Item:Et,Section:gt,Heading:Mt,Separator:bt});

function DropdownProfile({ align }) {
    return (jsxs(lo, { as: "div", className: "relative inline-flex", children: [jsx(yt, { className: "inline-flex justify-center items-center group", children: "drop" }), jsxs(ze, { as: "div", className: `origin-top-right z-10 absolute top-full min-w-[11rem] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700/60 py-1.5 rounded-lg shadow-lg overflow-hidden mt-1 ${align === "right" ? "right-0" : "left-0"}`, enter: "transition ease-out duration-200 transform", enterFrom: "opacity-0 -translate-y-2", enterTo: "opacity-100 translate-y-0", leave: "transition ease-out duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: [jsx("div", { className: "pt-0.5 pb-2 px-3 mb-1 border-b border-gray-200 dark:border-gray-700/60", children: jsx("div", { className: "font-medium text-gray-800 dark:text-gray-100", children: "Acme Inc." }) }), jsx(Pt, { as: "ul", className: "focus:outline-none", children: jsx(Et, { onClick: () => { }, as: "li", children: ({ active }) => (jsx("span", { className: `font-medium cursor-pointer text-sm flex items-center py-1 px-3 ${active ? "text-violet-600 dark:text-violet-400" : "text-violet-500"}`, children: "Sign Out" })) }) })] })] }));
}

function AuthHeader({ variant = "default", items, onSubscriptionClick }) {
    const { sidebarOpen, setSidebarOpen } = useAppProvider();
    return (jsx("header", { className: `sticky top-0   before:absolute before:inset-0 before:backdrop-blur-md max-lg:before:bg-white/90 dark:max-lg:before:bg-gray-800/90 before:-z-10 z-30 ${variant === "v2" || variant === "v3"
            ? "before:bg-white after:absolute after:h-px after:inset-x-0 after:top-full after:bg-gray-200 dark:after:bg-gray-700/60 after:-z-10"
            : "max-lg:shadow-sm lg:before:bg-gray-100/90 dark:lg:before:bg-gray-900/90"} ${variant === "v2" ? "dark:before:bg-gray-800" : ""} ${variant === "v3" ? "dark:before:bg-gray-900" : ""}`, children: jsx("div", { className: "px-4 sm:px-6 lg:px-8", children: jsxs("div", { className: `flex items-center justify-between h-16 ${variant === "v2" || variant === "v3" ? "" : "lg:border-b border-gray-200 dark:border-gray-700/60"}`, children: [jsxs("div", { className: "flex items-center space-x-3", children: [jsxs("button", { className: "text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 lg:hidden", "aria-controls": "sidebar", "aria-expanded": sidebarOpen, onClick: () => {
                                    setSidebarOpen(!sidebarOpen);
                                }, children: [jsx("span", { className: "sr-only", children: "Open sidebar" }), jsxs("svg", { className: "w-6 h-6 fill-current", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: [jsx("rect", { x: "4", y: "5", width: "16", height: "2" }), jsx("rect", { x: "4", y: "11", width: "16", height: "2" }), jsx("rect", { x: "4", y: "17", width: "16", height: "2" })] })] }), items] }), jsx("div", { className: "flex-1" }), jsxs("div", { className: "flex items-center space-x-3", children: [onSubscriptionClick && (jsx("button", { onClick: onSubscriptionClick, className: ` cursor-pointer  text-indigo-500 flex items-center text-sm font-medium leading-5 rounded-full px-3 py-1  shadow-sm transition border border-indigo-500 hover:text-gray-800 hover:border-gray-800`, children: "Subscription" })), jsx(ThemeToggle, {}), jsx("hr", { className: "w-px h-6 bg-gray-200 dark:bg-gray-700/60 border-none" }), jsx(DropdownProfile, { align: "right" })] })] }) }) }));
}

export { AuthHeader, RootLayout, Sidebar };
//# sourceMappingURL=index.esm.js.map
