import { useMemo } from 'react';
import Frame, { FrameContextConsumer } from 'react-frame-component';

const CSS = {
  iframe: 'w-full h-full',
};

const PreviewFrame = ({ html }) =>
  useMemo(() => {
    return (
      <Frame
        className={CSS.iframe}
        allowFullScreen
        sandbox="allow-forms allow-modals allow-pointer-lock allow-popups allow-presentation allow-same-origin allow-scripts"
      >
        <FrameContextConsumer>
          {({ document }) => {
            document.open();
            document.write(html);
            document.close();
          }}
        </FrameContextConsumer>
      </Frame>
    );
  }, [html]);

export default PreviewFrame;
