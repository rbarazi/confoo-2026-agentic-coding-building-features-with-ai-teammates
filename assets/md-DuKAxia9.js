import{_ as r}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BPrfSoUU.js";import{o as p,b as h,w as a,g as s,d,m as k,ad as e,v as c,x as m,T as n}from"./modules/vue-CM98HKZF.js";import{I as g}from"./slidev/default-pDdhSGFi.js";import{u,f as A}from"./slidev/context-CkvOd7CY.js";import"./modules/unplugin-icons-b-v2MvP3.js";import"./index-BEBd6vnw.js";import"./modules/shiki-Cj2EYsFF.js";const P={__name:"slides.md__slidev_11",setup(f){const{$clicksContext:t,$frontmatter:l}=u();return t.setup(),(E,i)=>{const o=r;return p(),h(g,c(m(n(A)(n(l),10))),{default:a(()=>[i[1]||(i[1]=s("h1",null,"How my prompts evolved",-1)),i[2]||(i[2]=s("p",null,[s("strong",null,"Phase 3: The convincing argument")],-1)),d(o,k({},{title:"",ranges:[]}),{default:a(()=>[...i[0]||(i[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-markdown"},[s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"We need to add support for OpenAI's Responses API.")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"Context: our LLMProvider abstraction lets us swap providers")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"without changing the Task model. Each provider implements")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"send_message, and right now they all work the same way.")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"The Responses API breaks that assumption. It's stateful.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"OpenAI holds the conversation server-side.")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"Constraint: session logic should only affect OpenAIProvider.")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"The others still work statelessly.")]),e(`
`),s("span",{class:"line"}),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"Before you start coding, write a plan to")]),e(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-dark":"#DBD7CAEE","--shiki-light":"#393A34"}},"docs/backlog/openai_responses_api.md")])])],-1)])]),_:1},16)]),_:1},16)}}};export{P as default};
