// eslint-disable-next-line react-hooks/exhaustive-deps
import { useEffect, useState } from 'react';

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    // delay never changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value]
  );

  return debouncedValue;
}