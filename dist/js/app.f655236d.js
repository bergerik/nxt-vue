(function(e){function s(s){for(var a,i,o=s[0],l=s[1],c=s[2],v=0,u=[];v<o.length;v++)i=o[v],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&u.push(n[i][0]),n[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(s);while(u.length)u.shift()();return r.push.apply(r,c||[]),t()}function t(){for(var e,s=0;s<r.length;s++){for(var t=r[s],a=!0,o=1;o<t.length;o++){var l=t[o];0!==n[l]&&(a=!1)}a&&(r.splice(s--,1),e=i(i.s=t[0]))}return e}var a={},n={app:0},r=[];function i(s){if(a[s])return a[s].exports;var t=a[s]={i:s,l:!1,exports:{}};return e[s].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=a,i.d=function(e,s,t){i.o(e,s)||Object.defineProperty(e,s,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,s){if(1&s&&(e=i(e)),8&s)return e;if(4&s&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&s&&"string"!=typeof e)for(var a in e)i.d(t,a,function(s){return e[s]}.bind(null,a));return t},i.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(s,"a",s),s},i.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=s,o=o.slice();for(var c=0;c<o.length;c++)s(o[c]);var d=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,s,t){e.exports=t("56d7")},"0332":function(e,s,t){"use strict";var a=t("a51f"),n=t.n(a);n.a},"034f":function(e,s,t){"use strict";var a=t("85ec"),n=t.n(a);n.a},"1df9":function(e,s,t){},3886:function(e,s,t){"use strict";var a=t("8f8e"),n=t.n(a);n.a},"496b":function(e,s,t){"use strict";var a=t("1df9"),n=t.n(a);n.a},"56d7":function(e,s,t){"use strict";t.r(s);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("2b0e"),n=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("Header"),t("Banner"),t("Questions"),t("Footer")],1)},r=[],i=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("header",[e._m(0),t("nav",[t("ul",[t("li",[t("a",{staticClass:"btn black_bg",attrs:{href:"https://nxte.se/boka-demo"},on:{click:e.clearRadioBtns}},[e._v("Boka demo")])])])])])},o=[function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("div",{staticClass:"img__container"},[a("img",{attrs:{src:t("f065"),alt:"nxt logo"}})])}],l=t("b85c"),c={name:"Header",data:function(){return{}},methods:{clearRadioBtns:function(){var e,s=document.querySelectorAll('input[type="radio"]'),t=Object(l["a"])(s);try{for(t.s();!(e=t.n()).done;){var a=e.value;a.checked=!1}}catch(n){t.e(n)}finally{t.f()}}}},d=c,v=(t("496b"),t("2877")),u=Object(v["a"])(d,i,o,!1,null,"5d95f949",null),m=u.exports,f=function(){var e=this,s=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("h1",[e._v("Ta testet")])])}],h={name:"Banner"},p=h,b=(t("7517"),Object(v["a"])(p,f,_,!1,null,"bc63f29c",null)),w=b.exports,k=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"question__container"},[t("div",{staticClass:"step-row"},[t("div",{style:{width:e.progress},attrs:{id:"progress"}}),t("div",{staticClass:"step-col"},[t("strong",[e._v(e._s(e.step))])])]),t("div",{staticClass:"questions"},[t("form",{style:{left:e.form1,visibility:e.showForm1},attrs:{id:"form1"}},[t("div",[t("h3",[e._v(e._s(e.answers[0].a))])]),t("div",{staticClass:"answer__container"},[t("div",[t("label",{attrs:{for:"ja"}},[e._v("Ja")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[0].a_svar,expression:"answers[0].a_svar"}],attrs:{id:"ja",type:"radio",value:"ja"},domProps:{checked:e._q(e.answers[0].a_svar,"ja")},on:{change:function(s){return e.$set(e.answers[0],"a_svar","ja")}}})]),t("div",[t("label",{attrs:{for:"nej"}},[e._v("Nej")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[0].a_svar,expression:"answers[0].a_svar"}],attrs:{id:"nej",type:"radio",value:"nej"},domProps:{checked:e._q(e.answers[0].a_svar,"nej")},on:{change:function(s){return e.$set(e.answers[0],"a_svar","nej")}}})])]),t("div",{staticClass:"btn-box"},[t("button",{staticClass:"btn black_bg",style:null===e.answers[0].a_svar&&e.disabled,attrs:{disabled:null===e.answers[0].a_svar,type:"button"},on:{click:function(s){e.form1="-1000px",e.form2="50%",e.progress="33.7%",e.showForm1="hidden",e.showForm2="visible"}}},[e._v(" Nästa ")])])]),t("form",{style:{left:e.form2,visibility:e.showForm2},attrs:{id:"form2"}},[t("h3",[e._v(e._s(e.answers[1].b))]),t("div",{staticClass:"answer__container"},[t("div",[t("label",{attrs:{for:"B2B"}},[e._v("B2B")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[1].b_svar,expression:"answers[1].b_svar"}],attrs:{id:"B2B",type:"radio",value:"B2B"},domProps:{checked:e._q(e.answers[1].b_svar,"B2B")},on:{change:function(s){return e.$set(e.answers[1],"b_svar","B2B")}}})]),t("div",[t("label",{attrs:{for:"B2C"}},[e._v("B2C")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[1].b_svar,expression:"answers[1].b_svar"}],attrs:{id:"B2C",type:"radio",value:"B2C"},domProps:{checked:e._q(e.answers[1].b_svar,"B2C")},on:{change:function(s){return e.$set(e.answers[1],"b_svar","B2C")}}})]),t("div",[t("label",{attrs:{for:"B2B & B2C"}},[e._v("B2B & B2C")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[1].b_svar,expression:"answers[1].b_svar"}],attrs:{id:"B2B & B2C",type:"radio",value:"B2B & B2C"},domProps:{checked:e._q(e.answers[1].b_svar,"B2B & B2C")},on:{change:function(s){return e.$set(e.answers[1],"b_svar","B2B & B2C")}}})])]),t("div",{staticClass:"btn-box"},[t("button",{staticClass:"btn black_bg",attrs:{id:"back1",type:"button"},on:{click:function(s){e.form1="50%",e.form2="1100px",e.progress="16.7%",e.showForm1="visible",e.showForm2="hidden"}}},[e._v(" Tillbaka ")]),t("button",{staticClass:"btn black_bg",style:null===e.answers[1].b_svar&&e.disabled,attrs:{id:"next2",type:"button",disabled:null===e.answers[1].b_svar},on:{click:function(s){e.form2="-1000px",e.form3="50%",e.progress="49.7%",e.showForm2="hidden",e.showForm3="visible"}}},[e._v(" Nästa ")])])]),t("form",{style:{left:e.form3,visibility:e.showForm3},attrs:{id:"form3"}},[t("h3",[e._v(e._s(e.answers[2].c))]),t("div",{staticClass:"answer__container"},[t("div",[t("label",{attrs:{for:"1"}},[e._v("E-handel")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[2].c_svar,expression:"answers[2].c_svar"}],attrs:{id:"1",type:"radio",value:"E-handel"},domProps:{checked:e._q(e.answers[2].c_svar,"E-handel")},on:{change:function(s){return e.$set(e.answers[2],"c_svar","E-handel")}}})]),t("div",[t("label",{attrs:{for:"2"}},[e._v("Serviceverksamheter och tjänster")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[2].c_svar,expression:"answers[2].c_svar"}],attrs:{id:"2",type:"radio",value:"Serviceverksamheter och tjänster"},domProps:{checked:e._q(e.answers[2].c_svar,"Serviceverksamheter och tjänster")},on:{change:function(s){return e.$set(e.answers[2],"c_svar","Serviceverksamheter och tjänster")}}})]),t("div",[t("label",{attrs:{for:"3"}},[e._v("Kultur, nöje och fritid")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[2].c_svar,expression:"answers[2].c_svar"}],attrs:{id:"3",type:"radio",value:"Kultur, nöje och fritid"},domProps:{checked:e._q(e.answers[2].c_svar,"Kultur, nöje och fritid")},on:{change:function(s){return e.$set(e.answers[2],"c_svar","Kultur, nöje och fritid")}}})]),t("div",[t("label",{attrs:{for:"4"}},[e._v("Butiksverksamhet")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[2].c_svar,expression:"answers[2].c_svar"}],attrs:{id:"4",type:"radio",value:"Butiksverksamhet"},domProps:{checked:e._q(e.answers[2].c_svar,"Butiksverksamhet")},on:{change:function(s){return e.$set(e.answers[2],"c_svar","Butiksverksamhet")}}})]),t("div",[t("label",{attrs:{for:"5"}},[e._v("Fastighetsverksamhet")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[2].c_svar,expression:"answers[2].c_svar"}],attrs:{id:"5",type:"radio",value:"Fastighetsverksamhet"},domProps:{checked:e._q(e.answers[2].c_svar,"Fastighetsverksamhet")},on:{change:function(s){return e.$set(e.answers[2],"c_svar","Fastighetsverksamhet")}}})]),t("div",[t("label",{attrs:{for:"6"}},[e._v("Kommunikation och marknadsföring")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[2].c_svar,expression:"answers[2].c_svar"}],attrs:{id:"6",type:"radio",value:"Kommunikation och marknadsföring"},domProps:{checked:e._q(e.answers[2].c_svar,"Kommunikation och marknadsföring")},on:{change:function(s){return e.$set(e.answers[2],"c_svar","Kommunikation och marknadsföring")}}})]),t("div",[t("label",{attrs:{for:"7"}},[e._v("Jordbruk, skogsbruk och fiske")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[2].c_svar,expression:"answers[2].c_svar"}],attrs:{id:"7",type:"radio",value:"Jordbruk, skogsbruk och fiske"},domProps:{checked:e._q(e.answers[2].c_svar,"Jordbruk, skogsbruk och fiske")},on:{change:function(s){return e.$set(e.answers[2],"c_svar","Jordbruk, skogsbruk och fiske")}}})]),t("div",[t("label",{attrs:{for:"8"}},[e._v("Energiförsörjning; miljöverksamhet")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[2].c_svar,expression:"answers[2].c_svar"}],attrs:{id:"8",type:"radio",value:"Energiförsörjning; miljöverksamhet"},domProps:{checked:e._q(e.answers[2].c_svar,"Energiförsörjning; miljöverksamhet")},on:{change:function(s){return e.$set(e.answers[2],"c_svar","Energiförsörjning; miljöverksamhet")}}})]),t("div",[t("label",{attrs:{for:"9"}},[e._v("Tillverkning och utvinning")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[2].c_svar,expression:"answers[2].c_svar"}],attrs:{id:"9",type:"radio",value:"Tillverkning och utvinning"},domProps:{checked:e._q(e.answers[2].c_svar,"Tillverkning och utvinning")},on:{change:function(s){return e.$set(e.answers[2],"c_svar","Tillverkning och utvinning")}}})]),t("div",[t("label",{attrs:{for:"10"}},[e._v("Byggverksamhet")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[2].c_svar,expression:"answers[2].c_svar"}],attrs:{id:"10",type:"radio",value:"Byggverksamhet"},domProps:{checked:e._q(e.answers[2].c_svar,"Byggverksamhet")},on:{change:function(s){return e.$set(e.answers[2],"c_svar","Byggverksamhet")}}})]),t("div",[t("label",{attrs:{for:"11"}},[e._v("Annat")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[2].c_svar,expression:"answers[2].c_svar"}],attrs:{id:"11",type:"radio",value:"Annat"},domProps:{checked:e._q(e.answers[2].c_svar,"Annat")},on:{change:function(s){return e.$set(e.answers[2],"c_svar","Annat")}}})])]),t("div",{staticClass:"btn-box"},[t("button",{staticClass:"btn black_bg",attrs:{id:"back2",type:"button"},on:{click:function(s){e.form2="50%",e.form3="1100px",e.progress="33.7%",e.showForm2="visible",e.showForm3="hidden"}}},[e._v(" Tillbaka ")]),t("button",{staticClass:"btn black_bg",style:null===e.answers[2].c_svar&&e.disabled,attrs:{id:"next3",type:"button",disabled:null===e.answers[2].c_svar},on:{click:function(s){e.form3="-1000px",e.form4="50%",e.progress="66.7%",e.showForm3="hidden",e.showForm4="visible"}}},[e._v(" Nästa ")])])]),t("form",{style:{left:e.form4,visibility:e.showForm4},attrs:{id:"form4"},on:{submit:function(e){e.preventDefault()}}},[t("h3",[e._v(e._s(e.answers[3].d))]),t("div",{staticClass:"answer__container"},[t("div",{staticClass:"inputText__container"},[t("div",{staticClass:"step4__ja"},[t("label",{attrs:{for:"jaa"}},[e._v("Ja")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[3].d_svar,expression:"answers[3].d_svar"}],attrs:{id:"jaa",type:"radio",value:"ja"},domProps:{checked:e._q(e.answers[3].d_svar,"ja")},on:{change:function(s){return e.$set(e.answers[3],"d_svar","ja")}}})]),t("div",{staticClass:"step4__input",style:null===e.answers[3].d_svar||"nej"===e.answers[3].d_svar?{display:"none"}:{display:"block"}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[3].d_text,expression:"answers[3].d_text"}],attrs:{type:"text",placeholder:"Vilket?"},domProps:{value:e.answers[3].d_text},on:{input:function(s){s.target.composing||e.$set(e.answers[3],"d_text",s.target.value)}}})])]),t("div",{staticClass:"step4__nej"},[t("label",{attrs:{for:"neej"}},[e._v("Nej")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[3].d_svar,expression:"answers[3].d_svar"}],attrs:{id:"neej",type:"radio",value:"nej"},domProps:{checked:e._q(e.answers[3].d_svar,"nej")},on:{change:function(s){return e.$set(e.answers[3],"d_svar","nej")}}})])]),t("div",{staticClass:"btn-box"},[t("button",{staticClass:"btn black_bg",attrs:{id:"back3",type:"button"},on:{click:function(s){e.form3="50%",e.form4="1100px",e.progress="49.7%",e.showForm3="visible",e.showForm4="hidden"}}},[e._v(" Tillbaka ")]),t("button",{staticClass:"btn black_bg",style:null===e.answers[3].d_svar&&e.disabled,attrs:{id:"next4",type:"button",disabled:null===e.answers[3].d_svar},on:{click:function(s){e.form4="-1000px",e.form5="50%",e.progress="83.7%",e.showForm4="hidden",e.showForm5="visible","nej"===e.answers[3].d_svar&&(e.answers[3].d_text="")}}},[e._v(" Nästa ")])])]),t("form",{style:{left:e.form5,visibility:e.showForm5},attrs:{id:"form5"}},[t("h3",[e._v(e._s(e.answers[4].e))]),t("div",{staticClass:"answer__container"},[t("div",[t("label",{attrs:{for:"nya"}},[e._v("Nya kunder")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[4].e_svar,expression:"answers[4].e_svar"}],attrs:{id:"nya",type:"radio",value:"Nya kunder"},domProps:{checked:e._q(e.answers[4].e_svar,"Nya kunder")},on:{change:function(s){return e.$set(e.answers[4],"e_svar","Nya kunder")}}})]),t("div",[t("label",{attrs:{for:"befintliga"}},[e._v("Befintliga kunder")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[4].e_svar,expression:"answers[4].e_svar"}],attrs:{id:"befintliga",type:"radio",value:"Befintliga kunder"},domProps:{checked:e._q(e.answers[4].e_svar,"Befintliga kunder")},on:{change:function(s){return e.$set(e.answers[4],"e_svar","Befintliga kunder")}}})]),t("div",[t("label",{attrs:{for:"nya & befintliga"}},[e._v("Nya & Befintliga kunder")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[4].e_svar,expression:"answers[4].e_svar"}],attrs:{id:"nya & befintliga",type:"radio",value:"Nya & Befintliga"},domProps:{checked:e._q(e.answers[4].e_svar,"Nya & Befintliga")},on:{change:function(s){return e.$set(e.answers[4],"e_svar","Nya & Befintliga")}}})])]),t("div",{staticClass:"btn-box"},[t("button",{staticClass:"btn black_bg",attrs:{id:"back4",type:"button"},on:{click:function(s){e.form4="50%",e.form5="1100px",e.progress="66.7%",e.showForm4="visible",e.showForm5="hidden"}}},[e._v(" Tillbaka ")]),t("button",{staticClass:"btn black_bg",style:null===e.answers[4].e_svar&&e.disabled,attrs:{id:"next5",type:"button",disabled:null===e.answers[4].e_svar},on:{click:function(s){e.form5="-1000px",e.form6="50%",e.progress="100.7%",e.showForm5="hidden",e.showForm6="visible"}}},[e._v(" Nästa ")])])]),t("form",{style:{left:e.form6,visibility:e.showForm6},attrs:{id:"form6"}},[t("Check"),t("h3",[e._v(e._s(e.answers[5].f))]),t("div",{staticClass:"answer__container"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[5].f_namn,expression:"answers[5].f_namn"}],style:e.invalidName&&e.invalid,attrs:{type:"text",placeholder:"Namn",minlength:"3"},domProps:{value:e.answers[5].f_namn},on:{input:function(s){s.target.composing||e.$set(e.answers[5],"f_namn",s.target.value)}}}),e.invalidName?t("p",{staticStyle:{color:"red"}},[e._v("Invalid name")]):e._e(),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[5].f_foretagsnamn,expression:"answers[5].f_foretagsnamn"}],attrs:{type:"text",placeholder:"Företagsnamn",minlength:"2"},domProps:{value:e.answers[5].f_foretagsnamn},on:{input:function(s){s.target.composing||e.$set(e.answers[5],"f_foretagsnamn",s.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[5].f_tel,expression:"answers[5].f_tel"}],style:e.invalidPhoneNum&&e.invalid,attrs:{type:"text",placeholder:"Telefon",minlength:"3"},domProps:{value:e.answers[5].f_tel},on:{input:function(s){s.target.composing||e.$set(e.answers[5],"f_tel",s.target.value)}}}),e.invalidPhoneNum?t("p",{staticStyle:{color:"red"}},[e._v("Invalid phone number")]):e._e(),t("input",{directives:[{name:"model",rawName:"v-model",value:e.answers[5].f_email,expression:"answers[5].f_email"}],style:e.invalidEmail&&e.invalid,attrs:{type:"text",placeholder:"E-mail"},domProps:{value:e.answers[5].f_email},on:{input:function(s){s.target.composing||e.$set(e.answers[5],"f_email",s.target.value)}}}),e.invalidEmail?t("p",{staticStyle:{color:"red"}},[e._v("Invalid email")]):e._e()]),t("div",{staticClass:"btn-box"},[t("button",{staticClass:"btn black_bg",attrs:{id:"back5",type:"button"},on:{click:function(s){e.form5="50%",e.form6="1100px",e.progress="83.7%",e.showForm5="visible",e.showForm6="hidden"}}},[e._v(" Tillbaka ")]),t("button",{staticClass:"btn black_bg",style:e.disableSubmitBtn&&e.disabled,attrs:{id:"next6",type:"submit",disabled:e.disableSubmitBtn},on:{click:function(s){return s.preventDefault(),e.sendData(s)}}},[e._v(" Slutför ")])])],1)])])},g=[],y=(t("ac1f"),t("5319"),t("bc3a")),x=t.n(y),B=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"check__container"},[t("div",[t("fa-icon",{staticClass:"check",attrs:{icon:"check-circle"}}),t("h2",[e._v("Bra!")])],1),t("h5",[e._v("NXT är för dig!")])])},C=[],j={name:"Check"},N=j,F=(t("0332"),Object(v["a"])(N,B,C,!1,null,"02114bf0",null)),$=F.exports,P={name:"Questions",components:{Check:$},data:function(){return{answers:[{a:"Har du en e-handel idag?",a_svar:null},{b:"Vilka kunder riktar du dig mot?",b_svar:null},{c:"Vilken bransch tillhör ditt företag? (Vallista eller liknande för ett gäng branscher + övrigt)",c_svar:null},{d:"Använder ni något affärssystem?",d_svar:null,d_text:""},{e:"Vill ni rikta er mot befintliga eller nya kunder?",e_svar:null},{f:"Kontakt uppgifter?",f_namn:null,f_foretagsnamn:null,f_tel:null,f_email:null}],form1:"",form2:"",form3:"",form4:"",form5:"",form6:"",progress:"",step:"1/6",showForm1:"visible",showForm2:"hidden",showForm3:"hidden",showForm4:"hidden",showForm5:"hidden",showForm6:"hidden",invalidEmail:!1,invalidName:!1,invalidPhoneNum:!1,invalid:{border:"1px solid red"},disableInputText:!1,disableSubmitBtn:!1,disabled:{backgroundColor:"#dddddd",cursor:"context-menu"}}},mounted:function(){this.disableSubmit()},updated:function(){this.disableSubmit(),"16.7%"===this.progress?this.step="1/6":"33.7%"===this.progress?this.step="2/6":"49.7%"===this.progress?this.step="3/6":"66.7%"===this.progress?this.step="4/6":"83.7%"===this.progress?this.step="5/6":"100.7%"===this.progress&&(this.step="6/6")},methods:{disabledInput:function(){null===this.answers[3].d_svar||"nej"===this.answers[3].d_svar?this.disableInputText=!0:this.disableInputText=!1},disableSubmit:function(){var e=this.answers[5].f_namn,s=this.answers[5].f_foretagsnamn,t=this.answers[5].f_tel,a=this.answers[5].f_email;null===e||""===e||e.length<3||null===s||""===s||s.length<3||null===t||""===t||t.length<3||null===a||""===a||a.length<3?this.disableSubmitBtn=!0:this.disableSubmitBtn=!1},sendData:function(){var e=this,s=this.answers[5],t=/^([A-Z\d.-]+)@([A-Z\d-]+)\.([A-Z]{2,8})(\.[A-Z]{2,8})?$/i.test(s.f_email),a=/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s./0-9]*$/i.test(s.f_tel),n=/^([a-zA-Z ]){2,30}$/i.test(s.f_namn);this.invalidEmail=!1,this.invalidName=!1,this.invalidPhoneNum=!1,t&&a&&n?x.a.post("https://jsonplaceholder.typicode.com/posts",{body:this.answers},{headers:{"Content-Type":"application/json"}}).then((function(s){console.log(s),e.$swal({icon:"success",title:"Svin Bra!",text:"Dina uppgifter har blivit skickade",confirmButtonText:"Fortsätt"}).then((function(){window.location.replace("https://nxte.se/")}))})).catch((function(s){console.log(s),e.$swal({icon:"error",title:"Oj då!",text:"Något gick fel :(",type:"warning",confirmButtonText:"Försök igen",showCloseButton:!0})})):(t||(this.invalidEmail=!0),n||(this.invalidName=!0),a||(this.invalidPhoneNum=!0))}}},E=P,S=(t("3886"),Object(v["a"])(E,k,g,!1,null,"4d0284fe",null)),q=S.exports,T=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("footer",[t("div",{staticClass:"footer__container"},[t("div",{staticClass:"box__container"},[t("div",{staticClass:"box1"},[t("h1",[e._v("NXT - Ett intelligentare system")]),t("p",{staticClass:"p"},[e._v("Utvecklat av Exakta Software - En del av Exakta Group")]),e._m(0),t("h2",[e._v("Besökadress")]),e._m(1),t("div",{staticClass:"btn__container"},[t("a",{staticClass:"btn white_bg",attrs:{href:"https://nxte.se/kontakt"},on:{click:e.clearRadioBtns}},[e._v("Kontakta oss")])])]),t("hr",{staticClass:"showHR"}),t("div",{staticClass:"box2"},[t("div",{staticClass:"left"},[t("a",{staticClass:"h2__style",attrs:{href:"https://nxte.se/e-handelslosningar"},on:{click:e.clearRadioBtns}},[e._v("E-handelslösningar")]),t("div",[t("a",{attrs:{href:"https://nxte.se/b2b"},on:{click:e.clearRadioBtns}},[e._v("B2B")]),t("a",{attrs:{href:"https://nxte.se/b2c"},on:{click:e.clearRadioBtns}},[e._v("B2C")]),t("a",{attrs:{href:"https://nxte.se/b2b-b2c"},on:{click:e.clearRadioBtns}},[e._v("B2B & B2C")]),t("a",{attrs:{href:"https://nxte.se/detta-ingar"},on:{click:e.clearRadioBtns}},[e._v("Detta ingår")])]),t("div",[t("a",{staticClass:"h2__style",attrs:{href:"https://nxte.se/kunder"},on:{click:e.clearRadioBtns}},[e._v("Kunder")])]),t("div",[t("a",{staticClass:"h2__style",attrs:{href:"https://nxte.se/kontakt"},on:{click:e.clearRadioBtns}},[e._v("Kontakt")]),t("a",{attrs:{href:"https://nxte.se/boka-demo"},on:{click:e.clearRadioBtns}},[e._v("Boka demo")])])]),t("div",{staticClass:"right"},[t("a",{staticClass:"h2__style",attrs:{href:"https://nxte.se/partners"},on:{click:e.clearRadioBtns}},[e._v("Partners")]),t("div",[t("a",{attrs:{href:"https://nxte.se/fraktsatt"},on:{click:e.clearRadioBtns}},[e._v("Fraktsätt")]),t("a",{attrs:{href:"https://nxte.se/forsaljningskanaler"},on:{click:e.clearRadioBtns}},[e._v("Försäljningskanaler")]),t("a",{attrs:{href:"https://nxte.se/betalsatt"},on:{click:e.clearRadioBtns}},[e._v("Betalsätt")]),t("a",{attrs:{href:"https://nxte.se/affarsystem"},on:{click:e.clearRadioBtns}},[e._v("Affärsystem")])]),t("a",{staticClass:"h2__style m-top",attrs:{href:"https://nxte.se/om-oss"},on:{click:e.clearRadioBtns}},[e._v("Om oss")])])])]),t("hr"),t("a",{staticClass:"copyright",attrs:{href:"https://www.exaktasoftware.se/"},on:{click:e.clearRadioBtns}},[e._v("@ Copyright 2019 Exakta Software - En del av Exakta Group")])])])},O=[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("p",{staticClass:"p"},[e._v(" Exakta ES Sweden AB "),t("br"),e._v(" 556782-2233 ")])},function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("p",[e._v("Bäckhagsvägen 11")]),t("p",[e._v("281 33 Hässleholm")])])}],R={name:"Footer",data:function(){return{}},methods:{clearRadioBtns:function(){var e,s=document.querySelectorAll('input[type="radio"]'),t=Object(l["a"])(s);try{for(t.s();!(e=t.n()).done;){var a=e.value;a.checked=!1}}catch(n){t.e(n)}finally{t.f()}}}},A=R,K=(t("bf6a"),Object(v["a"])(A,T,O,!1,null,"64b745ea",null)),J=K.exports,I={name:"App",components:{Header:m,Banner:w,Questions:q,Footer:J}},D=I,H=(t("034f"),Object(v["a"])(D,n,r,!1,null,null,null)),V=H.exports,Z=t("ecee"),M=t("c074"),Q=t("ad3d"),X=t("5886");a["a"].use(X["a"]),Z["c"].add(M["a"]),a["a"].component("fa-icon",Q["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(V)}}).$mount("#app")},7517:function(e,s,t){"use strict";var a=t("fafe"),n=t.n(a);n.a},"85ec":function(e,s,t){},"8f8e":function(e,s,t){},a33e:function(e,s,t){},a51f:function(e,s,t){},bf6a:function(e,s,t){"use strict";var a=t("a33e"),n=t.n(a);n.a},f065:function(e,s,t){e.exports=t.p+"img/NXT_ny_logo_ingen_Payoff.a94f82eb.png"},fafe:function(e,s,t){}});
//# sourceMappingURL=app.f655236d.js.map