(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{10:function(e,c,a){e.exports={body:"home2_body__L1fFz",alpha:"home2_alpha__3ldXo",first:"home2_first__5Ff-s",downicon:"home2_downicon__3gHJd",upicon:"home2_upicon__3aXDD",col1:"home2_col1__1rv1c",headline:"home2_headline__UBJZN",col2:"home2_col2__3WatA",col3:"home2_col3__2R0iB",col4:"home2_col4__30MJb",radar:"home2_radar__nHFuN",switchholder:"home2_switchholder__3LiCN",switch1:"home2_switch1__AQz_j",switch2:"home2_switch2__XSc44",active:"home2_active__319t0",downiconholder:"home2_downiconholder__1rIiP",upiconholder:"home2_upiconholder__3IOIK"}},111:function(e,c,a){},12:function(e,c,a){e.exports={form:"cartcheck_form__1YWF4",main:"cartcheck_main__3RUL6",holder1:"cartcheck_holder1__1rpBR",holder2:"cartcheck_holder2__jO909",check:"cartcheck_check__kL9FT",checkmark:"cartcheck_checkmark__Zd9A3",checked:"cartcheck_checked__2tezr"}},120:function(e,c,a){},13:function(e,c,a){e.exports={navbar:"navbar_navbar__2WmXF",headline:"navbar_headline__1enOs",sec:"navbar_sec__3RQkJ",option:"navbar_option__FBBoV",dot:"navbar_dot__1lIhZ",restart:"navbar_restart__3-LjM",sec3:"navbar_sec3__2Tp4f",holder:"navbar_holder__azzuE",holder1:"navbar_holder1__RGoXP",holder2:"navbar_holder2__1Lcke",holder3:"navbar_holder3__1fxma",active:"navbar_active__1-ZxX",sec4:"navbar_sec4__hH_SI",start:"navbar_start__3gAGl",sec4p:"navbar_sec4p__y5k7y",stop:"navbar_stop__ku4Sb"}},227:function(e,c,a){"use strict";a.r(c);var s=a(97),t=a.n(s),j=(a(110),a(37)),r=(a(111),a(5)),n=a(9),i=a.n(n),b=a(2),l=a.n(b),o=a(16),d=a(14),O=a(1),x=l.a.createContext({name:"",token:"",islogged:!1,login:function(e){},logout:function(){}}),h=function(e){var c=localStorage.getItem("token"),a=Object(b.useState)(c),s=Object(r.a)(a,2),t=s[0],j=s[1],n=Object(b.useState)(""),i=Object(r.a)(n,2),l=i[0],o=i[1],d=!!t,h={name:localStorage.getItem("name")||l,token:t,islogged:d,login:function(e,c){j(e),o(c),localStorage.setItem("token",e),localStorage.setItem("name",c)},logout:function(){j(null),localStorage.removeItem("token"),localStorage.removeItem("name")}};return Object(O.jsx)(x.Provider,{value:h,children:e.children})},m=x,p=function(){var e=Object(b.useState)(!0),c=Object(r.a)(e,2),a=c[0],s=c[1],t=Object(b.useContext)(m),j=Object(b.useState)({}),n=Object(r.a)(j,2),l=n[0],x=n[1],h=Object(b.useState)({}),p=Object(r.a)(h,2),u=p[0],_=p[1],N=Object(b.useState)({}),v=Object(r.a)(N,2),f=v[0],g=v[1],k=Object(b.useState)({input:!0,func:!1}),C=Object(r.a)(k,2),S=C[0],w=C[1],T=Object(b.useState)({input:!0,func:!1}),y=Object(r.a)(T,2),E=y[0],D=y[1],A=Object(b.useState)({input:!0,func:!1}),M=Object(r.a)(A,2),I=M[0],P=M[1],R=Object(b.useRef)(),G=Object(b.useRef)(),z=Object(b.useRef)(),B=Object(d.g)(),H=function(){var e=R.current.value,c=e.match(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]+)$/);c||D({input:!1,func:!1}),c&&(D({input:!0,func:!0}),g(e))},F=function(){var e=z.current.value,c=e.match(/^[\w'\-,.][^0-9_!\xa1?\xf7?\xbf/\\+=@#$%\u02c6&*(){}|~<>;:[\]]{2,}$/);c||w({input:!1,func:!1}),c&&w({input:!0,func:!0}),x(e)},L=function(){var e=G.current.value,c=e.match(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#!$%^&*]).*$/);c||P({input:!1,func:!1}),c&&(P({input:!0,func:!0}),_(e))},V=I.func&&S.func&&E.func,X=function(){s(!a),w({input:!0,func:!1}),P({input:!0,func:!1}),D({input:!0,func:!1})},J=function(e){var c;e.preventDefault(),c=a?"https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBD3KNHJSa54i2wOA54N5CEbCxICzA-IXo":"https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBD3KNHJSa54i2wOA54N5CEbCxICzA-IXo",fetch(c,{method:"post",body:JSON.stringify({email:f,password:u,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():e.json().then((function(e){throw console.log(e),new Error(e.error.message)}))})).then((function(e){t.login(e.idToken,l),B.replace("/home")})).catch((function(e){alert(e.message)}))};return Object(O.jsxs)(b.Fragment,{children:[a&&Object(O.jsxs)(o.a,{className:i.a.form,children:[Object(O.jsxs)("div",{className:i.a.headline,children:[a&&Object(O.jsx)("p",{onClick:X,className:i.a.headlinetext,children:"Login?"}),!a&&Object(O.jsxs)("p",{onClick:X,className:i.a.headlinetext,children:[" ","SignUp?"]})]}),!S.input&&Object(O.jsx)("p",{className:i.a.invalid,children:"Enter a valid Name"}),Object(O.jsxs)("div",{className:i.a.forminputholder,children:[Object(O.jsx)(o.a.Group,{className:i.a.forminput,children:Object(O.jsx)(o.a.Control,{onChange:F,ref:z,type:"text",placeholder:" First name"})}),Object(O.jsx)(o.a.Group,{className:i.a.forminput,children:Object(O.jsx)(o.a.Control,{type:"text",placeholder:" Last name"})})]}),Object(O.jsx)(o.a.Group,{className:i.a.forminput2,children:Object(O.jsx)(o.a.Control,{type:"number",placeholder:" age"})}),Object(O.jsxs)(o.a.Group,{className:i.a.forminput2,children:[!E.input&&Object(O.jsx)("p",{className:i.a.invalid,children:"Enter a valid Email"}),Object(O.jsx)(o.a.Control,{onChange:H,ref:R,type:"email",placeholder:"Enter email"})]}),Object(O.jsxs)(o.a.Group,{className:i.a.forminput2,children:[!I.input&&Object(O.jsx)("p",{className:i.a.invalid,children:"Password must contain at least a number, uppercase letter, lowercase letter and a special character"}),Object(O.jsx)(o.a.Control,{onChange:L,ref:G,type:"password",placeholder:"Password"})]}),Object(O.jsx)("button",{disabled:!V,onClick:J,className:"".concat(i.a.btn," ").concat(V?"":i.a.disable),children:"Submit"})]}),!a&&Object(O.jsxs)(o.a,{className:i.a.form,children:[Object(O.jsxs)("div",{className:i.a.headline,children:[a&&Object(O.jsx)("p",{onClick:X,className:i.a.headlinetext,children:"Login?"}),!a&&Object(O.jsxs)("p",{onClick:X,className:i.a.headlinetext,children:[" ","SignUp?"]})]}),Object(O.jsxs)(o.a.Group,{className:i.a.forminput2,children:[!S.input&&Object(O.jsx)("p",{className:i.a.invalid,children:"Enter a valid Name"}),Object(O.jsx)(o.a.Control,{onChange:F,ref:z,type:"name",placeholder:"Enter Name"})]}),Object(O.jsxs)(o.a.Group,{className:i.a.forminput2,children:[!E.input&&Object(O.jsx)("p",{className:i.a.invalid,children:"Enter a valid Email"}),Object(O.jsx)(o.a.Control,{onChange:H,ref:R,type:"email",placeholder:"Enter email"})]}),Object(O.jsxs)(o.a.Group,{className:i.a.forminput2,children:[!I.input&&Object(O.jsx)("p",{className:i.a.invalid,children:"Password must contain at least a number, uppercase letter, lowercase letter and a special character"}),Object(O.jsx)(o.a.Control,{onChange:L,ref:G,type:"password",placeholder:"Password"})]}),Object(O.jsx)("button",{disabled:!V,onClick:J,className:"".concat(i.a.btn," ").concat(V?"":i.a.disable),children:"Submit"})]})]})},u=a(10),_=a.n(u),N=a(13),v=a.n(N),f=a(39),g=a(21),k=a(32),C=a(29),S=a(53),w=a(99),T=l.a.createContext({isshown:!0,show:function(){}}),y=function(e){var c=Object(b.useState)(!1),a=Object(r.a)(c,2),s=a[0],t=a[1],j={isshown:s,show:function(){t(!s)}};return Object(O.jsx)(T.Provider,{value:j,children:e.children})},E=T,D=function(){var e=Object(b.useContext)(m),c=Object(b.useContext)(E),a=Object(b.useState)(!0),s=Object(r.a)(a,2),t=s[0],j=s[1],n=Object(b.useState)(!1),i=Object(r.a)(n,2),l=i[0],o=i[1],d=Object(b.useState)(!1),x=Object(r.a)(d,2),h=x[0],p=x[1],u=function(){c.show(),console.log(c.isshown)};return Object(O.jsxs)("div",{className:v.a.navbar,children:[c.isshown&&Object(O.jsxs)("div",{className:v.a.option,children:[" ",Object(O.jsx)(f.c,{onClick:u})]}),!c.isshown&&Object(O.jsxs)("div",{className:v.a.option,children:[" ",Object(O.jsx)(S.a,{onClick:u,id:"option"})]}),Object(O.jsx)("div",{children:Object(O.jsxs)("p",{className:v.a.headline,children:[Object(O.jsx)(w.a,{}),"  ",e.name," "]})}),Object(O.jsxs)("div",{className:v.a.sec,children:[Object(O.jsx)(C.a,{className:v.a.dot}),Object(O.jsx)(f.a,{className:v.a.restart}),Object(O.jsx)("b",{children:"20s"}),Object(O.jsxs)("p",{children:["last",Object(O.jsx)("br",{}),"Update"]})]}),Object(O.jsx)("div",{className:v.a.sec3,children:Object(O.jsxs)("div",{className:v.a.holder,children:[Object(O.jsx)("div",{onClick:function(){j(!0),o(!1),p(!1)},className:"".concat(v.a.holder1," ").concat(t?v.a.active:""),children:Object(O.jsx)("p",{children:"Today"})}),Object(O.jsx)("div",{onClick:function(){o(!0),j(!1),p(!1)},className:"".concat(v.a.holder2," ").concat(l?v.a.active:""),children:Object(O.jsx)("p",{children:"Yesterday"})}),Object(O.jsx)("div",{onClick:function(){p(!0),j(!1),o(!1)},className:"".concat(v.a.holder3," ").concat(h?v.a.active:""),children:Object(O.jsx)("p",{children:"Last week"})})]})}),Object(O.jsxs)("div",{className:v.a.sec4,children:[Object(O.jsx)(g.c,{className:v.a.start}),Object(O.jsx)("input",{type:"text",placeholder:"Start Date",className:v.a.sec4p}),Object(O.jsx)(k.b,{})]}),Object(O.jsxs)("div",{className:v.a.sec4,children:[Object(O.jsx)(k.c,{className:v.a.stop}),Object(O.jsx)("input",{type:"text",placeholder:"End Date",className:v.a.sec4p}),Object(O.jsx)(k.b,{})]})]})},A=a(74),M=a(25),I=a(43),P=a(54),R=a(101),G=a(100),z=a(26),B=a.n(z),H=function(){var e=Object(b.useContext)(E),c=Object(b.useContext)(m);return Object(O.jsxs)("div",{className:"".concat(B.a.nav," ").concat(e.isshown?"":B.a.hide," "),children:[Object(O.jsx)("div",{className:B.a.water,children:Object(O.jsx)(S.a,{})}),Object(O.jsx)("div",{className:B.a.home,children:Object(O.jsx)(P.b,{})}),Object(O.jsx)("div",{className:B.a.store,children:Object(O.jsx)(G.a,{})}),Object(O.jsx)("div",{className:B.a.holder,children:Object(O.jsx)(k.a,{})}),Object(O.jsx)("div",{className:B.a.holder,children:Object(O.jsx)(R.a,{})}),Object(O.jsx)("div",{className:B.a.holder,children:Object(O.jsx)(P.a,{})}),Object(O.jsx)("div",{className:B.a.logout,children:Object(O.jsx)(j.b,{to:"/register",children:Object(O.jsx)(g.b,{onClick:c.logout})})})]})},F=a(55),L=a(23),V=a.n(L),X=a(22),J=(a(120),function(){return Object(O.jsxs)(b.Fragment,{children:[Object(O.jsx)("p",{className:V.a.headline,children:"Sales By Station"}),Object(O.jsxs)("div",{className:V.a.container,children:[Object(O.jsxs)("div",{className:V.a.holder,children:[Object(O.jsx)(X.a,{}),Object(O.jsx)("b",{children:"Cairo Branch"}),Object(O.jsx)("b",{children:"62 item"})]}),Object(O.jsx)(F.a,{variant:"warning",className:V.a.progress,now:40})]}),Object(O.jsxs)("div",{className:V.a.container,children:[Object(O.jsxs)("div",{className:V.a.holder,children:[Object(O.jsx)(X.a,{}),Object(O.jsx)("b",{children:"Roma Branch"}),Object(O.jsx)("b",{children:"62 item"})]}),Object(O.jsx)(F.a,{variant:"warning",className:V.a.progress,now:40})]}),Object(O.jsxs)("div",{className:V.a.container,children:[Object(O.jsxs)("div",{className:V.a.holder,children:[Object(O.jsx)(X.a,{}),Object(O.jsx)("b",{children:"Alex Branch"}),Object(O.jsx)("b",{children:"62 item"})]}),Object(O.jsx)(F.a,{variant:"warning",className:V.a.progress,now:40})]})]})}),W=a(102),Z=a.n(W),U=(a(121),function(){var e=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),c=(Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),.18*e);return window.addEventListener("resize",(function(){window.location.reload()})),Object(O.jsx)("div",{children:Object(O.jsx)(Z.a,{size:c,captions:{1:"24:00",2:"02:00",4:"04:00",6:"06:00",8:"08:00",10:"10:00",12:"12:00",14:"14:00",16:"16:00",18:"18:00",20:"20:00",22:"22:00"},data:[{data:{1:.88,2:.44,4:.44,6:.44,8:.88,10:.44,12:.44,14:.44,16:.44,18:.88,20:.44,22:.44},meta:{color:"rgb(199,227,235)"}},{data:{1:.22,2:.33,4:.88,6:.33,8:.44,10:.55,12:.88,14:.44,16:.33,18:.44,20:.88,22:.44},meta:{color:"rgb(159,221,227)"}}]})})}),Y=a(105),$=a(40),q=a.n($),K={labels:[" Dummy","Dummy","Dummy","Dummy","Dummy"],datasets:[{label:"",backgroundColor:"rgb(255,127,92)",borderColor:"rgba(0,0,0,1)",borderWidth:.5,barThickness:6,data:[140,240,180,270,200]}]},Q=function(){return Object(O.jsx)(b.Fragment,{children:Object(O.jsxs)("div",{className:q.a.main,children:[Object(O.jsxs)("div",{className:q.a.holder,children:[Object(O.jsx)("div",{className:q.a.headline,children:Object(O.jsx)("p",{children:"STATIONS ACTIVITES OVERVIEW"})}),Object(O.jsx)("div",{className:q.a.sales,children:Object(O.jsx)("p",{children:"SALES"})}),Object(O.jsx)("div",{children:Object(O.jsxs)("p",{children:["TRANSACTIO",Object(O.jsx)("br",{}),"N"]})}),Object(O.jsx)("div",{children:Object(O.jsxs)("p",{children:["VALUE",Object(O.jsx)("br",{})," E "]})}),Object(O.jsx)("div",{children:Object(O.jsx)("p",{children:"COMPREESION"})})]}),Object(O.jsx)("div",{className:q.a.bar,children:Object(O.jsx)(Y.a,{height:"100px",data:K})})]})})},ee=a(4),ce=a.n(ee),ae=a(34),se=a(12),te=a.n(se),je=function(){var e=Object(b.useState)(!0),c=Object(r.a)(e,2),a=c[0],s=c[1],t=Object(b.useState)(!0),j=Object(r.a)(t,2),n=j[0],i=j[1],l=Object(b.useState)(!0),o=Object(r.a)(l,2),d=o[0],x=o[1],h=Object(b.useState)(!1),m=Object(r.a)(h,2),p=m[0],u=m[1],_=Object(b.useState)(!1),N=Object(r.a)(_,2),v=N[0],f=N[1],g=Object(b.useState)(!1),k=Object(r.a)(g,2),C=k[0],S=k[1];return Object(O.jsx)(b.Fragment,{children:Object(O.jsxs)("div",{className:te.a.form,children:[Object(O.jsx)("p",{children:"View properties"}),Object(O.jsxs)("div",{className:te.a.main,children:[Object(O.jsxs)("div",{className:te.a.holder1,children:[Object(O.jsxs)("label",{className:te.a.check,children:["Dum",Object(O.jsx)("div",{onClick:function(){s(!a)},className:"".concat(te.a.checkmark," ").concat(a?te.a.checked:"")})]}),Object(O.jsxs)("label",{className:te.a.check,children:["Dum",Object(O.jsx)("div",{onClick:function(){i(!n)},className:"".concat(te.a.checkmark," ").concat(n?te.a.checked:"")})]}),Object(O.jsxs)("label",{className:te.a.check,children:["Dum",Object(O.jsx)("div",{onClick:function(){x(!d)},className:"".concat(te.a.checkmark," ").concat(d?te.a.checked:"")})]})]}),Object(O.jsxs)("div",{className:te.a.holder2,children:[Object(O.jsxs)("label",{className:te.a.check,children:["Dum",Object(O.jsx)("div",{onClick:function(){u(!p)},className:"".concat(te.a.checkmark," ").concat(p?te.a.checked:"")})]}),Object(O.jsxs)("label",{className:te.a.check,children:["Dum",Object(O.jsx)("div",{onClick:function(){f(!v)},className:"".concat(te.a.checkmark," ").concat(v?te.a.checked:"")})]}),Object(O.jsxs)("label",{className:te.a.check,children:["Dum",Object(O.jsx)("div",{onClick:function(){S(!C)},className:"".concat(te.a.checkmark," ").concat(C?te.a.checked:"")})]})]})]})]})})},re=function(){var e=Object(b.useState)(!1),c=Object(r.a)(e,2),a=c[0],s=c[1],t=Object(b.useState)(!1),j=Object(r.a)(t,2),n=j[0],i=j[1],l=Object(b.useState)(!1),o=Object(r.a)(l,2),d=o[0],x=o[1],h=Object(b.useState)(!1),m=Object(r.a)(h,2),p=m[0],u=m[1],_=Object(b.useState)(!1),N=Object(r.a)(_,2),v=N[0],f=N[1],g=Object(b.useState)(!1),k=Object(r.a)(g,2),S=k[0],w=k[1];return Object(O.jsx)(b.Fragment,{children:Object(O.jsxs)("div",{className:ce.a.main,children:[Object(O.jsxs)("form",{className:ce.a.first,children:[a&&Object(O.jsx)(je,{className:ce.a.check}),Object(O.jsxs)("div",{className:ce.a.form,children:[Object(O.jsxs)("div",{className:ce.a.cart,children:[Object(O.jsx)(ae.a,{onClick:function(){s(!a)},className:ce.a.option}),Object(O.jsx)(C.a,{className:ce.a.dot}),Object(O.jsx)(X.a,{className:ce.a.garage}),Object(O.jsxs)("p",{className:ce.a.cartp,children:["Beanch Name",Object(O.jsx)("br",{})," Alex"]})]}),Object(O.jsxs)("div",{className:ce.a.pholder,children:[Object(O.jsxs)("b",{children:["Total Sales ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Total Value"]}),Object(O.jsxs)("p",{children:["62 item ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"550 EGP"]}),Object(O.jsxs)("b",{children:["Compression State ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Max Transaction Count"]}),Object(O.jsxs)("p",{children:["Compressed",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"5161"]}),Object(O.jsxs)("b",{children:["Max Transaction Hour ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Max Transaction Date Time"]}),Object(O.jsxs)("p",{children:["20 ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"8-1-2021/10,16pm"]})]})]})]}),Object(O.jsxs)("form",{className:ce.a.first,children:[n&&Object(O.jsx)(je,{className:ce.a.check}),Object(O.jsxs)("div",{className:ce.a.form,children:[Object(O.jsxs)("div",{className:ce.a.cart,children:[Object(O.jsx)(ae.a,{onClick:function(){i(!n)},className:ce.a.option}),Object(O.jsx)(C.a,{className:ce.a.dot}),Object(O.jsx)(X.a,{className:ce.a.garage}),Object(O.jsxs)("p",{className:ce.a.cartp,children:["Branch Name",Object(O.jsx)("br",{})," Cairo"]})]}),Object(O.jsxs)("div",{className:ce.a.pholder,children:[Object(O.jsxs)("b",{children:["Total Sales ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Total Value"]}),Object(O.jsxs)("p",{children:["62 item ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"550 EGP"]}),Object(O.jsxs)("b",{children:["Compression State ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Max Transaction Count"]}),Object(O.jsxs)("p",{children:["Compressed",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"5161"]}),Object(O.jsxs)("b",{children:["Max Transaction Hour ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Max Transaction Date Time"]}),Object(O.jsxs)("p",{children:["20 ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"8-1-2021/10,16pm"]})]})]})]}),Object(O.jsxs)("form",{className:ce.a.first,children:[d&&Object(O.jsx)(je,{className:ce.a.check}),Object(O.jsxs)("div",{className:ce.a.form,children:[Object(O.jsxs)("div",{className:ce.a.cart,children:[Object(O.jsx)(ae.a,{onClick:function(){x(!d)},className:ce.a.option}),Object(O.jsx)(C.a,{className:ce.a.dot}),Object(O.jsx)(X.a,{className:ce.a.garage}),Object(O.jsxs)("p",{className:ce.a.cartp,children:["Branch Name",Object(O.jsx)("br",{})," Roma"]})]}),Object(O.jsxs)("div",{className:ce.a.pholder,children:[Object(O.jsxs)("b",{children:["Total Sales ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Total Value"]}),Object(O.jsxs)("p",{children:["62 item  ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"550 EGP"]}),Object(O.jsxs)("b",{children:["Compression State ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Max Transaction Count"]}),Object(O.jsxs)("p",{children:["Compressed",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"5161"]}),Object(O.jsxs)("b",{children:["Max Transaction Hour ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Max Transaction Date Time"]}),Object(O.jsxs)("p",{children:["20 ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"8-1-2021/10,16pm"]})]})]})]}),Object(O.jsxs)("form",{className:ce.a.first,children:[p&&Object(O.jsx)(je,{className:ce.a.check}),Object(O.jsxs)("div",{className:ce.a.form,children:[Object(O.jsxs)("div",{className:ce.a.cart,children:[Object(O.jsx)(ae.a,{onClick:function(){u(!p)},className:ce.a.option}),Object(O.jsx)(C.a,{className:ce.a.dot}),Object(O.jsx)(X.a,{className:ce.a.garage}),Object(O.jsxs)("p",{className:ce.a.cartp,children:["Branch Name",Object(O.jsx)("br",{})," Roma"]})]}),Object(O.jsxs)("div",{className:ce.a.pholder,children:[Object(O.jsxs)("b",{children:["Total Sales ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Total Value"]}),Object(O.jsxs)("p",{children:["62 item  ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"550 EGP"]}),Object(O.jsxs)("b",{children:["Compression State ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Max Transaction Count"]}),Object(O.jsxs)("p",{children:["Compressed",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"5161"]}),Object(O.jsxs)("b",{children:["Max Transaction Hour ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Max Transaction Date Time"]}),Object(O.jsxs)("p",{children:["20 ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"8-1-2021/10,16pm"]})]})]})]}),Object(O.jsxs)("form",{className:ce.a.first,children:[v&&Object(O.jsx)(je,{className:ce.a.check}),Object(O.jsxs)("div",{className:ce.a.form,children:[Object(O.jsxs)("div",{className:ce.a.cart,children:[Object(O.jsx)(ae.a,{onClick:function(){f(!v)},className:ce.a.option}),Object(O.jsx)(C.a,{className:ce.a.dot}),Object(O.jsx)(X.a,{className:ce.a.garage}),Object(O.jsxs)("p",{className:ce.a.cartp,children:["Branch Name",Object(O.jsx)("br",{})," Roma"]})]}),Object(O.jsxs)("div",{className:ce.a.pholder,children:[Object(O.jsxs)("b",{children:["Total Sales ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Total Value"]}),Object(O.jsxs)("p",{children:["62 item  ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"550 EGP"]}),Object(O.jsxs)("b",{children:["Compression State ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Max Transaction Count"]}),Object(O.jsxs)("p",{children:["Compressed",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"5161"]}),Object(O.jsxs)("b",{children:["Max Transaction Hour ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Max Transaction Date Time"]}),Object(O.jsxs)("p",{children:["20 ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"8-1-2021/10,16pm"]})]})]})]}),Object(O.jsxs)("form",{className:ce.a.first,children:[S&&Object(O.jsx)(je,{className:ce.a.check}),Object(O.jsxs)("div",{className:ce.a.form,children:[Object(O.jsxs)("div",{className:ce.a.cart,children:[Object(O.jsx)(ae.a,{onClick:function(){w(!S)},className:ce.a.option}),Object(O.jsx)(C.a,{className:ce.a.dot}),Object(O.jsx)(X.a,{className:ce.a.garage}),Object(O.jsxs)("p",{className:ce.a.cartp,children:["Branch Name",Object(O.jsx)("br",{})," Roma"]})]}),Object(O.jsxs)("div",{className:ce.a.pholder,children:[Object(O.jsxs)("b",{children:["Total Sales ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Total Value"]}),Object(O.jsxs)("p",{children:["62 item  ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"550 EGP"]}),Object(O.jsxs)("b",{children:["Compression State ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Max Transaction Count"]}),Object(O.jsxs)("p",{children:["Compressed",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"5161"]}),Object(O.jsxs)("b",{children:["Max Transaction Hour ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"Max Transaction Date Time"]}),Object(O.jsxs)("p",{children:["20 ",Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),"8-1-2021/10,16pm"]})]})]})]})]})})},ne=function(){var e=Object(b.useState)(!0),c=Object(r.a)(e,2),a=c[0],s=c[1],t=Object(b.useState)(!0),j=Object(r.a)(t,2),n=j[0],i=j[1];return Object(O.jsx)("div",{className:_.a.body,children:Object(O.jsxs)(y,{children:[Object(O.jsx)(D,{}),Object(O.jsx)(H,{}),Object(O.jsxs)("div",{className:_.a.alpha,children:[Object(O.jsxs)(A.a,{className:_.a.first,children:[Object(O.jsxs)(I.a,{children:[Object(O.jsxs)(M.a,{className:_.a.col1,children:[Object(O.jsx)("p",{className:_.a.headline,children:"71.028 EGP"}),Object(O.jsx)("p",{children:"Total Value"}),Object(O.jsxs)("div",{className:_.a.downiconholder,children:[Object(O.jsx)(g.c,{className:_.a.downicon}),Object(O.jsx)("p",{children:"2%"})]})]}),Object(O.jsxs)(M.a,{className:_.a.col2,children:[Object(O.jsx)("p",{className:_.a.headline,children:"20.000 shoe"}),Object(O.jsx)("p",{children:"Total Sales"}),Object(O.jsxs)("div",{className:_.a.upiconholder,children:[Object(O.jsx)(g.c,{className:_.a.upicon}),Object(O.jsx)("p",{children:"%5 "})]})]}),Object(O.jsxs)(M.a,{className:_.a.col3,children:[Object(O.jsx)("p",{className:_.a.headline,children:"20.000 shoe"}),Object(O.jsx)("p",{children:"Avg Sales"}),Object(O.jsxs)("div",{className:_.a.downiconholder,children:[Object(O.jsx)(g.c,{className:_.a.downicon}),Object(O.jsx)("p",{children:"%5"})]})]}),Object(O.jsxs)(M.a,{className:_.a.col4,children:[Object(O.jsx)("p",{className:_.a.headline,children:"1567"}),Object(O.jsx)("p",{children:"Total Transaction"}),Object(O.jsxs)("div",{className:_.a.upiconholder,children:[Object(O.jsx)(g.c,{className:_.a.upicon}),Object(O.jsx)("p",{children:"20%"})]})]})]}),Object(O.jsxs)(I.a,{children:[Object(O.jsxs)("div",{className:_.a.switchholder,children:[Object(O.jsxs)("div",{onClick:function(){s(!1),i(!1)},className:"".concat(_.a.switch1," ").concat(a?"":_.a.active),children:[Object(O.jsx)(g.a,{}),"List"]}),Object(O.jsxs)("div",{onClick:function(){s(!0),i(!0)},className:"".concat(_.a.switch2," ").concat(a?_.a.active:""),children:[Object(O.jsx)(f.b,{}),"Graph"]})]}),Object(O.jsxs)(M.a,{children:[!n&&Object(O.jsx)(re,{}),n&&Object(O.jsx)(Q,{})]})]})]}),Object(O.jsxs)(A.a,{children:[Object(O.jsx)(I.a,{children:Object(O.jsx)(M.a,{className:_.a.radarholder,children:Object(O.jsxs)("div",{className:_.a.radar,children:[Object(O.jsx)("p",{children:"Hourly Sales"}),Object(O.jsx)(U,{})]})})}),Object(O.jsx)(I.a,{children:Object(O.jsx)(M.a,{children:Object(O.jsx)(J,{})})})]})]})]})})};var ie=function(){var e=Object(b.useContext)(m);return Object(O.jsx)("div",{children:Object(O.jsxs)(d.d,{children:[Object(O.jsx)(d.b,{path:"/",exact:!0,children:Object(O.jsx)(d.a,{to:"/register"})}),e.islogged&&Object(O.jsx)(d.b,{path:"/home",children:Object(O.jsx)(ne,{})}),!e.islogged&&Object(O.jsx)(d.b,{path:"/register",children:Object(O.jsx)(p,{})}),!e.islogged&&Object(O.jsx)(d.b,{path:"*",children:Object(O.jsx)(d.a,{to:"/register"})}),e.islogged&&Object(O.jsx)(d.b,{path:"*",children:Object(O.jsx)(d.a,{to:"/home"})})]})})};t.a.render(Object(O.jsx)(h,{children:Object(O.jsx)(j.a,{children:Object(O.jsx)(ie,{})})}),document.getElementById("root"))},23:function(e,c,a){e.exports={container:"horzinchart_container__1HqPs",progress:"horzinchart_progress__1YpCn",holder:"horzinchart_holder__1frhq",headline:"horzinchart_headline__NULgy"}},26:function(e,c,a){e.exports={nav:"sidenav_nav__1CLGy",hide:"sidenav_hide__1EaR9",water:"sidenav_water__2gH-O",home:"sidenav_home__pkoGT",holder:"sidenav_holder__2VO8R",logout:"sidenav_logout__25JDj",store:"sidenav_store__33RK2"}},4:function(e,c,a){e.exports={main:"cart_main__bxCsR",first:"cart_first__23HjM",form:"cart_form__1p_RD",cart:"cart_cart__1om7T",dot:"cart_dot__3p9QM",garage:"cart_garage__1XE5-",cartp:"cart_cartp__2WQuX",pholder:"cart_pholder__1vA2n",option:"cart_option__7VFPN",span:"cart_span__19FYR"}},40:function(e,c,a){e.exports={main:"vertchart_main__2Nsy-",holder:"vertchart_holder__399_O",headline:"vertchart_headline__3OXnq",sales:"vertchart_sales__3oAwr",bar:"vertchart_bar__15Dg3"}},9:function(e,c,a){e.exports={form:"register_form__1n8Nm",headline:"register_headline__33XWj",headlinetext:"register_headlinetext__wkyPr",forminput:"register_forminput__10i8E",forminputholder:"register_forminputholder__t5fvk",forminput2:"register_forminput2__1OOFt",btn:"register_btn__1PYlq",invalid:"register_invalid__3ZiPh",disable:"register_disable__M-iAa"}}},[[227,1,2]]]);
//# sourceMappingURL=main.bfa9ce23.chunk.js.map