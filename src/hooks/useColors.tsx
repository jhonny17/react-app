import { useState, useEffect } from 'react';

type Color = string | undefined;

const getColor = (style: CSSStyleDeclaration, propertyName: string) => {
  if (!style || propertyName.length <= 0) return;
  const propertyValue = style.getPropertyValue(propertyName).trim();
  if (propertyValue.length <= 0) return;
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

  return { white, primary };
};

export default useColors;
