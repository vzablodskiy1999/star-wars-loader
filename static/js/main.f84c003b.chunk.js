(this["webpackJsonpstar-wars-ui"]=this["webpackJsonpstar-wars-ui"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var c,a=n(0),i=n.n(a),r=n(14),s=n.n(r),o=(n(20),n(7)),l=n(8),j=(n(21),n(28)),u=n(36),d=n(2),h=function(e){return Object(d.jsx)(j.a,{children:Object(d.jsx)(u.a,{"data-testid":"search-input",placeholder:"Start typing your favorite character name and we will upload details...",onChange:function(t){e.onChange(t.target.value)}})})},b=n(32),f=n(30),O="https://swapi.dev/api/",m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return fetch(O+"people/?search=".concat(t,"&page=").concat(e)).then((function(e){return e.json()})).catch((function(e){console.log(e.message)}))},x=i.a.createContext({}),v=n(29),g=n(31),p=n(34),y=n(33),I=function(e){var t=Object(a.useContext)(x),n=Object(a.useMemo)((function(){var n,c=t.films;return(null===t||void 0===t||null===(n=t.films)||void 0===n?void 0:n.length)?e.films.map((function(e){var t;return null===(t=c.find((function(t){return t.url===e})))||void 0===t?void 0:t.title})):[]}),[e.films,t.films]);return Object(d.jsxs)(p.a,{className:"mb-3",children:[Object(d.jsx)(p.a.Header,{as:"h5",children:e.name}),Object(d.jsx)(p.a.Body,{children:Object(d.jsxs)(y.a,{children:[Object(d.jsxs)(y.a.Item,{children:["Gender: ",e.gender]}),Object(d.jsxs)(y.a.Item,{children:["Height: ",e.height]}),Object(d.jsxs)(y.a.Item,{children:["Weight: ",e.mass]}),Object(d.jsxs)(y.a.Item,{children:["Hair color: ",e.hair_color]}),Object(d.jsxs)(y.a.Item,{children:["Skin color: ",e.skin_color]}),Object(d.jsxs)(y.a.Item,{children:["Eye color: ",e.eye_color]}),Object(d.jsxs)(y.a.Item,{children:["Birth year: ",e.birth_year]}),Object(d.jsxs)(y.a.Item,{children:["Films: ",n.join(", ")]})]})})]})},w=function(e){var t,n=Object(a.useContext)(x);return Object(d.jsx)("div",{children:e.isLoading?Object(d.jsx)(v.a,{animation:"border",variant:"secondary"}):null===n||void 0===n||null===(t=n.characters)||void 0===t?void 0:t.map((function(e){return Object(d.jsx)(f.a,{className:"w-100","data-testid":"character-list",children:Object(d.jsx)(g.a,{lg:12,md:12,sm:12,children:Object(d.jsx)(I,Object(o.a)({},e))})},e.url)}))})},C=n(35);var S=function(){var e=Object(a.useState)({}),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(1),s=Object(l.a)(r,2),j=s[0],u=s[1],v=Object(a.useState)(""),g=Object(l.a)(v,2),p=g[0],y=g[1],I=Object(a.useState)(!1),S=Object(l.a)(I,2),N=S[0],k=S[1],F=function(e,t){return k(!0),m(e,t).then((function(e){i(Object(o.a)(Object(o.a)({},n),{},{count:e.count,characters:e.results}))})).finally((function(){k(!1)}))};Object(a.useEffect)((function(){k(!0),m(1,"").then((function(e){fetch(O+"films/").then((function(e){return e.json()})).catch((function(e){console.log(e.message)})).then((function(t){i({count:e.count,characters:e.results,films:t.results})}))})).finally((function(){k(!1)}))}),[]);var B=Object(a.useMemo)((function(){var e=n.count,t=Math.ceil(e/10),c=[];if(t>1)for(var a=function(e){c.push(Object(d.jsx)(C.a.Item,{active:j===e,"data-testid":"pagination-item",onClick:function(){j!==e&&(u(e),F(e,p))},children:e},e))},i=1;i<=t;i++)a(i);return c}),[n.count,j]);return Object(d.jsx)(x.Provider,{value:n,children:Object(d.jsx)("div",{className:"pt-5",children:Object(d.jsxs)(b.a,{children:[Object(d.jsx)(f.a,{className:"mb-4",children:Object(d.jsx)("h1",{className:"w-100 text-center",children:"Star wars characters loader"})}),Object(d.jsx)(f.a,{className:"mb-4",children:Object(d.jsx)(h,{onChange:function(e){y(e),u(1),void 0!==c&&clearTimeout(c),c=setTimeout((function(){F(1,e)}),1e3)}})}),Object(d.jsx)(f.a,{className:"d-flex justify-content-center",children:Object(d.jsx)(w,{isLoading:N})}),Object(d.jsx)(f.a,{className:"mb-4",children:!N&&Object(d.jsx)(C.a,{children:B})})]})})})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(S,{})}),document.getElementById("root")),N()}},[[27,1,2]]]);
//# sourceMappingURL=main.f84c003b.chunk.js.map