(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s,r=n(4),c=n.n(r),i=n(5),a=n(6),o=n(9),l=n(7),u=n(8),h=n(1),d=n.n(h),b=(n(14),n(15),n(2)),p=n.n(b),j=n(0),v=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(e){e[e.NONE=0]="NONE",e[e.ALPHABET=1]="ALPHABET",e[e.LENGTH=2]="LENGTH"}(s||(s={}));var N=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={isReversed:!1,sortType:s.NONE},e.handleAlphabeticalSort=function(){e.setState({sortType:s.ALPHABET})},e.handleLengthSort=function(){e.setState({sortType:s.LENGTH})},e.handleReverse=function(){e.setState((function(e){return{isReversed:!e.isReversed}}))},e.handleReset=function(){e.setState({sortType:s.NONE,isReversed:!1})},e}return Object(a.a)(n,[{key:"render",value:function(){var e=this.state,t=e.isReversed,n=e.sortType,r=function(e,t){var n=t.sortType,r=t.isReversed,c=Object(u.a)(e);switch(n){case s.ALPHABET:c.sort((function(e,t){return e.localeCompare(t)}));break;case s.LENGTH:c.sort((function(e,t){return e.length-t.length}))}return r&&c.reverse(),c}(v,{isReversed:t,sortType:n});return Object(j.jsxs)("div",{className:"section content",children:[Object(j.jsxs)("div",{className:"buttons",children:[Object(j.jsx)("button",{type:"button",className:p()("button is-info",{"is-light":n!==s.ALPHABET}),onClick:this.handleAlphabeticalSort,children:"Sort alphabetically"}),Object(j.jsx)("button",{type:"button",className:p()("button is-success",{"is-light":n!==s.LENGTH}),onClick:this.handleLengthSort,children:"Sort by length"}),Object(j.jsx)("button",{type:"button",className:p()("button is-warning",{"is-light":!t}),onClick:this.handleReverse,children:"Reverse"}),(n!==s.NONE||t)&&Object(j.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:this.handleReset,children:"Reset"})]}),Object(j.jsx)("ul",{children:Object(j.jsx)("ul",{children:r.map((function(e){return Object(j.jsx)("li",{"data-cy":"Good",children:e},e)}))})})]})}}]),n}(d.a.Component);c.a.render(Object(j.jsx)(N,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.e5873f15.chunk.js.map