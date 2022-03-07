import React from 'react';
import useColors from 'hooks/useColors';
import { LogoIcon, IconProps } from 'types/Icons';

const LogoIcon: LogoIcon = ({ size, color, className }: IconProps) => {
  const { primary } = useColors();

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
      width={size}
      height={size}
      className={className ?? ''}
    >
      <title>React Logo</title>
      <circle cx="0" cy="0" r="2.05" fill={color ?? primary} />
      <g stroke={color ?? primary} strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
};

export default LogoIcon;
