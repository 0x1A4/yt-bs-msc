(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{320:function(e,n,t){e.exports=t(520)},325:function(e,n,t){},520:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(61),o=t.n(c),u=(t(325),t(326),t(160)),i=t(258),l=t(27),d=t(16),s=Object(d.e)([]),m=Object(d.e)(-1),f=Object(d.e)([]),b=Object(d.e)(-1),p=b.map(function(e){return-1!==e}),E=(Object(d.f)({account:m,client:b}),Object(d.e)(-1),function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"initial",t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=t.result,r=void 0===a?null:a,c=t.error,o=void 0===c?null:c,u=t.reset,i=void 0===u?Object(d.d)():u,l=Object(d.e)(r).reset(e).reset(e.fail).reset(i).on(e.done,function(e,n){return n.result}),s=Object(d.e)(o).reset(e).reset(e.done).reset(i).on(e.fail,function(e,n){return n.error}),m=Object(d.e)(n).on(e,function(){return"loading"}).on(e.done,function(){return"done"}).on(e.fail,function(){return"fail"}).reset(i),f=m.map(function(e){return"done"===e}),b=m.map(function(e){return"fail"===e}),p=m.map(function(e){return"loading"===e});return{status:m,result:l,error:s,isDone:f,isFailed:b,isLoading:p}}),v=Object(d.d)(),j=Object(d.c)(),h=E(j),O=Object(d.d)(),y=Object(d.d)(),g=Object(d.c)(),k=E(g),w=Object(d.d)(),T=Object(d.d)(),C=function(e){e.notificationSystem;var n=Object(l.a)(s),t=Object(l.a)(h.isLoading);Object(l.a)(h.isFailed);return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a.Item,null,r.a.createElement(i.a,{placeholder:"Select an account",search:!0,selection:!0,options:n.map(function(e){return{key:e.id,value:e.id,text:"dev"===e.environment?"dev:".concat(e.name):e.name}}),loading:t,onChange:function(e,n){return O(n.value)}})))},x=function(e){e.notificationSystem;var n=Object(l.a)(f),t=Object(l.a)(k.isLoading);return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a.Item,null,r.a.createElement(i.a,{placeholder:"Select an account",search:!0,selection:!0,options:n.map(function(e){return{key:e.id,value:e.id,text:e.name}}),loading:t,onChange:function(e,n){return w(n.value)}})))},F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null),r.a.createElement(x,null))},I=t(223),D=t.n(I),S=t(315),A=t(129),L=t(297),P=Object(d.e)("http://localhost:3001"),G=function(){var e=Object(L.a)(D.a.mark(function e(n,t){var a,r,c,o,u,i,l=arguments;return D.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=l.length>2&&void 0!==l[2]?l[2]:{},r=P.getState(),c=Object(A.a)({},M(a),a.headers),o="".concat(a.baseUri||r).concat(t),a.body,u=Object(S.a)(a,["body"]),i=Object(A.a)({method:n,headers:N(c)},u,{body:U(a,c),uri:o}),e.abrupt("return",fetch(o,i).then(function(e){if("text"===a.parse)return e.text();if("noparse"===a.parse)return e;var n=e.headers.get("Content-Type");if(n&&n.includes("json"))return e.json().then(Y,Y);throw new TypeError("Unexpected content-type")}));case 8:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}(),M=function(e){var n=R(e);return n?{"Content-Type":n}:{}},R=function(e){return e&&e.headers&&e.headers["Content-Type"]?e.headers["Content-Type"]:e&&e.body&&e.body instanceof FormData?"multipart/form-data":"object"===typeof e.body?"application/json":e.headers&&e.headers["Content-Type"]||""},N=function(e){return Object.keys(e).map(function(n){return[n,e[n]]})},U=function(e,n){var t=n["Content-Type"];return e.body&&t&&t.includes("json")?JSON.stringify(e.body):e.body instanceof FormData?e.body:null};function Y(e){return e?function(e){return e.ok?Promise.resolve(e.result):Promise.reject(e.error)}(e):e}var J,V=function(e){return G("GET","/accounts?info=".concat(e),{parse:"json"})},B=function(e){return G("GET","/clients?info=".concat(e))},W=function(e){return G("GET","/clients?account=".concat(e))};!function(e){e.SIMPLE="simple",e.DETAILED="detailed"}(J||(J={})),v.watch(function(){return j()}),j.use(function(){return V(J.SIMPLE)}),s.on(j.done,function(e,n){return n.result.accounts}),m.on(O,function(e,n){return y(n),n}),y.watch(function(e){return g(e)}),g.use(function(e){return W(e)}),f.on(g.done,function(e,n){return n.result.clients}),b.on(w,function(e,n){return n});var z=t(34),$=function(){var e=Object(l.a)(p);return r.a.createElement(r.a.Fragment,null,[{id:0,name:"TEMPLATES",text:"Templates"},{id:1,name:"CAMPAIGNS",text:"Campaigns"},{id:99,name:"SETTINGS",text:"Settings"}].map(function(n){return r.a.createElement(u.a.Item,{key:n.id,name:n.name,onClick:function(){return T(n.id)},position:99!==n.id?void 0:"right",content:99!==n.id?n.text:r.a.createElement(z.a,{name:"cogs",size:"large"}),disabled:99!==n.id&&!e})}))},q=t(298),H=t.n(q),K=function(){var e=Object(a.useRef)(null);return v(),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement(F,null),r.a.createElement($,null)),r.a.createElement(H.a,{ref:e}))},Q=t(125),X=t(279),Z=t(171),_=Object(d.e)([]),ee=Object(d.e)([]),ne=Object(d.e)([]),te=Object(d.e)(-1),ae=Object(d.e)(-1),re=Object(d.e)(-1),ce=Object(d.e)(-1),oe=Object(d.e)([]),ue=Object(d.d)(),ie=Object(d.d)(),le=Object(d.c)(),de=(E(le),Object(d.d)()),se=Object(d.d)(),me=Object(d.c)(),fe=(E(me),Object(d.d)()),be=Object(d.d)(),pe=Object(d.c)(),Ee=(E(pe),Object(d.d)()),ve=Object(d.d)(),je=Object(d.c)(),he=(E(je),Object(d.d)()),Oe=Object(d.c)(),ye=(E(Oe),Object(d.d)()),ge=Object(d.c)(),ke=(E(ge),t(299)),we=t(278),Te=function(e){var n=e.field,t=(e.changeField,null);switch(n.type){case"date":t=r.a.createElement(ke.DatesRangeInput,{name:"datesRange",dateFormat:"YYYY-MM-DD",placeholder:"From - To (optional)",value:n.value,iconPosition:"left",style:{width:"100%"},onChange:function(){return null},disabled:!n.active});break;case"dropdown":t=r.a.createElement(i.a,{placeholder:n.text,fluid:!0,search:!0,selection:!0,value:n.value,options:n.options,disabled:!n.active});break;case"input":t=r.a.createElement(we.a,{fluid:!0,value:n.value,placeholder:n.label,disabled:!n.active})}return r.a.createElement(Z.a.Row,null,r.a.createElement(Z.a.Column,{width:4},r.a.createElement("label",null,"".concat(n.label,":"))),r.a.createElement(Z.a.Column,{width:12},t))},Ce=function(e){var n=e.account,t=Object(l.a)(ae)===n.id,a=[{key:"name",label:"Account name",value:n.name,type:"input"},{key:"environment",label:"Environment",value:n.environment,type:"dropdown",options:[{key:1,text:"Development",value:"dev"},{key:2,text:"Production",value:"prod"}]}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,null,r.a.createElement(X.a.Title,{active:t,index:n.id,onClick:function(){return fe(t?-1:n.id)}},r.a.createElement(z.a,{name:"dropdown"}),n.name),r.a.createElement(X.a.Content,{active:t},r.a.createElement(Z.a,{verticalAlign:"middle"},a.map(function(e){return r.a.createElement(Te,{key:e.key,field:e})})))))},xe=function(){return G("GET","/templates")},Fe=function(e){return G("POST","/tokens",{body:{client:e}})},Ie=function(e){return G("GET","/tokens?client=".concat(e))},De=function(e){return G("PUT","/tokens/".concat(e))};te.on(ue,function(e,n){return n}),ie.watch(function(){return le()}),le.use(function(){return B(J.DETAILED)}),ee.on(le.done,function(e,n){return n.result.clients}),re.on(de,function(e,n){return n}),ve.watch(function(e){return je(e)}),je.use(function(e){return Ie(e)}),oe.on(je.done,function(e,n){return n.result.tokens}),je.done.watch(function(e){return console.log(e)}),je.fail.watch(function(e){return console.log(e)}),he.watch(function(e){return Oe(e)}),Oe.use(function(e){return Fe(e)}),Oe.done.watch(function(e){console.log(e),ve(e.params)}),Oe.fail.watch(function(e){return console.log(e)}),ye.watch(function(e){return ge(e)}),ge.use(function(e){return De(e)}),oe.on(ge.done,function(e,n){return e.map(function(e){return e.id===n.params?Object(A.a)({},e,{isValid:!0}):e})}),ge.done.watch(function(e){console.log(e)}),ge.fail.watch(function(e){return console.log(e)}),se.watch(function(){return me()}),me.use(function(){return V(J.DETAILED)}),_.on(me.done,function(e,n){return n.result.accounts}),ae.on(fe,function(e,n){return n}),be.watch(function(){return pe()}),pe.use(function(){return xe()}),ne.on(pe.done,function(e,n){return n.result.templates}),ce.on(Ee,function(e,n){return n});var Se=function(){var e=Object(l.a)(_);return r.a.createElement(X.a,null,e.map(function(e){return r.a.createElement(Ce,{key:e.id,account:e})}))},Ae=t(124),Le=t(71),Pe=function(e){var n=e.client,t=Object(l.a)(re)===n.id,a=Object(l.a)(_).map(function(e){return{key:e.id,text:e.name,value:e.id}}),c=[{key:"name",label:"Client name",value:n.name,type:"input",active:!0},{key:"desc",label:"Description",value:n.desc,type:"input",active:!0},{key:"accountId",label:"MT Agency account",value:n.accountId,type:"dropdown",options:a,active:!0},{key:"mtName",label:"MT client name",value:n.mtName,type:"input",active:!0},{key:"tokensLeft",label:"Tokens left",value:n.tokensLeft,type:"input",active:!0}],o=Object(l.a)(oe),u=function(e){var n=e.token;return r.a.createElement(Z.a.Row,null,r.a.createElement(Z.a.Column,{width:4},r.a.createElement("label",null,"Token #".concat(n.id,":"))),r.a.createElement(Z.a.Column,{width:5},r.a.createElement("label",{style:{color:n.isValid?"#00FF00":"#FF0000"}},n.isValid?"Is valid":"Is not valid")),r.a.createElement(Z.a.Column,{width:7},r.a.createElement(Ae.a,{fluid:!0,content:"Update",onClick:function(){return ye(n.id)}})))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(Q.a,null,r.a.createElement(X.a.Title,{active:t,index:n.id,onClick:function(){return de(t?-1:n.id),t?-1:(ve(n.id),n.id)}},r.a.createElement(z.a,{name:"dropdown"}),n.name),r.a.createElement(X.a.Content,{active:t},r.a.createElement(Z.a,{verticalAlign:"middle"},c.map(function(e){return r.a.createElement(Te,{key:e.key,field:e})}),o.map(function(e){return r.a.createElement(u,{key:e.id,token:e})}),r.a.createElement(Z.a.Row,null,r.a.createElement(Le.a,{width:8,textAlign:"center"},r.a.createElement(Ae.a,{icon:"add",content:"Generate new token",color:"green",onClick:function(){return he(n.id)}})),r.a.createElement(Le.a,{width:8,textAlign:"center"},r.a.createElement(Ae.a,{fluid:!0,icon:"trash alternate",content:"Revoke all tokens",color:"red",onClick:function(){return!1}})))))))},Ge=function(){var e=Object(l.a)(ee);return r.a.createElement(X.a,null,e.map(function(e){return r.a.createElement(Pe,{key:e.id,client:e})}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(function(){return se(),ie(),r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null),r.a.createElement(Se,null),r.a.createElement(Ge,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[320,1,2]]]);
//# sourceMappingURL=main.b75bddb1.chunk.js.map