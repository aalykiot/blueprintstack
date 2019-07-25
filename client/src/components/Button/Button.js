import React from 'react';
import injectSheet from 'react-jss';
import { ThreeBounce } from 'better-react-spinkit';

import styles from './ButtonStyles';

const Button = ({ classes, text, icon, loading, onClick }) => {
  const handleOnClick = () => {
    if (!loading && onClick) onClick();
  };

  return (
    <div
      className={loading ? classes.buttonLoading : classes.button}
      onClick={handleOnClick}
    >
      {loading ? (
        <ThreeBounce color="#fff" />
      ) : (
        <React.Fragment>{icon}</React.Fragment>
      )}
      <span className={classes.buttonText}>{text}</span>
    </div>
  );
};

export default injectSheet(styles)(Button);
