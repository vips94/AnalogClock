(this.webpackJsonpanalogclock=this.webpackJsonpanalogclock||[]).push([[0],{15:function(c,e,t){},16:function(c,e,t){},2:function(c,e,t){c.exports={clock:"Clock_clock__1dcuJ",dark:"Clock_dark__aCPi5",light:"Clock_light__3eyUM",hour:"Clock_hour__1Lqas",min:"Clock_min__1JQKn",sec:"Clock_sec__1qjW5",hr:"Clock_hr__2WyG4",mn:"Clock_mn__2Q2Mj",sc:"Clock_sc__34hCQ",mndark:"Clock_mndark__1MN90",mnlight:"Clock_mnlight__zrIqZ"}},24:function(c,e,t){"use strict";t.r(e);var a=t(0),o=t(6),n=t.n(o),l=(t(15),t(5)),r=(t(16),t(2)),s=t.n(r),i=t(4),g=t(1),_=function(c){var e=Object(a.useState)(),t=Object(l.a)(e,2),o=t[0],n=t[1],r=Object(a.useState)(),_=Object(l.a)(r,2),d=_[0],j=_[1],k=Object(a.useState)(),u=Object(l.a)(k,2),b=u[0],h=u[1],m=(s.a.clock,c.className,Object(i.c)((function(c){return c.ui.dark})));return Object(a.useEffect)((function(){setInterval((function(){var c=new Date,e=30*c.getHours(),t=6*c.getMinutes(),a=6*c.getSeconds();n({transform:"rotateZ(".concat(a,"deg)")}),j({transform:"rotateZ(".concat(t,"deg)")}),h({transform:"rotateZ(".concat(e+t/12,"deg)")})}))}),[]),Object(g.jsxs)("div",{className:"".concat(s.a.clock," ").concat(m?s.a.dark:s.a.light),children:[Object(g.jsx)("div",{className:s.a.hour,children:Object(g.jsx)("div",{className:s.a.hr,style:b})}),Object(g.jsx)("div",{className:s.a.min,children:Object(g.jsx)("div",{className:"".concat(s.a.mn," ").concat(m?s.a.mndark:s.a.mnlight),style:d})}),Object(g.jsx)("div",{className:s.a.sec,children:Object(g.jsx)("div",{className:s.a.sc,style:o})})]})},d=t(3),j=t.n(d),k=function(c){var e=Object(i.c)((function(c){return c.ui.dark}));j.a.checkbox;return Object(g.jsxs)("label",{className:j.a.checkbox,children:[Object(g.jsx)("h3",{className:"".concat(j.a.logo," ").concat(e?j.a.logolight:j.a.logodark),children:c.children}),Object(g.jsx)("input",{type:"checkbox",className:j.a.toggle,checked:e,onClick:c.onClick}),Object(g.jsx)("span",{className:"".concat(j.a.slider," ").concat(e?j.a.light:j.a.dark)})]})},u=t(7),b=Object(u.b)({name:"UI",initialState:{dark:!1},reducers:{toggleTheme:function(c){c.dark=!c.dark}}}),h=b.actions,m=b.reducer;var O=function(){var c=Object(i.c)((function(c){return c.ui.dark})),e=Object(a.useState)(""),t=Object(l.a)(e,2),o=t[0],n=t[1],r=Object(i.b)();return Object(a.useEffect)((function(){n(c?"Light":"Dark")}),[c,r]),Object(g.jsxs)("div",{className:"App "+(c?"dark":"light"),children:[Object(g.jsx)(_,{}),Object(g.jsx)(k,{onClick:function(){r(h.toggleTheme())},children:o})]})},f=Object(u.a)({reducer:{ui:m}});n.a.render(Object(g.jsx)(i.a,{store:f,children:Object(g.jsx)(O,{})}),document.getElementById("root"))},3:function(c,e,t){c.exports={checkbox:"Toggle_checkbox__2Toro",logo:"Toggle_logo__XBbUD",logolight:"Toggle_logolight__3eLbI",logodark:"Toggle_logodark__1r95Y",toggle:"Toggle_toggle__1Aqw_",slider:"Toggle_slider__3tE2Z",dark:"Toggle_dark__2n-oY",light:"Toggle_light__3oqpE"}}},[[24,1,2]]]);
//# sourceMappingURL=main.40a619cf.chunk.js.map