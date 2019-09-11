import React from 'react';
import { useSelector } from 'react-redux';

const NotificationCenter = () => {
  const notifications = useSelector(state => state);
  return (
    <div>
      <h1>Notifications</h1>
    </div>
  );
};

export default NotificationCenter;
