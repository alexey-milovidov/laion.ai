(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{7286:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(846)}])},8396:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(5893),a=n(9008),i=n.n(a),o=n(1163);function s(e){var t=(0,o.useRouter)(),n=e.title?e.title+" | LAION":"LAION",a=e.desc?e.desc:"LAION, Large-scale Artificial Intelligence Open Network, is a non-profit organization making machine learning resources available to the general public.",s=e.image?e.image:"/social.png",u=e.alt?e.alt:"The text: LAION. Large-scale Artificial Intelligence Open Network, TRULY OPEN AI. 100% NON-PROFIT. 100% FREE.",c=e.slug?e.slug:t.route;return(0,r.jsxs)(i(),{children:[(0,r.jsx)("title",{children:n}),(0,r.jsx)("meta",{name:"title",content:n}),(0,r.jsx)("meta",{property:"og:title",content:n}),(0,r.jsx)("meta",{name:"twitter:title",content:n}),(0,r.jsx)("meta",{name:"description",content:a}),(0,r.jsx)("meta",{property:"og:description",content:a}),(0,r.jsx)("meta",{name:"twitter:description",content:a}),(0,r.jsx)("meta",{property:"og:image",content:"https://laion.ai"+s}),(0,r.jsx)("meta",{name:"twitter:image",content:"https://laion.ai"+s}),(0,r.jsx)("meta",{name:"twitter:image:alt",content:u}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("meta",{property:"og:url",content:"https://laion.ai"+c}),(0,r.jsx)("meta",{name:"twitter:url",content:"https://laion.ai"+c}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,r.jsx)("meta",{name:"theme-color",content:"#1D374E"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon.png"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"}),(0,r.jsx)("link",{rel:"preload",href:"/fonts/DinishCondensed-Bold.woff",as:"font",type:"font/woff",crossOrigin:!0}),(0,r.jsx)("link",{rel:"preload",href:"/fonts/DinishCondensed-Bold.woff2",as:"font",type:"font/woff2",crossOrigin:!0}),(0,r.jsx)("link",{rel:"preload",href:"/fonts/Dinish-Regular.woff",as:"font",type:"font/woff",crossOrigin:!0}),(0,r.jsx)("link",{rel:"preload",href:"/fonts/Dinish-Regular.woff2",as:"font",type:"font/woff2",crossOrigin:!0}),(0,r.jsx)("link",{rel:"preload",href:"/fonts/Dinish-Italic.woff",as:"font",type:"font/woff",crossOrigin:!0}),(0,r.jsx)("link",{rel:"preload",href:"/fonts/Dinish-Italic.woff2",as:"font",type:"font/woff2",crossOrigin:!0})]})}},846:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return m},default:function(){return f}});var r=n(5893),a=n(1664),i=n.n(a),o=n(9980),s=n.n(o),u=n(8396),c=n(1280),l=n(1058),m=!0;function f(e){var t=e.posts;return(0,r.jsxs)("div",{className:"w-full flex justify-center pt-16 md:pt-5",children:[(0,r.jsx)(u.Z,{title:"Blog"}),(0,r.jsxs)("div",{className:"container px-5",children:[(0,r.jsx)("h1",{className:"text-8xl md:text-8xl font-bold pb-2",children:"BLOG"}),(0,r.jsx)("div",{className:"text-md pb-4",children:"Welcome to our LAION blog! Here, you will find commentaries, news, and updates on our current research projects and progress in the field of AI research. These blog posts are not meant to be full scientific research papers, but work in progress to encourage further research / discussions on our discord server and the open scientific community."}),(0,r.jsx)("hr",{className:"mb-5 md:hidden"}),t.map((function(e){var t=e.slug,n=e.frontmatter,a=e.content,o=e.date,u=s()().render(a).replace(/<[^>]+>/g,"");return u.length>300&&(u=u.slice(0,300)+"..."),(0,r.jsx)(i(),{href:"/blog/"+t,children:(0,r.jsxs)("div",{className:"border mb-5 hover:bg-paper hover:text-sky transition-colors cursor-pointer bg-sky border-paper flex flex-col lg:flex-row items-stretch shadow-lg shadow-neutral-800/20",children:[(0,r.jsx)("div",{className:"basis-2/5 team-wrap",children:(0,r.jsx)(l.Z,{src:n.previewImg,alt:n.title,layout:"responsive",width:1600,height:900})}),(0,r.jsxs)("div",{className:"p-5 basis-3/5",children:[(0,r.jsx)("p",{className:"text-3xl",children:n.title}),(0,r.jsxs)("p",{className:"text-lg pb-1",children:["by: ",n.author,", ",(0,c.ZP)(o,"dd mmm, yyyy")]}),(0,r.jsx)("hr",{}),(0,r.jsx)("p",{className:"pt-2",children:u})]})]})},t)}))]})]})}},1280:function(e,t,n){"use strict";n.d(t,{ZP:function(){return o}});var r=/d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g,a=/\b(?:[A-Z]{1,3}[A-Z][TC])(?:[-+]\d{4})?|((?:Australian )?(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time)\b/g,i=/[^-+\dA-Z]/g;function o(e,t,n,a){if(1!==arguments.length||"string"!==typeof e||/\d/.test(e)||(t=e,e=void 0),(e=e||0===e?e:new Date)instanceof Date||(e=new Date(e)),isNaN(e))throw TypeError("Invalid date");var i=(t=String(s[t]||t||s.default)).slice(0,4);"UTC:"!==i&&"GMT:"!==i||(t=t.slice(4),n=!0,"GMT:"===i&&(a=!0));var o=function(){return n?"getUTC":"get"},y=function(){return e[o()+"Date"]()},h=function(){return e[o()+"Day"]()},p=function(){return e[o()+"Month"]()},g=function(){return e[o()+"FullYear"]()},x=function(){return e[o()+"Hours"]()},N=function(){return e[o()+"Minutes"]()},D=function(){return e[o()+"Seconds"]()},w=function(){return e[o()+"Milliseconds"]()},M=function(){return n?0:e.getTimezoneOffset()},T=function(){return m(e)},v=function(){return f(e)},j={d:function(){return y()},dd:function(){return c(y())},ddd:function(){return u.dayNames[h()]},DDD:function(){return l({y:g(),m:p(),d:y(),_:o(),dayName:u.dayNames[h()],short:!0})},dddd:function(){return u.dayNames[h()+7]},DDDD:function(){return l({y:g(),m:p(),d:y(),_:o(),dayName:u.dayNames[h()+7]})},m:function(){return p()+1},mm:function(){return c(p()+1)},mmm:function(){return u.monthNames[p()]},mmmm:function(){return u.monthNames[p()+12]},yy:function(){return String(g()).slice(2)},yyyy:function(){return c(g(),4)},h:function(){return x()%12||12},hh:function(){return c(x()%12||12)},H:function(){return x()},HH:function(){return c(x())},M:function(){return N()},MM:function(){return c(N())},s:function(){return D()},ss:function(){return c(D())},l:function(){return c(w(),3)},L:function(){return c(Math.floor(w()/10))},t:function(){return x()<12?u.timeNames[0]:u.timeNames[1]},tt:function(){return x()<12?u.timeNames[2]:u.timeNames[3]},T:function(){return x()<12?u.timeNames[4]:u.timeNames[5]},TT:function(){return x()<12?u.timeNames[6]:u.timeNames[7]},Z:function(){return a?"GMT":n?"UTC":d(e)},o:function(){return(M()>0?"-":"+")+c(100*Math.floor(Math.abs(M())/60)+Math.abs(M())%60,4)},p:function(){return(M()>0?"-":"+")+c(Math.floor(Math.abs(M())/60),2)+":"+c(Math.floor(Math.abs(M())%60),2)},S:function(){return["th","st","nd","rd"][y()%10>3?0:(y()%100-y()%10!=10)*y()%10]},W:function(){return T()},WW:function(){return c(T())},N:function(){return v()}};return t.replace(r,(function(e){return e in j?j[e]():e.slice(1,e.length-1)}))}var s={default:"ddd mmm dd yyyy HH:MM:ss",shortDate:"m/d/yy",paddedShortDate:"mm/dd/yyyy",mediumDate:"mmm d, yyyy",longDate:"mmmm d, yyyy",fullDate:"dddd, mmmm d, yyyy",shortTime:"h:MM TT",mediumTime:"h:MM:ss TT",longTime:"h:MM:ss TT Z",isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:sso",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",expiresHeaderFormat:"ddd, dd mmm yyyy HH:MM:ss Z"},u={dayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],timeNames:["a","p","am","pm","A","P","AM","PM"]},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return String(e).padStart(t,"0")},l=function(e){var t=e.y,n=e.m,r=e.d,a=e._,i=e.dayName,o=e.short,s=void 0!==o&&o,u=new Date,c=new Date;c.setDate(c[a+"Date"]()-1);var l=new Date;l.setDate(l[a+"Date"]()+1);return u[a+"FullYear"]()===t&&u[a+"Month"]()===n&&u[a+"Date"]()===r?s?"Tdy":"Today":c[a+"FullYear"]()===t&&c[a+"Month"]()===n&&c[a+"Date"]()===r?s?"Ysd":"Yesterday":l[a+"FullYear"]()===t&&l[a+"Month"]()===n&&l[a+"Date"]()===r?s?"Tmw":"Tomorrow":i},m=function(e){var t=new Date(e.getFullYear(),e.getMonth(),e.getDate());t.setDate(t.getDate()-(t.getDay()+6)%7+3);var n=new Date(t.getFullYear(),0,4);n.setDate(n.getDate()-(n.getDay()+6)%7+3);var r=t.getTimezoneOffset()-n.getTimezoneOffset();t.setHours(t.getHours()-r);var a=(t-n)/6048e5;return 1+Math.floor(a)},f=function(e){var t=e.getDay();return 0===t&&(t=7),t},d=function(e){return(String(e).match(a)||[""]).pop().replace(i,"").replace(/GMT\+0000/g,"UTC")}}},function(e){e.O(0,[286,58,774,888,179],(function(){return t=7286,e(e.s=t);var t}));var t=e.O();_N_E=t}]);