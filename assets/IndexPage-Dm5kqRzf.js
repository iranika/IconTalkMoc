import{l as d,i,u as n,v as g,N as f,c,h,g as _,_ as x,R as y,S as m,U as v,Z as $}from"./index-CnqsgHmq.js";import{h as C}from"./render-BPemA-yY.js";const P=d({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(s,{slots:a}){const{proxy:{$q:t}}=_(),e=i(g,n);if(e===n)return console.error("QPage needs to be a deep child of QLayout"),n;if(i(f,n)===n)return console.error("QPage needs to be child of QPageContainer"),n;const o=c(()=>{const r=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof s.styleFn=="function"){const p=e.isContainer.value===!0?e.containerHeight.value:t.screen.height;return s.styleFn(r,p)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-r+"px":t.screen.height===0?r!==0?`calc(100vh - ${r}px)`:"100vh":t.screen.height-r+"px"}}),u=c(()=>`q-page${s.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:u.value,style:o.value},C(a.default))}}),Q="/assets/quasar-logo-vertical-Dh1dpsZJ.svg",F={__name:"IndexPage",setup(s,{expose:a}){a();const t={};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}};function b(s,a,t,e,l,o){return y(),m(P,{class:"flex flex-center"},{default:v(()=>a[0]||(a[0]=[$("img",{alt:"Quasar logo",src:Q,style:{width:"200px",height:"200px"}},null,-1)])),_:1})}const I=x(F,[["render",b],["__file","IndexPage.vue"]]);export{I as default};