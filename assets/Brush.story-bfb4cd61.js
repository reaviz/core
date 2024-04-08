import{j as e,a as M}from"./jsx-runtime-86dfebf6.js";import{r as O}from"./index-1b03fe98.js";import{L as _,a as q}from"./LineChart-ad7cee98.js";import{l as r,r as l,o as g,d as T,e as Q}from"./sonar-ace0ce62.js";import{C as n,L,a as k,k as A,b as t,c as s,G as I,e as J,f as R,d as V,o as ee}from"./RadialValueMarker-7b3f8322.js";import"./RadialAxis-6c2bc59c.js";import{T as y,c as ie,t as ae}from"./schemes-56affe43.js";import{S as x,a as S,b as D}from"./ScatterPlot-34d242f9.js";import{B as re,H as te}from"./BarChart-9c825fb0.js";import"./MarimekkoChart-d265de4f.js";import"./StackedBarChart-f620755a.js";import"./StackedNormalizedBarChart-67a599d9.js";import"./HistogramBarChart-3a034dc5.js";import{r as K}from"./range-163cdb4a.js";import"./AreaChart-a3475e62.js";import"./index-256d607f.js";import"./rdk-0beed5d4.js";import"./index-6fd5a17b.js";import"./frame-a8f3761f.js";import"./interpolation-4baac368.js";import"./functions-234b1417.js";import"./utils-83ce1bd4.js";import"./chroma-699b8ba0.js";import"./area-a8b9ef93.js";import"./helper-26bacd48.js";import"./quantile-a1f83f78.js";import"./index-9494de61.js";import"./builder-9833ba7e.js";import"./expand-7b65a05b.js";import"./StackedNormalizedAreaChart-e4db09db.js";import"./moment-a9aaa855.js";import"./time-a9784969.js";import"./index-f6b105ee.js";import"./extends-20258d9b.js";import"./SVGVisualElement-f20753d9.js";import"./DiscreteLegendEntry-49610185.js";import"./SequentialLegend-1647127f.js";import"./Count-a38a1947.js";const _e={title:"Utils/Brush"},m=()=>e(_,{width:450,height:85,data:r,brush:e(n,{disabled:!1}),series:e(q,{tooltip:e(y,{disabled:!0}),markLine:null}),xAxis:e(L,{type:"time",tickSeries:e(k,{label:e(A,{rotation:!1})})}),yAxis:e(t,{axisLine:null,tickSeries:e(s,{label:null,line:null})})}),u=()=>e(x,{width:450,height:85,data:r,brush:e(n,{disabled:!1}),series:e(S,{point:e(D,{tooltip:e(y,{disabled:!0})})}),yAxis:e(t,{axisLine:null,tickSeries:e(s,{label:null,line:null})})}),c=()=>{const o=K(50).filter(()=>l(1,2)%2).map(i=>({id:i,key:g(l(i-2,i+2)),data:l(1,10)})).sort((i,a)=>i>a?-1:i<a?1:0);return e(re,{width:450,height:45,brush:e(n,{disabled:!1,onBrushChange:({domain:i})=>console.log(i)}),data:o,gridlines:null,yAxis:e(t,{axisLine:null,tickSeries:e(s,{label:null,line:null})}),xAxis:e(L,{type:"category",tickSeries:e(k,{label:e(A,{rotation:!1})})}),series:e(te,{tooltip:null,binSize:60*60*24*1e3})})},p=()=>{const o=K(20).filter(()=>l(1,10)%2).map(i=>({key:g(i),data:1,metadata:{severity:l(1,10)}})).reverse();return e(x,{width:450,height:85,data:o,brush:e(n,{disabled:!1}),series:e(S,{point:e(D,{tooltip:e(y,{disabled:!0}),symbol:i=>{const a=i.metadata.severity/50,d=a*100;return e("g",{transform:`translate(-${d}, -${d})`,children:e("polygon",{points:"225,10 100,210 350,210",transform:`scale(${a})`,style:{fill:"rgba(206, 0, 62, .7)",stroke:"#FF004D",strokeWidth:5}})})}})}),yAxis:e(t,{domain:[0,2],axisLine:null,tickSeries:e(s,{label:null,line:null})}),xAxis:e(L,{type:"time",roundDomains:!0,domain:[g(22),g(2)],axisLine:null,tickSeries:e(k,{line:null,label:e(A,{rotation:!1,padding:5})})}),gridlines:e(I,{line:e(J,{direction:"x"})})})},h=()=>e(_,{width:450,height:85,data:r,brush:e(n,{disabled:!1,domain:[r[r.length/2].key,r[r.length-1].key]}),series:e(q,{tooltip:e(y,{disabled:!0}),markLine:null}),xAxis:e(L,{type:"time",tickSeries:e(k,{label:e(A,{rotation:!1})})})}),b=()=>e(se,{});class se extends O.Component{constructor(){super(...arguments),this.state={domain:void 0,brushing:!1},this.onBrushChange=({domain:i})=>{clearTimeout(this.timeout),this.timeout=setTimeout(()=>this.setState({brushing:!1}),3e3),this.setState({domain:i,brushing:!0})}}render(){const{brushing:i,domain:a}=this.state,d=T.map(f=>({...f,data:1}));return M("div",{children:[e(x,{height:400,width:750,data:T,series:e(S,{animated:!i}),gridlines:e(I,{line:e(J,{direction:"y"}),stripe:e(R,{direction:"y"})}),yAxis:e(t,{domain:Q,type:"category",tickSeries:e(s,{label:e(V,{rotation:!1})})}),zoomPan:e(ee,{disabled:!1,onZoomPan:this.onBrushChange,domain:a})}),e("br",{}),e("div",{style:{marginLeft:"100px"},children:e(x,{height:50,width:650,data:d,margins:[0,10],gridlines:null,yAxis:e(t,{domain:[0,2],type:"value",axisLine:null,tickSeries:e(s,{line:null,label:null})}),series:e(S,{animated:!i,point:e(D,{tooltip:e(ie,{theme:ae,disabled:!0}),size:f=>f.metadata.severity+5})}),brush:e(n,{disabled:!1,domain:a,onBrushChange:this.onBrushChange})})})]})}}var B,C,X;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:'() => <LineChart width={450} height={85} data={largeDateData} brush={<ChartBrush disabled={false} />} series={<LineSeries tooltip={<TooltipArea disabled={true} />} markLine={null} />} xAxis={<LinearXAxis type="time" tickSeries={<LinearXAxisTickSeries label={<LinearXAxisTickLabel rotation={false} />} />} />} yAxis={<LinearYAxis axisLine={null} tickSeries={<LinearYAxisTickSeries label={null} line={null} />} />} />',...(X=(C=m.parameters)==null?void 0:C.docs)==null?void 0:X.source}}};var w,v,Y;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:"() => <ScatterPlot width={450} height={85} data={largeDateData} brush={<ChartBrush disabled={false} />} series={<ScatterSeries point={<ScatterPoint tooltip={<TooltipArea disabled={true} />} />} />} yAxis={<LinearYAxis axisLine={null} tickSeries={<LinearYAxisTickSeries label={null} line={null} />} />} />",...(Y=(v=u.parameters)==null?void 0:v.docs)==null?void 0:Y.source}}};var P,z,G;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`() => {
  const barData = range(50).filter(() => randomNumber(1, 2) % 2).map(i => ({
    id: i,
    key: generateDate(randomNumber(i - 2, i + 2)),
    data: randomNumber(1, 10)
  })).sort((a, b) => a > b ? -1 : a < b ? 1 : 0);
  return <BarChart width={450} height={45} brush={<ChartBrush disabled={false} onBrushChange={({
    domain
  }) => console.log(domain)} />} data={barData} gridlines={null} yAxis={<LinearYAxis axisLine={null} tickSeries={<LinearYAxisTickSeries label={null} line={null} />} />} xAxis={<LinearXAxis type="category" tickSeries={<LinearXAxisTickSeries label={<LinearXAxisTickLabel rotation={false} />} />} />} series={<HistogramBarSeries tooltip={null} binSize={60 * 60 * 24 * 1000} />} />;
}`,...(G=(z=c.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var N,$,Z;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`() => {
  const data = range(20).filter(() => randomNumber(1, 10) % 2).map(i => {
    return {
      key: generateDate(i),
      data: 1,
      metadata: {
        severity: randomNumber(1, 10)
      }
    };
  }).reverse();
  return <ScatterPlot width={450} height={85} data={data} brush={<ChartBrush disabled={false} />} series={<ScatterSeries point={<ScatterPoint tooltip={<TooltipArea disabled={true} />} symbol={d => {
    const scale = d.metadata.severity / 50;
    const size = scale * 100;
    return <g transform={\`translate(-\${size}, -\${size})\`}>
                    <polygon points="225,10 100,210 350,210" transform={\`scale(\${scale})\`} style={{
        fill: 'rgba(206, 0, 62, .7)',
        stroke: '#FF004D',
        strokeWidth: 5
      }} />
                  </g>;
  }} />} />} yAxis={<LinearYAxis domain={[0, 2]} axisLine={null} tickSeries={<LinearYAxisTickSeries label={null} line={null} />} />} xAxis={<LinearXAxis type="time" roundDomains={true} domain={[generateDate(22), generateDate(2)]} axisLine={null} tickSeries={<LinearXAxisTickSeries line={null} label={<LinearXAxisTickLabel rotation={false} padding={5} />} />} />} gridlines={<GridlineSeries line={<Gridline direction="x" />} />} />;
}`,...(Z=($=p.parameters)==null?void 0:$.docs)==null?void 0:Z.source}}};var F,j,H;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:'() => <LineChart width={450} height={85} data={largeDateData} brush={<ChartBrush disabled={false} domain={[largeDateData[largeDateData.length / 2].key, largeDateData[largeDateData.length - 1].key]} />} series={<LineSeries tooltip={<TooltipArea disabled={true} />} markLine={null} />} xAxis={<LinearXAxis type="time" tickSeries={<LinearXAxisTickSeries label={<LinearXAxisTickLabel rotation={false} />} />} />} />',...(H=(j=h.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var W,E,U;b.parameters={...b.parameters,docs:{...(W=b.parameters)==null?void 0:W.docs,source:{originalSource:"() => <ZoomBrushStory />",...(U=(E=b.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};export{c as Bar,p as Bubble,h as DefaultSelection,m as Line,u as Scatter,b as ZoomCombo,_e as default};
