(function(t){function e(e){for(var a,r,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var l=n[o];0!==s[l]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"0790":function(t,e,n){},"1df9":function(t,e,n){},"1e81":function(t,e,n){},"496b":function(t,e,n){"use strict";var a=n("1df9"),s=n.n(a);s.a},"53be":function(t,e,n){"use strict";var a=n("0790"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Header"),n("Banner"),n("Questions"),n("Footer")],1)},i=[],r=n("bc3a"),o=n.n(r),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[t._m(0),n("nav",[n("ul",[n("li",[n("a",{staticClass:"btn black_bg",attrs:{href:"https://nxte.se/boka-demo"},on:{click:t.clearRadioBtns}},[t._v("Boka demo")])])])])])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"img__container"},[a("img",{attrs:{src:n("f065"),alt:"nxt logo"}})])}],u=n("b85c"),d={name:"Header",data:function(){return{}},methods:{clearRadioBtns:function(){var t,e=document.querySelectorAll('input[type="radio"]'),n=Object(u["a"])(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.checked=!1}}catch(s){n.e(s)}finally{n.f()}}}},p=d,v=(n("496b"),n("2877")),f=Object(v["a"])(p,l,c,!1,null,"5d95f949",null),h=f.exports,m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},_=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Ta testet")])])}],b={name:"Banner"},k=b,g=(n("72ff"),Object(v["a"])(k,m,_,!1,null,"4f44113d",null)),y=g.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question__container"},[n("div",{staticClass:"step-row"},[n("div",{style:{width:t.progressBarWidth+"%"},attrs:{id:"progress"}}),n("div",{staticClass:"step-col"},[n("strong",[t._v(t._s(t.currentStep)+" / "+t._s(t.totalSteps)+" ")])])]),n("div",{staticClass:"questions"},[t._l(t.questions,(function(e,a){return n("form",{key:a,style:{left:t.calculatedStepPosition(a+1),visibility:t.currentStep==a+1?"visible":"hidden"},on:{submit:function(t){t.preventDefault()}}},[n("div",[n("h3",[t._v(t._s(e.question))])]),e.options?n("div",{staticClass:"question-container"},t._l(e.options,(function(s,i){return n("div",{key:i,staticClass:"question-option"},[n("div",{staticClass:"question-option-radio"},[n("label",{attrs:{for:"option-"+i+a}},[t._v(t._s(s))]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.answer,expression:"question.answer"}],attrs:{id:"option-"+i+a,type:"radio"},domProps:{value:s,checked:t._q(e.answer,s)},on:{change:function(n){return t.$set(e,"answer",s)}}})]),t.questionCondition(e,s)?n("div",{staticClass:"question-option-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.text,expression:"question.text"}],attrs:{type:"text",placeholder:"Vilket?"},domProps:{value:e.text},on:{input:function(n){n.target.composing||t.$set(e,"text",n.target.value)}}})]):t._e()])})),0):t._e(),n("div",{staticClass:"btn-box"},[t.currentStep>1?n("button",{staticClass:"btn black_bg",attrs:{type:"button"},on:{click:t.goToPreviousStep}},[t._v(" Tillbaka ")]):t._e(),t.currentStep<t.totalSteps?n("button",{class:["btn black_bg",{"disabled-input":!t.hasAnswer(e)}],attrs:{disabled:!t.hasAnswer(e),type:"button"},on:{click:function(e){return t.goToNextStep()}}},[t._v(" Nästa ")]):t._e()])])})),n("form",{style:{left:t.calculatedStepPosition(t.totalSteps),visibility:t.currentStep==t.totalSteps?"visible":"hidden"},attrs:{id:"form6"}},[n("Check"),t._m(0),n("div",{staticClass:"question-container"},[n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],style:t.invalidName&&t.invalid,attrs:{type:"text",placeholder:"Namn",minlength:"3"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),t.invalidName?n("p",{staticStyle:{color:"red"}},[t._v("Invalid name")]):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.company_name,expression:"user.company_name"}],attrs:{type:"text",placeholder:"Företagsnamn",minlength:"1"},domProps:{value:t.user.company_name},on:{input:function(e){e.target.composing||t.$set(t.user,"company_name",e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.phone,expression:"user.phone"}],style:t.invalidPhoneNum&&t.invalid,attrs:{type:"text",placeholder:"Telefon",minlength:"3"},domProps:{value:t.user.phone},on:{input:function(e){e.target.composing||t.$set(t.user,"phone",e.target.value)}}}),t.invalidPhoneNum?n("p",{staticStyle:{color:"red"}},[t._v(" Invalid phone number ")]):t._e(),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],style:t.invalidEmail&&t.invalid,attrs:{type:"text",placeholder:"E-mail"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),t.invalidEmail?n("p",{staticStyle:{color:"red"}},[t._v("Invalid email")]):t._e()])]),n("div",{staticClass:"btn-box"},[t.currentStep>1?n("button",{staticClass:"btn black_bg",attrs:{type:"button"},on:{click:t.goToPreviousStep}},[t._v(" Tillbaka ")]):t._e(),n("button",{class:["btn black_bg",{"disabled-input":t.disableSubmitBtn}],attrs:{type:"submit",disabled:t.disableSubmitBtn},on:{click:function(e){return e.preventDefault(),t.sendData(e)}}},[t._v(" Slutför ")])])],1)],2)])},B=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Kontakt uppgifter")])])}],S=(n("caad"),n("b0c0"),n("ac1f"),n("2532"),n("5319"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"check__container"},[n("div",[n("fa-icon",{staticClass:"check",attrs:{icon:"check-circle"}}),n("h2",[t._v("Bra!")])],1),n("h5",[t._v("NXT är för dig!")])])}),w=[],C={name:"Check"},E=C,N=(n("53be"),Object(v["a"])(E,S,w,!1,null,"13093989",null)),P=N.exports,j={name:"Questions",components:{Check:P},data:function(){return{currentStep:1,user:{name:null,email:null,phone:null,company_name:null},questions:[{question:"Har du en e-handel idag?",options:["Ja","Nej"],answer:null},{question:"Vilka kunder riktar du dig mot?",options:["B2B","B2C","B2B & B2C"],answer:null},{question:"Vilken bransch tillhör ditt företag? (Vallista eller liknande för ett gäng branscher + övrigt)",options:["E-handel","Serviceverksamheter och tjänster","Kultur, nöje och fritid","Butiksverksamhet","Fastighetsverksamhet","Kommunikation och marknadsföring","Jordbruk, skogsbruk och fiske","Energiförsörjning; miljöverksamhet","Tillverkning och utvinning","Byggverksamhet","Annat"],answer:null},{question:"Använder ni något affärssystem?",options:["Ja","Nej"],textConditions:["Ja"],answer:null},{question:"Vill ni rikta er mot befintliga eller nya kunder?",options:["Nya kunder","Befintliga kunder","Nya & Befintliga kunder"],answer:null}],invalidEmail:!1,invalidName:!1,invalidPhoneNum:!1,invalid:{border:"1px solid red"},disableInputText:!1,disableSubmitBtn:!1}},computed:{totalSteps:function(){return this.questions.length+1},progressBarWidth:function(){var t=100/this.totalSteps;return t*this.currentStep}},created:function(){o()("http://localhost/exaktaProjekt/nxt-vue/server/server.php")},mounted:function(){this.disableSubmit()},updated:function(){this.disableSubmit()},methods:{questionCondition:function(t,e){var n=t.textConditions||[];return n.includes(t.answer)&&t.answer==e},goToStep:function(t){t>=1&&t<=this.totalSteps&&(this.currentStep=t)},goToPreviousStep:function(){this.goToStep(this.currentStep-1)},goToNextStep:function(){this.goToStep(this.currentStep+1)},calculatedStepPosition:function(t){return t==this.currentStep?"50%":t<this.currentStep?"-100%":t>this.currentStep?"200%":void 0},hasAnswer:function(t){return null!==t.answer},disableSubmit:function(){var t=this.user.name,e=this.user.company_name,n=this.user.phone,a=this.user.email;null===t||""===t||t.length<3||null===e||""===e||e.length<3||null===n||""===n||n.length<3||null===a||""===a||a.length<3?this.disableSubmitBtn=!0:this.disableSubmitBtn=!1},sendData:function(){var t=this,e=this.user,n=/^([A-Z\d.-]+)@([A-Z\d-]+)\.([A-Z]{2,8})(\.[A-Z]{2,8})?$/i.test(e.email),a=/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/i.test(e.phone),s=/^([a-zA-Z ]){2,30}$/i.test(e.name);this.invalidEmail=!1,this.invalidName=!1,this.invalidPhoneNum=!1,n&&a&&s?o.a.post("http://localhost/exaktaProjekt/nxt-vue/server/server.php",{questions:this.questions,user:this.user}).then((function(e){"success"===e.data.response?t.$swal({icon:"success",title:"Tack!",text:"Dina uppgifter har blivit skickade. Vi kommer att kontakta dig inom kort.",confirmButtonText:"Fortsätt"}).then((function(){window.location.replace("https://nxte.se/")})):t.$swal({icon:"error",title:"Oops!",text:"Kunde inte skicka dina uppgifter, har du fyllt i alla fält?",type:"warning",confirmButtonText:"Försök igen",showCloseButton:!0})})).catch((function(e){console.log(e),t.$swal({icon:"error",title:"Något gick fel",text:"Servern är nere, försök igen senare",type:"warning",confirmButtonText:"Försök igen",showCloseButton:!0})})):(n||(this.invalidEmail=!0),s||(this.invalidName=!0),a||(this.invalidPhoneNum=!0))}}},q=j,T=(n("ac0e"),Object(v["a"])(q,x,B,!1,null,"5d960d4a",null)),$=T.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",[n("div",{staticClass:"footer__container"},[n("div",{staticClass:"box__container"},[n("div",{staticClass:"box1"},[n("h1",[t._v("NXT - Ett intelligentare system")]),n("p",{staticClass:"p"},[t._v("Utvecklat av Exakta Software - En del av Exakta Group")]),t._m(0),n("h2",[t._v("Besökadress")]),t._m(1),n("div",{staticClass:"btn__container"},[n("a",{staticClass:"btn white_bg",attrs:{href:"https://nxte.se/kontakt"},on:{click:t.clearRadioBtns}},[t._v("Kontakta oss")])])]),n("hr",{staticClass:"showHR"}),n("div",{staticClass:"box2"},[n("div",{staticClass:"left"},[n("a",{staticClass:"h2__style",attrs:{href:"https://nxte.se/e-handelslosningar"},on:{click:t.clearRadioBtns}},[t._v("E-handelslösningar")]),n("div",[n("a",{attrs:{href:"https://nxte.se/b2b"},on:{click:t.clearRadioBtns}},[t._v("B2B")]),n("a",{attrs:{href:"https://nxte.se/b2c"},on:{click:t.clearRadioBtns}},[t._v("B2C")]),n("a",{attrs:{href:"https://nxte.se/b2b-b2c"},on:{click:t.clearRadioBtns}},[t._v("B2B & B2C")]),n("a",{attrs:{href:"https://nxte.se/detta-ingar"},on:{click:t.clearRadioBtns}},[t._v("Detta ingår")])]),n("div",[n("a",{staticClass:"h2__style",attrs:{href:"https://nxte.se/kunder"},on:{click:t.clearRadioBtns}},[t._v("Kunder")])]),n("div",[n("a",{staticClass:"h2__style",attrs:{href:"https://nxte.se/kontakt"},on:{click:t.clearRadioBtns}},[t._v("Kontakt")]),n("a",{attrs:{href:"https://nxte.se/boka-demo"},on:{click:t.clearRadioBtns}},[t._v("Boka demo")])])]),n("div",{staticClass:"right"},[n("a",{staticClass:"h2__style",attrs:{href:"https://nxte.se/partners"},on:{click:t.clearRadioBtns}},[t._v("Partners")]),n("div",[n("a",{attrs:{href:"https://nxte.se/fraktsatt"},on:{click:t.clearRadioBtns}},[t._v("Fraktsätt")]),n("a",{attrs:{href:"https://nxte.se/forsaljningskanaler"},on:{click:t.clearRadioBtns}},[t._v("Försäljningskanaler")]),n("a",{attrs:{href:"https://nxte.se/betalsatt"},on:{click:t.clearRadioBtns}},[t._v("Betalsätt")]),n("a",{attrs:{href:"https://nxte.se/affarsystem"},on:{click:t.clearRadioBtns}},[t._v("Affärsystem")])]),n("a",{staticClass:"h2__style m-top",attrs:{href:"https://nxte.se/om-oss"},on:{click:t.clearRadioBtns}},[t._v("Om oss")])])])]),n("hr"),n("a",{staticClass:"copyright",attrs:{href:"https://www.exaktasoftware.se/"},on:{click:t.clearRadioBtns}},[t._v("@ Copyright 2019 Exakta Software - En del av Exakta Group")])])])},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"p"},[t._v(" Exakta ES Sweden AB "),n("br"),t._v(" 556782-2233 ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("Bäckhagsvägen 11")]),n("p",[t._v("281 33 Hässleholm")])])}],A={name:"Footer",data:function(){return{}},methods:{clearRadioBtns:function(){var t,e=document.querySelectorAll('input[type="radio"]'),n=Object(u["a"])(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;a.checked=!1}}catch(s){n.e(s)}finally{n.f()}}}},F=A,K=(n("bf6a"),Object(v["a"])(F,O,R,!1,null,"64b745ea",null)),D=K.exports,H={name:"App",components:{Header:h,Banner:y,Questions:$,Footer:D}},J=H,V=(n("034f"),Object(v["a"])(J,s,i,!1,null,null,null)),Z=V.exports,I=n("ecee"),M=n("c074"),Q=n("ad3d"),X=n("5886");a["a"].use(X["a"]),I["c"].add(M["a"]),a["a"].component("fa-icon",Q["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(Z)}}).$mount("#app")},"72ff":function(t,e,n){"use strict";var a=n("f4ea"),s=n.n(a);s.a},"85ec":function(t,e,n){},a33e:function(t,e,n){},ac0e:function(t,e,n){"use strict";var a=n("1e81"),s=n.n(a);s.a},bf6a:function(t,e,n){"use strict";var a=n("a33e"),s=n.n(a);s.a},f065:function(t,e,n){t.exports=n.p+"img/NXT_ny_logo_ingen_Payoff.a94f82eb.png"},f4ea:function(t,e,n){}});
//# sourceMappingURL=app.458e902c.js.map