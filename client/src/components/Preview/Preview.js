import React from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import injectSheet from 'react-jss';
import { useQuery } from '@apollo/react-hooks';

import styles from './PreviewStyles';

import { GET_PREVIEW } from '../../graphql/queries';

const Preview = ({ classes }) => {
  // Apollo hooks
  const { data } = useQuery(GET_PREVIEW);

  return (
    <React.Fragment>
      {!data.preview ? (
        <div className={classes.empty} />
      ) : (
        <Frame
          className={classes.iframe}
          allowFullScreen
          sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"
        >
          <FrameContextConsumer>
            {({ window, document }) => {
              window.location = 'about:blank';
              document.write(data.preview);
            }}
          </FrameContextConsumer>
        </Frame>
      )}
    </React.Fragment>
  );
};

export default injectSheet(styles)(Preview);
