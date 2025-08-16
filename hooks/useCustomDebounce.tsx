// src/hooks/useCustomDebounce.tsx
import { useState, useEffect } from 'react';

// Assuming value is of type string and delay is of type number
function useCustomDebounce(value: string, delay: number): string {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useCustomDebounce;