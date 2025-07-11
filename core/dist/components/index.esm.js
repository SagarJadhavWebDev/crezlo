import require$$1, { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import require$$0, { createContext, useContext, useState, useEffect, useRef } from 'react';

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

var css_248z = "/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=fallback\");@import url(\"https://fonts.googleapis.com/css2?family=Reddit+Sans:ital,wght@0,200..900;1,200..900&display=swap\");@layer theme, base, components, utilities;@layer theme{:host,:root{--font-sans:ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace;--color-indigo-500:#9b49ff;--color-indigo-600:#6a2dba;--color-violet-500:#8470ff;--color-gray-50:#f9fafb;--color-gray-100:#f3f4f6;--color-gray-200:#e5e7eb;--color-gray-300:#bfc4cd;--color-gray-400:#9ca3af;--color-gray-500:#6b7280;--color-gray-600:#4b5563;--color-gray-700:#374151;--color-gray-800:#1f2937;--color-gray-900:#111827;--color-white:#fff;--spacing:0.25rem;--text-xs:0.75rem;--text-xs--line-height:1.5;--text-sm:0.875rem;--text-sm--line-height:1.5715;--text-2xl:1.5rem;--text-2xl--line-height:1.33;--text-3xl:1.88rem;--text-3xl--line-height:1.33;--text-4xl:2.25rem;--text-4xl--line-height:1.25;--text-5xl:3rem;--text-5xl--line-height:1.25;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-extrabold:800;--tracking-tighter:-0.05em;--tracking-tight:-0.025em;--radius-sm:0.25rem;--radius-md:0.375rem;--radius-lg:0.5rem;--radius-2xl:1rem;--ease-out:cubic-bezier(0,0,0.2,1);--ease-in-out:cubic-bezier(0.4,0,0.2,1);--blur-sm:8px;--blur-md:12px;--default-transition-duration:150ms;--default-transition-timing-function:cubic-bezier(0.4,0,0.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono);--font-reddit:\"Reddit Sans\",\"sans-serif\";--text-2xl--letter-spacing:-0.01em;--text-3xl--letter-spacing:-0.01em;--text-4xl--letter-spacing:-0.02em;--text-5xl--letter-spacing:-0.02em}}@layer base{*,::backdrop,::file-selector-button,:after,:before{border:0 solid;box-sizing:border-box;margin:0;padding:0}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:var(--default-font-feature-settings,normal);-webkit-tap-highlight-color:transparent;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\",\"Noto Color Emoji\");font-variation-settings:var(--default-font-variation-settings,normal);line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:var(--default-mono-font-feature-settings,normal);font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,\"Liberation Mono\",\"Courier New\",monospace);font-size:1em;font-variation-settings:var(--default-mono-font-variation-settings,normal)}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}menu,ol,ul{list-style:none}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}::file-selector-button,button,input,optgroup,select,textarea{font-feature-settings:inherit;background-color:transparent;border-radius:0;color:inherit;font:inherit;font-variation-settings:inherit;letter-spacing:inherit;opacity:1}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::-moz-placeholder{opacity:1}::placeholder{opacity:1}@supports (not (-webkit-appearance:-apple-pay-button)) or (contain-intrinsic-size:1px){::-moz-placeholder{color:currentcolor;@supports (color:color-mix(in lab,red,red)){color:color-mix(in oklab,currentcolor 50%,transparent)}}::placeholder{color:currentcolor;@supports (color:color-mix(in lab,red,red)){color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-year-field{padding-block:0}:-moz-ui-invalid{box-shadow:none}::file-selector-button,button,input:where([type=button],[type=reset],[type=submit]){-webkit-appearance:button;-moz-appearance:button;appearance:button}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer utilities{.pointer-events-none{pointer-events:none}.collapse{visibility:collapse}.visible{visibility:visible}.sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;white-space:nowrap;width:1px}.absolute,.sr-only{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.sticky{position:sticky}.inset-0{inset:calc(var(--spacing)*0)}.top-0{top:calc(var(--spacing)*0)}.top-full{top:100%}.right-0{right:calc(var(--spacing)*0)}.left-0{left:calc(var(--spacing)*0)}.z-10{z-index:10}.z-30{z-index:30}.z-40{z-index:40}.container{width:100%;@media (width >= 480px){max-width:480px}@media (width >= 40rem){max-width:40rem}@media (width >= 48rem){max-width:48rem}@media (width >= 64rem){max-width:64rem}@media (width >= 80rem){max-width:80rem}@media (width >= 96rem){max-width:96rem}}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-3{margin-top:calc(var(--spacing)*3)}.mt-4{margin-top:calc(var(--spacing)*4)}.mt-auto{margin-top:auto}.mb-0{margin-bottom:calc(var(--spacing)*0)}.mb-0\\.5{margin-bottom:calc(var(--spacing)*.5)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-5{margin-bottom:calc(var(--spacing)*5)}.ml-1{margin-left:calc(var(--spacing)*1)}.ml-2{margin-left:calc(var(--spacing)*2)}.ml-3{margin-left:calc(var(--spacing)*3)}.ml-4{margin-left:calc(var(--spacing)*4)}.block{display:block}.flex{display:flex}.hidden{display:none}.inline-flex{display:inline-flex}.table{display:table}.h-3{height:calc(var(--spacing)*3)}.h-5{height:calc(var(--spacing)*5)}.h-6{height:calc(var(--spacing)*6)}.h-8{height:calc(var(--spacing)*8)}.h-16{height:calc(var(--spacing)*16)}.h-\\[100dvh\\]{height:100dvh}.h-\\[100vh\\]{height:100vh}.w-3{width:calc(var(--spacing)*3)}.w-6{width:calc(var(--spacing)*6)}.w-8{width:calc(var(--spacing)*8)}.w-12{width:calc(var(--spacing)*12)}.w-64{width:calc(var(--spacing)*64)}.w-px{width:1px}.min-w-\\[11rem\\]{min-width:11rem}.min-w-fit{min-width:-moz-fit-content;min-width:fit-content}.flex-1{flex:1}.shrink-0{flex-shrink:0}.origin-top-right{transform-origin:top right}.-translate-x-64{--tw-translate-x:calc(var(--spacing)*-64)}.-translate-x-64,.translate-x-0{translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-x-0{--tw-translate-x:calc(var(--spacing)*0)}.-translate-y-2{--tw-translate-y:calc(var(--spacing)*-2)}.-translate-y-2,.translate-y-0{translate:var(--tw-translate-x) var(--tw-translate-y)}.translate-y-0{--tw-translate-y:calc(var(--spacing)*0)}.rotate-180{rotate:180deg}.transform{transform:var(--tw-rotate-x,) var(--tw-rotate-y,) var(--tw-rotate-z,) var(--tw-skew-x,) var(--tw-skew-y,)}.cursor-pointer{cursor:pointer}.resize{resize:both}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-2{gap:calc(var(--spacing)*2)}.space-y-0{:where(&>:not(:last-child)){--tw-space-y-reverse:0;margin-block-end:calc(var(--spacing)*0*(1 - var(--tw-space-y-reverse)));margin-block-start:calc(var(--spacing)*0*var(--tw-space-y-reverse))}}.space-y-4{:where(&>:not(:last-child)){--tw-space-y-reverse:0;margin-block-end:calc(var(--spacing)*4*(1 - var(--tw-space-y-reverse)));margin-block-start:calc(var(--spacing)*4*var(--tw-space-y-reverse))}}.space-x-3{:where(&>:not(:last-child)){--tw-space-x-reverse:0;margin-inline-end:calc(var(--spacing)*3*(1 - var(--tw-space-x-reverse)));margin-inline-start:calc(var(--spacing)*3*var(--tw-space-x-reverse))}}.truncate{text-overflow:ellipsis;white-space:nowrap}.overflow-hidden,.truncate{overflow:hidden}.overflow-y-scroll{overflow-y:scroll}.rounded-full{border-radius:calc(infinity * 1px)}.rounded-lg{border-radius:var(--radius-lg)}.rounded-sm{border-radius:var(--radius-sm)}.rounded-r-2xl{border-bottom-right-radius:var(--radius-2xl);border-top-right-radius:var(--radius-2xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}.border-b{border-bottom-style:var(--tw-border-style);border-bottom-width:1px}.border-none{--tw-border-style:none;border-style:none}.border-gray-200{border-color:var(--color-gray-200)}.bg-gray-100{background-color:var(--color-gray-100)}.bg-gray-200{background-color:var(--color-gray-200)}.bg-gray-900{background-color:var(--color-gray-900)}.bg-gray-900\\/30{background-color:color-mix(in srgb,#111827 30%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-gray-900) 30%,transparent)}}.bg-indigo-500{background-color:var(--color-indigo-500)}.bg-white{background-color:var(--color-white)}.bg-linear-to-r{--tw-gradient-position:to right;@supports (background-image:linear-gradient(in lab,red,red)){--tw-gradient-position:to right in oklab}background-image:linear-gradient(var(--tw-gradient-stops))}.from-indigo-500{--tw-gradient-from:var(--color-indigo-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from) var(--tw-gradient-from-position),var(--tw-gradient-to) var(--tw-gradient-to-position))}.from-indigo-500\\/\\[0\\.12\\]{--tw-gradient-from:color-mix(in srgb,#9b49ff 12%,transparent);@supports (color:color-mix(in lab,red,red)){--tw-gradient-from:color-mix(in oklab,var(--color-indigo-500) 12%,transparent)}--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from) var(--tw-gradient-from-position),var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-indigo-500{--tw-gradient-to:var(--color-indigo-500);--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from) var(--tw-gradient-from-position),var(--tw-gradient-to) var(--tw-gradient-to-position))}.to-indigo-500\\/\\[0\\.04\\]{--tw-gradient-to:color-mix(in srgb,#9b49ff 4%,transparent);@supports (color:color-mix(in lab,red,red)){--tw-gradient-to:color-mix(in oklab,var(--color-indigo-500) 4%,transparent)}--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from) var(--tw-gradient-from-position),var(--tw-gradient-to) var(--tw-gradient-to-position))}.fill-current{fill:currentcolor}.p-4{padding:calc(var(--spacing)*4)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-1{padding-block:calc(var(--spacing)*1)}.py-1\\.5{padding-block:calc(var(--spacing)*1.5)}.py-2{padding-block:calc(var(--spacing)*2)}.pt-0{padding-top:calc(var(--spacing)*0)}.pt-0\\.5{padding-top:calc(var(--spacing)*.5)}.pt-3{padding-top:calc(var(--spacing)*3)}.pr-3{padding-right:calc(var(--spacing)*3)}.pb-2{padding-bottom:calc(var(--spacing)*2)}.pl-3{padding-left:calc(var(--spacing)*3)}.pl-4{padding-left:calc(var(--spacing)*4)}.pl-8{padding-left:calc(var(--spacing)*8)}.text-center{text-align:center}.font-reddit{font-family:var(--font-reddit)}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-gray-400{color:var(--color-gray-400)}.text-gray-500{color:var(--color-gray-500)}.text-gray-500\\/80{color:color-mix(in srgb,#6b7280 80%,transparent);@supports (color:color-mix(in lab,red,red)){color:color-mix(in oklab,var(--color-gray-500) 80%,transparent)}}.text-gray-600{color:var(--color-gray-600)}.text-gray-800{color:var(--color-gray-800)}.text-indigo-500{color:var(--color-indigo-500)}.text-violet-500{color:var(--color-violet-500)}.text-white{color:var(--color-white)}.lowercase{text-transform:lowercase}.uppercase{text-transform:uppercase}.italic{font-style:italic}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-0{opacity:0}.opacity-100{opacity:100%}.shadow{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,rgba(0,0,0,.1)),0 1px 2px -1px var(--tw-shadow-color,rgba(0,0,0,.1))}.shadow,.shadow-lg{box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-lg{--tw-shadow:0 10px 15px -3px var(--tw-shadow-color,rgba(0,0,0,.1)),0 4px 6px -4px var(--tw-shadow-color,rgba(0,0,0,.1))}.shadow-sm{--tw-shadow:0 1px 1px 0 var(--tw-shadow-color,rgba(0,0,0,.05)),0 1px 2px 0 var(--tw-shadow-color,rgba(0,0,0,.02))}.shadow-sm,.shadow-xs{box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-xs{--tw-shadow:0 1px 2px 0 var(--tw-shadow-color,rgba(0,0,0,.05))}.blur{--tw-blur:blur(8px)}.blur,.blur-sm{filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.blur-sm{--tw-blur:blur(var(--blur-sm))}.transition{transition-duration:var(--tw-duration,var(--default-transition-duration));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))}.transition-all{transition-duration:var(--tw-duration,var(--default-transition-duration));transition-property:all;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))}.transition-opacity{transition-duration:var(--tw-duration,var(--default-transition-duration));transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))}.transition-shadow{transition-duration:var(--tw-duration,var(--default-transition-duration));transition-property:box-shadow;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))}.duration-200{--tw-duration:200ms;transition-duration:.2s}.ease-in-out{--tw-ease:var(--ease-in-out);transition-timing-function:var(--ease-in-out)}.ease-out{--tw-ease:var(--ease-out);transition-timing-function:var(--ease-out)}.outline-solid{--tw-outline-style:solid;outline-style:solid}.group-hover\\:text-gray-800{&:is(:where(.group):hover *){@media (hover:hover){color:var(--color-gray-800)}}}.group-\\[\\.is-link-group\\]\\:text-gray-500\\/90{&:is(:where(.group):is(.is-link-group) *){color:color-mix(in srgb,#6b7280 90%,transparent);@supports (color:color-mix(in lab,red,red)){color:color-mix(in oklab,var(--color-gray-500) 90%,transparent)}}}.group-\\[\\.is-link-group\\]\\:text-indigo-500{&:is(:where(.group):is(.is-link-group) *){color:var(--color-indigo-500)}}.before\\:absolute{&:before{content:var(--tw-content);position:absolute}}.before\\:inset-0{&:before{content:var(--tw-content);inset:calc(var(--spacing)*0)}}.before\\:-z-10{&:before{content:var(--tw-content);z-index:-10}}.before\\:bg-white{&:before{background-color:var(--color-white);content:var(--tw-content)}}.before\\:backdrop-blur-md{&:before{--tw-backdrop-blur:blur(var(--blur-md));-webkit-backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);backdrop-filter:var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,);content:var(--tw-content)}}.after\\:absolute{&:after{content:var(--tw-content);position:absolute}}.after\\:inset-x-0{&:after{content:var(--tw-content);inset-inline:calc(var(--spacing)*0)}}.after\\:top-full{&:after{content:var(--tw-content);top:100%}}.after\\:-z-10{&:after{content:var(--tw-content);z-index:-10}}.after\\:h-px{&:after{content:var(--tw-content);height:1px}}.after\\:bg-gray-200{&:after{background-color:var(--color-gray-200);content:var(--tw-content)}}.last\\:mb-0{&:last-child{margin-bottom:calc(var(--spacing)*0)}}.hover\\:bg-gray-100{&:hover{@media (hover:hover){background-color:var(--color-gray-100)}}}.hover\\:text-gray-400{&:hover{@media (hover:hover){color:var(--color-gray-400)}}}.hover\\:text-gray-500{&:hover{@media (hover:hover){color:var(--color-gray-500)}}}.hover\\:text-gray-600{&:hover{@media (hover:hover){color:var(--color-gray-600)}}}.hover\\:text-gray-900{&:hover{@media (hover:hover){color:var(--color-gray-900)}}}.hover\\:shadow-xl{&:hover{@media (hover:hover){--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,rgba(0,0,0,.1)),0 8px 10px -6px var(--tw-shadow-color,rgba(0,0,0,.1));box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}}.hover\\:group-\\[\\.is-link-group\\]\\:text-gray-700{&:hover{@media (hover:hover){&:is(:where(.group):is(.is-link-group) *){color:var(--color-gray-700)}}}}.focus\\:outline-hidden{&:focus{--tw-outline-style:none;outline-style:none;@media (forced-colors:active){outline:2px solid transparent;outline-offset:2px}}}.max-lg\\:before\\:bg-white\\/90,.max-lg\\:shadow-sm{@media (width < 64rem){&:before{background-color:color-mix(in srgb,#fff 90%,transparent);content:var(--tw-content);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-white) 90%,transparent)}}}}.lg\\:before\\:bg-gray-100\\/90,.lg\\:block,.lg\\:border-b,.lg\\:flex\\!,.lg\\:hidden,.lg\\:left-auto,.lg\\:opacity-0,.lg\\:overflow-y-auto,.lg\\:px-8,.lg\\:static,.lg\\:top-auto,.lg\\:translate-x-0,.lg\\:w-20,.lg\\:z-auto,.sm\\:px-2,.sm\\:px-6{@media (width >= 64rem){&:before{background-color:color-mix(in srgb,#f3f4f6 90%,transparent);content:var(--tw-content);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-gray-100) 90%,transparent)}}}}.lg\\:hover\\:bg-gray-200{@media (width >= 64rem){&:hover{@media (hover:hover){background-color:var(--color-gray-200)}}}}.\\32 xl\\:block,.\\32 xl\\:hidden,.\\32 xl\\:opacity-100,.\\32 xl\\:w-64\\!,.dark\\:block{&:is(.dark *){display:block}}.dark\\:hidden{&:is(.dark *){display:none}}.dark\\:border-gray-700\\/60{&:is(.dark *){border-color:color-mix(in srgb,#374151 60%,transparent);@supports (color:color-mix(in lab,red,red)){border-color:color-mix(in oklab,var(--color-gray-700) 60%,transparent)}}}.dark\\:bg-gray-700\\/60{&:is(.dark *){background-color:color-mix(in srgb,#374151 60%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-gray-700) 60%,transparent)}}}.dark\\:bg-gray-800{&:is(.dark *){background-color:var(--color-gray-800)}}.dark\\:bg-gray-900{&:is(.dark *){background-color:var(--color-gray-900)}}.dark\\:from-indigo-500\\/\\[0\\.24\\]{&:is(.dark *){--tw-gradient-from:color-mix(in srgb,#9b49ff 24%,transparent);@supports (color:color-mix(in lab,red,red)){--tw-gradient-from:color-mix(in oklab,var(--color-indigo-500) 24%,transparent)}--tw-gradient-stops:var(--tw-gradient-via-stops,var(--tw-gradient-position),var(--tw-gradient-from) var(--tw-gradient-from-position),var(--tw-gradient-to) var(--tw-gradient-to-position))}}.dark\\:text-gray-100{&:is(.dark *){color:var(--color-gray-100)}}.dark\\:text-gray-400{&:is(.dark *){color:var(--color-gray-400)}}.dark\\:text-gray-400\\/80{&:is(.dark *){color:color-mix(in srgb,#9ca3af 80%,transparent);@supports (color:color-mix(in lab,red,red)){color:color-mix(in oklab,var(--color-gray-400) 80%,transparent)}}}.dark\\:text-gray-500{&:is(.dark *){color:var(--color-gray-500)}}.dark\\:group-hover\\:text-white{&:is(.dark *){&:is(:where(.group):hover *){@media (hover:hover){color:var(--color-white)}}}}.dark\\:group-\\[\\.is-link-group\\]\\:text-gray-400{&:is(.dark *){&:is(:where(.group):is(.is-link-group) *){color:var(--color-gray-400)}}}.dark\\:before\\:bg-gray-800{&:is(.dark *){&:before{background-color:var(--color-gray-800);content:var(--tw-content)}}}.dark\\:before\\:bg-gray-900{&:is(.dark *){&:before{background-color:var(--color-gray-900);content:var(--tw-content)}}}.dark\\:after\\:bg-gray-700\\/60{&:is(.dark *){&:after{background-color:color-mix(in srgb,#374151 60%,transparent);content:var(--tw-content);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-gray-700) 60%,transparent)}}}}.dark\\:hover\\:bg-gray-700\\/50{&:is(.dark *){&:hover{@media (hover:hover){background-color:color-mix(in srgb,#374151 50%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-gray-700) 50%,transparent)}}}}}.dark\\:hover\\:text-gray-400{&:is(.dark *){&:hover{@media (hover:hover){color:var(--color-gray-400)}}}}.dark\\:hover\\:text-white{&:is(.dark *){&:hover{@media (hover:hover){color:var(--color-white)}}}}.dark\\:hover\\:group-\\[\\.is-link-group\\]\\:text-gray-200{&:is(.dark *){&:hover{@media (hover:hover){&:is(:where(.group):is(.is-link-group) *){color:var(--color-gray-200)}}}}}.dark\\:max-lg\\:before\\:bg-gray-800\\/90{&:is(.dark *){@media (width < 64rem){&:before{background-color:color-mix(in srgb,#1f2937 90%,transparent);content:var(--tw-content);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-gray-800) 90%,transparent)}}}}}.dark\\:lg\\:before\\:bg-gray-900\\/90{&:is(.dark *){@media (width >= 64rem){&:before{background-color:color-mix(in srgb,#111827 90%,transparent);content:var(--tw-content);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-gray-900) 90%,transparent)}}}}}.dark\\:lg\\:hover\\:bg-gray-800{&:is(.dark *){@media (width >= 64rem){&:hover{@media (hover:hover){background-color:var(--color-gray-800)}}}}}.sidebar-expanded\\:rotate-180{&:is(.sidebar-expanded *){rotate:180deg}}.lg\\:sidebar-expanded\\:block{@media (width >= 64rem){&:is(.sidebar-expanded *){display:block}}}.lg\\:sidebar-expanded\\:hidden{@media (width >= 64rem){&:is(.sidebar-expanded *){display:none}}}.lg\\:sidebar-expanded\\:\\!w-64{@media (width >= 64rem){&:is(.sidebar-expanded *){width:calc(var(--spacing)*64)!important}}}.lg\\:sidebar-expanded\\:opacity-100{@media (width >= 64rem){&:is(.sidebar-expanded *){opacity:100%}}}}@layer components{.h1{--tw-font-weight:var(--font-weight-extrabold);--tw-tracking:var(--tracking-tighter);font-size:var(--text-4xl);font-weight:var(--font-weight-extrabold);letter-spacing:var(--tw-tracking,var(--text-4xl--letter-spacing));letter-spacing:var(--tracking-tighter);line-height:var(--tw-leading,var(--text-4xl--line-height))}.h2{--tw-font-weight:var(--font-weight-extrabold);--tw-tracking:var(--tracking-tighter);letter-spacing:var(--tw-tracking,var(--text-3xl--letter-spacing));letter-spacing:var(--tracking-tighter)}.h2,.h3{font-size:var(--text-3xl);font-weight:var(--font-weight-extrabold);line-height:var(--tw-leading,var(--text-3xl--line-height))}.h3{letter-spacing:var(--tw-tracking,var(--text-3xl--letter-spacing))}.h3,.h4{--tw-font-weight:var(--font-weight-extrabold)}.h4{--tw-tracking:var(--tracking-tight);font-size:var(--text-2xl);font-weight:var(--font-weight-extrabold);letter-spacing:var(--tw-tracking,var(--text-2xl--letter-spacing));letter-spacing:var(--tracking-tight);line-height:var(--tw-leading,var(--text-2xl--line-height))}@media (width >= 48rem){.h1{font-size:var(--text-5xl);letter-spacing:var(--tw-tracking,var(--text-5xl--letter-spacing));line-height:var(--tw-leading,var(--text-5xl--line-height))}.h2{font-size:var(--text-4xl);letter-spacing:var(--tw-tracking,var(--text-4xl--letter-spacing));line-height:var(--tw-leading,var(--text-4xl--line-height))}}.btn,.btn-lg,.btn-sm,.btn-xs{--tw-leading:calc(var(--spacing)*5);--tw-font-weight:var(--font-weight-medium);--tw-shadow:0 1px 1px 0 var(--tw-shadow-color,rgba(0,0,0,.05)),0 1px 2px 0 var(--tw-shadow-color,rgba(0,0,0,.02));align-items:center;border-color:transparent;border-radius:var(--radius-lg);border-style:var(--tw-border-style);border-width:1px;box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);display:inline-flex;font-size:var(--text-sm);font-weight:var(--font-weight-medium);justify-content:center;line-height:var(--tw-leading,var(--text-sm--line-height));line-height:calc(var(--spacing)*5);transition-duration:var(--tw-duration,var(--default-transition-duration));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function))}.btn-primary{background-color:var(--color-indigo-500);border-radius:var(--radius-md);color:var(--color-white);cursor:pointer;padding-block:calc(var(--spacing)*2)!important;padding-inline:calc(var(--spacing)*4)!important;&:hover{@media (hover:hover){background-color:var(--color-indigo-600)}}}.btn-secondary{background-color:var(--color-white);border-color:var(--color-gray-200);border-radius:var(--radius-md);border-style:var(--tw-border-style);border-width:1px;color:var(--color-gray-600);cursor:pointer;padding-block:calc(var(--spacing)*2)!important;padding-inline:calc(var(--spacing)*4)!important;&:hover{@media (hover:hover){background-color:var(--color-gray-50)}}&:is(.dark *){border-color:var(--color-gray-600)}&:is(.dark *){background-color:var(--color-gray-700)}&:is(.dark *){color:var(--color-gray-200)}&:is(.dark *){&:hover{@media (hover:hover){background-color:var(--color-gray-600)}}}}.btn-option{--tw-font-weight:var(--font-weight-semibold);background-color:var(--color-gray-100);border-radius:var(--radius-md);cursor:pointer;font-size:var(--text-xs);font-weight:var(--font-weight-semibold);line-height:var(--tw-leading,var(--text-xs--line-height));padding-block:calc(var(--spacing)*2);transition-duration:var(--tw-duration,var(--default-transition-duration));transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));&:hover{@media (hover:hover){background-color:var(--color-gray-200)}}&:is(.dark *){background-color:var(--color-gray-700)}&:is(.dark *){&:hover{@media (hover:hover){background-color:var(--color-gray-900)}}}}.btn-black{background-color:var(--color-gray-900);color:var(--color-gray-100);cursor:pointer;&:hover{@media (hover:hover){background-color:var(--color-gray-800)}}&:is(.dark *){background-color:var(--color-gray-100)}&:is(.dark *){color:var(--color-gray-800)}&:is(.dark *){&:hover{@media (hover:hover){background-color:var(--color-white)}}}}.btn{padding-block:calc(var(--spacing)*2);padding-inline:calc(var(--spacing)*3)}.btn-lg{padding-block:calc(var(--spacing)*3);padding-inline:calc(var(--spacing)*4)}.btn-sm{padding-block:calc(var(--spacing)*1)}.btn-sm,.btn-xs{padding-inline:calc(var(--spacing)*2)}.btn-xs{padding-block:calc(var(--spacing)*.5)}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration{-webkit-appearance:none}.form-checkbox,.form-input,.form-multiselect,.form-radio,.form-select,.form-textarea{background-color:var(--color-white);border-style:var(--tw-border-style);border-width:1px;&:focus{--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);--tw-ring-offset-width:0px;--tw-ring-offset-shadow:var(--tw-ring-inset,) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}&:is(.dark *){background-color:color-mix(in srgb,#111827 30%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-gray-900) 30%,transparent)}}&:is(.dark *){&:disabled{border-color:var(--color-gray-700)}}&:is(.dark *){&:disabled{background-color:color-mix(in srgb,#374151 30%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-gray-700) 30%,transparent)}}}&:is(.dark *){&:disabled{&:hover{@media (hover:hover){border-color:var(--color-gray-700)}}}}}.form-checkbox{border-radius:var(--radius-sm)}.form-input,.form-multiselect,.form-select,.form-textarea{--tw-leading:calc(var(--spacing)*5);--tw-shadow:0 1px 1px 0 var(--tw-shadow-color,rgba(0,0,0,.05)),0 1px 2px 0 var(--tw-shadow-color,rgba(0,0,0,.02));border-color:var(--color-gray-200);border-radius:var(--radius-lg);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);color:var(--color-gray-800);font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height));line-height:calc(var(--spacing)*5);padding-block:calc(var(--spacing)*2);padding-inline:calc(var(--spacing)*3);&:hover{@media (hover:hover){border-color:var(--color-gray-300)}}&:focus{border-color:var(--color-gray-300)}&:is(.dark *){border-color:color-mix(in srgb,#374151 60%,transparent);@supports (color:color-mix(in lab,red,red)){border-color:color-mix(in oklab,var(--color-gray-700) 60%,transparent)}}&:is(.dark *){color:var(--color-gray-100)}&:is(.dark *){&:hover{@media (hover:hover){border-color:var(--color-gray-600)}}}&:is(.dark *){&:focus{border-color:var(--color-gray-600)}}}.form-input,.form-textarea{&::-moz-placeholder{color:var(--color-gray-400)}&::placeholder{color:var(--color-gray-400)}&:is(.dark *){&::-moz-placeholder{color:var(--color-gray-500)}&::placeholder{color:var(--color-gray-500)}}}.form-select{padding-right:calc(var(--spacing)*10)}.form-checkbox,.form-radio{border-color:var(--color-gray-300);border-style:var(--tw-border-style);border-width:1px;color:var(--color-violet-500);&:checked{background-color:var(--color-violet-500);border-color:transparent}&:focus-visible{&:not(:checked){--tw-ring-shadow:var(--tw-ring-inset,) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}}&:focus-visible{&:not(:checked){--tw-ring-color:color-mix(in srgb,#8470ff 50%,transparent);@supports (color:color-mix(in lab,red,red)){--tw-ring-color:color-mix(in oklab,var(--color-violet-500) 50%,transparent)}}}&:is(.dark *){border-color:color-mix(in srgb,#374151 60%,transparent);@supports (color:color-mix(in lab,red,red)){border-color:color-mix(in oklab,var(--color-gray-700) 60%,transparent)}}&:is(.dark *){&:checked{border-color:transparent}}}.form-switch{position:relative;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:44px}.form-switch label{cursor:pointer;height:calc(var(--spacing)*6);overflow:hidden}.form-switch label,.form-switch label>span:first-child{border-radius:calc(infinity * 1px);display:block}.form-switch label>span:first-child{height:20px;left:2px;position:absolute;right:50%;top:2px;transition:all .15s ease-out;width:20px}.form-switch input[type=checkbox]+label{background-color:var(--color-gray-400);&:is(.dark *){background-color:var(--color-gray-700)}}.form-switch input[type=checkbox]:checked+label{background-color:var(--color-violet-500)}.form-switch input[type=checkbox]:checked+label>span:first-child{left:22px}.form-switch input[type=checkbox]:disabled+label{background-color:var(--color-gray-100);border-color:var(--color-gray-200);border-style:var(--tw-border-style);border-width:1px;cursor:not-allowed;&:is(.dark *){border-color:color-mix(in srgb,#374151 60%,transparent);@supports (color:color-mix(in lab,red,red)){border-color:color-mix(in oklab,var(--color-gray-700) 60%,transparent)}}&:is(.dark *){background-color:color-mix(in srgb,#374151 20%,transparent);@supports (color:color-mix(in lab,red,red)){background-color:color-mix(in oklab,var(--color-gray-700) 20%,transparent)}}}.form-switch input[type=checkbox]:disabled+label>span:first-child{background-color:var(--color-gray-400);&:is(.dark *){background-color:var(--color-gray-600)}}.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}.video-js{height:100%!important;-o-object-fit:contain!important;object-fit:contain!important;width:100%!important}}.la,.lab,.lad,.lal,.lar,.las{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;line-height:1;text-rendering:auto}.la-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.la-xs{font-size:.75em}.la-sm{font-size:.875em}.la-1x{font-size:1em}.la-2x{font-size:2em}.la-3x{font-size:3em}.la-4x{font-size:4em}.la-5x{font-size:5em}.la-6x{font-size:6em}.la-7x{font-size:7em}.la-8x{font-size:8em}.la-9x{font-size:9em}.la-10x{font-size:10em}.la-fw{text-align:center;width:1.25em}.la-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.la-ul>li{position:relative}.la-li{left:-2em;line-height:inherit;position:absolute;text-align:center;width:2em}.la-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}.la-pull-left{float:left}.la-pull-right{float:right}.la.la-pull-left,.lab.la-pull-left,.lal.la-pull-left,.lar.la-pull-left,.las.la-pull-left{margin-right:.3em}.la.la-pull-right,.lab.la-pull-right,.lal.la-pull-right,.lar.la-pull-right,.las.la-pull-right{margin-left:.3em}.la-spin{animation:la-spin 2s linear infinite}.la-pulse{animation:la-spin 1s steps(8) infinite}@keyframes la-spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}.la-rotate-90{transform:rotate(90deg)}.la-rotate-180{transform:rotate(180deg)}.la-rotate-270{transform:rotate(270deg)}.la-flip-horizontal{transform:scaleX(-1)}.la-flip-vertical{transform:scaleY(-1)}.la-flip-both,.la-flip-horizontal.la-flip-vertical{transform:scale(-1)}:root .la-flip-both,:root .la-flip-horizontal,:root .la-flip-vertical,:root .la-rotate-180,:root .la-rotate-270,:root .la-rotate-90{filter:none}.la-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.la-stack-1x,.la-stack-2x{left:0;position:absolute;text-align:center;width:100%}.la-stack-1x{line-height:inherit}.la-stack-2x{font-size:2em}.la-inverse{color:#fff}.la-500px:before{content:\"\\f26e\"}.la-accessible-icon:before{content:\"\\f368\"}.la-accusoft:before{content:\"\\f369\"}.la-acquisitions-incorporated:before{content:\"\\f6af\"}.la-ad:before{content:\"\\f641\"}.la-address-book:before{content:\"\\f2b9\"}.la-address-card:before{content:\"\\f2bb\"}.la-adjust:before{content:\"\\f042\"}.la-adn:before{content:\"\\f170\"}.la-adobe:before{content:\"\\f778\"}.la-adversal:before{content:\"\\f36a\"}.la-affiliatetheme:before{content:\"\\f36b\"}.la-air-freshener:before{content:\"\\f5d0\"}.la-airbnb:before{content:\"\\f834\"}.la-algolia:before{content:\"\\f36c\"}.la-align-center:before{content:\"\\f037\"}.la-align-justify:before{content:\"\\f039\"}.la-align-left:before{content:\"\\f036\"}.la-align-right:before{content:\"\\f038\"}.la-alipay:before{content:\"\\f642\"}.la-allergies:before{content:\"\\f461\"}.la-amazon:before{content:\"\\f270\"}.la-amazon-pay:before{content:\"\\f42c\"}.la-ambulance:before{content:\"\\f0f9\"}.la-american-sign-language-interpreting:before{content:\"\\f2a3\"}.la-amilia:before{content:\"\\f36d\"}.la-anchor:before{content:\"\\f13d\"}.la-android:before{content:\"\\f17b\"}.la-angellist:before{content:\"\\f209\"}.la-angle-double-down:before{content:\"\\f103\"}.la-angle-double-left:before{content:\"\\f100\"}.la-angle-double-right:before{content:\"\\f101\"}.la-angle-double-up:before{content:\"\\f102\"}.la-angle-down:before{content:\"\\f107\"}.la-angle-left:before{content:\"\\f104\"}.la-angle-right:before{content:\"\\f105\"}.la-angle-up:before{content:\"\\f106\"}.la-angry:before{content:\"\\f556\"}.la-angrycreative:before{content:\"\\f36e\"}.la-angular:before{content:\"\\f420\"}.la-ankh:before{content:\"\\f644\"}.la-app-store:before{content:\"\\f36f\"}.la-app-store-ios:before{content:\"\\f370\"}.la-apper:before{content:\"\\f371\"}.la-apple:before{content:\"\\f179\"}.la-apple-alt:before{content:\"\\f5d1\"}.la-apple-pay:before{content:\"\\f415\"}.la-archive:before{content:\"\\f187\"}.la-archway:before{content:\"\\f557\"}.la-arrow-alt-circle-down:before{content:\"\\f358\"}.la-arrow-alt-circle-left:before{content:\"\\f359\"}.la-arrow-alt-circle-right:before{content:\"\\f35a\"}.la-arrow-alt-circle-up:before{content:\"\\f35b\"}.la-arrow-circle-down:before{content:\"\\f0ab\"}.la-arrow-circle-left:before{content:\"\\f0a8\"}.la-arrow-circle-right:before{content:\"\\f0a9\"}.la-arrow-circle-up:before{content:\"\\f0aa\"}.la-arrow-down:before{content:\"\\f063\"}.la-arrow-left:before{content:\"\\f060\"}.la-arrow-right:before{content:\"\\f061\"}.la-arrow-up:before{content:\"\\f062\"}.la-arrows-alt:before{content:\"\\f0b2\"}.la-arrows-alt-h:before{content:\"\\f337\"}.la-arrows-alt-v:before{content:\"\\f338\"}.la-artstation:before{content:\"\\f77a\"}.la-assistive-listening-systems:before{content:\"\\f2a2\"}.la-asterisk:before{content:\"\\f069\"}.la-asymmetrik:before{content:\"\\f372\"}.la-at:before{content:\"\\f1fa\"}.la-atlas:before{content:\"\\f558\"}.la-atlassian:before{content:\"\\f77b\"}.la-atom:before{content:\"\\f5d2\"}.la-audible:before{content:\"\\f373\"}.la-audio-description:before{content:\"\\f29e\"}.la-autoprefixer:before{content:\"\\f41c\"}.la-avianex:before{content:\"\\f374\"}.la-aviato:before{content:\"\\f421\"}.la-award:before{content:\"\\f559\"}.la-aws:before{content:\"\\f375\"}.la-baby:before{content:\"\\f77c\"}.la-baby-carriage:before{content:\"\\f77d\"}.la-backspace:before{content:\"\\f55a\"}.la-backward:before{content:\"\\f04a\"}.la-bacon:before{content:\"\\f7e5\"}.la-balance-scale:before{content:\"\\f24e\"}.la-balance-scale-left:before{content:\"\\f515\"}.la-balance-scale-right:before{content:\"\\f516\"}.la-ban:before{content:\"\\f05e\"}.la-band-aid:before{content:\"\\f462\"}.la-bandcamp:before{content:\"\\f2d5\"}.la-barcode:before{content:\"\\f02a\"}.la-bars:before{content:\"\\f0c9\"}.la-baseball-ball:before{content:\"\\f433\"}.la-basketball-ball:before{content:\"\\f434\"}.la-bath:before{content:\"\\f2cd\"}.la-battery-empty:before{content:\"\\f244\"}.la-battery-full:before{content:\"\\f240\"}.la-battery-half:before{content:\"\\f242\"}.la-battery-quarter:before{content:\"\\f243\"}.la-battery-three-quarters:before{content:\"\\f241\"}.la-battle-net:before{content:\"\\f835\"}.la-bed:before{content:\"\\f236\"}.la-beer:before{content:\"\\f0fc\"}.la-behance:before{content:\"\\f1b4\"}.la-behance-square:before{content:\"\\f1b5\"}.la-bell:before{content:\"\\f0f3\"}.la-bell-slash:before{content:\"\\f1f6\"}.la-bezier-curve:before{content:\"\\f55b\"}.la-bible:before{content:\"\\f647\"}.la-bicycle:before{content:\"\\f206\"}.la-biking:before{content:\"\\f84a\"}.la-bimobject:before{content:\"\\f378\"}.la-binoculars:before{content:\"\\f1e5\"}.la-biohazard:before{content:\"\\f780\"}.la-birthday-cake:before{content:\"\\f1fd\"}.la-bitbucket:before{content:\"\\f171\"}.la-bitcoin:before{content:\"\\f379\"}.la-bity:before{content:\"\\f37a\"}.la-black-tie:before{content:\"\\f27e\"}.la-blackberry:before{content:\"\\f37b\"}.la-blender:before{content:\"\\f517\"}.la-blender-phone:before{content:\"\\f6b6\"}.la-blind:before{content:\"\\f29d\"}.la-blog:before{content:\"\\f781\"}.la-blogger:before{content:\"\\f37c\"}.la-blogger-b:before{content:\"\\f37d\"}.la-bluetooth:before{content:\"\\f293\"}.la-bluetooth-b:before{content:\"\\f294\"}.la-bold:before{content:\"\\f032\"}.la-bolt:before{content:\"\\f0e7\"}.la-bomb:before{content:\"\\f1e2\"}.la-bone:before{content:\"\\f5d7\"}.la-bong:before{content:\"\\f55c\"}.la-book:before{content:\"\\f02d\"}.la-book-dead:before{content:\"\\f6b7\"}.la-book-medical:before{content:\"\\f7e6\"}.la-book-open:before{content:\"\\f518\"}.la-book-reader:before{content:\"\\f5da\"}.la-bookmark:before{content:\"\\f02e\"}.la-bootstrap:before{content:\"\\f836\"}.la-border-all:before{content:\"\\f84c\"}.la-border-none:before{content:\"\\f850\"}.la-border-style:before{content:\"\\f853\"}.la-bowling-ball:before{content:\"\\f436\"}.la-box:before{content:\"\\f466\"}.la-box-open:before{content:\"\\f49e\"}.la-boxes:before{content:\"\\f468\"}.la-braille:before{content:\"\\f2a1\"}.la-brain:before{content:\"\\f5dc\"}.la-bread-slice:before{content:\"\\f7ec\"}.la-briefcase:before{content:\"\\f0b1\"}.la-briefcase-medical:before{content:\"\\f469\"}.la-broadcast-tower:before{content:\"\\f519\"}.la-broom:before{content:\"\\f51a\"}.la-brush:before{content:\"\\f55d\"}.la-btc:before{content:\"\\f15a\"}.la-buffer:before{content:\"\\f837\"}.la-bug:before{content:\"\\f188\"}.la-building:before{content:\"\\f1ad\"}.la-bullhorn:before{content:\"\\f0a1\"}.la-bullseye:before{content:\"\\f140\"}.la-burn:before{content:\"\\f46a\"}.la-buromobelexperte:before{content:\"\\f37f\"}.la-bus:before{content:\"\\f207\"}.la-bus-alt:before{content:\"\\f55e\"}.la-business-time:before{content:\"\\f64a\"}.la-buy-n-large:before{content:\"\\f8a6\"}.la-buysellads:before{content:\"\\f20d\"}.la-calculator:before{content:\"\\f1ec\"}.la-calendar:before{content:\"\\f133\"}.la-calendar-alt:before{content:\"\\f073\"}.la-calendar-check:before{content:\"\\f274\"}.la-calendar-day:before{content:\"\\f783\"}.la-calendar-minus:before{content:\"\\f272\"}.la-calendar-plus:before{content:\"\\f271\"}.la-calendar-times:before{content:\"\\f273\"}.la-calendar-week:before{content:\"\\f784\"}.la-camera:before{content:\"\\f030\"}.la-camera-retro:before{content:\"\\f083\"}.la-campground:before{content:\"\\f6bb\"}.la-canadian-maple-leaf:before{content:\"\\f785\"}.la-candy-cane:before{content:\"\\f786\"}.la-cannabis:before{content:\"\\f55f\"}.la-capsules:before{content:\"\\f46b\"}.la-car:before{content:\"\\f1b9\"}.la-car-alt:before{content:\"\\f5de\"}.la-car-battery:before{content:\"\\f5df\"}.la-car-crash:before{content:\"\\f5e1\"}.la-car-side:before{content:\"\\f5e4\"}.la-caret-down:before{content:\"\\f0d7\"}.la-caret-left:before{content:\"\\f0d9\"}.la-caret-right:before{content:\"\\f0da\"}.la-caret-square-down:before{content:\"\\f150\"}.la-caret-square-left:before{content:\"\\f191\"}.la-caret-square-right:before{content:\"\\f152\"}.la-caret-square-up:before{content:\"\\f151\"}.la-caret-up:before{content:\"\\f0d8\"}.la-carrot:before{content:\"\\f787\"}.la-cart-arrow-down:before{content:\"\\f218\"}.la-cart-plus:before{content:\"\\f217\"}.la-cash-register:before{content:\"\\f788\"}.la-cat:before{content:\"\\f6be\"}.la-cc-amazon-pay:before{content:\"\\f42d\"}.la-cc-amex:before{content:\"\\f1f3\"}.la-cc-apple-pay:before{content:\"\\f416\"}.la-cc-diners-club:before{content:\"\\f24c\"}.la-cc-discover:before{content:\"\\f1f2\"}.la-cc-jcb:before{content:\"\\f24b\"}.la-cc-mastercard:before{content:\"\\f1f1\"}.la-cc-paypal:before{content:\"\\f1f4\"}.la-cc-stripe:before{content:\"\\f1f5\"}.la-cc-visa:before{content:\"\\f1f0\"}.la-centercode:before{content:\"\\f380\"}.la-centos:before{content:\"\\f789\"}.la-certificate:before{content:\"\\f0a3\"}.la-chair:before{content:\"\\f6c0\"}.la-chalkboard:before{content:\"\\f51b\"}.la-chalkboard-teacher:before{content:\"\\f51c\"}.la-charging-station:before{content:\"\\f5e7\"}.la-chart-area:before{content:\"\\f1fe\"}.la-chart-bar:before{content:\"\\f080\"}.la-chart-line:before{content:\"\\f201\"}.la-chart-pie:before{content:\"\\f200\"}.la-check:before{content:\"\\f00c\"}.la-check-circle:before{content:\"\\f058\"}.la-check-double:before{content:\"\\f560\"}.la-check-square:before{content:\"\\f14a\"}.la-cheese:before{content:\"\\f7ef\"}.la-chess:before{content:\"\\f439\"}.la-chess-bishop:before{content:\"\\f43a\"}.la-chess-board:before{content:\"\\f43c\"}.la-chess-king:before{content:\"\\f43f\"}.la-chess-knight:before{content:\"\\f441\"}.la-chess-pawn:before{content:\"\\f443\"}.la-chess-queen:before{content:\"\\f445\"}.la-chess-rook:before{content:\"\\f447\"}.la-chevron-circle-down:before{content:\"\\f13a\"}.la-chevron-circle-left:before{content:\"\\f137\"}.la-chevron-circle-right:before{content:\"\\f138\"}.la-chevron-circle-up:before{content:\"\\f139\"}.la-chevron-down:before{content:\"\\f078\"}.la-chevron-left:before{content:\"\\f053\"}.la-chevron-right:before{content:\"\\f054\"}.la-chevron-up:before{content:\"\\f077\"}.la-child:before{content:\"\\f1ae\"}.la-chrome:before{content:\"\\f268\"}.la-chromecast:before{content:\"\\f838\"}.la-church:before{content:\"\\f51d\"}.la-circle:before{content:\"\\f111\"}.la-circle-notch:before{content:\"\\f1ce\"}.la-city:before{content:\"\\f64f\"}.la-clinic-medical:before{content:\"\\f7f2\"}.la-clipboard:before{content:\"\\f328\"}.la-clipboard-check:before{content:\"\\f46c\"}.la-clipboard-list:before{content:\"\\f46d\"}.la-clock:before{content:\"\\f017\"}.la-clone:before{content:\"\\f24d\"}.la-closed-captioning:before{content:\"\\f20a\"}.la-cloud:before{content:\"\\f0c2\"}.la-cloud-download-alt:before{content:\"\\f381\"}.la-cloud-meatball:before{content:\"\\f73b\"}.la-cloud-moon:before{content:\"\\f6c3\"}.la-cloud-moon-rain:before{content:\"\\f73c\"}.la-cloud-rain:before{content:\"\\f73d\"}.la-cloud-showers-heavy:before{content:\"\\f740\"}.la-cloud-sun:before{content:\"\\f6c4\"}.la-cloud-sun-rain:before{content:\"\\f743\"}.la-cloud-upload-alt:before{content:\"\\f382\"}.la-cloudscale:before{content:\"\\f383\"}.la-cloudsmith:before{content:\"\\f384\"}.la-cloudversify:before{content:\"\\f385\"}.la-cocktail:before{content:\"\\f561\"}.la-code:before{content:\"\\f121\"}.la-code-branch:before{content:\"\\f126\"}.la-codepen:before{content:\"\\f1cb\"}.la-codiepie:before{content:\"\\f284\"}.la-coffee:before{content:\"\\f0f4\"}.la-cog:before{content:\"\\f013\"}.la-cogs:before{content:\"\\f085\"}.la-coins:before{content:\"\\f51e\"}.la-columns:before{content:\"\\f0db\"}.la-comment:before{content:\"\\f075\"}.la-comment-alt:before{content:\"\\f27a\"}.la-comment-dollar:before{content:\"\\f651\"}.la-comment-dots:before{content:\"\\f4ad\"}.la-comment-medical:before{content:\"\\f7f5\"}.la-comment-slash:before{content:\"\\f4b3\"}.la-comments:before{content:\"\\f086\"}.la-comments-dollar:before{content:\"\\f653\"}.la-compact-disc:before{content:\"\\f51f\"}.la-compass:before{content:\"\\f14e\"}.la-compress:before{content:\"\\f066\"}.la-compress-arrows-alt:before{content:\"\\f78c\"}.la-concierge-bell:before{content:\"\\f562\"}.la-confluence:before{content:\"\\f78d\"}.la-connectdevelop:before{content:\"\\f20e\"}.la-contao:before{content:\"\\f26d\"}.la-cookie:before{content:\"\\f563\"}.la-cookie-bite:before{content:\"\\f564\"}.la-copy:before{content:\"\\f0c5\"}.la-copyright:before{content:\"\\f1f9\"}.la-cotton-bureau:before{content:\"\\f89e\"}.la-couch:before{content:\"\\f4b8\"}.la-cpanel:before{content:\"\\f388\"}.la-creative-commons:before{content:\"\\f25e\"}.la-creative-commons-by:before{content:\"\\f4e7\"}.la-creative-commons-nc:before{content:\"\\f4e8\"}.la-creative-commons-nc-eu:before{content:\"\\f4e9\"}.la-creative-commons-nc-jp:before{content:\"\\f4ea\"}.la-creative-commons-nd:before{content:\"\\f4eb\"}.la-creative-commons-pd:before{content:\"\\f4ec\"}.la-creative-commons-pd-alt:before{content:\"\\f4ed\"}.la-creative-commons-remix:before{content:\"\\f4ee\"}.la-creative-commons-sa:before{content:\"\\f4ef\"}.la-creative-commons-sampling:before{content:\"\\f4f0\"}.la-creative-commons-sampling-plus:before{content:\"\\f4f1\"}.la-creative-commons-share:before{content:\"\\f4f2\"}.la-creative-commons-zero:before{content:\"\\f4f3\"}.la-credit-card:before{content:\"\\f09d\"}.la-critical-role:before{content:\"\\f6c9\"}.la-crop:before{content:\"\\f125\"}.la-crop-alt:before{content:\"\\f565\"}.la-cross:before{content:\"\\f654\"}.la-crosshairs:before{content:\"\\f05b\"}.la-crow:before{content:\"\\f520\"}.la-crown:before{content:\"\\f521\"}.la-crutch:before{content:\"\\f7f7\"}.la-css3:before{content:\"\\f13c\"}.la-css3-alt:before{content:\"\\f38b\"}.la-cube:before{content:\"\\f1b2\"}.la-cubes:before{content:\"\\f1b3\"}.la-cut:before{content:\"\\f0c4\"}.la-cuttlefish:before{content:\"\\f38c\"}.la-d-and-d:before{content:\"\\f38d\"}.la-d-and-d-beyond:before{content:\"\\f6ca\"}.la-dashcube:before{content:\"\\f210\"}.la-database:before{content:\"\\f1c0\"}.la-deaf:before{content:\"\\f2a4\"}.la-delicious:before{content:\"\\f1a5\"}.la-democrat:before{content:\"\\f747\"}.la-deploydog:before{content:\"\\f38e\"}.la-deskpro:before{content:\"\\f38f\"}.la-desktop:before{content:\"\\f108\"}.la-dev:before{content:\"\\f6cc\"}.la-deviantart:before{content:\"\\f1bd\"}.la-dharmachakra:before{content:\"\\f655\"}.la-dhl:before{content:\"\\f790\"}.la-diagnoses:before{content:\"\\f470\"}.la-diaspora:before{content:\"\\f791\"}.la-dice:before{content:\"\\f522\"}.la-dice-d20:before{content:\"\\f6cf\"}.la-dice-d6:before{content:\"\\f6d1\"}.la-dice-five:before{content:\"\\f523\"}.la-dice-four:before{content:\"\\f524\"}.la-dice-one:before{content:\"\\f525\"}.la-dice-six:before{content:\"\\f526\"}.la-dice-three:before{content:\"\\f527\"}.la-dice-two:before{content:\"\\f528\"}.la-digg:before{content:\"\\f1a6\"}.la-digital-ocean:before{content:\"\\f391\"}.la-digital-tachograph:before{content:\"\\f566\"}.la-directions:before{content:\"\\f5eb\"}.la-discord:before{content:\"\\f392\"}.la-discourse:before{content:\"\\f393\"}.la-divide:before{content:\"\\f529\"}.la-dizzy:before{content:\"\\f567\"}.la-dna:before{content:\"\\f471\"}.la-dochub:before{content:\"\\f394\"}.la-docker:before{content:\"\\f395\"}.la-dog:before{content:\"\\f6d3\"}.la-dollar-sign:before{content:\"\\f155\"}.la-dolly:before{content:\"\\f472\"}.la-dolly-flatbed:before{content:\"\\f474\"}.la-donate:before{content:\"\\f4b9\"}.la-door-closed:before{content:\"\\f52a\"}.la-door-open:before{content:\"\\f52b\"}.la-dot-circle:before{content:\"\\f192\"}.la-dove:before{content:\"\\f4ba\"}.la-download:before{content:\"\\f019\"}.la-draft2digital:before{content:\"\\f396\"}.la-drafting-compass:before{content:\"\\f568\"}.la-dragon:before{content:\"\\f6d5\"}.la-draw-polygon:before{content:\"\\f5ee\"}.la-dribbble:before{content:\"\\f17d\"}.la-dribbble-square:before{content:\"\\f397\"}.la-dropbox:before{content:\"\\f16b\"}.la-drum:before{content:\"\\f569\"}.la-drum-steelpan:before{content:\"\\f56a\"}.la-drumstick-bite:before{content:\"\\f6d7\"}.la-drupal:before{content:\"\\f1a9\"}.la-dumbbell:before{content:\"\\f44b\"}.la-dumpster:before{content:\"\\f793\"}.la-dumpster-fire:before{content:\"\\f794\"}.la-dungeon:before{content:\"\\f6d9\"}.la-dyalog:before{content:\"\\f399\"}.la-earlybirds:before{content:\"\\f39a\"}.la-ebay:before{content:\"\\f4f4\"}.la-edge:before{content:\"\\f282\"}.la-edit:before{content:\"\\f044\"}.la-egg:before{content:\"\\f7fb\"}.la-eject:before{content:\"\\f052\"}.la-elementor:before{content:\"\\f430\"}.la-ellipsis-h:before{content:\"\\f141\"}.la-ellipsis-v:before{content:\"\\f142\"}.la-ello:before{content:\"\\f5f1\"}.la-ember:before{content:\"\\f423\"}.la-empire:before{content:\"\\f1d1\"}.la-envelope:before{content:\"\\f0e0\"}.la-envelope-open:before{content:\"\\f2b6\"}.la-envelope-open-text:before{content:\"\\f658\"}.la-envelope-square:before{content:\"\\f199\"}.la-envira:before{content:\"\\f299\"}.la-equals:before{content:\"\\f52c\"}.la-eraser:before{content:\"\\f12d\"}.la-erlang:before{content:\"\\f39d\"}.la-ethereum:before{content:\"\\f42e\"}.la-ethernet:before{content:\"\\f796\"}.la-etsy:before{content:\"\\f2d7\"}.la-euro-sign:before{content:\"\\f153\"}.la-evernote:before{content:\"\\f839\"}.la-exchange-alt:before{content:\"\\f362\"}.la-exclamation:before{content:\"\\f12a\"}.la-exclamation-circle:before{content:\"\\f06a\"}.la-exclamation-triangle:before{content:\"\\f071\"}.la-expand:before{content:\"\\f065\"}.la-expand-arrows-alt:before{content:\"\\f31e\"}.la-expeditedssl:before{content:\"\\f23e\"}.la-external-link-alt:before{content:\"\\f35d\"}.la-external-link-square-alt:before{content:\"\\f360\"}.la-eye:before{content:\"\\f06e\"}.la-eye-dropper:before{content:\"\\f1fb\"}.la-eye-slash:before{content:\"\\f070\"}.la-facebook:before{content:\"\\f09a\"}.la-facebook-f:before{content:\"\\f39e\"}.la-facebook-messenger:before{content:\"\\f39f\"}.la-facebook-square:before{content:\"\\f082\"}.la-fan:before{content:\"\\f863\"}.la-fantasy-flight-games:before{content:\"\\f6dc\"}.la-fast-backward:before{content:\"\\f049\"}.la-fast-forward:before{content:\"\\f050\"}.la-fax:before{content:\"\\f1ac\"}.la-feather:before{content:\"\\f52d\"}.la-feather-alt:before{content:\"\\f56b\"}.la-fedex:before{content:\"\\f797\"}.la-fedora:before{content:\"\\f798\"}.la-female:before{content:\"\\f182\"}.la-fighter-jet:before{content:\"\\f0fb\"}.la-figma:before{content:\"\\f799\"}.la-file:before{content:\"\\f15b\"}.la-file-alt:before{content:\"\\f15c\"}.la-file-archive:before{content:\"\\f1c6\"}.la-file-audio:before{content:\"\\f1c7\"}.la-file-code:before{content:\"\\f1c9\"}.la-file-contract:before{content:\"\\f56c\"}.la-file-csv:before{content:\"\\f6dd\"}.la-file-download:before{content:\"\\f56d\"}.la-file-excel:before{content:\"\\f1c3\"}.la-file-export:before{content:\"\\f56e\"}.la-file-image:before{content:\"\\f1c5\"}.la-file-import:before{content:\"\\f56f\"}.la-file-invoice:before{content:\"\\f570\"}.la-file-invoice-dollar:before{content:\"\\f571\"}.la-file-medical:before{content:\"\\f477\"}.la-file-medical-alt:before{content:\"\\f478\"}.la-file-pdf:before{content:\"\\f1c1\"}.la-file-powerpoint:before{content:\"\\f1c4\"}.la-file-prescription:before{content:\"\\f572\"}.la-file-signature:before{content:\"\\f573\"}.la-file-upload:before{content:\"\\f574\"}.la-file-video:before{content:\"\\f1c8\"}.la-file-word:before{content:\"\\f1c2\"}.la-fill:before{content:\"\\f575\"}.la-fill-drip:before{content:\"\\f576\"}.la-film:before{content:\"\\f008\"}.la-filter:before{content:\"\\f0b0\"}.la-fingerprint:before{content:\"\\f577\"}.la-fire:before{content:\"\\f06d\"}.la-fire-alt:before{content:\"\\f7e4\"}.la-fire-extinguisher:before{content:\"\\f134\"}.la-firefox:before{content:\"\\f269\"}.la-first-aid:before{content:\"\\f479\"}.la-first-order:before{content:\"\\f2b0\"}.la-first-order-alt:before{content:\"\\f50a\"}.la-firstdraft:before{content:\"\\f3a1\"}.la-fish:before{content:\"\\f578\"}.la-fist-raised:before{content:\"\\f6de\"}.la-flag:before{content:\"\\f024\"}.la-flag-checkered:before{content:\"\\f11e\"}.la-flag-usa:before{content:\"\\f74d\"}.la-flask:before{content:\"\\f0c3\"}.la-flickr:before{content:\"\\f16e\"}.la-flipboard:before{content:\"\\f44d\"}.la-flushed:before{content:\"\\f579\"}.la-fly:before{content:\"\\f417\"}.la-folder:before{content:\"\\f07b\"}.la-folder-minus:before{content:\"\\f65d\"}.la-folder-open:before{content:\"\\f07c\"}.la-folder-plus:before{content:\"\\f65e\"}.la-font:before{content:\"\\f031\"}.la-font-awesome:before{content:\"\\f2b4\"}.la-font-awesome-alt:before{content:\"\\f35c\"}.la-font-awesome-flag:before{content:\"\\f425\"}.la-font-awesome-logo-full:before{content:\"\\f4e6\"}.la-fonticons:before{content:\"\\f280\"}.la-fonticons-fi:before{content:\"\\f3a2\"}.la-football-ball:before{content:\"\\f44e\"}.la-fort-awesome:before{content:\"\\f286\"}.la-fort-awesome-alt:before{content:\"\\f3a3\"}.la-forumbee:before{content:\"\\f211\"}.la-forward:before{content:\"\\f04e\"}.la-foursquare:before{content:\"\\f180\"}.la-free-code-camp:before{content:\"\\f2c5\"}.la-freebsd:before{content:\"\\f3a4\"}.la-frog:before{content:\"\\f52e\"}.la-frown:before{content:\"\\f119\"}.la-frown-open:before{content:\"\\f57a\"}.la-fulcrum:before{content:\"\\f50b\"}.la-funnel-dollar:before{content:\"\\f662\"}.la-futbol:before{content:\"\\f1e3\"}.la-galactic-republic:before{content:\"\\f50c\"}.la-galactic-senate:before{content:\"\\f50d\"}.la-gamepad:before{content:\"\\f11b\"}.la-gas-pump:before{content:\"\\f52f\"}.la-gavel:before{content:\"\\f0e3\"}.la-gem:before{content:\"\\f3a5\"}.la-genderless:before{content:\"\\f22d\"}.la-get-pocket:before{content:\"\\f265\"}.la-gg:before{content:\"\\f260\"}.la-gg-circle:before{content:\"\\f261\"}.la-ghost:before{content:\"\\f6e2\"}.la-gift:before{content:\"\\f06b\"}.la-gifts:before{content:\"\\f79c\"}.la-git:before{content:\"\\f1d3\"}.la-git-alt:before{content:\"\\f841\"}.la-git-square:before{content:\"\\f1d2\"}.la-github:before{content:\"\\f09b\"}.la-github-alt:before{content:\"\\f113\"}.la-github-square:before{content:\"\\f092\"}.la-gitkraken:before{content:\"\\f3a6\"}.la-gitlab:before{content:\"\\f296\"}.la-gitter:before{content:\"\\f426\"}.la-glass-cheers:before{content:\"\\f79f\"}.la-glass-martini:before{content:\"\\f000\"}.la-glass-martini-alt:before{content:\"\\f57b\"}.la-glass-whiskey:before{content:\"\\f7a0\"}.la-glasses:before{content:\"\\f530\"}.la-glide:before{content:\"\\f2a5\"}.la-glide-g:before{content:\"\\f2a6\"}.la-globe:before{content:\"\\f0ac\"}.la-globe-africa:before{content:\"\\f57c\"}.la-globe-americas:before{content:\"\\f57d\"}.la-globe-asia:before{content:\"\\f57e\"}.la-globe-europe:before{content:\"\\f7a2\"}.la-gofore:before{content:\"\\f3a7\"}.la-golf-ball:before{content:\"\\f450\"}.la-goodreads:before{content:\"\\f3a8\"}.la-goodreads-g:before{content:\"\\f3a9\"}.la-google:before{content:\"\\f1a0\"}.la-google-drive:before{content:\"\\f3aa\"}.la-google-play:before{content:\"\\f3ab\"}.la-google-plus:before{content:\"\\f2b3\"}.la-google-plus-g:before{content:\"\\f0d5\"}.la-google-plus-square:before{content:\"\\f0d4\"}.la-google-wallet:before{content:\"\\f1ee\"}.la-gopuram:before{content:\"\\f664\"}.la-graduation-cap:before{content:\"\\f19d\"}.la-gratipay:before{content:\"\\f184\"}.la-grav:before{content:\"\\f2d6\"}.la-greater-than:before{content:\"\\f531\"}.la-greater-than-equal:before{content:\"\\f532\"}.la-grimace:before{content:\"\\f57f\"}.la-grin:before{content:\"\\f580\"}.la-grin-alt:before{content:\"\\f581\"}.la-grin-beam:before{content:\"\\f582\"}.la-grin-beam-sweat:before{content:\"\\f583\"}.la-grin-hearts:before{content:\"\\f584\"}.la-grin-squint:before{content:\"\\f585\"}.la-grin-squint-tears:before{content:\"\\f586\"}.la-grin-stars:before{content:\"\\f587\"}.la-grin-tears:before{content:\"\\f588\"}.la-grin-tongue:before{content:\"\\f589\"}.la-grin-tongue-squint:before{content:\"\\f58a\"}.la-grin-tongue-wink:before{content:\"\\f58b\"}.la-grin-wink:before{content:\"\\f58c\"}.la-grip-horizontal:before{content:\"\\f58d\"}.la-grip-lines:before{content:\"\\f7a4\"}.la-grip-lines-vertical:before{content:\"\\f7a5\"}.la-grip-vertical:before{content:\"\\f58e\"}.la-gripfire:before{content:\"\\f3ac\"}.la-grunt:before{content:\"\\f3ad\"}.la-guitar:before{content:\"\\f7a6\"}.la-gulp:before{content:\"\\f3ae\"}.la-h-square:before{content:\"\\f0fd\"}.la-hacker-news:before{content:\"\\f1d4\"}.la-hacker-news-square:before{content:\"\\f3af\"}.la-hackerrank:before{content:\"\\f5f7\"}.la-hamburger:before{content:\"\\f805\"}.la-hammer:before{content:\"\\f6e3\"}.la-hamsa:before{content:\"\\f665\"}.la-hand-holding:before{content:\"\\f4bd\"}.la-hand-holding-heart:before{content:\"\\f4be\"}.la-hand-holding-usd:before{content:\"\\f4c0\"}.la-hand-lizard:before{content:\"\\f258\"}.la-hand-middle-finger:before{content:\"\\f806\"}.la-hand-paper:before{content:\"\\f256\"}.la-hand-peace:before{content:\"\\f25b\"}.la-hand-point-down:before{content:\"\\f0a7\"}.la-hand-point-left:before{content:\"\\f0a5\"}.la-hand-point-right:before{content:\"\\f0a4\"}.la-hand-point-up:before{content:\"\\f0a6\"}.la-hand-pointer:before{content:\"\\f25a\"}.la-hand-rock:before{content:\"\\f255\"}.la-hand-scissors:before{content:\"\\f257\"}.la-hand-spock:before{content:\"\\f259\"}.la-hands:before{content:\"\\f4c2\"}.la-hands-helping:before{content:\"\\f4c4\"}.la-handshake:before{content:\"\\f2b5\"}.la-hanukiah:before{content:\"\\f6e6\"}.la-hard-hat:before{content:\"\\f807\"}.la-hashtag:before{content:\"\\f292\"}.la-hat-cowboy:before{content:\"\\f8c0\"}.la-hat-cowboy-side:before{content:\"\\f8c1\"}.la-hat-wizard:before{content:\"\\f6e8\"}.la-haykal:before{content:\"\\f666\"}.la-hdd:before{content:\"\\f0a0\"}.la-heading:before{content:\"\\f1dc\"}.la-headphones:before{content:\"\\f025\"}.la-headphones-alt:before{content:\"\\f58f\"}.la-headset:before{content:\"\\f590\"}.la-heart:before{content:\"\\f004\"}.la-heart-broken:before{content:\"\\f7a9\"}.la-heartbeat:before{content:\"\\f21e\"}.la-helicopter:before{content:\"\\f533\"}.la-highlighter:before{content:\"\\f591\"}.la-hiking:before{content:\"\\f6ec\"}.la-hippo:before{content:\"\\f6ed\"}.la-hips:before{content:\"\\f452\"}.la-hire-a-helper:before{content:\"\\f3b0\"}.la-history:before{content:\"\\f1da\"}.la-hockey-puck:before{content:\"\\f453\"}.la-holly-berry:before{content:\"\\f7aa\"}.la-home:before{content:\"\\f015\"}.la-hooli:before{content:\"\\f427\"}.la-hornbill:before{content:\"\\f592\"}.la-horse:before{content:\"\\f6f0\"}.la-horse-head:before{content:\"\\f7ab\"}.la-hospital:before{content:\"\\f0f8\"}.la-hospital-alt:before{content:\"\\f47d\"}.la-hospital-symbol:before{content:\"\\f47e\"}.la-hot-tub:before{content:\"\\f593\"}.la-hotdog:before{content:\"\\f80f\"}.la-hotel:before{content:\"\\f594\"}.la-hotjar:before{content:\"\\f3b1\"}.la-hourglass:before{content:\"\\f254\"}.la-hourglass-end:before{content:\"\\f253\"}.la-hourglass-half:before{content:\"\\f252\"}.la-hourglass-start:before{content:\"\\f251\"}.la-house-damage:before{content:\"\\f6f1\"}.la-houzz:before{content:\"\\f27c\"}.la-hryvnia:before{content:\"\\f6f2\"}.la-html5:before{content:\"\\f13b\"}.la-hubspot:before{content:\"\\f3b2\"}.la-i-cursor:before{content:\"\\f246\"}.la-ice-cream:before{content:\"\\f810\"}.la-icicles:before{content:\"\\f7ad\"}.la-icons:before{content:\"\\f86d\"}.la-id-badge:before{content:\"\\f2c1\"}.la-id-card:before{content:\"\\f2c2\"}.la-id-card-alt:before{content:\"\\f47f\"}.la-igloo:before{content:\"\\f7ae\"}.la-image:before{content:\"\\f03e\"}.la-images:before{content:\"\\f302\"}.la-imdb:before{content:\"\\f2d8\"}.la-inbox:before{content:\"\\f01c\"}.la-indent:before{content:\"\\f03c\"}.la-industry:before{content:\"\\f275\"}.la-infinity:before{content:\"\\f534\"}.la-info:before{content:\"\\f129\"}.la-info-circle:before{content:\"\\f05a\"}.la-instagram:before{content:\"\\f16d\"}.la-intercom:before{content:\"\\f7af\"}.la-internet-explorer:before{content:\"\\f26b\"}.la-invision:before{content:\"\\f7b0\"}.la-ioxhost:before{content:\"\\f208\"}.la-italic:before{content:\"\\f033\"}.la-itch-io:before{content:\"\\f83a\"}.la-itunes:before{content:\"\\f3b4\"}.la-itunes-note:before{content:\"\\f3b5\"}.la-java:before{content:\"\\f4e4\"}.la-jedi:before{content:\"\\f669\"}.la-jedi-order:before{content:\"\\f50e\"}.la-jenkins:before{content:\"\\f3b6\"}.la-jira:before{content:\"\\f7b1\"}.la-joget:before{content:\"\\f3b7\"}.la-joint:before{content:\"\\f595\"}.la-joomla:before{content:\"\\f1aa\"}.la-journal-whills:before{content:\"\\f66a\"}.la-js:before{content:\"\\f3b8\"}.la-js-square:before{content:\"\\f3b9\"}.la-jsfiddle:before{content:\"\\f1cc\"}.la-kaaba:before{content:\"\\f66b\"}.la-kaggle:before{content:\"\\f5fa\"}.la-key:before{content:\"\\f084\"}.la-keybase:before{content:\"\\f4f5\"}.la-keyboard:before{content:\"\\f11c\"}.la-keycdn:before{content:\"\\f3ba\"}.la-khanda:before{content:\"\\f66d\"}.la-kickstarter:before{content:\"\\f3bb\"}.la-kickstarter-k:before{content:\"\\f3bc\"}.la-kiss:before{content:\"\\f596\"}.la-kiss-beam:before{content:\"\\f597\"}.la-kiss-wink-heart:before{content:\"\\f598\"}.la-kiwi-bird:before{content:\"\\f535\"}.la-korvue:before{content:\"\\f42f\"}.la-landmark:before{content:\"\\f66f\"}.la-language:before{content:\"\\f1ab\"}.la-laptop:before{content:\"\\f109\"}.la-laptop-code:before{content:\"\\f5fc\"}.la-laptop-medical:before{content:\"\\f812\"}.la-laravel:before{content:\"\\f3bd\"}.la-lastfm:before{content:\"\\f202\"}.la-lastfm-square:before{content:\"\\f203\"}.la-laugh:before{content:\"\\f599\"}.la-laugh-beam:before{content:\"\\f59a\"}.la-laugh-squint:before{content:\"\\f59b\"}.la-laugh-wink:before{content:\"\\f59c\"}.la-layer-group:before{content:\"\\f5fd\"}.la-leaf:before{content:\"\\f06c\"}.la-leanpub:before{content:\"\\f212\"}.la-lemon:before{content:\"\\f094\"}.la-less:before{content:\"\\f41d\"}.la-less-than:before{content:\"\\f536\"}.la-less-than-equal:before{content:\"\\f537\"}.la-level-down-alt:before{content:\"\\f3be\"}.la-level-up-alt:before{content:\"\\f3bf\"}.la-life-ring:before{content:\"\\f1cd\"}.la-lightbulb:before{content:\"\\f0eb\"}.la-line:before{content:\"\\f3c0\"}.la-link:before{content:\"\\f0c1\"}.la-linkedin:before{content:\"\\f08c\"}.la-linkedin-in:before{content:\"\\f0e1\"}.la-linode:before{content:\"\\f2b8\"}.la-linux:before{content:\"\\f17c\"}.la-lira-sign:before{content:\"\\f195\"}.la-list:before{content:\"\\f03a\"}.la-list-alt:before{content:\"\\f022\"}.la-list-ol:before{content:\"\\f0cb\"}.la-list-ul:before{content:\"\\f0ca\"}.la-location-arrow:before{content:\"\\f124\"}.la-lock:before{content:\"\\f023\"}.la-lock-open:before{content:\"\\f3c1\"}.la-long-arrow-alt-down:before{content:\"\\f309\"}.la-long-arrow-alt-left:before{content:\"\\f30a\"}.la-long-arrow-alt-right:before{content:\"\\f30b\"}.la-long-arrow-alt-up:before{content:\"\\f30c\"}.la-low-vision:before{content:\"\\f2a8\"}.la-luggage-cart:before{content:\"\\f59d\"}.la-lyft:before{content:\"\\f3c3\"}.la-magento:before{content:\"\\f3c4\"}.la-magic:before{content:\"\\f0d0\"}.la-magnet:before{content:\"\\f076\"}.la-mail-bulk:before{content:\"\\f674\"}.la-mailchimp:before{content:\"\\f59e\"}.la-male:before{content:\"\\f183\"}.la-mandalorian:before{content:\"\\f50f\"}.la-map:before{content:\"\\f279\"}.la-map-marked:before{content:\"\\f59f\"}.la-map-marked-alt:before{content:\"\\f5a0\"}.la-map-marker:before{content:\"\\f041\"}.la-map-marker-alt:before{content:\"\\f3c5\"}.la-map-pin:before{content:\"\\f276\"}.la-map-signs:before{content:\"\\f277\"}.la-markdown:before{content:\"\\f60f\"}.la-marker:before{content:\"\\f5a1\"}.la-mars:before{content:\"\\f222\"}.la-mars-double:before{content:\"\\f227\"}.la-mars-stroke:before{content:\"\\f229\"}.la-mars-stroke-h:before{content:\"\\f22b\"}.la-mars-stroke-v:before{content:\"\\f22a\"}.la-mask:before{content:\"\\f6fa\"}.la-mastodon:before{content:\"\\f4f6\"}.la-maxcdn:before{content:\"\\f136\"}.la-mdb:before{content:\"\\f8ca\"}.la-medal:before{content:\"\\f5a2\"}.la-medapps:before{content:\"\\f3c6\"}.la-medium:before{content:\"\\f23a\"}.la-medium-m:before{content:\"\\f3c7\"}.la-medkit:before{content:\"\\f0fa\"}.la-medrt:before{content:\"\\f3c8\"}.la-meetup:before{content:\"\\f2e0\"}.la-megaport:before{content:\"\\f5a3\"}.la-meh:before{content:\"\\f11a\"}.la-meh-blank:before{content:\"\\f5a4\"}.la-meh-rolling-eyes:before{content:\"\\f5a5\"}.la-memory:before{content:\"\\f538\"}.la-mendeley:before{content:\"\\f7b3\"}.la-menorah:before{content:\"\\f676\"}.la-mercury:before{content:\"\\f223\"}.la-meteor:before{content:\"\\f753\"}.la-microchip:before{content:\"\\f2db\"}.la-microphone:before{content:\"\\f130\"}.la-microphone-alt:before{content:\"\\f3c9\"}.la-microphone-alt-slash:before{content:\"\\f539\"}.la-microphone-slash:before{content:\"\\f131\"}.la-microscope:before{content:\"\\f610\"}.la-microsoft:before{content:\"\\f3ca\"}.la-minus:before{content:\"\\f068\"}.la-minus-circle:before{content:\"\\f056\"}.la-minus-square:before{content:\"\\f146\"}.la-mitten:before{content:\"\\f7b5\"}.la-mix:before{content:\"\\f3cb\"}.la-mixcloud:before{content:\"\\f289\"}.la-mizuni:before{content:\"\\f3cc\"}.la-mobile:before{content:\"\\f10b\"}.la-mobile-alt:before{content:\"\\f3cd\"}.la-modx:before{content:\"\\f285\"}.la-monero:before{content:\"\\f3d0\"}.la-money-bill:before{content:\"\\f0d6\"}.la-money-bill-alt:before{content:\"\\f3d1\"}.la-money-bill-wave:before{content:\"\\f53a\"}.la-money-bill-wave-alt:before{content:\"\\f53b\"}.la-money-check:before{content:\"\\f53c\"}.la-money-check-alt:before{content:\"\\f53d\"}.la-monument:before{content:\"\\f5a6\"}.la-moon:before{content:\"\\f186\"}.la-mortar-pestle:before{content:\"\\f5a7\"}.la-mosque:before{content:\"\\f678\"}.la-motorcycle:before{content:\"\\f21c\"}.la-mountain:before{content:\"\\f6fc\"}.la-mouse:before{content:\"\\f8cc\"}.la-mouse-pointer:before{content:\"\\f245\"}.la-mug-hot:before{content:\"\\f7b6\"}.la-music:before{content:\"\\f001\"}.la-napster:before{content:\"\\f3d2\"}.la-neos:before{content:\"\\f612\"}.la-network-wired:before{content:\"\\f6ff\"}.la-neuter:before{content:\"\\f22c\"}.la-newspaper:before{content:\"\\f1ea\"}.la-nimblr:before{content:\"\\f5a8\"}.la-node:before{content:\"\\f419\"}.la-node-js:before{content:\"\\f3d3\"}.la-not-equal:before{content:\"\\f53e\"}.la-notes-medical:before{content:\"\\f481\"}.la-npm:before{content:\"\\f3d4\"}.la-ns8:before{content:\"\\f3d5\"}.la-nutritionix:before{content:\"\\f3d6\"}.la-object-group:before{content:\"\\f247\"}.la-object-ungroup:before{content:\"\\f248\"}.la-odnoklassniki:before{content:\"\\f263\"}.la-odnoklassniki-square:before{content:\"\\f264\"}.la-oil-can:before{content:\"\\f613\"}.la-old-republic:before{content:\"\\f510\"}.la-om:before{content:\"\\f679\"}.la-opencart:before{content:\"\\f23d\"}.la-openid:before{content:\"\\f19b\"}.la-opera:before{content:\"\\f26a\"}.la-optin-monster:before{content:\"\\f23c\"}.la-orcid:before{content:\"\\f8d2\"}.la-osi:before{content:\"\\f41a\"}.la-otter:before{content:\"\\f700\"}.la-outdent:before{content:\"\\f03b\"}.la-page4:before{content:\"\\f3d7\"}.la-pagelines:before{content:\"\\f18c\"}.la-pager:before{content:\"\\f815\"}.la-paint-brush:before{content:\"\\f1fc\"}.la-paint-roller:before{content:\"\\f5aa\"}.la-palette:before{content:\"\\f53f\"}.la-palfed:before{content:\"\\f3d8\"}.la-pallet:before{content:\"\\f482\"}.la-paper-plane:before{content:\"\\f1d8\"}.la-paperclip:before{content:\"\\f0c6\"}.la-parachute-box:before{content:\"\\f4cd\"}.la-paragraph:before{content:\"\\f1dd\"}.la-parking:before{content:\"\\f540\"}.la-passport:before{content:\"\\f5ab\"}.la-pastafarianism:before{content:\"\\f67b\"}.la-paste:before{content:\"\\f0ea\"}.la-patreon:before{content:\"\\f3d9\"}.la-pause:before{content:\"\\f04c\"}.la-pause-circle:before{content:\"\\f28b\"}.la-paw:before{content:\"\\f1b0\"}.la-paypal:before{content:\"\\f1ed\"}.la-peace:before{content:\"\\f67c\"}.la-pen:before{content:\"\\f304\"}.la-pen-alt:before{content:\"\\f305\"}.la-pen-fancy:before{content:\"\\f5ac\"}.la-pen-nib:before{content:\"\\f5ad\"}.la-pen-square:before{content:\"\\f14b\"}.la-pencil-alt:before{content:\"\\f303\"}.la-pencil-ruler:before{content:\"\\f5ae\"}.la-penny-arcade:before{content:\"\\f704\"}.la-people-carry:before{content:\"\\f4ce\"}.la-pepper-hot:before{content:\"\\f816\"}.la-percent:before{content:\"\\f295\"}.la-percentage:before{content:\"\\f541\"}.la-periscope:before{content:\"\\f3da\"}.la-person-booth:before{content:\"\\f756\"}.la-phabricator:before{content:\"\\f3db\"}.la-phoenix-framework:before{content:\"\\f3dc\"}.la-phoenix-squadron:before{content:\"\\f511\"}.la-phone:before{content:\"\\f095\"}.la-phone-alt:before{content:\"\\f879\"}.la-phone-slash:before{content:\"\\f3dd\"}.la-phone-square:before{content:\"\\f098\"}.la-phone-square-alt:before{content:\"\\f87b\"}.la-phone-volume:before{content:\"\\f2a0\"}.la-photo-video:before{content:\"\\f87c\"}.la-php:before{content:\"\\f457\"}.la-pied-piper:before{content:\"\\f2ae\"}.la-pied-piper-alt:before{content:\"\\f1a8\"}.la-pied-piper-hat:before{content:\"\\f4e5\"}.la-pied-piper-pp:before{content:\"\\f1a7\"}.la-piggy-bank:before{content:\"\\f4d3\"}.la-pills:before{content:\"\\f484\"}.la-pinterest:before{content:\"\\f0d2\"}.la-pinterest-p:before{content:\"\\f231\"}.la-pinterest-square:before{content:\"\\f0d3\"}.la-pizza-slice:before{content:\"\\f818\"}.la-place-of-worship:before{content:\"\\f67f\"}.la-plane:before{content:\"\\f072\"}.la-plane-arrival:before{content:\"\\f5af\"}.la-plane-departure:before{content:\"\\f5b0\"}.la-play:before{content:\"\\f04b\"}.la-play-circle:before{content:\"\\f144\"}.la-playstation:before{content:\"\\f3df\"}.la-plug:before{content:\"\\f1e6\"}.la-plus:before{content:\"\\f067\"}.la-plus-circle:before{content:\"\\f055\"}.la-plus-square:before{content:\"\\f0fe\"}.la-podcast:before{content:\"\\f2ce\"}.la-poll:before{content:\"\\f681\"}.la-poll-h:before{content:\"\\f682\"}.la-poo:before{content:\"\\f2fe\"}.la-poo-storm:before{content:\"\\f75a\"}.la-poop:before{content:\"\\f619\"}.la-portrait:before{content:\"\\f3e0\"}.la-pound-sign:before{content:\"\\f154\"}.la-power-off:before{content:\"\\f011\"}.la-pray:before{content:\"\\f683\"}.la-praying-hands:before{content:\"\\f684\"}.la-prescription:before{content:\"\\f5b1\"}.la-prescription-bottle:before{content:\"\\f485\"}.la-prescription-bottle-alt:before{content:\"\\f486\"}.la-print:before{content:\"\\f02f\"}.la-procedures:before{content:\"\\f487\"}.la-product-hunt:before{content:\"\\f288\"}.la-project-diagram:before{content:\"\\f542\"}.la-pushed:before{content:\"\\f3e1\"}.la-puzzle-piece:before{content:\"\\f12e\"}.la-python:before{content:\"\\f3e2\"}.la-qq:before{content:\"\\f1d6\"}.la-qrcode:before{content:\"\\f029\"}.la-question:before{content:\"\\f128\"}.la-question-circle:before{content:\"\\f059\"}.la-quidditch:before{content:\"\\f458\"}.la-quinscape:before{content:\"\\f459\"}.la-quora:before{content:\"\\f2c4\"}.la-quote-left:before{content:\"\\f10d\"}.la-quote-right:before{content:\"\\f10e\"}.la-quran:before{content:\"\\f687\"}.la-r-project:before{content:\"\\f4f7\"}.la-radiation:before{content:\"\\f7b9\"}.la-radiation-alt:before{content:\"\\f7ba\"}.la-rainbow:before{content:\"\\f75b\"}.la-random:before{content:\"\\f074\"}.la-raspberry-pi:before{content:\"\\f7bb\"}.la-ravelry:before{content:\"\\f2d9\"}.la-react:before{content:\"\\f41b\"}.la-reacteurope:before{content:\"\\f75d\"}.la-readme:before{content:\"\\f4d5\"}.la-rebel:before{content:\"\\f1d0\"}.la-receipt:before{content:\"\\f543\"}.la-record-vinyl:before{content:\"\\f8d9\"}.la-recycle:before{content:\"\\f1b8\"}.la-red-river:before{content:\"\\f3e3\"}.la-reddit:before{content:\"\\f1a1\"}.la-reddit-alien:before{content:\"\\f281\"}.la-reddit-square:before{content:\"\\f1a2\"}.la-redhat:before{content:\"\\f7bc\"}.la-redo:before{content:\"\\f01e\"}.la-redo-alt:before{content:\"\\f2f9\"}.la-registered:before{content:\"\\f25d\"}.la-remove-format:before{content:\"\\f87d\"}.la-renren:before{content:\"\\f18b\"}.la-reply:before{content:\"\\f3e5\"}.la-reply-all:before{content:\"\\f122\"}.la-replyd:before{content:\"\\f3e6\"}.la-republican:before{content:\"\\f75e\"}.la-researchgate:before{content:\"\\f4f8\"}.la-resolving:before{content:\"\\f3e7\"}.la-restroom:before{content:\"\\f7bd\"}.la-retweet:before{content:\"\\f079\"}.la-rev:before{content:\"\\f5b2\"}.la-ribbon:before{content:\"\\f4d6\"}.la-ring:before{content:\"\\f70b\"}.la-road:before{content:\"\\f018\"}.la-robot:before{content:\"\\f544\"}.la-rocket:before{content:\"\\f135\"}.la-rocketchat:before{content:\"\\f3e8\"}.la-rockrms:before{content:\"\\f3e9\"}.la-route:before{content:\"\\f4d7\"}.la-rss:before{content:\"\\f09e\"}.la-rss-square:before{content:\"\\f143\"}.la-ruble-sign:before{content:\"\\f158\"}.la-ruler:before{content:\"\\f545\"}.la-ruler-combined:before{content:\"\\f546\"}.la-ruler-horizontal:before{content:\"\\f547\"}.la-ruler-vertical:before{content:\"\\f548\"}.la-running:before{content:\"\\f70c\"}.la-rupee-sign:before{content:\"\\f156\"}.la-sad-cry:before{content:\"\\f5b3\"}.la-sad-tear:before{content:\"\\f5b4\"}.la-safari:before{content:\"\\f267\"}.la-salesforce:before{content:\"\\f83b\"}.la-sass:before{content:\"\\f41e\"}.la-satellite:before{content:\"\\f7bf\"}.la-satellite-dish:before{content:\"\\f7c0\"}.la-save:before{content:\"\\f0c7\"}.la-schlix:before{content:\"\\f3ea\"}.la-school:before{content:\"\\f549\"}.la-screwdriver:before{content:\"\\f54a\"}.la-scribd:before{content:\"\\f28a\"}.la-scroll:before{content:\"\\f70e\"}.la-sd-card:before{content:\"\\f7c2\"}.la-search:before{content:\"\\f002\"}.la-search-dollar:before{content:\"\\f688\"}.la-search-location:before{content:\"\\f689\"}.la-search-minus:before{content:\"\\f010\"}.la-search-plus:before{content:\"\\f00e\"}.la-searchengin:before{content:\"\\f3eb\"}.la-seedling:before{content:\"\\f4d8\"}.la-sellcast:before{content:\"\\f2da\"}.la-sellsy:before{content:\"\\f213\"}.la-server:before{content:\"\\f233\"}.la-servicestack:before{content:\"\\f3ec\"}.la-shapes:before{content:\"\\f61f\"}.la-share:before{content:\"\\f064\"}.la-share-alt:before{content:\"\\f1e0\"}.la-share-alt-square:before{content:\"\\f1e1\"}.la-share-square:before{content:\"\\f14d\"}.la-shekel-sign:before{content:\"\\f20b\"}.la-shield-alt:before{content:\"\\f3ed\"}.la-ship:before{content:\"\\f21a\"}.la-shipping-fast:before{content:\"\\f48b\"}.la-shirtsinbulk:before{content:\"\\f214\"}.la-shoe-prints:before{content:\"\\f54b\"}.la-shopping-bag:before{content:\"\\f290\"}.la-shopping-basket:before{content:\"\\f291\"}.la-shopping-cart:before{content:\"\\f07a\"}.la-shopware:before{content:\"\\f5b5\"}.la-shower:before{content:\"\\f2cc\"}.la-shuttle-van:before{content:\"\\f5b6\"}.la-sign:before{content:\"\\f4d9\"}.la-sign-in-alt:before{content:\"\\f2f6\"}.la-sign-language:before{content:\"\\f2a7\"}.la-sign-out-alt:before{content:\"\\f2f5\"}.la-signal:before{content:\"\\f012\"}.la-signature:before{content:\"\\f5b7\"}.la-sim-card:before{content:\"\\f7c4\"}.la-simplybuilt:before{content:\"\\f215\"}.la-sistrix:before{content:\"\\f3ee\"}.la-sitemap:before{content:\"\\f0e8\"}.la-sith:before{content:\"\\f512\"}.la-skating:before{content:\"\\f7c5\"}.la-sketch:before{content:\"\\f7c6\"}.la-skiing:before{content:\"\\f7c9\"}.la-skiing-nordic:before{content:\"\\f7ca\"}.la-skull:before{content:\"\\f54c\"}.la-skull-crossbones:before{content:\"\\f714\"}.la-skyatlas:before{content:\"\\f216\"}.la-skype:before{content:\"\\f17e\"}.la-slack:before{content:\"\\f198\"}.la-slack-hash:before{content:\"\\f3ef\"}.la-slash:before{content:\"\\f715\"}.la-sleigh:before{content:\"\\f7cc\"}.la-sliders-h:before{content:\"\\f1de\"}.la-slideshare:before{content:\"\\f1e7\"}.la-smile:before{content:\"\\f118\"}.la-smile-beam:before{content:\"\\f5b8\"}.la-smile-wink:before{content:\"\\f4da\"}.la-smog:before{content:\"\\f75f\"}.la-smoking:before{content:\"\\f48d\"}.la-smoking-ban:before{content:\"\\f54d\"}.la-sms:before{content:\"\\f7cd\"}.la-snapchat:before{content:\"\\f2ab\"}.la-snapchat-ghost:before{content:\"\\f2ac\"}.la-snapchat-square:before{content:\"\\f2ad\"}.la-snowboarding:before{content:\"\\f7ce\"}.la-snowflake:before{content:\"\\f2dc\"}.la-snowman:before{content:\"\\f7d0\"}.la-snowplow:before{content:\"\\f7d2\"}.la-socks:before{content:\"\\f696\"}.la-solar-panel:before{content:\"\\f5ba\"}.la-sort:before{content:\"\\f0dc\"}.la-sort-alpha-down:before{content:\"\\f15d\"}.la-sort-alpha-down-alt:before{content:\"\\f881\"}.la-sort-alpha-up:before{content:\"\\f15e\"}.la-sort-alpha-up-alt:before{content:\"\\f882\"}.la-sort-amount-down:before{content:\"\\f160\"}.la-sort-amount-down-alt:before{content:\"\\f884\"}.la-sort-amount-up:before{content:\"\\f161\"}.la-sort-amount-up-alt:before{content:\"\\f885\"}.la-sort-down:before{content:\"\\f0dd\"}.la-sort-numeric-down:before{content:\"\\f162\"}.la-sort-numeric-down-alt:before{content:\"\\f886\"}.la-sort-numeric-up:before{content:\"\\f163\"}.la-sort-numeric-up-alt:before{content:\"\\f887\"}.la-sort-up:before{content:\"\\f0de\"}.la-soundcloud:before{content:\"\\f1be\"}.la-sourcetree:before{content:\"\\f7d3\"}.la-spa:before{content:\"\\f5bb\"}.la-space-shuttle:before{content:\"\\f197\"}.la-speakap:before{content:\"\\f3f3\"}.la-speaker-deck:before{content:\"\\f83c\"}.la-spell-check:before{content:\"\\f891\"}.la-spider:before{content:\"\\f717\"}.la-spinner:before{content:\"\\f110\"}.la-splotch:before{content:\"\\f5bc\"}.la-spotify:before{content:\"\\f1bc\"}.la-spray-can:before{content:\"\\f5bd\"}.la-square:before{content:\"\\f0c8\"}.la-square-full:before{content:\"\\f45c\"}.la-square-root-alt:before{content:\"\\f698\"}.la-squarespace:before{content:\"\\f5be\"}.la-stack-exchange:before{content:\"\\f18d\"}.la-stack-overflow:before{content:\"\\f16c\"}.la-stackpath:before{content:\"\\f842\"}.la-stamp:before{content:\"\\f5bf\"}.la-star:before{content:\"\\f005\"}.la-star-and-crescent:before{content:\"\\f699\"}.la-star-half:before{content:\"\\f089\"}.la-star-half-alt:before{content:\"\\f5c0\"}.la-star-of-david:before{content:\"\\f69a\"}.la-star-of-life:before{content:\"\\f621\"}.la-staylinked:before{content:\"\\f3f5\"}.la-steam:before{content:\"\\f1b6\"}.la-steam-square:before{content:\"\\f1b7\"}.la-steam-symbol:before{content:\"\\f3f6\"}.la-step-backward:before{content:\"\\f048\"}.la-step-forward:before{content:\"\\f051\"}.la-stethoscope:before{content:\"\\f0f1\"}.la-sticker-mule:before{content:\"\\f3f7\"}.la-sticky-note:before{content:\"\\f249\"}.la-stop:before{content:\"\\f04d\"}.la-stop-circle:before{content:\"\\f28d\"}.la-stopwatch:before{content:\"\\f2f2\"}.la-store:before{content:\"\\f54e\"}.la-store-alt:before{content:\"\\f54f\"}.la-strava:before{content:\"\\f428\"}.la-stream:before{content:\"\\f550\"}.la-street-view:before{content:\"\\f21d\"}.la-strikethrough:before{content:\"\\f0cc\"}.la-stripe:before{content:\"\\f429\"}.la-stripe-s:before{content:\"\\f42a\"}.la-stroopwafel:before{content:\"\\f551\"}.la-studiovinari:before{content:\"\\f3f8\"}.la-stumbleupon:before{content:\"\\f1a4\"}.la-stumbleupon-circle:before{content:\"\\f1a3\"}.la-subscript:before{content:\"\\f12c\"}.la-subway:before{content:\"\\f239\"}.la-suitcase:before{content:\"\\f0f2\"}.la-suitcase-rolling:before{content:\"\\f5c1\"}.la-sun:before{content:\"\\f185\"}.la-superpowers:before{content:\"\\f2dd\"}.la-superscript:before{content:\"\\f12b\"}.la-supple:before{content:\"\\f3f9\"}.la-surprise:before{content:\"\\f5c2\"}.la-suse:before{content:\"\\f7d6\"}.la-swatchbook:before{content:\"\\f5c3\"}.la-swift:before{content:\"\\f8e1\"}.la-swimmer:before{content:\"\\f5c4\"}.la-swimming-pool:before{content:\"\\f5c5\"}.la-symfony:before{content:\"\\f83d\"}.la-synagogue:before{content:\"\\f69b\"}.la-sync:before{content:\"\\f021\"}.la-sync-alt:before{content:\"\\f2f1\"}.la-syringe:before{content:\"\\f48e\"}.la-table:before{content:\"\\f0ce\"}.la-table-tennis:before{content:\"\\f45d\"}.la-tablet:before{content:\"\\f10a\"}.la-tablet-alt:before{content:\"\\f3fa\"}.la-tablets:before{content:\"\\f490\"}.la-tachometer-alt:before{content:\"\\f3fd\"}.la-tag:before{content:\"\\f02b\"}.la-tags:before{content:\"\\f02c\"}.la-tape:before{content:\"\\f4db\"}.la-tasks:before{content:\"\\f0ae\"}.la-taxi:before{content:\"\\f1ba\"}.la-teamspeak:before{content:\"\\f4f9\"}.la-teeth:before{content:\"\\f62e\"}.la-teeth-open:before{content:\"\\f62f\"}.la-telegram:before{content:\"\\f2c6\"}.la-telegram-plane:before{content:\"\\f3fe\"}.la-temperature-high:before{content:\"\\f769\"}.la-temperature-low:before{content:\"\\f76b\"}.la-tencent-weibo:before{content:\"\\f1d5\"}.la-tenge:before{content:\"\\f7d7\"}.la-terminal:before{content:\"\\f120\"}.la-text-height:before{content:\"\\f034\"}.la-text-width:before{content:\"\\f035\"}.la-th:before{content:\"\\f00a\"}.la-th-large:before{content:\"\\f009\"}.la-th-list:before{content:\"\\f00b\"}.la-the-red-yeti:before{content:\"\\f69d\"}.la-theater-masks:before{content:\"\\f630\"}.la-themeco:before{content:\"\\f5c6\"}.la-themeisle:before{content:\"\\f2b2\"}.la-thermometer:before{content:\"\\f491\"}.la-thermometer-empty:before{content:\"\\f2cb\"}.la-thermometer-full:before{content:\"\\f2c7\"}.la-thermometer-half:before{content:\"\\f2c9\"}.la-thermometer-quarter:before{content:\"\\f2ca\"}.la-thermometer-three-quarters:before{content:\"\\f2c8\"}.la-think-peaks:before{content:\"\\f731\"}.la-thumbs-down:before{content:\"\\f165\"}.la-thumbs-up:before{content:\"\\f164\"}.la-thumbtack:before{content:\"\\f08d\"}.la-ticket-alt:before{content:\"\\f3ff\"}.la-times:before{content:\"\\f00d\"}.la-times-circle:before{content:\"\\f057\"}.la-tint:before{content:\"\\f043\"}.la-tint-slash:before{content:\"\\f5c7\"}.la-tired:before{content:\"\\f5c8\"}.la-toggle-off:before{content:\"\\f204\"}.la-toggle-on:before{content:\"\\f205\"}.la-toilet:before{content:\"\\f7d8\"}.la-toilet-paper:before{content:\"\\f71e\"}.la-toolbox:before{content:\"\\f552\"}.la-tools:before{content:\"\\f7d9\"}.la-tooth:before{content:\"\\f5c9\"}.la-torah:before{content:\"\\f6a0\"}.la-torii-gate:before{content:\"\\f6a1\"}.la-tractor:before{content:\"\\f722\"}.la-trade-federation:before{content:\"\\f513\"}.la-trademark:before{content:\"\\f25c\"}.la-traffic-light:before{content:\"\\f637\"}.la-train:before{content:\"\\f238\"}.la-tram:before{content:\"\\f7da\"}.la-transgender:before{content:\"\\f224\"}.la-transgender-alt:before{content:\"\\f225\"}.la-trash:before{content:\"\\f1f8\"}.la-trash-alt:before{content:\"\\f2ed\"}.la-trash-restore:before{content:\"\\f829\"}.la-trash-restore-alt:before{content:\"\\f82a\"}.la-tree:before{content:\"\\f1bb\"}.la-trello:before{content:\"\\f181\"}.la-tripadvisor:before{content:\"\\f262\"}.la-trophy:before{content:\"\\f091\"}.la-truck:before{content:\"\\f0d1\"}.la-truck-loading:before{content:\"\\f4de\"}.la-truck-monster:before{content:\"\\f63b\"}.la-truck-moving:before{content:\"\\f4df\"}.la-truck-pickup:before{content:\"\\f63c\"}.la-tshirt:before{content:\"\\f553\"}.la-tty:before{content:\"\\f1e4\"}.la-tumblr:before{content:\"\\f173\"}.la-tumblr-square:before{content:\"\\f174\"}.la-tv:before{content:\"\\f26c\"}.la-twitch:before{content:\"\\f1e8\"}.la-twitter:before{content:\"\\f099\"}.la-twitter-square:before{content:\"\\f081\"}.la-typo3:before{content:\"\\f42b\"}.la-uber:before{content:\"\\f402\"}.la-ubuntu:before{content:\"\\f7df\"}.la-uikit:before{content:\"\\f403\"}.la-umbraco:before{content:\"\\f8e8\"}.la-umbrella:before{content:\"\\f0e9\"}.la-umbrella-beach:before{content:\"\\f5ca\"}.la-underline:before{content:\"\\f0cd\"}.la-undo:before{content:\"\\f0e2\"}.la-undo-alt:before{content:\"\\f2ea\"}.la-uniregistry:before{content:\"\\f404\"}.la-universal-access:before{content:\"\\f29a\"}.la-university:before{content:\"\\f19c\"}.la-unlink:before{content:\"\\f127\"}.la-unlock:before{content:\"\\f09c\"}.la-unlock-alt:before{content:\"\\f13e\"}.la-untappd:before{content:\"\\f405\"}.la-upload:before{content:\"\\f093\"}.la-ups:before{content:\"\\f7e0\"}.la-usb:before{content:\"\\f287\"}.la-user:before{content:\"\\f007\"}.la-user-alt:before{content:\"\\f406\"}.la-user-alt-slash:before{content:\"\\f4fa\"}.la-user-astronaut:before{content:\"\\f4fb\"}.la-user-check:before{content:\"\\f4fc\"}.la-user-circle:before{content:\"\\f2bd\"}.la-user-clock:before{content:\"\\f4fd\"}.la-user-cog:before{content:\"\\f4fe\"}.la-user-edit:before{content:\"\\f4ff\"}.la-user-friends:before{content:\"\\f500\"}.la-user-graduate:before{content:\"\\f501\"}.la-user-injured:before{content:\"\\f728\"}.la-user-lock:before{content:\"\\f502\"}.la-user-md:before{content:\"\\f0f0\"}.la-user-minus:before{content:\"\\f503\"}.la-user-ninja:before{content:\"\\f504\"}.la-user-nurse:before{content:\"\\f82f\"}.la-user-plus:before{content:\"\\f234\"}.la-user-secret:before{content:\"\\f21b\"}.la-user-shield:before{content:\"\\f505\"}.la-user-slash:before{content:\"\\f506\"}.la-user-tag:before{content:\"\\f507\"}.la-user-tie:before{content:\"\\f508\"}.la-user-times:before{content:\"\\f235\"}.la-users:before{content:\"\\f0c0\"}.la-users-cog:before{content:\"\\f509\"}.la-usps:before{content:\"\\f7e1\"}.la-ussunnah:before{content:\"\\f407\"}.la-utensil-spoon:before{content:\"\\f2e5\"}.la-utensils:before{content:\"\\f2e7\"}.la-vaadin:before{content:\"\\f408\"}.la-vector-square:before{content:\"\\f5cb\"}.la-venus:before{content:\"\\f221\"}.la-venus-double:before{content:\"\\f226\"}.la-venus-mars:before{content:\"\\f228\"}.la-viacoin:before{content:\"\\f237\"}.la-viadeo:before{content:\"\\f2a9\"}.la-viadeo-square:before{content:\"\\f2aa\"}.la-vial:before{content:\"\\f492\"}.la-vials:before{content:\"\\f493\"}.la-viber:before{content:\"\\f409\"}.la-video:before{content:\"\\f03d\"}.la-video-slash:before{content:\"\\f4e2\"}.la-vihara:before{content:\"\\f6a7\"}.la-vimeo:before{content:\"\\f40a\"}.la-vimeo-square:before{content:\"\\f194\"}.la-vimeo-v:before{content:\"\\f27d\"}.la-vine:before{content:\"\\f1ca\"}.la-vk:before{content:\"\\f189\"}.la-vnv:before{content:\"\\f40b\"}.la-voicemail:before{content:\"\\f897\"}.la-volleyball-ball:before{content:\"\\f45f\"}.la-volume-down:before{content:\"\\f027\"}.la-volume-mute:before{content:\"\\f6a9\"}.la-volume-off:before{content:\"\\f026\"}.la-volume-up:before{content:\"\\f028\"}.la-vote-yea:before{content:\"\\f772\"}.la-vr-cardboard:before{content:\"\\f729\"}.la-vuejs:before{content:\"\\f41f\"}.la-walking:before{content:\"\\f554\"}.la-wallet:before{content:\"\\f555\"}.la-warehouse:before{content:\"\\f494\"}.la-water:before{content:\"\\f773\"}.la-wave-square:before{content:\"\\f83e\"}.la-waze:before{content:\"\\f83f\"}.la-weebly:before{content:\"\\f5cc\"}.la-weibo:before{content:\"\\f18a\"}.la-weight:before{content:\"\\f496\"}.la-weight-hanging:before{content:\"\\f5cd\"}.la-weixin:before{content:\"\\f1d7\"}.la-whatsapp:before{content:\"\\f232\"}.la-whatsapp-square:before{content:\"\\f40c\"}.la-wheelchair:before{content:\"\\f193\"}.la-whmcs:before{content:\"\\f40d\"}.la-wifi:before{content:\"\\f1eb\"}.la-wikipedia-w:before{content:\"\\f266\"}.la-wind:before{content:\"\\f72e\"}.la-window-close:before{content:\"\\f410\"}.la-window-maximize:before{content:\"\\f2d0\"}.la-window-minimize:before{content:\"\\f2d1\"}.la-window-restore:before{content:\"\\f2d2\"}.la-windows:before{content:\"\\f17a\"}.la-wine-bottle:before{content:\"\\f72f\"}.la-wine-glass:before{content:\"\\f4e3\"}.la-wine-glass-alt:before{content:\"\\f5ce\"}.la-wix:before{content:\"\\f5cf\"}.la-wizards-of-the-coast:before{content:\"\\f730\"}.la-wolf-pack-battalion:before{content:\"\\f514\"}.la-won-sign:before{content:\"\\f159\"}.la-wordpress:before{content:\"\\f19a\"}.la-wordpress-simple:before{content:\"\\f411\"}.la-wpbeginner:before{content:\"\\f297\"}.la-wpexplorer:before{content:\"\\f2de\"}.la-wpforms:before{content:\"\\f298\"}.la-wpressr:before{content:\"\\f3e4\"}.la-wrench:before{content:\"\\f0ad\"}.la-x-ray:before{content:\"\\f497\"}.la-xbox:before{content:\"\\f412\"}.la-xing:before{content:\"\\f168\"}.la-xing-square:before{content:\"\\f169\"}.la-y-combinator:before{content:\"\\f23b\"}.la-yahoo:before{content:\"\\f19e\"}.la-yammer:before{content:\"\\f840\"}.la-yandex:before{content:\"\\f413\"}.la-yandex-international:before{content:\"\\f414\"}.la-yarn:before{content:\"\\f7e3\"}.la-yelp:before{content:\"\\f1e9\"}.la-yen-sign:before{content:\"\\f157\"}.la-yin-yang:before{content:\"\\f6ad\"}.la-yoast:before{content:\"\\f2b1\"}.la-youtube:before{content:\"\\f167\"}.la-youtube-square:before{content:\"\\f431\"}.la-zhihu:before{content:\"\\f63f\"}.sr-only{clip:rect(0,0,0,0);border:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}@font-face{font-display:auto;font-family:Line Awesome Brands;font-style:normal;font-weight:400;src:url(/fonts/la-brands-400.eot);src:url(/fonts/la-brands-400.eot?#iefix) format(\"embedded-opentype\"),url(/fonts/la-brands-400.woff2) format(\"woff2\"),url(/fonts/la-brands-400.woff) format(\"woff\"),url(/fonts/la-brands-400.ttf) format(\"truetype\"),url(/fonts/la-brands-400.svg#lineawesome) format(\"svg\")}.lab{font-family:Line Awesome Brands}@font-face{font-display:auto;font-family:Line Awesome Free;font-style:normal;font-weight:400;src:url(/fonts/la-regular-400.eot);src:url(/fonts/la-regular-400.eot?#iefix) format(\"embedded-opentype\"),url(/fonts/la-regular-400.woff2) format(\"woff2\"),url(/fonts/la-regular-400.woff) format(\"woff\"),url(/fonts/la-regular-400.ttf) format(\"truetype\"),url(/fonts/la-regular-400.svg#lineawesome) format(\"svg\")}.lar{font-weight:400}@font-face{font-display:auto;font-family:Line Awesome Free;font-style:normal;font-weight:900;src:url(/fonts/la-solid-900.eot);src:url(/fonts/la-solid-900.eot?#iefix) format(\"embedded-opentype\"),url(/fonts/la-solid-900.woff2) format(\"woff2\"),url(/fonts/la-solid-900.woff) format(\"woff\"),url(/fonts/la-solid-900.ttf) format(\"truetype\"),url(/fonts/la-solid-900.svg#lineawesome) format(\"svg\")}.la,.lar,.las{font-family:Line Awesome Free}.la,.las{font-weight:900}.la.la-glass:before{content:\"\\f000\"}.la.la-meetup{font-family:Line Awesome Brands;font-weight:400}.la.la-star-o{font-family:Line Awesome Free;font-weight:400}.la.la-star-o:before{content:\"\\f005\"}.la.la-close:before,.la.la-remove:before{content:\"\\f00d\"}.la.la-gear:before{content:\"\\f013\"}.la.la-trash-o{font-family:Line Awesome Free;font-weight:400}.la.la-trash-o:before{content:\"\\f2ed\"}.la.la-file-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-o:before{content:\"\\f15b\"}.la.la-clock-o{font-family:Line Awesome Free;font-weight:400}.la.la-clock-o:before{content:\"\\f017\"}.la.la-arrow-circle-o-down{font-family:Line Awesome Free;font-weight:400}.la.la-arrow-circle-o-down:before{content:\"\\f358\"}.la.la-arrow-circle-o-up{font-family:Line Awesome Free;font-weight:400}.la.la-arrow-circle-o-up:before{content:\"\\f35b\"}.la.la-play-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-play-circle-o:before{content:\"\\f144\"}.la.la-repeat:before,.la.la-rotate-right:before{content:\"\\f01e\"}.la.la-refresh:before{content:\"\\f021\"}.la.la-list-alt{font-family:Line Awesome Free;font-weight:400}.la.la-dedent:before{content:\"\\f03b\"}.la.la-video-camera:before{content:\"\\f03d\"}.la.la-picture-o{font-family:Line Awesome Free;font-weight:400}.la.la-picture-o:before{content:\"\\f03e\"}.la.la-photo{font-family:Line Awesome Free;font-weight:400}.la.la-photo:before{content:\"\\f03e\"}.la.la-image{font-family:Line Awesome Free;font-weight:400}.la.la-image:before{content:\"\\f03e\"}.la.la-pencil:before{content:\"\\f303\"}.la.la-map-marker:before{content:\"\\f3c5\"}.la.la-pencil-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-pencil-square-o:before{content:\"\\f044\"}.la.la-share-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-share-square-o:before{content:\"\\f14d\"}.la.la-check-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-check-square-o:before{content:\"\\f14a\"}.la.la-arrows:before{content:\"\\f0b2\"}.la.la-times-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-times-circle-o:before{content:\"\\f057\"}.la.la-check-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-check-circle-o:before{content:\"\\f058\"}.la.la-mail-forward:before{content:\"\\f064\"}.la.la-eye,.la.la-eye-slash{font-family:Line Awesome Free;font-weight:400}.la.la-warning:before{content:\"\\f071\"}.la.la-calendar:before{content:\"\\f073\"}.la.la-arrows-v:before{content:\"\\f338\"}.la.la-arrows-h:before{content:\"\\f337\"}.la.la-bar-chart{font-family:Line Awesome Free;font-weight:400}.la.la-bar-chart:before{content:\"\\f080\"}.la.la-bar-chart-o{font-family:Line Awesome Free;font-weight:400}.la.la-bar-chart-o:before{content:\"\\f080\"}.la.la-facebook-square,.la.la-twitter-square{font-family:Line Awesome Brands;font-weight:400}.la.la-gears:before{content:\"\\f085\"}.la.la-thumbs-o-up{font-family:Line Awesome Free;font-weight:400}.la.la-thumbs-o-up:before{content:\"\\f164\"}.la.la-thumbs-o-down{font-family:Line Awesome Free;font-weight:400}.la.la-thumbs-o-down:before{content:\"\\f165\"}.la.la-heart-o{font-family:Line Awesome Free;font-weight:400}.la.la-heart-o:before{content:\"\\f004\"}.la.la-sign-out:before{content:\"\\f2f5\"}.la.la-linkedin-square{font-family:Line Awesome Brands;font-weight:400}.la.la-linkedin-square:before{content:\"\\f08c\"}.la.la-thumb-tack:before{content:\"\\f08d\"}.la.la-external-link:before{content:\"\\f35d\"}.la.la-sign-in:before{content:\"\\f2f6\"}.la.la-github-square{font-family:Line Awesome Brands;font-weight:400}.la.la-lemon-o{font-family:Line Awesome Free;font-weight:400}.la.la-lemon-o:before{content:\"\\f094\"}.la.la-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-square-o:before{content:\"\\f0c8\"}.la.la-bookmark-o{font-family:Line Awesome Free;font-weight:400}.la.la-bookmark-o:before{content:\"\\f02e\"}.la.la-facebook,.la.la-twitter{font-family:Line Awesome Brands;font-weight:400}.la.la-facebook:before{content:\"\\f39e\"}.la.la-facebook-f{font-family:Line Awesome Brands;font-weight:400}.la.la-facebook-f:before{content:\"\\f39e\"}.la.la-github{font-family:Line Awesome Brands;font-weight:400}.la.la-credit-card{font-family:Line Awesome Free;font-weight:400}.la.la-feed:before{content:\"\\f09e\"}.la.la-hdd-o{font-family:Line Awesome Free;font-weight:400}.la.la-hdd-o:before{content:\"\\f0a0\"}.la.la-hand-o-right{font-family:Line Awesome Free;font-weight:400}.la.la-hand-o-right:before{content:\"\\f0a4\"}.la.la-hand-o-left{font-family:Line Awesome Free;font-weight:400}.la.la-hand-o-left:before{content:\"\\f0a5\"}.la.la-hand-o-up{font-family:Line Awesome Free;font-weight:400}.la.la-hand-o-up:before{content:\"\\f0a6\"}.la.la-hand-o-down{font-family:Line Awesome Free;font-weight:400}.la.la-hand-o-down:before{content:\"\\f0a7\"}.la.la-arrows-alt:before{content:\"\\f31e\"}.la.la-group:before{content:\"\\f0c0\"}.la.la-chain:before{content:\"\\f0c1\"}.la.la-scissors:before{content:\"\\f0c4\"}.la.la-files-o{font-family:Line Awesome Free;font-weight:400}.la.la-files-o:before{content:\"\\f0c5\"}.la.la-floppy-o{font-family:Line Awesome Free;font-weight:400}.la.la-floppy-o:before{content:\"\\f0c7\"}.la.la-navicon:before,.la.la-reorder:before{content:\"\\f0c9\"}.la.la-google-plus,.la.la-google-plus-square,.la.la-pinterest,.la.la-pinterest-square{font-family:Line Awesome Brands;font-weight:400}.la.la-google-plus:before{content:\"\\f0d5\"}.la.la-money{font-family:Line Awesome Free;font-weight:400}.la.la-money:before{content:\"\\f3d1\"}.la.la-unsorted:before{content:\"\\f0dc\"}.la.la-sort-desc:before{content:\"\\f0dd\"}.la.la-sort-asc:before{content:\"\\f0de\"}.la.la-linkedin{font-family:Line Awesome Brands;font-weight:400}.la.la-linkedin:before{content:\"\\f0e1\"}.la.la-rotate-left:before{content:\"\\f0e2\"}.la.la-legal:before{content:\"\\f0e3\"}.la.la-dashboard:before,.la.la-tachometer:before{content:\"\\f3fd\"}.la.la-comment-o{font-family:Line Awesome Free;font-weight:400}.la.la-comment-o:before{content:\"\\f075\"}.la.la-comments-o{font-family:Line Awesome Free;font-weight:400}.la.la-comments-o:before{content:\"\\f086\"}.la.la-flash:before{content:\"\\f0e7\"}.la.la-clipboard,.la.la-paste{font-family:Line Awesome Free;font-weight:400}.la.la-paste:before{content:\"\\f328\"}.la.la-lightbulb-o{font-family:Line Awesome Free;font-weight:400}.la.la-lightbulb-o:before{content:\"\\f0eb\"}.la.la-exchange:before{content:\"\\f362\"}.la.la-cloud-download:before{content:\"\\f381\"}.la.la-cloud-upload:before{content:\"\\f382\"}.la.la-bell-o{font-family:Line Awesome Free;font-weight:400}.la.la-bell-o:before{content:\"\\f0f3\"}.la.la-cutlery:before{content:\"\\f2e7\"}.la.la-file-text-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-text-o:before{content:\"\\f15c\"}.la.la-building-o{font-family:Line Awesome Free;font-weight:400}.la.la-building-o:before{content:\"\\f1ad\"}.la.la-hospital-o{font-family:Line Awesome Free;font-weight:400}.la.la-hospital-o:before{content:\"\\f0f8\"}.la.la-tablet:before{content:\"\\f3fa\"}.la.la-mobile-phone:before,.la.la-mobile:before{content:\"\\f3cd\"}.la.la-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-circle-o:before{content:\"\\f111\"}.la.la-mail-reply:before{content:\"\\f3e5\"}.la.la-github-alt{font-family:Line Awesome Brands;font-weight:400}.la.la-folder-o{font-family:Line Awesome Free;font-weight:400}.la.la-folder-o:before{content:\"\\f07b\"}.la.la-folder-open-o{font-family:Line Awesome Free;font-weight:400}.la.la-folder-open-o:before{content:\"\\f07c\"}.la.la-smile-o{font-family:Line Awesome Free;font-weight:400}.la.la-smile-o:before{content:\"\\f118\"}.la.la-frown-o{font-family:Line Awesome Free;font-weight:400}.la.la-frown-o:before{content:\"\\f119\"}.la.la-meh-o{font-family:Line Awesome Free;font-weight:400}.la.la-meh-o:before{content:\"\\f11a\"}.la.la-keyboard-o{font-family:Line Awesome Free;font-weight:400}.la.la-keyboard-o:before{content:\"\\f11c\"}.la.la-flag-o{font-family:Line Awesome Free;font-weight:400}.la.la-flag-o:before{content:\"\\f024\"}.la.la-mail-reply-all:before{content:\"\\f122\"}.la.la-star-half-o{font-family:Line Awesome Free;font-weight:400}.la.la-star-half-o:before{content:\"\\f089\"}.la.la-star-half-empty{font-family:Line Awesome Free;font-weight:400}.la.la-star-half-empty:before{content:\"\\f089\"}.la.la-star-half-full{font-family:Line Awesome Free;font-weight:400}.la.la-star-half-full:before{content:\"\\f089\"}.la.la-code-fork:before{content:\"\\f126\"}.la.la-chain-broken:before{content:\"\\f127\"}.la.la-shield:before{content:\"\\f3ed\"}.la.la-calendar-o{font-family:Line Awesome Free;font-weight:400}.la.la-calendar-o:before{content:\"\\f133\"}.la.la-css3,.la.la-html5,.la.la-maxcdn{font-family:Line Awesome Brands;font-weight:400}.la.la-ticket:before{content:\"\\f3ff\"}.la.la-minus-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-minus-square-o:before{content:\"\\f146\"}.la.la-level-up:before{content:\"\\f3bf\"}.la.la-level-down:before{content:\"\\f3be\"}.la.la-pencil-square:before{content:\"\\f14b\"}.la.la-external-link-square:before{content:\"\\f360\"}.la.la-compass{font-family:Line Awesome Free;font-weight:400}.la.la-caret-square-o-down{font-family:Line Awesome Free;font-weight:400}.la.la-caret-square-o-down:before{content:\"\\f150\"}.la.la-toggle-down{font-family:Line Awesome Free;font-weight:400}.la.la-toggle-down:before{content:\"\\f150\"}.la.la-caret-square-o-up{font-family:Line Awesome Free;font-weight:400}.la.la-caret-square-o-up:before{content:\"\\f151\"}.la.la-toggle-up{font-family:Line Awesome Free;font-weight:400}.la.la-toggle-up:before{content:\"\\f151\"}.la.la-caret-square-o-right{font-family:Line Awesome Free;font-weight:400}.la.la-caret-square-o-right:before{content:\"\\f152\"}.la.la-toggle-right{font-family:Line Awesome Free;font-weight:400}.la.la-toggle-right:before{content:\"\\f152\"}.la.la-eur:before,.la.la-euro:before{content:\"\\f153\"}.la.la-gbp:before{content:\"\\f154\"}.la.la-dollar:before,.la.la-usd:before{content:\"\\f155\"}.la.la-inr:before,.la.la-rupee:before{content:\"\\f156\"}.la.la-cny:before,.la.la-jpy:before,.la.la-rmb:before,.la.la-yen:before{content:\"\\f157\"}.la.la-rouble:before,.la.la-rub:before,.la.la-ruble:before{content:\"\\f158\"}.la.la-krw:before,.la.la-won:before{content:\"\\f159\"}.la.la-bitcoin,.la.la-btc{font-family:Line Awesome Brands;font-weight:400}.la.la-bitcoin:before{content:\"\\f15a\"}.la.la-file-text:before{content:\"\\f15c\"}.la.la-sort-alpha-asc:before{content:\"\\f15d\"}.la.la-sort-alpha-desc:before{content:\"\\f881\"}.la.la-sort-amount-asc:before{content:\"\\f160\"}.la.la-sort-amount-desc:before{content:\"\\f884\"}.la.la-sort-numeric-asc:before{content:\"\\f162\"}.la.la-sort-numeric-desc:before{content:\"\\f886\"}.la.la-xing,.la.la-xing-square,.la.la-youtube,.la.la-youtube-play,.la.la-youtube-square{font-family:Line Awesome Brands;font-weight:400}.la.la-youtube-play:before{content:\"\\f167\"}.la.la-adn,.la.la-bitbucket,.la.la-bitbucket-square,.la.la-dropbox,.la.la-flickr,.la.la-instagram,.la.la-stack-overflow{font-family:Line Awesome Brands;font-weight:400}.la.la-bitbucket-square:before{content:\"\\f171\"}.la.la-tumblr,.la.la-tumblr-square{font-family:Line Awesome Brands;font-weight:400}.la.la-long-arrow-down:before{content:\"\\f309\"}.la.la-long-arrow-up:before{content:\"\\f30c\"}.la.la-long-arrow-left:before{content:\"\\f30a\"}.la.la-long-arrow-right:before{content:\"\\f30b\"}.la.la-android,.la.la-apple,.la.la-dribbble,.la.la-foursquare,.la.la-gittip,.la.la-gratipay,.la.la-linux,.la.la-skype,.la.la-trello,.la.la-windows{font-family:Line Awesome Brands;font-weight:400}.la.la-gittip:before{content:\"\\f184\"}.la.la-sun-o{font-family:Line Awesome Free;font-weight:400}.la.la-sun-o:before{content:\"\\f185\"}.la.la-moon-o{font-family:Line Awesome Free;font-weight:400}.la.la-moon-o:before{content:\"\\f186\"}.la.la-pagelines,.la.la-renren,.la.la-stack-exchange,.la.la-vk,.la.la-weibo{font-family:Line Awesome Brands;font-weight:400}.la.la-arrow-circle-o-right{font-family:Line Awesome Free;font-weight:400}.la.la-arrow-circle-o-right:before{content:\"\\f35a\"}.la.la-arrow-circle-o-left{font-family:Line Awesome Free;font-weight:400}.la.la-arrow-circle-o-left:before{content:\"\\f359\"}.la.la-caret-square-o-left{font-family:Line Awesome Free;font-weight:400}.la.la-caret-square-o-left:before{content:\"\\f191\"}.la.la-toggle-left{font-family:Line Awesome Free;font-weight:400}.la.la-toggle-left:before{content:\"\\f191\"}.la.la-dot-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-dot-circle-o:before{content:\"\\f192\"}.la.la-vimeo-square{font-family:Line Awesome Brands;font-weight:400}.la.la-try:before,.la.la-turkish-lira:before{content:\"\\f195\"}.la.la-plus-square-o{font-family:Line Awesome Free;font-weight:400}.la.la-plus-square-o:before{content:\"\\f0fe\"}.la.la-openid,.la.la-slack,.la.la-wordpress{font-family:Line Awesome Brands;font-weight:400}.la.la-bank:before,.la.la-institution:before{content:\"\\f19c\"}.la.la-mortar-board:before{content:\"\\f19d\"}.la.la-delicious,.la.la-digg,.la.la-drupal,.la.la-google,.la.la-joomla,.la.la-pied-piper-alt,.la.la-pied-piper-pp,.la.la-reddit,.la.la-reddit-square,.la.la-stumbleupon,.la.la-stumbleupon-circle,.la.la-yahoo{font-family:Line Awesome Brands;font-weight:400}.la.la-spoon:before{content:\"\\f2e5\"}.la.la-behance,.la.la-behance-square,.la.la-steam,.la.la-steam-square{font-family:Line Awesome Brands;font-weight:400}.la.la-automobile:before{content:\"\\f1b9\"}.la.la-cab:before{content:\"\\f1ba\"}.la.la-envelope-o{font-family:Line Awesome Free;font-weight:400}.la.la-envelope-o:before{content:\"\\f0e0\"}.la.la-deviantart,.la.la-soundcloud{font-family:Line Awesome Brands;font-weight:400}.la.la-file-pdf-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-pdf-o:before{content:\"\\f1c1\"}.la.la-file-word-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-word-o:before{content:\"\\f1c2\"}.la.la-file-excel-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-excel-o:before{content:\"\\f1c3\"}.la.la-file-powerpoint-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-powerpoint-o:before{content:\"\\f1c4\"}.la.la-file-image-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-image-o:before{content:\"\\f1c5\"}.la.la-file-photo-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-photo-o:before{content:\"\\f1c5\"}.la.la-file-picture-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-picture-o:before{content:\"\\f1c5\"}.la.la-file-archive-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-archive-o:before{content:\"\\f1c6\"}.la.la-file-zip-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-zip-o:before{content:\"\\f1c6\"}.la.la-file-audio-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-audio-o:before{content:\"\\f1c7\"}.la.la-file-sound-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-sound-o:before{content:\"\\f1c7\"}.la.la-file-video-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-video-o:before{content:\"\\f1c8\"}.la.la-file-movie-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-movie-o:before{content:\"\\f1c8\"}.la.la-file-code-o{font-family:Line Awesome Free;font-weight:400}.la.la-file-code-o:before{content:\"\\f1c9\"}.la.la-codepen,.la.la-jsfiddle,.la.la-vine{font-family:Line Awesome Brands;font-weight:400}.la.la-life-bouy,.la.la-life-ring{font-family:Line Awesome Free;font-weight:400}.la.la-life-bouy:before{content:\"\\f1cd\"}.la.la-life-buoy{font-family:Line Awesome Free;font-weight:400}.la.la-life-buoy:before{content:\"\\f1cd\"}.la.la-life-saver{font-family:Line Awesome Free;font-weight:400}.la.la-life-saver:before{content:\"\\f1cd\"}.la.la-support{font-family:Line Awesome Free;font-weight:400}.la.la-support:before{content:\"\\f1cd\"}.la.la-circle-o-notch:before{content:\"\\f1ce\"}.la.la-ra,.la.la-rebel{font-family:Line Awesome Brands;font-weight:400}.la.la-ra:before{content:\"\\f1d0\"}.la.la-resistance{font-family:Line Awesome Brands;font-weight:400}.la.la-resistance:before{content:\"\\f1d0\"}.la.la-empire,.la.la-ge{font-family:Line Awesome Brands;font-weight:400}.la.la-ge:before{content:\"\\f1d1\"}.la.la-git,.la.la-git-square,.la.la-hacker-news,.la.la-y-combinator-square{font-family:Line Awesome Brands;font-weight:400}.la.la-y-combinator-square:before{content:\"\\f1d4\"}.la.la-yc-square{font-family:Line Awesome Brands;font-weight:400}.la.la-yc-square:before{content:\"\\f1d4\"}.la.la-qq,.la.la-tencent-weibo,.la.la-wechat,.la.la-weixin{font-family:Line Awesome Brands;font-weight:400}.la.la-wechat:before{content:\"\\f1d7\"}.la.la-send:before{content:\"\\f1d8\"}.la.la-paper-plane-o{font-family:Line Awesome Free;font-weight:400}.la.la-paper-plane-o:before{content:\"\\f1d8\"}.la.la-send-o{font-family:Line Awesome Free;font-weight:400}.la.la-send-o:before{content:\"\\f1d8\"}.la.la-circle-thin{font-family:Line Awesome Free;font-weight:400}.la.la-circle-thin:before{content:\"\\f111\"}.la.la-header:before{content:\"\\f1dc\"}.la.la-sliders:before{content:\"\\f1de\"}.la.la-futbol-o{font-family:Line Awesome Free;font-weight:400}.la.la-futbol-o:before{content:\"\\f1e3\"}.la.la-soccer-ball-o{font-family:Line Awesome Free;font-weight:400}.la.la-soccer-ball-o:before{content:\"\\f1e3\"}.la.la-slideshare,.la.la-twitch,.la.la-yelp{font-family:Line Awesome Brands;font-weight:400}.la.la-newspaper-o{font-family:Line Awesome Free;font-weight:400}.la.la-newspaper-o:before{content:\"\\f1ea\"}.la.la-cc-amex,.la.la-cc-discover,.la.la-cc-mastercard,.la.la-cc-paypal,.la.la-cc-stripe,.la.la-cc-visa,.la.la-google-wallet,.la.la-paypal{font-family:Line Awesome Brands;font-weight:400}.la.la-bell-slash-o{font-family:Line Awesome Free;font-weight:400}.la.la-bell-slash-o:before{content:\"\\f1f6\"}.la.la-trash:before{content:\"\\f2ed\"}.la.la-copyright{font-family:Line Awesome Free;font-weight:400}.la.la-eyedropper:before{content:\"\\f1fb\"}.la.la-area-chart:before{content:\"\\f1fe\"}.la.la-pie-chart:before{content:\"\\f200\"}.la.la-line-chart:before{content:\"\\f201\"}.la.la-angellist,.la.la-ioxhost,.la.la-lastfm,.la.la-lastfm-square{font-family:Line Awesome Brands;font-weight:400}.la.la-cc{font-family:Line Awesome Free;font-weight:400}.la.la-cc:before{content:\"\\f20a\"}.la.la-ils:before,.la.la-shekel:before,.la.la-sheqel:before{content:\"\\f20b\"}.la.la-meanpath{font-family:Line Awesome Brands;font-weight:400}.la.la-meanpath:before{content:\"\\f2b4\"}.la.la-buysellads,.la.la-connectdevelop,.la.la-dashcube,.la.la-forumbee,.la.la-leanpub,.la.la-sellsy,.la.la-shirtsinbulk,.la.la-simplybuilt,.la.la-skyatlas{font-family:Line Awesome Brands;font-weight:400}.la.la-diamond{font-family:Line Awesome Free;font-weight:400}.la.la-diamond:before{content:\"\\f3a5\"}.la.la-intersex:before{content:\"\\f224\"}.la.la-facebook-official{font-family:Line Awesome Brands;font-weight:400}.la.la-facebook-official:before{content:\"\\f09a\"}.la.la-pinterest-p,.la.la-whatsapp{font-family:Line Awesome Brands;font-weight:400}.la.la-hotel:before{content:\"\\f236\"}.la.la-medium,.la.la-viacoin,.la.la-y-combinator,.la.la-yc{font-family:Line Awesome Brands;font-weight:400}.la.la-yc:before{content:\"\\f23b\"}.la.la-expeditedssl,.la.la-opencart,.la.la-optin-monster{font-family:Line Awesome Brands;font-weight:400}.la.la-battery-4:before,.la.la-battery:before{content:\"\\f240\"}.la.la-battery-3:before{content:\"\\f241\"}.la.la-battery-2:before{content:\"\\f242\"}.la.la-battery-1:before{content:\"\\f243\"}.la.la-battery-0:before{content:\"\\f244\"}.la.la-object-group,.la.la-object-ungroup,.la.la-sticky-note-o{font-family:Line Awesome Free;font-weight:400}.la.la-sticky-note-o:before{content:\"\\f249\"}.la.la-cc-diners-club,.la.la-cc-jcb{font-family:Line Awesome Brands;font-weight:400}.la.la-clone,.la.la-hourglass-o{font-family:Line Awesome Free;font-weight:400}.la.la-hourglass-o:before{content:\"\\f254\"}.la.la-hourglass-1:before{content:\"\\f251\"}.la.la-hourglass-2:before{content:\"\\f252\"}.la.la-hourglass-3:before{content:\"\\f253\"}.la.la-hand-rock-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-rock-o:before{content:\"\\f255\"}.la.la-hand-grab-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-grab-o:before{content:\"\\f255\"}.la.la-hand-paper-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-paper-o:before{content:\"\\f256\"}.la.la-hand-stop-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-stop-o:before{content:\"\\f256\"}.la.la-hand-scissors-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-scissors-o:before{content:\"\\f257\"}.la.la-hand-lizard-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-lizard-o:before{content:\"\\f258\"}.la.la-hand-spock-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-spock-o:before{content:\"\\f259\"}.la.la-hand-pointer-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-pointer-o:before{content:\"\\f25a\"}.la.la-hand-peace-o{font-family:Line Awesome Free;font-weight:400}.la.la-hand-peace-o:before{content:\"\\f25b\"}.la.la-registered{font-family:Line Awesome Free;font-weight:400}.la.la-chrome,.la.la-creative-commons,.la.la-firefox,.la.la-get-pocket,.la.la-gg,.la.la-gg-circle,.la.la-internet-explorer,.la.la-odnoklassniki,.la.la-odnoklassniki-square,.la.la-opera,.la.la-safari,.la.la-tripadvisor,.la.la-wikipedia-w{font-family:Line Awesome Brands;font-weight:400}.la.la-television:before{content:\"\\f26c\"}.la.la-500px,.la.la-amazon,.la.la-contao{font-family:Line Awesome Brands;font-weight:400}.la.la-calendar-plus-o{font-family:Line Awesome Free;font-weight:400}.la.la-calendar-plus-o:before{content:\"\\f271\"}.la.la-calendar-minus-o{font-family:Line Awesome Free;font-weight:400}.la.la-calendar-minus-o:before{content:\"\\f272\"}.la.la-calendar-times-o{font-family:Line Awesome Free;font-weight:400}.la.la-calendar-times-o:before{content:\"\\f273\"}.la.la-calendar-check-o{font-family:Line Awesome Free;font-weight:400}.la.la-calendar-check-o:before{content:\"\\f274\"}.la.la-map-o{font-family:Line Awesome Free;font-weight:400}.la.la-map-o:before{content:\"\\f279\"}.la.la-commenting:before{content:\"\\f4ad\"}.la.la-commenting-o{font-family:Line Awesome Free;font-weight:400}.la.la-commenting-o:before{content:\"\\f4ad\"}.la.la-houzz,.la.la-vimeo{font-family:Line Awesome Brands;font-weight:400}.la.la-vimeo:before{content:\"\\f27d\"}.la.la-black-tie,.la.la-edge,.la.la-fonticons,.la.la-reddit-alien{font-family:Line Awesome Brands;font-weight:400}.la.la-credit-card-alt:before{content:\"\\f09d\"}.la.la-codiepie,.la.la-fort-awesome,.la.la-mixcloud,.la.la-modx,.la.la-product-hunt,.la.la-scribd,.la.la-usb{font-family:Line Awesome Brands;font-weight:400}.la.la-pause-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-pause-circle-o:before{content:\"\\f28b\"}.la.la-stop-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-stop-circle-o:before{content:\"\\f28d\"}.la.la-bluetooth,.la.la-bluetooth-b,.la.la-envira,.la.la-gitlab,.la.la-wheelchair-alt,.la.la-wpbeginner,.la.la-wpforms{font-family:Line Awesome Brands;font-weight:400}.la.la-wheelchair-alt:before{content:\"\\f368\"}.la.la-question-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-question-circle-o:before{content:\"\\f059\"}.la.la-volume-control-phone:before{content:\"\\f2a0\"}.la.la-asl-interpreting:before{content:\"\\f2a3\"}.la.la-deafness:before,.la.la-hard-of-hearing:before{content:\"\\f2a4\"}.la.la-glide,.la.la-glide-g{font-family:Line Awesome Brands;font-weight:400}.la.la-signing:before{content:\"\\f2a7\"}.la.la-first-order,.la.la-google-plus-official,.la.la-pied-piper,.la.la-snapchat,.la.la-snapchat-ghost,.la.la-snapchat-square,.la.la-themeisle,.la.la-viadeo,.la.la-viadeo-square,.la.la-yoast{font-family:Line Awesome Brands;font-weight:400}.la.la-google-plus-official:before{content:\"\\f2b3\"}.la.la-google-plus-circle{font-family:Line Awesome Brands;font-weight:400}.la.la-google-plus-circle:before{content:\"\\f2b3\"}.la.la-fa,.la.la-font-awesome{font-family:Line Awesome Brands;font-weight:400}.la.la-fa:before{content:\"\\f2b4\"}.la.la-handshake-o{font-family:Line Awesome Free;font-weight:400}.la.la-handshake-o:before{content:\"\\f2b5\"}.la.la-envelope-open-o{font-family:Line Awesome Free;font-weight:400}.la.la-envelope-open-o:before{content:\"\\f2b6\"}.la.la-linode{font-family:Line Awesome Brands;font-weight:400}.la.la-address-book-o{font-family:Line Awesome Free;font-weight:400}.la.la-address-book-o:before{content:\"\\f2b9\"}.la.la-vcard:before{content:\"\\f2bb\"}.la.la-address-card-o{font-family:Line Awesome Free;font-weight:400}.la.la-address-card-o:before{content:\"\\f2bb\"}.la.la-vcard-o{font-family:Line Awesome Free;font-weight:400}.la.la-vcard-o:before{content:\"\\f2bb\"}.la.la-user-circle-o{font-family:Line Awesome Free;font-weight:400}.la.la-user-circle-o:before{content:\"\\f2bd\"}.la.la-user-o{font-family:Line Awesome Free;font-weight:400}.la.la-user-o:before{content:\"\\f007\"}.la.la-id-badge{font-family:Line Awesome Free;font-weight:400}.la.la-drivers-license:before{content:\"\\f2c2\"}.la.la-id-card-o{font-family:Line Awesome Free;font-weight:400}.la.la-id-card-o:before{content:\"\\f2c2\"}.la.la-drivers-license-o{font-family:Line Awesome Free;font-weight:400}.la.la-drivers-license-o:before{content:\"\\f2c2\"}.la.la-free-code-camp,.la.la-quora,.la.la-telegram{font-family:Line Awesome Brands;font-weight:400}.la.la-thermometer-4:before,.la.la-thermometer:before{content:\"\\f2c7\"}.la.la-thermometer-3:before{content:\"\\f2c8\"}.la.la-thermometer-2:before{content:\"\\f2c9\"}.la.la-thermometer-1:before{content:\"\\f2ca\"}.la.la-thermometer-0:before{content:\"\\f2cb\"}.la.la-bathtub:before,.la.la-s15:before{content:\"\\f2cd\"}.la.la-window-maximize,.la.la-window-restore{font-family:Line Awesome Free;font-weight:400}.la.la-times-rectangle:before{content:\"\\f410\"}.la.la-window-close-o{font-family:Line Awesome Free;font-weight:400}.la.la-window-close-o:before{content:\"\\f410\"}.la.la-times-rectangle-o{font-family:Line Awesome Free;font-weight:400}.la.la-times-rectangle-o:before{content:\"\\f410\"}.la.la-bandcamp,.la.la-eercast,.la.la-etsy,.la.la-grav,.la.la-imdb,.la.la-ravelry{font-family:Line Awesome Brands;font-weight:400}.la.la-eercast:before{content:\"\\f2da\"}.la.la-snowflake-o{font-family:Line Awesome Free;font-weight:400}.la.la-snowflake-o:before{content:\"\\f2dc\"}.la.la-spotify,.la.la-superpowers,.la.la-wpexplorer{font-family:Line Awesome Brands;font-weight:400}@layer base{*,::backdrop,::file-selector-button,:after,:before{border-color:var(--color-gray-200,currentColor)}}@layer base{[multiple],[type=date],[type=datetime-local],[type=email],[type=month],[type=number],[type=password],[type=search],[type=tel],[type=text],[type=time],[type=url],[type=week],input:where(:not([type])),select,textarea{--tw-shadow:0 0 #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-radius:0;border-width:1px;font-size:1rem;line-height:1.5rem;padding:.5rem .75rem;&:focus{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(54.6% 0.245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);border-color:oklch(54.6% .245 262.881);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-meridiem-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-year-field{padding-bottom:0;padding-top:0}select{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E\");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}[multiple],[size]:where(select:not([size=\"1\"])){background-image:none;background-position:0 0;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{--tw-shadow:0 0 #0000;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#fff;background-origin:border-box;border-color:#6b7280;border-width:1px;color:oklch(54.6% .245 262.881);display:inline-block;flex-shrink:0;height:1rem;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle;width:1rem}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{--tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);--tw-ring-offset-width:2px;--tw-ring-offset-color:#fff;--tw-ring-color:oklch(54.6% 0.245 262.881);--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);outline:2px solid transparent;outline-offset:2px}[type=checkbox]:checked,[type=radio]:checked{background-color:currentColor;background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent}[type=checkbox]:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12.207 4.793a1 1 0 0 1 0 1.414l-5 5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L6.5 9.086l4.293-4.293a1 1 0 0 1 1.414 0z'/%3E%3C/svg%3E\");@media (forced-colors:active){-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=radio]:checked{background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 16 16' fill='%23fff' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='8' cy='8' r='3'/%3E%3C/svg%3E\");@media (forced-colors:active){-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:checked:focus,[type=checkbox]:checked:hover,[type=radio]:checked:focus,[type=radio]:checked:hover{background-color:currentColor;border-color:transparent}[type=checkbox]:indeterminate{background-color:currentColor;background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3E%3C/svg%3E\");background-position:50%;background-repeat:no-repeat;background-size:100% 100%;border-color:transparent;@media (forced-colors:active){-webkit-appearance:auto;-moz-appearance:auto;appearance:auto}}[type=checkbox]:indeterminate:focus,[type=checkbox]:indeterminate:hover{background-color:currentColor;border-color:transparent}[type=file]{background:unset;border-color:inherit;border-radius:0;border-width:0;font-size:unset;line-height:inherit;padding:0}[type=file]:focus{outline:1px solid ButtonText;outline:1px auto -webkit-focus-ring-color}}@property --tw-translate-x{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-y{syntax:\"*\";inherits:false;initial-value:0}@property --tw-translate-z{syntax:\"*\";inherits:false;initial-value:0}@property --tw-rotate-x{syntax:\"*\";inherits:false}@property --tw-rotate-y{syntax:\"*\";inherits:false}@property --tw-rotate-z{syntax:\"*\";inherits:false}@property --tw-skew-x{syntax:\"*\";inherits:false}@property --tw-skew-y{syntax:\"*\";inherits:false}@property --tw-space-y-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-space-x-reverse{syntax:\"*\";inherits:false;initial-value:0}@property --tw-border-style{syntax:\"*\";inherits:false;initial-value:solid}@property --tw-gradient-position{syntax:\"*\";inherits:false}@property --tw-gradient-from{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-via{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-to{syntax:\"<color>\";inherits:false;initial-value:#0000}@property --tw-gradient-stops{syntax:\"*\";inherits:false}@property --tw-gradient-via-stops{syntax:\"*\";inherits:false}@property --tw-gradient-from-position{syntax:\"<length-percentage>\";inherits:false;initial-value:0}@property --tw-gradient-via-position{syntax:\"<length-percentage>\";inherits:false;initial-value:50%}@property --tw-gradient-to-position{syntax:\"<length-percentage>\";inherits:false;initial-value:100%}@property --tw-font-weight{syntax:\"*\";inherits:false}@property --tw-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:\"*\";inherits:false}@property --tw-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:\"*\";inherits:false}@property --tw-inset-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:\"*\";inherits:false}@property --tw-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:\"*\";inherits:false}@property --tw-inset-ring-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:\"*\";inherits:false}@property --tw-ring-offset-width{syntax:\"<length>\";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:\"*\";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:\"*\";inherits:false;initial-value:0 0 #0000}@property --tw-blur{syntax:\"*\";inherits:false}@property --tw-brightness{syntax:\"*\";inherits:false}@property --tw-contrast{syntax:\"*\";inherits:false}@property --tw-grayscale{syntax:\"*\";inherits:false}@property --tw-hue-rotate{syntax:\"*\";inherits:false}@property --tw-invert{syntax:\"*\";inherits:false}@property --tw-opacity{syntax:\"*\";inherits:false}@property --tw-saturate{syntax:\"*\";inherits:false}@property --tw-sepia{syntax:\"*\";inherits:false}@property --tw-drop-shadow{syntax:\"*\";inherits:false}@property --tw-drop-shadow-color{syntax:\"*\";inherits:false}@property --tw-drop-shadow-alpha{syntax:\"<percentage>\";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:\"*\";inherits:false}@property --tw-duration{syntax:\"*\";inherits:false}@property --tw-ease{syntax:\"*\";inherits:false}@property --tw-content{syntax:\"*\";initial-value:\"\";inherits:false}@property --tw-backdrop-blur{syntax:\"*\";inherits:false}@property --tw-backdrop-brightness{syntax:\"*\";inherits:false}@property --tw-backdrop-contrast{syntax:\"*\";inherits:false}@property --tw-backdrop-grayscale{syntax:\"*\";inherits:false}@property --tw-backdrop-hue-rotate{syntax:\"*\";inherits:false}@property --tw-backdrop-invert{syntax:\"*\";inherits:false}@property --tw-backdrop-opacity{syntax:\"*\";inherits:false}@property --tw-backdrop-saturate{syntax:\"*\";inherits:false}@property --tw-backdrop-sepia{syntax:\"*\";inherits:false}@property --tw-tracking{syntax:\"*\";inherits:false}@property --tw-leading{syntax:\"*\";inherits:false}@layer properties{@supports ((-webkit-hyphens:none) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,::backdrop,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-translate-z:0;--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-space-y-reverse:0;--tw-space-x-reverse:0;--tw-border-style:solid;--tw-gradient-position:initial;--tw-gradient-from:#0000;--tw-gradient-via:#0000;--tw-gradient-to:#0000;--tw-gradient-stops:initial;--tw-gradient-via-stops:initial;--tw-gradient-from-position:0%;--tw-gradient-via-position:50%;--tw-gradient-to-position:100%;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-duration:initial;--tw-ease:initial;--tw-content:\"\";--tw-backdrop-blur:initial;--tw-backdrop-brightness:initial;--tw-backdrop-contrast:initial;--tw-backdrop-grayscale:initial;--tw-backdrop-hue-rotate:initial;--tw-backdrop-invert:initial;--tw-backdrop-opacity:initial;--tw-backdrop-saturate:initial;--tw-backdrop-sepia:initial;--tw-tracking:initial;--tw-leading:initial}}}";
styleInject(css_248z,{"insertAt":"top"});

function RootLayout({ children, }) {
    return (jsxs("html", { className: `font-reddit`, lang: "en", suppressHydrationWarning: true, children: [jsx("head", {}), jsx("body", { className: "font-reddit antialiased bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400", "cz-shortcut-listen": "true", children: jsxs("div", { className: "flex flex-col h-[100vh]", children: ["  ", children] }) })] }));
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
	const _react = /*#__PURE__*/ _interop_require_default._(require$$0);
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
	const _react = require$$0;
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
		const _react = /*#__PURE__*/ _interop_require_default(require$$0);
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
	const _react = /*#__PURE__*/ _interop_require_wildcard._(require$$0);
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
	const _react = require$$0;
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
		const _react = /*#__PURE__*/ _interop_require_default._(require$$0);
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
		const _react = require$$0;
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
		const _react = require$$0;
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
	const _react = /*#__PURE__*/ _interop_require_wildcard._(require$$0);
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

const AppContext = createContext({
    sidebarOpen: true,
    setSidebarOpen: () => false,
    sidebarExpanded: true,
    setSidebarExpanded: () => false,
});
const useAppProvider = () => useContext(AppContext);

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

function Logo({ imageUrl, label }) {
    return (jsx(Link, { className: "block", href: "/", children: jsx("img", { src: imageUrl ??
                "https://app.crezlo.com/_next/static/media/cq-light.ffbf1233.png", 
            // src={pathname==="/" || pathname?.includes("features")? lightLogo.src : theme === "dark" ? lightLogo.src : lightLogo.src}
            style: {
                objectFit: "cover",
            }, width: 150, height: 150 }) }));
}

function Sidebar({ variant = "v2", menuItems, logoLabel, logoUrl, }) {
    const sidebar = useRef(null);
    const { sidebarOpen, setSidebarOpen, sidebarExpanded, setSidebarExpanded } = useAppProvider();
    const segments = navigation.useSelectedLayoutSegments();
    useWindowWidth();
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
    return (jsxs("div", { className: `min-w-fit  ${sidebarExpanded ? "sidebar-expanded" : ""}`, children: [jsx("div", { className: `fixed inset-0 bg-gray-900/30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`, "aria-hidden": "true" }), jsxs("div", { id: "sidebar", ref: sidebar, className: `flex lg:flex! flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 h-[100dvh] overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:w-64! shrink-0 bg-white dark:bg-gray-800 p-4 transition-all duration-200 ease-in-out  ${sidebarOpen ? "translate-x-0" : "-translate-x-64"} ${variant === "v2"
                    ? "border-r border-gray-200 dark:border-gray-700/60"
                    : "rounded-r-2xl shadow-xs"} `, children: [jsxs("div", { className: "flex justify-center mb-5 pr-3 sm:px-2", children: [jsxs("button", { className: "lg:hidden text-gray-500 hover:text-gray-400", onClick: () => setSidebarOpen(!sidebarOpen), "aria-controls": "sidebar", "aria-expanded": sidebarOpen, children: [jsx("span", { className: "sr-only", children: "Close sidebar" }), jsx("svg", { className: "w-6 h-6 fill-current", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: jsx("path", { d: "M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" }) })] }), jsx(Logo, { imageUrl: logoUrl, label: logoLabel })] }), jsx("div", { className: "space-y-0", children: jsxs("div", { children: [jsx("h3", { className: "text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3", children: jsx("span", { className: "hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6", "aria-hidden": "true", children: "\u2022\u2022\u2022" }) }), jsx("ul", { className: "mt-3", children: menuItems?.map((menu) => {
                                        const isMenuActive = segments?.includes(menu?.value) ||
                                            menu?.subMenu?.some((s) => segments?.includes(s?.value));
                                        return (jsx(SidebarLinkGroup, { open: isMenuActive, children: (handleClick, open) => {
                                                const Wrapper = menu?.href ? Link : "div";
                                                return (jsxs(Fragment, { children: [jsx(Wrapper, { ...(menu?.href ? { href: menu?.href } : {}), 
                                                            // href="#0"
                                                            className: `block cursor-pointer text-gray-800 dark:text-gray-100 truncate transition ${isMenuActive
                                                                ? ""
                                                                : "hover:text-gray-900 dark:hover:text-white"}`, onClick: (e) => {
                                                                // e.preventDefault();
                                                                handleClick();
                                                            }, children: jsxs("div", { className: "flex items-center justify-between", children: [jsxs("div", { className: "flex flex-1 items-center", children: [jsx("span", { className: `shrink-0 fill-current ${isMenuActive
                                                                                    ? "text-indigo-500"
                                                                                    : "text-gray-400 dark:text-gray-500"}`, children: menu?.icon }), jsx("span", { className: "text-sm font-medium ml-4 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200", children: menu?.label })] }), menu?.badge && (jsx("div", { className: "flex shrink-0 ml-2", children: jsx("span", { className: "inline-flex items-center justify-center h-5 text-xs font-medium text-white bg-indigo-500 px-2 rounded-sm", children: menu?.badge }) })), !menu?.href && (jsx("div", { className: "flex shrink-0 ml-2", children: jsx("svg", { className: `w-3 h-3 shrink-0 ml-1 fill-current text-gray-400 dark:text-gray-500 ${open && "rotate-180"}`, viewBox: "0 0 12 12", children: jsx("path", { d: "M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" }) }) }))] }) }), menu?.subMenu && (jsx("div", { className: "lg:hidden lg:sidebar-expanded:block 2xl:block", children: jsx("ul", { className: `pl-8 mt-1 ${!open && "hidden"}`, children: menu?.subMenu?.map((sub) => {
                                                                    return (jsx("li", { className: "mb-1 last:mb-0", children: jsx(SidebarLink, { href: sub?.href, active: segments?.includes(sub?.value), children: jsx("span", { className: "text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200", children: sub?.label }) }) }, sub?.label));
                                                                }) }) }))] }));
                                            } }, menu?.label));
                                    }) })] }) }), jsx("div", { className: "pt-3  flex  justify-end mt-auto", children: jsx("div", { className: "w-12 pl-4 pr-3 py-2", children: jsxs("button", { className: "text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400", onClick: () => setSidebarExpanded(!sidebarExpanded), children: [jsx("span", { className: "sr-only", children: "Expand / collapse sidebar" }), jsx("svg", { className: "shrink-0 fill-current text-gray-400 dark:text-gray-500 sidebar-expanded:rotate-180", xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", viewBox: "0 0 16 16", children: jsx("path", { d: "M15 16a1 1 0 0 1-1-1V1a1 1 0 1 1 2 0v14a1 1 0 0 1-1 1ZM8.586 7H1a1 1 0 1 0 0 2h7.586l-2.793 2.793a1 1 0 1 0 1.414 1.414l4.5-4.5A.997.997 0 0 0 12 8.01M11.924 7.617a.997.997 0 0 0-.217-.324l-4.5-4.5a1 1 0 0 0-1.414 1.414L8.586 7M12 7.99a.996.996 0 0 0-.076-.373Z" }) })] }) }) })] })] }));
}

export { RootLayout, Sidebar };
//# sourceMappingURL=index.esm.js.map
