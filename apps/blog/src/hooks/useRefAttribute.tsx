import { RefObject, useLayoutEffect, useRef, useState } from 'react';

const useRefAttribute = <T extends HTMLElement[keyof HTMLElement] | null>(
  attributeName: keyof HTMLElement,
  defaultAttributeValue?: T
): [RefObject<HTMLElement>, T | null] => {
  const elementRef = useRef<HTMLElement>(null);
  const temporalValue = useRef<T | null>(null);
  const [attributeValue, setAttributeValue] = useState<T | null>(defaultAttributeValue ?? null);

  const getAttributeValue = () => {
    if (!elementRef.current) {
      temporalValue.current = null;
      setAttributeValue(defaultAttributeValue ?? null);
      return;
    }

    const newAttributeValue = (elementRef.current[attributeName] as T) ?? defaultAttributeValue ?? null;

    if (attributeValue === newAttributeValue || temporalValue.current === newAttributeValue) return;
    temporalValue.current = newAttributeValue;
    setAttributeValue(newAttributeValue);
  };

  useLayoutEffect(() => {
    getAttributeValue();
  });

  return [elementRef, attributeValue];
};

export default useRefAttribute;
