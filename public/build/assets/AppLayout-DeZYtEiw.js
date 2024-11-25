import{o as s,e as n,a as e,Q as F,d as _,q as N,n as c,f as p,t as k,i as $,s as P,x as D,k as j,r as m,y as M,u as h,l as T,z as L,b as g,w as l,A as E,c as y,j as C,Z as O,g as f,F as w,h as B,B as z}from"./app-BpqPGjsu.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";const I={},R={viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"};function q(u,i){return s(),n("svg",R,i[0]||(i[0]=[e("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"},null,-1),e("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"},null,-1)]))}const H=V(I,[["render",q]]),Q={class:"max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8"},U={class:"flex items-center justify-between flex-wrap"},Z={class:"w-0 flex-1 flex items-center min-w-0"},G={key:0,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},J={key:1,class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},K={class:"ms-3 font-medium text-sm text-white truncate"},W={class:"shrink-0 sm:ms-3"},X={__name:"Banner",setup(u){const i=F(),o=_(!0),d=_("success"),r=_("");return N(async()=>{var t,a;d.value=((t=i.props.jetstream.flash)==null?void 0:t.bannerStyle)||"success",r.value=((a=i.props.jetstream.flash)==null?void 0:a.banner)||"",o.value=!0}),(t,a)=>(s(),n("div",null,[o.value&&r.value?(s(),n("div",{key:0,class:c({"bg-indigo-500":d.value=="success","bg-red-700":d.value=="danger"})},[e("div",Q,[e("div",U,[e("div",Z,[e("span",{class:c(["flex p-2 rounded-lg",{"bg-indigo-600":d.value=="success","bg-red-600":d.value=="danger"}])},[d.value=="success"?(s(),n("svg",G,a[1]||(a[1]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))):p("",!0),d.value=="danger"?(s(),n("svg",J,a[2]||(a[2]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"},null,-1)]))):p("",!0)],2),e("p",K,k(r.value),1)]),e("div",W,[e("button",{type:"button",class:c(["-me-1 flex p-2 rounded-md focus:outline-none sm:-me-2 transition",{"hover:bg-indigo-600 focus:bg-indigo-600":d.value=="success","hover:bg-red-600 focus:bg-red-600":d.value=="danger"}]),"aria-label":"Dismiss",onClick:a[0]||(a[0]=$(v=>o.value=!1,["prevent"]))},a[3]||(a[3]=[e("svg",{class:"h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M6 18L18 6M6 6l12 12"})],-1)]),2)])])])],2)):p("",!0)]))}},Y={class:"relative"},A={__name:"Dropdown",props:{align:{type:String,default:"right"},width:{type:String,default:"48"},contentClasses:{type:Array,default:()=>["py-1","bg-white dark:bg-gray-700"]}},setup(u){const i=u;let o=_(!1);const d=a=>{o.value&&a.key==="Escape"&&(o.value=!1)};P(()=>document.addEventListener("keydown",d)),D(()=>document.removeEventListener("keydown",d));const r=j(()=>({48:"w-48"})[i.width.toString()]),t=j(()=>i.align==="left"?"ltr:origin-top-left rtl:origin-top-right start-0":i.align==="right"?"ltr:origin-top-right rtl:origin-top-left end-0":"origin-top");return(a,v)=>(s(),n("div",Y,[e("div",{onClick:v[0]||(v[0]=S=>M(o)?o.value=!h(o):o=!h(o))},[m(a.$slots,"trigger")]),T(e("div",{class:"fixed inset-0 z-40",onClick:v[1]||(v[1]=S=>M(o)?o.value=!1:o=!1)},null,512),[[L,h(o)]]),g(E,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:l(()=>[T(e("div",{class:c(["absolute z-50 mt-2 rounded-md shadow-lg",[r.value,t.value]]),style:{display:"none"},onClick:v[2]||(v[2]=S=>M(o)?o.value=!1:o=!1)},[e("div",{class:c(["rounded-md ring-1 ring-black ring-opacity-5",u.contentClasses])},[m(a.$slots,"content")],2)],2),[[L,h(o)]])]),_:3})]))}},ee={key:0,type:"submit",class:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},te=["href"],x={__name:"DropdownLink",props:{href:String,as:String},setup(u){return(i,o)=>(s(),n("div",null,[u.as=="button"?(s(),n("button",ee,[m(i.$slots,"default")])):u.as=="a"?(s(),n("a",{key:1,href:u.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},[m(i.$slots,"default")],8,te)):(s(),y(h(C),{key:2,href:u.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-800 transition duration-150 ease-in-out"},{default:l(()=>[m(i.$slots,"default")]),_:3},8,["href"]))]))}},re={__name:"NavLink",props:{href:String,active:Boolean},setup(u){const i=u,o=j(()=>i.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 dark:border-indigo-600 text-sm font-medium leading-5 text-gray-900 dark:text-gray-100 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700 focus:outline-none focus:text-gray-700 dark:focus:text-gray-300 focus:border-gray-300 dark:focus:border-gray-700 transition duration-150 ease-in-out");return(d,r)=>(s(),y(h(C),{href:u.href,class:c(o.value)},{default:l(()=>[m(d.$slots,"default")]),_:3},8,["href","class"]))}},se=["href"],b={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(u){const i=u,o=j(()=>i.active?"block w-full ps-3 pe-4 py-2 border-l-4 border-indigo-400 dark:border-indigo-600 text-start text-base font-medium text-indigo-700 dark:text-indigo-300 bg-indigo-50 dark:bg-indigo-900/50 focus:outline-none focus:text-indigo-800 dark:focus:text-indigo-200 focus:bg-indigo-100 dark:focus:bg-indigo-900 focus:border-indigo-700 dark:focus:border-indigo-300 transition duration-150 ease-in-out":"block w-full ps-3 pe-4 py-2 border-l-4 border-transparent text-start text-base font-medium text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 focus:outline-none focus:text-gray-800 dark:focus:text-gray-200 focus:bg-gray-50 dark:focus:bg-gray-700 focus:border-gray-300 dark:focus:border-gray-600 transition duration-150 ease-in-out");return(d,r)=>(s(),n("div",null,[u.as=="button"?(s(),n("button",{key:0,class:c([o.value,"w-full text-start"])},[m(d.$slots,"default")],2)):u.as=="a"?(s(),n("a",{key:1,class:c([o.value,"w-full text-start"]),href:u.href},[m(d.$slots,"default")],10,se)):(s(),y(h(C),{key:2,href:u.href,class:c(o.value)},{default:l(()=>[m(d.$slots,"default")]),_:3},8,["href","class"]))]))}},oe={class:"min-h-screen bg-gray-100 dark:bg-gray-900"},ae={class:"bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"},ne={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},ie={class:"flex justify-between h-16"},le={class:"flex"},de={class:"shrink-0 flex items-center"},ue={class:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex"},ge={class:"hidden sm:flex sm:items-center sm:ms-6"},pe={class:"ms-3 relative"},fe={class:"inline-flex rounded-md"},ce={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"},me={class:"w-60"},ve=["onSubmit"],he={class:"flex items-center"},ye={key:0,class:"me-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},be={class:"ms-3 relative"},ke={key:0,class:"flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"},xe=["src","alt"],we={key:1,class:"inline-flex rounded-md"},$e={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none focus:bg-gray-50 dark:focus:bg-gray-700 active:bg-gray-50 dark:active:bg-gray-700 transition ease-in-out duration-150"},_e={class:"-me-2 flex items-center sm:hidden"},je={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},Ce={class:"pt-2 pb-3 space-y-1"},Me={class:"pt-4 pb-1 border-t border-gray-200 dark:border-gray-600"},Se={class:"flex items-center px-4"},Te={key:0,class:"shrink-0 me-3"},Le=["src","alt"],Be={class:"font-medium text-base text-gray-800 dark:text-gray-200"},ze={class:"font-medium text-sm text-gray-500"},Ae={class:"mt-3 space-y-1"},Fe=["onSubmit"],Ne={class:"flex items-center"},Pe={key:0,class:"me-2 h-5 w-5 text-green-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},De={key:0,class:"bg-white dark:bg-gray-800 shadow"},Ee={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},Ie={__name:"AppLayout",props:{title:String},setup(u){const i=_(!1),o=r=>{z.put(route("current-team.update"),{team_id:r.id},{preserveState:!1})},d=()=>{z.post(route("logout"))};return(r,t)=>(s(),n("div",null,[g(h(O),{title:u.title},null,8,["title"]),g(X),e("div",oe,[e("nav",ae,[e("div",ne,[e("div",ie,[e("div",le,[e("div",de,[g(h(C),{href:r.route("dashboard")},{default:l(()=>[g(H,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",ue,[g(re,{href:r.route("dashboard"),active:r.route().current("dashboard")},{default:l(()=>t[1]||(t[1]=[f(" Dashboard ")])),_:1},8,["href","active"])])]),e("div",ge,[e("div",pe,[r.$page.props.jetstream.hasTeamFeatures?(s(),y(A,{key:0,align:"right",width:"60"},{trigger:l(()=>[e("span",fe,[e("button",ce,[f(k(r.$page.props.auth.user.current_team.name)+" ",1),t[2]||(t[2]=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"})],-1))])])]),content:l(()=>[e("div",me,[t[8]||(t[8]=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1)),g(x,{href:r.route("teams.show",r.$page.props.auth.user.current_team)},{default:l(()=>t[3]||(t[3]=[f(" Team Settings ")])),_:1},8,["href"]),r.$page.props.jetstream.canCreateTeams?(s(),y(x,{key:0,href:r.route("teams.create")},{default:l(()=>t[4]||(t[4]=[f(" Create New Team ")])),_:1},8,["href"])):p("",!0),r.$page.props.auth.user.all_teams.length>1?(s(),n(w,{key:1},[t[6]||(t[6]=e("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),t[7]||(t[7]=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1)),(s(!0),n(w,null,B(r.$page.props.auth.user.all_teams,a=>(s(),n("form",{key:a.id,onSubmit:$(v=>o(a),["prevent"])},[g(x,{as:"button"},{default:l(()=>[e("div",he,[a.id==r.$page.props.auth.user.current_team_id?(s(),n("svg",ye,t[5]||(t[5]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))):p("",!0),e("div",null,k(a.name),1)])]),_:2},1024)],40,ve))),128))],64)):p("",!0)])]),_:1})):p("",!0)]),e("div",be,[g(A,{align:"right",width:"48"},{trigger:l(()=>[r.$page.props.jetstream.managesProfilePhotos?(s(),n("button",ke,[e("img",{class:"h-8 w-8 rounded-full object-cover",src:r.$page.props.auth.user.profile_photo_url,alt:r.$page.props.auth.user.name},null,8,xe)])):(s(),n("span",we,[e("button",$e,[f(k(r.$page.props.auth.user.name)+" ",1),t[9]||(t[9]=e("svg",{class:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"})],-1))])]))]),content:l(()=>[t[13]||(t[13]=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Account ",-1)),g(x,{href:r.route("profile.show")},{default:l(()=>t[10]||(t[10]=[f(" Profile ")])),_:1},8,["href"]),r.$page.props.jetstream.hasApiFeatures?(s(),y(x,{key:0,href:r.route("api-tokens.index")},{default:l(()=>t[11]||(t[11]=[f(" API Tokens ")])),_:1},8,["href"])):p("",!0),t[14]||(t[14]=e("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),e("form",{onSubmit:$(d,["prevent"])},[g(x,{as:"button"},{default:l(()=>t[12]||(t[12]=[f(" Log Out ")])),_:1})],32)]),_:1})])]),e("div",_e,[e("button",{class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out",onClick:t[0]||(t[0]=a=>i.value=!i.value)},[(s(),n("svg",je,[e("path",{class:c({hidden:i.value,"inline-flex":!i.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:c({hidden:!i.value,"inline-flex":i.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:c([{block:i.value,hidden:!i.value},"sm:hidden"])},[e("div",Ce,[g(b,{href:r.route("dashboard"),active:r.route().current("dashboard")},{default:l(()=>t[15]||(t[15]=[f(" Dashboard ")])),_:1},8,["href","active"])]),e("div",Me,[e("div",Se,[r.$page.props.jetstream.managesProfilePhotos?(s(),n("div",Te,[e("img",{class:"h-10 w-10 rounded-full object-cover",src:r.$page.props.auth.user.profile_photo_url,alt:r.$page.props.auth.user.name},null,8,Le)])):p("",!0),e("div",null,[e("div",Be,k(r.$page.props.auth.user.name),1),e("div",ze,k(r.$page.props.auth.user.email),1)])]),e("div",Ae,[g(b,{href:r.route("profile.show"),active:r.route().current("profile.show")},{default:l(()=>t[16]||(t[16]=[f(" Profile ")])),_:1},8,["href","active"]),r.$page.props.jetstream.hasApiFeatures?(s(),y(b,{key:0,href:r.route("api-tokens.index"),active:r.route().current("api-tokens.index")},{default:l(()=>t[17]||(t[17]=[f(" API Tokens ")])),_:1},8,["href","active"])):p("",!0),e("form",{method:"POST",onSubmit:$(d,["prevent"])},[g(b,{as:"button"},{default:l(()=>t[18]||(t[18]=[f(" Log Out ")])),_:1})],32),r.$page.props.jetstream.hasTeamFeatures?(s(),n(w,{key:1},[t[24]||(t[24]=e("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),t[25]||(t[25]=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Manage Team ",-1)),g(b,{href:r.route("teams.show",r.$page.props.auth.user.current_team),active:r.route().current("teams.show")},{default:l(()=>t[19]||(t[19]=[f(" Team Settings ")])),_:1},8,["href","active"]),r.$page.props.jetstream.canCreateTeams?(s(),y(b,{key:0,href:r.route("teams.create"),active:r.route().current("teams.create")},{default:l(()=>t[20]||(t[20]=[f(" Create New Team ")])),_:1},8,["href","active"])):p("",!0),r.$page.props.auth.user.all_teams.length>1?(s(),n(w,{key:1},[t[22]||(t[22]=e("div",{class:"border-t border-gray-200 dark:border-gray-600"},null,-1)),t[23]||(t[23]=e("div",{class:"block px-4 py-2 text-xs text-gray-400"}," Switch Teams ",-1)),(s(!0),n(w,null,B(r.$page.props.auth.user.all_teams,a=>(s(),n("form",{key:a.id,onSubmit:$(v=>o(a),["prevent"])},[g(b,{as:"button"},{default:l(()=>[e("div",Ne,[a.id==r.$page.props.auth.user.current_team_id?(s(),n("svg",Pe,t[21]||(t[21]=[e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},null,-1)]))):p("",!0),e("div",null,k(a.name),1)])]),_:2},1024)],40,Fe))),128))],64)):p("",!0)],64)):p("",!0)])])],2)]),r.$slots.header?(s(),n("header",De,[e("div",Ee,[m(r.$slots,"header")])])):p("",!0),e("main",null,[m(r.$slots,"default")])])]))}};export{Ie as _};
