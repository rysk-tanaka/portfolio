import{_ as z}from"./po3HtdlH.js";import{_ as D}from"./9nMkwPtC.js";import{d as S,i as n,E as q,w as V,e as s,g as _,t as d,ai as L,af as T,r as x,y as U,A as E,B as I,z as y,c as i,D as o,n as b,bp as W,F as $,am as C,f as k,bq as F}from"./Ds1CwBWe.js";import{r as A}from"./BUJwl-7y.js";import{u as M}from"./DonoYr53.js";import{q as O}from"./CEu3HWjv.js";import"./DlAUqK2U.js";const G={class:"overflow-hidden rounded-md border border-white/10 shadow-md shadow-zinc-950/50 transition-colors duration-200 hover:border-white/20"},P={class:"flex flex-col"},R={class:"text-lg font-semibold"},H={class:"text-xs text-muted"},J=S({__name:"ArticleCard",props:{title:{type:String,required:!0},date:{type:String,required:!0},image:{type:String,required:!0},path:{type:String,required:!0}},setup(r){return(u,h)=>{const l=L,c=T;return n(),q(c,{to:r.path,"aria-label":r.title,class:"flex cursor-pointer flex-col gap-2"},{default:V(()=>[s("div",G,[_(l,{width:"1536",alt:`${r.title} article image`,class:"h-64 w-full object-cover transition-transform duration-200 hover:scale-105",src:r.image,"aria-label":`${r.title} article image`},null,8,["alt","src","aria-label"])]),s("div",P,[s("h3",R,d(r.title),1),s("span",H,d(r.date),1)])]),_:1},8,["to","aria-label"])}}}),K=Object.assign(J,{__name:"ArticleCard"}),Q={class:"mx-auto mt-4 flex max-w-4xl flex-col p-7 sm:mt-20"},X={class:"font-newsreader italic text-white-shadow text-center text-4xl"},Y={class:"text-center text-lg font-extralight italic text-muted"},Z={key:0,class:"mb-4 flex flex-col gap-2"},tt={class:"my-4"},et={key:0,class:"mb-4 flex flex-wrap gap-2"},st=["onClick"],at={class:"font-extralight"},ot={key:2,class:"flex h-64 flex-col items-center justify-center gap-2"},nt={class:"text-2xl"},lt={class:"text-sm"},rt=S({__name:"Writing",async setup(r){let u,h;const l=x([]),c=x(""),m=x(!1),{locale:p}=U(),{data:f}=([u,h]=E(async()=>M("articles-"+p.value,async()=>{const t="articles_"+p.value;return await O(t).all()},{watch:[p]})),u=await u,h(),u);if(!f.value)throw I({statusCode:404,statusMessage:"Page not found"});const w=y(()=>{var t;return Array.from(new Set((t=f.value)==null?void 0:t.flatMap(a=>a.tags)))}),v=y(()=>{var t;return((t=f.value)==null?void 0:t.filter(a=>(l.value.length===0||l.value.some(g=>a.tags.includes(g)))&&(c.value===""||a.title.toLowerCase().includes(c.value.toLowerCase()))))??[]}),B=t=>{l.value=l.value.includes(t)?l.value.filter(a=>a!==t):[...l.value,t]};return(t,a)=>{const g=z,N=D,j=K;return n(),i("section",Q,[s("h1",X,[A(t.$slots,"title",{mdcUnwrap:"p"})]),s("h2",Y,[A(t.$slots,"subtitle",{mdcUnwrap:"p"})]),_(g,{class:"mb-8 mt-2"}),s("div",{class:b(o(m)?"":"mb-3")},[s("span",{class:"font-newsreader italic text-white-shadow cursor-pointer select-none text-lg",onClick:a[0]||(a[0]=e=>m.value=!o(m))},d(o(m)?t.$t("writing.hide_search"):t.$t("writing.show_search")),1)],2),o(m)?(n(),i("div",Z,[s("div",tt,[_(N,{modelValue:o(c),"onUpdate:modelValue":a[1]||(a[1]=e=>W(c)?c.value=e:null),class:"w-full sm:w-96",placeholder:t.$t("writing.search_article")},null,8,["modelValue","placeholder"])]),o(w).length>0?(n(),i("div",et,[(n(!0),i($,null,C(o(w),e=>(n(),i("div",{key:e,class:b(["hover:text-shadow-md flex cursor-pointer select-none items-center rounded-md bg-neutral-800 px-2 py-1 text-xs transition-colors duration-100 text-shadow-sm hover:bg-neutral-700 sm:text-sm",{"bg-zinc-700":o(l).includes(e)}]),onClick:it=>B(e)},[s("div",at,d(e),1)],10,st))),128))])):k("",!0)])):k("",!0),o(v).length?(n(),q(F,{key:1,name:"list",tag:"ul",class:"grid grid-cols-1 gap-4 sm:grid-cols-2"},{default:V(()=>[(n(!0),i($,null,C(o(v),e=>(n(),i("li",{key:e.path},[_(j,{title:e.title,date:e.date,image:e.image,path:e.path},null,8,["title","date","image","path"])]))),128))]),_:1})):(n(),i("div",ot,[s("span",nt,d(t.$t("writing.not_found")),1),s("span",lt,d(t.$t("writing.not_found_description")),1)]))])}}}),ft=Object.assign(rt,{__name:"Writing"});export{ft as default};
