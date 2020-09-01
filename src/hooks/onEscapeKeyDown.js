import { useEffect } from 'react';

const ESCAPE_KEY = 27;

const useOnEscapeKeyDown = (isListening, onEscapeKeyDown) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.keyCode === ESCAPE_KEY) {
        onEscapeKeyDown();
      }
    };

    if (isListening) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isListening, onEscapeKeyDown]);
};

export default useOnEscapeKeyDown;
