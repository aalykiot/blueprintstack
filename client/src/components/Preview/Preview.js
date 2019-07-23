import React from 'react';
import injectSheet from 'react-jss';

const Preview = ({ classes }) => {
  return <div className={classes.empty} />;
};

const styles = {
  empty: {
    background: 'radial-gradient(#ffffff, #ced6e0)',
    width: '100%',
    height: '100%',
  },
};

export default injectSheet(styles)(Preview);
