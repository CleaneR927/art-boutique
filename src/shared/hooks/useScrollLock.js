import { useEffect } from 'react';

const useScrollLock = (isLocked) => {
  useEffect(() => {
    const preventScroll = (event) => {
      event.preventDefault();
    };

    if (isLocked) {
      window.addEventListener('wheel', preventScroll, { passive: false });
      window.addEventListener('touchmove', preventScroll, { passive: false });
    } else {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    }

    return () => {
      window.removeEventListener('wheel', preventScroll);
      window.removeEventListener('touchmove', preventScroll);
    };
  }, [isLocked]);
};

export default useScrollLock;
