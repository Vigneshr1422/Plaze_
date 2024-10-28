// Notification.js
import React from 'react';

const Notification = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 right-0 mt-4 mr-4 bg-green-500 text-white p-4 rounded-lg shadow-md transition-transform transform translate-y-0" style={{ zIndex: 1000 }}>
      {message}
      <button onClick={onClose} className="ml-4 text-white hover:underline">Close</button>
    </div>
  );
};

export default Notification;
