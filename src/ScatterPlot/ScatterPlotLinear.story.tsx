import React, { Fragment, useState } from 'react';
import { ScatterPlot } from './ScatterPlot';
import {
  signalChartData,
  largeSignalChartData,
  medSignalChartData,
  signalStageData,
  signalStages
} from '../../demo/signals';
import { histogramNumberData, numberData, randomNumber } from '../../demo';
import { range } from 'd3-array';
import { GridlineSeries, Gridline, GridStripe } from '../common/Gridline';
import { ScatterSeries, ScatterPoint, ScatterArea } from './ScatterSeries';
import {
  LinearYAxis,
  LinearYAxisTickSeries,
  LinearYAxisTickLabel,
  LinearXAxis
} from '../common/Axis/LinearAxis';
import { symbolStar, symbol } from 'd3-shape';
import { schemes } from '../common/color';
import { LinearValueMarker } from '../common';

export default {
  title: 'Charts/Scatter Plot/Linear',
  component: ScatterPlot,
  subcomponents: {
    ScatterSeries,
    ScatterPoint
  }
};

export const Simple = () => (
  <ScatterPlot
    height={400}
    width={750}
    data={medSignalChartData}
    series={
      <ScatterSeries
        point={<ScatterPoint color={schemes.cybertron[0]} size={4} />}
      />
    }
  />
);

export const CategoricalAxis = () => (
  <ScatterPlot
    height={400}
    width={750}
    data={signalStageData}
    yAxis={
      <LinearYAxis
        type="category"
        domain={signalStages as any}
        tickSeries={
          <LinearYAxisTickSeries
            label={<LinearYAxisTickLabel rotation={false} />}
          />
        }
      />
    }
    gridlines={
      <GridlineSeries
        line={<Gridline direction="y" />}
        stripe={<GridStripe direction="y" />}
      />
    }
  />
);

export const NoAnimation = () => (
  <ScatterPlot
    height={400}
    width={750}
    data={medSignalChartData}
    series={<ScatterSeries animated={false} />}
  />
);

export const Performance = () => (
  <Fragment>
    {range(15).map((i) => (
      <div
        key={i}
        style={{
          width: '250px',
          height: '250px',
          border: 'solid 1px green',
          margin: '25px',
          display: 'inline-block'
        }}
      >
        <ScatterPlot data={medSignalChartData} />
      </div>
    ))}
  </Fragment>
);

export const Autosize = () => (
  <div style={{ width: '50vw', height: '50vh', border: 'solid 1px red' }}>
    <ScatterPlot data={medSignalChartData} />
  </div>
);

export const Symbols = () => (
  <ScatterPlot
    height={400}
    width={750}
    data={signalChartData}
    series={
      <ScatterSeries
        point={
          <ScatterPoint
            symbol={() => {
              const d = symbol().type(symbolStar).size(175)();

              return (
                <path
                  d={d!}
                  style={{
                    fill: 'lime',
                    stroke: 'purple',
                    strokeWidth: 1.5
                  }}
                />
              );
            }}
          />
        }
      />
    }
  />
);

export const Bubble = () => (
  <ScatterPlot
    height={400}
    width={750}
    data={largeSignalChartData}
    margins={20}
    series={
      <ScatterSeries
        point={
          <ScatterPoint
            color="rgba(45, 96, 232, .8)"
            size={(v) => v.metadata.severity + 5}
          />
        }
      />
    }
  />
);

export const LiveUpdate = () => <BubbleChartLiveUpdate />;

const BubbleChartLiveUpdate = () => {
  const [data, setData] = useState(largeSignalChartData.map((d) => ({ ...d })));

  const updateData = () => {
    const d = data.map((item) => {
      item.data = randomNumber(1, 100);
      return { ...item };
    });

    setData(d);
  };

  return (
    <Fragment>
      <ScatterPlot
        height={400}
        width={750}
        data={data}
        margins={20}
        series={
          <ScatterSeries
            point={
              <ScatterPoint
                color="rgba(45, 96, 232, .8)"
                size={(v) => {
                  return v.metadata.severity + 5;
                }}
              />
            }
          />
        }
      />
      <br />
      <button onClick={updateData}>Update</button>
    </Fragment>
  );
};

export const WithArea = () => (
  <ScatterPlot
    height={400}
    width={750}
    data={histogramNumberData}
    xAxis={<LinearXAxis type="value" domain={[0, 50]} />}
    yAxis={<LinearYAxis type="value" domain={[0, 10]} />}
    series={
      <ScatterSeries
        scatterAreas={[
          <ScatterArea
            startPosition={{ x: 0, y: 1 }}
            endPosition={{ x: 25, y: 5 }}
            borderColor={'#1644A8'}
            borderWidth={2}
            color="rgba(43, 43, 71, 0.30)"
          />
        ]}
        point={<ScatterPoint color={schemes.cybertron[0]} size={4} />}
        valueMarkers={[
          <LinearValueMarker value={5} color="#858596" />,
          <LinearValueMarker value={25} color="#858596" isHorizontal={false} />
        ]}
      />
    }
  />
);
