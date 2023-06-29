import { useCallback, useState } from 'react';

export const useChangeBottom = () => {
  const [isBottom, setIsBottom] = useState<boolean>(false);
  const changeBottom = useCallback(() => {
    const bottomPosition = document.body.offsetHeight - (window.scrollY + window.innerHeight);
    if (bottomPosition < 55) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  }, []);
  return { isBottom, changeBottom };
};
