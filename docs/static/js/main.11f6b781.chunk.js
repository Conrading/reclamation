(this.webpackJsonpreclaimation=this.webpackJsonpreclaimation||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(5),c=n.n(r),s=(n(14),n(2)),l=(n(15),n(16),n(0)),o=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(""),c=Object(s.a)(r,2),o=c[0],u=c[1],b=Object(a.useState)(!1),m=Object(s.a)(b,2),h=m[0],j=m[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(l.jsx)("div",{style:{margin:"10px"},children:Object(l.jsx)("div",{style:{margin:"10px"},children:Object(l.jsx)("div",{className:"TextTuningPageButton",onClick:function(){i(""),u(""),j(!1)},children:"Clear Data"})})}),Object(l.jsx)("textarea",{style:{width:"89%",padding:"10px",margin:"10px 0"},value:n,onChange:function(e){i(e.target.value)},placeholder:"Enter data separated by spaces or new lines",rows:10,cols:50})]}),Object(l.jsx)("br",{}),Object(l.jsxs)("div",{children:[!1===h&&Object(l.jsx)("div",{className:"TextTuningPageButton",onClick:function(){var e=n.split(/\s+/).filter(Boolean).map((function(e){return'"'.concat(e,'"')})).join(" OR ");u(e),j(!0)},children:"Format Data"}),!0===h&&Object(l.jsx)("div",{className:"TextTuningPageButton",onClick:function(){navigator.clipboard.writeText(o).then((function(){alert("Data copied to clipboard!")})).catch((function(e){console.error("Error copying to clipboard: ",e)}))},children:"Copy Result"})]}),Object(l.jsx)("br",{}),Object(l.jsx)("p",{children:o})]})},u=n(6),b=n(7),m=n(3),h=n(9),j=n(8),d=(n(18),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).state={"rozpocz\u0119cia":null,"zako\u0144czenia":null,wynik:"How many month(s) between two dates, or counts from 1st date?",obliczenieNumer:null},e.kalkulator=e.kalkulator.bind(Object(m.a)(e)),e}return Object(b.a)(n,[{key:"kalkulator",value:function(){if(null===this.state.rozpocz\u0119cia||null===this.state.zako\u0144czenia)this.setState({wynik:"there is problem of input, maybe try again?",obliczenieNumer:null});else if(3===this.state.rozpocz\u0119cia.split("/").length)if(3===this.state.zako\u0144czenia.split("/").length||!0===Number.isInteger(Number(this.state.zako\u0144czenia))){var e=this.state.zako\u0144czenia;if(!0===Number.isInteger(Number(this.state.zako\u0144czenia))&&Number(this.state.zako\u0144czenia)>0){var t=new Date(this.state.rozpocz\u0119cia),n=864e5*this.state.zako\u0144czenia,a=t.getTime()+n,i=new Date(a);e=Number(i.getMonth())+1+"/"+i.getDate()+"/"+(Number(i.getYear())+1900)}else this.setState({wynik:"Did you input positive integer number?",obliczenieNumer:null});var r=this.state.rozpocz\u0119cia.split("/"),c=e.split("/");if(Number(r[2])>Number(c[2]))this.setState({wynik:"maybe wrong year?",obliczenieNumer:null});else if(r[2]===c[2]&&Number(r[0])>Number(c[0]))this.setState({wynik:"maybe wrong month?",obliczenieNumer:null});else if(r[2]===c[2]&&r[0]===c[0]&&Number(r[1])>Number(c[1]))this.setState({wynik:"maybe wrong date?",obliczenieNumer:null});else if(r[2]===c[2]){var s=Number(c[0])-Number(r[0]);if(s>12||s<0)this.setState({wynik:"maybe month typo?",obliczenieNumer:null});else if(Number(c[1])<Number(r[1]))this.setState({wynik:"the correct term is: ",obliczenieNumer:s});else{var l=s+1;this.setState({wynik:"the correct term is: ",obliczenieNumer:l})}}else{var o=12*(Number(c[2])-Number(r[2])),u=Number(c[0])-Number(r[0]);if(Number(c[1])-Number(r[1])<0){var b=Number(o)+Number(u);this.setState({wynik:"the correct term is: ",obliczenieNumer:b})}else{var m=Number(o)+Number(u)+1;this.setState({wynik:"the correct term is: ",obliczenieNumer:m})}}}else this.setState({wynik:"the 2nd Date format could be incorrect, try Month/Date/Year format, or input integer number",obliczenieNumer:null});else this.setState({wynik:"the 1st Date format is incorrect, maybe try Month/Date/Year?",obliczenieNumer:null})}},{key:"render",value:function(){var e=this;return Object(l.jsxs)("body",{children:[Object(l.jsx)("div",{className:"center-separation-line",children:Object(l.jsx)("hr",{})}),Object(l.jsx)("div",{className:"main-title",children:"-- Date Calculator --"}),Object(l.jsxs)("div",{className:"kalkulator-frame",children:[Object(l.jsx)("div",{className:"kalkulator-input-frame",children:Object(l.jsx)("input",{className:"kalkulator-line",placeholder:"1st date [Month/Date/Year]",onChange:function(t){e.setState({"rozpocz\u0119cia":t.target.value})}})}),Object(l.jsx)("div",{className:"kalkulator-input-frame",children:Object(l.jsx)("input",{className:"kalkulator-line",placeholder:"2nd date [Month/Date/Year], or days in integer",onChange:function(t){e.setState({"zako\u0144czenia":t.target.value})}})}),Object(l.jsx)("div",{className:"kalkulator-button",onClick:function(){e.kalkulator()},children:"Calculate"}),Object(l.jsxs)("div",{className:"wynik-frame",children:[Object(l.jsx)("div",{className:"wynik-sw\xf3j",children:this.state.wynik}),Object(l.jsx)("div",{className:"wynik-numer",children:this.state.obliczenieNumer})]})]}),Object(l.jsx)("br",{})]})}}]),n}(a.Component));var N=function(){var e=Object(a.useState)("TextTurningComponent"),t=Object(s.a)(e,2),n=t[0],i=t[1],r=function(e){i(e)};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)("h1",{children:"Excel is Matter"})}),Object(l.jsxs)("main",{children:[Object(l.jsxs)("div",{className:"tabs",children:[Object(l.jsx)("button",{className:"TextTurningComponent"===n?"active-tab":"inactive-tab",onClick:function(){return r("TextTurningComponent")},children:"Text Tuning"}),Object(l.jsx)("button",{className:"Kalkulator"===n?"active-tab":"inactive-tab",onClick:function(){return r("Kalkulator")},children:"Calculator"})]}),"TextTurningComponent"===n&&Object(l.jsx)(o,{}),"Kalkulator"===n&&Object(l.jsx)(d,{})]})]})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};c.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root")),k()}},[[19,1,2]]]);
//# sourceMappingURL=main.11f6b781.chunk.js.map