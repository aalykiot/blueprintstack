import React, { useState } from 'react';
import './notification.scss';

const Notification = () => {
  const [isShowing, setIsShowing] = useState(true);

  return (
    <React.Fragment>
      {isShowing && (
        <div className="notification" onClick={() => setIsShowing(false)}>
          <div className="notification-title">Welcome to the playground!</div>
          <div className="notification-body">
            This playground is still in <strong>BETA</strong> so some bugs may
            appear. If you want to contribute to this project feel free to visit
            our{' '}
            <strong>
              <a
                href="https://github.com/alexalikiotis/blueprint-dash"
                target="_blank"
                rel="noreferrer noopener"
              >
                GitHub
              </a>
            </strong>{' '}
            repo.
          </div>
          <div className="notification-footer">Thank you, 🖖🎉❤️</div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Notification;
