import { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

const Image = ({ src, placeholder, className }) => {
  const image = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (image.current && image.current.complete) {
      setImageLoaded(true);
    }
  }, []);

  return (
    <>
      <img
        src={src}
        className={classnames({ [className]: true, hidden: !imageLoaded })}
        ref={image}
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && (
        <img src={placeholder} className={`${className} blur-image`} />
      )}
    </>
  );
};

export default Image;
