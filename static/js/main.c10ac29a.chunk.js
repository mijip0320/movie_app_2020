(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{30:function(e,t){},31:function(e,t){},34:function(e,t,a){e.exports=a(66)},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),o=a.n(c),s=a(7),i=a(1),m=a(11),l=a.n(m),u=a(25),v=a(26),p=a(27),d=a(33),E=a(32),_=a(28),f=a.n(_);a(57);var y=function(e){var t=e.id,a=e.year,n=e.title,c=e.summary,o=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(s.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:c,poster:o,genres:i}}},r.a.createElement("img",{src:o,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},i.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},c.slice(0,180),"..."))))},g=(a(63),function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(l.a.mark((function t(){var a,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component)),h=a(30),b=a.n(h),N=a(31),k=a.n(N);a(64);var j=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(s.b,{to:"/"},"Home"),r.a.createElement(s.b,{to:"/about"},"About"))};a(65);var w=function(){return r.a.createElement(s.a,null,r.a.createElement(j,null),r.a.createElement(i.a,{path:"/",exact:!0,component:g}),r.a.createElement(i.a,{path:"/about",component:b.a}),r.a.createElement(i.a,{path:"/movie/:id",component:k.a}))};o.a.render(r.a.createElement(w,null),document.getElementById("potato"))}},[[34,1,2]]]);
//# sourceMappingURL=main.c10ac29a.chunk.js.map