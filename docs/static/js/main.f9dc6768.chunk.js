(this.webpackJsonpreclaimation=this.webpackJsonpreclaimation||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),r=a(5),c=a.n(r),s=(a(14),a(2)),l=(a(15),a(0)),o=function(){var e=Object(i.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(i.useState)(""),c=Object(s.a)(r,2),o=c[0],u=c[1];return Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(l.jsxs)("div",{style:{marginRight:"10px"},children:[Object(l.jsx)("div",{style:{marginRight:"10px"},children:Object(l.jsx)("button",{onClick:function(){var e=a.split(/\s+/).filter(Boolean).join(" OR ");u(e)},children:"Format Data"})}),Object(l.jsx)("div",{style:{marginRight:"10px"},children:Object(l.jsx)("button",{onClick:function(){n(""),u("")},children:"Clear Data"})})]}),Object(l.jsx)("textarea",{value:a,onChange:function(e){n(e.target.value)},placeholder:"Enter data separated by spaces or new lines",rows:10,cols:50})]}),Object(l.jsx)("div",{style:{marginRight:"10px"},children:Object(l.jsx)("button",{onClick:function(){navigator.clipboard.writeText(o).then((function(){alert("Formatted data copied to clipboard!")})).catch((function(e){console.error("Error copying to clipboard: ",e)}))},children:"Copy Result"})}),Object(l.jsx)("br",{}),Object(l.jsx)("label",{children:"Formatted Data:"}),Object(l.jsx)("p",{children:o})]})},u=a(6),b=a(7),m=a(3),h=a(9),j=a(8),d=(a(17),function(e){Object(h.a)(a,e);var t=Object(j.a)(a);function a(){var e;return Object(u.a)(this,a),(e=t.call(this)).state={"rozpocz\u0119cia":null,"zako\u0144czenia":null,wynik:"How many month(s) between two dates, or counts from 1st date?",obliczenieNumer:null},e.kalkulator=e.kalkulator.bind(Object(m.a)(e)),e}return Object(b.a)(a,[{key:"kalkulator",value:function(){if(null===this.state.rozpocz\u0119cia||null===this.state.zako\u0144czenia)this.setState({wynik:"there is problem of input, maybe try again?",obliczenieNumer:null});else if(3===this.state.rozpocz\u0119cia.split("/").length)if(3===this.state.zako\u0144czenia.split("/").length||!0===Number.isInteger(Number(this.state.zako\u0144czenia))){var e=this.state.zako\u0144czenia;if(!0===Number.isInteger(Number(this.state.zako\u0144czenia))&&Number(this.state.zako\u0144czenia)>0){var t=new Date(this.state.rozpocz\u0119cia),a=864e5*this.state.zako\u0144czenia,i=t.getTime()+a,n=new Date(i);e=Number(n.getMonth())+1+"/"+n.getDate()+"/"+(Number(n.getYear())+1900)}else this.setState({wynik:"Did you input positive integer number?",obliczenieNumer:null});var r=this.state.rozpocz\u0119cia.split("/"),c=e.split("/");if(Number(r[2])>Number(c[2]))this.setState({wynik:"maybe wrong year?",obliczenieNumer:null});else if(r[2]===c[2]&&Number(r[0])>Number(c[0]))this.setState({wynik:"maybe wrong month?",obliczenieNumer:null});else if(r[2]===c[2]&&r[0]===c[0]&&Number(r[1])>Number(c[1]))this.setState({wynik:"maybe wrong date?",obliczenieNumer:null});else if(r[2]===c[2]){var s=Number(c[0])-Number(r[0]);if(s>12||s<0)this.setState({wynik:"maybe month typo?",obliczenieNumer:null});else if(Number(c[1])<Number(r[1]))this.setState({wynik:"the correct term is: ",obliczenieNumer:s});else{var l=s+1;this.setState({wynik:"the correct term is: ",obliczenieNumer:l})}}else{var o=12*(Number(c[2])-Number(r[2])),u=Number(c[0])-Number(r[0]);if(Number(c[1])-Number(r[1])<0){var b=Number(o)+Number(u);this.setState({wynik:"the correct term is: ",obliczenieNumer:b})}else{var m=Number(o)+Number(u)+1;this.setState({wynik:"the correct term is: ",obliczenieNumer:m})}}}else this.setState({wynik:"the 2nd Date format could be incorrect, try Month/Date/Year format, or input integer number",obliczenieNumer:null});else this.setState({wynik:"the 1st Date format is incorrect, maybe try Month/Date/Year?",obliczenieNumer:null})}},{key:"render",value:function(){var e=this;return Object(l.jsxs)("body",{children:[Object(l.jsx)("div",{className:"center-separation-line",children:Object(l.jsx)("hr",{})}),Object(l.jsx)("div",{className:"main-title",children:"-- Date Calculator --"}),Object(l.jsxs)("div",{className:"kalkulator-frame",children:[Object(l.jsx)("div",{className:"kalkulator-input-frame",children:Object(l.jsx)("input",{className:"kalkulator-line",placeholder:"1st date [Month/Date/Year]",onChange:function(t){e.setState({"rozpocz\u0119cia":t.target.value})}})}),Object(l.jsx)("div",{className:"kalkulator-input-frame",children:Object(l.jsx)("input",{className:"kalkulator-line",placeholder:"2nd date [Month/Date/Year], or days in integer",onChange:function(t){e.setState({"zako\u0144czenia":t.target.value})}})}),Object(l.jsx)("div",{className:"kalkulator-button",onClick:function(){e.kalkulator()},children:"Calculate"}),Object(l.jsxs)("div",{className:"wynik-frame",children:[Object(l.jsx)("div",{className:"wynik-sw\xf3j",children:this.state.wynik}),Object(l.jsx)("div",{className:"wynik-numer",children:this.state.obliczenieNumer})]})]}),Object(l.jsx)("br",{})]})}}]),a}(i.Component));var k=function(){var e=Object(i.useState)("TextTurningComponent"),t=Object(s.a)(e,2),a=t[0],n=t[1],r=function(e){n(e)};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)("h1",{children:"Excel is Matter"})}),Object(l.jsxs)("main",{children:[Object(l.jsxs)("div",{className:"tabs",children:[Object(l.jsx)("button",{className:"TextTurningComponent"===a?"active-tab":"inactive-tab",onClick:function(){return r("TextTurningComponent")},children:"Text Tuning"}),Object(l.jsx)("button",{className:"Kalkulator"===a?"active-tab":"inactive-tab",onClick:function(){return r("Kalkulator")},children:"Kalkulator"})]}),"TextTurningComponent"===a&&Object(l.jsx)(o,{}),"Kalkulator"===a&&Object(l.jsx)(d,{})]})]})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),i(e),n(e),r(e),c(e)}))};c.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(k,{})}),document.getElementById("root")),N()}},[[18,1,2]]]);
//# sourceMappingURL=main.f9dc6768.chunk.js.map