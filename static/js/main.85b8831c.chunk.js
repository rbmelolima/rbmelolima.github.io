(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{30:function(e,t,a){e.exports=a(67)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(24),c=a.n(l),o=(a(35),a(36),a(29)),i=a(1);a(37),a(38);function u(){return r.a.createElement("header",{id:"navigation"},r.a.createElement("nav",null,r.a.createElement("a",{href:"#apresentation"},"@rbmelolima"),r.a.createElement("a",{href:"https://br.linkedin.com/in/rbmelolima"},"Sobre"),r.a.createElement("a",{href:"#projetos"},"Projetos")))}var m=a(5),s=a.n(m),p=a(7),E=a(8),f=a(6),d=a(25),h=a.n(d).a.create({baseURL:"https://api.github.com/"}),v=a(26),b=a(27),g=new(function(){function e(){Object(v.a)(this,e)}return Object(b.a)(e,[{key:"getRepositories",value:function(){var e=Object(p.a)(s.a.mark((function e(){var t,a,n,r=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"rbmelolima",e.prev=1,e.next=4,h.get("users/".concat(t,"/repos?per_page=100"));case 4:return a=e.sent,n=a.data,e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(1),console.error({error:e.t0}),new Error("Erro ao buscar os reposit\xf3rios");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()},{key:"profile",value:function(){var e=Object(p.a)(s.a.mark((function e(){var t,a,n,r=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"rbmelolima",e.prev=1,e.next=4,h.get("users/".concat(t));case 4:return a=e.sent,n=a.data,e.abrupt("return",n);case 9:throw e.prev=9,e.t0=e.catch(1),console.error({error:e.t0}),new Error("Erro ao buscar dados do perfil");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}()}]),e}()),j=function(e){var t=e.error,a=e.children;return t?r.a.createElement(r.a.Fragment,null):r.a.createElement(r.a.Fragment,null,a)},w=(a(57),function(e){var t=e.url,a=e.children;return r.a.createElement("a",{href:t,target:"blank",className:"cardSocialMedia"},a)}),k=(a(58),function(e){var t=e.children;return r.a.createElement("div",{className:"group-cardSocialMedia"},t)});a(59);function O(){var e=Object(n.useState)(),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),o=Object(E.a)(c,2),i=o[0],u=o[1];function m(){return(m=Object(p.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.profile();case 3:t=e.sent,l(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]),r.a.createElement("section",{id:"apresentation"},r.a.createElement("div",{className:"content"},r.a.createElement(j,{error:i},r.a.createElement("img",{src:null===a||void 0===a?void 0:a.avatar_url,alt:"Foto - Roger Bernardo de Melo Lima"})),r.a.createElement("h1",null,"Roger Bernardo de Melo Lima"),r.a.createElement(j,{error:i},r.a.createElement("p",null,null===a||void 0===a?void 0:a.location),r.a.createElement("p",null,"@".concat(null===a||void 0===a?void 0:a.login))),r.a.createElement("div",{className:"contato"},r.a.createElement(k,null,r.a.createElement(w,{url:"https://github.com/rbmelolima"},r.a.createElement("div",null,r.a.createElement(f.b,{size:"24"}),r.a.createElement("span",null,"Github"))),r.a.createElement(w,{url:"https://www.linkedin.com/in/rbmelolima/"},r.a.createElement("div",null,r.a.createElement(f.f,{size:"24"}),r.a.createElement("span",null,"Linkedin"))),r.a.createElement(w,{url:"mailto:rbmelolima@gmail.com"},r.a.createElement("div",null,r.a.createElement(f.c,{size:"24"}),r.a.createElement("span",null,"Gmail"))),r.a.createElement(w,{url:"https://medium.com/@rbmelolima"},r.a.createElement("div",null,r.a.createElement(f.g,{size:"24"}),r.a.createElement("span",null,"Medium"))),r.a.createElement(w,{url:"https://api.whatsapp.com/send?phone=5513988282873"},r.a.createElement("div",null,r.a.createElement(f.h,{size:"24"}),r.a.createElement("span",null,"Whatsapp"))),r.a.createElement(w,{url:"https://www.instagram.com/rbmelolima/"},r.a.createElement("div",null,r.a.createElement(f.d,{size:"24"}),r.a.createElement("span",null,"Instagram")))))))}a(60);function x(e){var t=e.data,a=t.description,n=t.homepage,l=t.html_url,c=t.language,o=t.name;return r.a.createElement("article",{className:"card-project"},r.a.createElement("h4",null,o),r.a.createElement("p",null,a),r.a.createElement("div",{className:"more-info"},r.a.createElement("a",{href:l,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.b,{size:24})),""!==n&&null!==n?r.a.createElement("a",{href:n,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(f.e,{size:24})):r.a.createElement(r.a.Fragment,null),r.a.createElement("span",null,r.a.createElement(f.a,{size:24}),c)))}a(61);function y(){var e=Object(n.useState)(),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(!1),o=Object(E.a)(c,2),i=o[0],u=o[1];function m(){return(m=Object(p.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.getRepositories();case 3:t=e.sent,l(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){m.apply(this,arguments)}()}),[]),r.a.createElement(j,{error:i},r.a.createElement("section",{id:"projects"},r.a.createElement("h2",null,"Projetos"),r.a.createElement("div",{className:"list-projects"},void 0!==a&&a.map((function(e){return r.a.createElement(x,{data:e,key:e.id})})))))}function z(){return r.a.createElement("main",{id:"page-home"},r.a.createElement(u,null),r.a.createElement(O,null),r.a.createElement(y,null))}function S(){return r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",exact:!0,component:z})))}var N=function(){return r.a.createElement(S,null)};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.85b8831c.chunk.js.map