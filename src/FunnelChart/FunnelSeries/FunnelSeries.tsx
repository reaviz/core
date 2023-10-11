import React, { MouseEvent, useCallback, useMemo } from 'react';
import { FunnelArc } from './FunnelArc';
import { CloneElement } from 'rdk';
import { FunnelArcProps } from './FunnelArc';
import { FunnelAxis, FunnelAxisProps } from './FunnelAxis';
import { ChartShallowDataShape, getClosestPoint, getPositionForTarget } from '../../common';
import { ClickEvent } from '../../common/types';
import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';

export interface FunnelSeriesProps {
  /**
   * Parsed data shape. Set internally by `FunnelChart`.
   */
  data: ChartShallowDataShape[];

  /**
   * The arc component that renders the funnel shape.
   */
  arc: React.ReactElement<FunnelArcProps, typeof FunnelArc>;

  /**
   * The axis component that renders the funnel axis.
   */
  axis: React.ReactElement<FunnelAxisProps, typeof FunnelAxis>;

  /**
   * Height of the chart. Set internally by `FunnelChart`.
   */
  height: number;

  /**
   * Width of the chart. Set internally by `FunnelChart`.
   */
  width: number;

  /**
   * Event for when a segment is clicked.
   */
  onSegmentClick?: (e: ClickEvent) => void;
}

export const FunnelSeries: React.FC<Partial<FunnelSeriesProps>> = ({
  data,
  arc,
  axis,
  height,
  width,
  onSegmentClick,
}) => {
  // Calculate the funnel data on mount and when data changes
  const getScales = useCallback(({ chartWidth, chartHeight }) => {
    const yScale = scaleLinear()
      .domain([
        -max(data, ({ data }) => data),
        max(data, ({ data }) => data)
      ])
      .nice()
      .range([chartHeight, 0]);

    const xScale = scaleLinear()
      .domain([0, data.length])
      .range([0, chartWidth]);

    const transformedData = data.map((d, i) => ({
      ...d,
      key: d.key,
      x: xScale(i),
      i
    }));

    return {
      data: transformedData,
      yScale,
      xScale
    };
  }, [data]);


  const getDatas = useCallback(({ chartWidth, chartHeight }) => {
    // The 'layered' variant is actually just a series of funnel charts
    // laid on top of each other to create the effect of a layered funnel.
    if (arc.props.variant === 'layered') {
      const offset = chartHeight / 4;
      const halfOffset = offset / 2;

      return {
        halfOffset,
        datas: [
          { data, ...getScales({ chartHeight: chartHeight, chartWidth }) },
          { data, ...getScales({ chartHeight: chartHeight - offset, chartWidth }) },
          { data, ...getScales({ chartHeight: chartHeight - (offset * 2), chartWidth }) },
        ]
      };
    } else {
      return {
        halfOffset: 0,
        datas: [
          { data, ...getScales({ chartHeight: chartHeight, chartWidth }) }
        ]
      };
    }
  }, [data, arc, getScales]);

  const { datas, halfOffset } = useMemo(() => {
    return getDatas({ chartHeight: height, chartWidth: width });
  }, [getDatas, height, width]);

  const handleSegmentClick = useCallback((e: MouseEvent) => {
    if (onSegmentClick) {
      const { xScale, data } = datas[0];
      const { clientX, clientY, target } = e;
      const position = getPositionForTarget({ target, clientX, clientY });
      const value = getClosestPoint(position.x, xScale, data, 'i');
      onSegmentClick({ value: { key: value.key, data: value.data }, nativeEvent: e });
    }
  }, [datas, onSegmentClick]);

  return (
    <>
      {datas.map((d, i) => (
        <g key={i} style={{ transform: `translate(0, ${i * halfOffset}px)` }} onClick={handleSegmentClick}>
          <CloneElement<FunnelArcProps>
            element={arc}
            {...d}
            id={i.toString()}
            index={i}
          />
        </g>
      ))}
      <CloneElement<FunnelAxisProps>
        element={axis}
        data={data}
        xScale={datas[0].xScale}
        yScale={datas[0].yScale}
      />
    </>
  );
};

FunnelSeries.defaultProps = {
  arc: <FunnelArc />,
  axis: <FunnelAxis />
};

