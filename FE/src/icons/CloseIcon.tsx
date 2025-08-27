import { COLOR_PALETTE } from 'constants/colorPalette';
import { SVGProps } from './IIcons';
import React from 'react';

const CloseIcon: React.FC<SVGProps> = ({
  color = COLOR_PALETTE['grey-500'],
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloseIcon;
