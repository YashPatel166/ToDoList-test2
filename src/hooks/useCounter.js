import { useState, useCallback } from 'react';

export const useCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState(initialValue);

  const increment = useCallback(() => setCount((c) => c + step), [step]);
  const decrement = useCallback(() => setCount((c) => c - step), [step]);
  const reset = useCallback(() => setCount(initialValue), [initialValue]);
  const setValue = useCallback((value) => setCount(value), []);

  return { count, increment, decrement, reset, setValue };
};

export default useCounter;

