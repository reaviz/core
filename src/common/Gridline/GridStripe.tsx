import React, { FC, useMemo } from 'react';
import css from './GridStripe.module.css';

export interface GridStripeProps {
  /**
   * Position set by the `GridlineSeries`.
   */
  position: 'horizontal' | 'vertical';

  /**
   * Stripe fill color.
   */
  fill: string;

  /**
   * Height of the line set by the `GridlineSeries`.
   */
  height: number;

  /**
   * Width of the line set by the `GridlineSeries`.
   */
  width: number;

  /**
   * Direction set by the `GridlineSeries`.
   */
  direction: 'all' | 'x' | 'y';

  /**
   * D3 Scale set by `GridlineSeries`.
   */
  scale: any;

  /**
   * Data point for the position set by the `GridlineSeries`.
   */
  data: number;

  /**
   * Index set by the `GridlineSeries`.
   */
  index: number;
}

export const GridStripe: FC<Partial<GridStripeProps>> = ({
  fill = '#393c3e',
  position,
  data,
  height,
  width,
  scale,
  index
}) => {
  const coords = useMemo(() => {
    const pos = scale(data);
    const stripeFill = index % 2 ? 'none' : fill;
    const dim = scale.bandwidth();

    return position === 'vertical' ? {
        y: 0,
        x: pos,
        height: height,
        width: dim,
        fill: stripeFill
      } : {
        y: pos,
        x: 0,
        height: dim,
        width,
        fill: stripeFill
      };
  }, [scale, data, index, height, width, fill, position]);

  return <rect className={css.gridStripe} {...coords} />;
};
