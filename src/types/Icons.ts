import { FC } from 'react';

export type IconProps = {
  size: number;
  width?: number;
  height?: number;
  color?: string;
  className?: string;
};

type Icon = FC<IconProps>;

export type LogoIcon = Icon;
export type HomeIcon = Icon;
export type StoreIcon = Icon;
export type GoogleIcon = Icon;

export default Icon;
