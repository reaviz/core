import{j as e}from"./jsx-runtime-86dfebf6.js";import{B as T,a as N,S as g,d as X,M as v,R as a,b as r,c as V,G as s,H as _}from"./BarChart-9c825fb0.js";import{M as q}from"./MarimekkoChart-d265de4f.js";import{S as h}from"./StackedBarChart-f620755a.js";import{S as E}from"./StackedNormalizedBarChart-67a599d9.js";import{b as y}from"./binned-b046df83.js";import{m as o}from"./category-b5cb91f4.js";import"./sonar-ace0ce62.js";import"./moment-a9aaa855.js";import{c as F}from"./chroma-699b8ba0.js";import{b as j,c as H,G as I,e as J,d as K,L as P,a as Q}from"./RadialValueMarker-7b3f8322.js";import{G as i,a as t}from"./schemes-56affe43.js";import"./index-1b03fe98.js";import"./index-256d607f.js";import"./functions-234b1417.js";import"./RadialAxis-6c2bc59c.js";import"./range-163cdb4a.js";import"./rdk-0beed5d4.js";import"./index-6fd5a17b.js";import"./frame-a8f3761f.js";import"./utils-83ce1bd4.js";import"./helper-26bacd48.js";import"./quantile-a1f83f78.js";import"./DiscreteLegendEntry-49610185.js";import"./SequentialLegend-1647127f.js";import"./Count-a38a1947.js";import"./SVGVisualElement-f20753d9.js";import"./builder-9833ba7e.js";import"./expand-7b65a05b.js";import"./time-a9784969.js";import"./index-f6b105ee.js";import"./extends-20258d9b.js";const De={title:"Charts/Bar Chart/Vertical/Multi Series",component:T,subcomponents:{BarSeries:N,StackedBarSeries:g,StackedNormalizedBarSeries:X,MarimekkoBarSeries:v,RangeLines:a,Bar:r,BarLabel:V,GuideBar:s,HistogramBarSeries:_}},n=()=>e(T,{width:350,height:350,data:o,series:e(N,{type:"grouped",bar:e(r,{gradient:e(i,{}),rangeLines:e(a,{position:"top",strokeWidth:3}),guide:e(s,{})}),colorScheme:"cybertron",padding:.8})}),d=()=>e(h,{width:350,height:350,data:o,series:e(g,{bar:e(r,{rx:0,ry:0,gradient:e(i,{stops:[e(t,{offset:"5%",stopOpacity:.1},"start"),e(t,{offset:"90%",stopOpacity:.7},"stop")]}),rangeLines:e(a,{position:"top",strokeWidth:3}),guide:e(s,{})}),colorScheme:"cybertron"})}),p=()=>e(h,{width:350,height:350,data:o,gridlines:null,series:e(g,{bar:[{start:"#d7b5d8",end:"#980043"},{start:"#fbb4b9",end:"#7a0177"},{start:"#c2e699",end:"#006837"},{start:"#a1dab4",end:"#253494"}].map(S=>e(r,{gradient:e(i,{stops:[e(t,{offset:"0%",color:S.start},"start"),e(t,{offset:"100%",color:S.end},"stop")]}),width:10}))}),yAxis:e(j,{axisLine:null,tickSeries:e(H,{line:null,label:null})})}),c=()=>e(h,{width:400,height:250,margins:0,data:y,gridlines:e(I,{line:e(J,{direction:"y"})}),series:e(g,{bar:[e(r,{rx:0,ry:0,guide:e(s,{}),gradient:e(i,{stops:[e(t,{offset:"5%",stopOpacity:.7},"stop"),e(t,{offset:"90%",stopOpacity:.1},"start")]}),rangeLines:e(a,{position:"top",strokeWidth:3})}),e(r,{rx:0,ry:0,guide:e(s,{}),gradient:e(i,{stops:[e(t,{offset:"5%",stopOpacity:.1},"start"),e(t,{offset:"90%",stopOpacity:.7},"stop")]}),rangeLines:e(a,{position:"top",strokeWidth:3})})],type:"stackedDiverging",colorScheme:F.scale(["ACB7C9","418AD7"]).colors(y[0].data.length)}),yAxis:e(j,{roundDomains:!0,tickSeries:e(H,{line:null,label:e(K,{padding:5})})}),xAxis:e(P,{type:"category",position:"center",tickSeries:e(Q,{line:null,label:null})})}),m=()=>e(E,{width:350,height:350,data:o,series:e(X,{bar:e(r,{rx:0,ry:0,gradient:e(i,{stops:[e(t,{offset:"5%",stopOpacity:.1},"start"),e(t,{offset:"90%",stopOpacity:.7},"stop")]}),rangeLines:e(a,{position:"top",strokeWidth:3})},"stacked-normalized-bar"),colorScheme:"cybertron"})}),l=()=>e(q,{width:350,height:350,data:o,series:e(v,{bar:e(r,{rx:0,ry:0,padding:10,gradient:e(i,{stops:[e(t,{offset:"5%",stopOpacity:.1},"start"),e(t,{offset:"90%",stopOpacity:.7},"stop")]}),rangeLines:e(a,{position:"top",strokeWidth:3})},"marimekko-bar"),colorScheme:"cybertron"})});var k,u,f;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:'() => <BarChart width={350} height={350} data={multiCategory} series={<BarSeries type="grouped" bar={<Bar gradient={<Gradient />} rangeLines={<RangeLines position="top" strokeWidth={3} />} guide={<GuideBar />} />} colorScheme="cybertron" padding={0.8} />} />',...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var b,B,L;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:'() => <StackedBarChart width={350} height={350} data={multiCategory} series={<StackedBarSeries bar={<Bar rx={0} ry={0} gradient={<Gradient stops={[<GradientStop offset="5%" stopOpacity={0.1} key="start" />, <GradientStop offset="90%" stopOpacity={0.7} key="stop" />]} />} rangeLines={<RangeLines position="top" strokeWidth={3} />} guide={<GuideBar />} />} colorScheme="cybertron" />} />',...(L=(B=d.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var x,G,C;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`() => <StackedBarChart width={350} height={350} data={multiCategory} gridlines={null} series={<StackedBarSeries bar={[{
  start: '#d7b5d8',
  end: '#980043'
}, {
  start: '#fbb4b9',
  end: '#7a0177'
}, {
  start: '#c2e699',
  end: '#006837'
}, {
  start: '#a1dab4',
  end: '#253494'
}].map(gradient => <Bar gradient={<Gradient stops={[<GradientStop offset="0%" key="start" color={gradient.start} />, <GradientStop offset="100%" key="stop" color={gradient.end} />]} />} width={10} />)} />} yAxis={<LinearYAxis axisLine={null} tickSeries={<LinearYAxisTickSeries line={null} label={null} />} />} />`,...(C=(G=p.parameters)==null?void 0:G.docs)==null?void 0:C.source}}};var A,O,w;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`() => <StackedBarChart width={400} height={250} margins={0} data={binnedDateData} gridlines={<GridlineSeries line={<Gridline direction="y" />} />} series={<StackedBarSeries bar={[<Bar rx={0} ry={0} guide={<GuideBar />} gradient={<Gradient stops={[<GradientStop offset="5%" stopOpacity={0.7} key="stop" />, <GradientStop offset="90%" stopOpacity={0.1} key="start" />]} />} rangeLines={<RangeLines position="top" strokeWidth={3} />} />, <Bar rx={0} ry={0} guide={<GuideBar />} gradient={<Gradient stops={[<GradientStop offset="5%" stopOpacity={0.1} key="start" />, <GradientStop offset="90%" stopOpacity={0.7} key="stop" />]} />} rangeLines={<RangeLines position="top" strokeWidth={3} />} />]} type="stackedDiverging" colorScheme={chroma.scale(['ACB7C9', '418AD7']).colors(binnedDateData[0].data.length)} />} yAxis={<LinearYAxis roundDomains={true} tickSeries={<LinearYAxisTickSeries line={null} label={<LinearYAxisTickLabel padding={5} />} />} />} xAxis={<LinearXAxis type="category" position="center" tickSeries={<LinearXAxisTickSeries line={null} label={null} />} />} />`,...(w=(O=c.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var D,W,M;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:'() => <StackedNormalizedBarChart width={350} height={350} data={multiCategory} series={<StackedNormalizedBarSeries bar={<Bar key="stacked-normalized-bar" rx={0} ry={0} gradient={<Gradient stops={[<GradientStop offset="5%" stopOpacity={0.1} key="start" />, <GradientStop offset="90%" stopOpacity={0.7} key="stop" />]} />} rangeLines={<RangeLines position="top" strokeWidth={3} />} />} colorScheme="cybertron" />} />',...(M=(W=m.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var R,Y,z;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:'() => <MarimekkoChart width={350} height={350} data={multiCategory} series={<MarimekkoBarSeries bar={<Bar key="marimekko-bar" rx={0} ry={0} padding={10} gradient={<Gradient stops={[<GradientStop offset="5%" stopOpacity={0.1} key="start" />, <GradientStop offset="90%" stopOpacity={0.7} key="stop" />]} />} rangeLines={<RangeLines position="top" strokeWidth={3} />} />} colorScheme="cybertron" />} />',...(z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};export{l as Marimekko,n as Simple,d as Stacked,p as StackedCustomStyle,c as StackedDiverging,m as StackedNormalized,De as default};
