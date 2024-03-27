import { useEffect, useState } from "react";

export const useDebounceSearch = (value: string, delay = 500) => {
  const [debauncedValue, setDebauncedValue] = useState<string>();

  useEffect(() => {
    if (value == "") {
      setDebauncedValue(value);
      return;
    }

    const timeout = setTimeout(() => {
      setDebauncedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debauncedValue;
};
