(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{26:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var s=n(0),r=n(2),c=n.n(r),l=n(13),i=n.n(l),a=(n(26),n(4)),j=n.n(a),u=n(14),b=n(15),h=n(16),o=n(17),d=n(20),x=n(19),O=n(18),p=n.n(O),f=function(t){var e=t.results;return console.log(e),Object(s.jsxs)("div",{children:[Object(s.jsx)("center",{children:Object(s.jsx)("h1",{children:"Results List"})}),Object(s.jsx)("center",{children:Object(s.jsx)("div",{children:Object(s.jsxs)("table",{style:{border:"1px solid black"},children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"RollNumbers"}),Object(s.jsx)("th",{children:"Results"})]})}),e?e.map((function(t){return Object(s.jsx)("tbody",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:t.rollNumber}),Object(s.jsx)("td",{children:t.result})]})},t.rollNumber)})):Object(s.jsx)("tfoot",{children:Object(s.jsx)("tr",{children:Object(s.jsx)("td",{children:"Waiting for Results"})})})]})})})]})},m=function(t){Object(d.a)(n,t);var e=Object(x.a)(n);function n(){var t;Object(h.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={rollNumbers:"",results:[]},t.handleChange=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t.handleSubmit=Object(u.a)(j.a.mark((function e(){var n,s,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==t.state.rollNumbers){e.next=4;break}alert("Fill the input first"),e.next=11;break;case 4:return n=t.state.rollNumbers.split(","),s={"Content-Type":"application/json"},e.next=8,p.a.post("http://localhost:4000/getresults",n,{headers:s});case 8:r=e.sent,c=r.data,t.setState({results:c.results});case 11:case"end":return e.stop()}}),e)}))),t}return Object(o.a)(n,[{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsxs)("center",{children:[Object(s.jsx)("input",{type:"text",name:"rollNumbers",onChange:this.handleChange}),Object(s.jsx)("input",{type:"button",value:"submit",onClick:this.handleSubmit}),0===this.state.results.length?Object(s.jsx)("h1",{children:"Fill the input , click on submit and wait"}):Object(s.jsx)(f,{results:this.state.results})]})})}}]),n}(r.Component),g=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(e){var n=e.getCLS,s=e.getFID,r=e.getFCP,c=e.getLCP,l=e.getTTFB;n(t),s(t),r(t),c(t),l(t)}))};i.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(m,{})}),document.getElementById("root")),g()}},[[45,1,2]]]);
//# sourceMappingURL=main.8f9edfdc.chunk.js.map