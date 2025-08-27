import React from 'react';
import { SVGProps } from './IIcons';
import { COLOR_PALETTE } from 'constants/colorPalette';

const CandleChartIcon: React.FC<SVGProps> = ({
  color = COLOR_PALETTE['black'],
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
        fill={color}
        stroke="none"
      >
        <path d="M220 170 l0 -130 40 0 40 0 0 130 0 130 -40 0 -40 0 0 -130z m60 0 c0 -103 -1 -110 -20 -110 -19 0 -20 7 -20 110 0 103 1 110 20 110 19 0 20 -7 20 -110z" />
        <path d="M20 140 l0 -100 40 0 40 0 0 100 0 100 -40 0 -40 0 0 -100z m60 0 c0 -73 -2 -80 -20 -80 -18 0 -20 7 -20 80 0 73 2 80 20 80 18 0 20 -7 20 -80z" />
        <path d="M120 110 l0 -70 40 0 40 0 0 70 0 70 -40 0 -40 0 0 -70z m60 0 c0 -43 -3 -50 -20 -50 -17 0 -20 7 -20 50 0 43 3 50 20 50 17 0 20 -7 20 -50z" />
      </g>
    </svg>
  );
};

export default CandleChartIcon;
