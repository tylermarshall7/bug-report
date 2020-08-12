(function(t){function e(e){for(var r,s,i=e[0],c=e[1],l=e[2],u=0,p=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],r=!0,s=1;s<a.length;s++){var c=a[s];0!==n[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var r={},n={app:0},o=[];function s(t){return i.p+"js/"+({Bug:"Bug"}[t]||t)+"."+{Bug:"2862ec72"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,r){a=n[t]=[e,r]}));e.push(a[2]=r);var o,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var l=new Error;o=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",l.name="ChunkLoadError",l.type=r,l.request=o,a[1](l)}n[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:c})}),12e4);c.onerror=c.onload=o,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(a,r,function(e){return t[e]}.bind(null,r));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"197c":function(t,e,a){"use strict";var r=a("acfd"),n=a.n(r);n.a},"56d7":function(t,e,a){"use strict";a.r(e);var r=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},o=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[a("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[t._v("Bug Report")]),t._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"},[a("li",{staticClass:"nav-item",class:{active:"Home"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Home"}}},[t._v("Home")])],1),t.$auth.isAuthenticated?a("li",{staticClass:"nav-item",class:{active:"Profile"==t.$route.name}},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"Profile"}}},[t._v("Profile")])],1):t._e()]),a("span",{staticClass:"navbar-text"},[t.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:t.logout}},[t._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:t.login}},[t._v(" Login ")])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],c=a("bc3a"),l=a.n(c),u=a("335d"),d={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},async logout(){this.$store.dispatch("resetBearer"),await this.$auth.logout({returnTo:window.location.origin})}}},p=d,h=a("2877"),g=Object(h["a"])(p,s,i,!1,null,null,null),m=g.exports,f={name:"App",async beforeCreate(){await Object(u["c"])(),this.$auth.isAuthenticated&&(this.$store.dispatch("setBearer",this.$auth.bearer),this.$store.dispatch("getProfile"))},components:{Navbar:m}},b=f,v=(a("5c0b"),Object(h["a"])(b,n,o,!1,null,null,null)),y=v.exports,B=a("8c4f"),w=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:a("cf05")}}),r("h1",[t._v("Welcome to Your Vue.js App")])])}],C={name:"home"},$=C,j=Object(h["a"])($,w,_,!1,null,null,null),x=j.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about text-center"},[a("h1",[t._v("Welcome "+t._s(t.profile.name))]),a("img",{staticClass:"rounded",attrs:{src:t.profile.picture,alt:""}}),a("p",[t._v(t._s(t.profile.email))])])},O=[],k={name:"Profile",computed:{profile(){return this.$store.state.profile}}},E=k,I=(a("197c"),Object(h["a"])(E,P,O,!1,null,"0e40a50e",null)),N=I.exports;r["a"].use(B["a"]);const T=[{path:"/",name:"Home",component:x},{path:"/profile",name:"Profile",component:N,beforeEnter:u["b"]},{path:"/bug/:bugId",name:"Bug",component:function(){return a.e("Bug").then(a.bind(null,"2f65"))}}],A=new B["a"]({routes:T});var D=A,S=a("2f62");let H=location.host.includes("localhost")?"http://localhost:3000/":"/";const L=l.a.create({baseURL:H+"api",timeout:3e3,withCredentials:!0});r["a"].use(S["a"]);var M=new S["a"].Store({state:{profile:{},bugs:[],bugDetails:{},currentNote:{},notes:[]},mutations:{setProfile(t,e){t.profile=e},setBugs(t,e){t.bugs=e},setBugDetails(t,e){t.bugDetails=e},setNotes(t,e){t.notes=e,console.log("notes",t.notes)},setCurrentNote(t,e){t.currentNote=e}},actions:{setBearer({},t){L.defaults.headers.authorization=t},resetBearer(){L.defaults.headers.authorization=""},async getProfile({commit:t}){try{let e=await L.get("profile");t("setProfile",e.data)}catch(e){console.error(e)}},getAllBugs(){L.get("bugs").then(t=>{this.commit("setBugs",t.data)})},async addBug({commit:t,dispatch:e},a){try{let t=await L.post("bugs",a);e("getAllBugs"),D.push({name:"Bug",params:{bugId:t.data._id}})}catch(r){console.error(r)}},async addComment({commit:t,dispatch:e},a){try{await L.post("notes",a);e("getNotesByBugId",a.bugId),console.log("added comment",a)}catch(r){console.error(r)}},setBugDetails({commit:t,dispatch:e,state:a},r){let n=this.state.bugs.find(t=>r==t.id);t("setBugDetails",n),e("getNotesByBugId",r)},setCurrentComment({commit:t,dispatch:e,state:a},r){let n=this.state.notes.find(t=>r==t.id);t("setCurrentComment",n)},async getCommentsByBug({commit:t,dispatch:e,state:a},r){try{this.state.notes=[];let e=await L.get("bugs/"+r+"/notes");t("setComments",e.data)}catch(n){console.error(n)}},async deleteBug({commit:t,dispatch:e,state:a},r){try{await L.delete("bugs/"+r)}catch(n){console.error(n)}},async deleteComment({commit:t,dispatch:e,state:a},r){try{await L.delete("notes/"+r),e("getNotesByBugId",this.state.bugDetails.id)}catch(n){console.error(n)}},async editBug({commit:t,dispatch:e},a){try{let e=await L.put("bugs/"+a.bugId,a);t("setBugDetails",e.data)}catch(r){console.error(r)}},async closeBug({commit:t,dispatch:e},a){try{let e=await L.put("bugs/"+a.bugId,a);t("setBugDetails",e.data)}catch(r){console.error(r)}},async editNote({commit:t,dispatch:e},a){try{await L.put("notes/"+a.id,a);e("getNoteByBugId",a.bugId)}catch(r){console.error(r)}}}});const U="dev-xx4s5j83.us.auth0.com",W="https://kanbanapi.com",J="vWXFjj90Dgdb7TujqjE6sunUr6dQihYJ";r["a"].use(u["a"],{domain:U,clientId:J,audience:W,onRedirectCallback:t=>{D.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),new r["a"]({router:D,store:M,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var r=a("9c0c"),n=a.n(r);n.a},"9c0c":function(t,e,a){},acfd:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"}});