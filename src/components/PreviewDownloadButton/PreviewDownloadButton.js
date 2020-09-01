import React, { useState } from 'react';
import { IoMdDownload } from 'react-icons/io';

import useFileDownload from 'src/hooks/fileDownload';

const CSS = {
  container: 'absolute z-10 flex items-center text-white cursor-pointer',
  button: 'p-2 bg-indigo-600 rounded-full flex items-center justify-center',
  text: 'text-xs font-semibold mx-1',
};

const PreviewDownloadButton = ({ html, name }) => {
  const [isHovering, setHovering] = useState(false);
  const { download } = useFileDownload(html, name);

  return (
    <div
      className={CSS.container}
      style={{ top: 12, right: 12 }}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className={CSS.button} onClick={download}>
        <IoMdDownload color="#fffff" size={18} />
        {isHovering && <div className={[CSS.text]}>Download HTML</div>}
      </div>
    </div>
  );
};

export default PreviewDownloadButton;
