import{f as n,o as a,c as s,g as t,h as p,b as e,u as o,y as l,S as c,D as u,L as i,z as k,i as r,e as g,d}from"./app.c1d33732.js";const h=g('',12),m=g('',3),v=e("p",null,[d(" with extra class "),e("b",null,"is-loading"),d(", your icon is able to rotate 360 deg in 2 seconds, you can also override this ")],-1),y={style:{display:"flex","align-items":"center","justify-content":"space-between",width:"100%"}},_=e("span",{style:{"vertical-align":"middle"}}," Search ",-1),b=g('',2),f={style:{"font-size":"20px"}},q={id:"svgicon-使用方法-available-1-0-2-beta-66",tabindex:"-1"},S=d("SvgIcon 使用方法 "),T=d("Available >= 1.0.2-beta.66"),I=d(),x=e("a",{class:"header-anchor",href:"#svgicon-使用方法-available-1-0-2-beta-66","aria-hidden":"true"},"#",-1),w=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"TIP"),e("p",null,[e("strong",null,"You can use SVG icon in any version"),d(" as long as you install it")]),e("p",null,[e("strong",null,"You can click the icon to copy it")])],-1),V=g('',2),A='{"title":"图标集合","description":"","frontmatter":{},"headers":[{"level":2,"title":"Icon 图标","slug":"icon-图标"},{"level":2,"title":"Installation","slug":"installation"},{"level":2,"title":"Using packaging manager","slug":"using-packaging-manager"},{"level":2,"title":"基础用法","slug":"基础用法"},{"level":2,"title":"结合 el-icon 使用","slug":"结合-el-icon-使用"},{"level":2,"title":"直接使用 SVG icon","slug":"直接使用-svg-icon"},{"level":3,"title":"SvgIcon 使用方法","slug":"svgicon-使用方法-available-1-0-2-beta-66"},{"level":3,"title":"Font Icon 使用方法","slug":"font-icon-使用方法"}],"relativePath":"zh-CN/component/icon.md","lastUpdated":1631811216791}',z={};const C=Object.assign(z,{setup:function(g){return(g,d)=>{const A=n("ElIcon"),z=n("ElRow"),C=n("ElButton"),P=n("ElTag"),E=n("IconList");return a(),s("div",null,[h,t(z,null,{default:p((()=>[e("div",null,[t(A,{size:30},{default:p((()=>[t(o(l))])),_:1}),t(o(l))])])),_:1}),m,t(z,null,{default:p((()=>[v,e("div",y,[t(A,{size:20},{default:p((()=>[t(o(l))])),_:1}),t(A,{color:"#409EFC",class:"no-inherit"},{default:p((()=>[t(o(c))])),_:1}),t(A,null,{default:p((()=>[t(o(u))])),_:1}),t(A,{class:"is-loading"},{default:p((()=>[t(o(i))])),_:1}),t(C,{type:"primary"},{default:p((()=>[t(A,{style:{"vertical-align":"middle",color:"#fff"}},{default:p((()=>[t(o(k))])),_:1}),_])),_:1})])])),_:1}),b,t(z,null,{default:p((()=>[e("div",f,[r(" Since svg icons do not carry any attributes by default "),r(" You need to provide attributes directly "),t(o(l),{style:{width:"1em",height:"1em","margin-right":"8px"}}),t(o(c),{style:{width:"1em",height:"1em","margin-right":"8px"}}),t(o(u),{style:{width:"1em",height:"1em","margin-right":"8px"}}),t(o(k),{style:{width:"1em",height:"1em","margin-right":"8px"}})])])),_:1}),e("h3",q,[S,t(P,null,{default:p((()=>[T])),_:1}),I,x]),w,t(E),r(' <ul class="icon-list">\n  <li\n    v-for="component in $svgIcons"\n    :key="component"\n    @click="$copySvgIcon(component)">\n    <span class="demo-svg-icon">\n      <el-icon color="#000">\n        <component :is="component" />\n      </el-icon>\n      <span class="icon-name">{{component}}</span>\n    </span>\n  </li>\n</ul> '),V])}}});export{A as __pageData,C as default};