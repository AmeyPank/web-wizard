import React, { useEffect, useState } from 'react';
import './TrafficLight.css'; // You can create a CSS file to style the traffic light

const TrafficLight = () => {
  const [currentLight, setCurrentLight] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLight((prevLight) => {
        switch (prevLight) {
          case 'red':
            return 'green';
          case 'green':
            return 'yellow';
          case 'yellow':
            return 'red';
          default:
            return 'red';
        }
      });
    }, getDuration(currentLight));

    return () => clearInterval(interval);
  }, [currentLight]);

  const getDuration = (light) => {
    switch (light) {
      case 'red':
        return 4000;
      case 'yellow':
        return 500;
      case 'green':
        return 3000;
      default:
        return 4000;
    }
  };

  return (
    <div className="traffic-light">
      <div
        className={`light red ${currentLight === 'red' ? 'active' : ''}`}
      ></div>
      <div
        className={`light yellow ${
          currentLight === 'yellow' ? 'active' : ''
        }`}
      ></div>
      <div
        className={`light green ${
          currentLight === 'green' ? 'active' : ''
        }`}
      ></div>
    </div>
  );
};

export default TrafficLight;
