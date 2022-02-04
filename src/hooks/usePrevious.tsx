import { useEffect, useState } from 'react';

const usePrevious = <T,>(value: T) => {
  const [[previous, current], setPrevious] = useState<(undefined | T)[]>([
    undefined,
    value,
  ]);

  useEffect(() => {
    if (current === value) return;
    setPrevious([current, value]);
  }, [current, value]);

  return previous;
};

export default usePrevious;
