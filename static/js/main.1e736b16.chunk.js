(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{29:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var s=n(9),c=n(3),i=n(1),a=n(0),l=Object(i.createContext)(),r=function(e){var t=e.children,n=Object(i.useState)("light"),s=Object(c.a)(n,2),r=s[0],o=s[1];Object(i.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="/",j="YM",d="Yash Makwana",h="Full Stack Engineer",m="I am a full stack developer. I enjoy writing clean code, building beautiful user interfaces.I\u2019m specializing in building (and occasionally designing) exceptional digital experiences. Currently, I\u2019m focused on building accessible, AI related technologies.",b="https://example.com",u=[{name:"Project 1",img:"/images/forum.png",img1:"/images/forum.png",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["PHP","HACK","CSS"],sourceCode:"https://github.com/Yashmakwanab/Forum-Website",livePreview:"https://forum-webapp.000webhostapp.com/"},{name:"Project 2",img:"/images/port.png",img1:"/images/portfolio.png",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["SASS","TYPESCRIPT","REACT"],sourceCode:"https://github.com/Yashmakwanab/Portfolio-Website",livePreview:"https://github.com"},{name:"Project 3",img:"/images/shoes1.jpg",img1:"/images/shoes1.jpg",description:"Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam",stack:["HTML","JAVASCRIPT","CSS"],sourceCode:"https://github.com/Yashmakwanab/shoes-cart",livePreview:"https://yashdevloped.000webhostapp.com/"}],g=[{name:"HTML",img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"},{name:"CSS",img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"},{name:"JavaScript",img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"},{name:"TypeScript",img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"},{name:"ReactJs",img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"},{name:"NextJs",img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"},{name:"SASS",img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"},{name:"Material UI",img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"},{name:"Git",img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"},{name:"Php",img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"},{name:"Laravel",img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg"},{name:"NodeJs",img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"}],p="yashmakwanab57@gmail.com",v="https://github.com/Yashmakwanab",x="https://www.linkedin.com/in/yash-makwana-9a1409219",O=n(16),f=n.n(O),k=n(14),N=n.n(k),w=n(18),_=n.n(w),y=n(17),S=n.n(y),C=(n(29),function(){var e=Object(i.useContext)(l),t=Object(c.a)(e,1)[0],n=t.themeName,s=t.toggleTheme,r=Object(i.useState)(!1),o=Object(c.a)(r,2),j=o[0],d=o[1],h=function(){return d(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[u.length?Object(a.jsxs)("li",{className:"nav__list-item",children:[" ",Object(a.jsx)("a",{href:"#projects",onClick:h,className:"link link--nav",children:"Projects"})," "]}):null,g.length?Object(a.jsxs)("li",{className:"nav__list-item",children:[" ",Object(a.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:" Skills  "})," "]}):null,p?Object(a.jsxs)("li",{className:"nav__list-item",children:[" ",Object(a.jsx)("a",{href:"#skills",onClick:h,className:"link link--nav",children:" Contact  "})," "]}):null]}),Object(a.jsx)("button",{type:"button",onClick:s,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(N.a,{}):Object(a.jsx)(f.a,{})}),Object(a.jsx)("button",{type:"button",onClick:h,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(S.a,{}):Object(a.jsx)(_.a,{})})]})}),P=(n(33),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:" link1 hovicon effect-2 sub-b glow-on-hover",children:t}):t}),Object(a.jsx)(C,{})]})}),I=(n(34),function(){var e=d,t=h,n=m,s=b;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsx)("div",{className:"about__contact center",children:s&&Object(a.jsx)("a",{href:s,target:"blank",children:Object(a.jsxs)("button",{className:"button",type:"button",children:["Resume",Object(a.jsx)("div",{className:"button__horizontal"}),Object(a.jsx)("div",{className:"button__vertical"})]})})})]})}),A=n(7),E=n.n(A),T=n(11),Y=n.n(T),J=n(19),L=n.n(J),M=(n(36),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("img",{src:"/cleanfolio"+t.img,alt:"projectimg"}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},E()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",target:"blank",children:Object(a.jsx)(Y.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",target:"blank",children:Object(a.jsx)(L.a,{})})]})}),q=(n(37),function(){return u.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:u.map((function(e){return Object(a.jsx)(M,{project:e},E()())}))})]}):null}),H=(n(38),function(){return g.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:g.map((function(e){return Object(a.jsxs)("li",{className:"skills__list-item  button-container-1 ",children:[Object(a.jsxs)("span",{className:"mas",children:[" ",Object(a.jsx)("img",{src:e.img,alt:"projectimg",width:48,height:48})," ",Object(a.jsx)("div",{children:e.name})]}),Object(a.jsx)("button",{id:"work",type:"button",name:"Hover",children:e.name})]},E()())}))})]}):null}),R=n(20),V=n.n(R),z=(n(39),function(){var e=Object(i.useState)(!1),t=Object(c.a)(e,2),n=t[0],s=t[1];Object(i.useEffect)((function(){var e=function(){return window.pageYOffset>500?s(!0):s(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]);return n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(V.a,{fontSize:"midium",style:{color:"white",width:"auto",height:"auto"}})})}):null}),F=n(22),G=n.n(F),W=n(21),B=n.n(W),K=(n(40),function(){if(!p)return null;var e={background:"transparent",margin:"0px 0px 2px 0px"};return Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsxs)("div",{className:"contactbox",children:[Object(a.jsx)("a",{href:"mailto:".concat(p),target:"blank",children:Object(a.jsxs)("span",{type:"button",className:" btn--outline rainbow rainbow-5",children:[Object(a.jsx)(B.a,{style:e}),"Email"]})}),Object(a.jsx)("a",{href:v,target:"blank",children:Object(a.jsxs)("span",{type:"button",className:" btn--outline rainbow rainbow-5",children:[Object(a.jsx)(Y.a,{style:e}),"Github"]})}),Object(a.jsx)("a",{href:x,target:"blank",children:Object(a.jsxs)("span",{type:"button",className:" btn--outline rainbow rainbow-5",children:[Object(a.jsx)(G.a,{style:e}),"LinkedIn"]})})]})]})}),U=(n(41),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://www.linkedin.com/in/yash-makwana-9a1409219",className:"link footer__link",target:"blank",children:"\xa9 2022-2023 Yash Makwana"})})}),D=(n(42),function(){var e=Object(i.useContext)(l),t=Object(c.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(P,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(I,{}),Object(a.jsx)(q,{}),Object(a.jsx)(H,{}),Object(a.jsx)(K,{})]}),Object(a.jsx)(z,{}),Object(a.jsx)(U,{})]})});n(43);Object(s.render)(Object(a.jsx)(r,{children:Object(a.jsx)(D,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.1e736b16.chunk.js.map