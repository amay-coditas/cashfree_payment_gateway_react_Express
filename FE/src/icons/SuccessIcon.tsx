import { COLOR_PALETTE } from 'constants/colorPalette';
import { SVGProps } from './IIcons';
import React from 'react';

const SuccessIcon: React.FC<SVGProps> = ({
  color = COLOR_PALETTE['green'],
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={color}
      d="M12 2.25A9.75 9.75 0 1021.75 12 9.76 9.76 0 0012 2.25zm4.28 8.03l-5.25 5.25a.747.747 0 01-1.06 0l-2.25-2.25a.75.75 0 111.06-1.06l1.72 1.72 4.72-4.72a.751.751 0 011.06 1.06z"
    />
  </svg>
);

export default SuccessIcon;
