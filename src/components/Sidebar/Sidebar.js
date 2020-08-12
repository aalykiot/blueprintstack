import { useState } from 'react';
import { IoIosFolderOpen, IoMdAdd, IoLogoGithub } from 'react-icons/io';
import TreeView from 'src/components/TreeView';

const CSS = {
  sidebar: 'flex flex-col w-56 bg-gray-900 px-4',
  header: 'flex items-center justify-between my-4',
  headerLeft: 'flex items-center',
  headerTitle: 'text-gray-400 font-bold text-sm',
  headerFolderIcon: 'text-gray-600 mr-2',
  headerPlusIcon: 'text-gray-300 cursor-pointer',
  footer: 'flex w-full justify-between py-4 text-gray-600',
  version: 'font-mono font-semibold text-sm',
  github: 'cursor-pointer hover:text-gray-400',
};

const Sidebar = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  return (
    <div className={CSS.sidebar}>
      <div className={CSS.header}>
        <div className={CSS.headerLeft}>
          <IoIosFolderOpen className={CSS.headerFolderIcon} size={19} />
          <h2 className={CSS.headerTitle}>BLUEPRINTS</h2>
        </div>
        <IoMdAdd
          className={CSS.headerPlusIcon}
          size={19}
          onClick={() => setIsFormOpen(true)}
        />
      </div>
      <TreeView isFormOpen={isFormOpen} setIsFormOpen={setIsFormOpen} />
      <div className={CSS.footer}>
        <a
          href="https://github.com/alexalikiotis/blueprintstack"
          target="_blank"
          rel="noreferrer"
        >
          <IoLogoGithub className={CSS.github} size={25} />
        </a>
        <span className={CSS.version}>v2.0.0</span>
      </div>
    </div>
  );
};

export default Sidebar;
