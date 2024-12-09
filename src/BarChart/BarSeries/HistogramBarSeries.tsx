import React, { FC } from 'react';
import { offset } from '@floating-ui/dom';
import { BarSeriesProps, BarSeries } from './BarSeries';
import {
  ChartTooltip,
  TooltipTemplate,
  TooltipArea,
  TOOLTIP_AREA_DEFAULT_PROPS,
  CHART_TOOLTIP_DEFAULT_PROPS
} from '@/common/Tooltip';
import { formatValue } from '@/common/utils/formatting';
import { schemes } from '@/common/color';

export const HistogramBarSeries: FC<Partial<BarSeriesProps>> = ({
  type,
  ...rest
}) => <BarSeries {...rest} />;

HistogramBarSeries.defaultProps = {
  ...BarSeries.defaultProps,
  colorScheme: schemes.cybertron[0],
  tooltip: (
    <TooltipArea
      {...TOOLTIP_AREA_DEFAULT_PROPS}
      tooltip={
        <ChartTooltip
          {...CHART_TOOLTIP_DEFAULT_PROPS}
          followCursor={true}
          modifiers={[offset(5)]}
          content={(point, color) => {
            const data = {
              ...point,
              x: `${formatValue(point.x0)} - ${formatValue(point.x1)}`,
              value: point.y
            };

            return <TooltipTemplate value={data} color={color} />;
          }}
        />
      }
    />
  )
};
