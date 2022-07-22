import { useEffect, useState } from 'react';

const usePrevious = <T,>(value: T) => {
  const [previousState, setPreviousState] = useState<(T | null)[]>([null, value]);
  const [previous, current] = previousState;

  useEffect(() => {
    if (current === value) return;
    setPreviousState([current, value]);
  }, [current, value]);

  return previous;
};

export default usePrevious;
