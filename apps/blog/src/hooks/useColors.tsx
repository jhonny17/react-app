import { useEffect, useState } from 'react';

type Color = string | null;

const ZERO_ELEMENTS = 0;

const getColor = (style: CSSStyleDeclaration, propertyName: string) => {
  if (propertyName.length <= ZERO_ELEMENTS) return null;
  const propertyValue = style.getPropertyValue(propertyName).trim();
  if (propertyValue.length <= ZERO_ELEMENTS) return null;
  return `hsl(${propertyValue})`;
};

const useColors = () => {
  const [white, setWhite] = useState<Color>();
  const [primary, setPrimary] = useState<Color>();

  useEffect(() => {
    const style = getComputedStyle(document.documentElement);
    setWhite(getColor(style, '--white'));
    setPrimary(getColor(style, '--primary'));
  }, []);

  return { primary, white };
};

export default useColors;
