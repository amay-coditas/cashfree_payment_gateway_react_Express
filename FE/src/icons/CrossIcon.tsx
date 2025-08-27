import React from 'react';
import { COLOR_PALETTE } from 'constants/colorPalette';
import { SVGProps } from './IIcons';

const CrossIcon: React.FC<SVGProps> = ({
  color = COLOR_PALETTE['black'],
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <g>
        <path
          d="M18.75 5.25L5.25 18.75"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.75 18.75L5.25 5.25"
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default CrossIcon;
