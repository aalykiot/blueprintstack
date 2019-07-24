import React from 'react';
import injectSheet from 'react-jss';
import { FaPlay, FaCog } from 'react-icons/fa';

import styles from './HeaderStyles';

const Header = ({ classes }) => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>BlueprintDash</div>
      <div className={classes.options}>
        <div className={classes.optionButton}>
          <FaPlay />
          <span className={classes.optionButtonText}>Run</span>
        </div>
        <div className={classes.optionButton}>
          <FaCog />
          <span className={classes.optionButtonText}>Settings</span>
        </div>
      </div>
    </header>
  );
};

export default injectSheet(styles)(Header);
