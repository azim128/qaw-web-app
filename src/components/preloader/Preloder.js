import React, { useEffect, useState } from 'react';
import Routing from '../routing/Routing';
import './preloader.css';

const Preloder = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      {isLoading ? <div id='preloader' className="preloader">
      <div className="spinner"></div>
    </div> : <Routing/>}
    </div>
  );
};

export default Preloder;
