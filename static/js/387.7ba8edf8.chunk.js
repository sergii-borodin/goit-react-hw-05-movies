"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{59:function(n,t,e){e.d(t,{Mc:function(){return s},Pv:function(){return v},i$:function(){return p},vg:function(){return f},wr:function(){return o}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="9fbe85233379d275904e898da5aa337c";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/".concat("movie/week","?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},387:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,c=e(861),u=e(439),i=e(757),o=e.n(i),s=e(791),p=e(59),f=e(168),v=e(444),l=v.ZP.ul(r||(r=(0,f.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),d=v.ZP.p(a||(a=(0,f.Z)(["\n  width: 100px;\n  text-align: center;\n"]))),h=e(689),g=e(184),w=function(n){var t=(0,s.useState)([]),e=(0,u.Z)(t,2),r=e[0],a=e[1],i=(0,h.UO)().movieId;(0,s.useEffect)((function(){var n=function(){var n=(0,c.Z)(o().mark((function n(t){var e,r;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.i$(t);case 3:e=n.sent,r=e.cast,a(r),console.log("cast",r),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),console.log(n.t0.message);case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(t){return n.apply(this,arguments)}}();n(i)}),[i]);var f=(0,s.useMemo)((function(){return r.filter((function(n){return n.popularity>10}))}),[r]);return console.log(f),(0,g.jsx)(l,{children:f.map((function(n){var t=n.original_name,e=n.profile_path,r=n.id;return(0,g.jsxs)("li",{children:[(0,g.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(e),alt:t,width:"100"}),(0,g.jsx)(d,{children:t})]},r)}))})}}}]);
//# sourceMappingURL=387.7ba8edf8.chunk.js.map