import React from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import { Query } from 'react-apollo';

import injectSheet from 'react-jss';
import { gql } from 'apollo-boost';

import styles from './PreviewStyles';

const GET_PREVIEW = gql`
  {
    preview @client
  }
`;

const Preview = ({ classes }) => {
  return (
    <div className={classes.iframeWrapper}>
      <Query query={GET_PREVIEW}>
        {({ data }) => {
          if (!data.preview) return <div className={classes.empty} />;
          return (
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
          );
        }}
      </Query>
    </div>
  );
};

export default injectSheet(styles)(Preview);
