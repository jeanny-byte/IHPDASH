(function(){"use strict";var e={8735:function(e,s,n){var t=n(9242),r=n(3396);function o(e,s,n,t,o,a){const i=(0,r.up)("HelloWorld");return(0,r.wg)(),(0,r.j4)(i,{msg:"Welcome to Your Vue.js App"})}var a=n(7139);const i=(0,r._)("img",{class:"header-image",src:"IHP_PIC_LG.ico"},null,-1),l={class:"container"},u={class:"form"},d={class:"form-group"},c=(0,r._)("label",{for:"phoneNumber"},"Recipient's Phone Number:",-1),h={class:"form-group"},p=(0,r._)("label",{for:"senderId"},"Sender ID:",-1),f=["value"],m={class:"form-group"},g=(0,r._)("label",{for:"message"},"Message (max 160 characters):",-1),v={class:"form-group"},b={class:"campaign-history"},_=(0,r._)("h2",null,"Campaign History",-1),w=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"Sender ID"),(0,r._)("th",null,"Phone Number"),(0,r._)("th",null,"Message")])],-1);function y(e,s,n,o,y,I){const H=(0,r.up)("v-card");return(0,r.wg)(),(0,r.iD)(r.HY,null,[i,(0,r._)("div",l,[(0,r._)("div",u,[(0,r._)("div",d,[c,(0,r.wy)((0,r._)("input",{id:"phoneNumber","onUpdate:modelValue":s[0]||(s[0]=e=>y.phoneNumber=e),placeholder:"Enter Phone Number"},null,512),[[t.nr,y.phoneNumber]])]),(0,r._)("div",h,[p,(0,r.wy)((0,r._)("select",{id:"senderId","onUpdate:modelValue":s[1]||(s[1]=e=>y.senderId=e)},[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(y.senderIds,((e,s)=>((0,r.wg)(),(0,r.iD)("option",{key:s,value:e},(0,a.zw)(e),9,f)))),128))],512),[[t.bM,y.senderId]])]),(0,r._)("div",m,[g,(0,r.wy)((0,r._)("textarea",{id:"message","onUpdate:modelValue":s[2]||(s[2]=e=>y.message=e),placeholder:"Enter Message"},null,512),[[t.nr,y.message]])]),(0,r._)("div",v,[(0,r._)("button",{onClick:s[3]||(s[3]=(...e)=>I.sendMessage&&I.sendMessage(...e))},"Send")])]),(0,r._)("div",{class:(0,a.C_)(["toast",y.toastClass])},(0,a.zw)(y.toastMessage),3)]),(0,r.Wm)(H,null,{default:(0,r.w5)((()=>[(0,r._)("div",b,[_,(0,r._)("table",null,[w,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(y.campaignHistory,((e,s)=>((0,r.wg)(),(0,r.iD)("tr",{key:s},[(0,r._)("td",null,(0,a.zw)(e.senderId),1),(0,r._)("td",null,(0,a.zw)(e.phoneNumber),1),(0,r._)("td",null,(0,a.zw)(e.message),1)])))),128))])])])])),_:1})],64)}var I=n(4161),H={data(){return{phoneNumber:"",senderId:"",message:"",senderIds:["IHP24","GEC Shalom"],toastMessage:"",toastClass:"",campaignHistory:[]}},methods:{async sendMessage(){const e="Wdj7EExbzUdYPw4WAXb96jMcf",s=`https://apps.mnotify.net/smsapi?key=${e}&to=${this.phoneNumber}&msg=${encodeURIComponent(this.message)}&sender_id=${this.senderId}`;try{const e=await I.Z.get(s);200===e.status?(this.showToast("success","Message sent successfully"),this.addToHistory(this.message,this.senderId,this.phoneNumber)):this.showToast("failure","Message sending failed")}catch(n){this.showToast("failure","An error occurred while sending the message"),console.error(n)}},showToast(e,s){this.toastClass=e,this.toastMessage=s,setTimeout((()=>{this.toastClass="",this.toastMessage=""}),3e3)},addToHistory(e,s,n){this.campaignHistory.unshift({message:e,senderId:s,phoneNumber:n}),this.campaignHistory.length>20&&this.campaignHistory.pop()}}},M=n(89);const C=(0,M.Z)(H,[["render",y]]);var N=C,O={name:"App",components:{HelloWorld:N}};const j=(0,M.Z)(O,[["render",o]]);var k=j;(0,t.ri)(k).mount("#app")}},s={};function n(t){var r=s[t];if(void 0!==r)return r.exports;var o=s[t]={exports:{}};return e[t].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(s,t,r,o){if(!t){var a=1/0;for(d=0;d<e.length;d++){t=e[d][0],r=e[d][1],o=e[d][2];for(var i=!0,l=0;l<t.length;l++)(!1&o||a>=o)&&Object.keys(n.O).every((function(e){return n.O[e](t[l])}))?t.splice(l--,1):(i=!1,o<a&&(a=o));if(i){e.splice(d--,1);var u=r();void 0!==u&&(s=u)}}return s}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[t,r,o]}}(),function(){n.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(s,{a:s}),s}}(),function(){n.d=function(e,s){for(var t in s)n.o(s,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:s[t]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){var e={143:0};n.O.j=function(s){return 0===e[s]};var s=function(s,t){var r,o,a=t[0],i=t[1],l=t[2],u=0;if(a.some((function(s){return 0!==e[s]}))){for(r in i)n.o(i,r)&&(n.m[r]=i[r]);if(l)var d=l(n)}for(s&&s(t);u<a.length;u++)o=a[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},t=self["webpackChunkihpdash"]=self["webpackChunkihpdash"]||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))}();var t=n.O(void 0,[998],(function(){return n(8735)}));t=n.O(t)})();
//# sourceMappingURL=app.36ef98f6.js.map