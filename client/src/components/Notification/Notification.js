import React from 'react';
import injectSheet from 'react-jss';

import styles from './NotificationStyles';

const Notification = ({ classes, onClick }) => {
  return (
    <div className={classes.notification} onClick={onClick}>
      <div className={classes.title}>Welcome to the playground!</div>
      <div className={classes.body}>
        This playground is still in <strong>BETA</strong> so some bugs may
        appear. If you want to contribute to this project feel free to visit our{' '}
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
      <div className={classes.footer}>Thank you, 🖖🎉❤️</div>
    </div>
  );
};

export default injectSheet(styles)(Notification);
