import{j as r,a as L,F as D}from"./jsx-runtime-86dfebf6.js";import{r as s}from"./index-1b03fe98.js";import{b as X,g as O,d as ee,h as ae}from"./schemes-56affe43.js";import{g as U}from"./helper-26bacd48.js";import{c as Y}from"./PieChart-adaf79c6.js";import{B as J,l as I}from"./RadialAxis-6c2bc59c.js";import{f as te,r as x}from"./range-163cdb4a.js";import{c as M}from"./index-256d607f.js";import{u as ne}from"./Count-a38a1947.js";import{i as re}from"./index-9494de61.js";import"./RadialValueMarker-7b3f8322.js";import"./chroma-699b8ba0.js";import"./DiscreteLegendEntry-49610185.js";import"./SequentialLegend-1647127f.js";import{u as le}from"./rdk-0beed5d4.js";const A=({data:e,gradient:l,startAngle:i,id:a,endAngle:u,innerRadius:p,outerRadius:t,cornerRadius:n,padAngle:o,color:y,animated:G,disabled:g,fill:q,onClick:b,onMouseEnter:m,onMouseLeave:_,tooltip:c})=>{const R=s.useMemo(()=>J().innerRadius(p).outerRadius(t).cornerRadius(n),[p,t,n]),V=s.useMemo(()=>r(Y,{id:a,arc:R,data:{data:e||{},startAngle:i,endAngle:u,padAngle:o},animated:G,color:y,gradient:l,disabled:g,tooltip:c,onClick:b,onMouseEnter:m,onMouseLeave:_}),[a,R,i,u,o,e,G,y,l,g,c,b,m,_]);return L("g",{children:[q&&r("circle",{fill:q,r:t}),V]})};A.defaultProps={cornerRadius:0,padAngle:0,padRadius:0,color:"#353d44",animated:!0,disabled:!1,tooltip:r(X,{})};try{A.displayName="RadialGaugeArc",A.__docgenInfo={description:"",displayName:"RadialGaugeArc",props:{id:{defaultValue:null,description:"ID generated by the chart.",name:"id",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Data set by the `RadialGaugeSeries` components.",name:"data",required:!1,type:{name:"ChartShallowDataShape<ChartDataTypes | [ChartDataTypes, ChartDataTypes]>"}},startAngle:{defaultValue:null,description:"Start angle set by the `RadialGaugeSeries` components.",name:"startAngle",required:!1,type:{name:"number"}},endAngle:{defaultValue:null,description:"End angle set by the `RadialGaugeSeries` components.",name:"endAngle",required:!1,type:{name:"number"}},innerRadius:{defaultValue:null,description:"Inner radius set by the `RadialGaugeSeries` components.",name:"innerRadius",required:!1,type:{name:"number"}},outerRadius:{defaultValue:null,description:"Outer radius set by the `RadialGaugeSeries` components.",name:"outerRadius",required:!1,type:{name:"number"}},color:{defaultValue:{value:"#353d44"},description:"Color set by the `RadialGaugeSeries` components.",name:"color",required:!1,type:{name:"any"}},cornerRadius:{defaultValue:{value:"0"},description:"Corner Radius of the arcs, see https://github.com/d3/d3-shape#arc_cornerRadius",name:"cornerRadius",required:!1,type:{name:"number"}},padAngle:{defaultValue:{value:"0"},description:"Pad Angle between adjacent arcs, see https://github.com/d3/d3-shape#arc_padAngle",name:"padAngle",required:!1,type:{name:"number"}},padRadius:{defaultValue:{value:"0"},description:"Pad Radius between adjacent arcs, see https://github.com/d3/d3-shape#arc_padRadius",name:"padRadius",required:!1,type:{name:"number"}},animated:{defaultValue:{value:"true"},description:"Animation set by the `RadialGaugeSeries` component.",name:"animated",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Disable the interactions.",name:"disabled",required:!1,type:{name:"boolean"}},fill:{defaultValue:null,description:"Fill the arc.",name:"fill",required:!1,type:{name:"string"}},gradient:{defaultValue:null,description:"Gradient shades for the bar.",name:"gradient",required:!1,type:{name:"ReactElement<GradientProps, FC<Partial<GradientProps>>>"}},tooltip:{defaultValue:{value:"<ChartTooltip />"},description:"Tooltip component.",name:"tooltip",required:!1,type:{name:"ReactElement<ChartTooltipProps, FC<Partial<ChartTooltipProps>>>"}},onClick:{defaultValue:null,description:"Event for when the arc is clicked.",name:"onClick",required:!1,type:{name:"(event: any) => void"}},onMouseEnter:{defaultValue:null,description:"Event for when the arc has mouse enter.",name:"onMouseEnter",required:!1,type:{name:"(event: any) => void"}},onMouseLeave:{defaultValue:null,description:"Event for when the arc has mouse leave.",name:"onMouseLeave",required:!1,type:{name:"(event: any) => void"}}}}}catch{}const ie="_valueLabel_1eyd5_1",de={valueLabel:ie},$=({data:e,className:l,offset:i,onClick:a=()=>{}})=>{const u=te(e.key);return r("text",{x:"0",y:i,textAnchor:"middle",alignmentBaseline:"text-after-edge",onClick:p=>a({data:e,nativeEvent:p}),className:M(l,de.valueLabel),children:u})};try{$.displayName="RadialGaugeLabel",$.__docgenInfo={description:"",displayName:"RadialGaugeLabel",props:{data:{defaultValue:null,description:"Data set by the `RadialGaugeSeries` component.",name:"data",required:!1,type:{name:"ChartShallowDataShape<ChartDataTypes | [ChartDataTypes, ChartDataTypes]>"}},offset:{defaultValue:null,description:"Offset set by the `RadialGaugeSeries` component.",name:"offset",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"Classname to apply to the label.",name:"className",required:!1,type:{name:"any"}},onClick:{defaultValue:{value:"() => undefined"},description:"Label click event.",name:"onClick",required:!1,type:{name:"(event: { data: any; nativeEvent: any; }) => void"}}}}}catch{}const se="_valueLabel_1h164_1",ue={valueLabel:se},j=({data:e,className:l})=>{const i=ne({to:e.data});return r("text",{dy:"-0.5em",x:"0",y:"15",textAnchor:"middle",className:M(l,ue.valueLabel),ref:i})};try{j.displayName="RadialGaugeValueLabel",j.__docgenInfo={description:"",displayName:"RadialGaugeValueLabel",props:{data:{defaultValue:null,description:"Data set by the `RadialGaugeSeries` component.",name:"data",required:!1,type:{name:"ChartShallowDataShape<ChartDataTypes | [ChartDataTypes, ChartDataTypes]>"}},className:{defaultValue:null,description:"Classname to apply to the value label.",name:"className",required:!1,type:{name:"any"}}}}}catch{}const E=e=>r(A,{...e});E.defaultProps={animated:!1,disabled:!0};try{E.displayName="RadialGaugeOuterArc",E.__docgenInfo={description:"",displayName:"RadialGaugeOuterArc",props:{id:{defaultValue:null,description:"ID generated by the chart.",name:"id",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Data set by the `RadialGaugeSeries` components.",name:"data",required:!1,type:{name:"ChartShallowDataShape<ChartDataTypes | [ChartDataTypes, ChartDataTypes]>"}},startAngle:{defaultValue:null,description:"Start angle set by the `RadialGaugeSeries` components.",name:"startAngle",required:!1,type:{name:"number"}},endAngle:{defaultValue:null,description:"End angle set by the `RadialGaugeSeries` components.",name:"endAngle",required:!1,type:{name:"number"}},innerRadius:{defaultValue:null,description:"Inner radius set by the `RadialGaugeSeries` components.",name:"innerRadius",required:!1,type:{name:"number"}},outerRadius:{defaultValue:null,description:"Outer radius set by the `RadialGaugeSeries` components.",name:"outerRadius",required:!1,type:{name:"number"}},color:{defaultValue:null,description:"Color set by the `RadialGaugeSeries` components.",name:"color",required:!1,type:{name:"any"}},cornerRadius:{defaultValue:null,description:"Corner Radius of the arcs, see https://github.com/d3/d3-shape#arc_cornerRadius",name:"cornerRadius",required:!1,type:{name:"number"}},padAngle:{defaultValue:null,description:"Pad Angle between adjacent arcs, see https://github.com/d3/d3-shape#arc_padAngle",name:"padAngle",required:!1,type:{name:"number"}},padRadius:{defaultValue:null,description:"Pad Radius between adjacent arcs, see https://github.com/d3/d3-shape#arc_padRadius",name:"padRadius",required:!1,type:{name:"number"}},animated:{defaultValue:{value:"false"},description:"Animation set by the `RadialGaugeSeries` component.",name:"animated",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"true"},description:"Disable the interactions.",name:"disabled",required:!1,type:{name:"boolean"}},fill:{defaultValue:null,description:"Fill the arc.",name:"fill",required:!1,type:{name:"string"}},gradient:{defaultValue:null,description:"Gradient shades for the bar.",name:"gradient",required:!1,type:{name:"ReactElement<GradientProps, FC<Partial<GradientProps>>>"}},tooltip:{defaultValue:null,description:"Tooltip component.",name:"tooltip",required:!1,type:{name:"ReactElement<ChartTooltipProps, FC<Partial<ChartTooltipProps>>>"}},onClick:{defaultValue:null,description:"Event for when the arc is clicked.",name:"onClick",required:!1,type:{name:"(event: any) => void"}},onMouseEnter:{defaultValue:null,description:"Event for when the arc has mouse enter.",name:"onMouseEnter",required:!1,type:{name:"(event: any) => void"}},onMouseLeave:{defaultValue:null,description:"Event for when the arc has mouse leave.",name:"onMouseLeave",required:!1,type:{name:"(event: any) => void"}}}}}catch{}const w=({data:e,scale:l,startAngle:i,endAngle:a,arcWidth:u,outerArc:p,innerArc:t,label:n,valueLabel:o,colorScheme:y,id:G,padding:g,minGaugeWidth:q,...b})=>{const{columns:m,width:_,height:c,xScale:R,yScale:V}=s.useMemo(()=>{let S=1,d=e.length;if(b.width/e.length<q)for(;b.width/d<q;)S+=1,d=Math.ceil(e.length/S);const f=O();f.domain(x(d)),f.rangeRound([0,b.width],.1);const h=O();return h.domain(x(S)),h.rangeRound([0,b.height],.1),{columns:d,xScale:f,yScale:h,width:f.bandwidth(),height:h.bandwidth()}},[e.length,q,b.height,b.width]),C=s.useCallback((S,d)=>{var z;const f=l(S.data),h=ee([_-g*2,c-g*2])/2,v=h-u,P=c/2,k=R(d%m),K=V(Math.floor(d/m)),Q=k+_/2,Z=K+c/2,F=re((z=S.key)==null?void 0:z.toLocaleString());return L("g",{transform:`translate(${Q}, ${Z})`,children:[p&&s.cloneElement(p,{id:`${G}-${F}-outer`,outerRadius:h,innerRadius:v,startAngle:i,endAngle:a}),t&&s.cloneElement(t,{id:`${G}-${F}-inner`,outerRadius:h,innerRadius:v,startAngle:i,endAngle:f,data:S,color:U({data:e,colorScheme:y,point:S,index:d})}),o&&s.cloneElement(o,{data:S}),n&&s.cloneElement(n,{data:S,offset:P})]},F)},[G,u,y,m,e,a,c,t,n,p,g,l,i,o,_,R,V]);return r(s.Fragment,{children:e.map(C)})};w.defaultProps={arcWidth:5,outerArc:r(E,{}),innerArc:r(A,{}),label:r($,{}),valueLabel:r(j,{}),colorScheme:["#00ECB1"],padding:20,minGaugeWidth:50};try{w.displayName="RadialGaugeSeries",w.__docgenInfo={description:"",displayName:"RadialGaugeSeries",props:{id:{defaultValue:null,description:"Unique id for the series.",name:"id",required:!1,type:{name:"string"}},data:{defaultValue:null,description:"Data to render set by `RadialGauge` component.",name:"data",required:!1,type:{name:"ChartShallowDataShape<ChartDataTypes | [ChartDataTypes, ChartDataTypes]>[]"}},scale:{defaultValue:null,description:"D3 scale function set by `RadialGauge` component.",name:"scale",required:!1,type:{name:"any"}},startAngle:{defaultValue:null,description:"Start angle set by `RadialGauge` component.",name:"startAngle",required:!1,type:{name:"number"}},endAngle:{defaultValue:null,description:"Start angle set by `RadialGauge` component.",name:"endAngle",required:!1,type:{name:"number"}},arcWidth:{defaultValue:{value:"5"},description:'The "thickness" of the arcs',name:"arcWidth",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width set by `RadialGauge` component.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height set by `RadialGauge` component.",name:"height",required:!1,type:{name:"number"}},padding:{defaultValue:{value:"20"},description:"Padding between each gauge.",name:"padding",required:!1,type:{name:"number"}},colorScheme:{defaultValue:{value:"['#00ECB1']"},description:"Color scheme to apply.",name:"colorScheme",required:!1,type:{name:"ColorSchemeType"}},innerArc:{defaultValue:{value:"<RadialGaugeArc />"},description:"Arc component.",name:"innerArc",required:!1,type:{name:"ReactElement<RadialGaugeArcProps, FC<Partial<RadialGaugeArcProps>>>"}},outerArc:{defaultValue:{value:"<RadialGaugeOuterArc />"},description:"Outer arc component. This is the 'fill' element.",name:"outerArc",required:!1,type:{name:"ReactElement<RadialGaugeArcProps, FC<Partial<RadialGaugeArcProps>>>"}},label:{defaultValue:{value:"<RadialGaugeLabel />"},description:"Label component.",name:"label",required:!1,type:{name:"ReactElement<RadialGaugeLabelProps, FC<Partial<RadialGaugeLabelProps>>>"}},valueLabel:{defaultValue:{value:"<RadialGaugeValueLabel />"},description:"Value label component.",name:"valueLabel",required:!1,type:{name:"ReactElement<RadialGaugeValueLabelProps, FC<Partial<RadialGaugeValueLabelProps>>>"}},minGaugeWidth:{defaultValue:{value:"50"},description:"Min width for a gauge. Only applicable in multi-series gauges.",name:"minGaugeWidth",required:!1,type:{name:"number"}}}}}catch{}const N=({id:e,data:l,scale:i,innerRadius:a,outerRadius:u,cornerRadius:p,padAngle:t,startAngle:n,colorScheme:o,...y})=>{const G=s.useMemo(()=>J().innerRadius(a).outerRadius(u).cornerRadius(p),[a,u,p]),g=s.useMemo(()=>{let q=n;function b(m,_){const c=m.data,R=q,V=R+i(c)-n;q=V;const C={data:m,startAngle:R,endAngle:V,padAngle:t,value:c,index:_},S=U({colorScheme:o,data:[l],point:m,index:_,active:[l],isMultiSeries:!0});return s.createElement(Y,{...y,id:m.key.toLocaleString(),key:m.key.toLocaleString(),arc:G,data:C,color:S})}return l.data.map(b)},[G,o,l,t,y,i,n]);return r("g",{children:g},e)};N.defaultProps={cornerRadius:0,padAngle:0,padRadius:0,animated:!0,disabled:!1,tooltip:r(X,{})};try{N.displayName="RadialGaugeStackedArc",N.__docgenInfo={description:"",displayName:"RadialGaugeStackedArc",props:{id:{defaultValue:null,description:"ID generated by the chart.",name:"id",required:!1,type:{name:"string"}},animated:{defaultValue:{value:"true"},description:"Animation set by the `RadialGaugeSeries` component.",name:"animated",required:!1,type:{name:"boolean"}},fill:{defaultValue:null,description:"Fill the arc.",name:"fill",required:!1,type:{name:"string"}},tooltip:{defaultValue:{value:"<ChartTooltip />"},description:"Tooltip component.",name:"tooltip",required:!1,type:{name:"ReactElement<ChartTooltipProps, FC<Partial<ChartTooltipProps>>>"}},gradient:{defaultValue:null,description:"Gradient shades for the bar.",name:"gradient",required:!1,type:{name:"ReactElement<GradientProps, FC<Partial<GradientProps>>>"}},onClick:{defaultValue:null,description:"Event for when the arc is clicked.",name:"onClick",required:!1,type:{name:"(event: any) => void"}},onMouseEnter:{defaultValue:null,description:"Event for when the arc has mouse enter.",name:"onMouseEnter",required:!1,type:{name:"(event: any) => void"}},onMouseLeave:{defaultValue:null,description:"Event for when the arc has mouse leave.",name:"onMouseLeave",required:!1,type:{name:"(event: any) => void"}},disabled:{defaultValue:{value:"false"},description:"Disable the interactions.",name:"disabled",required:!1,type:{name:"boolean"}},innerRadius:{defaultValue:null,description:"Inner radius set by the `RadialGaugeSeries` components.",name:"innerRadius",required:!1,type:{name:"number"}},outerRadius:{defaultValue:null,description:"Outer radius set by the `RadialGaugeSeries` components.",name:"outerRadius",required:!1,type:{name:"number"}},startAngle:{defaultValue:null,description:"Start angle set by the `RadialGaugeSeries` components.",name:"startAngle",required:!1,type:{name:"number"}},padAngle:{defaultValue:{value:"0"},description:"Pad Angle between adjacent arcs, see https://github.com/d3/d3-shape#arc_padAngle",name:"padAngle",required:!1,type:{name:"number"}},padRadius:{defaultValue:{value:"0"},description:"Pad Radius between adjacent arcs, see https://github.com/d3/d3-shape#arc_padRadius",name:"padRadius",required:!1,type:{name:"number"}},cornerRadius:{defaultValue:{value:"0"},description:"Corner Radius of the arcs, see https://github.com/d3/d3-shape#arc_cornerRadius",name:"cornerRadius",required:!1,type:{name:"number"}},data:{defaultValue:null,description:"Data set by the `StackedRadialGaugeSeries` components.",name:"data",required:!1,type:{name:"ChartNestedDataShape"}},scale:{defaultValue:null,description:"D3 scale function set by `RadialGauge` component.",name:"scale",required:!1,type:{name:"(x: number) => number"}},colorScheme:{defaultValue:null,description:"Color scheme to apply set by 'StackedRadialGaugeSeries' component.",name:"colorScheme",required:!1,type:{name:"ColorSchemeType"}}}}}catch{}const oe="_stackedValueLabel_1w6zx_1",ce={stackedValueLabel:oe},T=({label:e,className:l,yOffset:i})=>r(D,{children:e&&r("text",{x:"0",y:i,textAnchor:"middle",alignmentBaseline:"middle",className:M(l,ce.stackedValueLabel),children:e})});T.defaultProps={yOffset:0};try{T.displayName="StackedRadialGaugeValueLabel",T.__docgenInfo={description:"",displayName:"StackedRadialGaugeValueLabel",props:{label:{defaultValue:null,description:"A label shown at the center",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"A class name to apply",name:"className",required:!1,type:{name:"string"}},yOffset:{defaultValue:{value:"0"},description:"A y offset to apply to the label",name:"yOffset",required:!1,type:{name:"number"}}}}}catch{}const pe=e=>Array.isArray(e.data),B=({data:e,width:l,height:i,scale:a,startAngle:u,endAngle:p,outerArc:t,innerArc:n,stackedInnerArc:o,label:y,descriptionLabel:G,colorScheme:g,fillFactor:q,arcPadding:b})=>{const m=Math.min(l,i)/2,_=m*(1-Math.min(q,1)),c=O().domain(x(e.length)).range([_,m]).paddingInner(b),R=s.useCallback((d,f)=>t&&s.cloneElement(t,{outerRadius:d,innerRadius:f,startAngle:u,endAngle:p}),[t,u,p]),V=s.useCallback((d,f,h,v,P)=>{const k=U({data:e,colorScheme:g,point:v,index:P});return n&&s.cloneElement(n,{outerRadius:d,innerRadius:f,startAngle:u,endAngle:h,data:v,color:k})},[n,u,e,g]),C=s.useCallback((d,f,h,v)=>r(D,{children:o&&s.cloneElement(o,{outerRadius:d,innerRadius:f,colorScheme:g,startAngle:u,scale:(a==null?void 0:a[v])??(a==null?void 0:a[v])??a,data:h})}),[o,g,u,a]),S=s.useCallback((d,f)=>{var P,k;const h=c(f),v=h-c.bandwidth();return L("g",{children:[R(h,v),pe(d)?C(h,v,d,f):V(h,v,((P=a==null?void 0:a[f])==null?void 0:P.call(a,d.data))??((k=a==null?void 0:a[0])==null?void 0:k.call(a,d.data))??a(d.data),d,f)]},d.key.toLocaleString())},[c,R,C,V,a]);return r(D,{children:L("g",{transform:`translate(${l/2}, ${i/2})`,children:[e.map(S),G,y]})})};B.defaultProps={outerArc:r(A,{disabled:!0,animated:!1}),innerArc:r(A,{animated:!0}),stackedInnerArc:r(N,{animated:!0}),label:r(T,{}),colorScheme:["#00ECB1"],fillFactor:.2,arcPadding:.15};try{B.displayName="StackedRadialGaugeSeries",B.__docgenInfo={description:"",displayName:"StackedRadialGaugeSeries",props:{data:{defaultValue:null,description:"Data to render set by `RadialGauge` component.",name:"data",required:!1,type:{name:"ChartDataShape[]"}},scale:{defaultValue:null,description:"D3 scale function set by `RadialGauge` component.",name:"scale",required:!1,type:{name:"any"}},startAngle:{defaultValue:null,description:"Start angle set by `RadialGauge` component.",name:"startAngle",required:!1,type:{name:"number"}},endAngle:{defaultValue:null,description:"Start angle set by `RadialGauge` component.",name:"endAngle",required:!1,type:{name:"number"}},width:{defaultValue:null,description:"Width set by `RadialGauge` component.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height set by `RadialGauge` component.",name:"height",required:!1,type:{name:"number"}},colorScheme:{defaultValue:{value:"['#00ECB1']"},description:"Color scheme to apply.",name:"colorScheme",required:!1,type:{name:"ColorSchemeType"}},innerArc:{defaultValue:{value:"<RadialGaugeArc animated={true} />"},description:"Arc component.",name:"innerArc",required:!1,type:{name:"ReactElement<RadialGaugeArcProps, FC<Partial<RadialGaugeArcProps>>>"}},stackedInnerArc:{defaultValue:{value:"<RadialGaugeStackedArc animated={true} />"},description:"Stacked Arc component.",name:"stackedInnerArc",required:!1,type:{name:"ReactElement<RadialGaugeStackedArcProps, FC<Partial<RadialGaugeStackedArcProps>>>"}},outerArc:{defaultValue:{value:"<RadialGaugeArc disabled={true} animated={false} />"},description:"Outer arc component. This is the 'fill' element.",name:"outerArc",required:!1,type:{name:"ReactElement<RadialGaugeArcProps, FC<Partial<RadialGaugeArcProps>>>"}},label:{defaultValue:{value:"<StackedRadialGaugeValueLabel />"},description:"Label component.",name:"label",required:!1,type:{name:"ReactElement<StackedRadialGaugeValueLabelProps, FC<Partial<StackedRadialGaugeValueLabelProps>>>"}},descriptionLabel:{defaultValue:null,description:"Description label component.",name:"descriptionLabel",required:!1,type:{name:"ReactElement<StackedRadialGaugeDescriptionLabelProps, FC<Partial<StackedRadialGaugeDescriptionLabelProps>>>"}},fillFactor:{defaultValue:{value:"0.2"},description:"A factor from 0 to 1 determining how much of the Gauge should be filled with arcs",name:"fillFactor",required:!1,type:{name:"number"}},arcPadding:{defaultValue:{value:"0.15"},description:"Padding between the stacked arcs, following d3 bandwidth innerPadding",name:"arcPadding",required:!1,type:{name:"number"}}}}}catch{}const me="_stackedDescriptionLabel_1h95t_1",fe={stackedDescriptionLabel:me},W=({label:e,className:l,yOffset:i})=>r(D,{children:e&&r("text",{x:"0",y:i-20,textAnchor:"middle",alignmentBaseline:"middle",className:M(l,fe.stackedDescriptionLabel),children:e})});W.defaultProps={yOffset:0};try{W.displayName="StackedRadialGaugeDescriptionLabel",W.__docgenInfo={description:"",displayName:"StackedRadialGaugeDescriptionLabel",props:{label:{defaultValue:null,description:"A label shown at the center",name:"label",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"A class name to apply",name:"className",required:!1,type:{name:"string"}},yOffset:{defaultValue:{value:"0"},description:"A y offset to apply to the label",name:"yOffset",required:!1,type:{name:"number"}}}}}catch{}const H=({id:e,width:l,height:i,margins:a,className:u,data:p,minValue:t,maxValue:n,startAngle:o,endAngle:y,series:G,containerClassName:g})=>{const q=le(e),b=s.useCallback(({chartHeight:m,chartWidth:_})=>{let c;return Array.isArray(n)?c=n.map((R,V)=>I().domain([(t==null?void 0:t[V])??(t==null?void 0:t[0])??t,R]).range([o,y])):Array.isArray(t)?c=t.map((R,V)=>I().domain([R,(n==null?void 0:n[V])??(n==null?void 0:n[0])??n]).range([o,y])):c=I().domain([t,n]).range([o,y]),s.cloneElement(G,{id:q,scale:c,data:p,startAngle:o,endAngle:y,width:_,height:m})},[p,y,n,t,G,o,q]);return r(ae,{id:e,width:l,height:i,margins:a,xAxisVisible:!1,yAxisVisible:!1,className:u,containerClassName:g,children:b})};H.defaultProps={minValue:0,maxValue:100,startAngle:0,endAngle:Math.PI*2,series:r(w,{})};try{H.displayName="RadialGauge",H.__docgenInfo={description:"",displayName:"RadialGauge",props:{data:{defaultValue:null,description:"Data the chart will receive to render.",name:"data",required:!0,type:{name:"ChartDataShape[]"}},minValue:{defaultValue:{value:"0"},description:"Min value to scale on.",name:"minValue",required:!1,type:{name:"number | number[]"}},maxValue:{defaultValue:{value:"100"},description:"Max value to scale on.",name:"maxValue",required:!1,type:{name:"number | number[]"}},startAngle:{defaultValue:{value:"0"},description:"Start angle for the first value.",name:"startAngle",required:!1,type:{name:"number"}},endAngle:{defaultValue:{value:"Math.PI * 2"},description:"End angle for the last value.",name:"endAngle",required:!1,type:{name:"number"}},series:{defaultValue:{value:"<RadialGaugeSeries />"},description:"Gauge series component to render.",name:"series",required:!1,type:{name:"ReactElement<RadialGaugeSeriesProps | StackedRadialGaugeSeriesProps, FC<Partial<RadialGaugeSeriesProps>> | FC<...>>"}},id:{defaultValue:null,description:"Id of the chart.",name:"id",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Width of the chart. If not provided will autosize.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart. If not provided will autosize.",name:"height",required:!1,type:{name:"number"}},margins:{defaultValue:null,description:"Margins for the chart.",name:"margins",required:!1,type:{name:"Margins"}},className:{defaultValue:null,description:"Classnames for the chart.",name:"className",required:!1,type:{name:"string"}},containerClassName:{defaultValue:null,description:"Classnames for the chart.",name:"containerClassName",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Additional css styles.",name:"style",required:!1,type:{name:"StyleHTMLAttributes<SVGSVGElement>"}},center:{defaultValue:null,description:"Center the chart. Used mainly internally.",name:"center",required:!1,type:{name:"boolean"}},centerX:{defaultValue:null,description:"Center chart on X Axis only. Used mainly internally.",name:"centerX",required:!1,type:{name:"boolean"}},centerY:{defaultValue:null,description:"Center chart on Y Axis only. Used mainly internally.",name:"centerY",required:!1,type:{name:"boolean"}}}}}catch{}export{H as R,B as S,w as a,A as b,$ as c,T as d,W as e,j as f};
