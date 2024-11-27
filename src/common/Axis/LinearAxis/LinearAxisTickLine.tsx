import React, { FC, useMemo } from 'react';

export interface LinearAxisTickLineProps {
  height: number;
  width: number;
  orientation: 'horizontal' | 'vertical';
  size: number;
  strokeColor?: string;
  strokeWidth: number;
  position: 'start' | 'end' | 'center';
  className?: string;
}

export const LinearAxisTickLine: FC<Partial<LinearAxisTickLineProps>> = ({
  size = 5,
  position = 'start',
  orientation,
  strokeColor = '#8F979F',
  strokeWidth = 1,
  className
}) => {
  const path = useMemo(() => {
    const isVertical = orientation === 'vertical';
    const tickSize = size || 0;
    const start =
      position === 'start'
        ? tickSize * -1
        : position === 'center'
          ? tickSize * -0.5
          : 0;
    const end = start + tickSize;

    return {
      x1: isVertical ? end : 0,
      x2: isVertical ? start : 0,
      y1: isVertical ? 0 : start,
      y2: isVertical ? 0 : end
    };
  }, [orientation, position, size]);

  return (
    <line
      className={className}
      strokeWidth={strokeWidth}
      stroke={strokeColor}
      {...path}
    />
  );
};
