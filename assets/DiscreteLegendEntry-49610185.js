import{j as a,a as g}from"./jsx-runtime-86dfebf6.js";import{c as m}from"./index-256d607f.js";import{C as y}from"./rdk-0beed5d4.js";const h="_container_19vag_1",b="_horizontal_19vag_5",L="_vertical_19vag_10",i={container:h,horizontal:b,vertical:L},c=({entries:e,orientation:t,style:l,className:r})=>a("div",{className:m(i.container,r,{[i.horizontal]:t==="horizontal",[i.vertical]:t==="vertical"}),style:l,children:e.map((s,o)=>a(y,{element:s,orientation:t},`dle-${o}`))});c.defaultProps={orientation:"vertical"};try{c.displayName="DiscreteLegend",c.__docgenInfo={description:"",displayName:"DiscreteLegend",props:{className:{defaultValue:null,description:"CSS Class name.",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"CSS Styles.",name:"style",required:!1,type:{name:"CSSProperties"}},orientation:{defaultValue:{value:"vertical"},description:"Orientation of the legend.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},entries:{defaultValue:null,description:"Entry components to show in the legend.",name:"entries",required:!1,type:{name:"ReactElement<DiscreteLegendEntryProps, FC<Partial<DiscreteLegendEntryProps>>>[]"}}}}}catch{}const S="_symbol_f5unn_1",E={symbol:S},d=({className:e,color:t})=>a("div",{className:m(E.symbol,e),style:{background:t}});try{d.displayName="DiscreteLegendSymbol",d.__docgenInfo={description:"",displayName:"DiscreteLegendSymbol",props:{color:{defaultValue:null,description:"Color for the symbol set by the `DiscreteLegendEntry`.",name:"color",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"CSS Class names.",name:"className",required:!1,type:{name:"string"}}}}}catch{}const D="_entry_1493o_1",C="_vertical_1493o_8",N="_label_1493o_20",q="_horizontal_1493o_30",n={entry:D,vertical:C,label:N,horizontal:q},u=({label:e,symbol:t,title:l,className:r,color:s,style:o,orientation:p,onMouseEnter:v,onMouseLeave:_,onClick:f})=>g("div",{title:l,className:m(n.entry,r,{[n.vertical]:p==="vertical",[n.horizontal]:p==="horizontal"}),onClick:f,onMouseEnter:v,onMouseLeave:_,style:o,children:[a(y,{element:t,color:s}),a("span",{className:n.label,children:e})]});u.defaultProps={symbol:a(d,{}),orientation:"horizontal"};try{u.displayName="DiscreteLegendEntry",u.__docgenInfo={description:"",displayName:"DiscreteLegendEntry",props:{label:{defaultValue:null,description:"Label for the entry.",name:"label",required:!1,type:{name:"string"}},color:{defaultValue:null,description:"Color for the entry.",name:"color",required:!1,type:{name:"string"}},symbol:{defaultValue:{value:"<DiscreteLegendSymbol />"},description:"Symbol for the entry.",name:"symbol",required:!1,type:{name:"ReactElement<DiscreteLegendSymbolProps, FC<Partial<DiscreteLegendSymbolProps>>> | ReactNode"}},style:{defaultValue:null,description:"CSS Styles.",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"CSS Class names.",name:"className",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"HTML Title Attribute.",name:"title",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"horizontal"},description:"Orientation of the entry set internally by `DiscreteLegend`.",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},onMouseEnter:{defaultValue:null,description:"Mouse enter event.",name:"onMouseEnter",required:!1,type:{name:"(event: MouseEvent<HTMLDivElement, MouseEvent>) => void"}},onMouseLeave:{defaultValue:null,description:"Mouse leave event.",name:"onMouseLeave",required:!1,type:{name:"(event: MouseEvent<HTMLDivElement, MouseEvent>) => void"}},onClick:{defaultValue:null,description:"On click event.",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLDivElement, MouseEvent>) => void"}}}}}catch{}export{c as D,u as a,d as b};
