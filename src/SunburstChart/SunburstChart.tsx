import React, { FC, ReactElement, useCallback } from 'react';
import {
  ChartContainer,
  ChartContainerChildProps,
  ChartProps
} from '@/common/containers/ChartContainer';
import { ChartNestedDataShape, ChartShallowDataShape } from '@/common/data';
import { hierarchy, partition } from 'd3-hierarchy';
import { CloneElement } from 'reablocks';
import { SunburstSeries, SunburstSeriesProps } from './SunburstSeries';

export interface SunburstChartProps extends ChartProps {
  /**
   * Data the chart will receive to render.
   */
  data: ChartShallowDataShape[] | ChartNestedDataShape[];

  /**
   * The series component that renders the components.
   */
  series?: ReactElement<SunburstSeriesProps, typeof SunburstSeries>;
}

export const SunburstChart: FC<Partial<SunburstChartProps>> = ({
  data,
  id,
  series,
  containerClassName,
  width,
  height,
  className,
  margins,
}) => {
  const getData = useCallback(
    () => {
      const rootHierarchy = hierarchy<any>({ data: data }, (d) => d.data)
        .sum((d) => d.data)
        .sort((a, b) => b.data - a.data);

      const root = partition()
        .size([2 * Math.PI, rootHierarchy.height + 1])
        (rootHierarchy);

      root.each((d: any) => d.current = d);

      return root;
    },
    [data]
  );

  const renderChart = useCallback(
    ({ chartWidth, chartHeight, ...rest }: ChartContainerChildProps) => {
      const root = getData();
      const res = root.descendants().slice(1);

      return (
        <CloneElement<SunburstSeriesProps>
          element={series}
          {...rest}
          id={`${id || rest.id}-series`}
          data={res}
          width={chartWidth}
          height={chartHeight}
        />
      );
    },
    [getData, id, series]
  );

  return (
    <ChartContainer
      id={id}
      width={width}
      height={height}
      containerClassName={containerClassName}
      margins={margins}
      xAxisVisible={false}
      yAxisVisible={false}
      center={true}
      className={className}
    >
      {renderChart}
    </ChartContainer>
  );
};

SunburstChart.defaultProps = {
  margins: 0,
  series: <SunburstSeries />,
  data: []
};
