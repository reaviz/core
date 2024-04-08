import{a as _,j as h,F as j}from"./jsx-runtime-86dfebf6.js";import{r as n}from"./index-1b03fe98.js";import{a as H}from"./builder-9833ba7e.js";import{u as U}from"./chroma-699b8ba0.js";import{a as G,d as B}from"./RadialAxis-6c2bc59c.js";import{g as O,n as $,j as J,h as K,e as Q,s as Z,b as ee,D as ae}from"./schemes-56affe43.js";import{C as q}from"./rdk-0beed5d4.js";import{g as te}from"./radial-c0f800e2.js";import"./RadialValueMarker-7b3f8322.js";import"./DiscreteLegendEntry-49610185.js";import"./SequentialLegend-1647127f.js";import{g as ne}from"./range-163cdb4a.js";import{c as re}from"./index-256d607f.js";import"./Count-a38a1947.js";import{b as le}from"./time-a9784969.js";import{i as ie}from"./index-9494de61.js";var oe=I(G);function T(e){this._curve=e}T.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(e,a){this._curve.point(a*Math.sin(e),a*-Math.cos(e))}};function I(e){function a(l){return new T(e(l))}return a._curve=e,a}function se(e){var a=e.curve;return e.angle=e.x,delete e.x,e.radius=e.y,delete e.y,e.curve=function(l){return arguments.length?a(I(l)):a()._curve},e}function de(){return se(B().curve(oe))}const A=({id:e,width:a,height:l,margins:d,className:S,containerClassName:i,innerRadius:c,series:s,axis:r,data:v})=>{const g=n.useCallback((o,m,b)=>{let t;if((r==null?void 0:r.props.type)==="category"){const f=U(o,y=>y.x);t=O().range([0,2*Math.PI]).domain(f)}else{const f=$({data:o});t=le().range([0,2*Math.PI]).domain(f)}const V=J({data:o,scaled:!1});return{yScale:te(b,m,V),xScale:t}},[]),u=n.useCallback(o=>{const{chartWidth:m,chartHeight:b,id:t}=o,V=Math.min(m,b)/2,p=H(v),{yScale:f,xScale:y}=g(p,V,c);return _(n.Fragment,{children:[r&&h(q,{element:r,xScale:y,height:b,width:m,innerRadius:c}),h(q,{element:s,id:t,data:p,xScale:y,yScale:f})]})},[v,g,c,s,r]);return h(K,{id:e,containerClassName:i,width:a,height:l,margins:d,xAxisVisible:!1,yAxisVisible:!1,center:!0,className:S,children:u})};try{A.displayName="RadialScatterPlot",A.__docgenInfo={description:"",displayName:"RadialScatterPlot",props:{data:{defaultValue:null,description:"Data the chart will receive to render.",name:"data",required:!1,type:{name:"ChartShallowDataShape<ChartDataTypes | [ChartDataTypes, ChartDataTypes]>[]"}},series:{defaultValue:null,description:"The series component that renders the scatter components.",name:"series",required:!1,type:{name:"ReactElement<RadialScatterSeriesProps, FC<Partial<RadialScatterSeriesProps>>>"}},axis:{defaultValue:null,description:"The radial axis component for the chart.",name:"axis",required:!1,type:{name:"ReactElement<RadialAxisProps, FC<Partial<RadialAxisProps>>>"}},innerRadius:{defaultValue:null,description:"The inner radius for the chart center.",name:"innerRadius",required:!1,type:{name:"number"}},id:{defaultValue:null,description:"Id of the chart.",name:"id",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"Width of the chart. If not provided will autosize.",name:"width",required:!1,type:{name:"number"}},height:{defaultValue:null,description:"Height of the chart. If not provided will autosize.",name:"height",required:!1,type:{name:"number"}},margins:{defaultValue:null,description:"Margins for the chart.",name:"margins",required:!1,type:{name:"Margins"}},className:{defaultValue:null,description:"Classnames for the chart.",name:"className",required:!1,type:{name:"string"}},containerClassName:{defaultValue:null,description:"Classnames for the chart.",name:"containerClassName",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"Additional css styles.",name:"style",required:!1,type:{name:"StyleHTMLAttributes<SVGSVGElement>"}},center:{defaultValue:null,description:"Center the chart. Used mainly internally.",name:"center",required:!1,type:{name:"boolean"}},centerX:{defaultValue:null,description:"Center chart on X Axis only. Used mainly internally.",name:"centerX",required:!1,type:{name:"boolean"}},centerY:{defaultValue:null,description:"Center chart on Y Axis only. Used mainly internally.",name:"centerY",required:!1,type:{name:"boolean"}}}}}catch{}const ce="_inactive_kwc4n_1",ue="_hidden_kwc4n_6",N={inactive:ce,hidden:ue},x=({size:e,data:a,color:l,index:d,symbol:S,active:i,tooltip:c,yScale:s,xScale:r,animated:v,className:g,visible:u,...o})=>{const m=n.useRef(null),[b,t]=n.useState(!1);function V(R){t(!0),o.onMouseEnter({value:a,nativeEvent:R})}function p(R){t(!1),o.onMouseLeave({value:a,nativeEvent:R})}function f(R){o.onClick({value:a,nativeEvent:R})}function y(R){const D=de().radius(C=>s(C.y)).angle(C=>r(C.x))([R]);if(D){const[C,z]=D.slice(1).slice(0,-1).split(",");return{translateX:parseFloat(C),translateY:parseFloat(z)}}}function E(){return v?{...ae,delay:d*.005}:{type:!1,delay:0}}const P=typeof l=="function"?l(a,d):l,k=y(a),F=typeof e=="function"?e(a):e,L=E(),[Y]=s.domain(),w=y({...a,y:Y}),X=n.useMemo(()=>ne(a),[a]),W=u?u==null?void 0:u(a,d):i;return _(n.Fragment,{children:[_(Q.g,{initial:{...w,opacity:0},animate:{...k,opacity:1},exit:{...w,opacity:0},transition:L,ref:m,onMouseEnter:V,onMouseLeave:p,onClick:f,className:re(g,{[N.inactive]:!i,[N.hidden]:!W}),tabIndex:0,"aria-label":X,role:"graphics-document",children:[S&&S(a),!S&&h("circle",{r:F,fill:P})]}),c&&h(q,{element:c,visible:b,reference:m,value:a})]})};x.defaultProps={size:3,color:Z.cybertron[0],tooltip:h(ee,{}),active:!0,onClick:()=>{},onMouseEnter:()=>{},onMouseLeave:()=>{}};try{x.displayName="RadialScatterPoint",x.__docgenInfo={description:"",displayName:"RadialScatterPoint",props:{data:{defaultValue:null,description:"Parsed data shape. Set internally by `RadialScatterPlot`.",name:"data",required:!1,type:{name:"ChartInternalShallowDataShape"}},index:{defaultValue:null,description:"Index of the element in the series. Set internally by `RadialScatterSeries`.",name:"index",required:!1,type:{name:"number"}},animated:{defaultValue:null,description:"Whether the element is active or not. Set internally by `RadialScatterSeries`.",name:"animated",required:!1,type:{name:"boolean"}},xScale:{defaultValue:null,description:"D3 scale for X Axis. Set internally by `RadialScatterPlot`.",name:"xScale",required:!1,type:{name:"any"}},yScale:{defaultValue:null,description:"D3 scale for Y Axis. Set internally by `RadialScatterPlot`.",name:"yScale",required:!1,type:{name:"any"}},fill:{defaultValue:null,description:"Fill for the element.",name:"fill",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"Id set internally by `RadialScatterPlot`.",name:"id",required:!1,type:{name:"string"}},color:{defaultValue:{value:"schemes.cybertron[0]"},description:"Color of the circle.",name:"color",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"CSS classes to apply.",name:"className",required:!1,type:{name:"any"}},active:{defaultValue:{value:"true"},description:"Whether the element is active or not. Set internally by `RadialScatterSeries`.",name:"active",required:!1,type:{name:"boolean"}},visible:{defaultValue:null,description:"Whether the elment is visiblbe or not.",name:"visible",required:!1,type:{name:"(value: any, index: any) => boolean"}},symbol:{defaultValue:null,description:"Symbol element to render.",name:"symbol",required:!1,type:{name:"(value: any) => ReactNode"}},size:{defaultValue:{value:"3"},description:"Size of the circle element.",name:"size",required:!1,type:{name:"number | ((d: any) => number)"}},tooltip:{defaultValue:{value:"<ChartTooltip />"},description:"Tooltip element.",name:"tooltip",required:!1,type:{name:"ReactElement<ChartTooltipProps, FC<Partial<ChartTooltipProps>>>"}},onClick:{defaultValue:{value:"() => undefined"},description:"Event for when a symbol is clicked.",name:"onClick",required:!1,type:{name:"(event: any) => void"}},onMouseEnter:{defaultValue:{value:"() => undefined"},description:"Event for when the symbol has mouse enter.",name:"onMouseEnter",required:!1,type:{name:"(event: any) => void"}},onMouseLeave:{defaultValue:{value:"() => undefined"},description:"Event for when the symbol has mouse leave.",name:"onMouseLeave",required:!1,type:{name:"(event: any) => void"}}}}}catch{}const M=({data:e,point:a,xScale:l,yScale:d,animated:S,activeIds:i,show:c=!0,valueMarkers:s})=>{const[r,v]=n.useState(i);n.useEffect(()=>{v(i||[])},[i]);const g=n.useCallback(({value:t})=>{i||v([t.id])},[i]),u=n.useCallback(()=>{i||v([])},[i]),o=n.useCallback(()=>c,[c]),m=n.useCallback((t,V)=>{var P;let p;t.id?p=t.id:console.warn("No 'id' property provided for scatter point; provide one via 'id'.");const f=ie(`${p||V}`),y=!(r&&r.length)||r.includes(p),E=(P=a.props)==null?void 0:P.visible;return n.createElement(q,{...E?{}:{visible:o},element:a,key:f,data:t,index:V,active:y,xScale:l,yScale:d,animated:S,onMouseEnter:g,onMouseLeave:u})},[o,a,r,l,d,S,g,u]),b=n.useCallback(()=>h(j,{children:(s==null?void 0:s.length)&&s.map(t=>h(q,{element:t,value:d(t.props.value)},t.key))}),[s,d]);return _(n.Fragment,{children:[b(),e.map(m)]})};M.defaultProps={point:h(x,{}),animated:!0};try{M.displayName="RadialScatterSeries",M.__docgenInfo={description:"",displayName:"RadialScatterSeries",props:{point:{defaultValue:{value:"<RadialScatterPoint />"},description:"Point that is rendered.",name:"point",required:!1,type:{name:"ReactElement<RadialScatterPointProps, FC<Partial<RadialScatterPointProps>>>"}},xScale:{defaultValue:null,description:"D3 scale for X Axis. Set internally by `RadialScatterPlot`.",name:"xScale",required:!1,type:{name:"any"}},yScale:{defaultValue:null,description:"D3 scale for Y Axis. Set internally by `RadialScatterPlot`.",name:"yScale",required:!1,type:{name:"any"}},data:{defaultValue:null,description:"Parsed data shape. Set internally by `RadialScatterPlot`.",name:"data",required:!1,type:{name:"ChartInternalShallowDataShape[]"}},id:{defaultValue:null,description:"Id set internally by `RadialScatterPlot`.",name:"id",required:!1,type:{name:"string"}},animated:{defaultValue:{value:"true"},description:"Whether to animate the enter/update/exit.",name:"animated",required:!1,type:{name:"boolean"}},activeIds:{defaultValue:null,description:"Active element ids to highlight.",name:"activeIds",required:!1,type:{name:"string[]"}},show:{defaultValue:{value:"true"},description:"When to show the point.",name:"show",required:!1,type:{name:"boolean"}},valueMarkers:{defaultValue:null,description:"Value markers line for the chart.",name:"valueMarkers",required:!1,type:{name:"ReactElement<RadialValueMarkerProps, FC<RadialValueMarkerProps>>[]"}}}}}catch{}export{A as R,M as a,x as b,oe as c,I as d,se as l,de as r};
