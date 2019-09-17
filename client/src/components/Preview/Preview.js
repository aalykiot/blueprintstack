import React from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';
import { connect } from 'react-redux';
import './preview.scss';

const Preview = ({ previewHTML }) => {
  return (
    <React.Fragment>
      {!previewHTML ? (
        <div className="preview_empty"></div>
      ) : (
        <Frame
          className="preview_iframe"
          allowFullScreen
          sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"
        >
          <FrameContextConsumer>
            {({ window, document }) => {
              document.open();
              document.write(previewHTML);
              document.close();
            }}
          </FrameContextConsumer>
        </Frame>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  previewHTML: state.preview.html,
});

export default connect(mapStateToProps)(Preview);
