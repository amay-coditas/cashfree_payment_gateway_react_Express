import React from 'react';
import { SVGProps } from './IIcons';
import { COLOR_PALETTE } from 'constants/colorPalette';

const LineChartIcon: React.FC<SVGProps> = ({
  color = COLOR_PALETTE['blue'],
  ...props
}) => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 32 32"
      {...props}
    >
      <g
        transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
        stroke="none"
        fill={color}
      >
        <path d="M247 263 l-37 -37 -30 18 c-31 17 -31 17 -63 -11 -18 -16 -47 -35 -65 -42 -27 -11 -44 -31 -27 -31 11 0 91 43 108 58 17 15 21 15 49 -1 l31 -18 44 43 c41 40 52 58 35 58 -4 0 -24 -17 -45 -37z" />
        <path d="M254 123 l-30 -37 -37 28 -36 28 -30 -21 c-16 -12 -45 -21 -65 -21 -20 0 -36 -4 -36 -10 0 -15 74 -12 96 5 27 20 41 19 80 -11 l34 -26 23 28 c42 53 46 59 47 67 0 16 -16 5 -46 -30z" />
      </g>
    </svg>
  );
};
export default LineChartIcon;
