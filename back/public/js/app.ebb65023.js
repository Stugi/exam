(function(e){function t(t){for(var r,o,i=t[0],a=t[1],u=t[2],d=0,b=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&b.push(s[o][0]),s[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(b.length)b.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==s[a]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},s={app:0},c=[];function o(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"5619126b"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=s[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=s[e]=[t,r]}));t.push(n[2]=r);var c,a=document.createElement("script");a.charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.src=o(e);var u=new Error;c=function(t){a.onerror=a.onload=null,clearTimeout(d);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",u.name="ChunkLoadError",u.type=r,u.request=c,n[1](u)}s[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:a})}),12e4);a.onerror=a.onload=c,document.head.appendChild(a)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var d=0;d<a.length;d++)t(a[d]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1600:function(e,t,n){},"2a2e":function(e,t,n){"use strict";n.r(t),n.d(t,"createTrn",(function(){return s}));var r=n("2909");n("a434"),n("b0c0"),n("4d90"),n("d3b7"),n("25f0");function s(e,t){var n=Object(r["a"])(e.questions),s=[];while(e.needQ!=s.length){var o=Math.floor(Math.random()*n.length);s.push(n.splice(o,1))}var i={name:e.name,descr:e.descr,datestart:c(new Date),idtrn:e._id,procent:e.procent,questions:s,user:t,state:{state:0,name:"Новый"}};return console.log(i),i}function c(e){return e.getDate()+"."+(e.getMonth()+1).toString().padStart(2,"0")+"."+e.getFullYear()}},"2d14":function(e,t,n){"use strict";n("8370")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),s={class:"flex-row"},c={id:"nav"},o=Object(r["f"])("All"),i=Object(r["f"])("New");function a(e,t){var n=Object(r["w"])("router-link"),a=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])("div",s,[Object(r["g"])("div",c,[Object(r["g"])(n,{to:"/"},{default:Object(r["D"])((function(){return[o]})),_:1}),Object(r["g"])(n,{to:"/createtrn"},{default:Object(r["D"])((function(){return[i]})),_:1})]),Object(r["g"])(a)])}n("8aaf");const u={};u.render=a;var d=u,l=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),b=(n("b0c0"),{class:"main"}),p=Object(r["g"])("h3",{class:"header"},"Все тесты",-1),f={class:"butonbar legend"},j={id:"main",class:".container flex-row"},O={class:"sidebar col-2"},h={key:0,class:"content"};function v(e,t,n,s,c,o){var i=Object(r["w"])("cart-trn");return Object(r["p"])(),Object(r["d"])("div",b,[p,Object(r["g"])("div",f,[0===this.state.value?(Object(r["p"])(),Object(r["d"])("button",{key:0,onClick:t[1]||(t[1]=Object(r["F"])((function(){return o.addQuestion&&o.addQuestion.apply(o,arguments)}),["prevent"]))},"Новый тест")):Object(r["e"])("",!0)]),Object(r["g"])("div",j,[Object(r["g"])("div",O,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(c.alltrn,(function(e){return Object(r["p"])(),Object(r["d"])("div",{key:e._id,name:"item",onClick:function(t){return o.setCurrentRow(e._id)},class:{selected:e._id===c.currentIdTrn}},[Object(r["g"])("p",null,Object(r["y"])(e.name?e.name:"~без названия~"),1)],10,["onClick"])})),128))]),c.loading?(Object(r["p"])(),Object(r["d"])("div",h,[Object(r["g"])(i,{inittrn:o.currentTrn,initstate:c.state},null,8,["inittrn","initstate"])])):Object(r["e"])("",!0)])])}n("7db0");var m=Object(r["G"])("data-v-1ff3149a");Object(r["s"])("data-v-1ff3149a");var g={class:"cartTrn"},y={class:""},w={class:"stikly"},k={name:"facet",class:"butonbar menu-1 "},q={id:"error-message",class:"hide"},T={id:"to-user",class:"hide"},C={class:"data"},E={action:""},U=Object(r["g"])("label",{for:"name"},"Название",-1),Q=Object(r["g"])("label",{for:"descr"},"Описание",-1),D={class:"row"},P={class:""},_=Object(r["g"])("label",{for:"usercr",class:""},"Создал",-1),x={class:""},S=Object(r["g"])("label",{for:"datemod",class:""},"Изменено",-1),I=Object(r["g"])("div",{class:"spacer"},null,-1),V={class:"row"},B={class:""},N=Object(r["g"])("label",{for:"procent",class:""},"Процент",-1),A={class:""},M=Object(r["g"])("label",{for:"needQ",class:""},"Количество вопросов",-1),F=Object(r["g"])("label",{for:"countQ",class:""},"из",-1),L={class:"stikly-2"},J={ref:"questions"},$={name:"facet",class:"butonbar menu-1"},z={class:"data"},R={name:"questions",action:""},G={for:""},Y={name:"facet",class:"butonbar menu-2 butonbar-gray"},X=Object(r["g"])("div",{class:"spacer"},null,-1),H={class:"data"},K={class:""},W={for:""},Z=Object(r["g"])("option",{value:"1"},"Верный",-1),ee=Object(r["g"])("option",{value:"0"},"Неверный",-1),te={key:0,class:"butonbar butonbar-gray butonbar-padding close"},ne=Object(r["g"])("div",{class:"spacer"},null,-1),re=Object(r["g"])("div",{class:"separator"},null,-1),se=Object(r["g"])("div",{class:"spacer"},null,-1);Object(r["q"])();var ce=m((function(e,t,n,s,c,o){var i=Object(r["w"])("popup-to-user");return Object(r["p"])(),Object(r["d"])("div",g,[Object(r["g"])("div",y,[Object(r["g"])("div",w,[Object(r["g"])("h3",null,"Тест "+Object(r["y"])(c.trn.name),1),Object(r["g"])("div",k,[0===c.state.value?(Object(r["p"])(),Object(r["d"])("button",{key:0,onClick:t[1]||(t[1]=Object(r["F"])((function(){return o.edit&&o.edit.apply(o,arguments)}),["prevent"]))},"Редактировать")):Object(r["e"])("",!0),1===c.state.value?(Object(r["p"])(),Object(r["d"])("button",{key:1,onClick:t[2]||(t[2]=function(){return o.save&&o.save.apply(o,arguments)})},"Сохранить")):Object(r["e"])("",!0),0===c.state.value?(Object(r["p"])(),Object(r["d"])("button",{key:2,onClick:t[3]||(t[3]=function(){return o.toUser&&o.toUser.apply(o,arguments)})},"Назначить")):Object(r["e"])("",!0)])]),Object(r["g"])("div",q,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(c.errors,(function(e){return Object(r["p"])(),Object(r["d"])("div",{class:"",key:e},[Object(r["g"])("p",null,Object(r["y"])(e.error),1)])})),128))]),Object(r["g"])("div",T,[Object(r["g"])(i)]),Object(r["g"])("div",C,[Object(r["g"])("form",E,[U,Object(r["E"])(Object(r["g"])("textarea",{ref:"name",name:"name",rows:"3",cols:"3","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.trn.name=e}),placeholder:"Название теста",disabled:o.isEdit},null,8,["disabled"]),[[r["B"],c.trn.name,void 0,{trim:!0}]]),Q,Object(r["E"])(Object(r["g"])("textarea",{ref:"descr",name:"descr",rows:"3",cols:"80","onUpdate:modelValue":t[5]||(t[5]=function(e){return c.trn.descr=e}),placeholder:"Описание теста",disabled:o.isEdit},null,8,["disabled"]),[[r["B"],c.trn.descr,void 0,{trim:!0}]]),Object(r["g"])("div",D,[Object(r["g"])("div",P,[_,Object(r["E"])(Object(r["g"])("input",{type:"text",name:"usercr",disabled:"","onUpdate:modelValue":t[6]||(t[6]=function(e){return c.trn.user=e})},null,512),[[r["B"],c.trn.user]])]),Object(r["g"])("div",x,[S,Object(r["E"])(Object(r["g"])("input",{type:"text",name:"datemod",disabled:"","onUpdate:modelValue":t[7]||(t[7]=function(e){return c.trn.datemod=e})},null,512),[[r["B"],c.trn.datemod]])])]),I,Object(r["g"])("div",V,[Object(r["g"])("div",B,[N,Object(r["E"])(Object(r["g"])("input",{ref:"procent",type:"number",name:"procent","onUpdate:modelValue":t[8]||(t[8]=function(e){return c.trn.procent=e}),size:"2",disabled:o.isEdit},null,8,["disabled"]),[[r["B"],c.trn.procent,void 0,{number:!0}]])]),Object(r["g"])("div",A,[M,Object(r["E"])(Object(r["g"])("input",{ref:"needQ",type:"number",name:"needQ","onUpdate:modelValue":t[9]||(t[9]=function(e){return c.trn.needQ=e}),size:"2",disabled:o.isEdit},null,8,["disabled"]),[[r["B"],c.trn.needQ,void 0,{number:!0}]]),F,Object(r["g"])("input",{type:"text",name:"countQ",value:c.trn.questions.length,disabled:"",size:"3"},null,8,["value"])])])])]),Object(r["g"])("div",L,[Object(r["g"])("h4",J,"Вопросы",512),Object(r["g"])("div",$,[o.isEdit?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("button",{key:0,onClick:t[10]||(t[10]=Object(r["F"])((function(){return o.addQuestion&&o.addQuestion.apply(o,arguments)}),["prevent"]))},"Добавить вопрос"))])]),Object(r["g"])("div",z,[Object(r["g"])("form",R,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(c.trn.questions,(function(e,t){return Object(r["p"])(),Object(r["d"])("div",{key:e.nomerQ,class:"relative"},[Object(r["g"])("label",G,"Вопрос "+Object(r["y"])(e.nomerQ),1),Object(r["g"])("div",Y,[o.isEdit?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("button",{key:0,onClick:Object(r["F"])((function(t){return o.addAnswer(e)}),["prevent"])},"Добавить вариант ответа",8,["onClick"])),o.isEdit?Object(r["e"])("",!0):(Object(r["p"])(),Object(r["d"])("button",{key:1,onClick:Object(r["F"])((function(e){return o.removeQuestion(t)}),["prevent"]),class:"bolder"},"X",8,["onClick"]))]),X,Object(r["E"])(Object(r["g"])("textarea",{ref:"question"+t,name:"question",rows:"3",placeholder:"Текст вопроса","onUpdate:modelValue":function(t){return e.question=t},disabled:o.isEdit},null,8,["onUpdate:modelValue","disabled"]),[[r["B"],e.question,void 0,{trim:!0}]]),Object(r["g"])("div",H,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(e.answers,(function(n,s){return Object(r["p"])(),Object(r["d"])("div",{key:n.nomer,class:"relative"},[Object(r["g"])("div",K,[Object(r["g"])("label",W,"Ответ "+Object(r["y"])(n.nomer),1),Object(r["E"])(Object(r["g"])("select",{class:"",name:"","onUpdate:modelValue":function(e){return n.right=e},disabled:o.isEdit},[Z,ee],8,["onUpdate:modelValue","disabled"]),[[r["A"],n.right]]),!o.isEdit&&e.answers.length>2?(Object(r["p"])(),Object(r["d"])("span",te,[Object(r["g"])("button",{onClick:function(e){return o.removeAnswer(t,s)},type:"button",name:"button",class:"bolder"},"x",8,["onClick"])])):Object(r["e"])("",!0)]),Object(r["E"])(Object(r["g"])("textarea",{ref:"answer"+t+"_"+s,name:"answer",rows:"3",placeholder:"Текст ответа","onUpdate:modelValue":function(e){return n.answer=e},disabled:o.isEdit},null,8,["onUpdate:modelValue","disabled"]),[[r["B"],n.answer,void 0,{trim:!0}]])])})),128))]),ne,re,se])})),128))])])])])})),oe=(n("a9e3"),n("8ba4"),n("a434"),n("d81d"),Object(r["G"])("data-v-12e81056"));Object(r["s"])("data-v-12e81056");var ie={key:0},ae={class:"popup"},ue={class:"selectusers"},de={class:"butonbar"},le={class:"butonbar close-icon"};Object(r["q"])();var be=oe((function(e,t,n,s,c,o){return c.loading?(Object(r["p"])(),Object(r["d"])("div",ie,[Object(r["g"])("div",ae,[Object(r["g"])("div",ue,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(c.users,(function(e){return Object(r["p"])(),Object(r["d"])("div",{key:e.cn,onClick:function(t){return o.selectedUser(e)},class:{selected:e.selected}},Object(r["y"])(e.displayname),11,["onClick"])})),128))]),Object(r["g"])("div",de,[Object(r["g"])("button",{type:"button",name:"button",onClick:t[1]||(t[1]=function(){return o.goToUser&&o.goToUser.apply(o,arguments)})},"Назначить")]),Object(r["g"])("div",le,[Object(r["g"])("button",{type:"button",name:"",onClick:t[2]||(t[2]=function(){return o.closePopup&&o.closePopup.apply(o,arguments)})},"x")])])])):Object(r["e"])("",!0)})),pe=(n("4de4"),n("159b"),{name:"PopupToUser",data:function(){return{users:[],loading:!1}},computed:{selectedusers:function(){return this.users.filter((function(e){return e.selected}))}},methods:{selectedUser:function(e){e.selected=!e.selected},goToUser:function(){var e=this.selectedusers;e.length>0&&(this.$parent.createTrn(e),this.closePopup(),this.users.forEach((function(e){e.selected=!1})))},closePopup:function(){this.$parent.closePopup()}},created:function(){var e=this;fetch("/api/users").then((function(e){return e.json()})).then((function(t){e.users=t,e.loading=!0})).catch((function(e){console.log(e)}))}});n("d11c");pe.render=be,pe.__scopeId="data-v-12e81056";var fe=pe,je=n("2a2e"),Oe=je.createTrn,he={name:"cartTrn",props:{inittrn:Object,initstate:Object},components:{"popup-to-user":fe},data:function(){return{trn:this.inittrn,state:this.initstate,errors:null}},watch:{inittrn:function(e){this.trn=e},initstate:function(e){this.state=e}},methods:{addQuestion:function(){var e=this.trn.questions.length+1;this.trn.questions.push({nomerQ:e,question:"",answers:[{answer:"",right:0,nomer:1},{answer:"",right:1,nomer:2}]})},addAnswer:function(e){var t=e.answers.length+1;e.answers.push({answer:"",right:0,nomer:t})},edit:function(){this.state.value=1},save:function(){if(this.validateData())this.$parent.updateTrn();else{var e=this.$refs[this.errors[0].ref];e.focus();var t=document.getElementById("error-message");t.classList.remove("hide"),setTimeout((function(){t.classList.add("hide")}),2e3)}},toUser:function(){this.openPopup()},validateData:function(){this.errors=[],this.trn.name||this.errors.push({ref:"name",error:"Заполните название теста"}),this.trn.descr||this.errors.push({ref:"descr",error:"Заполните описантие теста"});var e=Number(this.trn.procent);(e<=0||e>100||!Number.isInteger(e))&&this.errors.push({ref:"procent",error:"Процент прохождения должен быть целым числом в промежутке от 0 до 100"});var t=Number(this.trn.needQ);if(this.trn.questions.length<t&&this.errors.push({ref:"needQ",error:"Количество выбираемых вопросов не должно превышать общее количество вопросов"}),Number.isInteger(t)||this.errors.push({ref:"needQ",error:"Введите количество выбираемых вопросов"}),t<=0&&this.errors.push({ref:"needQ",error:"Количество выбираемых вопросов не должно быть меньше или равным 0"}),this.trn.questions&&this.trn.questions.length)for(var n=0,r=this.trn.questions;n<r.length;n++)if(r[n].question&&""!==r[n].question||this.errors.push({ref:"question"+n,error:"Введите текст вопроса"}),r[n].answers)for(var s=0,c=r[n].answers;s<c.length;s++)c[s].answer&&""!==!c[s].answer||this.errors.push({ref:"answer"+n+"_"+s,error:"Введите текст ответа"});else this.errors.push({ref:"question"+n,error:"Нужен хотя бы один вариант ответа"});else this.errors.push({ref:"questions",error:"В тесте должен быть хотя бы 1 вопрос"});return!this.errors.length},removeAnswer:function(e,t){this.trn.questions[e].answers.splice(t,1)},removeQuestion:function(e){this.trn.questions.splice(e,1)},closePopup:function(){var e=document.getElementById("to-user");e.classList.add("hide")},openPopup:function(){var e=document.getElementById("to-user");e.classList.remove("hide")},createTrn:function(e){var t=this,n=e.map((function(e){return Oe(t.trn,e)}));this.$parent.addTrnUser(n)}},computed:{isEdit:function(){return 1!=this.state.value}}};n("2d14");he.render=ce,he.__scopeId="data-v-1ff3149a";var ve=he;n("4d90"),n("25f0");function me(e){return e.getDate()+"."+(e.getMonth()+1).toString().padStart(2,"0")+"."+e.getFullYear()}var ge={components:{"cart-trn":ve},data:function(){return{alltrn:[{id:1,name:"test1",descr:"Description",questions:[]},{id:2,name:"test2",descr:"Description",questions:[]},{id:3,name:"test3",descr:"Description",questions:[]},{id:10,name:"test4",descr:"Description",questions:[]},{id:20,name:"test5",descr:"Description",questions:[]},{id:30,name:"test3",descr:"Description",questions:[]},{id:40,name:"test1",descr:"Description",questions:[]},{id:21,name:"test2",descr:"Description",questions:[]},{id:31,name:"test3",descr:"Description",questions:[]},{id:11,name:"test1",descr:"Description",questions:[]},{id:22,name:"test2",descr:"Description",questions:[]},{id:32,name:"test100",descr:"Description",questions:[],datemod:(new Date).getTime()}],currentIdTrn:1,state:{value:0},blockCreate:!0,loading:!1}},computed:{currentTrn:function(){var e=this;return this.alltrn.find((function(t){return t._id===e.currentIdTrn}))}},methods:{setCurrentRow:function(e){1!==this.state.value&&(this.currentIdTrn=e)},addQuestion:function(){var e=this;1!==this.state.value&&(this.blockCreate=!0,fetch("/api/createtrn",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({dataclient:{datemod:me(new Date)}})}).then((function(e){return e.json()})).then((function(t){e.alltrn.unshift(t),e.setCurrentRow(t._id),e.state.value=1})).catch((function(t){console.error(t),e.blockCreate=!1})))},updateTrn:function(){var e=this;this.currentTrn.datemod=me(new Date),fetch("/api/updatetrn",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({dataclient:this.currentTrn})}).then((function(e){return e.json()})).then((function(t){console.log(t),e.state.value=0})).catch((function(e){console.error(e)}))},addTrnUser:function(e){fetch("/api/trnuser",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({trns:e})}).then((function(e){return e.json()})).then((function(e){console.log(e)})).catch((function(e){console.error(e)}))}},created:function(){var e=this;fetch("/api/trns").then((function(e){return e.json()})).then((function(t){e.alltrn=t,e.currentIdTrn=t[0]._id,e.loading=!0})).catch((function(e){console.log(e)}))}};n("c0a6");ge.render=v;var ye=ge,we=[{path:"/",name:"All",component:ye},{path:"/createtrn",name:"New",component:function(){return n.e("about").then(n.bind(null,"67bf"))}}],ke=Object(l["a"])({history:Object(l["b"])("/"),routes:we}),qe=ke,Te=n("5502"),Ce=Object(Te["a"])({state:{},mutations:{},actions:{},modules:{}});n("bbae");Object(r["c"])(d).use(Ce).use(qe).mount("#app")},8370:function(e,t,n){},"8aaf":function(e,t,n){"use strict";n("c732")},bbae:function(e,t,n){},c0a6:function(e,t,n){"use strict";n("1600")},c732:function(e,t,n){},d11c:function(e,t,n){"use strict";n("fa60")},fa60:function(e,t,n){}});
//# sourceMappingURL=app.ebb65023.js.map