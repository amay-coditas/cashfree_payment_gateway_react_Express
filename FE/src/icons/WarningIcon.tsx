import { COLOR_PALETTE } from 'constants/colorPalette';
import { SVGProps } from './IIcons';
import React from 'react';

const WarningIcon: React.FC<SVGProps> = ({
  color = COLOR_PALETTE['warning-color'],
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 17"
    fill="none"
    {...props}
  >
    <path
      d="M9.9999 6.16667V9.50001M9.9999 12.8333H10.0082M8.5749 1.88334L1.51656 13.6667C1.37104 13.9187 1.29403 14.2044 1.29322 14.4954C1.2924 14.7865 1.3678 15.0726 1.51192 15.3254C1.65603 15.5783 1.86383 15.789 2.11465 15.9366C2.36547 16.0841 2.65056 16.1635 2.94156 16.1667H17.0582C17.3492 16.1635 17.6343 16.0841 17.8851 15.9366C18.136 15.789 18.3438 15.5783 18.4879 15.3254C18.632 15.0726 18.7074 14.7865 18.7066 14.4954C18.7058 14.2044 18.6288 13.9187 18.4832 13.6667L11.4249 1.88334C11.2763 1.63843 11.0672 1.43594 10.8176 1.29541C10.568 1.15488 10.2863 1.08105 9.9999 1.08105C9.71345 1.08105 9.43184 1.15488 9.18223 1.29541C8.93263 1.43594 8.72345 1.63843 8.5749 1.88334Z"
      stroke={color}
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default WarningIcon;
