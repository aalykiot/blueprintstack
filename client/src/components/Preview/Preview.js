import React from 'react';
import injectSheet from 'react-jss';

import styles from './PreviewStyles';

const Preview = ({ classes }) => {
  return <div className={classes.empty} />;
};

export default injectSheet(styles)(Preview);
