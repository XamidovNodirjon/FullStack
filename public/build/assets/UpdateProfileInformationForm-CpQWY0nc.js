import{T as U,d as f,c as P,w as l,o as c,g as n,e as x,a as r,b as t,l as p,z as v,G as j,i as g,f as h,u as s,j as E,n as F,B as z}from"./app-BpqPGjsu.js";import{_ as A}from"./ActionMessage-CSkMQrMe.js";import{_ as R}from"./FormSection-DOJgjxOa.js";import{a as _,_ as S}from"./TextInput-C3dsV8Sg.js";import{_ as k}from"./InputLabel-DPGHUCxG.js";import{_ as T}from"./PrimaryButton-Az23g2FP.js";import{_ as V}from"./SecondaryButton-DRt9i2ux.js";import"./SectionTitle-DjvvGNWU.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const q={key:0,class:"col-span-6 sm:col-span-4"},D={class:"mt-2"},L=["src","alt"],G={class:"mt-2"},M={class:"col-span-6 sm:col-span-4"},O={class:"col-span-6 sm:col-span-4"},Y={key:0},H={class:"text-sm mt-2 dark:text-white"},J={class:"mt-2 font-medium text-sm text-green-600 dark:text-green-400"},ae={__name:"UpdateProfileInformationForm",props:{user:Object},setup(u){const y=u,o=U({_method:"PUT",name:y.user.name,email:y.user.email,photo:null}),b=f(null),m=f(null),i=f(null),$=()=>{i.value&&(o.photo=i.value.files[0]),o.post(route("user-profile-information.update"),{errorBag:"updateProfileInformation",preserveScroll:!0,onSuccess:()=>w()})},C=()=>{b.value=!0},I=()=>{i.value.click()},N=()=>{const a=i.value.files[0];if(!a)return;const e=new FileReader;e.onload=d=>{m.value=d.target.result},e.readAsDataURL(a)},B=()=>{z.delete(route("current-user-photo.destroy"),{preserveScroll:!0,onSuccess:()=>{m.value=null,w()}})},w=()=>{var a;(a=i.value)!=null&&a.value&&(i.value.value=null)};return(a,e)=>(c(),P(R,{onSubmitted:$},{title:l(()=>e[2]||(e[2]=[n(" Profile Information ")])),description:l(()=>e[3]||(e[3]=[n(" Update your account's profile information and email address. ")])),form:l(()=>[a.$page.props.jetstream.managesProfilePhotos?(c(),x("div",q,[r("input",{id:"photo",ref_key:"photoInput",ref:i,type:"file",class:"hidden",onChange:N},null,544),t(k,{for:"photo",value:"Photo"}),p(r("div",D,[r("img",{src:u.user.profile_photo_url,alt:u.user.name,class:"rounded-full h-20 w-20 object-cover"},null,8,L)],512),[[v,!m.value]]),p(r("div",G,[r("span",{class:"block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center",style:j("background-image: url('"+m.value+"');")},null,4)],512),[[v,m.value]]),t(V,{class:"mt-2 me-2",type:"button",onClick:g(I,["prevent"])},{default:l(()=>e[4]||(e[4]=[n(" Select A New Photo ")])),_:1}),u.user.profile_photo_path?(c(),P(V,{key:0,type:"button",class:"mt-2",onClick:g(B,["prevent"])},{default:l(()=>e[5]||(e[5]=[n(" Remove Photo ")])),_:1})):h("",!0),t(_,{message:s(o).errors.photo,class:"mt-2"},null,8,["message"])])):h("",!0),r("div",M,[t(k,{for:"name",value:"Name"}),t(S,{id:"name",modelValue:s(o).name,"onUpdate:modelValue":e[0]||(e[0]=d=>s(o).name=d),type:"text",class:"mt-1 block w-full",required:"",autocomplete:"name"},null,8,["modelValue"]),t(_,{message:s(o).errors.name,class:"mt-2"},null,8,["message"])]),r("div",O,[t(k,{for:"email",value:"Email"}),t(S,{id:"email",modelValue:s(o).email,"onUpdate:modelValue":e[1]||(e[1]=d=>s(o).email=d),type:"email",class:"mt-1 block w-full",required:"",autocomplete:"username"},null,8,["modelValue"]),t(_,{message:s(o).errors.email,class:"mt-2"},null,8,["message"]),a.$page.props.jetstream.hasEmailVerification&&u.user.email_verified_at===null?(c(),x("div",Y,[r("p",H,[e[7]||(e[7]=n(" Your email address is unverified. ")),t(s(E),{href:a.route("verification.send"),method:"post",as:"button",class:"underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800",onClick:g(C,["prevent"])},{default:l(()=>e[6]||(e[6]=[n(" Click here to re-send the verification email. ")])),_:1},8,["href"])]),p(r("div",J," A new verification link has been sent to your email address. ",512),[[v,b.value]])])):h("",!0)])]),actions:l(()=>[t(A,{on:s(o).recentlySuccessful,class:"me-3"},{default:l(()=>e[8]||(e[8]=[n(" Saved. ")])),_:1},8,["on"]),t(T,{class:F({"opacity-25":s(o).processing}),disabled:s(o).processing},{default:l(()=>e[9]||(e[9]=[n(" Save ")])),_:1},8,["class","disabled"])]),_:1}))}};export{ae as default};
