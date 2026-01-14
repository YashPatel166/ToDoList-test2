import { useState, useRef, useEffect } from 'react';

export const useFocus = () => {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef(null);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener('focus', handleFocus);
      node.addEventListener('blur', handleBlur);
      return () => {
        node.removeEventListener('focus', handleFocus);
        node.removeEventListener('blur', handleBlur);
      };
    }
  }, []);

  return [ref, isFocused];
};

export default useFocus;

