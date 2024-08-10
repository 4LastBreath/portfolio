import { useState, useEffect } from 'react';

export const useCurrentWidth = () => {

  const [currentWidth, setCurrentWidth] = useState(window.innerWidth)

  useEffect(() => {

    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return {
    currentWidth,
    tablet: currentWidth >= 800,
  };
};