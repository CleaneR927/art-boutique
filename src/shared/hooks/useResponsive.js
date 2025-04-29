import { useEffect, useState } from 'react';

const useResponsive = (breakpoint, responsiveMap) => {
  const [currentValue, setCurrentValue] = useState(responsiveMap.desktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < breakpoint) {
        setCurrentValue(responsiveMap.mobile);
      } else {
        setCurrentValue(responsiveMap.desktop);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoint, responsiveMap]);

  return currentValue;
};

export default useResponsive;
