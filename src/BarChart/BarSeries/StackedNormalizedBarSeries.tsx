import React, { FC } from 'react';
import { offset } from '@floating-ui/dom';
import { BarSeriesProps, BarSeries } from './BarSeries';
import { Bar, BAR_DEFAULT_PROPS } from './Bar';
import { RangeLines } from './RangeLines';
import {
  ChartTooltip,
  TooltipTemplate,
  TooltipArea,
  TOOLTIP_AREA_DEFAULT_PROPS,
  CHART_TOOLTIP_DEFAULT_PROPS
} from '@/common/Tooltip';
import { formatValue } from '@/common/utils/formatting';
import {
  Gradient,
  GRADIENT_DEFAULT_PROPS,
  GradientStop
} from '@/common/Gradient';

export const StackedNormalizedBarSeries: FC<Partial<BarSeriesProps>> = (
  props
) => <BarSeries type="stackedNormalized" {...props} />;

StackedNormalizedBarSeries.defaultProps = {
  ...BarSeries.defaultProps,
  type: 'stackedNormalized',
  tooltip: (
    <TooltipArea
      {...TOOLTIP_AREA_DEFAULT_PROPS}
      tooltip={
        <ChartTooltip
          {...CHART_TOOLTIP_DEFAULT_PROPS}
          followCursor={true}
          modifiers={[offset(5)]}
          content={(point, color) => {
            point.data = point.data.map((d) => {
              // Handle horz case
              const start = isNaN(d.y0) ? d.x0 : d.y0;
              const end = isNaN(d.y1) ? d.x1 : d.y1;

              return {
                ...d,
                value: `${formatValue(Math.floor((end - start) * 100))}%`
              };
            });

            return <TooltipTemplate value={point} color={color} />;
          }}
        />
      }
    />
  ),
  bar: (
    <Bar
      {...BAR_DEFAULT_PROPS}
      gradient={
        <Gradient
          {...GRADIENT_DEFAULT_PROPS}
          stops={[
            <GradientStop offset="5%" stopOpacity={0.1} key="start" />,
            <GradientStop offset="90%" stopOpacity={0.7} key="stop" />
          ]}
        />
      }
      rangeLines={<RangeLines position="top" strokeWidth={3} />}
    />
  )
};
