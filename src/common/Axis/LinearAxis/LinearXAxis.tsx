import React, { FC } from 'react';
import {
  LinearAxisTickLabelProps,
  LinearAxisTickLabel
} from './LinearAxisTickLabel';
import {
  LinearAxisTickLineProps,
  LinearAxisTickLine
} from './LinearAxisTickLine';
import {
  LinearAxisTickSeriesProps,
  LinearAxisTickSeries,
  LINEAR_AXIS_TICK_SERIES_DEFAULT_PROPS
} from './LinearAxisTickSeries';
import {
  LinearAxisProps,
  LinearAxis,
  LINEAR_AXIS_DEFAULT_PROPS
} from './LinearAxis';

export const LinearXAxisTickLabel: FC<Partial<LinearAxisTickLabelProps>> = (
  props
) => <LinearAxisTickLabel {...props} />;
LinearXAxisTickLabel.defaultProps = {
  ...LinearAxisTickLabel.defaultProps,
  rotation: true,
  position: 'end',
  align: 'center'
};

export const LinearXAxisTickLine: FC<Partial<LinearAxisTickLineProps>> = (
  props
) => <LinearAxisTickLine {...props} />;
LinearXAxisTickLine.defaultProps = {
  ...LinearAxisTickLine.defaultProps,
  position: 'end'
};

export const LinearXAxisTickSeries: FC<Partial<LinearAxisTickSeriesProps>> = (
  props
) => (
  <LinearAxisTickSeries
    {...LINEAR_X_AXIS_TICK_SERIES_DEFAULT_PROPS}
    {...props}
  />
);
export const LINEAR_X_AXIS_TICK_SERIES_DEFAULT_PROPS = {
  ...LINEAR_AXIS_TICK_SERIES_DEFAULT_PROPS,
  tickSize: 75,
  line: <LinearXAxisTickLine />,
  label: <LinearXAxisTickLabel />
};

export const LinearXAxis: FC<Partial<LinearAxisProps>> = (props) => (
  <LinearAxis {...LINEAR_X_AXIS_DEFAULT_PROPS} {...props} />
);
export const LINEAR_X_AXIS_DEFAULT_PROPS = {
  ...LINEAR_AXIS_DEFAULT_PROPS,
  position: 'end',
  roundDomains: false,
  scaled: false,
  type: 'value',
  orientation: 'horizontal',
  tickSeries: <LinearXAxisTickSeries />
} as Partial<LinearAxisProps>;
