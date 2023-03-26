import React, { useEffect, useState } from 'react';

const ScreenSize: React.FC = () => {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      Screen width: {screenSize.width}px<br />
      Screen height: {screenSize.height}px
    </div>
  );
};

export default ScreenSize;