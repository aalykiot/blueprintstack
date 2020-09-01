import { useCallback } from 'react';
import { saveAs } from 'file-saver';

const useFileDownload = (html, name) => {
  const download = useCallback(() => {
    const filename = `${name}.html`;
    const blob = new Blob([html], { type: 'text/html' });

    saveAs(blob, filename);
  }, [html, name]);

  return { download };
};

export default useFileDownload;
