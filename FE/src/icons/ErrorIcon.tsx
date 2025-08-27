import { COLOR_PALETTE } from 'constants/colorPalette';
import { SVGProps } from './IIcons';
import React from 'react';

const ErrorIcon: React.FC<SVGProps> = ({
  color = COLOR_PALETTE['red'],
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill={color}
      d="M10 .25A9.75 9.75 0 1019.75 10 9.76 9.76 0 0010 .25zm3.53 12.22a.75.75 0 11-1.06 1.06L10 11.06l-2.47 2.47a.75.75 0 11-1.06-1.06L8.94 10 6.47 7.53a.75.75 0 011.06-1.06L10 8.94l2.47-2.47a.751.751 0 011.06 1.06L11.06 10l2.47 2.47z"
    />
  </svg>
);

export default ErrorIcon;
