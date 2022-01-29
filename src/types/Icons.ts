import { FC } from 'react';

export type IconProps = {
  size: number;
  color?: string;
  className?: string;
};

type Icon = FC<IconProps>;
export default Icon;

export type LogoIcon = Icon;
export type HomeIcon = Icon;
export type StoreIcon = Icon;