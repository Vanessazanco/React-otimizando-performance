"use strict";(self.webpackChunkaluroni=self.webpackChunkaluroni||[]).push([[477],{838:function(a,e,s){s.d(e,{Z:function(){return c}});var o=s(942),r=s(694),t=s.n(r),i={tags:"TagsPrato_tags__EHE+0",tags__tipo:"TagsPrato_tags__tipo__qz0VQ",tags__tipo__massas:"TagsPrato_tags__tipo__massas__NNQsv",tags__tipo__carnes:"TagsPrato_tags__tipo__carnes__q37XD",tags__tipo__combos:"TagsPrato_tags__tipo__combos__9KGFv",tags__tipo__veganos:"TagsPrato_tags__tipo__veganos__KcU3D",tags__porcao:"TagsPrato_tags__porcao__oYz2e",tags__qtdpessoas:"TagsPrato_tags__qtdpessoas__JsI-a",tags__valor:"TagsPrato_tags__valor__CJ5Ik"},n=s(184);function c(a){var e,s=a.category,r=a.size,c=a.serving,l=a.price;return(0,n.jsxs)("div",{className:i.tags,children:[(0,n.jsx)("div",{className:t()((e={},(0,o.Z)(e,i.tags__tipo,!0),(0,o.Z)(e,i["tags__tipo__".concat(s.label.toLowerCase())],!0),e)),children:s.label}),(0,n.jsxs)("div",{className:i.tags__porcao,children:[r,"g"]}),(0,n.jsxs)("div",{className:i.tags__qtdpessoas,children:[c," 2 pessoa",1===c?"":"s"]}),(0,n.jsxs)("div",{className:i.tags__valor,children:["R$ ",l.toFixed(2)]})]})}},477:function(a,e,s){s.r(e),s.d(e,{default:function(){return L}});var o=s(885),r={cardapio__filtros:"Cardapio_cardapio__filtros__WpwJK"},t=s(791),i="Buscador_buscador__HnmOm",n=s(880),c=s(184);function l(a){var e=a.busca,s=a.setBusca,o=(0,t.useMemo)((function(){return(0,c.jsx)(n.lnn,{size:20,color:"#4C4D5E"})}),[]);return(0,c.jsxs)("div",{className:i,children:[(0,c.jsx)("input",{value:e,onChange:function(a){return s(a.target.value)},placeholder:"Buscar"}),o]})}var _=(0,t.memo)(l),d=s(942),p=JSON.parse('[{"label":"Massas","id":1},{"label":"Carnes","id":2},{"label":"Combos","id":3},{"label":"Veganos","id":4}]'),u="Filtros_filtros__bYQLW",m="Filtros_filtros__filtro__heqlo",g="Filtros_filtros__filtro--ativo__VLnWp",v=s(694),f=s.n(v);function h(a){var e=a.filtro,s=a.setFiltro;return(0,c.jsx)("div",{className:u,children:p.map((function(a){var o;return(0,c.jsx)("button",{className:f()((o={},(0,d.Z)(o,m,!0),(0,d.Z)(o,g,e===a.id),o)),onClick:function(){return function(a){return e===a.id?s(null):s(a.id)}(a)},children:a.label},a.id)}))})}var b=(0,t.memo)(h),x="Ordenador_ordenador__a6eHk",j="Ordenador_ordenador--ativo__2R5B-",N="Ordenador_ordenador__options__NoJ-I",Z="Ordenador_ordenador__options--ativo__y47Q0",z="Ordenador_ordenador__option__8c1Jd",C=JSON.parse('[{"nome":"","value":""},{"nome":"Por\xe7\xe3o","value":"porcao"},{"nome":"Qtd. pessoas","value":"qtd_pessoas"},{"nome":"Pre\xe7o","value":"preco"}]'),P=s(856);function y(a){var e,s,r,i=a.ordenador,n=a.setOrdenador,l=(0,t.useState)(!1),_=(0,o.Z)(l,2),p=_[0],u=_[1],m=i&&(null===(e=C.find((function(a){return a.value===i})))||void 0===e?void 0:e.nome);return(0,c.jsxs)("button",{className:f()((s={},(0,d.Z)(s,x,!0),(0,d.Z)(s,j,""!==i),s)),onClick:function(){return u(!p)},onBlur:function(){return u(!1)},children:[(0,c.jsx)("span",{children:m||"Ordenar Por"}),p?(0,c.jsx)(P.rWj,{size:20}):(0,c.jsx)(P.Ix0,{size:20}),(0,c.jsx)("div",{className:f()((r={},(0,d.Z)(r,N,!0),(0,d.Z)(r,Z,p),r)),children:C.map((function(a){return(0,c.jsx)("div",{className:z,onClick:function(){return n(a.value)},children:a.nome},a.value)}))})]})}var O=(0,t.memo)(y),M=s(413),S=s(581),T="Item_item__ZJXtO",I="Item_item__imagem__Z2Jt0",J="Item_item__descricao__3-M3a",k="Item_item__titulo__yllBt",q=s(838);function B(a){var e=a.title,s=a.description,o=a.photo;return(0,c.jsxs)("div",{className:T,children:[(0,c.jsx)("div",{className:I,children:(0,c.jsx)("img",{src:o,alt:e})}),(0,c.jsxs)("div",{className:J,children:[(0,c.jsxs)("div",{className:k,children:[(0,c.jsxs)("h2",{children:[" ",e," "]}),(0,c.jsxs)("p",{children:[" ",s," "]})]}),(0,c.jsx)(q.Z,(0,M.Z)({},a))]})]})}var F=(0,t.memo)(B),w="Itens_itens__UZ2qb";function A(a){var e=(0,t.useState)(S),s=(0,o.Z)(e,2),r=s[0],i=s[1],n=a.busca,l=a.filtro,_=a.ordenador;return(0,t.useEffect)((function(){var a=S.filter((function(a){return s=a.title,new RegExp(n,"i").test(s)&&(e=a.category.id,null===l||l===e);var e,s}));i(function(a){switch(_){case"porcao":return a.sort((function(a,e){return a.size>e.size?1:-1}));case"qtd_pessoas":return a.sort((function(a,e){return a.serving>e.serving?1:-1}));case"preco":return a.sort((function(a,e){return a.price>e.price?1:-1}));default:return a}}(a))}),[n,l,_]),(0,c.jsx)("div",{className:w,children:r.map((function(a){return(0,c.jsx)(F,(0,M.Z)({},a),a.id)}))})}var E=s(640);function L(){var a=(0,t.useState)(""),e=(0,o.Z)(a,2),s=e[0],i=e[1],n=(0,t.useState)(null),l=(0,o.Z)(n,2),d=l[0],p=l[1],u=(0,t.useState)(""),m=(0,o.Z)(u,2),g=m[0],v=m[1];return(0,c.jsxs)("section",{className:r.cardapio,children:[(0,c.jsx)("h3",{className:E.Z.titulo,children:"Card\xe1pio"}),(0,c.jsx)(_,{busca:s,setBusca:i}),(0,c.jsxs)("div",{className:r.cardapio__filtros,children:[(0,c.jsx)(b,{filtro:d,setFiltro:p}),(0,c.jsx)(O,{ordenador:g,setOrdenador:v})]}),(0,c.jsx)(A,{busca:s,filtro:d,ordenador:g})]})}},640:function(a,e){e.Z={container:"Tema_container__TF5lI",titulo:"Tema_titulo__vmd-+"}},581:function(a){a.exports=JSON.parse('[{"title":"Macarr\xe3o mediterr\xe2neo","description":"Macarr\xe3o spaghetti com frutos-do-mar e espec\xedarias, especialidade da cozinha. Aten\xe7\xe3o: Cont\xe9m camar\xe3o e outros frutos-do-mar!","photo":"/assets/pratos/macarrao_mediterraneo.png","size":400,"serving":2,"price":73,"id":1,"category":{"id":1,"label":"Massas"}},{"title":"Macarr\xe3o da casa","description":"Macarr\xe3o com frutos-do-mar e espec\xedarias, especialidade da cozinha. Aten\xe7\xe3o: Cont\xe9m camar\xe3o e outros frutos-do-mar!","photo":"/assets/pratos/macarrao_da_casa.png","size":400,"serving":2,"price":54,"id":2,"category":{"id":1,"label":"Massas"}},{"title":"Macarr\xe3o com chilli","description":"Macarr\xe3o fetuccine com molho de chilli e especi\xe1rias.","photo":"/assets/pratos/macarrao_com_chilli.png","size":350,"serving":1,"price":58,"id":3,"category":{"id":1,"label":"Massas"}},{"title":"Salada da casa com salm\xe3o grelhado","description":"Salada da casa (alface, r\xfacula, cenoura) com salm\xe3o.","photo":"/assets/pratos/salada_da_casa.png","size":450,"serving":1,"price":42,"id":4,"category":{"id":2,"label":"Carnes"}},{"title":"Bife com batatas","description":"Bife de boi (150g) na chapa, com batatas fritas. Acompanha arroz e molhos.","photo":"/assets/pratos/bife_com_batatas.png","size":550,"serving":2,"price":86,"id":5,"category":{"id":2,"label":"Carnes"}},{"title":"Picanha picada com legumes e massa","description":"400g de picanha picada, com legumes grelhados e massa escolhida pelo cliente.","photo":"/assets/pratos/picanha_picada.png","size":850,"serving":3,"price":123,"id":6,"category":{"id":3,"label":"Combos"}},{"title":"Lasagna vegana (carne de soja)","description":"Lasagna 100% vegana feita com carne de soja e massa especial.","photo":"/assets/pratos/lasagna_vegana.png","size":350,"serving":1,"price":45,"id":7,"category":{"id":4,"label":"Veganos"}},{"title":"Salada especial","description":"Salada com abacate, manga, alface, gr\xe3o de bico e muito mais.","photo":"/assets/pratos/salada_especial.png","size":350,"serving":1,"price":37,"id":8,"category":{"id":4,"label":"Veganos"}},{"title":"Alm\xf4ndegas","description":"Por\xe7\xe3o de alm\xf4ndegas com sour cream, cebola e temp\xearos. Acompanha arroz ou massa.","photo":"/assets/pratos/almondegas.png","size":740,"serving":3,"price":120,"id":9,"category":{"id":3,"label":"Combos"}}]')}}]);
//# sourceMappingURL=477.499798c2.chunk.js.map